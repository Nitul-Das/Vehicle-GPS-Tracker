import React, { useState, useEffect } from 'react';
import { fetchVehicles } from '../services/vehicleService';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import MapContainer from '../components/MapContainer';
import LoadingOverlay from '../components/LoadingOverlay';

function Dashboard() {
  const [vehicles, setVehicles] = useState([]);
  const [filteredVehicles, setFilteredVehicles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [countdown, setCountdown] = useState(10);
  const [filters, setFilters] = useState({
    vehicleId: 'all',
    minSpeed: 0,
    maxSpeed: 100,
    status: 'all',
  });
const [sidebarOpen, setSidebarOpen] = useState(false);

const handleSidebarToggle = () => setSidebarOpen(prev => !prev);


  // Fetch latest vehicle data and update state only if it has changed
  const loadVehicles = async () => {
    try {
      const data = await fetchVehicles();
      const isSame = JSON.stringify(vehicles) === JSON.stringify(data);
      if (!isSame) setVehicles(data);
      setError(null);
    } catch (err) {
      setError('Failed to load vehicle data');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  //  fetch vehicles, then repeat fetch every 10s and update countdown every 1s
  useEffect(() => {
    loadVehicles();
    const fetchInterval = setInterval(() => {
      loadVehicles();
      setCountdown(10);
    }, 10000);

    const countdownInterval = setInterval(() => {
      setCountdown(prev => (prev > 0 ? prev - 1 : 10));
    }, 1000);

    return () => {
      clearInterval(fetchInterval);
      clearInterval(countdownInterval);
    };
  }, []);
  

// Apply filters every time the vehicles data or filters change
useEffect(() => {
  applyFilters();
}, [vehicles, filters]);

// Function to apply all filter conditions
const applyFilters = () => {
  // Start with all vehicles
  let filtered = vehicles;

  // Filter by specific vehicle ID (if not 'all')
  if (filters.vehicleId !== 'all') {
    filtered = filtered.filter(vehicle => vehicle.id === filters.vehicleId);
  }

  // Filter vehicles within the selected speed range
  filtered = filtered.filter(
    vehicle =>
      vehicle.speed >= filters.minSpeed &&
      vehicle.speed <= filters.maxSpeed
  );

  // Filter by status (moving, parked, offline, etc.) if not 'all'
  if (filters.status !== 'all') {
    filtered = filtered.filter(
      vehicle =>
        vehicle.status.toLowerCase() === filters.status.toLowerCase()
    );
  }

  // Update the filteredVehicles state with the final list
  setFilteredVehicles(filtered);
};

// Function to update the filters state when a user applies or changes any filter
const updateFilters = newFilters => {
  // Merge the new filters with the previous ones
  setFilters(prev => ({ ...prev, ...newFilters }));
};

// Show loading screen while data is still loading
if (loading) return <LoadingOverlay />;


  return (
    <div className="flex flex-col h-screen bg-gray-900 overflow-hidden">
      <Header
        vehicleCount={filteredVehicles.length}
        totalVehicles={vehicles.length}
        countdown={countdown}
        onToggleSidebar={handleSidebarToggle}
        sidebarOpen={sidebarOpen}
      />

      <div className="flex-1 overflow-hidden flex flex-col md:flex-row">
       <div className="bg-gray-800 border-b md:border-b-0 md:border-r border-gray-700 w-full md:w-[26rem] h-1/2 md:h-auto overflow-y-auto">


          <div className="p-4 border-b border-gray-700">
            <h2 className="text-lg font-semibold text-white">Fleet Control</h2>
          </div>
          <Sidebar
            vehicles={vehicles}
            filteredVehicles={filteredVehicles}
            filters={filters}
            onFiltersChange={updateFilters}
          />
        </div>
        <div className="flex-1 overflow-auto">
          <MapContainer vehicles={filteredVehicles} />
        </div>
      </div>

      {error && (
        <div className="absolute bottom-4 right-4 bg-red-600 text-white px-4 py-2 rounded-lg shadow-lg">
          {error}
        </div>
      )}
    </div>
  );
}

export default Dashboard;
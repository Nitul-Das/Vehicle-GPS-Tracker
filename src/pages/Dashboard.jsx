import React, { useState, useEffect } from "react";
import { fetchVehicles } from "../services/vehicleService";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import MapContainer from "../components/MapContainer";
import LoadingOverlay from "../components/LoadingOverlay";

function Dashboard() {
  const [vehicles, setVehicles] = useState([]);
  const [filteredVehicles, setFilteredVehicles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [countdown, setCountdown] = useState(10);
  const [filters, setFilters] = useState({
    vehicleId: "all",
    minSpeed: 0,
    maxSpeed: 100,
    status: "all",
  });
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const handleSidebarToggle = () => setSidebarOpen((prev) => !prev);

  // Fetch vehicle data
  const loadVehicles = async () => {
    try {
      const data = await fetchVehicles();
      const isSame = JSON.stringify(vehicles) === JSON.stringify(data);
      if (!isSame) setVehicles(data);
      setError(null);
    } catch (err) {
      setError("Failed to load vehicle data");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  // Auto-fetch every 10s and update countdown every 1s
  useEffect(() => {
    loadVehicles();

    const fetchInterval = setInterval(() => {
      loadVehicles();
      setCountdown(10);
    }, 10000);

    const countdownInterval = setInterval(() => {
      setCountdown((prev) => (prev > 0 ? prev - 1 : 10));
    }, 1000);

    return () => {
      clearInterval(fetchInterval);
      clearInterval(countdownInterval);
    };
  }, []);

  // Apply filters
  useEffect(() => {
    applyFilters();
  }, [vehicles, filters]);

  const applyFilters = () => {
    let filtered = vehicles;

    if (filters.vehicleId !== "all") {
      filtered = filtered.filter((vehicle) => vehicle.id === filters.vehicleId);
    }

    filtered = filtered.filter(
      (vehicle) =>
        vehicle.speed >= filters.minSpeed && vehicle.speed <= filters.maxSpeed
    );

    if (filters.status !== "all") {
      filtered = filtered.filter(
        (vehicle) =>
          vehicle.status.toLowerCase() === filters.status.toLowerCase()
      );
    }

    setFilteredVehicles(filtered);
  };

  const updateFilters = (newFilters) => {
    setFilters((prev) => ({ ...prev, ...newFilters }));
  };

  if (loading) return <LoadingOverlay />;

  return (
    <div className="flex flex-col h-screen bg-gray-900 overflow-hidden md:overflow-hidden">
      <Header
        vehicleCount={filteredVehicles.length}
        totalVehicles={vehicles.length}
        countdown={countdown}
        onToggleSidebar={handleSidebarToggle}
        sidebarOpen={sidebarOpen}
      />

      {/* Main Content */}
      <div className="flex flex-col md:flex-row flex-1 overflow-auto md:overflow-hidden">
        {/* Sidebar */}
        <div className="bg-gray-800 border-b md:border-b-0 md:border-r border-gray-700 w-full md:w-[30rem] flex flex-col md:min-h-0">
          <div className="flex-1 md:overflow-y-auto overflow-x-hidden">
            <Sidebar
              vehicles={vehicles}
              filteredVehicles={filteredVehicles}
              filters={filters}
              onFiltersChange={updateFilters}
            />
          </div>
        </div>

        {/* Map */}
        <div className="flex-1 min-h-[70vh] md:h-full md:overflow-hidden">
          <div className="w-full h-full">
            <MapContainer vehicles={filteredVehicles} />
          </div>
        </div>
      </div>

      {/* Error Message */}
      {error && (
        <div className="absolute bottom-4 right-4 bg-red-600 text-white px-4 py-2 rounded-lg shadow-lg">
          {error}
        </div>
      )}
    </div>
  );
}

export default Dashboard;

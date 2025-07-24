import React from 'react';
import { Search, Gauge, Filter } from 'lucide-react';

const VehicleFilters = ({ vehicles, filters, onFiltersChange }) => {
  // Get unique vehicle IDs for dropdown
  const vehicleIds = ['all', ...vehicles.map(v => v.id)];
  const statusOptions = ['all', 'moving', 'parked', 'offline'];

  const handleVehicleIdChange = (e) => {
    onFiltersChange({ vehicleId: e.target.value });
  };

  const handleMinSpeedChange = (e) => {
    const minSpeed = parseInt(e.target.value);
    onFiltersChange({ minSpeed });
  };

  const handleMaxSpeedChange = (e) => {
    const maxSpeed = parseInt(e.target.value);
    onFiltersChange({ maxSpeed });
  };

  const handleStatusChange = (e) => {
    onFiltersChange({ status: e.target.value });
  };

  return (
    <div>
      <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wide mb-3 flex items-center">
        <Filter className="w-4 h-4 mr-2" />
        Vehicle Filters
      </h3>

      <div className="space-y-4">
        {/* Vehicle ID and Name Filter */}
       <div>
  <label className="block text-sm font-medium text-gray-300 mb-2">
    <Search className="w-4 h-4 inline mr-1" />
    Vehicles
  </label>
  <select
    value={filters.vehicleId}
    onChange={handleVehicleIdChange}
    className="w-full bg-gray-700 border border-gray-600 rounded-lg px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
  >
    <option value="all">All Vehicles</option>
    {vehicles.map(vehicle => (
      <option key={vehicle.id} value={vehicle.id}>
        {vehicle.id} - {vehicle.name}
      </option>
    ))}
  </select>
</div>

        {/* Status Filter */}
        <div>
          <label className="block text-sm font-medium text-gray-300 mb-2">
            Vehicle Status
          </label>
          <select
            value={filters.status}
            onChange={handleStatusChange}
            className="w-full bg-gray-700 border border-gray-600 rounded-lg px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            {statusOptions.map(status => (
              <option key={status} value={status}>
                {status === 'all' ? 'All Status' : status.charAt(0).toUpperCase() + status.slice(1)}
              </option>
            ))}
          </select>
        </div>

        {/* Speed Range Filter */}
        <div>
          <label className="block text-sm font-medium text-gray-300 mb-2">
            <Gauge className="w-4 h-4 inline mr-1" />
            Speed Range (km/h)
          </label>
          <div className="space-y-3">
            <div>
              <div className="flex justify-between text-xs text-gray-400 mb-1">
                <span>Min Speed</span>
                <span>{filters.minSpeed} km/h</span>
              </div>
              <input
                type="range"
                min="0"
                max="100"
                value={filters.minSpeed}
                onChange={handleMinSpeedChange}
                className="w-full"
              />
            </div>
            <div>
              <div className="flex justify-between text-xs text-gray-400 mb-1">
                <span>Max Speed</span>
                <span>{filters.maxSpeed} km/h</span>
              </div>
              <input
                type="range"
                min="0"
                max="100"
                value={filters.maxSpeed}
                onChange={handleMaxSpeedChange}
                className="w-full"
              />
            </div>
          </div>
        </div>


      </div>
    </div>
  );
};

export default VehicleFilters;
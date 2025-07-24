import React from 'react';
import VehicleFilters from './VehicleFilters';
import VehicleStats from './VehicleStats';
import VehicleList from './VehicleList';

const Sidebar = ({ vehicles, filteredVehicles, filters, onFiltersChange }) => {
  return (
    <div className="p-4 sm:p-5 md:p-6 space-y-6">
      {/* Filters */}
      <VehicleFilters
        vehicles={vehicles}
        filters={filters}
        onFiltersChange={onFiltersChange}
      />

      {/* Stats */}
      <VehicleStats vehicles={vehicles} filteredVehicles={filteredVehicles} />

      {/* Vehicle List */}
      <VehicleList vehicles={filteredVehicles} />
    </div>
  );
};

export default Sidebar;

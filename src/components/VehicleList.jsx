import React from 'react';
import {User,Fuel,Clock,MapPin} from 'lucide-react';
import {getVehicleIcon,getStatusColor,getStatusDot,} from '../utils/vehicleUtils';

const VehicleList = ({ vehicles }) => {
  if (vehicles.length === 0) {
    return (
      <div>
        <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wide mb-3">
          Vehicle List
        </h3>
        <div className="text-center py-8">
          <MapPin className="w-12 h-12 text-gray-600 mx-auto mb-3" />
          <p className="text-gray-500">No vehicles match the current filters</p>
        </div>
      </div>
    );
  }

  return (
    <div>
      <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wide mb-3">
        Vehicle List ({vehicles.length})
      </h3>

      <div className="space-y-2 max-h-96 overflow-y-auto scrollbar-dark">
        {vehicles.map((vehicle) => {
          const IconComponent = getVehicleIcon(vehicle.type);
          const statusColor = getStatusColor(vehicle.status);
          const statusDot = getStatusDot(vehicle.status);

          return (
            <div
              key={vehicle.id}
              className="bg-gray-700/50 rounded-lg p-3 border border-gray-600 hover:border-gray-500 transition-colors cursor-pointer"
            >
              <div className="flex items-start justify-between mb-2">
                <div className="flex items-center space-x-2">
                  <IconComponent className="w-4 h-4 text-blue-400" />
                  <div>
                    <div className="font-medium text-white text-sm">{vehicle.name}</div>
                    <div className="text-xs text-gray-400">{vehicle.id}</div>
                  </div>
                </div>
                <div className={`px-2 py-1 rounded-full text-xs font-medium ${statusColor}`}>
                  <div className="flex items-center space-x-1">
                    <div className={`w-2 h-2 rounded-full ${statusDot}`}></div>
                    <span>{vehicle.status}</span>
                  </div>
                </div>
              </div>

              <div className="space-y-1 text-xs text-gray-400">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-1">
                    <User className="w-3 h-3" />
                    <span>{vehicle.driver}</span>
                  </div>
                  <span className="font-mono text-white">{vehicle.speed} km/h</span>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-1">
                    <Fuel className="w-3 h-3" />
                    <span>Fuel: {vehicle.fuel}%</span>
                  </div>
                  <span className="text-gray-500">{vehicle.type}</span>
                </div>

                <div className="flex items-center space-x-1 text-[11px] text-gray-500 mt-1">
                  <Clock className="w-3 h-3" />
                  <span>
                    Last update:{' '}
                    {vehicle.lastUpdate
                      ? new Date(vehicle.lastUpdate).toLocaleTimeString('en-IN', {
                          hour: '2-digit',
                          minute: '2-digit',
                          second: '2-digit',
                        })
                      : 'Not available'}
                  </span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default VehicleList;

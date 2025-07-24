import React from 'react';
import { BarChart3, Activity, Pause, AlertTriangle } from 'lucide-react';

const VehicleStats = ({ vehicles, filteredVehicles }) => {
  const totalVehicles = vehicles.length;
  const filteredCount = filteredVehicles.length;

  // Calculate statistics
  const activeVehicles = vehicles.filter(v => v.status.toLowerCase() === 'moving').length;
  const parkedVehicles = vehicles.filter(v => v.status.toLowerCase() === 'parked').length;
  const offlineVehicles = vehicles.filter(v => v.status.toLowerCase() === 'offline').length;
  
  // Total speed of filtered vehicles ÷ Number of filtered vehicles

  const averageSpeed = filteredVehicles.length > 0 
    ? Math.round(filteredVehicles.reduce((sum, v) => sum + v.speed, 0) / filteredVehicles.length)
    : 0;

  const stats = [
    {
      label: 'Filtered',
      value: filteredCount,
      icon: BarChart3,
      color: 'text-blue-400',
      bg: 'bg-blue-900/30'
    },
    {
      label: 'Moving',
      value: activeVehicles,
      icon: Activity,
      color: 'text-green-400',
      bg: 'bg-green-900/30'
    },
    {
      label: 'Parked',
      value: parkedVehicles,
      icon: Pause,
      color: 'text-yellow-400',
      bg: 'bg-yellow-900/30'
    },
    {
      label: 'Offline',
      value: offlineVehicles,
      icon: AlertTriangle,
      color: 'text-red-400',
      bg: 'bg-red-900/30'
    }
  ];

  return (
    <div>
      <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wide mb-3">
        Vehicle Statistics
      </h3>

      <div className="grid grid-cols-2 gap-3 mb-4">
        {stats.map((stat, index) => {
          const IconComponent = stat.icon;
          return (
            <div key={index} className={`${stat.bg} rounded-lg p-3 border border-gray-700`}>
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-lg font-bold text-white">{stat.value}</div>
                  <div className="text-xs text-gray-400">{stat.label}</div>
                </div>
                <IconComponent className={`w-4 h-4 ${stat.color}`} />
              </div>
            </div>
          );
        })}
      </div>

      {/* Average Speed */}
      <div className="bg-gray-700/50 rounded-lg p-3 border border-gray-600">
        <div className="flex items-center justify-between">
          <div>
            <div className="text-lg font-bold text-white">{averageSpeed} km/h</div>
            <div className="text-xs text-gray-400">Average Speed</div>
          </div>
          <BarChart3 className="w-4 h-4 text-purple-400" />
        </div>
      </div>
    </div>
  );
};

export default VehicleStats;
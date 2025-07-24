import React from "react";
import { Marker, Popup } from "react-leaflet";
import { getEmoji, getColor, createCustomIcon } from "../utils/markerUtils";

const VehicleMarker = ({ vehicle }) => {
  const [lat, lng] = vehicle.position || [];
  if (lat == null || lng == null) return null;

  const emoji = getEmoji(vehicle.type);
  const color = getColor(vehicle.status);
  const icon = createCustomIcon(emoji, color);

  return (
    <Marker position={[lat, lng]} icon={icon}>
<Popup>
  <div className="p-2 sm:p-3 min-w-[180px] sm:min-w-[200px]">
    <h3 className="font-bold text-base sm:text-lg mb-2 sm:mb-3 text-gray-800">
      {emoji} {vehicle.name}
    </h3>
    <div className="space-y-1 sm:space-y-2 text-xs sm:text-sm">
      <div className="flex justify-between">
        <span className="font-medium">ID:</span>
        <span>{vehicle.id}</span>
      </div>
      <div className="flex justify-between">
        <span className="font-medium">Driver:</span>
        <span>{vehicle.driver}</span>
      </div>
      <div className="flex justify-between">
        <span className="font-medium">Type:</span>
        <span>{vehicle.type}</span>
      </div>
      <div className="flex justify-between">
        <span className="font-medium">Speed:</span>
        <span className="font-bold text-blue-600">{vehicle.speed} km/h</span>
      </div>
      <div className="flex justify-between">
        <span className="font-medium">Fuel:</span>
        <span>{vehicle.fuel}%</span>
      </div>
      <div className="flex justify-between">
        <span className="font-medium">Status:</span>
        <span className={`capitalize px-1.5 py-0.5 rounded text-[10px] sm:text-xs font-medium ${
          vehicle.status.toLowerCase() === 'active' ? 'bg-green-100 text-green-800' :
          vehicle.status.toLowerCase() === 'idle' ? 'bg-yellow-100 text-yellow-800' :
          vehicle.status.toLowerCase() === 'maintenance' ? 'bg-red-100 text-red-800' :
          'bg-gray-100 text-gray-800'
        }`}>
          {vehicle.status}
        </span>
      </div>
      <div className="flex justify-between">
        <span className="font-medium">Coordinates:</span>
        <span className="text-[10px] sm:text-xs">{lat.toFixed(4)}, {lng.toFixed(4)}</span>
      </div>
      {vehicle.lastUpdate && (
        <div className="pt-1 sm:pt-2 border-t border-gray-200">
          <span className="text-[10px] sm:text-xs text-gray-500">
            Last Update: {new Date(vehicle.lastUpdate).toLocaleTimeString()}
          </span>
        </div>
      )}
    </div>
  </div>
</Popup>

    </Marker>
  );
};

export default VehicleMarker;

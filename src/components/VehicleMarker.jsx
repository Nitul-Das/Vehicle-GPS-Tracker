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
        <div style={{ fontFamily: "sans-serif", fontSize: "12px" }}>
          <strong>{emoji} {vehicle.name}</strong><br />
          ID: {vehicle.id}<br />
          Driver: {vehicle.driver}<br />
          Type: {vehicle.type}<br />
          Status: {vehicle.status}<br />
          Speed: {vehicle.speed} km/h<br />
          Fuel: {vehicle.fuel}%<br />
          Location: {lat.toFixed(4)}, {lng.toFixed(4)}<br />
          Last Update: {new Date(vehicle.lastUpdate).toLocaleTimeString()}
        </div>
      </Popup>
    </Marker>
  );
};

export default VehicleMarker;

import React from "react";
import { MapContainer, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import VehicleMarker from "./VehicleMarker";
import RecenterButton from './RecenterButton';

const center = [26.1445, 91.7362]; // Your desired coordinates

const VehicleMap = ({ vehicles }) => {
  return (
    <MapContainer center={[26.1445, 91.7362]} zoom={13}  style={{ height: '100%', width: '100%' }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution="&copy; OpenStreetMap contributors"
      />
      {vehicles.map((vehicle) => (
        <VehicleMarker key={vehicle.id} vehicle={vehicle} />
      ))}

       <RecenterButton coords={center} />
    </MapContainer>
  );
};

export default VehicleMap;

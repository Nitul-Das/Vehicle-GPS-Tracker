import {
  Truck,
  Bus,
  Car,
  Package,
  ShieldCheck,
  GraduationCap,
  Siren,
  MapPin,
} from "lucide-react";

// Return the appropriate icon component
export const getVehicleIcon = (type) => {
  switch (type?.toLowerCase()) {
    case "truck":
      return Truck;
    case "bus":
      return Bus;
    case "taxi":
    case "car":
      return Car;
    case "delivery":
      return Package;
    case "police":
      return ShieldCheck;
    case "school bus":
      return GraduationCap;
    case "ambulance":
      return Siren;
    default:
      return MapPin;
  }
};

// Status label color (text + background)
export const getStatusColor = (status) => {
  switch (status?.toLowerCase()) {
    case "moving":
    case "active":
      return "text-green-400 bg-green-900/30";
    case "parked":
    case "idle":
      return "text-yellow-400 bg-yellow-900/30";
    case "offline":
    case "maintenance":
      return "text-red-400 bg-red-900/30";
    default:
      return "text-gray-400 bg-gray-900/30";
  }
};

// Small dot color
export const getStatusDot = (status) => {
  switch (status?.toLowerCase()) {
    case "moving":
    case "active":
      return "bg-green-500";
    case "parked":
    case "idle":
      return "bg-yellow-500";
    case "offline":
    case "maintenance":
      return "bg-red-500";
    default:
      return "bg-gray-500";
  }
};

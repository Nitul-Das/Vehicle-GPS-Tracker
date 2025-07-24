import L from "leaflet";

// Create a custom emoji icon
export const createCustomIcon = (emoji, color) =>
  L.divIcon({
    html: `<div style="
      background: ${color};
      width: 32px;
      height: 32px;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 18px;
      font-weight: bold;
      color: white;
      border-radius: 50%;
      box-shadow: 0 2px 6px rgba(0,0,0,0.4);
    ">${emoji}</div>`,
    iconSize: [32, 32],
    className: "",
  });

export const getEmoji = (type) => {
  const emojis = {
    truck: "🚛",
    bus: "🚌",
    taxi: "🚕",
    car: "🚗",
    delivery: "📦",
    police: "🚓",
    "school bus": "🚐",
    ambulance: "🚑",
  };
  return emojis[type?.toLowerCase()] || "🚗";
};

export const getColor = (status) => {
  const colors = {
    moving: "#10b981",
    active: "#10b981",
    parked: "#f59e0b",
    idle: "#f59e0b",
    offline: "#ef4444",
    maintenance: "#ef4444",
  };
  return colors[status?.toLowerCase()] || "#6b7280";
};

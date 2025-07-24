import axios from "axios";

const API_URL = "https://687f45b2efe65e52008907e7.mockapi.io/vehicles";

// Fetch vehicles from the API using axios
export const fetchVehicles = async () => {
  try {
    const response = await axios.get(API_URL);
    const data = response.data;

    // Transform API data to match application format
    return data.map((vehicle) => ({
      id: vehicle.id,
      name: vehicle.name || `Vehicle ${vehicle.id}`,
      type: vehicle.type || "Car",
      position: Array.isArray(vehicle.position)
        ? [
            26.1445 + (Math.random() - 0.5) * 0.05, 
            91.7362 + (Math.random() - 0.5) * 0.05, 
          ]
        : [26.1445, 91.7362], 
      speed: vehicle.speed || 0,
      status: vehicle.status || "moving",
      driver: vehicle.driver || `Driver ${vehicle.id}`,
      fuel: vehicle.fuel || Math.floor(Math.random() * 60) + 40,
      lastUpdate: vehicle.lastUpdate || new Date().toISOString(),
    }));
  } catch (error) {
    console.error("Error fetching vehicles:", error);
    return getMockVehicles(); // fallback if API fails
  }
};


// Fallback mock data
const getMockVehicles = () => {
  return [
    {
      id: "V001",
      name: "Kamakhya Express",
      type: "Truck",
      position: [26.1445, 91.7362],
      speed: 45,
      status: "moving",
      driver: "Ramesh Kumar",
      fuel: 85,
      lastUpdate: new Date().toISOString(),
      color: "#10b981",
    },
    {
      id: "V002",
      name: "Brahmaputra Rider",
      type: "Bus",
      position: [26.1505, 91.742],
      speed: 35,
      status: "moving",
      driver: "Bijoy Sharma",
      fuel: 72,
      lastUpdate: new Date().toISOString(),
      color: "#10b981",
    },
    {
      id: "V003",
      name: "City Patrol",
      type: "Police",
      position: [26.138, 91.731],
      speed: 0,
      status: "parked",
      driver: "Inspector Das",
      fuel: 90,
      lastUpdate: new Date().toISOString(),
      color: "#f59e0b",
    },
    {
      id: "V004",
      name: "Emergency Response",
      type: "Ambulance",
      position: [26.152, 91.745],
      speed: 60,
      status: "moving",
      driver: "Dr. Priya",
      fuel: 68,
      lastUpdate: new Date().toISOString(),
      color: "#10b981",
    },
    {
      id: "V005",
      name: "School Runner",
      type: "School Bus",
      position: [26.14, 91.728],
      speed: 25,
      status: "moving",
      driver: "Maya Devi",
      fuel: 55,
      lastUpdate: new Date().toISOString(),
      color: "#10b981",
    },
    {
      id: "V006",
      name: "Quick Delivery",
      type: "Delivery",
      position: [26.148, 91.739],
      speed: 0,
      status: "offline",
      driver: "Ankit Singh",
      fuel: 40,
      lastUpdate: new Date().toISOString(),
      color: "#ef4444",
    },
    {
      id: "V007",
      name: "Nilachal Voyager",
      type: "Taxi",
      position: [26.135, 91.734],
      speed: 30,
      status: "moving",
      driver: "Gopal Bora",
      fuel: 78,
      lastUpdate: new Date().toISOString(),
      color: "#10b981",
    },
    {
      id: "V008",
      name: "Luit Runner",
      type: "Ambulance",
      position: [26.155, 91.748],
      speed: 0,
      status: "parked",
      driver: "Nurse Rita",
      fuel: 82,
      lastUpdate: new Date().toISOString(),
      color: "#f59e0b",
    },
    {
      id: "V009",
      name: "Metro Connector",
      type: "Bus",
      position: [26.142, 91.732],
      speed: 40,
      status: "moving",
      driver: "Mukesh Yadav",
      fuel: 65,
      lastUpdate: new Date().toISOString(),
      color: "#10b981",
    },
    {
      id: "V010",
      name: "Cargo Master",
      type: "Truck",
      position: [26.146, 91.741],
      speed: 50,
      status: "moving",
      driver: "Suresh Kalita",
      fuel: 75,
      lastUpdate: new Date().toISOString(),
      color: "#10b981",
    },
  ];
};
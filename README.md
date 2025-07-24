# 🚗 Vehicle GPS Tracking UI with Live Map Display

A responsive React.js web application to visualize vehicle positions using Leaflet and a mock API. Designed for fleet monitoring, filtering, and status tracking.

---

## 📦 Tech Stack

- **Frontend Framework**: React.js (via Vite)
- **Map Library**: React Leaflet + Leaflet
- **Icons**: Lucide React
- **Styling**: Tailwind CSS
- **HTTP Requests**: Axios
- **Mock API**: [MockAPI](https://687f45b2efe65e52008907e7.mockapi.io/vehicles)

---

## 📁 Folder Structure

src/
├── components/
│ ├── Header.jsx
│ ├── LoadingOverlay.jsx
│ ├── MapContainer.jsx
│ ├── Sidebar.jsx
│ ├── VehicleFilters.jsx
│ ├── VehicleList.jsx
│ ├── VehicleMap.jsx
│ ├── VehicleMarker.jsx
│ └── VehicleStats.jsx
├── pages/
│ └── Dashboard.jsx
├── services/
│ └── vehicleService.js
├── utils/
│ ├── markerUtils.js
│ └── vehicleUtils.js

yaml
Copy
Edit

---

## 🚀 Getting Started

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/your-username/vehiclegpstracker.git
cd vehiclegpstracker
2️⃣ Install Dependencies
bash
Copy
Edit
npm install
3️⃣ Start the Development Server
bash
Copy
Edit
npm run dev
Visit http://localhost:5173 in your browser.

🗺️ Features
📍 Live Map with vehicle markers

🔄 Auto-refresh every 10 seconds

🧠 Smart filtering by:

Vehicle ID

Speed range

Status (moving, parked, offline)

📊 Vehicle stats (count, average speed, type breakdown)

🧾 Marker popups with vehicle details

📱 Fully responsive design

🔁 API & Data Flow
✅ Mock API Endpoint
h
Copy
Edit
GET https://687f45b2efe65e52008907e7.mockapi.io/vehicles
📌 Data Format
Each vehicle has:

json
Copy
Edit
{
  "id": "V001",
  "name": "Kamakhya Express",
  "type": "Truck",
  "position": [26.1445, 91.7362],
  "speed": 45,
  "status": "moving",
  "driver": "Ramesh Kumar",
  "fuel": 85,
  "lastUpdate": "2025-07-24T14:00:00Z"
}
If the API fails, fallback mock data is used.

🧠 UI Flow
Dashboard.jsx initializes and fetches vehicle data every 10s.

Vehicles are filtered based on selected criteria.

Sidebar displays filters, vehicle list, and stats.

MapContainer shows filtered vehicles on map.

Clicking a marker opens a popup with live details.


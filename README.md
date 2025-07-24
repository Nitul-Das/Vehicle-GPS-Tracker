🚗Vehicle GPS Tracking UI with Live Map Display

A responsive React.js application to display real-time vehicle positions on a map using Leaflet.js. It fetches vehicle data from a mock API, updates every 10 seconds, and includes filtering, statistics, and a visually clean UI.

Table of Contents:

Features

Tech Stack

Prerequisites

Setup and Installation

Clone the Repository

Install Dependencies

Start the Development Server

Folder Structure

API and Data Flow

UI Flow

Demo

Author

Features:

Live map display using Leaflet.js and OpenStreetMap

Periodic vehicle data fetching every 10 seconds

Interactive markers with custom icons and popups

Sidebar with filters (by vehicle ID, speed, and status)

Vehicle statistics: moving, parked, offline, average speed

Countdown timer for next update

Responsive design

Loading overlay and error handling

Tech Stack:

Frontend: React.js, Tailwind CSS, React Leaflet, Lucide Icons

API: MockAPI or fallback mock data via axios

Map: Leaflet.js (OpenStreetMap tiles)

Prerequisites:

Node.js and npm installed on your machine

Internet connection to fetch data from mock API

Setup and Installation:

Clone the Repository
git clone https://github.com/yourusername/vehicle-gps-tracker.git

Navigate to the Project
cd vehicle-gps-tracker

Install Dependencies
npm install

Start the Development Server
npm run dev

The app should now be running at http://localhost:5173

Folder Structure:

src/
├── components/
│ ├── Header.jsx
│ ├── Sidebar.jsx
│ ├── VehicleList.jsx
│ ├── VehicleFilters.jsx
│ ├── VehicleStats.jsx
│ ├── VehicleMap.jsx
│ ├── VehicleMarker.jsx
│ ├── LoadingOverlay.jsx
├── pages/
│ └── Dashboard.jsx
├── services/
│ └── vehicleService.js
├── utils/
│ ├── markerUtils.js
│ └── vehicleUtils.js
├── main.jsx
└── index.css

API and Data Flow:

Vehicle data is fetched from:
https://687f45b2efe65e52008907e7.mockapi.io/vehicles

If the API fails, mock data is used as fallback

Each vehicle object contains:
id, name, type, position (lat, lng), speed, status, driver, fuel, lastUpdate

Data updates every 10 seconds using setInterval

Filtering is applied based on selected ID, speed range, and status

UI Flow:

App loads with a loading screen

Fetches initial vehicle data

Displays sidebar with filters and stats

Shows live map with markers

Every 10 seconds, data is refreshed

Countdown shows remaining seconds for next update

User can interact with markers and filters

Demo:

Add your Loom or screen recording link here
Example: https://loom.com/share/demo-link

Author:

Project by [Your Name]
GitHub: https://github.com/yourusername


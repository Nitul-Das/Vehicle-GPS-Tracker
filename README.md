# 🚗 Vehicle GPS Tracking UI with Live Map Display

A responsive React.js application to display real-time vehicle positions on a map using Leaflet.js. It fetches vehicle data from a mock API, updates every 10 seconds, and includes filtering, statistics, and a visually clean UI.

## 🚀 Live Demo

**[View Live Application](https://vehicle-gps-tracker.vercel.app/)**

## Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Prerequisites](#prerequisites)
- [Setup and Installation](#setup-and-installation)
  - [Clone the Repository](#clone-the-repository)
  - [Install Dependencies](#install-dependencies)
  - [Start the Development Server](#start-the-development-server)
- [Folder Structure](#folder-structure)
- [API and Data Flow](#api-and-data-flow)
- [UI Flow](#ui-flow)
- [Demo](#demo)
- [Live Demo](#live-demo)
- [Author](#author)

## Features

- Live map display using Leaflet.js and OpenStreetMap
- Uses OpenStreetMap tiles for map rendering
- Periodic vehicle data fetching every 10 seconds
- Interactive markers with custom icons and popups
- Click markers to view vehicle details (ID, last update time, speed)
- Sidebar with filters (by vehicle ID, speed, and status)
- Vehicle statistics: moving, parked, offline, average speed
- Countdown timer for next update
- Responsive design
- Loading overlay and error handling

## Tech Stack

- **Frontend:** React.js, Tailwind CSS, React Leaflet, Lucide Icons
- **API:** MockAPI or fallback mock data via axios
- **Map:** Leaflet.js (OpenStreetMap tiles)

## Prerequisites

- Node.js and npm installed on your machine
- Internet connection to fetch data from mock API

## Setup and Installation

### Clone the Repository

```bash
git clone https://github.com/yourusername/vehicle-gps-tracker.git
```

### Navigate to the Project

```bash
cd vehicle-gps-tracker
```

### Install Dependencies

```bash
npm install
```

### Start the Development Server

```bash
npm run dev
```

The app should now be running at http://localhost:5173

## Folder Structure

```
src/
├── components/
│   ├── Header.jsx
│   ├── Sidebar.jsx
│   ├── VehicleList.jsx
│   ├── VehicleFilters.jsx
│   ├── VehicleStats.jsx
│   ├── VehicleMap.jsx
│   ├── VehicleMarker.jsx
│   └── LoadingOverlay.jsx
├── pages/
│   └── Dashboard.jsx
├── services/
│   └── vehicleService.js
├── utils/
│   ├── markerUtils.js
│   └── vehicleUtils.js
├── main.jsx
└── index.css
```

## API and Data Flow

- Vehicle data is fetched from: `https://687f45b2efe65e52008907e7.mockapi.io/vehicles`
- If the API fails, mock data is used as fallback
- Each vehicle object contains: `id`, `name`, `type`, `position` (lat, lng), `speed`, `status`, `driver`, `fuel`, `lastUpdate`
- Data updates every 10 seconds using `setInterval`
- Filtering is applied based on selected ID, speed range, and status
- Clicking any vehicle marker displays: Vehicle ID, last update time, and current speed

## UI Flow

1. App loads with a loading screen
2. Fetches initial vehicle data
3. Displays sidebar with filters and stats
4. Shows live map with markers
5. Every 10 seconds, data is refreshed
6. Countdown shows remaining seconds for next update
7. User can interact with markers and filters

## Demo

Add your Loom or screen recording link here

Example: https://loom.com/share/demo-link

## Author

**Project by [Nitul Das]**

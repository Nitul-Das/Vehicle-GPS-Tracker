import React from 'react';
import { Clock, MapPin, Users, Menu, X, Activity, Gauge } from 'lucide-react';

//  Calculate percentage: (vehicleCount / totalVehicles) * 100
const Header = ({ vehicleCount, totalVehicles, countdown, onToggleSidebar, sidebarOpen }) => {
  const activePercentage = totalVehicles > 0 ? Math.round((vehicleCount / totalVehicles) * 100) : 0;
  
  return (
    <header className="h-16 bg-slate-800/95 backdrop-blur-md border-b border-slate-700/50 shadow-lg">
      <div className="h-full flex items-center justify-between px-4 lg:px-6">
        {/* Left Section - Logo and Title */}
        <div className="flex items-center gap-3">
          {/* Mobile Menu Toggle */}
          <button
            onClick={onToggleSidebar}
            className="lg:hidden p-2 rounded-lg bg-slate-700/50 hover:bg-slate-600/50 transition-colors"
            aria-label="Toggle sidebar"
          >
            {sidebarOpen ? (
              <X className="w-5 h-5 text-white" />
            ) : (
              <Menu className="w-5 h-5 text-white" />
            )}
          </button>

          {/* Logo and Title */}
          <div className="flex items-center gap-2">
            <div className="relative">
              <MapPin className="w-7 h-7 text-blue-400" />
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-500 rounded-full animate-pulse" />
            </div>
            <div>
              <h1 className="text-white text-sm sm:text-base lg:text-xl font-bold tracking-tight">
                Vehicle GPS Tracker
              </h1>
              <p className="text-slate-400 text-xs lg:text-sm leading-none">
                Real-time Monitoring
              </p>
            </div>
          </div>
        </div>

        {/* Right Section - Stats and Controls */}
        <div className="flex items-center gap-2 lg:gap-4">
          {/* Vehicle Count - Always visible */}
          <div className="flex items-center gap-1 bg-slate-700/50 rounded-lg px-2 py-1 sm:px-3 sm:py-2 text-xs sm:text-sm">
            <Users className="w-4 h-4 text-blue-400" />
            <div className="text-white">
              <span className="font-bold text-sm lg:text-base">{vehicleCount}</span>
              <span className="text-slate-300 text-xs lg:text-sm mx-1">of</span>
              <span className="font-bold text-sm lg:text-base">{totalVehicles}</span>
            </div>
          </div>

          {/* Activity Percentage - Hidden on small screens */}
          <div className="hidden sm:flex items-center gap-1 bg-green-500/20 rounded-lg px-3 py-2">
            <Activity className="w-4 h-4 text-green-400" />
            <div className="text-green-300">
              <span className="font-bold text-sm lg:text-base">{activePercentage}%</span>
              <span className="text-green-200 text-xs ml-1">active</span>
            </div>
          </div>

          {/* Countdown Timer */}
          <div className="flex items-center gap-1 bg-yellow-500/20 rounded-lg px-2 py-1 sm:px-3 sm:py-2 text-xs sm:text-sm">
            <Clock className="w-4 h-4 text-yellow-400" />
            <div className="text-yellow-300">
              <span className="text-yellow-200 text-xs lg:text-sm hidden sm:inline ml-1">
                Updates in:
              </span>
              <span className="font-bold text-sm lg:text-base"> {countdown}s</span>
              
            </div>
          </div>

        </div>
      </div>

    </header>
  );
};

export default Header;
import React from 'react';
import { MapPin, Loader } from 'lucide-react';

const LoadingOverlay = () => {
  return (
    <div className="fixed inset-0 bg-gray-900 flex items-center justify-center z-50">
      <div className="text-center">
        {/* Logo */}
        <div className="flex items-center justify-center space-x-3 mb-8">
          <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl flex items-center justify-center">
            <MapPin className="w-6 h-6 text-white" />
          </div>
          <h1 className="text-3xl font-bold text-white">Vehicle Tracker GPS</h1>
        </div>

        {/* Loading Spinner */}
        <div className="flex items-center justify-center space-x-3 mb-4">
          <Loader className="w-6 h-6 text-blue-400 animate-spin" />
          <span className="text-gray-300 text-lg">Initializing Fleet Dashboard...</span>
        </div>

        {/* Loading Bar */}
        <div className="w-64 h-2 bg-gray-700 rounded-full overflow-hidden">
          <div className="w-full h-full bg-gradient-to-r from-blue-500 to-blue-600 rounded-full animate-pulse"></div>
        </div>

        <p className="text-gray-500 text-sm mt-4">Loading vehicle data and map interface</p>
      </div>
    </div>
  );
};

export default LoadingOverlay;
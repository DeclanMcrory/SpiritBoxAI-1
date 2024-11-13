import React from 'react';
import { AlertTriangle } from 'lucide-react';

function LiveFeed() {
  return (
    <div className="rounded-xl overflow-hidden">
      <div className="bg-black aspect-video relative">
        <div className="absolute inset-0 flex items-center justify-center">
          <img
            src="https://images.unsplash.com/photo-1518709766631-a6c7f7856bc3?auto=format&fit=crop&w=2400&q=80"
            alt="Night vision camera feed"
            className="w-full h-full object-cover opacity-50"
          />
          <div className="absolute top-4 left-4 flex items-center space-x-2">
            <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse" />
            <span className="text-red-500 text-sm font-medium">LIVE</span>
          </div>
          <AlertTriangle className="absolute text-yellow-500 w-8 h-8 animate-pulse" />
        </div>
      </div>
      <div className="bg-gray-800 p-4">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="font-semibold">Main Hall - Camera 1</h3>
            <p className="text-sm text-gray-400">Anomaly detected - 2 minutes ago</p>
          </div>
          <button className="px-4 py-2 bg-purple-500 hover:bg-purple-600 rounded-lg text-sm">
            Analyze
          </button>
        </div>
      </div>
    </div>
  );
}
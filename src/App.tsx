import React, { useState } from 'react';
import { Ghost, Radio, Waves, Camera, Database, AlertTriangle, Moon, Sun } from 'lucide-react';
import Navbar from './components/Navbar';
import Dashboard from './components/Dashboard';
import LiveFeed from './components/LiveFeed';
import AnalysisPanel from './components/AnalysisPanel';

function App() {
  const [darkMode, setDarkMode] = useState(true);

  return (
    <div className={`min-h-screen ${darkMode ? 'bg-gray-900 text-gray-100' : 'bg-gray-50 text-gray-900'}`}>
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
      <main className="container mx-auto px-4 py-8">
        <Dashboard />
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-8">
          <LiveFeed />
          <AnalysisPanel />
        </div>
      </main>
    </div>
  );
}

export default App;
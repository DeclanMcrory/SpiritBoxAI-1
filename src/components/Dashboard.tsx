import React from 'react';
import { Radio, Waves, Camera, Database } from 'lucide-react';

function Dashboard() {
  const stats = [
    { icon: Radio, label: 'EVP Events', value: '12', trend: '+3' },
    { icon: Waves, label: 'EMF Readings', value: '487 µT', trend: '-2%' },
    { icon: Camera, label: 'Anomalies', value: '3', trend: '+1' },
    { icon: Database, label: 'Data Points', value: '1,284', trend: '+168' },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {stats.map(({ icon: Icon, label, value, trend }) => (
        <div key={label} className="bg-gradient-to-br from-purple-500/10 to-purple-600/10 rounded-xl p-6 backdrop-blur-sm border border-purple-500/20">
          <div className="flex items-center justify-between">
            <Icon className="w-6 h-6 text-purple-500" />
            <span className={`text-sm ${trend.startsWith('+') ? 'text-green-500' : 'text-red-500'}`}>
              {trend}
            </span>
          </div>
          <h3 className="mt-4 text-2xl font-semibold">{value}</h3>
          <p className="text-sm opacity-70">{label}</p>
        </div>
      ))}
    </div>
  );
}
import React from 'react';

function AnalysisPanel() {
  const events = [
    { time: '21:34:12', type: 'EVP', confidence: 89, description: 'Clear voice detected: "Help us"' },
    { time: '21:32:45', type: 'EMF', confidence: 95, description: 'Sudden spike in electromagnetic field' },
    { time: '21:30:18', type: 'Motion', confidence: 78, description: 'Unexplained movement detected' },
  ];

  return (
    <div className="rounded-xl border border-purple-500/20 backdrop-blur-sm">
      <div className="p-4 border-b border-purple-500/20">
        <h2 className="text-xl font-semibold">Real-Time Analysis</h2>
      </div>
      <div className="p-4 space-y-4">
        {events.map((event, index) => (
          <div
            key={index}
            className="bg-gradient-to-r from-purple-500/10 to-transparent p-4 rounded-lg"
          >
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm opacity-70">{event.time}</span>
              <div className="flex items-center space-x-2">
                <span className="text-sm font-medium">{event.type}</span>
                <div className="px-2 py-1 bg-purple-500/20 rounded-full text-xs">
                  {event.confidence}% confidence
                </div>
              </div>
            </div>
            <p className="text-sm">{event.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
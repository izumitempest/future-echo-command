
import React from 'react';
import ServerHeader from '../components/ServerHeader';
import StatsGrid from '../components/StatsGrid';
import NetworkVisualization from '../components/NetworkVisualization';
import ControlPanel from '../components/ControlPanel';
import TerminalOutput from '../components/TerminalOutput';

const Index = () => {
  return (
    <div className="min-h-screen bg-background data-grid">
      <div className="container mx-auto px-6 py-8">
        <ServerHeader />
        <StatsGrid />
        
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 mb-6">
          <NetworkVisualization />
          <TerminalOutput />
        </div>
        
        <ControlPanel />
      </div>
      
      {/* Background effects */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-green-500 to-transparent opacity-50"></div>
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-500 to-transparent opacity-50"></div>
        <div className="absolute top-0 left-0 w-px h-full bg-gradient-to-b from-transparent via-green-500 to-transparent opacity-50"></div>
        <div className="absolute top-0 right-0 w-px h-full bg-gradient-to-b from-transparent via-cyan-500 to-transparent opacity-50"></div>
      </div>
    </div>
  );
};

export default Index;


import React from 'react';
import { Server, Shield, Activity, Wifi } from 'lucide-react';

const ServerHeader = () => {
  return (
    <div className="cyber-border bg-card p-6 mb-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <div className="p-3 bg-primary/20 rounded-lg pulse-green">
            <Server className="h-8 w-8 text-primary" />
          </div>
          <div>
            <h1 className="text-3xl font-bold neon-text">NEXUS CONTROL CENTER</h1>
            <p className="text-muted-foreground terminal-text">Advanced Network Operations Hub</p>
          </div>
        </div>
        <div className="flex items-center space-x-6">
          <div className="flex items-center space-x-2">
            <Shield className="h-5 w-5 text-green-400" />
            <span className="terminal-text">SECURE</span>
          </div>
          <div className="flex items-center space-x-2">
            <Activity className="h-5 w-5 text-green-400" />
            <span className="terminal-text">ACTIVE</span>
          </div>
          <div className="flex items-center space-x-2">
            <Wifi className="h-5 w-5 text-green-400" />
            <span className="terminal-text">ONLINE</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServerHeader;


import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Play, Pause, Square, RotateCcw, Zap, Shield } from 'lucide-react';

const ControlPanel = () => {
  const [systemStatus, setSystemStatus] = useState('ACTIVE');
  const [operations, setOperations] = useState([
    { id: 1, name: 'Data Collection', status: 'running', progress: 78 },
    { id: 2, name: 'Network Scan', status: 'paused', progress: 45 },
    { id: 3, name: 'Security Monitor', status: 'running', progress: 92 },
    { id: 4, name: 'Traffic Analysis', status: 'running', progress: 67 }
  ]);

  const handleStatusChange = (newStatus: string) => {
    setSystemStatus(newStatus);
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'running': return 'bg-green-500';
      case 'paused': return 'bg-yellow-500';
      case 'stopped': return 'bg-red-500';
      default: return 'bg-gray-500';
    }
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      <Card className="cyber-border bg-card">
        <CardHeader>
          <CardTitle className="terminal-text flex items-center gap-2">
            <Zap className="h-5 w-5 text-yellow-400" />
            System Control
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center justify-between">
            <span className="terminal-text">System Status:</span>
            <Badge className={`${systemStatus === 'ACTIVE' ? 'bg-green-500' : 'bg-red-500'} text-black`}>
              {systemStatus}
            </Badge>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <Button 
              onClick={() => handleStatusChange('ACTIVE')}
              className="bg-green-600 hover:bg-green-700 text-black font-bold"
            >
              <Play className="h-4 w-4 mr-2" />
              START
            </Button>
            <Button 
              onClick={() => handleStatusChange('INACTIVE')}
              variant="destructive"
              className="font-bold"
            >
              <Square className="h-4 w-4 mr-2" />
              STOP
            </Button>
          </div>
          
          <div className="space-y-2">
            <div className="flex justify-between text-sm terminal-text">
              <span>CPU Usage</span>
              <span>76%</span>
            </div>
            <Progress value={76} className="h-2" />
          </div>
          
          <div className="space-y-2">
            <div className="flex justify-between text-sm terminal-text">
              <span>Memory Usage</span>
              <span>84%</span>
            </div>
            <Progress value={84} className="h-2" />
          </div>
        </CardContent>
      </Card>

      <Card className="cyber-border bg-card">
        <CardHeader>
          <CardTitle className="terminal-text flex items-center gap-2">
            <Shield className="h-5 w-5 text-blue-400" />
            Active Operations
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {operations.map((op) => (
              <div key={op.id} className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="terminal-text text-sm">{op.name}</span>
                  <div className="flex items-center gap-2">
                    <div className={`w-2 h-2 rounded-full ${getStatusColor(op.status)} pulse-green`}></div>
                    <span className="text-xs terminal-text uppercase">{op.status}</span>
                  </div>
                </div>
                <Progress value={op.progress} className="h-1" />
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ControlPanel;

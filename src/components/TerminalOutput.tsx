
import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Terminal } from 'lucide-react';

const TerminalOutput = () => {
  const [logs, setLogs] = useState<string[]>([
    '[INFO] System initialization complete',
    '[SUCCESS] Network interface activated',
    '[INFO] Establishing secure connections...',
    '[SUCCESS] Connected to 2847 nodes',
    '[INFO] Data synchronization in progress...',
    '[WARNING] High bandwidth usage detected',
    '[INFO] Running diagnostic protocols...',
    '[SUCCESS] All systems nominal'
  ]);

  useEffect(() => {
    const logMessages = [
      '[INFO] Processing incoming data packets...',
      '[SUCCESS] Node authentication verified',
      '[INFO] Bandwidth optimization complete',
      '[WARNING] Unusual traffic pattern detected',
      '[SUCCESS] Security scan completed successfully',
      '[INFO] Database synchronization in progress...',
      '[SUCCESS] Connection pool optimized',
      '[INFO] System monitoring active',
      '[WARNING] Memory usage threshold exceeded',
      '[SUCCESS] Performance metrics updated'
    ];

    const interval = setInterval(() => {
      const randomMessage = logMessages[Math.floor(Math.random() * logMessages.length)];
      const timestamp = new Date().toLocaleTimeString();
      
      setLogs(prev => {
        const newLogs = [...prev, `[${timestamp}] ${randomMessage}`];
        return newLogs.slice(-20); // Keep only last 20 logs
      });
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <Card className="cyber-border bg-card">
      <CardHeader>
        <CardTitle className="terminal-text flex items-center gap-2">
          <Terminal className="h-5 w-5 text-green-400" />
          System Logs
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="bg-black/80 rounded-lg p-4 h-64 overflow-y-auto data-grid">
          <div className="space-y-1">
            {logs.map((log, index) => (
              <div key={index} className="text-sm font-mono">
                {log.includes('[SUCCESS]') && (
                  <span className="text-green-400">{log}</span>
                )}
                {log.includes('[WARNING]') && (
                  <span className="text-yellow-400">{log}</span>
                )}
                {log.includes('[ERROR]') && (
                  <span className="text-red-400">{log}</span>
                )}
                {log.includes('[INFO]') && (
                  <span className="text-cyan-400">{log}</span>
                )}
              </div>
            ))}
          </div>
          <div className="inline-block w-2 h-4 bg-green-400 animate-pulse mt-1"></div>
        </div>
      </CardContent>
    </Card>
  );
};

export default TerminalOutput;


import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Activity, Users, Globe, Zap } from 'lucide-react';

const StatsGrid = () => {
  const [stats, setStats] = useState({
    activeNodes: 2847,
    totalConnections: 15432,
    bandwidth: 89.3,
    uptime: 99.97
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setStats(prev => ({
        activeNodes: prev.activeNodes + Math.floor(Math.random() * 10 - 5),
        totalConnections: prev.totalConnections + Math.floor(Math.random() * 100 - 50),
        bandwidth: Math.max(0, Math.min(100, prev.bandwidth + (Math.random() - 0.5) * 5)),
        uptime: 99.97 + Math.random() * 0.02
      }));
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  const statCards = [
    {
      title: "Active Nodes",
      value: stats.activeNodes.toLocaleString(),
      icon: Activity,
      color: "text-green-400",
      change: "+12.5%"
    },
    {
      title: "Total Connections",
      value: stats.totalConnections.toLocaleString(),
      icon: Users,
      color: "text-blue-400",
      change: "+8.2%"
    },
    {
      title: "Bandwidth Usage",
      value: `${stats.bandwidth.toFixed(1)}%`,
      icon: Globe,
      color: "text-cyan-400",
      change: "+2.1%"
    },
    {
      title: "System Uptime",
      value: `${stats.uptime.toFixed(2)}%`,
      icon: Zap,
      color: "text-yellow-400",
      change: "Stable"
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
      {statCards.map((stat, index) => (
        <Card key={index} className="cyber-border bg-card border-border hover:bg-card/80 transition-all duration-300">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium terminal-text">{stat.title}</CardTitle>
            <stat.icon className={`h-5 w-5 ${stat.color}`} />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold neon-text">{stat.value}</div>
            <p className="text-xs text-green-400 terminal-text">
              {stat.change} from last hour
            </p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default StatsGrid;

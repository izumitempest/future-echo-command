import React, { useEffect, useRef, useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const NetworkVisualization = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [nodes, setNodes] = useState<Array<{x: number, y: number, vx: number, vy: number, connections: number}>>([]);

  useEffect(() => {
    // Initialize nodes
    const initialNodes = Array.from({ length: 50 }, () => ({
      x: Math.random() * 800,
      y: Math.random() * 400,
      vx: (Math.random() - 0.5) * 2,
      vy: (Math.random() - 0.5) * 2,
      connections: Math.floor(Math.random() * 5) + 1
    }));
    setNodes(initialNodes);
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const animate = () => {
      ctx.fillStyle = 'rgba(0, 0, 0, 0.1)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Update and draw nodes
      setNodes(prevNodes => {
        const newNodes = prevNodes.map(node => {
          // Update position
          node.x += node.vx;
          node.y += node.vy;

          // Bounce off walls
          if (node.x <= 0 || node.x >= canvas.width) node.vx *= -1;
          if (node.y <= 0 || node.y >= canvas.height) node.vy *= -1;

          // Keep within bounds
          node.x = Math.max(0, Math.min(canvas.width, node.x));
          node.y = Math.max(0, Math.min(canvas.height, node.y));

          return node;
        });

        // Draw connections
        ctx.strokeStyle = 'rgba(0, 255, 0, 0.2)';
        ctx.lineWidth = 1;
        newNodes.forEach((node, i) => {
          newNodes.slice(i + 1).forEach(otherNode => {
            const distance = Math.sqrt(
              Math.pow(node.x - otherNode.x, 2) + Math.pow(node.y - otherNode.y, 2)
            );
            if (distance < 100) {
              ctx.beginPath();
              ctx.moveTo(node.x, node.y);
              ctx.lineTo(otherNode.x, otherNode.y);
              ctx.stroke();
            }
          });
        });

        // Draw nodes
        newNodes.forEach(node => {
          ctx.beginPath();
          ctx.arc(node.x, node.y, 3 + node.connections, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(0, 255, ${100 + node.connections * 30}, 0.8)`;
          ctx.fill();
          
          // Glow effect
          ctx.shadowColor = '#00ff00';
          ctx.shadowBlur = 10;
          ctx.beginPath();
          ctx.arc(node.x, node.y, 2, 0, Math.PI * 2);
          ctx.fill();
          ctx.shadowBlur = 0;
        });

        return newNodes;
      });

      requestAnimationFrame(animate);
    };

    animate();
  }, []);

  return (
    <Card className="cyber-border bg-card">
      <CardHeader>
        <CardTitle className="terminal-text">Network Topology</CardTitle>
      </CardHeader>
      <CardContent>
        <canvas
          ref={canvasRef}
          width={800}
          height={400}
          className="w-full h-auto bg-black/50 rounded-lg"
        />
      </CardContent>
    </Card>
  );
};

export default NetworkVisualization;

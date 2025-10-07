"use client";

import { useEffect, useState } from "react";

interface PerformanceStats {
  fps: number;
  memoryUsage?: number;
  particleCount: number;
  isMobile: boolean;
}

export default function PerformanceMonitor() {
  const [stats, setStats] = useState<PerformanceStats>({
    fps: 0,
    particleCount: 0,
    isMobile: false
  });
  const [showStats, setShowStats] = useState(false);

  useEffect(() => {
    // Only show in development
    if (process.env.NODE_ENV !== 'development') return;

    const isMobile = window.innerWidth < 768 || 
      /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);

    let frameCount = 0;
    let lastTime = performance.now();
    let fps = 0;

    const updateStats = () => {
      frameCount++;
      const currentTime = performance.now();
      
      if (currentTime - lastTime >= 1000) {
        fps = Math.round((frameCount * 1000) / (currentTime - lastTime));
        frameCount = 0;
        lastTime = currentTime;

        // Get memory usage if available
        const memoryUsage = (performance as any).memory ? 
          Math.round((performance as any).memory.usedJSHeapSize / 1024 / 1024) : undefined;

        setStats({
          fps,
          memoryUsage,
          particleCount: isMobile ? 300 : 1000,
          isMobile
        });
      }

      requestAnimationFrame(updateStats);
    };

    updateStats();

    // Toggle stats with 'P' key
    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.key === 'p' || e.key === 'P') {
        setShowStats(prev => !prev);
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, []);

  if (process.env.NODE_ENV !== 'development' || !showStats) {
    return null;
  }

  return (
    <div className="fixed top-4 right-4 z-50 bg-black/80 text-white p-3 rounded-lg text-xs font-mono backdrop-blur-sm">
      <div className="flex items-center justify-between mb-2">
        <span className="font-bold">Performance Monitor</span>
        <button 
          onClick={() => setShowStats(false)}
          className="text-gray-400 hover:text-white"
        >
          ×
        </button>
      </div>
      <div className="space-y-1">
        <div>FPS: <span className={fps >= 30 ? "text-green-400" : fps >= 15 ? "text-yellow-400" : "text-red-400"}>{stats.fps}</span></div>
        <div>Particles: {stats.particleCount}</div>
        <div>Device: {stats.isMobile ? "Mobile" : "Desktop"}</div>
        {stats.memoryUsage && <div>Memory: {stats.memoryUsage}MB</div>}
        <div className="text-gray-400 text-xs mt-2">Press 'P' to toggle</div>
      </div>
    </div>
  );
}


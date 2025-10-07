"use client";

import { useEffect, useRef, useState } from "react";

export default function VideoBackground() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isMobile, setIsMobile] = useState(false);

  // Detect mobile device for performance optimization
  useEffect(() => {
    const checkMobile = () => {
      const isMobileDevice = window.innerWidth < 768 || 
        /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
      setIsMobile(isMobileDevice);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Handle mobile scaling
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // Apply mobile scaling
    if (isMobile) {
      video.style.transform = 'scale(1.1)';
    } else {
      video.style.transform = 'scale(1)';
    }
  }, [isMobile]);

  // Handle visibility change to pause/play video when tab is not active
  useEffect(() => {
    const handleVisibilityChange = () => {
      const video = videoRef.current;
      if (!video) return;

      if (document.hidden) {
        video.pause();
      } else {
        video.play().catch(console.error);
      }
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);
    return () => document.removeEventListener('visibilitychange', handleVisibilityChange);
  }, []);

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      {/* Video Background - Direct Play */}
      <video
        ref={videoRef}
        className="w-full h-full object-cover"
        style={{
          filter: 'brightness(0.7) contrast(1.1)', // Slightly darken for text readability
          transformOrigin: 'center center'
        }}
        autoPlay
        playsInline
        muted
        loop
        preload="auto"
      >
        <source src="/video.mp4" type="video/mp4" />
        {/* Fallback for browsers that don't support video */}
        Your browser does not support the video tag.
      </video>

      {/* Subtle overlay for optimal text readability */}
      <div className="absolute inset-0 bg-black/20" />
      
      {/* Additional gradient overlay for better text contrast */}
      <div 
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(135deg, rgba(0,0,0,0.3) 0%, rgba(0,0,0,0.1) 50%, rgba(0,0,0,0.3) 100%)'
        }}
      />
    </div>
  );
}
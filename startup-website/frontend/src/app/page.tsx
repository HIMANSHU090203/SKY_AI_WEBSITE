"use client";

import VideoBackground from "../components/VideoBackground";
import AnimatedNavbar from "../components/AnimatedNavbar";
import AnimatedHero from "../components/AnimatedHero";
import AnimatedOverview from "../components/AnimatedOverview";
import AnimatedFeatures from "../components/AnimatedFeatures";
import AnimatedCTA from "../components/AnimatedCTA";
import PerformanceMonitor from "../components/PerformanceMonitor";
import AnimatedFooter from "../components/AnimatedFooter";

export default function HomePage() {
  return (
    <div className="min-h-screen relative overflow-hidden font-sans">
      {/* Animated Background */}
      <VideoBackground />
      
      {/* Navigation */}
      <AnimatedNavbar />
      
      {/* Hero Section */}
      <AnimatedHero />
      
      {/* Company Overview */}
      <AnimatedOverview />
      
      {/* Key Features & Services */}
      <AnimatedFeatures />
      
      {/* Call to Action */}
      <AnimatedCTA />
      
      {/* Footer */}
      <AnimatedFooter />
      
      {/* Performance Monitor (Development Only) */}
      <PerformanceMonitor />
    </div>
  );
}
"use client";

import VideoBackground from "../../components/VideoBackground";
import AnimatedNavbar from "../../components/AnimatedNavbar";
import AnimatedAbout from "../../components/AnimatedAbout";
import AnimatedLeadership from "../../components/AnimatedLeadership";
import AnimatedTimeline from "../../components/AnimatedTimeline";
import AnimatedFooter from "../../components/AnimatedFooter";

export default function AboutUsPage() {
  return (
    <div className="min-h-screen relative overflow-hidden font-[Poppins,Arial,sans-serif]">
      {/* Animated Background */}
      <VideoBackground />
      
      {/* Navigation */}
      <AnimatedNavbar />
      
      {/* About Section */}
      <AnimatedAbout />
      
      {/* Leadership Section */}
      <AnimatedLeadership />
      
      {/* Timeline Section */}
      <AnimatedTimeline />
      
      {/* Footer */}
      <AnimatedFooter />
    </div>
  );
}
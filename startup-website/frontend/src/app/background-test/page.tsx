"use client";

import VideoBackground from "../../components/VideoBackground";
import AnimatedNavbar from "../../components/AnimatedNavbar";
import { motion } from "framer-motion";

export default function BackgroundTestPage() {
  return (
    <div className="min-h-screen bg-black relative overflow-hidden font-[Poppins,Arial,sans-serif]">
      {/* Animated Background */}
      <VideoBackground />
      
      {/* Navigation */}
      <AnimatedNavbar />
      
      {/* Test Content */}
      <div className="relative z-10 pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-8 leading-tight">
              <span className="bg-gradient-to-r from-white via-white to-purple-400 bg-clip-text text-transparent">
                Video Background
              </span>
              <br />
              <span className="bg-gradient-to-r from-purple-400 via-pink-500 to-blue-400 bg-clip-text text-transparent">
                Test Page
              </span>
            </h1>
            
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-12 leading-relaxed">
              This page demonstrates the new video background with your custom video.mp4 file. 
              The video plays automatically, loops seamlessly, and is optimized for performance 
              across all devices with proper fallbacks!
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20">
              <motion.div
                className="glassmorphic-card p-8 rounded-2xl"
                whileHover={{ y: -10, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <h3 className="text-2xl font-bold text-white mb-4">Video Background</h3>
                <p className="text-gray-300">
                  Your custom video.mp4 file plays as a full-screen background with seamless looping and autoplay.
                </p>
              </motion.div>

              <motion.div
                className="glassmorphic-card p-8 rounded-2xl"
                whileHover={{ y: -10, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <h3 className="text-2xl font-bold text-white mb-4">Mobile Optimized</h3>
                <p className="text-gray-300">
                  Automatically adjusts for mobile devices with performance optimizations and proper scaling.
                </p>
              </motion.div>

              <motion.div
                className="glassmorphic-card p-8 rounded-2xl"
                whileHover={{ y: -10, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <h3 className="text-2xl font-bold text-white mb-4">Fallback Support</h3>
                <p className="text-gray-300">
                  Graceful fallback to static image if video fails to load, ensuring your site always looks great.
                </p>
              </motion.div>
            </div>

            <div className="mt-20">
              <motion.div
                className="inline-block p-6 bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30 rounded-xl backdrop-blur-sm"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <p className="text-purple-400 font-medium">
                  ✨ Your video background is now playing! Check out the seamless looping effect! ✨
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}


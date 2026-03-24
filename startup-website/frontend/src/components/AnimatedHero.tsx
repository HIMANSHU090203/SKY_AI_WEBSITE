"use client";

import { motion } from "framer-motion";
import { ArrowRight, Sparkles, Brain, Zap } from "lucide-react";
import Link from "next/link";
import { orbitron } from "@/app/fonts";

export default function AnimatedHero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };


  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-20 left-20 w-32 h-32 bg-blue-500/10 rounded-full blur-xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-20 right-20 w-48 h-48 bg-purple-500/10 rounded-full blur-xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.4, 0.7, 0.4],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-cyan-500/5 rounded-full blur-2xl"
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
        />
      </div>

      <motion.div
        className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 text-center mt-16"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >

        {/* Main content */}
        <motion.h1
          variants={itemVariants}
          className="font-orbitron text-5xl sm:text-6xl lg:text-7xl font-bold mb-8 leading-tight tracking-tight"
        >
          <span className="bg-gradient-to-r from-[var(--color-text-primary)] via-[var(--color-text-primary)] to-[var(--color-accent-cyan)] bg-clip-text text-transparent">
            Empowering Businesses
          </span>
          <br />
          <span className="bg-gradient-to-r from-[var(--color-accent-cyan)] via-[var(--color-accent-purple)] to-[var(--color-accent-cyan)] bg-clip-text text-transparent">
            with AI
          </span>
        </motion.h1>

        <motion.div variants={itemVariants} className="mb-8">
          <motion.div
            className={`${orbitron.className} glass-chip inline-flex items-center px-4 py-2 rounded-full text-sm font-medium mb-8 tracking-wide`}
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <Sparkles className="w-4 h-4 mr-2" />
            Advanced AI Research & Development
          </motion.div>
        </motion.div>

        <motion.p
          variants={itemVariants}
          className="text-xl sm:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed"
        >
          SKY AI is an innovative technology firm specializing in seamlessly integrating 
          artificial intelligence into the corporate landscape.
        </motion.p>

        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row gap-6 justify-center items-center"
        >
          <motion.div
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <Link
              href="/Contact"
              className={`${orbitron.className} enhanced-button group relative inline-flex items-center px-8 py-4 text-white font-semibold rounded-xl shadow-lg shadow-[var(--color-accent-cyan)]/25 hover:shadow-[var(--color-accent-cyan)]/40 transition-all duration-300`}
            >
              <span className="relative z-10">Get Started</span>
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <Link
              href="/Aboutus"
              className={`${orbitron.className} group inline-flex items-center px-8 py-4 border border-gray-600 text-gray-300 font-semibold rounded-xl hover:border-[var(--color-accent-cyan)] hover:text-[var(--color-accent-cyan)] transition-all duration-300 backdrop-blur-sm`}
            >
              <span>Learn More</span>
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
          </motion.div>
        </motion.div>

      </motion.div>

    </section>
  );
}

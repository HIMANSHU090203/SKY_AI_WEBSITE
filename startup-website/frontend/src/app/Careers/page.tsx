"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Heart, Coffee, TrendingUp, Award, Users, Rocket, Lightbulb, ArrowRight } from "lucide-react";
import Link from "next/link";
import VideoBackground from "../../components/VideoBackground";
import AnimatedNavbar from "../../components/AnimatedNavbar";
import AnimatedFooter from "../../components/AnimatedFooter";

const Careers = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const values = [
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Passion-Driven",
      description: "We love what we do and are passionate about creating innovative AI solutions.",
      color: "from-red-500 to-pink-500",
    },
    {
      icon: <Coffee className="w-8 h-8" />,
      title: "Work-Life Balance",
      description: "We believe in maintaining a healthy balance between work and personal life.",
      color: "from-amber-500 to-orange-500",
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Growth Mindset",
      description: "Continuous learning and personal development are at the core of our culture.",
      color: "from-green-500 to-emerald-500",
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Excellence",
      description: "We strive for excellence in everything we do and celebrate achievements.",
      color: "from-purple-500 to-violet-500",
    },
  ];

  const benefits = [
    {
      icon: <Rocket className="w-6 h-6" />,
      title: "Competitive Salary",
      description: "Market-competitive compensation packages",
    },
    {
      icon: <Lightbulb className="w-6 h-6" />,
      title: "Innovation Time",
      description: "20% time to work on personal projects",
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Team Events",
      description: "Regular team building and social events",
    },
  ];


  return (
    <div className="min-h-screen relative overflow-hidden font-sans">
      {/* Animated Background */}
      <VideoBackground />
      
      {/* Navigation */}
      <AnimatedNavbar />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-500/30 rounded-full text-blue-400 text-sm font-medium mb-8 backdrop-blur-sm"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Users className="w-4 h-4 mr-2" />
              Join Our Team
            </motion.div>
            
            <h1 className="font-orbitron text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight">
              Build the Future
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent block">
                with AI
              </span>
            </h1>
            
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed mb-12">
              Join SKY AI and be part of a team that's revolutionizing how businesses use artificial intelligence.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Company Culture */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="font-orbitron text-3xl sm:text-4xl font-bold text-white mb-6 tracking-tight">
              Our <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Culture</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We foster an environment where innovation thrives and every team member can make a meaningful impact.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                className="group relative"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10, scale: 1.02 }}
              >
                <div className="glassmorphic-card relative p-8 rounded-2xl hover:border-[var(--color-accent-cyan)]/30 transition-all duration-300 h-full">
                  <div className={`inline-flex p-4 rounded-xl bg-gradient-to-r ${value.color} mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    {value.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">{value.title}</h3>
                  <p className="text-gray-300 leading-relaxed">{value.description}</p>
                  
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-gradient-to-br from-gray-900/30 to-gray-800/20">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="font-orbitron text-3xl sm:text-4xl font-bold text-white mb-6 tracking-tight">
              Why Work <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">With Us</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We offer comprehensive benefits and opportunities for growth in a supportive environment.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                className="group relative"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10, scale: 1.02 }}
              >
                <div className="glassmorphic-card relative p-8 rounded-2xl hover:border-[var(--color-accent-cyan)]/30 transition-all duration-300 h-full">
                  <div className="flex items-start">
                    <div className="p-3 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-lg mr-4 group-hover:scale-110 transition-transform duration-300">
                      {benefit.icon}
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-2">{benefit.title}</h3>
                      <p className="text-gray-300 text-sm">{benefit.description}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions - No Current Vacancies */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="font-orbitron text-3xl sm:text-4xl font-bold text-white mb-6 tracking-tight">
              Open <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Positions</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Explore current opportunities and find your perfect role at SKY AI.
            </p>
          </motion.div>

          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="high-visibility-card p-12 rounded-2xl">
              <div className="mb-8">
                <div className="w-24 h-24 mx-auto mb-6 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full flex items-center justify-center">
                  <Users className="w-12 h-12 text-blue-400" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">No Current Openings</h3>
                <p className="text-gray-300 text-lg max-w-2xl mx-auto">
                  We're not actively hiring at the moment, but we're always interested in connecting with talented individuals. 
                  Feel free to reach out to us below!
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12">
          <motion.div
            className="glassmorphic-card p-8 rounded-2xl text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-white mb-4">Don't See Your Role?</h3>
            <p className="text-gray-300 mb-6">
              We're always looking for talented individuals. Send us your resume and let's discuss opportunities.
            </p>
            <motion.button
              className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-xl hover:from-blue-600 hover:to-purple-700 transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Send Resume
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <AnimatedFooter />
    </div>
  );
};

export default Careers;
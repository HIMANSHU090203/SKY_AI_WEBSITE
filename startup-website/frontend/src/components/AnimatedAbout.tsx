"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Brain, Eye, Heart, Shield, Globe, Target, Zap, Users } from "lucide-react";

export default function AnimatedAbout() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const cardVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const values = [
    {
      icon: <Brain className="w-8 h-8" />,
      title: "Innovation First",
      description: "We push the boundaries of what's possible, constantly exploring new frontiers in AI research and development.",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Human-Centric",
      description: "Technology should enhance human potential, not replace it. We build AI that empowers people to achieve more.",
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Ethical AI",
      description: "We're committed to developing AI that's safe, transparent, and beneficial for all of humanity.",
      color: "from-green-500 to-emerald-500",
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Global Impact",
      description: "Our mission extends beyond profit—we're building technology that can solve the world's greatest challenges.",
      color: "from-orange-500 to-red-500",
    },
  ];

  const missionVision = [
    {
      icon: <Target className="w-12 h-12" />,
      title: "Our Mission",
      content: "To democratize artificial intelligence and make it accessible to businesses of all sizes, enabling them to harness the power of AI for growth, efficiency, and innovation.",
      color: "from-blue-500 to-purple-500",
    },
    {
      icon: <Eye className="w-12 h-12" />,
      title: "Our Vision",
      content: "A future where AI seamlessly integrates into every aspect of business operations, creating a more intelligent, efficient, and sustainable world.",
      color: "from-purple-500 to-pink-500",
    },
  ];

  return (
    <section ref={ref} className="py-24 relative">
      <motion.div
        className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        {/* Section Header */}
        <motion.div variants={itemVariants} className="text-center mb-20">
          <motion.div
            className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-500/30 rounded-full text-blue-400 text-sm font-medium mb-8 backdrop-blur-sm"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <Users className="w-4 h-4 mr-2" />
            About SKY AI
          </motion.div>
          
          <h2 className="font-orbitron text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight">
            Discover Our
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent block">
              Vision & Mission
            </span>
          </h2>
          
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            We're not just building AI—we're crafting the future of human-machine collaboration.
          </p>
        </motion.div>

        {/* Mission & Vision */}
        <motion.div variants={itemVariants} className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-24">
          {missionVision.map((item, index) => (
            <motion.div
              key={index}
              className="group relative"
              variants={cardVariants}
              whileHover={{ y: -10, scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="relative p-8 bg-gradient-to-br from-gray-900/50 to-gray-800/30 rounded-2xl border border-gray-700/50 backdrop-blur-sm hover:border-blue-500/30 transition-all duration-300">
                <div className={`inline-flex p-4 rounded-xl bg-gradient-to-r ${item.color} mb-6`}>
                  {item.icon}
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">{item.title}</h3>
                <p className="text-gray-300 leading-relaxed">{item.content}</p>
                
                {/* Hover effect overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-purple-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Values */}
        <motion.div variants={itemVariants}>
          <h3 className="font-orbitron text-3xl sm:text-4xl font-bold text-white text-center mb-16 tracking-tight">
            Our <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Core Values</span>
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                className="group relative"
                variants={cardVariants}
                whileHover={{ y: -10, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="relative p-8 bg-gradient-to-br from-gray-900/50 to-gray-800/30 rounded-2xl border border-gray-700/50 backdrop-blur-sm hover:border-blue-500/30 transition-all duration-300 h-full">
                  <div className={`inline-flex p-3 rounded-lg bg-gradient-to-r ${value.color} mb-4`}>
                    {value.icon}
                  </div>
                  <h4 className="text-xl font-semibold text-white mb-3">{value.title}</h4>
                  <p className="text-gray-400 text-sm leading-relaxed">{value.description}</p>
                  
                  {/* Hover effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

      </motion.div>
    </section>
  );
}



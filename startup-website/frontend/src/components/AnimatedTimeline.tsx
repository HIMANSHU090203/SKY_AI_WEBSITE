"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Calendar, Rocket, Target, Zap, Star, ArrowRight } from "lucide-react";

export default function AnimatedTimeline() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

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

  const timelineItems = [
    {
      year: "2025",
      title: "Foundation",
      description: "SKY AI was founded to build smart solutions powered by AI.",
      icon: <Rocket className="w-6 h-6" />,
      color: "from-blue-500 to-cyan-500",
      status: "completed",
      details: [
        "Company incorporation and initial team formation",
        "Development of core AI research framework",
        "Establishment of research partnerships",
        "Launch of first AI-powered solutions"
      ]
    },
    {
      year: "2025 Q2",
      title: "Research Breakthrough",
      description: "Major breakthrough in AI algorithm optimization.",
      icon: <Zap className="w-6 h-6" />,
      color: "from-purple-500 to-pink-500",
      status: "current",
      details: [
        "Advanced machine learning model development",
        "Integration with enterprise systems",
        "Performance optimization breakthroughs",
        "Client pilot program launch"
      ]
    },
    {
      year: "2025 Q3",
      title: "Market Expansion",
      description: "Expanding our AI solutions to new markets.",
      icon: <Target className="w-6 h-6" />,
      color: "from-green-500 to-emerald-500",
      status: "upcoming",
      details: [
        "International market entry",
        "Strategic partnership announcements",
        "Product portfolio expansion",
        "Team growth and scaling"
      ]
    },
    {
      year: "2025 Q4",
      title: "Innovation Leadership",
      description: "Becoming a recognized leader in AI innovation.",
      icon: <Star className="w-6 h-6" />,
      color: "from-orange-500 to-red-500",
      status: "upcoming",
      details: [
        "Industry recognition and awards",
        "Research publication in top journals",
        "Open source contributions",
        "Thought leadership initiatives"
      ]
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "completed":
        return "from-green-500 to-emerald-500";
      case "current":
        return "from-blue-500 to-cyan-500";
      case "upcoming":
        return "from-gray-500 to-gray-600";
      default:
        return "from-gray-500 to-gray-600";
    }
  };

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
            <Calendar className="w-4 h-4 mr-2" />
            Our Journey
          </motion.div>
          
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
            Our
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent block">
              Innovation Timeline
            </span>
          </h2>
          
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Follow our journey as we revolutionize the AI landscape and build the future of intelligent technology.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 via-purple-500 to-gray-600"></div>

          {/* Timeline Items */}
          <div className="space-y-16">
            {timelineItems.map((item, index) => (
              <motion.div
                key={index}
                className="relative flex items-start"
                variants={itemVariants}
              >
                {/* Timeline dot */}
                <div className="relative z-10 flex items-center justify-center w-16 h-16 bg-gradient-to-r from-gray-900 to-gray-800 rounded-full border-4 border-gray-700">
                  <div className={`p-2 rounded-full bg-gradient-to-r ${getStatusColor(item.status)}`}>
                    {item.icon}
                  </div>
                </div>

                {/* Content */}
                <motion.div
                  className="ml-8 flex-1"
                  whileHover={{ x: 10 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="relative p-8 bg-gradient-to-br from-gray-900/50 to-gray-800/30 rounded-2xl border border-gray-700/50 backdrop-blur-sm hover:border-blue-500/30 transition-all duration-300">
                    {/* Year badge */}
                    <div className="inline-flex items-center px-3 py-1 bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-500/30 rounded-full text-blue-400 text-sm font-medium mb-4">
                      <Calendar className="w-4 h-4 mr-2" />
                      {item.year}
                    </div>

                    <h3 className="text-2xl font-bold text-white mb-3">{item.title}</h3>
                    <p className="text-gray-300 mb-6 leading-relaxed">{item.description}</p>

                    {/* Details */}
                    <div className="space-y-2">
                      {item.details.map((detail, detailIndex) => (
                        <motion.div
                          key={detailIndex}
                          className="flex items-center text-gray-400 text-sm"
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: detailIndex * 0.1 }}
                        >
                          <ArrowRight className="w-4 h-4 mr-3 text-blue-400" />
                          {detail}
                        </motion.div>
                      ))}
                    </div>

                    {/* Status indicator */}
                    <div className="mt-6 flex items-center">
                      <div className={`w-3 h-3 rounded-full bg-gradient-to-r ${getStatusColor(item.status)} mr-3`}></div>
                      <span className="text-sm text-gray-400 capitalize">
                        {item.status === "completed" ? "Completed" : 
                         item.status === "current" ? "In Progress" : "Upcoming"}
                      </span>
                    </div>

                    {/* Hover effect overlay */}
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 rounded-2xl opacity-0 hover:opacity-100 transition-opacity duration-300" />
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Future Vision */}
        <motion.div
          variants={itemVariants}
          className="mt-20 text-center"
        >
          <div className="max-w-4xl mx-auto p-8 bg-gradient-to-br from-gray-900/40 to-gray-800/20 rounded-2xl border border-gray-700/30 backdrop-blur-sm">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl mb-6">
              <Star className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">Looking Ahead</h3>
            <p className="text-gray-300 leading-relaxed mb-6">
              Our journey is just beginning. We're committed to pushing the boundaries of AI innovation, 
              creating solutions that transform industries and improve lives worldwide.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              {["AI Research", "Global Impact", "Innovation", "Excellence", "Future"].map((vision, index) => (
                <motion.span
                  key={index}
                  className="px-4 py-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-500/30 rounded-full text-blue-400 text-sm font-medium"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  {vision}
                </motion.span>
              ))}
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}



'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { 
  Target, 
  Lightbulb, 
  Users, 
  Zap,
  ArrowRight,
  CheckCircle
} from 'lucide-react';
import Link from 'next/link';

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

const cardVariants = {
  hidden: { y: 30, opacity: 0, scale: 0.95 },
  visible: {
    y: 0,
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const features = [
  {
    icon: <Target className="w-8 h-8" />,
    title: "AI-Powered Solutions",
    description: "Custom AI implementations that transform your business operations and drive measurable results.",
    color: "from-blue-500 to-cyan-500"
  },
  {
    icon: <Lightbulb className="w-8 h-8" />,
    title: "Innovation First",
    description: "Cutting-edge research and development to stay ahead of the AI revolution.",
    color: "from-purple-500 to-pink-500"
  },
  {
    icon: <Users className="w-8 h-8" />,
    title: "Expert Team",
    description: "World-class AI researchers and engineers dedicated to your success.",
    color: "from-green-500 to-emerald-500"
  },
  {
    icon: <Zap className="w-8 h-8" />,
    title: "Rapid Deployment",
    description: "Fast implementation with minimal disruption to your existing workflows.",
    color: "from-orange-500 to-yellow-500"
  }
];


export default function AnimatedOverview() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

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
            className="glass-chip inline-flex items-center px-4 py-2 rounded-full text-sm font-medium mb-8"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <Target className="w-4 h-4 mr-2" />
            Why Choose SKY AI
          </motion.div>
          <h2 className="font-orbitron text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight">
            Transforming Businesses
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent block">
              with AI Innovation
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            We're not just building AI—we're crafting the future of human-machine collaboration 
            with cutting-edge solutions that drive real business value.
          </p>
        </motion.div>

        {/* Key Features */}
        <motion.div variants={itemVariants} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="group relative"
              variants={cardVariants}
              whileHover={{ y: -10, scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="glassmorphic-card relative p-8 rounded-2xl hover:border-[var(--color-accent-cyan)]/30 transition-all duration-300 h-full">
                <div className={`inline-flex p-4 rounded-xl bg-gradient-to-r ${feature.color} mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-[var(--color-text-primary)] mb-3">{feature.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{feature.description}</p>
                {/* Enhanced hover effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-accent-cyan)]/5 to-[var(--color-accent-purple)]/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            </motion.div>
          ))}
        </motion.div>


        {/* CTA Section */}
        <motion.div
          variants={itemVariants}
          className="text-center"
        >
          <div className="glassmorphic-card max-w-4xl mx-auto p-8 rounded-2xl border border-[var(--color-accent-cyan)]/20">
            <h3 className="text-2xl font-bold text-[var(--color-text-primary)] mb-4">
              Ready to Transform Your Business?
            </h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Join the AI revolution with solutions tailored to your business needs. 
              Let's discuss how we can accelerate your digital transformation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <motion.div
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Link
                  href="/Contact"
                  className="enhanced-button group relative inline-flex items-center px-8 py-4 text-white font-semibold rounded-xl shadow-lg shadow-[var(--color-accent-cyan)]/25 hover:shadow-[var(--color-accent-cyan)]/40 transition-all duration-300"
                >
                  <span className="relative z-10">Get Started Today</span>
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
                  className="group inline-flex items-center px-8 py-4 border border-gray-600 text-gray-300 font-semibold rounded-xl hover:border-[var(--color-accent-cyan)] hover:text-[var(--color-accent-cyan)] transition-all duration-300 backdrop-blur-sm"
                >
                  <span>Learn More</span>
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                </Link>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}

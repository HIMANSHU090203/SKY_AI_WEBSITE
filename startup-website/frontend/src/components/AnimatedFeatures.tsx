'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { 
  Brain, 
  Database, 
  Shield, 
  Zap,
  ArrowRight,
  CheckCircle,
  Sparkles
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

const services = [
  {
    icon: <Brain className="w-10 h-10" />,
    title: "Machine Learning Solutions",
    description: "Custom ML models tailored to your specific business needs and data patterns.",
    features: ["Predictive Analytics", "Pattern Recognition", "Automated Decision Making"],
    color: "from-blue-500 to-cyan-500",
    href: "/Aboutus"
  },
  {
    icon: <Database className="w-10 h-10" />,
    title: "Data Intelligence",
    description: "Transform raw data into actionable insights with our advanced analytics platform.",
    features: ["Real-time Processing", "Data Visualization", "Business Intelligence"],
    color: "from-purple-500 to-pink-500",
    href: "/Aboutus"
  },
  {
    icon: <Shield className="w-10 h-10" />,
    title: "AI Security & Compliance",
    description: "Enterprise-grade security and compliance solutions for your AI implementations.",
    features: ["Data Protection", "Privacy Compliance", "Secure Deployment"],
    color: "from-green-500 to-emerald-500",
    href: "/Aboutus"
  },
  {
    icon: <Zap className="w-10 h-10" />,
    title: "Process Automation",
    description: "Streamline operations with intelligent automation that adapts to your workflows.",
    features: ["Workflow Optimization", "Task Automation", "Efficiency Gains"],
    color: "from-orange-500 to-yellow-500",
    href: "/Aboutus"
  }
];

const benefits = [
  "Reduced operational costs by up to 40%",
  "Increased productivity and efficiency",
  "24/7 intelligent monitoring and support",
  "Scalable solutions that grow with your business"
];

export default function AnimatedFeatures() {
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
            <Sparkles className="w-4 h-4 mr-2" />
            Our Services
          </motion.div>
          <h2 className="font-orbitron text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight">
            AI Solutions That
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent block">
              Drive Results
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            From machine learning to process automation, we deliver comprehensive AI solutions 
            that transform how your business operates and competes.
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div variants={itemVariants} className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="group relative"
              variants={cardVariants}
              whileHover={{ y: -10, scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="glassmorphic-card relative p-8 rounded-2xl hover:border-[var(--color-accent-cyan)]/30 transition-all duration-300 h-full">
                <div className="flex items-start mb-6">
                  <div className={`inline-flex p-4 rounded-xl bg-gradient-to-r ${service.color} mr-6 group-hover:scale-110 transition-transform duration-300`}>
                    {service.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-[var(--color-text-primary)] mb-3">{service.title}</h3>
                    <p className="text-gray-300 leading-relaxed mb-4">{service.description}</p>
                  </div>
                </div>
                
                {/* Features List */}
                <div className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center text-gray-300">
                      <CheckCircle className="w-4 h-4 text-[var(--color-accent-cyan)] mr-3 flex-shrink-0" />
                      <span className="text-sm">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* Learn More Link */}
                <motion.div
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Link
                    href={service.href}
                    className="inline-flex items-center text-[var(--color-accent-cyan)] hover:text-[var(--color-accent-cyan)]/80 font-medium group"
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                  </Link>
                </motion.div>

                {/* Enhanced hover effect overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-accent-cyan)]/5 to-[var(--color-accent-purple)]/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Benefits Section */}
        <motion.div
          variants={itemVariants}
          className="text-center"
        >
          <div className="glassmorphic-card max-w-4xl mx-auto p-8 rounded-2xl">
            <h3 className="text-2xl font-bold text-[var(--color-text-primary)] mb-6">
              Why Our Clients Choose Us
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  className="flex items-center text-left"
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <CheckCircle className="w-5 h-5 text-[var(--color-accent-cyan)] mr-4 flex-shrink-0" />
                  <span className="text-gray-300">{benefit}</span>
                </motion.div>
              ))}
            </div>
            <motion.div
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Link
                href="/Contact"
                className="enhanced-button group relative inline-flex items-center px-8 py-4 text-white font-semibold rounded-xl shadow-lg shadow-[var(--color-accent-cyan)]/25 hover:shadow-[var(--color-accent-cyan)]/40 transition-all duration-300"
              >
                <span className="relative z-10">Explore Our Solutions</span>
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}

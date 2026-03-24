'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { 
  ArrowRight, 
  Mail, 
  Phone, 
  MessageSquare,
  Calendar,
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

const ctaOptions = [
  {
    icon: <MessageSquare className="w-6 h-6" />,
    title: "Send a Message",
    description: "Get in touch with our team",
    href: "/Contact",
    color: "from-blue-500 to-cyan-500"
  },
  {
    icon: <Phone className="w-6 h-6" />,
    title: "Call Us",
    description: "+91 9783982649",
    href: "tel:+919783982649",
    color: "from-green-500 to-emerald-500"
  },
  {
    icon: <Mail className="w-6 h-6" />,
    title: "Email Us",
    description: "info@sky-ai.in",
    href: "mailto:info@sky-ai.in",
    color: "from-purple-500 to-pink-500"
  },
  {
    icon: <Calendar className="w-6 h-6" />,
    title: "Schedule a Call",
    description: "Book a consultation",
    href: "/Contact",
    color: "from-orange-500 to-yellow-500"
  }
];

export default function AnimatedCTA() {
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
        {/* Main CTA */}
        <motion.div variants={itemVariants} className="text-center mb-16">
          <div className="glassmorphic-card max-w-5xl mx-auto p-12 rounded-3xl border border-[var(--color-accent-cyan)]/20">
            <motion.div
              className="glass-chip inline-flex items-center px-4 py-2 rounded-full text-sm font-medium mb-8"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Sparkles className="w-4 h-4 mr-2" />
              Ready to Get Started?
            </motion.div>
            
            <h2 className="font-orbitron text-4xl sm:text-5xl lg:text-6xl font-bold text-[var(--color-text-primary)] mb-6 tracking-tight">
              Let's Build the Future
              <span className="bg-gradient-to-r from-[var(--color-accent-cyan)] to-[var(--color-accent-purple)] bg-clip-text text-transparent block">
                Together
              </span>
            </h2>
            
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed mb-10">
              Ready to transform your business with AI? Our team of experts is here to guide you 
              through every step of your AI journey. Let's discuss how we can help you achieve your goals.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
              <motion.div
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Link
                  href="/Contact"
                  className="font-orbitron enhanced-button group relative inline-flex items-center px-10 py-5 text-white font-semibold rounded-xl shadow-lg shadow-[var(--color-accent-cyan)]/25 hover:shadow-[var(--color-accent-cyan)]/40 transition-all duration-300 text-lg"
                >
                  <span className="relative z-10">Start Your AI Journey</span>
                  <ArrowRight className="w-6 h-6 ml-3 group-hover:translate-x-1 transition-transform duration-300" />
                </Link>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Link
                  href="/Aboutus"
                  className="font-orbitron group inline-flex items-center px-10 py-5 border border-gray-600 text-gray-300 font-semibold rounded-xl hover:border-[var(--color-accent-cyan)] hover:text-[var(--color-accent-cyan)] transition-all duration-300 backdrop-blur-sm text-lg"
                >
                  <span>Learn More About Us</span>
                  <ArrowRight className="w-6 h-6 ml-3 group-hover:translate-x-1 transition-transform duration-300" />
                </Link>
              </motion.div>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap justify-center items-center gap-8 text-gray-400 text-sm">
              <div className="flex items-center">
                <div className="w-2 h-2 bg-[var(--color-accent-cyan)] rounded-full mr-2"></div>
                <span>Free Consultation</span>
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-[var(--color-accent-cyan)] rounded-full mr-2"></div>
                <span>24/7 Support</span>
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-[var(--color-accent-cyan)] rounded-full mr-2"></div>
                <span>Custom Solutions</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Contact Options */}
        <motion.div variants={itemVariants}>
          <h3 className="text-2xl font-bold text-[var(--color-text-primary)] text-center mb-12">
            Choose Your Preferred Way to Connect
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {ctaOptions.map((option, index) => (
              <motion.div
                key={index}
                className="group relative"
                whileHover={{ y: -10, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Link
                  href={option.href}
                  className="glassmorphic-card relative p-8 rounded-2xl hover:border-[var(--color-accent-cyan)]/30 transition-all duration-300 block h-full"
                >
                  <div className={`inline-flex p-4 rounded-xl bg-gradient-to-r ${option.color} mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    {option.icon}
                  </div>
                  <h4 className="text-lg font-semibold text-[var(--color-text-primary)] mb-2">{option.title}</h4>
                  <p className="text-gray-400 text-sm">{option.description}</p>
                  
                  {/* Enhanced hover effect overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-accent-cyan)]/5 to-[var(--color-accent-purple)]/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          variants={itemVariants}
          className="mt-16 text-center"
        >
          <div className="glassmorphic-card max-w-3xl mx-auto p-8 rounded-2xl border border-[var(--color-accent-purple)]/20">
            <h3 className="text-xl font-bold text-[var(--color-text-primary)] mb-4">
              Still Have Questions?
            </h3>
            <p className="text-gray-300 mb-6">
              Our team is here to help you understand how AI can benefit your specific business needs. 
              No question is too small or too complex.
            </p>
            <motion.div
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Link
                href="/Contact"
                className="inline-flex items-center text-[var(--color-accent-cyan)] hover:text-[var(--color-accent-cyan)]/80 font-medium text-lg group"
              >
                Get Your Questions Answered
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}

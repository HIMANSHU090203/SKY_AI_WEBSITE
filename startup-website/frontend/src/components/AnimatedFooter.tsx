"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Mail, Phone, MapPin, Linkedin, Twitter, Github } from "lucide-react";
import axios from "axios";

export default function AnimatedFooter() {
  const [email, setEmail] = useState("");
  const [isSubscribing, setIsSubscribing] = useState(false);
  const [subscriptionStatus, setSubscriptionStatus] = useState("");

  const handleNewsletterSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    
    setIsSubscribing(true);
    setSubscriptionStatus("");
    
    try {
      await axios.post("/api/newsletter", { email });
      setSubscriptionStatus("success");
      setEmail("");
    } catch (error: any) {
      if (error.response?.status === 409) {
        setSubscriptionStatus("already_subscribed");
      } else {
        setSubscriptionStatus("error");
      }
    } finally {
      setIsSubscribing(false);
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const quickLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/Aboutus" },
    { name: "Careers", href: "/Careers" },
    { name: "Blogs", href: "/Blogs" },
    { name: "Contact", href: "/Contact" },
  ];

  const socialLinks = [
    {
      icon: <Linkedin className="w-5 h-5" />,
      href: "https://www.linkedin.com/company/sky-advanced-research-llp/",
      label: "LinkedIn",
      color: "hover:text-blue-400",
    },
    {
      icon: <Twitter className="w-5 h-5" />,
      href: "https://twitter.com/",
      label: "Twitter",
      color: "hover:text-cyan-400",
    },
    {
      icon: <Github className="w-5 h-5" />,
      href: "https://github.com/",
      label: "GitHub",
      color: "hover:text-gray-300",
    },
  ];

  return (
    <footer className="bg-gradient-to-t from-[var(--color-primary-bg)] to-gray-900 border-t border-[var(--color-accent-cyan)]/30 backdrop-blur-sm relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-accent-cyan)]/5 to-[var(--color-accent-purple)]/5" />
      
      <motion.div
        className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-16"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <motion.div variants={itemVariants} className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-20 h-20 rounded-xl overflow-hidden shadow-lg bg-white/10 backdrop-blur-sm">
                <img 
                  src="/Company logo .jpg" 
                  alt="SKY AI Logo" 
                  className="w-full h-full object-contain"
                  style={{ imageRendering: 'high-quality' }}
                />
              </div>
            </div>
            
            <p className="text-gray-300 mb-6 leading-relaxed max-w-md">
              SKY AI is an innovative technology firm specializing in AI integration for the corporate landscape. 
              We transform advanced research into practical, everyday solutions that drive business growth and efficiency.
            </p>
            
            <div className="space-y-3">
              <motion.a
                href="mailto:info@sky-ai.in"
                className="flex items-center text-gray-400 hover:text-[var(--color-accent-cyan)] transition-colors duration-300"
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Mail className="w-5 h-5 mr-3" />
                info@sky-ai.in
              </motion.a>
              
              <motion.a
                href="tel:+919783982649"
                className="flex items-center text-gray-400 hover:text-[var(--color-accent-cyan)] transition-colors duration-300"
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Phone className="w-5 h-5 mr-3" />
                +91 9783982649
              </motion.a>
              
              <motion.div
                className="flex items-start text-gray-400"
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <MapPin className="w-5 h-5 mr-3 mt-0.5 flex-shrink-0" />
                <span>
                  A-234 Kardhani Scheme Kalwar Road<br />
                  Jaipur, Rajasthan, 302012<br />
                  India
                </span>
              </motion.div>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={itemVariants}>
            <h4 className="text-lg font-semibold text-[var(--color-text-primary)] mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <motion.li
                  key={index}
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-[var(--color-accent-cyan)] transition-colors duration-300"
                  >
                    {link.name}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Social & Newsletter */}
          <motion.div variants={itemVariants}>
            <h4 className="text-lg font-semibold text-[var(--color-text-primary)] mb-6">Connect with Us</h4>
            
            <div className="flex space-x-4 mb-6">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-3 bg-gray-800/50 rounded-lg text-gray-400 ${social.color} transition-all duration-300`}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label={social.label}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>

            <div className="p-6 bg-gradient-to-r from-[var(--color-accent-cyan)]/10 to-[var(--color-accent-purple)]/10 rounded-2xl border border-[var(--color-accent-cyan)]/20">
              <h5 className="text-[var(--color-text-primary)] font-medium mb-2">Stay Updated</h5>
              <p className="text-gray-400 text-sm mb-4">
                Get the latest AI insights and company updates.
              </p>
              
              <form onSubmit={handleNewsletterSubmit} className="space-y-3">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="w-full px-3 py-2 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-[var(--color-accent-cyan)]/50 focus:ring-1 focus:ring-[var(--color-accent-cyan)]/30 transition-all duration-300"
                  required
                />
                <motion.button
                  type="submit"
                  disabled={isSubscribing || !email}
                  className="w-full inline-flex items-center justify-center px-4 py-2 bg-gradient-to-r from-[var(--color-accent-cyan)] to-[var(--color-accent-purple)] text-white font-medium text-sm rounded-lg hover:from-[var(--color-accent-cyan)]/80 hover:to-[var(--color-accent-purple)]/80 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {isSubscribing ? "Subscribing..." : "Subscribe"}
                  <ArrowRight className="w-4 h-4 ml-2" />
                </motion.button>
              </form>

              {subscriptionStatus === "success" && (
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-green-400 text-sm mt-2"
                >
                  ✅ Successfully subscribed!
                </motion.p>
              )}
              
              {subscriptionStatus === "already_subscribed" && (
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-yellow-400 text-sm mt-2"
                >
                  ⚠️ Email already subscribed
                </motion.p>
              )}
              
              {subscriptionStatus === "error" && (
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-red-400 text-sm mt-2"
                >
                  ❌ Subscription failed. Please try again.
                </motion.p>
              )}
            </div>
          </motion.div>
        </div>

        {/* Bottom Section */}
        <motion.div
          variants={itemVariants}
          className="mt-12 pt-8 border-t border-gray-700/50 flex flex-col md:flex-row justify-between items-center"
        >
          <div className="flex items-center text-gray-400 text-sm mb-4 md:mb-0">
            <span>© 2025 SKY AI. All rights reserved.</span>
          </div>

          <div className="flex items-center space-x-6 text-sm text-gray-400">
            <motion.a
              href="#"
              className="hover:text-[var(--color-accent-cyan)] transition-colors duration-300"
              whileHover={{ y: -2 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              Privacy Policy
            </motion.a>
            <motion.a
              href="#"
              className="hover:text-[var(--color-accent-cyan)] transition-colors duration-300"
              whileHover={{ y: -2 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              Terms of Service
            </motion.a>
            <motion.a
              href="#"
              className="hover:text-[var(--color-accent-cyan)] transition-colors duration-300"
              whileHover={{ y: -2 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              Cookie Policy
            </motion.a>
          </div>
        </motion.div>
      </motion.div>
    </footer>
  );
}



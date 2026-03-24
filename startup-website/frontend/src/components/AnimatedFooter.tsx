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
    <footer className="relative overflow-hidden border-t border-white/10 bg-slate-950/35 backdrop-blur-[6px]">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/5 via-transparent to-violet-500/5 pointer-events-none" />
      
      <motion.div
        className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-8"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-x-8 gap-y-4 items-start">
          {/* Company Info */}
          <motion.div variants={itemVariants} className="md:col-span-2 lg:col-span-5">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-12 h-12 rounded-xl overflow-hidden shadow-lg bg-white/10 backdrop-blur-sm">
                <img 
                  src="/Company logo .jpg" 
                  alt="SKY AI Logo" 
                  className="w-full h-full object-contain"
                  style={{ imageRendering: 'high-quality' }}
                />
              </div>
            </div>
            
            <p className="text-gray-300/90 mb-3 leading-6 max-w-md">
              SKY AI is an innovative technology firm specializing in AI integration for the corporate landscape. 
              We transform advanced research into practical, everyday solutions that drive business growth and efficiency.
            </p>
            
            <div className="space-y-2">
              <motion.a
                href="mailto:info@sky-ai.in"
                className="flex items-center text-gray-300/80 hover:text-cyan-200 transition-colors"
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Mail className="w-5 h-5 mr-3" />
                info@sky-ai.in
              </motion.a>
              
              <motion.a
                href="tel:+919783982649"
                className="flex items-center text-gray-300/80 hover:text-cyan-200 transition-colors"
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Phone className="w-5 h-5 mr-3" />
                +91 9783982649
              </motion.a>
              
              <motion.div
                className="flex items-start text-gray-300/80 hover:text-cyan-200 transition-colors"
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
          <motion.div variants={itemVariants} className="lg:col-span-3 lg:justify-self-center">
            <h4 className="text-lg font-semibold text-[var(--color-text-primary)] mb-3">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <motion.li
                  key={index}
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Link
                    href={link.href}
                    className="text-gray-300/90 transition hover:text-cyan-200"
                  >
                    {link.name}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Social & Newsletter */}
          <motion.div variants={itemVariants} className="lg:col-span-4 lg:w-full lg:max-w-sm lg:justify-self-end">
            <h4 className="text-lg font-semibold text-[var(--color-text-primary)] mb-3">Connect with Us</h4>
            
            <div className="flex space-x-4 mb-3">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-lg border border-white/10 bg-white/5 p-2 text-gray-300 transition hover:-translate-y-0.5 hover:border-cyan-300/40 hover:bg-white/10 hover:text-cyan-200"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label={social.label}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>

            <div className="rounded-2xl border border-cyan-300/20 bg-white/5 backdrop-blur-xl shadow-[0_8px_30px_rgba(0,0,0,0.25)] p-3">
              <h5 className="text-[var(--color-text-primary)] font-medium mb-2">Stay Updated</h5>
              <p className="text-gray-400 text-sm mb-2">
                Get the latest AI insights and company updates.
              </p>
              
              <form onSubmit={handleNewsletterSubmit} className="space-y-2">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="w-full rounded-lg border border-white/20 bg-black/20 px-3 py-2 text-white placeholder:text-gray-300/70 outline-none transition focus:border-cyan-300/50 focus:bg-black/25 focus:ring-2 focus:ring-cyan-300/20"
                  required
                />
                <motion.button
                  type="submit"
                  disabled={isSubscribing || !email}
                  className="glass-button w-full inline-flex items-center justify-center px-4 py-1.5 text-sm font-medium disabled:cursor-not-allowed disabled:opacity-50"
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
          className="mt-6 flex flex-col items-center justify-between border-t border-white/10 pt-4 md:flex-row"
        >
          <div className="flex items-center text-gray-400 text-sm mb-2 md:mb-0">
            <span>© 2025 SKY AI. All rights reserved.</span>
          </div>

          <div className="flex items-center space-x-4 text-sm text-gray-400">
            <motion.a
              href="#"
              className="text-sm text-gray-400 transition hover:text-cyan-200"
              whileHover={{ y: -2 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              Privacy Policy
            </motion.a>
            <motion.a
              href="#"
              className="text-sm text-gray-400 transition hover:text-cyan-200"
              whileHover={{ y: -2 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              Terms of Service
            </motion.a>
            <motion.a
              href="#"
              className="text-sm text-gray-400 transition hover:text-cyan-200"
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



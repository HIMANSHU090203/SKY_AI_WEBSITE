"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowRight } from "lucide-react";
import Link from "next/link";
import { orbitron } from "@/app/fonts";

export default function AnimatedNavbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/Aboutus" },
    { name: "Blogs", href: "/Blogs" },
    { name: "Careers", href: "/Careers" },
    { name: "Contact", href: "/Contact" },
  ];

  const containerVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 20,
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
        ease: "easeOut",
      },
    },
  };

  const linkVariants = {
    hover: { 
      scale: 1.05,
      color: "var(--color-accent-cyan)",
      transition: { duration: 0.2 }
    }
  };

  const mobileMenuVariants = {
    hidden: {
      opacity: 0,
      height: 0,
      transition: {
        duration: 0.3,
        ease: "easeInOut",
      },
    },
    visible: {
      opacity: 1,
      height: "auto",
      transition: {
        duration: 0.3,
        ease: "easeInOut",
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  };

  const mobileItemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.3,
        ease: "easeOut",
      },
    },
  };

  return (
    <motion.nav
      className={`${orbitron.className} fixed w-full z-50 transition-all duration-500 ${
        scrolled
          ? "glassmorphic-panel border-b border-[var(--color-accent-cyan)]/30 shadow-lg shadow-[var(--color-accent-cyan)]/20"
          : "bg-transparent"
      }`}
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <motion.div
            className="flex-shrink-0 flex items-center gap-3"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <Link href="/" className="flex items-center gap-3">
              <div className="w-16 h-16 rounded-xl overflow-hidden shadow-lg bg-white/10 backdrop-blur-sm">
                <img 
                  src="/Company logo .jpg?v=2" 
                  alt="SKY AI Logo" 
                  className="w-full h-full object-contain"
                  style={{ imageRendering: 'high-quality' }}
                />
              </div>
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link, index) => (
              <motion.div
                key={link.name}
                variants={itemVariants}
                whileHover={{ y: -2 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Link
                  href={link.href}
                  className="relative px-4 py-2 text-gray-300 hover:text-[var(--color-accent-cyan)] transition-colors duration-300 group"
                >
                  <span className="relative z-10">{link.name}</span>
                  <motion.div
                    className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-[var(--color-accent-cyan)] to-[var(--color-accent-purple)] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"
                    whileHover={{ scaleX: 1 }}
                  />
                </Link>
              </motion.div>
            ))}
          </div>

          {/* CTA Button */}
          <motion.div
            className="hidden md:block"
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <Link
              href="/Contact"
              className="enhanced-button inline-flex items-center px-6 py-3 text-white font-semibold rounded-xl shadow-lg shadow-[var(--color-accent-cyan)]/25 hover:shadow-[var(--color-accent-cyan)]/40 transition-all duration-300"
            >
              Get Started
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </motion.div>

          {/* Mobile Menu Button */}
          <motion.button
            className="md:hidden p-2 text-gray-300 hover:text-white transition-colors duration-300"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          >
            <AnimatePresence mode="wait">
              {isMenuOpen ? (
                <motion.div
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <X size={24} />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <Menu size={24} />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              className="md:hidden glassmorphic-panel border-t border-[var(--color-accent-cyan)]/30 shadow-lg shadow-[var(--color-accent-cyan)]/20"
              variants={mobileMenuVariants}
              initial="hidden"
              animate="visible"
              exit="hidden"
            >
              <div className="px-6 py-8 space-y-6">
                {navLinks.map((link, index) => (
                  <motion.div
                    key={link.name}
                    variants={mobileItemVariants}
                    whileHover={{ x: 10 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <Link
                      href={link.href}
                      onClick={() => setIsMenuOpen(false)}
                      className="block text-lg font-semibold text-white hover:text-[var(--color-accent-cyan)] transition-colors duration-300 py-2"
                    >
                      {link.name}
                    </Link>
                  </motion.div>
                ))}
                
                <motion.div
                  variants={mobileItemVariants}
                  className="pt-4 border-t border-gray-700/50"
                >
                  <Link
                    href="/Contact"
                    onClick={() => setIsMenuOpen(false)}
                    className="enhanced-button inline-flex items-center px-6 py-3 text-white font-semibold rounded-xl shadow-lg shadow-[var(--color-accent-cyan)]/25 hover:shadow-[var(--color-accent-cyan)]/40 transition-all duration-300"
                  >
                    Get Started
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
}



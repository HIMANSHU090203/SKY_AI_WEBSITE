"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, MessageSquare, Users, Clock, ArrowRight, CheckCircle, X, Menu, Rocket, Linkedin, Twitter, Github } from "lucide-react";
import Link from "next/link";
import axios from "axios";
import VideoBackground from "../../components/VideoBackground";
import AnimatedNavbar from "../../components/AnimatedNavbar";
import AnimatedFooter from "../../components/AnimatedFooter";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [responseMessage, setResponseMessage] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setResponseMessage("");

    try {
      const response = await axios.post("/api/contact", formData);
      if (response.status === 200) {
        setStatus("success");
        setResponseMessage("Your message has been sent successfully!");
        setFormData({ name: "", email: "", subject: "", message: "" });
      }
    } catch (error: any) {
      setStatus("error");
      setResponseMessage(
        error.response?.data?.message || "Failed to send message. Please try again."
      );
    }
  };

  const contactInfo = [
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Our Office",
      content: "A-234 Kardhani Scheme Kalwar Road, Jaipur, Rajasthan, 302012, India",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Phone",
      content: "+91 9783982649",
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email",
      content: "info@sky-ai.in",
      color: "from-green-500 to-emerald-500",
    },
  ];

  const socialLinks = [
    {
      icon: <Linkedin className="w-6 h-6" />,
      href: "https://www.linkedin.com/company/sky-advanced-research-llp/",
      label: "LinkedIn",
      color: "hover:text-blue-400",
    },
    {
      icon: <Twitter className="w-6 h-6" />,
      href: "https://twitter.com/",
      label: "Twitter",
      color: "hover:text-cyan-400",
    },
    {
      icon: <Github className="w-6 h-6" />,
      href: "https://github.com/",
      label: "GitHub",
      color: "hover:text-gray-300",
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
              <MessageSquare className="w-4 h-4 mr-2" />
              Get in Touch
            </motion.div>
            
            <h1 className="font-orbitron text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight">
              Ready to Transform
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent block">
                Your Business?
              </span>
            </h1>
            
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Let's start the conversation about how AI can revolutionize your business operations.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="glassmorphic-card relative p-8 rounded-2xl">
                <h3 className="text-2xl font-bold text-white mb-6">Send us a message</h3>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <motion.div
                      whileFocus={{ scale: 1.02 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                        Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600/50 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                        placeholder="Your name"
                      />
                    </motion.div>
                    
                    <motion.div
                      whileFocus={{ scale: 1.02 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600/50 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                        placeholder="your@email.com"
                      />
                    </motion.div>
                  </div>

                  <motion.div
                    whileFocus={{ scale: 1.02 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600/50 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                      placeholder="What's this about?"
                    />
                  </motion.div>

                  <motion.div
                    whileFocus={{ scale: 1.02 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={5}
                      required
                      className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600/50 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 resize-none"
                      placeholder="Tell us about your project..."
                    ></textarea>
                  </motion.div>

                  <motion.button
                    type="submit"
                    className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-4 rounded-lg font-semibold hover:from-blue-600 hover:to-purple-700 transition-all duration-300 shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 flex items-center justify-center"
                    whileHover={{ scale: 1.02, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                    disabled={status === "loading"}
                  >
                    {status === "loading" ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin mr-2" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5 mr-2" />
                        Send Message
                      </>
                    )}
                  </motion.button>

                  {responseMessage && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className={`p-4 rounded-lg flex items-center ${
                        status === "success" 
                          ? "bg-green-500/20 border border-green-500/30 text-green-400" 
                          : "bg-red-500/20 border border-red-500/30 text-red-400"
                      }`}
                    >
                      <CheckCircle className="w-5 h-5 mr-2" />
                      {responseMessage}
                    </motion.div>
                  )}
                </form>
              </div>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              className="space-y-8"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              {/* Contact Details */}
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={index}
                    className="glassmorphic-card group relative p-8 rounded-2xl hover:border-[var(--color-accent-cyan)]/30 transition-all duration-300 h-full"
                    whileHover={{ y: -10, scale: 1.02 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <div className="flex items-start">
                      <div className={`p-3 rounded-lg bg-gradient-to-r ${info.color} mr-4 group-hover:scale-110 transition-transform duration-300`}>
                        {info.icon}
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-white mb-2">{info.title}</h4>
                        <p className="text-gray-300">{info.content}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Social Links */}
              <motion.div
                className="glassmorphic-card p-8 rounded-2xl"
                whileHover={{ y: -10, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <h4 className="text-lg font-semibold text-white mb-4">Follow Us</h4>
                <div className="flex space-x-4">
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
              </motion.div>

              {/* CTA */}
              <motion.div
                className="glassmorphic-card p-8 rounded-2xl border border-[var(--color-accent-cyan)]/20"
                whileHover={{ y: -10, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <h4 className="text-lg font-semibold text-white mb-3">Ready to get started?</h4>
                <p className="text-gray-300 mb-4">
                  Let's discuss how AI can transform your business operations.
                </p>
                <motion.button
                  className="inline-flex items-center text-blue-400 hover:text-blue-300 font-medium"
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  Schedule a call
                  <ArrowRight className="w-4 h-4 ml-2" />
                </motion.button>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="font-orbitron text-3xl font-bold text-white mb-4 tracking-tight">
              Find Us <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Here</span>
            </h2>
            <p className="text-gray-300">Visit our office in Jaipur, India</p>
          </motion.div>

          <motion.div
            className="glassmorphic-card relative rounded-2xl overflow-hidden"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="aspect-video bg-gradient-to-br from-blue-500/20 to-purple-500/20 flex items-center justify-center">
              <div className="text-center">
                <MapPin className="w-16 h-16 text-blue-400/50 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">A-234 Kardhani Scheme</h3>
                <p className="text-gray-300">Kalwar Road, Jaipur, Rajasthan, 302012, India</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <AnimatedFooter />
    </div>
  );
}
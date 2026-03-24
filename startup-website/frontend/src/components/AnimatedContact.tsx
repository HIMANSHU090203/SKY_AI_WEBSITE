"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Mail, Phone, MapPin, Send, MessageSquare, CheckCircle, ArrowRight, Linkedin, Twitter, Github } from "lucide-react";
import axios from "axios";

export default function AnimatedContact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [responseMessage, setResponseMessage] = useState("");

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
            <MessageSquare className="w-4 h-4 mr-2" />
            Get in Touch
          </motion.div>
          
          <h2 className="font-orbitron text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight">
            Ready to Transform
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent block">
              Your Business?
            </span>
          </h2>
          
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Let's start the conversation about how AI can revolutionize your business operations.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <motion.div variants={cardVariants}>
            <div className="glassmorphic-card relative p-8 rounded-2xl">
              <h3 className="text-2xl font-bold text-[var(--color-text-primary)] mb-6">Send us a message</h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <motion.div
                    className="floating-label-input"
                    whileFocus={{ scale: 1.02 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="enhanced-form-input w-full"
                      placeholder=" "
                    />
                    <label htmlFor="name" className="block text-sm font-medium">
                      Name
                    </label>
                  </motion.div>
                  
                  <motion.div
                    className="floating-label-input"
                    whileFocus={{ scale: 1.02 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="enhanced-form-input w-full"
                      placeholder=" "
                    />
                    <label htmlFor="email" className="block text-sm font-medium">
                      Email
                    </label>
                  </motion.div>
                </div>

                <motion.div
                  className="floating-label-input"
                  whileFocus={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="enhanced-form-input w-full"
                    placeholder=" "
                  />
                  <label htmlFor="subject" className="block text-sm font-medium">
                    Subject
                  </label>
                </motion.div>

                <motion.div
                  className="floating-label-input"
                  whileFocus={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    required
                    className="enhanced-form-input w-full resize-none"
                    placeholder=" "
                  ></textarea>
                  <label htmlFor="message" className="block text-sm font-medium">
                    Message
                  </label>
                </motion.div>

                <motion.button
                  type="submit"
                  className="enhanced-button w-full px-6 py-4 rounded-lg font-semibold shadow-lg shadow-[var(--color-accent-cyan)]/25 hover:shadow-[var(--color-accent-cyan)]/40 flex items-center justify-center"
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
          <motion.div variants={cardVariants} className="space-y-8">
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
                      <h4 className="text-lg font-semibold text-[var(--color-text-primary)] mb-2">{info.title}</h4>
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
              <h4 className="text-lg font-semibold text-[var(--color-text-primary)] mb-4">Follow Us</h4>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`rounded-lg border border-white/10 bg-white/5 p-3 text-gray-300 transition hover:-translate-y-0.5 hover:border-cyan-300/40 hover:bg-white/10 hover:text-cyan-200 ${social.color}`}
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
              <h4 className="text-lg font-semibold text-[var(--color-text-primary)] mb-3">Ready to get started?</h4>
              <p className="text-gray-300 mb-4">
                Let's discuss how AI can transform your business operations.
              </p>
              <motion.button
                className="inline-flex items-center text-[var(--color-accent-cyan)] hover:text-[var(--color-accent-cyan)]/80 font-medium"
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                Schedule a call
                <ArrowRight className="w-4 h-4 ml-2" />
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}



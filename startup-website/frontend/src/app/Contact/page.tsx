"use client";

import { useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  MessageSquare,
  Users,
  Clock,
  ArrowRight,
  CheckCircle,
  X,
  Menu,
  Rocket,
} from "lucide-react";
import Link from "next/link";
import dynamic from "next/dynamic";
import Image from "next/image";
import Footer from '../../components/ui/Footer';

// Dynamically import ParticleBackground with SSR disabled
const ParticleBackground = dynamic(() => import("../../components/ParticleBackground"), {
  ssr: false,
  loading: () => <div className="absolute inset-0 bg-neutral-900" />,
});

// Dynamically import ThreeDBackground with SSR disabled
const ThreeDBackground = dynamic(() => import("../../components/ThreeDBackground"), {
  ssr: false,
  loading: () => <div className="absolute inset-0 bg-black" />,
});

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
    company: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      if (res.ok) {
        setIsSubmitted(true);
        setFormData({ name: '', email: '', subject: '', message: '', company: '' });
        setTimeout(() => setIsSubmitted(false), 3000);
      } else {
        const data = await res.json();
        alert(data.error || 'Failed to send message.');
      }
    } catch (err) {
      alert('Failed to send message.');
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Navigation links array for DRY usage
  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Blogs", href: "/Blogs" },
    { name: "About Us", href: "/Aboutus" },
    { name: "Careers", href: "/Careers" },
    { name: "Contact", href: "/Contact" },
  ];

  return (
    <div className="min-h-screen bg-black relative overflow-hidden font-[Poppins,Arial,sans-serif]">
      {/* Deep gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-black to-white/5 pointer-events-none" />

      {/* Particle background */}
      <ParticleBackground />

      {/* Navigation */}
      <nav className="fixed w-full z-50 bg-black/90 backdrop-blur-xl border-b border-white/10 shadow-2xl shadow-black/60 transition-all duration-500 font-[Poppins,Arial,sans-serif]">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="flex items-center justify-between h-20">
            <div className="flex-shrink-0 flex items-center gap-3">
              <span className="ml-3 text-base sm:text-lg font-semibold text-white tracking-wide select-none font-[Poppins,Arial,sans-serif] whitespace-nowrap">SKY AI</span>
            </div>
            <div className="hidden md:flex items-center space-x-8 justify-end w-full">
              {navLinks.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`px-5 py-2 rounded-xl font-bold text-base tracking-wide transition-all duration-300 relative group focus:outline-none focus-visible:ring-2 focus-visible:ring-white/80 focus-visible:ring-offset-2 focus-visible:ring-offset-black text-white hover:bg-transparent hover:shadow-lg`}
                >
                  <span className="relative z-10">{item.name}</span>
                  <span className="absolute left-0 bottom-0 w-full h-0.5 bg-gradient-to-r from-white to-black scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                </Link>
              ))}
            </div>
            <div className="md:hidden flex items-center">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-white hover:text-black p-2 rounded-xl focus:outline-none focus-visible:ring-2 focus-visible:ring-white/80 focus-visible:ring-offset-2 focus-visible:ring-offset-black transition-colors duration-300 shadow"
                aria-label={isMenuOpen ? "Close menu" : "Open menu"}
              >
                {isMenuOpen ? <X size={30} /> : <Menu size={30} />}
              </button>
            </div>
          </div>
        </div>
        {isMenuOpen && (
          <div className="md:hidden bg-black/95 backdrop-blur-2xl border-t border-white/10 shadow-2xl shadow-black/60 animate-slideDown">
            <div className="flex flex-col px-6 py-8 space-y-4 items-center">
              {navLinks.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className={`w-full text-center px-5 py-3 rounded-xl font-bold text-lg transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/80 focus-visible:ring-offset-2 focus-visible:ring-offset-black text-white hover:bg-transparent hover:shadow-lg`}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden z-10 pt-32 pb-20">
        <div className="absolute inset-0 -z-10">
          <ThreeDBackground />
        </div>
        <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-black/80 to-white/10 border border-white/10 rounded-full text-white text-sm font-medium mb-8 backdrop-blur-sm shadow-lg shadow-black/20">
              <MessageSquare className="w-4 h-4 mr-2 text-white" />
              Get in touch with our team
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black bg-gradient-to-r from-white via-gray-200 to-black bg-clip-text text-transparent drop-shadow-2xl tracking-widest uppercase mb-4 select-none leading-tight">
              SKY AI <br />
              Advanced Research LLP
            </h1>

            <p className="text-xl sm:text-2xl text-white mb-12 max-w-3xl mx-auto leading-relaxed font-light">
              Ready to transform your business with AI? Let's start the conversation.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-24 relative z-10">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div className="bg-gradient-to-br from-black/80 to-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 shadow-lg shadow-black/20">
              <h2 className="text-3xl font-bold text-white mb-6 tracking-tight">
                Send us a message
              </h2>

              {isSubmitted && (
                <div className="mb-6 p-4 bg-gradient-to-r from-black/80 to-white/10 border border-white/10 rounded-xl flex items-center">
                  <CheckCircle className="w-5 h-5 text-white mr-3" />
                  <span className="text-white">Message sent successfully! We'll get back to you soon.</span>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-white text-sm font-medium mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-black/80 border border-white/10 rounded-xl text-white placeholder-white/40 focus:outline-none focus:border-white/40 focus:ring-2 focus:ring-white/20 transition-all duration-300"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label className="block text-white text-sm font-medium mb-2">
                      Company
                    </label>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-black/80 border border-white/10 rounded-xl text-white placeholder-white/40 focus:outline-none focus:border-white/40 focus:ring-2 focus:ring-white/20 transition-all duration-300"
                      placeholder="Your company"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-white text-sm font-medium mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-black/80 border border-white/10 rounded-xl text-white placeholder-white/40 focus:outline-none focus:border-white/40 focus:ring-2 focus:ring-white/20 transition-all duration-300"
                    placeholder="your.email@company.com"
                  />
                </div>

                <div>
                  <label className="block text-white text-sm font-medium mb-2">
                    Subject *
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-black/80 border border-white/10 rounded-xl text-white placeholder-white/40 focus:outline-none focus:border-white/40 focus:ring-2 focus:ring-white/20 transition-all duration-300"
                    placeholder="What's this about?"
                  />
                </div>

                <div>
                  <label className="block text-white text-sm font-medium mb-2">
                    Message *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 bg-black/80 border border-white/10 rounded-xl text-white placeholder-white/40 focus:outline-none focus:border-white/40 focus:ring-2 focus:ring-white/20 transition-all duration-300 resize-none"
                    placeholder="Tell us about your project, questions, or how we can help..."
                  />
                </div>

                <button
                  type="submit"
                  className="group w-full bg-gradient-to-r from-gray-600 to-gray-700 text-white px-8 py-4 rounded-xl text-lg font-medium transition-all duration-300 shadow-lg shadow-gray-500/30 border border-gray-500/50 hover:from-gray-700 hover:to-gray-800 hover:scale-105 transform flex items-center justify-center"
                  aria-label="Send message"
                >
                  Send Message
                  <Send className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <div className="bg-gradient-to-br from-black/80 to-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 shadow-lg shadow-black/20">
                <h3 className="text-2xl font-bold text-white mb-6 tracking-tight">
                  Get in touch
                </h3>

                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-black/80 to-white/10 rounded-xl flex items-center justify-center mr-4">
                      <Mail className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="text-white font-semibold mb-1">Email</h4>
                      <a href="mailto:contact@skyai.com" className="text-white hover:text-black transition-colors">
                        info@sky-ai.in
                      </a>
                      <p className="text-white/60 text-sm">We'll respond within 24 hours</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-black/80 to-white/10 rounded-xl flex items-center justify-center mr-4">
                      <Phone className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="text-white font-semibold mb-1">Phone</h4>
                      <p className="text-white">+91 9783982649</p>
                      <p className="text-white/60 text-sm">Mon-Fri, 9AM-6PM IST</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-black/80 to-white/10 rounded-xl flex items-center justify-center mr-4">
                      <MapPin className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="text-white font-semibold mb-1">Office</h4>
                      <p className="text-white">Jaipur,Rajasthan,302012 </p>
                      <p className="text-white"> India</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Quick Links */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <Link
                  href="mailto:info@sky-ai.in"
                  className="bg-gradient-to-br from-black/80 to-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 shadow-lg shadow-black/20 hover:scale-105 transition-transform duration-300 group"
                >
                  <Users className="w-8 h-8 text-white mb-4 group-hover:text-black transition-colors" />
                  <h4 className="text-white font-semibold mb-2">Team</h4>
                  <p className="text-white text-sm mb-3">Ready to discuss enterprise solutions</p>
                  <div className="flex items-center text-white text-sm font-medium">
                    Contact Team <ArrowRight className="ml-1 w-4 h-4" />
                  </div>
                </Link>

                <Link
                  href="mailto:info@sky-ai.in"
                  className="bg-gradient-to-br from-black/80 to-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 shadow-lg shadow-black/20 hover:scale-105 transition-transform duration-300 group"
                >
                  <Clock className="w-8 h-8 text-white mb-4 group-hover:text-black transition-colors" />
                  <h4 className="text-white font-semibold mb-2">Support</h4>
                  <p className="text-white text-sm mb-3">Get help with technical questions</p>
                  <div className="flex items-center text-white text-sm font-medium">
                    Get Support <ArrowRight className="ml-1 w-4 h-4" />
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
<section className="py-24 bg-gradient-to-b from-black/90 to-white/5 backdrop-blur-sm relative z-10">
  <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12">
    <div className="text-center mb-16">
      <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6 tracking-tight">
        Frequently Asked Questions
      </h2>
      <p className="text-xl text-white font-light">
        Answers to common questions about working with our early-stage team at SKY AI.
      </p>
    </div>

    <div className="space-y-6">
      {[
        {
          question: "What is SKY AI building?",
          answer:
            "We're focused on building practical AI tools that solve real-world problems for businesses and individuals. The journey is still in its early days — and that's the exciting part.",
        },
        {
          question: "Do I need experience with AI to join?",
          answer:
            "Not necessarily. We're more interested in curiosity, problem-solving ability, and a willingness to learn than in prior AI experience.",
        },
        {
          question: "Is this a remote role?",
          answer:
            "Currently, we’re working closely together in-office to move fast and stay aligned. Remote options may come later as we grow.",
        },
        {
          question: "What can I expect from the culture?",
          answer:
            "It’s fast-paced, hands-on, and full of learning. Everyone contributes directly to the product and has a real impact from day one.",
        },
      ].map((faq, index) => (
        <div
          key={index}
          className="bg-gradient-to-br from-black/80 to-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 shadow-lg shadow-black/20"
        >
          <h3 className="text-white font-semibold mb-3 text-lg">{faq.question}</h3>
          <p className="text-white leading-relaxed">{faq.answer}</p>
        </div>
      ))}
    </div>
  </div>
</section>


      <Footer />
    </div>
  );
}
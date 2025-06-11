"use client";

import { useState, useEffect } from "react";
import {
  ArrowRight,
  Menu,
  X,
  Target,
  Eye,
  Brain,
  Heart,
  Shield,
  Globe,
} from "lucide-react";
import Link from "next/link";
import dynamic from "next/dynamic";
import ThreeDBackground from "../../components/ThreeDBackground";
import Footer from "@/components/ui/Footer";

// Dynamically import ParticleBackground with SSR disabled
const ParticleBackground = dynamic(() => import("../../components/ParticleBackground"), {
  ssr: false,
  loading: () => <div className="absolute inset-0 bg-black" />,
});

export default function AboutUsPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const teamMembers = [
    {
      name: "Saurabh Jalendra",
      role: "Co-Founder",
      background: "Computer Engineer",
      image: "SJ",
    },
    {
      name: "Shubhendra Yadav",
      role: "Intern",
      background: "Data-Scientist and Automobile Engineer",
      image: "SY",
    },
  ];

  const values = [
    {
      icon: <Brain className="w-8 h-8" />,
      title: "Innovation First",
      description:
        "We push the boundaries of what's possible, constantly exploring new frontiers in AI research and development.",
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Human-Centric",
      description:
        "Technology should enhance human potential, not replace it. We build AI that empowers people to achieve more.",
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Ethical AI",
      description:
        "We're committed to developing AI that's safe, transparent, and beneficial for all of humanity.",
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Global Impact",
      description:
        "Our mission extends beyond profit—we're building technology that can solve the world's greatest challenges.",
    },
  ];

  const milestones = [
    {
      year: "2025",
      title: "Foundation",
      description: "SKY AI was founded to build smart solutions powered by AI.",
    },
  ];

  return (
    <div className="min-h-screen bg-black relative overflow-hidden font-[Poppins,Arial,sans-serif]">
      <div className="absolute inset-0 bg-gradient-to-br from-black via-black to-white/5 pointer-events-none" />
      <div className="absolute inset-0 z-0 pointer-events-none">
        <ThreeDBackground />
      </div>
      <nav className="fixed w-full z-50 bg-gradient-to-br from-black via-black to-white/5 backdrop-blur-2xl border-b border-white/10 shadow-2xl shadow-black/60 transition-all duration-700 ease-out font-[Poppins,Arial,sans-serif]">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="flex items-center justify-between h-20">
            <div className="flex-shrink-0 flex items-center gap-3">
              <span className="ml-3 text-base sm:text-lg font-semibold text-white tracking-wide select-none font-[Poppins,Arial,sans-serif] whitespace-nowrap">
                SKY AI
              </span>
            </div>
            <div className="hidden md:flex items-center space-x-10">
              {[
                { name: "Home", href: "/" },
                { name: "Blogs", href: "/Blogs" },
                { name: "About Us", href: "/Aboutus" },
                { name: "Careers", href: "/Careers" },
                { name: "Contact", href: "/Contact" },
              ].map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`text-gray-200 hover:text-gray-100 text-base font-semibold tracking-wide relative group transition-colors duration-300 ${
                    item.name === "About Us" ? "text-gray-100" : ""
                  }`}
                >
                  {item.name}
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-gray-400 to-gray-600 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
                </Link>
              ))}
            </div>

            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen((prev) => !prev)}
                className="text-gray-200 hover:text-gray-100 transition-colors duration-300 relative z-50"
                aria-label={isMenuOpen ? "Close menu" : "Open menu"}
              >
                {isMenuOpen ? (
                  <X size={30} className="transform rotate-0 transition-transform duration-500" />
                ) : (
                  <Menu size={30} className="transform rotate-0 transition-transform duration-500" />
                )}
              </button>
            </div>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden bg-black/95 backdrop-blur-2xl border-t border-gray-900/30 transition-all duration-600 ease-in-out">
            <div className="flex flex-col px-6 py-8 space-y-6 items-center">
              {[
                { name: "Home", href: "/" },
                { name: "Blogs", href: "/Blogs" },
                { name: "About Us", href: "/Aboutus" },
                { name: "Careers", href: "/Careers" },
                { name: "Contact", href: "/Contact" },
              ].map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="text-gray-200 hover:text-gray-100 font-semibold text-xl py-3 px-20 rounded-full transition-colors duration-300 relative group"
                >
                  {item.name}
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-gray-400 to-gray-600 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
                </Link>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden z-10 pt-32 pb-20">
        <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="max-w-5xl mx-auto text-center">
            <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-black/60 to-white/40 border border-gray-700/60 rounded-full text-gray-200 text-sm font-medium mb-8 backdrop-blur-sm shadow-lg shadow-black/20">
              <Eye className="w-4 h-4 mr-2 text-gray-300" />
              Our Vision for the Future
            </div>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-8 leading-tight tracking-tight text-center">
              About <br />
              <span className="bg-gradient-to-r from-gray-400 via-gray-300 to-gray-500 bg-clip-text text-transparent">
                SKY AI
              </span>
            </h1>

            <p className="text-xl sm:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed font-light text-center">
              We're not just building AI—we're crafting the future of human-machine collaboration.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-24 bg-gradient-to-b from-gray-950/20 to-black backdrop-blur-sm relative z-10">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6 tracking-tight">
                Our Mission
              </h2>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed font-light">
                To democratize artificial intelligence and make advanced AI capabilities accessible to everyone,
                while ensuring that the benefits of AI are distributed equitably across all of humanity.
              </p>
              <p className="text-lg text-gray-400 leading-relaxed font-light">
                We believe that AI should augment human intelligence, not replace it. Our technology is designed
                to enhance creativity, accelerate learning, and solve complex problems that matter to people and society.
              </p>
            </div>
            <div className="relative">
              <div className="w-full h-80 bg-gradient-to-br from-gray-600/40 to-black/60 rounded-2xl backdrop-blur-sm border border-gray-700/30 flex items-center justify-center">
                <Target className="w-20 h-20 text-gray-300" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 relative z-10">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center mb-20">
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6 tracking-tight">
              Our Core Values
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto font-light">
              The principles that guide everything we do at SKY AI.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="group p-8 bg-gradient-to-br from-black/30 to-white/10 backdrop-blur-sm border border-gray-800/40 rounded-2xl hover:bg-gradient-to-br hover:from-black/50 hover:to-white/20 transition-all duration-300 hover:scale-105 transform shadow-lg shadow-black/20"
              >
                <div className="text-gray-400 mb-6 group-hover:text-gray-300 transition-colors">
                  {value.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-4 tracking-tight">
                  {value.title}
                </h3>
                <p className="text-gray-300 leading-relaxed font-light text-sm">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-24 bg-gradient-to-b from-gray-950/20 to-black backdrop-blur-sm relative z-10">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center mb-20">
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6 tracking-tight">
              Leadership Team
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto font-light">
              People driving the future of AI research and development.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="group text-center flex flex-col items-center w-72">
                <div className="w-32 h-32 mx-auto mb-6 bg-gradient-to-br from-gray-600/40 to-black/60 rounded-full backdrop-blur-sm border border-gray-700/30 flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                  <span className="text-2xl font-bold text-white">{member.image}</span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-2 tracking-tight">
                  {member.name}
                </h3>
                <p className="text-gray-300 mb-2 font-medium">{member.role}</p>
                <p className="text-gray-400 text-sm font-light">{member.background}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-24 relative z-10">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center mb-20">
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6 tracking-tight">
              Our Journey
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto font-light">
              Key milestones in our mission to advance artificial intelligence.
            </p>
          </div>

          <div className="space-y-12">
            {milestones.map((milestone, index) => (
              <div key={index} className="flex flex-col md:flex-row items-center gap-8">
                <div className="flex-shrink-0 w-24 h-24 bg-gradient-to-br from-gray-600/40 to-black/60 rounded-full backdrop-blur-sm border border-gray-700/30 flex items-center justify-center">
                  <span className="text-lg font-bold text-white">{milestone.year}</span>
                </div>
                <div className="flex-1 text-center md:text-left">
                  <h3 className="text-2xl font-semibold text-white mb-3 tracking-tight">
                    {milestone.title}
                  </h3>
                  <p className="text-gray-300 leading-relaxed font-light">
                    {milestone.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative z-10 bg-gradient-to-r from-gray-950/30 via-black to-white/20">
        <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12 text-center">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6 tracking-tight">
            Join Our Mission
          </h2>
          <p className="text-xl text-gray-300 mb-12 font-light">
            Be part of the team that's shaping the future of artificial intelligence.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/Careers"
              className="bg-gradient-to-r from-gray-600 to-gray-700 hover:from-gray-700 hover:to-gray-800 text-white px-8 py-4 rounded-xl text-lg font-medium transition-all duration-300 shadow-lg shadow-gray-500/30 border border-gray-500/50 hover:scale-105 transform hover:shadow-gray-500/40 flex items-center justify-center"
            >
              View Open Positions
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
            <Link
              href="/Contact"
              className="bg-gradient-to-r from-gray-600 to-gray-700 hover:from-gray-700 hover:to-gray-800 text-white px-8 py-4 rounded-xl text-lg font-medium transition-all duration-300 shadow-lg shadow-gray-500/30 border border-gray-500/50 hover:scale-105 transform hover:shadow-gray-500/40 flex items-center justify-center"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>

    <Footer />
    </div>
  );
}

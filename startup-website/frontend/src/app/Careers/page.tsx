"use client";

import React, { useState } from "react";
import {
  Heart,
  Coffee,
  TrendingUp,
  Award,
  Users,
  Rocket,
  Brain,
  Lightbulb,
  Shield,
  X,
  Menu,
  ArrowRight,
  MapPin,
  Clock,
  Building,
  Twitter,
  Linkedin,
  Github,
  Mail,
  Phone,
  Globe,
} from "lucide-react";
import Link from "next/link";
import dynamic from "next/dynamic";
import ThreeDBackground from "../../components/ThreeDBackground";
import Footer from "../../components/ui/Footer";

// Dynamically import ParticleBackground with SSR disabled
const ParticleBackground = dynamic(() => import("../../components/ParticleBackground"), {
  ssr: false,
  loading: () => <div className="absolute inset-0 bg-black" />,
});

const Careers = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const values = [
    {
      icon: <Heart className="w-8 h-8 text-white" />,
      title: "Passion-Driven",
      description: "We believe in doing work that matters and making a real impact in people's lives.",
    },
    {
      icon: <Coffee className="w-8 h-8 text-white" />,
      title: "Work-Life Balance",
      description: "We promote a healthy balance between professional growth and personal well-being.",
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-white" />,
      title: "Continuous Growth",
      description: "We invest in our team's development and provide opportunities for career advancement.",
    },
    {
      icon: <Award className="w-8 h-8 text-white" />,
      title: "Excellence",
      description: "We strive for excellence in everything we do and celebrate achievements together.",
    },
    {
      icon: <Users className="w-8 h-8 text-white" />,
      title: "Collaboration",
      description: "We believe in the power of teamwork and creating an inclusive environment.",
    },
    {
      icon: <Rocket className="w-8 h-8 text-white" />,
      title: "Innovation",
      description: "We encourage creative thinking and aren't afraid to challenge the status quo.",
    },
  ];

  const benefits = [
    {
      icon: <Brain className="w-6 h-6 text-white" />,
      title: "Learn by Doing",
      description: "Get hands-on experience and grow your skills by solving real problems from day one.",
    },
    {
      icon: <Users className="w-6 h-6 text-white" />,
      title: "Team Environment",
      description: "Work closely with a passionate core team in a collaborative, in-office setting.",
    },
    {
      icon: <Lightbulb className="w-6 h-6 text-white" />,
      title: "Creative Freedom",
      description: "Your ideas matter — contribute directly to products and decisions.",
    },
    {
      icon: <Shield className="w-6 h-6 text-white" />,
      title: "Startup Experience",
      description: "Be part of the early journey and gain startup exposure that sets you apart.",
    },
  ];
  
  const jobs = [
    {
      id: 1,
      title: "Research and Development Intern",
      department: "Engineering",
      location: "Jaipur, Rajasthan, India",
      type: "Full-time",
      description:
        "Join our engineering team to work on projects involving AI, full-stack development, and advanced research solutions. This role offers hands-on experience in cutting-edge technologies and a balanced mix of research and development tasks.",
      requirements: [
       "Collaborate on AI-based development projects and application-oriented solutions",
        "	Work on both research and development tasks to enhance product functionality",
        "Develop and optimize software applications as full stack developer",
        "	Utilize cloud computing (AWS) for application deployment and scalability",
        "	Document research findings and development processes effectively",
        "	Participate in brainstorming sessions and contribute innovative ideas",
        
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-black relative overflow-hidden font-[Poppins,Arial,sans-serif]">
      <div className="absolute inset-0 bg-gradient-to-br from-black via-black to-white/5 pointer-events-none" />
      <div className="absolute inset-0 z-0 pointer-events-none">
        <ThreeDBackground />
      </div>
      {/* Navigation */}
      <nav className="fixed w-full z-50 bg-gradient-to-br from-black via-black to-white/5 backdrop-blur-2xl border-b border-white/10 shadow-2xl shadow-black/60 transition-all duration-700 ease-out font-[Poppins,Arial,sans-serif]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex-shrink-0 flex items-center gap-3">

              <span className="ml-3 text-base sm:text-lg font-semibold text-white tracking-wide select-none font-[Poppins,Arial,sans-serif] whitespace-nowrap">
                SKY Advanced Research LLP
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
                  className={`text-gray-200 hover:text-white text-base font-semibold tracking-wide relative group transition-colors duration-300 ${
                    item.name === "Careers" ? "text-white" : ""
                  }`}
                >
                  {item.name}
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-white to-gray-100 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
                </Link>
              ))}
            </div>

            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-200 hover:text-white p-2"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden bg-black/95 backdrop-blur-2xl border-t border-white/30">
            <div className="px-2 pt-2 pb-3 space-y-1">
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
                  className={`text-gray-200 hover:text-white block px-3 py-2 rounded-md text-base font-medium ${
                    item.name === "Careers" ? "text-white" : ""
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden z-10 pt-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="relative z-10">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Join Our Amazing
              <span className="block bg-gradient-to-r from-white to-gray-100 bg-clip-text text-transparent">
                Team
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              We're looking for passionate, talented individuals to help us build the future of technology.
              Discover your next career opportunity with us.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="#jobs"
                className="bg-gradient-to-r from-gray-600 to-gray-700 text-white px-8 py-3 rounded-xl font-semibold hover:from-gray-700 hover:to-gray-800 transition-all transform hover:scale-105 flex items-center justify-center"
              >
                <Rocket className="w-5 h-5 mr-2" />
                View Open Positions
              </Link>
              <Link
                href="#values"
                className="border border-gray-700/50 text-white px-8 py-3 rounded-xl font-semibold hover:bg-gradient-to-r hover:from-gray-900/30 hover:to-gray-800/20 transition-colors transform hover:scale-105"
              >
                Learn About Our Culture
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Company Values */}
      <section className="py-20 relative z-10" id="values">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Our Values</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              These core values guide everything we do and shape our company culture
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-black/30 to-black/60 backdrop-blur-sm p-8 rounded-2xl border border-gray-800/40 hover:bg-gradient-to-br hover:from-black/50 hover:to-gray-950/40 transition-all"
              >
                <div className="mb-4">{value.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-3">{value.title}</h3>
                <p className="text-gray-300">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-gradient-to-r from-black/30 to-gray-900/20 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Why Work With Us?</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We offer comprehensive benefits and perks that support your professional and personal growth
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-black/30 to-black/60 backdrop-blur-sm p-6 rounded-2xl border border-gray-800/40 hover:bg-gradient-to-br hover:from-black/50 hover:to-gray-950/40 transition-all"
              >
                <div className="mb-4">{benefit.icon}</div>
                <h3 className="text-lg font-semibold text-white mb-2">{benefit.title}</h3>
                <p className="text-gray-300 text-sm">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="py-20 relative z-10" id="jobs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Open Positions</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Join our team and help us build the future
            </p>
          </div>

          <div className="space-y-6">
            {jobs.map((job) => (
              <div
                key={job.id}
                className="bg-gradient-to-br from-black/30 to-black/60 backdrop-blur-sm p-8 rounded-2xl border border-gray-800/40 hover:bg-gradient-to-br hover:from-black/50 hover:to-gray-950/40 transition-all"
              >
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
                  <div className="flex-1">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                      <h3 className="text-2xl font-semibold text-white mb-2 sm:mb-0">
                        {job.title}
                      </h3>
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-black/50 text-white">
                        {job.department}
                      </span>
                    </div>

                    <div className="flex flex-col sm:flex-row sm:items-center text-gray-300 mb-4 space-y-2 sm:space-y-0 sm:space-x-6">
                      <div className="flex items-center">
                        <MapPin className="w-4 h-4 mr-2" />
                        {job.location}
                      </div>
                      <div className="flex items-center">
                        <Clock className="w-4 h-4 mr-2" />
                        {job.type}
                      </div>
                    </div>

                    <p className="text-gray-300 mb-4">{job.description}</p>

                    <div className="mb-6">
                      <h4 className="font-semibold text-white mb-2">Requirements:</h4>
                      <ul className="text-gray-300 space-y-1">
                        {job.requirements.map((req, index) => (
                          <li key={index} className="flex items-start">
                            <span className="w-2 h-2 bg-white rounded-full mt-2 mr-3 flex-shrink-0"></span>
                            {req}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="lg:ml-8">
                    <Link href = "https://www.linkedin.com/company/sky-advanced-research-llp/?viewAsMember" className="w-full lg:w-auto bg-gradient-to-r from-gray-600 to-gray-700 text-white px-6 py-3 rounded-xl font-semibold hover:from-gray-700 hover:to-gray-800 transition-all transform hover:scale-105 flex items-center justify-center">
                      Apply Now
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Company Culture */}
      <section className="py-20 bg-gradient-to-br from-black to-gray-900 text-white relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Building className="w-16 h-16 mx-auto mb-6 text-white" />
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Life at SKY AI</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We believe that great work happens when people feel supported, challenged, and inspired
            </p>
          </div>
        </div>
      </section>

      {/* Application Process */}
      <section className="py-20 relative z-10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Application Process</h2>
            <p className="text-xl text-gray-300">Our hiring process is designed to be fair, transparent, and efficient</p>
          </div>

          <div className="space-y-8">
            <div className="flex items-start">
              <div className="flex-shrink-0 w-8 h-8 bg-white text-black rounded-full flex items-center justify-center font-semibold">
                1
              </div>
              <div className="ml-6">
                <h3 className="text-xl font-semibold text-white mb-2">Application Review</h3>
                <p className="text-gray-300">
                  We review your application and resume to understand your background and experience.
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="flex-shrink-0 w-8 h-8 bg-white text-black rounded-full flex items-center justify-center font-semibold">
                2
              </div>
              <div className="ml-6">
                <h3 className="text-xl font-semibold text-white mb-2">Phone/Video Screening</h3>
                <p className="text-gray-300">
                  A brief conversation with our HR team to discuss your interest and basic qualifications.
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="flex-shrink-0 w-8 h-8 bg-white text-black rounded-full flex items-center justify-center font-semibold">
                3
              </div>
              <div className="ml-6">
                <h3 className="text-xl font-semibold text-white mb-2">Technical Interview</h3>
                <p className="text-gray-300">
                  For technical roles, you'll have a hands-on session to demonstrate your skills.
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="flex-shrink-0 w-8 h-8 bg-white text-black rounded-full flex items-center justify-center font-semibold">
                4
              </div>
              <div className="ml-6">
                <h3 className="text-xl font-semibold text-white mb-2">Team Interview</h3>
                <p className="text-gray-300">
                  Meet with potential teammates to ensure cultural fit and discuss the role in detail.
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="flex-shrink-0 w-8 h-8 bg-white text-black rounded-full flex items-center justify-center font-semibold">
                5
              </div>
              <div className="ml-6">
                <h3 className="text-xl font-semibold text-white mb-2">Offer & Onboarding</h3>
                <p className="text-gray-300">
                  If everything goes well, we'll extend an offer and help you get started with comprehensive onboarding.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-black/30 to-gray-900/20 relative z-10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to Join Our Team?</h2>
          <p className="text-xl text-gray-300 mb-8">
            Don't see a position that fits? We're always looking for talented individuals. Send us your resume and tell
            us how you'd like to contribute.
          </p>
          <Link
            href="mailto:info@sky-ai.in"
            className="bg-gradient-to-r from-gray-600 to-gray-700 text-white px-8 py-3 rounded-xl font-semibold hover:from-gray-700 hover:to-gray-800 transition-all transform hover:scale-105 flex items-center justify-center mx-auto"
          >
            Send Us Your Resume
            <ArrowRight className="w-5 h-5 ml-2" />
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Careers;
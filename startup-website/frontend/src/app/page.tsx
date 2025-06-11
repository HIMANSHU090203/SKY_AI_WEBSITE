"use client";

import { useState, useEffect } from "react";
import {
  Users,
  Zap,
  Shield,
  Menu,
  X,
  Rocket,
} from "lucide-react";
import dynamic from "next/dynamic";
import Link from "next/link";
import Footer from '../components/ui/Footer';

const ThreeDBackground = dynamic(() => import("../components/ThreeDBackground"), {
  ssr: false,
  loading: () => <div className="absolute inset-0 bg-black" />,
});

export default function HomePage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="min-h-screen bg-black relative overflow-hidden font-[Poppins,Arial,sans-serif]">
      <div className="absolute inset-0 bg-gradient-to-br from-black via-black to-white/5 pointer-events-none" />
      <div className="absolute inset-0 z-0 pointer-events-none">
        <ThreeDBackground />
      </div>

      {/* Navigation */}
      <nav className="fixed w-full z-50 bg-gradient-to-br from-black via-black to-white/5 backdrop-blur-2xl border-b border-white/10 shadow-2xl shadow-black/60 transition-all duration-700 ease-out">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="flex items-center justify-between h-20">
            <div className="flex-shrink-0 flex items-center gap-3">
              <Link href="/" />
              <span className="ml-3 text-base sm:text-lg font-semibold text-white tracking-wide select-none whitespace-nowrap">
                SKY AI
              </span>
            </div>
            <div className="hidden md:flex items-center space-x-8 justify-end w-full">
              {[
                { name: "Blogs", href: "/Blogs" },
                { name: "About Us", href: "/Aboutus" },
                { name: "Careers", href: "/Careers" },
                { name: "Contact", href: "/Contact" },
              ].map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="px-5 py-2 rounded-xl font-bold text-base tracking-wide transition-all duration-300 relative group text-white hover:bg-transparent hover:shadow-lg"
                >
                  <span className="relative z-10">{item.name}</span>
                  <span className="absolute left-0 bottom-0 w-full h-0.5 bg-gradient-to-r from-white to-black scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                </Link>
              ))}
            </div>
            <div className="md:hidden flex items-center">
              <button
                onClick={() => setIsMenuOpen((prev) => !prev)}
                className="text-white hover:text-black p-2 rounded-xl focus:outline-none shadow"
                aria-label={isMenuOpen ? "Close menu" : "Open menu"}
              >
                {isMenuOpen ? <X size={30} /> : <Menu size={30} />}
              </button>
            </div>
          </div>
        </div>
        {isMenuOpen && (
          <div className="md:hidden bg-black/95 backdrop-blur-2xl border-t border-white/10 shadow-2xl animate-slideDown">
            <div className="flex flex-col px-6 py-8 space-y-4 items-center">
              {[
                { name: "Blogs", href: "/Blogs" },
                { name: "About Us", href: "/Aboutus" },
                { name: "Careers", href: "/Careers" },
                { name: "Contact", href: "/Contact" },
              ].map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="w-full text-center px-5 py-3 rounded-xl font-bold text-lg transition-all text-white hover:bg-transparent hover:shadow-lg"
                >
                  <span className="relative z-10">{item.name}</span>
                </Link>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative z-10 pt-56 pb-44 flex items-center justify-center">
        <div className="absolute inset-0 z-0 pointer-events-none">
          <ThreeDBackground />
        </div>
        <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 z-10 w-full">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black bg-gradient-to-r from-white via-gray-200 to-black bg-clip-text text-transparent drop-shadow-2xl tracking-widest uppercase mb-6">
              Empowering Businesses with AI
            </h1>
            <p className="text-xl sm:text-2xl text-white mb-12 max-w-3xl mx-auto font-light">
              SKY AI is an innovative technology firm specializing in seamlessly integrating artificial intelligence into the corporate landscape.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
              <Link
                href="/Careers"
                className="bg-gradient-to-r from-gray-600 to-gray-700 text-white px-8 py-3 rounded-xl font-semibold hover:from-gray-700 hover:to-gray-800 transition-all transform hover:scale-105 flex items-center justify-center"
              >
                <Rocket className="w-5 h-5 mr-2" />
                View Open Positions
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-24 bg-gradient-to-b from-black/80 to-gray-900/60 backdrop-blur-sm relative z-10">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
              Discover SKY AI
            </h2>
            <p className="text-xl text-gray-300 font-light">
              Learn more about our mission, our approach, and why businesses choose us for AI integration.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Cards */}
            {[
              {
                title: "About SKY AI",
                icon: <Users className="w-8 h-8" />,
                content: `At SKY AI, we believe that the future of business lies in the intelligent application of cutting-edge technology.`,
              },
              {
                title: "What We Do",
                icon: <Zap className="w-8 h-8" />,
                content: `We design and implement AI-driven solutions tailored to your business processes.`,
              },
              {
                title: "Why Choose SKY AI?",
                icon: <Shield className="w-8 h-8" />,
                content: `Expertise in AI, scalable applications, continuous innovation, and dedicated support.`,
              },
            ].map((card) => (
              <div
                key={card.title}
                className="group p-8 bg-gradient-to-br from-white/5 to-black/40 backdrop-blur-sm border border-gray-800/40 rounded-2xl hover:bg-gradient-to-br hover:from-white/10 hover:to-gray-950/40 hover:border-gray-700/50 transition-all duration-300 hover:scale-105 shadow-lg"
              >
                <div className="text-white mb-6 group-hover:text-gray-200">
                  {card.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">{card.title}</h3>
                <p className="text-gray-300 font-light">{card.content}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative z-10 bg-gradient-to-r from-black/30 via-black to-white/10">
        <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12 text-center">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            Ready to transform your workflow?
          </h2>
          <p className="text-xl text-gray-300 mb-12 font-light">
            Contact us for more information about our services.
          </p>
          <Link
            href="/Contact"
            className="btn-primary bg-gradient-to-r from-black to-white/10 hover:from-black/80 hover:to-white/20 text-white px-8 py-4 rounded-xl text-lg font-medium transition-all duration-300 shadow-lg border border-gray-500/50 hover:scale-105"
          >
            Contact Us
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}

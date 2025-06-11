"use client";

import { useState } from "react";
import {
  Search,
  Calendar,
  Clock,
  ArrowRight,
  BookOpen,
  Tag,
  X,
  Menu,
  Rocket,
} from "lucide-react";
import Link from "next/link";
import dynamic from "next/dynamic";
import ThreeDBackground from "../../components/ThreeDBackground";
import axios from "axios";
import Footer from "@/components/ui/Footer";

// Dynamically import ParticleBackground with SSR disabled
const ParticleBackground = dynamic(() => import("../../components/ParticleBackground"), {
  ssr: false,
  loading: () => <div className="absolute inset-0 bg-black" />,
});

export default function BlogsPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [subscribeError, setSubscribeError] = useState("");

  const blogPosts = [
    {
      id: 1,
      title: "The Future of Artificial General Intelligence: What to Expect in 2025",
      excerpt:
        "Explore the latest developments in AGI research and how SKY AI is contributing to this revolutionary field. Discover what breakthroughs we can expect in the coming year.",
      category: "AI Research",
      author: "Dr. Sarah Chen",
      date: "December 15, 2024",
      readTime: "8 min read",
      image: "🧠",
      tags: ["AGI", "Research", "Future Tech"],
    },
    {
      id: 2,
      title: "Optimizing AI Workflows: Best Practices for Enterprise Implementation",
      excerpt:
        "Learn how leading companies are integrating AI into their workflows. We share proven strategies and common pitfalls to avoid when implementing AI solutions.",
      category: "Enterprise",
      author: "Michael Rodriguez",
      date: "December 10, 2024",
      readTime: "6 min read",
      image: "⚡",
      tags: ["Enterprise", "Workflow", "Implementation"],
    },
    {
      id: 3,
      title: "Breaking Down Complex AI Models: Making Machine Learning Accessible",
      excerpt:
        "Demystifying the latest AI architectures and explaining how they work in simple terms. Perfect for technical teams looking to understand modern AI capabilities.",
      category: "Technical",
      author: "Alex Thompson",
      date: "December 5, 2024",
      readTime: "10 min read",
      image: "🚀",
      tags: ["Machine Learning", "Technical", "Education"],
    },
    {
      id: 4,
      title: "Privacy-First AI: How We Built Security Into Every Layer",
      excerpt:
        "Deep dive into SKY AI's approach to privacy and security. Learn about our zero-trust architecture and end-to-end encryption implementation.",
      category: "Security",
      author: "Jennifer Kim",
      date: "November 28, 2024",
      readTime: "7 min read",
      image: "🔒",
      tags: ["Security", "Privacy", "Architecture"],
    },
    {
      id: 5,
      title: "The Human-AI Collaboration Revolution",
      excerpt:
        "Exploring how AI augments human creativity rather than replacing it. Real stories from teams who have transformed their productivity with AI assistance.",
      category: "Innovation",
      author: "David Park",
      date: "November 20, 2024",
      readTime: "5 min read",
      image: "👥",
      tags: ["Collaboration", "Productivity", "Innovation"],
    },
    {
      id: 6,
      title: "Open Source AI: Contributing to the Global AI Community",
      excerpt:
        "Our commitment to open source development and how we're giving back to the AI research community. Plus, upcoming projects you can contribute to.",
      category: "Open Source",
      author: "Lisa Zhang",
      date: "November 15, 2024",
      readTime: "4 min read",
      image: "🌐",
      tags: ["Open Source", "Community", "Research"],
    },
  ];

  const categories = [
    "All",
    "AI Research",
    "Enterprise",
    "Technical",
    "Security",
    "Innovation",
    "Open Source",
  ];

  const filteredPosts = blogPosts.filter((post) => {
    const matchesSearch =
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.tags.some((tag) => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesCategory = selectedCategory === "All" || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const featuredPost = blogPosts[0];

  const handleNewsletterSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubscribeError("");
    if (email) {
      try {
        // Call backend API to send confirmation email
        await axios.post("/api/newsletter/subscribe", { email });
        setIsSubscribed(true);
        setEmail("");
        setTimeout(() => setIsSubscribed(false), 3000);
      } catch (err: any) {
        setSubscribeError(
          err?.response?.data?.message || "Failed to subscribe. Please try again."
        );
      }
    }
  };

  return (
    <div className="min-h-screen bg-black relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-black via-black to-white/5 pointer-events-none" />
      <div className="absolute inset-0 z-0 pointer-events-none">
        <ThreeDBackground />
      </div>
      {/* Navigation */}
      <nav className="fixed w-full z-50 bg-gradient-to-br from-black via-black to-white/5 backdrop-blur-2xl border-b border-white/10 shadow-2xl shadow-black/60 transition-all duration-700 ease-out">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="flex items-center justify-between h-20">
            <div className="flex-shrink-0 flex items-center gap-3">
              <span className="ml-3 text-base sm:text-lg font-semibold text-white tracking-wide select-none whitespace-nowrap">
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
                  className={`text-white hover:text-gray-300 text-base font-semibold tracking-wide relative group transition-colors duration-300 ${
                    item.name === "Blogs" ? "text-white" : ""
                  }`}
                >
                  {item.name}
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-white to-black scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
                </Link>
              ))}
            </div>

            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-white hover:text-black p-2"
                aria-label={isMenuOpen ? "Close menu" : "Open menu"}
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>

          {isMenuOpen && (
            <div className="md:hidden bg-black/95 backdrop-blur-2xl border-t border-white/10">
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
                    className={`text-white hover:text-gray-300 block px-3 py-2 rounded-md text-base font-medium ${
                      item.name === "Blogs" ? "text-white" : ""
                    }`}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden z-10 pt-32 pb-20">
        <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-black/60 to-white/10 border border-white/20 rounded-full text-white text-sm font-medium mb-8 backdrop-blur-sm shadow-lg shadow-black/20">
              <BookOpen className="w-4 h-4 mr-2 text-white/80" />
              Insights from the AI frontier
            </div>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-8 leading-tight tracking-tight">
              SKY AI
              <br />
              <span className="bg-gradient-to-r from-white via-gray-300 to-black bg-clip-text text-transparent">
                Blog
              </span>
            </h1>

            <p className="text-xl sm:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed font-light">
              Discover the latest in AI research, enterprise solutions, and the future of artificial intelligence.
            </p>
          </div>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="py-12 relative z-10">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="flex flex-col md:flex-row gap-6 items-center justify-between mb-12">
            {/* Search Bar */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search articles..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-3 bg-gray-900/50 border border-gray-700/50 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-white/50 focus:ring-2 focus:ring-white/20 transition-all duration-300"
              />
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                    selectedCategory === category
                      ? "bg-gradient-to-r from-black to-white/20 text-white shadow-lg shadow-black/20"
                      : "bg-gray-900/50 border border-gray-700/50 text-gray-300 hover:text-white hover:border-gray-600/70"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-12 relative z-10">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <Link href={`/Blogs/${featuredPost.id}`}>
            <div className="bg-gradient-to-br from-black/30 to-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8 shadow-lg shadow-black/20 hover:scale-105 transition-transform duration-300 cursor-pointer">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div>
                  <div className="flex items-center space-x-4 mb-4">
                    <span className="px-3 py-1 bg-gradient-to-r from-black/30 to-white/10 border border-white/20 rounded-full text-white text-sm font-medium">
                      Featured
                    </span>
                    <span className="text-gray-400 text-sm">{featuredPost.category}</span>
                  </div>

                  <h2 className="text-3xl font-bold text-white mb-4 leading-tight">
                    {featuredPost.title}
                  </h2>

                  <p className="text-gray-300 text-lg mb-6 leading-relaxed">
                    {featuredPost.excerpt}
                  </p>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4 text-gray-400 text-sm">
                      <span>{featuredPost.author}</span>
                      <div className="flex items-center">
                        <Calendar className="w-4 h-4 mr-1" />
                        {featuredPost.date}
                      </div>
                      <div className="flex items-center">
                        <Clock className="w-4 h-4 mr-1" />
                        {featuredPost.readTime}
                      </div>
                    </div>

                    <div className="flex items-center text-white hover:text-gray-300 font-medium transition-colors duration-300">
                      Read More <ArrowRight className="ml-2 w-4 h-4" />
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-center">
                  <div className="text-8xl opacity-20">{featuredPost.image}</div>
                </div>
              </div>
            </div>
          </Link>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-24 relative z-10">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post) => (
              <Link key={post.id} href={`/Blogs/${post.id}`}>
                <article className="bg-gradient-to-br from-black/30 to-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 shadow-lg shadow-black/20 hover:scale-105 transition-transform duration-300 cursor-pointer group">
                  <div className="flex items-center justify-between mb-4">
                    <span className="px-3 py-1 bg-gradient-to-r from-black/20 to-white/10 border border-white/20 rounded-full text-white text-xs font-medium">
                      {post.category}
                    </span>
                    <div className="text-3xl opacity-30 group-hover:opacity-50 transition-opacity duration-300">
                      {post.image}
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-3 leading-tight group-hover:text-gray-100 transition-colors duration-300">
                    {post.title}
                  </h3>

                  <p className="text-gray-300 text-sm mb-4 leading-relaxed">{post.excerpt}</p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {post.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="flex items-center px-2 py-1 bg-gray-800/50 border border-gray-700/30 rounded-md text-gray-400 text-xs"
                      >
                        <Tag className="w-3 h-3 mr-1" />
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t border-gray-700/30">
                    <div className="text-gray-400 text-xs">
                      <p className="font-medium">{post.author}</p>
                      <div className="flex items-center space-x-3 mt-1">
                        <span className="flex items-center">
                          <Calendar className="w-3 h-3 mr-1" />
                          {post.date}
                        </span>
                        <span className="flex items-center">
                          <Clock className="w-3 h-3 mr-1" />
                          {post.readTime}
                        </span>
                      </div>
                    </div>

                    <div className="flex items-center text-white hover:text-gray-300 text-sm font-medium transition-colors duration-300">
                      Read <ArrowRight className="ml-1 w-3 h-3" />
                    </div>
                  </div>
                </article>
              </Link>
            ))}
          </div>

          {filteredPosts.length === 0 && (
            <div className="text-center py-16">
              <div className="text-6xl opacity-30 mb-4">🔍</div>
              <h3 className="text-2xl font-bold text-white mb-2">No articles found</h3>
              <p className="text-gray-400">Try adjusting your search or filter criteria.</p>
            </div>
          )}
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-24 bg-gradient-to-r from-black/30 via-black to-white/10 relative z-10">
        <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12 text-center">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6 tracking-tight">
            Stay Updated
          </h2>
          <p className="text-xl text-gray-300 mb-12 font-light">
            Get the latest AI insights and research delivered to your inbox weekly.
          </p>

          {isSubscribed && (
            <div className="mb-6 p-4 bg-gradient-to-r from-white/10 to-black/10 border border-white/20 rounded-xl flex items-center justify-center mx-auto max-w-md">
              <span className="text-white">Subscribed successfully! Check your inbox.</span>
            </div>
          )}
          {subscribeError && (
            <div className="mb-6 p-4 bg-gradient-to-r from-black/30 to-white/10 border border-red-400/30 rounded-xl flex items-center justify-center mx-auto max-w-md">
              <span className="text-red-300">{subscribeError}</span>
            </div>
          )}

          <form onSubmit={handleNewsletterSubmit} className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="flex-1 px-6 py-3 bg-gray-900/50 border border-gray-700/50 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-white/50 focus:ring-2 focus:ring-white/20 transition-all duration-300"
            />
            <button
              type="submit"
              className="bg-gradient-to-r from-black to-white/10 hover:from-black/80 hover:to-white/20 text-white px-8 py-3 rounded-xl font-medium transition-all duration-300 shadow-lg shadow-black/30 border border-gray-500/50 hover:scale-105 transform hover:shadow-black/40"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>



    <Footer/>
    </div>
  );
}
"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Search, Calendar, Clock, ArrowRight, BookOpen, Tag, X, Menu, Rocket } from "lucide-react";
import Link from "next/link";
import axios from "axios";
import VideoBackground from "../../components/VideoBackground";
import AnimatedNavbar from "../../components/AnimatedNavbar";
import AnimatedFooter from "../../components/AnimatedFooter";

export default function BlogsPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [email, setEmail] = useState("");

  const categories = ["All", "AI Research", "Technology", "Industry Insights", "Company News"];

  const blogs = [
    {
      id: 1,
      title: "The Future of AI in Business: A Comprehensive Guide",
      excerpt: "Exploring how artificial intelligence is transforming modern business operations and what companies need to know to stay competitive.",
      category: "AI Research",
      date: "2025-01-15",
      readTime: "8 min read",
      image: "/api/placeholder/400/250",
      tags: ["AI", "Business", "Technology", "Future"],
    },
    {
      id: 2,
      title: "Machine Learning vs Deep Learning: Understanding the Differences",
      excerpt: "A detailed comparison of machine learning and deep learning approaches, their applications, and when to use each.",
      category: "Technology",
      date: "2025-01-12",
      readTime: "6 min read",
      image: "/api/placeholder/400/250",
      tags: ["Machine Learning", "Deep Learning", "AI", "Education"],
    },
    {
      id: 3,
      title: "How SKY AI is Revolutionizing Data Analysis",
      excerpt: "Discover how our innovative AI solutions are helping businesses make better decisions through advanced data analysis.",
      category: "Company News",
      date: "2025-01-10",
      readTime: "5 min read",
      image: "/api/placeholder/400/250",
      tags: ["SKY AI", "Data Analysis", "Innovation", "Case Study"],
    },
    {
      id: 4,
      title: "The Ethics of Artificial Intelligence in Healthcare",
      excerpt: "Examining the ethical considerations and challenges of implementing AI solutions in healthcare settings.",
      category: "Industry Insights",
      date: "2025-01-08",
      readTime: "7 min read",
      image: "/api/placeholder/400/250",
      tags: ["AI Ethics", "Healthcare", "Technology", "Society"],
    },
    {
      id: 5,
      title: "Building Scalable AI Systems: Best Practices",
      excerpt: "Learn the essential principles and practices for creating AI systems that can grow with your business needs.",
      category: "Technology",
      date: "2025-01-05",
      readTime: "9 min read",
      image: "/api/placeholder/400/250",
      tags: ["AI Systems", "Scalability", "Best Practices", "Development"],
    },
    {
      id: 6,
      title: "The Impact of AI on Job Markets: Opportunities and Challenges",
      excerpt: "Analyzing how artificial intelligence is reshaping employment landscapes and creating new opportunities.",
      category: "Industry Insights",
      date: "2025-01-03",
      readTime: "6 min read",
      image: "/api/placeholder/400/250",
      tags: ["AI Impact", "Jobs", "Economy", "Future of Work"],
    },
  ];

  const filteredBlogs = blogs.filter(blog => {
    const matchesSearch = blog.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         blog.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "All" || blog.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

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

  return (
    <div className="min-h-screen relative overflow-hidden font-[Poppins,Arial,sans-serif]">
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
              <BookOpen className="w-4 h-4 mr-2" />
              AI Insights & Research
            </motion.div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
              Our
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent block">
                AI Blog
              </span>
            </h1>
            
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed mb-12">
              Stay updated with the latest insights, research, and innovations in artificial intelligence.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <motion.div
            className="glassmorphic-card p-8 rounded-2xl"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="flex flex-col lg:flex-row gap-6">
              {/* Search */}
              <div className="flex-1">
                <div className="relative">
                  <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="text"
                    placeholder="Search articles..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-12 pr-4 py-3 bg-gray-800/50 border border-gray-600/50 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                  />
                </div>
              </div>

              {/* Category Filter */}
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <motion.button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                      selectedCategory === category
                        ? "bg-gradient-to-r from-blue-500 to-purple-600 text-white"
                        : "bg-gray-800/50 text-gray-300 hover:bg-gray-700/50"
                    }`}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {category}
                  </motion.button>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredBlogs.map((blog, index) => (
              <motion.article
                key={blog.id}
                className="group relative"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -10, scale: 1.02 }}
              >
                <div className="glassmorphic-card relative rounded-2xl overflow-hidden hover:border-[var(--color-accent-cyan)]/30 transition-all duration-300 h-full">
                  {/* Image */}
                  <div className="aspect-video bg-gradient-to-br from-blue-500/20 to-purple-500/20 relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <BookOpen className="w-16 h-16 text-blue-400/30" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="px-2 py-1 bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-500/30 rounded text-blue-400 text-xs font-medium">
                        {blog.category}
                      </span>
                    </div>

                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors duration-300">
                      {blog.title}
                    </h3>

                    <p className="text-gray-300 text-sm leading-relaxed mb-4">
                      {blog.excerpt}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-1 mb-4">
                      {blog.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2 py-1 bg-gray-800/50 rounded text-gray-400 text-xs"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Meta */}
                    <div className="flex items-center justify-between text-sm text-gray-400">
                      <div className="flex items-center gap-4">
                        <div className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          {new Date(blog.date).toLocaleDateString()}
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          {blog.readTime}
                        </div>
                      </div>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                    </div>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>

          {filteredBlogs.length === 0 && (
            <motion.div
              className="text-center py-12"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
            >
              <BookOpen className="w-16 h-16 text-gray-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-400 mb-2">No articles found</h3>
              <p className="text-gray-500">Try adjusting your search or filter criteria.</p>
            </motion.div>
          )}
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12">
          <motion.div
            className="glassmorphic-card p-8 rounded-2xl text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-white mb-4">Stay Updated</h3>
            <p className="text-gray-300 mb-6">
              Subscribe to our newsletter for the latest AI insights and company updates.
            </p>
            <form onSubmit={handleNewsletterSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 px-4 py-3 bg-gray-800/50 border border-gray-600/50 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                required
                disabled={isSubscribing}
              />
              <motion.button
                type="submit"
                disabled={isSubscribing || !email}
                className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-600 hover:to-purple-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {isSubscribing ? "Subscribing..." : "Subscribe"}
              </motion.button>
            </form>

            {subscriptionStatus === "success" && (
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-green-400 text-sm mt-4 text-center"
              >
                ✅ Successfully subscribed to our newsletter!
              </motion.p>
            )}
            
            {subscriptionStatus === "already_subscribed" && (
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-yellow-400 text-sm mt-4 text-center"
              >
                ⚠️ This email is already subscribed to our newsletter
              </motion.p>
            )}
            
            {subscriptionStatus === "error" && (
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-red-400 text-sm mt-4 text-center"
              >
                ❌ Subscription failed. Please try again later.
              </motion.p>
            )}
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <AnimatedFooter />
    </div>
  );
}
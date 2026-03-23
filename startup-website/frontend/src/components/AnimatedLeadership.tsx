"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Linkedin, Mail, Github, Award, Users, Lightbulb } from "lucide-react";

export default function AnimatedLeadership() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

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

  const profileCardVariants = {
    rest: { scale: 1, rotateY: 0 },
    hover: { 
      scale: 1.05,
      rotateY: 5,
      boxShadow: "0 20px 40px rgba(0, 245, 255, 0.2)"
    }
  };

  const teamMembers = [
    {
      name: "Saurabh Jalendra",
      role: "Co-Founder",
      background: "Computer Engineer",
      image: "SJ",
      bio: "Visionary leader with expertise in AI research and strategic development. Passionate about creating innovative solutions that transform businesses.",
      expertise: ["AI Research", "Strategic Planning", "Technology Leadership"],
      social: {
        linkedin: "https://linkedin.com/in/saurabh-jalendra",
        email: "saurabh@sky-ai.in",
        github: "https://github.com/saurabh-jalendra"
      }
    },
    {
      name: "Shubhendra Yadav",
      role: "Intern",
      background: "Data-Scientist and Automobile Engineer",
      image: "SY",
      bio: "Dedicated researcher combining data science expertise with engineering precision. Focused on developing practical AI applications for real-world challenges.",
      expertise: ["Data Science", "Machine Learning", "Engineering"],
      social: {
        linkedin: "https://linkedin.com/in/shubhendra-yadav",
        email: "shubhendra@sky-ai.in",
        github: "https://github.com/shubhendra-yadav"
      }
    },
    {
      name: "Himanshu Sharma",
      role: "Research and Development Intern",
      background: "B.Tech in Computer Science Engineering",
      image: "H",
      bio: "Passionate about adding valuable insights in company projects through innovative research and development. Committed to advancing AI solutions with fresh perspectives.",
      expertise: ["Research", "Data Science", "Full Stack Development"],
      social: {
        linkedin: "https://linkedin.com/in/himanshu-sharma",
        email: "himanshu@sky-ai.in",
        github: "https://github.com/himanshu-sharma"
      }
    },
    {
      name: "Kalpit Mathur",
      role: "Research and Development Intern",
      background: "B.Tech in Computer Science and Engineering",
      image: "K",
      bio: "Dedicated to adding valuable insights to company products through hard work and innovative development. Focused on backend solutions and technical excellence.",
      expertise: ["Hard Working", "Development", "Backend"],
      social: {
        linkedin: "https://linkedin.com/in/kalpit-mathur",
        email: "kalpit@sky-ai.in",
        github: "https://github.com/kalpit-mathur"
      }
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
            className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-500/30 rounded-full text-blue-400 text-sm font-medium mb-8 backdrop-blur-sm"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <Users className="w-4 h-4 mr-2" />
            Meet Our Team
          </motion.div>
          
          <h2 className="font-orbitron text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight">
            Our
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent block">
              Leadership Team
            </span>
          </h2>
          
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Meet the visionaries behind SKY AI, driving innovation and shaping the future of artificial intelligence.
          </p>
        </motion.div>

        {/* Team Members */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              className="group relative"
              variants={cardVariants}
              whileHover={{ y: -10, scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="glassmorphic-card relative p-8 rounded-2xl hover:border-[var(--color-accent-cyan)]/30 transition-all duration-300">
                {/* Profile Image */}
                <div className="flex items-center mb-6">
                  <div className="relative">
                    <div className="w-20 h-20 bg-gradient-to-r from-[var(--color-accent-cyan)] to-[var(--color-accent-purple)] rounded-full flex items-center justify-center text-white text-2xl font-bold shadow-lg shadow-[var(--color-accent-cyan)]/30">
                      {member.image}
                    </div>
                    <div className="absolute -top-2 -right-2 w-6 h-6 bg-[var(--color-accent-gold)] rounded-full flex items-center justify-center">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                    </div>
                  </div>
                  <div className="ml-6">
                    <h3 className="text-2xl font-bold text-[var(--color-text-primary)] mb-1">{member.name}</h3>
                    <p className="text-[var(--color-accent-cyan)] font-medium">{member.role}</p>
                    <p className="text-gray-400 text-sm">{member.background}</p>
                  </div>
                </div>

                {/* Bio */}
                <p className="text-gray-300 mb-6 leading-relaxed">{member.bio}</p>

                {/* Expertise Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {member.expertise.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="px-3 py-1 bg-gradient-to-r from-[var(--color-accent-cyan)]/20 to-[var(--color-accent-purple)]/20 border border-[var(--color-accent-cyan)]/30 rounded-full text-[var(--color-accent-cyan)] text-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                {/* Social Links */}
                <div className="flex space-x-4">
                  <motion.a
                    href={member.social.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-gray-800/50 rounded-lg hover:bg-[var(--color-accent-cyan)]/20 transition-colors duration-300"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Linkedin className="w-5 h-5 text-gray-400 hover:text-[var(--color-accent-cyan)]" />
                  </motion.a>
                  <motion.a
                    href={`mailto:${member.social.email}`}
                    className="p-2 bg-gray-800/50 rounded-lg hover:bg-[var(--color-accent-cyan)]/20 transition-colors duration-300"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Mail className="w-5 h-5 text-gray-400 hover:text-[var(--color-accent-cyan)]" />
                  </motion.a>
                  <motion.a
                    href={member.social.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-gray-800/50 rounded-lg hover:bg-[var(--color-accent-cyan)]/20 transition-colors duration-300"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Github className="w-5 h-5 text-gray-400 hover:text-[var(--color-accent-cyan)]" />
                  </motion.a>
                </div>

                {/* Enhanced hover effect overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-accent-cyan)]/5 to-[var(--color-accent-purple)]/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Company Culture */}
        <motion.div variants={itemVariants} className="text-center">
          <div className="glassmorphic-card max-w-4xl mx-auto p-8 rounded-2xl">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-[var(--color-accent-cyan)] to-[var(--color-accent-purple)] rounded-2xl mb-6 shadow-lg shadow-[var(--color-accent-cyan)]/30">
              <Award className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-[var(--color-text-primary)] mb-4">Our Culture</h3>
            <p className="text-gray-300 leading-relaxed mb-6">
              At SKY AI, we foster a culture of innovation, collaboration, and continuous learning. 
              Our team is united by a shared passion for pushing the boundaries of what's possible with AI.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              {["Innovation", "Collaboration", "Excellence", "Growth", "Impact"].map((value, index) => (
                <motion.span
                  key={index}
                  className="px-4 py-2 bg-gradient-to-r from-[var(--color-accent-cyan)]/20 to-[var(--color-accent-purple)]/20 border border-[var(--color-accent-cyan)]/30 rounded-full text-[var(--color-accent-cyan)] text-sm font-medium"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  {value}
                </motion.span>
              ))}
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}



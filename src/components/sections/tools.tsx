"use client";

import React, { useRef, useState} from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";

// Fun facts data - no experience required!

export default function Tools() {
  const sectionRef = useRef<HTMLElement>(null);
  const funFactsRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  // Scroll animations
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [30, -30]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  // Tools data with image icons
  const tools = [
    { name: "Canva", icon: "/canva.png" },
    { name: "Photoshop", icon: "/photoshop.png" },
    { name: "Microsoft Office", icon: "/office.png" },
    { name: "Google Workspace", icon: "/workspace.png" },
    { name: "Zoom", icon: "/zoom.png" },
    { name: "Facebook", icon: "/facebook.png" },
    { name: "Instagram", icon: "/instagram.png" },
    { name: "ChatGPT", icon: "/chatgpt.png" },
  ];

  const funFacts = [
    { 
      icon: "🎯",
      title: "Detail Obsessed",
      description: "I notice every pixel, comma, and spacing",
      color: "from-blue-500 to-cyan-500"
    },
    { 
      icon: "⚡",
      title: "Quick Learner",
      description: "New tools? Challenge accepted!",
      color: "from-purple-500 to-pink-500"
    },
    { 
      icon: "🌙",
      title: "Night Owl",
      description: "My best ideas come after midnight",
      color: "from-indigo-500 to-blue-500"
    },
    { 
      icon: "☕",
      title: "Motivated",
      description: "I am eager to learn and grow",
      color: "from-orange-500 to-red-500"
    }
  ];

  // Create seamless infinite scroll with multiple copies
  const duplicatedTools = [...tools, ...tools, ...tools, ...tools];

  return (
    <section
      ref={sectionRef}
      id="tools"
      className="relative min-h-screen w-full py-20 md:py-32 overflow-hidden bg-gradient-to-br from-slate-50 via-white to-blue-50 dark:from-slate-900 dark:via-gray-800 dark:to-blue-900"
    >
      {/* Enhanced Background Effects */}
      <div className="absolute inset-0">
        {/* Animated particles */}
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-3 h-3 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [-30, 30],
              x: [-20, 20],
              scale: [1, 1.8, 1],
              opacity: [0.2, 0.6, 0.2]
            }}
            transition={{
              duration: 2 + Math.random() * 4,
              repeat: Infinity,
              repeatType: "reverse",
              delay: Math.random() * 3,
              ease: "easeInOut"
            }}
          />
        ))}
        
        {/* Subtle grid overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:60px_60px]" />
        
        {/* Gradient orbs */}
        <motion.div
          className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-gradient-to-r from-blue-400/8 to-purple-400/8 rounded-full blur-3xl"
          style={{ y }}
        />
        <motion.div
          className="absolute bottom-1/3 left-1/4 w-[400px] h-[400px] bg-gradient-to-r from-cyan-400/8 to-indigo-400/8 rounded-full blur-3xl"
          style={{ y: useTransform(y, [0, 1], [20, -20]) }}
        />
      </div>
      
      <motion.div 
        className="relative z-10 w-full"
        style={{ opacity }}
      >
        {/* Enhanced Section Title */}
        <motion.div 
          className="text-center mb-20"
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <motion.h2 
            className="text-5xl md:text-7xl font-bold mb-8 leading-tight"
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1, type: "spring", bounce: 0.3, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-700 dark:from-blue-400 dark:via-purple-400 dark:to-indigo-300 block">
              Tools &
            </span>
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 via-blue-600 to-purple-700 dark:from-indigo-400 dark:via-blue-400 dark:to-purple-300 block">
              Technologies
            </span>
          </motion.h2>
          
          <motion.p 
            className="text-gray-600 dark:text-gray-300 text-xl md:text-2xl max-w-4xl mx-auto font-light leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
          >
            Professional tools I leverage to streamline your business operations and maximize productivity
          </motion.p>
        </motion.div>

        {/* Fun Facts Section */}
        <motion.div
          ref={funFactsRef}
          className="max-w-6xl mx-auto px-6 mb-20"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <motion.h3 
            className="text-3xl md:text-4xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-gray-700 to-gray-900 dark:from-gray-200 dark:to-gray-400"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            Why Work With Me? ✨
          </motion.h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {funFacts.map((fact, index) => (
              <motion.div
                key={index}
                className="text-center group cursor-pointer"
                initial={{ opacity: 0, y: 30, rotate: -5 }}
                whileInView={{ opacity: 1, y: 0, rotate: 0 }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                whileHover={{ scale: 1.05, rotate: 2 }}
                viewport={{ once: true }}
              >
                <motion.div 
                  className="relative p-6 rounded-2xl bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm border border-gray-200/50 dark:border-gray-700/50 shadow-lg hover:shadow-xl transition-all duration-300 h-full"
                  whileHover={{ y: -8 }}
                >
                  {/* Gradient glow effect */}
                  <motion.div
                    className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${fact.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
                    initial={false}
                  />
                  
                  <div className="relative z-10 flex flex-col h-full">
                    {/* Icon */}
                    <motion.div 
                      className="text-4xl md:text-5xl mb-4"
                      animate={{ 
                        scale: [1, 1.1, 1],
                        rotate: [0, 5, -5, 0]
                      }}
                      transition={{ 
                        duration: 3,
                        repeat: Infinity,
                        repeatType: "reverse",
                        delay: index * 0.5
                      }}
                    >
                      {fact.icon}
                    </motion.div>
                    
                    {/* Title */}
                    <h4 className={`text-xl font-bold mb-3 bg-gradient-to-r ${fact.color} bg-clip-text text-transparent`}>
                      {fact.title}
                    </h4>
                    
                    {/* Description */}
                    <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed flex-grow">
                      {fact.description}
                    </p>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Single Column Scrolling Logos */}
        <div 
          className="relative overflow-hidden py-8"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          
          <motion.div
            className="flex items-center gap-24 md:gap-32 will-change-transform"
            animate={{ x: "-25%" }}
            transition={{
              duration: 15, // Much faster animation
              ease: "linear",
              repeat: Infinity,
              repeatType: "loop"
            }}
            style={{
              animationPlayState: isHovered ? "paused" : "running"
            }}
          >
            {duplicatedTools.map((tool, index) => (
              <motion.div
                key={index}
                className="flex-shrink-0 group cursor-pointer"
                whileHover={{ scale: 1.15 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
              >
                <motion.div 
                  className="relative p-3 rounded-2xl bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm border border-gray-200/50 dark:border-gray-700/50 shadow-lg hover:shadow-xl transition-all duration-300"
                  whileHover={{ y: -8, rotate: 2 }}
                  transition={{ duration: 0.3 }}
                >
                  {/* Glow effect on hover */}
                  <motion.div
                    className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    initial={false}
                  />
                  
                  <div className="relative z-10">
                    <motion.div 
                      className="relative w-28 h-28 md:w-36 md:h-36 mb-2 filter group-hover:drop-shadow-lg transition-all duration-300"
                      whileHover={{ scale: 1.1 }}
                    >
                      <Image
                        src={tool.icon}
                        alt={tool.name}
                        fill
                        className="object-contain"
                      />
                    </motion.div>
                    
                    <motion.span 
                      className="text-gray-700 dark:text-gray-300 font-semibold text-sm md:text-base opacity-0 group-hover:opacity-100 transition-all duration-300 absolute -bottom-8 left-1/2 transform -translate-x-1/2 whitespace-nowrap bg-gray-900/90 dark:bg-gray-100/90 text-white dark:text-gray-900 px-3 py-1 rounded-full text-xs"
                      initial={{ opacity: 0, y: 10 }}
                      whileHover={{ opacity: 1, y: 0 }}
                    >
                      {tool.name}
                    </motion.span>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Enhanced Call to Action */}
        <motion.div
          className="text-center mt-24"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="inline-block"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
          >
            <button className="group relative inline-flex items-center gap-4 bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 hover:from-blue-700 hover:via-purple-700 hover:to-indigo-700 text-white px-10 py-5 rounded-full font-semibold text-lg shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden">
              {/* Button glow effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400/20 via-purple-400/20 to-indigo-400/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              <span className="relative z-10">Let`&apos;`s Work Together</span>
              
              <motion.span
                className="relative z-10 text-xl"
                animate={{ x: [0, 6, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              >
                →
              </motion.span>
              
              {/* Ripple effect */}
              <motion.div
                className="absolute inset-0 bg-white/10 rounded-full scale-0 group-hover:scale-100 transition-transform duration-500"
                initial={false}
              />
            </button>
          </motion.div>
          
          <motion.p 
            className="text-gray-500 dark:text-gray-400 text-sm mt-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            viewport={{ once: true }}
          >
            Ready to boost your productivity?
          </motion.p>
        </motion.div>
      </motion.div>
    </section>
  );
}
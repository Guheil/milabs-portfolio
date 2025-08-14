"use client";

import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import { cn } from "@/lib/utils";
import FloatingAnimation from "@/components/ui/floating-animation";
import TextAnimation from "@/components/ui/text-animation";
import Sparkles from "@/components/ui/sparkles";
import TiltCard from "@/components/ui/tilt-card";
import StarsBackground from "@/components/ui/stars-background";
import GridPattern from "@/components/ui/grid-pattern";
import { X, ChevronLeft, ChevronRight, Maximize2, Camera } from "lucide-react";

// Sample gallery items - FIXED IMAGE PATHS (removed /public)
const galleryItems = [
  {
    id: 1,
    title: "RTU NCR Representative (Photoshop)",
    description: "Photoshop project for RTU NCR representative.",
    image: "/pic1.jpg",
    category: "Team",
  },
  {
    id: 2,
    title: "RTU NCR Representative (Photoshop)",
    description: "Another RTU NCR representative Photoshop design.",
    image: "/pic2.jpg",
    category: "Team",
  },
  {
    id: 3,
    title: "Computer Engineering ICPEP (Photoshop)",
    description: "Photoshop design for ICPEP Computer Engineering.",
    image: "/pic3.jpg",
    category: "Team",
  },
  {
    id: 4,
    title: "1st Year Representative Achievement Post (Photoshop)",
    description: "Achievement post for 1st Year Representative.",
    image: "/pic4.jpg",
    category: "Achievement",
  },
  {
    id: 5,
    title: "Vocational Livelihood Graduate Feature (Photoshop)",
    description: "Feature post for Vocational Livelihood graduate.",
    image: "/pic6.jpg",
    category: "Education",
  },
  {
    id: 6,
    title: "Build Better With Us Fernwood Hardware Ad (Photoshop)",
    description: "Fernwood Hardware promotional Photoshop ad.",
    image: "/pic7.jpg",
    category: "Work",
  },
  {
    id: 7,
    title: "Subok Na! Your Most Trusted Hardware – Fernwood (Canva)",
    description: "Fernwood hardware trust-themed Canva design.",
    image: "/pic8.jpg",
    category: "Work",
  },
  {
    id: 8,
    title: "Trust Issues? Not With Our Hardware! – Fernwood (Canva)",
    description: "Trust-focused Canva ad for Fernwood Hardware.",
    image: "/pic10.jpg",
    category: "Work",
  },
  {
    id: 9,
    title: "Ninoy Aquino Day Commemoration Post (Canva)",
    description: "Canva post commemorating Ninoy Aquino Day.",
    image: "/pic11.jpg",
    category: "Education",
  },

  
];

// For demo purposes, we'll use placeholder images
const getPlaceholderImage = (id: number) => {
  const colors = [
    "3B82F6", // blue-500
    "60A5FA", // blue-400
    "93C5FD", // blue-300
    "22D3EE", // cyan-400
    "67E8F9", // cyan-300
    "A5F3FC", // cyan-200
  ];
  const color = colors[id % colors.length];
  return `https://placehold.co/800x600/${color}/FFFFFF/png?text=Gallery+Image+${id}`;
};

// Gallery filter categories
const categories = ["All", "Work", "Team", "Achievement", "Education"];

export const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [activeCategory, setActiveCategory] = useState("All");
  const [hoveredItem, setHoveredItem] = useState<number | null>(null);
  const [isMounted, setIsMounted] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  // Set isMounted to true after component mounts to prevent hydration mismatch
  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Scroll animations
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.4, 1, 1, 0.4]);
  const scale = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.8, 1, 1, 0.8]);

  const filteredItems = activeCategory === "All"
    ? galleryItems
    : galleryItems.filter(item => item.category === activeCategory);

  const handleImageClick = (id: number) => {
    setSelectedImage(id);
  };

  const handleClose = () => {
    setSelectedImage(null);
  };

  const handlePrev = () => {
    if (selectedImage === null) return;

    const currentIndex = filteredItems.findIndex(item => item.id === selectedImage);
    const prevIndex = (currentIndex - 1 + filteredItems.length) % filteredItems.length;
    setSelectedImage(filteredItems[prevIndex].id);
  };

  const handleNext = () => {
    if (selectedImage === null) return;

    const currentIndex = filteredItems.findIndex(item => item.id === selectedImage);
    const nextIndex = (currentIndex + 1) % filteredItems.length;
    setSelectedImage(filteredItems[nextIndex].id);
  };

  return (
    <section
      id="gallery"
      ref={sectionRef}
      className="py-20 min-h-screen w-full bg-gradient-to-b from-white to-blue-50 dark:from-neutral-900 dark:to-blue-950/50 relative overflow-hidden">
      {/* Blue glowing stars in light mode */}
      <StarsBackground
        count={35}
        color="#3B82F6" // Blue color
        maxSize={2.5}
        minSize={1.2}
        opacity={0.8}
        zIndex={1}
        className="block dark:hidden" // Only show in light mode
      />

      {/* Stars for dark mode */}
      <StarsBackground
        count={35}
        color="#FFFFFF"
        maxSize={2.5}
        minSize={1.2}
        opacity={0.7}
        zIndex={1}
        className="hidden dark:block" // Only show in dark mode
      />

      {/* Subtle grid pattern - black in light mode, white in dark mode */}
      <GridPattern
        size={40}
        lineWidth={1.2}
        lineColor="var(--grid-color, #000000)"
        opacity={0.07}
        zIndex={1}
        className="[--grid-color:#000000] dark:[--grid-color:#FFFFFF]"
      />

      {/* Background decorative elements */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-blue-200/20 dark:bg-blue-700/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-cyan-200/20 dark:bg-cyan-700/10 rounded-full blur-3xl"></div>

      {/* Animated dots pattern with fixed positions to prevent hydration mismatch */}
      <div className="absolute inset-0 opacity-10 dark:opacity-20 pointer-events-none">
        {[...Array(20)].map((_, i) => {
          // Use fixed positions based on index instead of random values
          const left = 5 + (i * 4.5) % 90; // Distribute dots horizontally
          const top = 10 + (i * 4.3) % 80; // Distribute dots vertically

          // Fixed animation values based on index
          const duration = 5 + (i % 5);
          const delay = (i % 5) * 1.2;

          return (
            <motion.div
              key={i}
              className="absolute w-1 h-1 rounded-full bg-blue-500"
              style={{
                left: `${left}%`,
                top: `${top}%`,
              }}
              animate={{
                opacity: [0.3, 0.8, 0.3],
                scale: [1, 1.5, 1],
              }}
              transition={{
                duration: duration,
                repeat: Infinity,
                delay: delay,
              }}
            />
          );
        })}
      </div>

      <div className="container mx-auto px-4 md:px-6 max-w-7xl relative z-10">
        <FloatingAnimation delay={0.1}>
          <div className="text-center mb-12">
            <Sparkles color="#6495ED">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-blue-600 dark:text-blue-400 inline-block relative">
                <TextAnimation text="Gallery" />
                <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-blue-400 to-transparent"></div>
              </h2>
            </Sparkles>

            <motion.p
              className="text-muted-foreground max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
            >
              Samples of my work showcasing my experiences and achievements.
            </motion.p>
          </div>
        </FloatingAnimation>

        {/* Category filters */}
        <FloatingAnimation delay={0.2}>
          <div className="flex flex-wrap justify-center gap-3 mb-10">
            {categories.map((category, index) => (
              <motion.button
                key={category}
                className={cn(
                  "px-4 py-2 rounded-full text-sm font-medium transition-all duration-300",
                  activeCategory === category
                    ? "bg-blue-500 text-white shadow-md"
                    : "bg-white dark:bg-neutral-800 text-muted-foreground hover:bg-blue-100 dark:hover:bg-blue-900/30"
                )}
                onClick={() => setActiveCategory(category)}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.1 + index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {category}
              </motion.button>
            ))}
          </div>
        </FloatingAnimation>

        {/* Gallery grid with scroll animations */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
          style={{ opacity, scale }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          {filteredItems.map((item, index) => (
            <motion.div
              key={item.id}
              className="relative"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true, margin: "-100px" }}
              onHoverStart={() => setHoveredItem(item.id)}
              onHoverEnd={() => setHoveredItem(null)}
            >
              {/* 3D Tilt Card */}
              <TiltCard
                className="group w-full h-full"
                rotateIntensity={7}
                glareOpacity={0.1}
                glareColor="rgba(100, 149, 237, 0.8)"
                shadow="0 20px 40px -12px rgba(59, 130, 246, 0.3)"
                borderRadius="0.75rem"
              >
                <div className="relative overflow-hidden rounded-xl shadow-lg aspect-[4/3] bg-white dark:bg-neutral-800">
                  {/* Animated border on hover - only apply hover effects on client side after mounting */}
                  <div className="absolute inset-0 z-10 pointer-events-none">
                    <div className={cn(
                      "absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-blue-400 to-transparent transform -translate-x-full transition-transform duration-1000",
                      isMounted && hoveredItem === item.id && "translate-x-0"
                    )}></div>
                    <div className={cn(
                      "absolute top-0 right-0 w-0.5 h-full bg-gradient-to-b from-transparent via-blue-400 to-transparent transform -translate-y-full transition-transform duration-1000 delay-150",
                      isMounted && hoveredItem === item.id && "translate-y-0"
                    )}></div>
                    <div className={cn(
                      "absolute bottom-0 right-0 w-full h-0.5 bg-gradient-to-r from-transparent via-cyan-400 to-transparent transform translate-x-full transition-transform duration-1000 delay-300",
                      isMounted && hoveredItem === item.id && "-translate-x-0"
                    )}></div>
                    <div className={cn(
                      "absolute bottom-0 left-0 w-0.5 h-full bg-gradient-to-b from-transparent via-cyan-400 to-transparent transform translate-y-full transition-transform duration-1000 delay-450",
                      isMounted && hoveredItem === item.id && "-translate-y-0"
                    )}></div>
                  </div>

                  {/* Image - USING NEXT.JS IMAGE COMPONENT CORRECTLY */}
                  <div className="relative w-full h-full overflow-hidden">
                    <Image
                      src={item.image} 
                      alt={item.title}
                      fill
                      className={cn(
                        "object-cover transition-transform duration-700 ease-out",
                        isMounted && hoveredItem === item.id ? "scale-110" : "scale-100"
                      )}
                      sizes="(max-width: 790px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      priority={item.id === 1} // Add priority to first image for better performance
                      onError={(e) => {
                        // Fallback to placeholder if image fails to load
                        e.currentTarget.src = getPlaceholderImage(item.id);
                      }}
                    />

                    {/* Overlay - only apply hover effects on client side after mounting */}
                    <div className={cn(
                      "absolute inset-0 bg-gradient-to-t from-blue-900/80 via-blue-900/40 to-transparent transition-opacity duration-300",
                      isMounted && hoveredItem === item.id ? "opacity-100" : "opacity-0"
                    )}>
                      <div className="absolute inset-0 flex flex-col justify-end p-6 text-white">
                        <h3 className="text-xl font-bold mb-2 transform transition-transform duration-300 translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100">{item.title}</h3>
                        <p className="text-sm text-blue-100 transform transition-transform duration-300 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 delay-100">{item.description}</p>

                        {/* View button */}
                        <button
                          onClick={() => handleImageClick(item.id)}
                          className="mt-4 px-4 py-2 bg-blue-500/80 hover:bg-blue-600 rounded-full text-sm font-medium transform transition-all duration-300 translate-y-6 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 delay-200 flex items-center gap-2 w-fit"
                        >
                          <Maximize2 size={14} />
                          View
                        </button>
                      </div>
                    </div>

                    {/* Category badge */}
                    <div className="absolute top-4 left-4 px-3 py-1 bg-white/80 dark:bg-neutral-800/80 rounded-full text-xs font-medium text-blue-600 dark:text-blue-400 backdrop-blur-sm">
                      {item.category}
                    </div>
                  </div>
                </div>
              </TiltCard>
            </motion.div>
          ))}
        </motion.div>

        {/* Empty state */}
        {filteredItems.length === 0 && (
          <div className="flex flex-col items-center justify-center py-20">
            <Camera className="w-16 h-16 text-muted-foreground/30 mb-4" />
            <p className="text-muted-foreground text-lg">No images found in this category</p>
          </div>
        )}

        {/* Enhanced Lightbox with animations */}
        <AnimatePresence>
          {selectedImage !== null && (
            <motion.div
              className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4 md:p-10"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={handleClose}
            >
              {/* Decorative elements */}
              <motion.div
                className="absolute top-[20%] left-[15%] w-32 h-32 rounded-full bg-blue-500/5 blur-3xl"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.3, 0.5, 0.3],
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  repeatType: "reverse",
                }}
              />
              <motion.div
                className="absolute bottom-[20%] right-[15%] w-40 h-40 rounded-full bg-cyan-500/5 blur-3xl"
                animate={{
                  scale: [1, 0.8, 1],
                  opacity: [0.3, 0.5, 0.3],
                }}
                transition={{
                  duration: 10,
                  repeat: Infinity,
                  repeatType: "reverse",
                  delay: 1,
                }}
              />

              {/* Close button with animation */}
              <motion.button
                className="absolute top-4 right-4 p-2 text-white/70 hover:text-white bg-black/20 hover:bg-black/40 rounded-full transition-colors duration-200 z-10"
                onClick={handleClose}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <X size={24} />
              </motion.button>

              {/* Navigation buttons with animations */}
              <motion.button
                className="absolute left-4 top-1/2 -translate-y-1/2 p-3 text-white/70 hover:text-white bg-black/20 hover:bg-black/40 rounded-full transition-colors duration-200 z-10"
                onClick={(e) => {
                  e.stopPropagation();
                  handlePrev();
                }}
                whileHover={{ scale: 1.1, x: -5 }}
                whileTap={{ scale: 0.9 }}
              >
                <ChevronLeft size={24} />
              </motion.button>

              <motion.button
                className="absolute right-4 top-1/2 -translate-y-1/2 p-3 text-white/70 hover:text-white bg-black/20 hover:bg-black/40 rounded-full transition-colors duration-200 z-10"
                onClick={(e) => {
                  e.stopPropagation();
                  handleNext();
                }}
                whileHover={{ scale: 1.1, x: 5 }}
                whileTap={{ scale: 0.9 }}
              >
                <ChevronRight size={24} />
              </motion.button>

              {/* Main content container */}
              <motion.div 
                className="relative max-w-5xl w-full flex flex-col items-center mt-10 z-50" 
                onClick={(e) => e.stopPropagation()} 
                initial={{ scale: 0.9, opacity: 0, y: 20 }} 
                animate={{ scale: 1, opacity: 1, y: 0 }} 
                exit={{ scale: 0.9, opacity: 0, y: 20 }} 
                transition={{ type: "spring", damping: 25 }} 
              >
                {selectedImage && (
                  <>
                    {/* Image container with subtle floating animation */}
                    <motion.div 
                      className="relative w-full max-w-full max-h-[80vh] overflow-hidden rounded-lg shadow-2xl z-10" 
                      animate={{ y: [0, -5, 0] }} 
                      transition={{ duration: 6, repeat: Infinity, repeatType: "reverse" }}
                    >
                      <Image
                        src={galleryItems.find(item => item.id === selectedImage)?.image || getPlaceholderImage(selectedImage)}
                        alt={galleryItems.find(item => item.id === selectedImage)?.title || "Gallery image"}
                        width={0}
                        height={0}
                        className="w-full h-auto max-w-full max-h-[80vh] object-contain"
                        sizes="100vw"
                        priority
                        onError={(e) => {
                          // Fallback to placeholder if image fails to load
                          e.currentTarget.src = getPlaceholderImage(selectedImage);
                        }}
                      />
                      
                      {/* Subtle gradient overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent pointer-events-none z-20" />
                    </motion.div>

                    {/* Info panel with animations */}
                    <motion.div 
                      className="bg-black/50 backdrop-blur-sm p-6 rounded-b-lg w-full border-t border-blue-500/20 z-20" 
                      initial={{ opacity: 0, y: 20 }} 
                      animate={{ opacity: 1, y: 0 }} 
                      transition={{ delay: 0.2 }}
                    >
                      <motion.h3 
                        className="text-xl font-bold text-white mb-2" 
                        initial={{ opacity: 0, x: -20 }} 
                        animate={{ opacity: 1, x: 0 }} 
                        transition={{ delay: 0.3 }}
                      >
                        {galleryItems.find(item => item.id === selectedImage)?.title}
                      </motion.h3>
                      
                      <motion.p 
                        className="text-blue-100" 
                        initial={{ opacity: 0, x: -20 }} 
                        animate={{ opacity: 1, x: 0 }} 
                        transition={{ delay: 0.4 }}
                      >
                        {galleryItems.find(item => item.id === selectedImage)?.description}
                      </motion.p>
                      
                      {/* Animated underline */}
                      <motion.div 
                        className="h-0.5 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full mt-4" 
                        initial={{ width: 0 }} 
                        animate={{ width: "100%" }} 
                        transition={{ delay: 0.5, duration: 0.8 }}
                      />
                    </motion.div>
                  </>
                )}
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Gallery;
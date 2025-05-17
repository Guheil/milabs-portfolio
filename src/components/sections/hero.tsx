"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import FloatingAnimation from "@/components/ui/floating-animation";
import TextAnimation from "@/components/ui/text-animation";
import Sparkles from "@/components/ui/sparkles";
import { motion, AnimatePresence } from "framer-motion";
import AuroraBackground from "@/components/ui/aurora-background";
import StarsBackground from "@/components/ui/stars-background";
import GridPattern from "@/components/ui/grid-pattern";
import AnimatedBlobs from "@/components/ui/animated-blobs";

export const Hero = () => {
  const [isImageHovered, setIsImageHovered] = useState(false);

  return (
    <AuroraBackground className="min-h-screen w-full flex flex-col items-center justify-center py-20 overflow-hidden bg-gradient-to-b from-blue-50 to-white dark:from-blue-950 dark:to-neutral-900">
      {/* Animated blurred blobs in the background - more visible in light mode */}
      <AnimatedBlobs
        blobCount={3}
        colors={["#3B82F6", "#60A5FA", "#93C5FD"]}
        minSize={500}
        maxSize={800}
        minBlur={90}  // Slightly less blur for more visibility
        maxBlur={130}  // Slightly less blur for more visibility
        minOpacity={0.08}  // Increased opacity for light mode
        maxOpacity={0.15}  // Increased opacity for light mode
        zIndex={0}
        leftSideOnly={true}  // Keep blobs only on the left side
        className="opacity-[0.85] dark:opacity-[0.6]" // More visible in light mode
      />

      {/* Blue glowing stars in light mode */}
      <StarsBackground
        count={50}
        color="#3B82F6" // Blue color
        maxSize={3.5}
        minSize={1.8}
        opacity={0.9}
        zIndex={1}
        className="block dark:hidden" // Only show in light mode
      />

      {/* Stars for dark mode */}
      <StarsBackground
        count={50}
        color="#FFFFFF"
        maxSize={3.5}
        minSize={1.8}
        opacity={0.9}
        zIndex={1}
        className="hidden dark:block" // Only show in dark mode
      />

      {/* Subtle grid pattern - black in light mode, white in dark mode */}
      <GridPattern
        size={50}
        lineWidth={1.2}
        lineColor="var(--grid-color, #000000)"
        opacity={0.08}
        zIndex={1}
        className="[--grid-color:#000000] dark:[--grid-color:#FFFFFF]"
      />

      {/* Main content with diagonal layout */}
      <div className="container mx-auto px-4 md:px-6 max-w-7xl relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Text content - takes 7 columns on large screens */}
          <div className="lg:col-span-7 space-y-8 lg:pr-8">
            <FloatingAnimation delay={0.1} yOffset={20}>
              <div className="relative">
                <motion.div
                  className="absolute -left-6 -top-6 w-12 h-12 rounded-full bg-blue-100 dark:bg-blue-900/30 blur-md"
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 4, repeat: Infinity }}
                />
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight relative z-10 dark:text-white">
                  <TextAnimation text="Hi, I'm" delay={0.2} className="dark:text-white" />
                  <br />
                  <Sparkles color="#6495ED">
                    <span className="bg-gradient-to-r from-blue-500 to-cyan-500 bg-clip-text text-transparent">
                      Shelby Bianca Delgado
                    </span>
                  </Sparkles>
                </h1>
              </div>
            </FloatingAnimation>

            <FloatingAnimation delay={0.3} yOffset={20}>
              <div className="relative pl-4 border-l-2 border-blue-300 dark:border-blue-700">
                <p className="text-xl text-muted-foreground max-w-[600px] dark:text-white/90">
                  A practical individual with strong morals and professionalism, pursuing a
                  Bachelor of Science in Computer Engineering with a focus on technical skills
                  and continuous improvement.
                </p>
              </div>
            </FloatingAnimation>

            <FloatingAnimation delay={0.5} yOffset={20}>
              <div className="flex flex-wrap gap-4 pt-4">
                <Button
                  size="lg"
                  className="rounded-full bg-blue-500 hover:bg-blue-600 transition-all duration-300 shadow-md hover:shadow-lg hover:-translate-y-1"
                >
                  Contact Me
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="rounded-full border-blue-300 hover:bg-blue-50 dark:hover:bg-blue-950 transition-all duration-300 shadow-sm hover:shadow-md hover:-translate-y-1 dark:text-white"
                >
                  View Resume
                </Button>
              </div>
            </FloatingAnimation>

            {/* Decorative dots */}
            <div className="hidden lg:flex space-x-2 pt-8">
              {[...Array(5)].map((_, i) => (
                <motion.div
                  key={i}
                  className="w-2 h-2 rounded-full bg-blue-400/60 dark:bg-blue-600/60"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 1 + i * 0.1, duration: 0.5 }}
                />
              ))}
            </div>
          </div>

          {/* Image content - takes 5 columns on large screens */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <FloatingAnimation delay={0.4} className="relative">
              {/* Optimized decorative background for the image */}
              <motion.div
                className="absolute -z-10 w-[270px] h-[270px] md:w-[340px] md:h-[340px] rounded-full bg-gradient-to-tr from-blue-200/40 to-cyan-200/40 dark:from-blue-800/15 dark:to-cyan-800/15 blur-md"
                animate={{
                  scale: isImageHovered ? 1.05 : 1, // Reduced scale change
                  rotate: isImageHovered ? 5 : 0, // Reduced rotation
                }}
                transition={{ duration: 0.5 }}
              />

              {/* Optimized decorative ring - now properly sized */}
              <motion.div
                className="absolute -z-5 w-[270px] h-[270px] md:w-[340px] md:h-[340px] rounded-full border border-dashed border-blue-300/30 dark:border-blue-700/30"
                animate={{
                  rotate: 360,
                  scale: isImageHovered ? 1.02 : 1, // Reduced scale change
                }}
                transition={{
                  rotate: { duration: 60, repeat: Infinity, ease: "linear" }, // Slower rotation
                  scale: { duration: 0.5 }
                }}
              />

              {/* Image container with optimized hover effects */}
              <motion.div
                className="relative w-[280px] h-[280px] md:w-[350px] md:h-[350px] rounded-full overflow-hidden border-4 border-white dark:border-blue-900 shadow-xl z-10"
                onHoverStart={() => setIsImageHovered(true)}
                onHoverEnd={() => setIsImageHovered(false)}
                animate={{
                  scale: isImageHovered ? 1.03 : 1, // Reduced scale change
                  rotate: isImageHovered ? 2 : 0, // Reduced rotation
                }}
                transition={{ duration: 0.4 }}
              >
                {/* Image with optimized hover effect */}
                <Image
                  src="/placeholder-profile.svg"
                  alt="Shelby Bianca Delgado"
                  fill
                  className="object-cover transition-transform duration-500"
                  style={{
                    transform: isImageHovered ? 'scale(1.05)' : 'scale(1)', // Reduced scale change
                  }}
                  priority
                />

                {/* Optimized overlay on hover */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-t from-blue-500/30 to-transparent opacity-0"
                  animate={{ opacity: isImageHovered ? 0.5 : 0 }} // Reduced opacity
                  transition={{ duration: 0.3 }}
                />

                {/* Simplified decorative elements that appear on hover */}
                <AnimatePresence>
                  {isImageHovered && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }} // Reduced movement
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ duration: 0.3 }}
                      className="absolute bottom-6 left-0 right-0 text-center text-white font-medium px-4 z-20"
                    >
                      <span className="text-sm md:text-base">Computer Engineering Student</span>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            </FloatingAnimation>
          </div>
        </div>

        {/* Optimized scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center opacity-80 hover:opacity-100 transition-opacity duration-300"
          animate={{ y: [0, 5, 0] }} // Reduced movement
          transition={{ duration: 3, repeat: Infinity }} // Slower animation
        >
          <span className="text-xs text-muted-foreground mb-2">Scroll Down</span>
          <div className="w-5 h-8 rounded-full border border-blue-300 dark:border-blue-700 flex justify-center pt-1.5">
            <motion.div
              className="w-1 h-1 rounded-full bg-blue-500"
              animate={{ y: [0, 8, 0] }} // Reduced movement
              transition={{ duration: 2.5, repeat: Infinity }}
            />
          </div>
        </motion.div>
      </div>
    </AuroraBackground>
  );
};

export default Hero;

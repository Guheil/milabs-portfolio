"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Heart } from "lucide-react";

interface SplashScreenProps {
  finishLoading: () => void;
}

const SplashScreen: React.FC<SplashScreenProps> = ({ finishLoading }) => {
  // State to control exit animation
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    // Start showing the splash screen
    const showTimeout = setTimeout(() => {
      // After 3 seconds, start exit animation
      setIsExiting(true);

      // After exit animation completes, call finishLoading
      const exitTimeout = setTimeout(() => {
        finishLoading();
      }, 800); // Exit animation duration

      return () => clearTimeout(exitTimeout);
    }, 2500); // Total display time before exit

    return () => clearTimeout(showTimeout);
  }, [finishLoading]);

  return (
    <motion.div
      className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-gradient-to-b from-blue-50 to-white dark:from-blue-950 dark:to-neutral-900 w-full h-full"
      initial={{ opacity: 0 }}
      animate={{ opacity: isExiting ? 0 : 1 }}
      transition={{ duration: 0.8 }}
      style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0 }}
    >
      <div className="relative">
        {/* Decorative elements */}
        <div className="absolute -top-20 -left-20 w-40 h-40 bg-blue-200/30 dark:bg-blue-700/20 rounded-full blur-3xl" />
        <div className="absolute -bottom-20 -right-20 w-40 h-40 bg-cyan-200/30 dark:bg-cyan-700/20 rounded-full blur-3xl" />

        {/* Main content */}
        <div className="relative flex flex-col items-center">
          {/* Logo/Name */}
          <motion.div
            className="mb-8 text-4xl md:text-5xl font-bold text-blue-600 dark:text-blue-400"
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            Shelby
          </motion.div>

          {/* Loading animation */}
          <div className="flex items-center justify-center space-x-3 mb-6">
            {[0, 1, 2, 3, 4].map((index) => (
              <motion.div
                key={index}
                className="w-3 h-3 rounded-full bg-gradient-to-r from-blue-400 to-cyan-400"
                initial={{ y: 0, opacity: 0.5 }}
                animate={{ y: ["0%", "-50%", "0%"], opacity: [0.5, 1, 0.5] }}
                transition={{
                  duration: 1,
                  ease: "easeInOut",
                  repeat: Infinity,
                  delay: index * 0.1,
                }}
              />
            ))}
          </div>

          {/* Cute animated elements */}
          <div className="relative mb-6">
            {/* Floating hearts - with predefined positions to avoid hydration errors */}
            <div className="absolute inset-0 w-full h-full">
              {/* Predefined positions for hearts to avoid random values */}
              {[
                { left: "20%", top: "15%", size: 18, delay: 0.3, duration: 2.5 },
                { left: "70%", top: "25%", size: 14, delay: 0.6, duration: 3.2 },
                { left: "30%", top: "65%", size: 22, delay: 0.9, duration: 2.8 },
                { left: "80%", top: "75%", size: 16, delay: 1.2, duration: 3.0 },
                { left: "50%", top: "40%", size: 20, delay: 1.5, duration: 2.7 }
              ].map((heart, i) => (
                <motion.div
                  key={i}
                  className="absolute"
                  initial={{
                    x: 0,
                    y: 0,
                    opacity: 0
                  }}
                  animate={{
                    y: [0, -20, 0],
                    opacity: [0, 1, 0]
                  }}
                  transition={{
                    duration: heart.duration,
                    delay: heart.delay,
                    repeat: Infinity,
                    repeatDelay: 0.5
                  }}
                  style={{
                    left: heart.left,
                    top: heart.top,
                  }}
                >
                  <Heart
                    className="w-4 h-4 text-blue-400 opacity-60"
                    style={{
                      width: `${heart.size}px`,
                      height: `${heart.size}px`,
                      color: "rgba(96, 165, 250, 0.6)",
                      opacity: 0.7
                    }}
                  />
                </motion.div>
              ))}
            </div>

            {/* Main heart */}
            <motion.div
              animate={{
                scale: [1, 1.1, 1],
                rotate: [0, 5, -5, 0]
              }}
              transition={{
                duration: 2,
                ease: "easeInOut",
                repeat: Infinity,
              }}
              className="relative z-10"
            >
              <Heart className="w-12 h-12 text-pink-500 fill-pink-500" />
            </motion.div>
          </div>

          {/* Loading text */}
          <motion.p
            className="text-blue-600 dark:text-blue-400 font-medium mb-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            Loading your experience...
          </motion.p>

          {/* Cute message */}
          <motion.p
            className="text-sm text-blue-400/70 dark:text-blue-500/70 text-center max-w-xs"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            "Creating positive experiences, one interaction at a time!"
          </motion.p>
        </div>
      </div>
    </motion.div>
  );
};

export default SplashScreen;

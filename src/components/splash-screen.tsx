"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Heart } from "lucide-react";

interface SplashScreenProps {
  finishLoading: () => void;
}

const SplashScreen: React.FC<SplashScreenProps> = ({ finishLoading }) => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsMounted(true);
      setTimeout(finishLoading, 2000);
    }, 1000);

    return () => clearTimeout(timeout);
  }, [finishLoading]);

  const bounceTransition = {
    y: {
      duration: 0.4,
      yoyo: Infinity,
      ease: "easeOut",
    },
    opacity: {
      duration: 0.2,
      yoyo: Infinity,
      ease: "easeOut",
    },
  };

  return (
    <motion.div
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-gradient-to-b from-blue-50 to-white dark:from-blue-950 dark:to-neutral-900"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
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
          
          {/* Cute heart animation */}
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
            className="mb-6"
          >
            <Heart className="w-10 h-10 text-pink-500 fill-pink-500" />
          </motion.div>
          
          {/* Loading text */}
          <motion.p
            className="text-blue-600 dark:text-blue-400 font-medium"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            Loading your experience...
          </motion.p>
        </div>
      </div>
    </motion.div>
  );
};

export default SplashScreen;

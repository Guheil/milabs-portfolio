"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface Star {
  id: number;
  size: number;
  x: number;
  y: number;
  opacity: number;
  delay: number;
  duration: number;
}

interface StarsBackgroundProps {
  className?: string;
  count?: number;
  maxSize?: number;
  minSize?: number;
  color?: string;
  opacity?: number;
  zIndex?: number;
}

export const StarsBackground: React.FC<StarsBackgroundProps> = ({
  className = "",
  count = 20, // Default number of stars - keeping it subtle
  maxSize = 3, // Max size in pixels
  minSize = 1, // Min size in pixels
  color = "#FFFFFF", // Default color
  opacity = 1, // Default opacity
  zIndex = 0,
}) => {
  const [stars, setStars] = useState<Star[]>([]);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);

    // Generate stars with deterministic positions for initial render
    // to prevent hydration mismatch
    const generateStars = () => {
      const newStars: Star[] = [];

      for (let i = 0; i < count; i++) {
        // Use deterministic values for server rendering, random only on client
        const randomId = isMounted ? Math.random() : i + 0.1;
        const randomSize = isMounted
          ? Math.random() * (maxSize - minSize) + minSize
          : ((i % (maxSize - minSize)) + minSize);

        const randomX = isMounted ? Math.random() * 100 : ((i * 7) % 100);
        const randomY = isMounted ? Math.random() * 100 : ((i * 11) % 100);

        const randomOpacity = isMounted
          ? Math.random() * 0.4 + 0.5 // Between 0.5 and 0.9 - higher opacity
          : 0.7;

        const randomDelay = isMounted
          ? Math.random() * 3 // Shorter delays for more active twinkling
          : (i % 3);

        const randomDuration = isMounted
          ? Math.random() * 2 + 1.5 // Between 1.5 and 3.5 seconds - faster twinkling
          : 2.5;

        newStars.push({
          id: randomId,
          size: randomSize,
          x: randomX,
          y: randomY,
          opacity: randomOpacity,
          delay: randomDelay,
          duration: randomDuration,
        });
      }

      setStars(newStars);
    };

    generateStars();

    // No need to regenerate stars frequently for a subtle effect
    const interval = setInterval(generateStars, 10000);

    return () => clearInterval(interval);
  }, [isMounted, count, maxSize, minSize]);

  return (
    <div
      className={cn(
        "absolute inset-0 overflow-hidden pointer-events-none",
        className
      )}
      style={{ zIndex, opacity }}
    >
      {stars.map((star) => (
        <motion.div
          key={star.id}
          className="absolute rounded-full"
          style={{
            width: `${star.size}px`,
            height: `${star.size}px`,
            left: `${star.x}%`,
            top: `${star.y}%`,
            backgroundColor: color,
            // Enhanced glow effect for blue stars
            boxShadow: color.includes('#3B82F6')
              ? `0 0 ${star.size * 2}px ${color}, 0 0 ${star.size * 3}px rgba(59, 130, 246, 0.5)`
              : `0 0 ${star.size}px ${color}`,
          }}
          initial={{ opacity: 0, scale: 0 }}
          animate={{
            opacity: [0, star.opacity, star.opacity * 1.5, star.opacity, 0], // Enhanced twinkling effect
            scale: [0, 1, 1.2, 1, 0], // More pronounced pulsing effect
            boxShadow: color.includes('#3B82F6')
              ? [
                  `0 0 0px ${color}`,
                  `0 0 ${star.size * 2}px ${color}, 0 0 ${star.size * 3}px rgba(59, 130, 246, 0.3)`,
                  `0 0 ${star.size * 3}px ${color}, 0 0 ${star.size * 4}px rgba(59, 130, 246, 0.5)`,
                  `0 0 ${star.size * 2}px ${color}, 0 0 ${star.size * 3}px rgba(59, 130, 246, 0.3)`,
                  `0 0 0px ${color}`
                ]
              : [
                  `0 0 0px ${color}`,
                  `0 0 ${star.size}px ${color}`,
                  `0 0 ${star.size * 2}px ${color}`,
                  `0 0 ${star.size}px ${color}`,
                  `0 0 0px ${color}`
                ]
          }}
          transition={{
            duration: star.duration,
            delay: star.delay,
            repeat: Infinity,
            repeatDelay: Math.random() * 1.5 + 0.5, // Even faster twinkling with shorter pauses
          }}
        />
      ))}
    </div>
  );
};

export default StarsBackground;

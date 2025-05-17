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
    // Only run star generation on the client side
    if (typeof window === 'undefined') return;

    setIsMounted(true);

    // Generate stars with deterministic positions
    const generateStars = () => {
      const newStars: Star[] = [];

      // Fixed positions for initial render to prevent hydration mismatch
      const fixedPositions = Array(100).fill(0).map((_, i) => ({
        x: ((i * 7) % 100),
        y: ((i * 11) % 100),
        size: ((i % (maxSize - minSize)) + minSize),
        opacity: 0.7,
        delay: (i % 3),
        duration: 2.5,
        id: i + 0.1
      }));

      for (let i = 0; i < count; i++) {
        if (!isMounted) {
          // Use deterministic values for server rendering
          newStars.push(fixedPositions[i]);
        } else {
          // Use random values only on client after hydration
          newStars.push({
            id: Math.random(),
            size: Math.random() * (maxSize - minSize) + minSize,
            x: Math.random() * 100,
            y: Math.random() * 100,
            opacity: Math.random() * 0.4 + 0.5, // Between 0.5 and 0.9
            delay: Math.random() * 3,
            duration: Math.random() * 2 + 1.5, // Between 1.5 and 3.5 seconds
          });
        }
      }

      setStars(newStars);
    };

    generateStars();

    // Only set up interval for regeneration after initial mount
    let interval: NodeJS.Timeout | null = null;
    if (isMounted) {
      interval = setInterval(generateStars, 10000);
    }

    return () => {
      if (interval) clearInterval(interval);
    };
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

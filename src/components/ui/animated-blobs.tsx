"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface BlobProps {
  className?: string;
  color?: string;
  size?: number;
  x?: number | string;
  y?: number | string;
  duration?: number;
  delay?: number;
  blur?: number;
  opacity?: number;
}

const Blob: React.FC<BlobProps> = ({
  className,
  color = "#3B82F6", // Default blue color
  size = 300,
  x = 0,
  y = 0,
  duration = 20,
  delay = 0,
  blur = 70,
  opacity = 0.15,
}) => {
  // Convert string positions to numbers for animation calculations
  const initialX = typeof x === 'string' ? x : `${x}px`;
  const initialY = typeof y === 'string' ? y : `${y}px`;

  return (
    <motion.div
      className={cn("absolute rounded-full pointer-events-none", className)}
      style={{
        backgroundColor: color,
        width: size,
        height: size,
        left: initialX,
        top: initialY,
        filter: `blur(${blur}px)`,
        opacity,
      }}
      animate={{
        scale: [1, 1.03, 0.97, 1.01, 1],  // Even more subtle scale changes
        x: [0, 15, -10, 8, 0],  // Even more subtle horizontal movement
        y: [0, -12, 10, -8, 0],  // Even more subtle vertical movement
      }}
      transition={{
        duration,
        ease: "easeInOut",
        repeat: Infinity,
        repeatType: "reverse",
        delay,
      }}
    />
  );
};

interface AnimatedBlobsProps {
  className?: string;
  blobCount?: number;
  colors?: string[];
  minSize?: number;
  maxSize?: number;
  minBlur?: number;
  maxBlur?: number;
  minOpacity?: number;
  maxOpacity?: number;
  zIndex?: number;
  leftSideOnly?: boolean; // New prop to position blobs only on the left side
}

export const AnimatedBlobs: React.FC<AnimatedBlobsProps> = ({
  className,
  blobCount = 4,
  colors = ["#3B82F6", "#60A5FA", "#93C5FD", "#22D3EE"],
  minSize = 200,
  maxSize = 400,
  minBlur = 50,
  maxBlur = 100,
  minOpacity = 0.05,
  maxOpacity = 0.2,
  zIndex = 0,
  leftSideOnly = false,
}) => {
  const [blobs, setBlobs] = useState<BlobProps[]>([]);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);

    // Generate blobs with deterministic positions for initial render
    // to prevent hydration mismatch
    const generateBlobs = () => {
      const newBlobs: BlobProps[] = [];

      // Fixed positions for server rendering
      const allPositions = [
        { x: "10%", y: "20%" },
        { x: "70%", y: "15%" },
        { x: "20%", y: "70%" },
        { x: "75%", y: "60%" },
        { x: "40%", y: "40%" },
        { x: "60%", y: "80%" },
      ];

      // Positions for left side only
      const leftPositions = [
        { x: "10%", y: "20%" },
        { x: "5%", y: "50%" },
        { x: "20%", y: "70%" },
        { x: "15%", y: "30%" },
        { x: "25%", y: "80%" },
        { x: "30%", y: "15%" },
      ];

      // Choose positions based on leftSideOnly prop
      const positions = leftSideOnly ? leftPositions : allPositions;

      for (let i = 0; i < blobCount; i++) {
        const color = colors[i % colors.length];

        // Use deterministic values for server rendering, random only on client
        const size = isMounted
          ? Math.floor(Math.random() * (maxSize - minSize) + minSize)
          : minSize + ((i * 50) % (maxSize - minSize));

        const blur = isMounted
          ? Math.floor(Math.random() * (maxBlur - minBlur) + minBlur)
          : minBlur + ((i * 10) % (maxBlur - minBlur));

        const opacity = isMounted
          ? Math.random() * (maxOpacity - minOpacity) + minOpacity
          : minOpacity + ((i * 0.03) % (maxOpacity - minOpacity));

        const duration = isMounted
          ? Math.random() * 20 + 30 // Between 30 and 50 seconds for extremely slow, subtle movement
          : 30 + (i * 5);

        const delay = isMounted
          ? Math.random() * 8 // More varied delays
          : i * 2;

        // Generate position based on leftSideOnly prop
        let xPosition, yPosition;

        if (isMounted) {
          // Client-side random positions
          if (leftSideOnly) {
            // Only left half (0% to 40%)
            xPosition = `${Math.random() * 40}%`;
          } else {
            // Full width (0% to 100%)
            xPosition = `${Math.random() * 100}%`;
          }
          yPosition = `${Math.random() * 100}%`;
        } else {
          // Server-side fixed positions
          const position = positions[i % positions.length];
          xPosition = position.x;
          yPosition = position.y;
        }

        newBlobs.push({
          color,
          size,
          x: xPosition,
          y: yPosition,
          duration,
          delay,
          blur,
          opacity,
        });
      }

      setBlobs(newBlobs);
    };

    generateBlobs();
  }, [isMounted, blobCount, colors, minSize, maxSize, minBlur, maxBlur, minOpacity, maxOpacity, leftSideOnly]);

  return (
    <div
      className={cn(
        "absolute inset-0 overflow-hidden pointer-events-none",
        className
      )}
      style={{ zIndex }}
    >
      {blobs.map((blob, index) => (
        <Blob
          key={index}
          color={blob.color}
          size={blob.size}
          x={blob.x}
          y={blob.y}
          duration={blob.duration}
          delay={blob.delay}
          blur={blob.blur}
          opacity={blob.opacity}
        />
      ))}
    </div>
  );
};

export default AnimatedBlobs;

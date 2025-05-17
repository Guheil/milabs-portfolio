"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

interface SparkleProps {
  color?: string;
  size?: number;
  style?: React.CSSProperties;
}

const Sparkle: React.FC<SparkleProps> = ({
  color = "#FFC700",
  size = 20,
  style = {},
}) => {
  const path =
    "M26.5 25.5C19.0043 33.3697 0 34 0 34C0 34 19.1013 35.3684 26.5 43.5C33.234 50.901 34 68 34 68C34 68 36.9884 50.7065 44.5 43.5C51.6431 36.647 68 34 68 34C68 34 51.6947 32.0939 44.5 25.5C36.5605 18.2235 34 0 34 0C34 0 33.6591 17.9837 26.5 25.5Z";

  return (
    <motion.svg
      width={size}
      height={size}
      viewBox="0 0 68 68"
      fill="none"
      style={style}
      initial={{ scale: 0, rotate: 0 }}
      animate={{
        scale: [0, 1, 0.8, 1, 0],
        rotate: [0, 0, 180, 180, 360],
      }}
      transition={{
        duration: 2,
        ease: "easeInOut",
        times: [0, 0.2, 0.5, 0.8, 1],
        repeat: Infinity,
        repeatDelay: 1,
      }}
    >
      <path d={path} fill={color} />
    </motion.svg>
  );
};

interface SparklesProps {
  children: React.ReactNode;
  className?: string;
  color?: string;
}

export const Sparkles: React.FC<SparklesProps> = ({
  children,
  className = "",
  color = "#FFC700",
}) => {
  const [sparkles, setSparkles] = useState<Array<{ id: number; size: number; style: React.CSSProperties }>>([]);

  useEffect(() => {
    const generateSparkles = () => {
      const newSparkles = [];
      const sparkleCount = 4;

      for (let i = 0; i < sparkleCount; i++) {
        newSparkles.push({
          id: Math.random(),
          size: Math.random() * 10 + 10,
          style: {
            position: "absolute",
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            zIndex: 2,
          },
        });
      }

      setSparkles(newSparkles);
    };

    generateSparkles();
    const interval = setInterval(generateSparkles, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className={`relative inline-block ${className}`}>
      {sparkles.map(sparkle => (
        <Sparkle
          key={sparkle.id}
          color={color}
          size={sparkle.size}
          style={sparkle.style}
        />
      ))}
      <div className="relative z-1">{children}</div>
    </div>
  );
};

export default Sparkles;

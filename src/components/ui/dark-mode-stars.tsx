"use client";

import React from "react";
import { useTheme } from "@/context/theme-context";
import StarsBackground from "@/components/ui/stars-background";

interface DarkModeStarsProps {
  className?: string;
}

export const DarkModeStars: React.FC<DarkModeStarsProps> = ({ className }) => {
  // Using useTheme hook to ensure proper context connection
  useTheme();

  return (
    <div className="fixed inset-0 pointer-events-none z-[-1]">
      {/* Blue glowing stars for light mode */}
      <StarsBackground
        count={100}
        color="#3B82F6" // Blue color
        maxSize={2.5}
        minSize={1.2}
        opacity={0.8}
        zIndex={0}
        className={`${className} block dark:hidden`} // Only show in light mode
      />

      {/* White stars for dark mode */}
      <StarsBackground
        count={100}
        color="#FFFFFF"
        maxSize={2.5}
        minSize={1.2}
        opacity={0.7}
        zIndex={0}
        className={`${className} hidden dark:block`} // Only show in dark mode
      />
    </div>
  );
};

export default DarkModeStars;

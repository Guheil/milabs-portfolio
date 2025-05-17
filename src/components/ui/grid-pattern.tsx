"use client";

import React from "react";
import { cn } from "@/lib/utils";

interface GridPatternProps {
  className?: string;
  size?: number;
  lineWidth?: number;
  lineColor?: string;
  opacity?: number;
  zIndex?: number;
}

export const GridPattern: React.FC<GridPatternProps> = ({
  className = "",
  size = 40, // Grid cell size in pixels
  lineWidth = 1, // Line width in pixels
  lineColor = "#FFFFFF", // Default color
  opacity = 0.05, // Very subtle by default
  zIndex = 0,
}) => {
  return (
    <div
      className={cn(
        "absolute inset-0 pointer-events-none",
        className
      )}
      style={{
        backgroundImage: `
          linear-gradient(to right, ${lineColor} ${lineWidth}px, transparent ${lineWidth}px),
          linear-gradient(to bottom, ${lineColor} ${lineWidth}px, transparent ${lineWidth}px)
        `,
        backgroundSize: `${size}px ${size}px`,
        opacity: opacity,
        zIndex: zIndex,
      }}
    />
  );
};

export default GridPattern;

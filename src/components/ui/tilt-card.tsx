"use client";

import React, { useState, useRef, ReactNode, useEffect } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface TiltCardProps {
  children: ReactNode;
  className?: string;
  containerClassName?: string;
  rotateIntensity?: number;
  glareOpacity?: number;
  glareColor?: string;
  borderRadius?: string;
  shadow?: string;
  disabled?: boolean;
}

export const TiltCard = ({
  children,
  className = "",
  containerClassName = "",
  rotateIntensity = 10,
  glareOpacity = 0.15,
  glareColor = "rgba(255, 255, 255, 0.8)",
  borderRadius = "1rem",
  shadow = "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
  disabled = false,
}: TiltCardProps) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);
  const [glarePosition, setGlarePosition] = useState({ x: 50, y: 50 });
  const [isHovered, setIsHovered] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  // Set isMounted to true after component mounts to prevent hydration mismatch
  useEffect(() => {
    setIsMounted(true);
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (disabled || !cardRef.current) return;

    const card = cardRef.current;
    const rect = card.getBoundingClientRect();

    // Calculate mouse position relative to card center (in percentage)
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const mouseX = e.clientX - centerX;
    const mouseY = e.clientY - centerY;

    // Convert to percentage (-1 to 1)
    const rotateXPercentage = (mouseY / (rect.height / 2)) * -1;
    const rotateYPercentage = mouseX / (rect.width / 2);

    // Apply rotation (with intensity factor)
    setRotateX(rotateXPercentage * rotateIntensity);
    setRotateY(rotateYPercentage * rotateIntensity);

    // Calculate glare position (0 to 100%)
    setGlarePosition({
      x: ((e.clientX - rect.left) / rect.width) * 100,
      y: ((e.clientY - rect.top) / rect.height) * 100,
    });
  };

  const handleMouseEnter = () => {
    if (disabled) return;
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    if (disabled) return;
    setIsHovered(false);
    setRotateX(0);
    setRotateY(0);
  };

  return (
    <div
      className={cn("perspective-[1200px] relative", containerClassName)}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      ref={cardRef}
    >
      <motion.div
        className={cn(
          "relative transform-gpu transition-transform duration-200 ease-out",
          className
        )}
        style={{
          rotateX: rotateX,
          rotateY: rotateY,
          borderRadius,
          boxShadow: isHovered ? shadow : "none",
        }}
      >
        {children}

        {/* Glare effect - only show on client side after mounting */}
        {isMounted && isHovered && !disabled && (
          <div
            className="absolute inset-0 pointer-events-none overflow-hidden"
            style={{ borderRadius }}
          >
            <div
              className="absolute w-[200%] h-[200%] pointer-events-none"
              style={{
                background: `radial-gradient(circle at ${glarePosition.x}% ${glarePosition.y}%, ${glareColor} 0%, transparent 50%)`,
                top: "-50%",
                left: "-50%",
                opacity: glareOpacity,
                transform: `rotate(${rotateY * 0.5}deg)`,
              }}
            />
          </div>
        )}
      </motion.div>
    </div>
  );
};

export default TiltCard;

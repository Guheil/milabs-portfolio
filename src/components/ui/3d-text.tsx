"use client";

import React, { useRef, useEffect } from "react";
import { cn } from "@/lib/utils";
import gsap from "gsap";

interface ThreeDTextProps {
  text: string;
  className?: string;
  color?: string;
  highlightColor?: string;
  size?: "sm" | "md" | "lg" | "xl" | "2xl" | "3xl" | "4xl" | "5xl" | "6xl" | "7xl";
  weight?: "normal" | "medium" | "semibold" | "bold";
  animate?: boolean;
  onAnimationComplete?: () => void;
}

export const ThreeDText: React.FC<ThreeDTextProps> = ({
  text,
  className,
  color = "text-blue-500",
  highlightColor = "text-blue-300",
  size = "5xl",
  weight = "bold",
  animate = true,
  onAnimationComplete,
}) => {
  const textRef = useRef<HTMLDivElement>(null);
  const shadowsRef = useRef<HTMLDivElement[]>([]);

  // Create 3D effect with multiple text shadows
  useEffect(() => {
    if (!textRef.current) return;

    // Create the 3D animation if animate is true
    if (animate) {
      gsap.fromTo(
        textRef.current,
        {
          opacity: 0,
          y: -50,
          rotationX: -45,
          transformPerspective: 800,
        },
        {
          opacity: 1,
          y: 0,
          rotationX: 0,
          duration: 1.2,
          ease: "back.out(1.7)",
          onComplete: onAnimationComplete,
        }
      );

      // Add a subtle floating animation for the title
      gsap.to(textRef.current, {
        y: 8, // Slightly larger movement for bigger text
        rotationY: 1.5, // Reduced rotation for more subtle effect
        rotationX: -1.5, // Reduced rotation for more subtle effect
        duration: 3, // Slower animation for more majestic feel
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut"
      });

      // Animate shadows for static 3D effect
      shadowsRef.current.forEach((shadow, index) => {
        const depth = (index + 1) * 0.8; // Match the increased depth
        gsap.to(shadow, {
          x: depth * 0.9, // Slightly increased movement
          y: depth * 0.9, // Slightly increased movement
          duration: 3, // Slower animation to match main text
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
          delay: index * 0.08 // Slightly faster cascade effect
        });
      });
    }
  }, [animate, onAnimationComplete]);

  // Generate shadow elements for 3D effect
  const shadowCount = 7; // Increased number of shadow layers for more depth
  const shadows = Array.from({ length: shadowCount }).map((_, index) => {
    // Increase depth for larger text
    const depth = (index + 1) * 0.8;
    return (
      <div
        key={index}
        ref={(el) => {
          if (el) shadowsRef.current[index] = el;
        }}
        className={cn(
          "absolute top-0 left-0 w-full h-full pointer-events-none",
          index === 0 ? highlightColor : color
        )}
        style={{
          transform: `translate(${depth}px, ${depth}px)`,
          opacity: 1 - index * 0.12, // Adjusted opacity for more visible layers
          zIndex: -index,
        }}
      >
        {text}
      </div>
    );
  });

  return (
    <div
      className={cn(
        "relative inline-block font-bold",
        `text-${size}`,
        `font-${weight}`,
        color,
        className
      )}
      ref={textRef}
      style={{
        transformStyle: "preserve-3d",
        textShadow: "0 0 15px rgba(96, 165, 250, 0.4)" // Add glow effect
      }}
    >
      {shadows}
      <div className="relative z-10">{text}</div>
    </div>
  );
};

export default ThreeDText;

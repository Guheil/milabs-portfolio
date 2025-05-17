"use client";

import React, { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";
import gsap from "gsap";

interface Particle {
  x: number;
  y: number;
  size: number;
  speedX: number;
  speedY: number;
  color: string;
  opacity: number;
  element: HTMLDivElement;
}

interface ParticleEffectProps {
  className?: string;
  particleCount?: number;
  colors?: string[];
  minSize?: number;
  maxSize?: number;
  minSpeed?: number;
  maxSpeed?: number;
  minOpacity?: number;
  maxOpacity?: number;
  interactive?: boolean;
  zIndex?: number;
}

export const ParticleEffect: React.FC<ParticleEffectProps> = ({
  className,
  particleCount = 30,
  colors = ["#B7E0FF", "#FFF5CD", "#FFCFB3", "#E78F81"],
  minSize = 2,
  maxSize = 6,
  minSpeed = 0.2,
  maxSpeed = 0.8,
  minOpacity = 0.3,
  maxOpacity = 0.7,
  interactive = true,
  zIndex = 0,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const particlesRef = useRef<Particle[]>([]);
  const animationRef = useRef<number | null>(null);
  const mouseRef = useRef({ x: 0, y: 0, active: false });

  useEffect(() => {
    if (!containerRef.current) return;

    const container = containerRef.current;
    const containerRect = container.getBoundingClientRect();
    const particles: Particle[] = [];

    // Create particles
    for (let i = 0; i < particleCount; i++) {
      const particle = document.createElement("div");
      particle.className = "absolute rounded-full";
      
      // Use deterministic values for server rendering
      const size = Math.random() * (maxSize - minSize) + minSize;
      const x = Math.random() * containerRect.width;
      const y = Math.random() * containerRect.height;
      const speedX = (Math.random() * (maxSpeed - minSpeed) + minSpeed) * (Math.random() > 0.5 ? 1 : -1);
      const speedY = (Math.random() * (maxSpeed - minSpeed) + minSpeed) * (Math.random() > 0.5 ? 1 : -1);
      const color = colors[Math.floor(Math.random() * colors.length)];
      const opacity = Math.random() * (maxOpacity - minOpacity) + minOpacity;

      // Set initial styles
      particle.style.width = `${size}px`;
      particle.style.height = `${size}px`;
      particle.style.left = `${x}px`;
      particle.style.top = `${y}px`;
      particle.style.backgroundColor = color;
      particle.style.opacity = opacity.toString();
      particle.style.boxShadow = `0 0 ${size * 2}px ${color}`;
      
      container.appendChild(particle);
      
      particles.push({
        x,
        y,
        size,
        speedX,
        speedY,
        color,
        opacity,
        element: particle
      });
    }
    
    particlesRef.current = particles;
    
    // Animation function
    const animate = () => {
      const containerRect = container.getBoundingClientRect();
      
      particles.forEach(particle => {
        // Update position
        particle.x += particle.speedX;
        particle.y += particle.speedY;
        
        // Handle mouse interaction
        if (interactive && mouseRef.current.active) {
          const dx = mouseRef.current.x - particle.x;
          const dy = mouseRef.current.y - particle.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          const maxDistance = 100;
          
          if (distance < maxDistance) {
            const force = (1 - distance / maxDistance) * 0.5;
            particle.x -= dx * force;
            particle.y -= dy * force;
          }
        }
        
        // Bounce off walls
        if (particle.x <= 0 || particle.x >= containerRect.width) {
          particle.speedX *= -1;
        }
        
        if (particle.y <= 0 || particle.y >= containerRect.height) {
          particle.speedY *= -1;
        }
        
        // Keep particles within bounds
        particle.x = Math.max(0, Math.min(containerRect.width, particle.x));
        particle.y = Math.max(0, Math.min(containerRect.height, particle.y));
        
        // Update element position
        particle.element.style.transform = `translate(${particle.x}px, ${particle.y}px)`;
      });
      
      animationRef.current = requestAnimationFrame(animate);
    };
    
    // Start animation
    animationRef.current = requestAnimationFrame(animate);
    
    // Mouse interaction
    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      mouseRef.current = {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
        active: true
      };
    };
    
    const handleMouseLeave = () => {
      mouseRef.current.active = false;
    };
    
    if (interactive) {
      container.addEventListener("mousemove", handleMouseMove);
      container.addEventListener("mouseleave", handleMouseLeave);
    }
    
    // Clean up
    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
      
      particles.forEach(particle => {
        if (particle.element.parentNode) {
          particle.element.parentNode.removeChild(particle.element);
        }
      });
      
      if (interactive) {
        container.removeEventListener("mousemove", handleMouseMove);
        container.removeEventListener("mouseleave", handleMouseLeave);
      }
    };
  }, [particleCount, colors, minSize, maxSize, minSpeed, maxSpeed, minOpacity, maxOpacity, interactive]);
  
  return (
    <div
      ref={containerRef}
      className={cn(
        "absolute inset-0 overflow-hidden pointer-events-none",
        interactive && "pointer-events-auto",
        className
      )}
      style={{ zIndex }}
    />
  );
};

export default ParticleEffect;

"use client";

import React, { useEffect, useRef } from "react";
import { Sparkles as SparklesIcon } from "lucide-react";
import StarsBackground from "@/components/ui/stars-background";
import AnimatedBlobs from "@/components/ui/animated-blobs";
import ThreeDText from "@/components/ui/3d-text";
import ParticleEffect from "@/components/ui/particle-effect";
import gsap from "gsap";

interface SplashScreenProps {
  finishLoading: () => void;
}

const SplashScreen: React.FC<SplashScreenProps> = ({ finishLoading }) => {

  // Refs for GSAP animations
  const containerRef = useRef<HTMLDivElement>(null);
  const loadingTextRef = useRef<HTMLParagraphElement>(null);
  const quoteRef = useRef<HTMLParagraphElement>(null);
  const loadingBarRef = useRef<HTMLDivElement>(null);
  const loadingProgressRef = useRef<HTMLDivElement>(null);
  const circlesRef = useRef<HTMLDivElement[]>([]);

  // GSAP animations
  useEffect(() => {
    if (!containerRef.current) return;

    // Create a timeline for the intro animation
    const tl = gsap.timeline();

    // Animate the container
    tl.fromTo(containerRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 0.8, ease: "power2.out" }
    );

    // Name animation is now handled by the ThreeDText component

    // Animate the loading circles
    circlesRef.current.forEach((circle, index) => {
      tl.fromTo(circle,
        { scale: 0, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          duration: 0.4,
          ease: "back.out(2)",
        },
        `-=${0.3}`
      );

      // Start the pulse animation
      gsap.to(circle, {
        scale: 1.2,
        opacity: 0.7,
        duration: 0.8,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        delay: index * 0.1
      });
    });

    // Animate the loading bar
    if (loadingProgressRef.current) {
      tl.fromTo(loadingProgressRef.current,
        { width: "0%" },
        {
          width: "100%",
          duration: 2.5,
          ease: "power1.inOut"
        },
        "-=1.5"
      );
    }

    // Animate the loading text
    if (loadingTextRef.current) {
      tl.fromTo(loadingTextRef.current,
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power2.out"
        },
        "-=2"
      );
    }

    // Animate the quote
    if (quoteRef.current) {
      tl.fromTo(quoteRef.current,
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power2.out"
        },
        "-=0.6"
      );
    }

    // Start exit animation after delay
    const showTimeout = setTimeout(() => {
      // Create exit animation
      const exitTl = gsap.timeline({
        onComplete: finishLoading
      });

      exitTl.to(containerRef.current, {
        opacity: 0,
        duration: 0.8,
        ease: "power2.inOut"
      });

    }, 3500); // Total display time before exit

    return () => clearTimeout(showTimeout);
  }, [finishLoading]);

  // Colors from user preferences
  const colors = ["#B7E0FF", "#FFF5CD", "#FFCFB3", "#E78F81"];

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-gradient-to-b from-blue-950 to-slate-900 w-full h-full overflow-hidden dark:from-slate-900 dark:to-slate-950"
      style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0 }}
    >
      {/* Background elements - stars are always white in splash screen since it has dark background */}
      <StarsBackground
        count={50}
        color="#FFFFFF"
        maxSize={2.5}
        minSize={1.2}
        opacity={0.8}
        zIndex={0}
      />

      <AnimatedBlobs
        blobCount={3}
        colors={[colors[0], colors[1], colors[3]]}
        minSize={400}
        maxSize={600}
        minBlur={100}
        maxBlur={150}
        minOpacity={0.05}
        maxOpacity={0.1}
        zIndex={0}
      />

      <ParticleEffect
        particleCount={25}
        colors={colors}
        minSize={2}
        maxSize={5}
        minSpeed={0.1}
        maxSpeed={0.3}
        interactive={false}
        zIndex={1}
      />

      {/* Main content container */}
      <div className="relative z-10 flex flex-col items-center justify-center">
        {/* 3D Name/Logo */}
        <div className="mb-16">
          <h1 className="sr-only">Shelby</h1>
          <ThreeDText
            text="Shelby"
            size="7xl"
            color="text-blue-500"
            highlightColor="text-blue-300"
            className="tracking-tight text-8xl md:text-9xl font-extrabold"
          />
        </div>

        {/* Animated circles */}
        <div className="flex items-center justify-center space-x-4 mb-8">
          {[0, 1, 2, 3, 4].map((index) => (
            <div
              key={index}
              ref={(el) => {
                if (el) circlesRef.current[index] = el;
              }}
              className="w-4 h-4 rounded-full"
              style={{
                background: `linear-gradient(135deg, ${colors[index % colors.length]}, ${colors[(index + 1) % colors.length]})`,
                boxShadow: `0 0 10px ${colors[index % colors.length]}`
              }}
            />
          ))}
        </div>

        {/* Loading bar */}
        <div
          ref={loadingBarRef}
          className="w-64 h-1.5 bg-blue-900/30 rounded-full overflow-hidden mb-8 relative"
        >
          <div
            ref={loadingProgressRef}
            className="h-full bg-gradient-to-r from-blue-400 to-blue-300 rounded-full"
          />

          {/* Animated glow effect on the loading bar */}
          <div
            className="absolute top-0 left-0 w-16 h-full bg-gradient-to-r from-transparent via-blue-200/50 to-transparent"
            style={{
              animation: "shimmer 1.5s infinite",
              backgroundSize: "200% 100%",
              backgroundPosition: "100% 0",
            }}
          />
        </div>

        {/* Loading text with sparkles */}
        <div className="relative mb-4">
          <p
            ref={loadingTextRef}
            className="text-blue-300 font-medium text-lg"
          >
            Crafting your experience
          </p>
          <SparklesIcon className="absolute -right-8 -top-1 w-5 h-5 text-blue-300 animate-pulse" />
          <SparklesIcon className="absolute -left-8 -top-1 w-5 h-5 text-blue-300 animate-pulse" />
        </div>

        {/* Quote */}
        <p
          ref={quoteRef}
          className="text-sm text-blue-400/70 text-center max-w-xs"
        >
          &quot;Creating positive experiences, one interaction at a time!&quot;
        </p>
      </div>
    </div>
  );
};

export default SplashScreen;

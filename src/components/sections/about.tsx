"use client";

import React from "react";
import FloatingAnimation from "@/components/ui/floating-animation";
import TextAnimation from "@/components/ui/text-animation";
import Sparkles from "@/components/ui/sparkles";
import { motion } from "framer-motion";
import Image from "next/image";
import { Heart, Star, Coffee, Smile, Award, Zap, Brain, Lightbulb } from "lucide-react";

// Honeycomb Hexagon Component
interface HoneycombHexProps {
  skill: { name: string; level: number };
  index: number;
}

const HoneycombHex: React.FC<HoneycombHexProps> = ({ skill, index }) => {
  return (
    <motion.div
      className="relative mx-2"
      initial={{ opacity: 0, scale: 0.8, y: 20 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      transition={{
        duration: 0.7,
        delay: 0.15 * index,
        type: "spring",
        bounce: 0.4
      }}
      viewport={{ once: true }}
      whileHover={{
        y: -5,
        zIndex: 10,
        transition: { duration: 0.2 }
      }}
    >
      <div className="group relative">
        {/* Hexagon shape with SVG */}
        <div className="w-36 h-36 relative transform transition-all duration-300 group-hover:scale-105">
          {/* SVG Hexagon */}
          <svg
            className="absolute inset-0 w-full h-full"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
          >
            {/* Gradient definitions */}
            <defs>
              <linearGradient id={`hexGradient-${index}`} x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="rgba(96, 165, 250, 0.2)" />
                <stop offset="100%" stopColor="rgba(34, 211, 238, 0.2)" />
              </linearGradient>
              <linearGradient id={`hexGradientHover-${index}`} x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="rgba(96, 165, 250, 0.3)" />
                <stop offset="100%" stopColor="rgba(34, 211, 238, 0.3)" />
              </linearGradient>
              <linearGradient id={`hexGradientDark-${index}`} x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="rgba(59, 130, 246, 0.2)" />
                <stop offset="100%" stopColor="rgba(6, 182, 212, 0.2)" />
              </linearGradient>
              <linearGradient id={`hexGradientDarkHover-${index}`} x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="rgba(59, 130, 246, 0.3)" />
                <stop offset="100%" stopColor="rgba(6, 182, 212, 0.3)" />
              </linearGradient>
            </defs>

            {/* Outer glow hexagon (visible on hover) */}
            <polygon
              points="50,0 95,25 95,75 50,100 5,75 5,25"
              fill="none"
              stroke="url(#hexGradientHover-${index})"
              strokeWidth="2"
              className="opacity-0 group-hover:opacity-100 transition-opacity duration-500 dark:stroke-[url(#hexGradientDarkHover-${index})]"
            />

            {/* Main hexagon */}
            <polygon
              points="50,3 92,26.5 92,73.5 50,97 8,73.5 8,26.5"
              fill="url(#hexGradient-${index})"
              className="transition-all duration-500 group-hover:fill-[url(#hexGradientHover-${index})] dark:fill-[url(#hexGradientDark-${index})] dark:group-hover:fill-[url(#hexGradientDarkHover-${index})]"
            />

            {/* Inner hexagon (white/dark background) */}
            <polygon
              points="50,6 89,28 89,72 50,94 11,72 11,28"
              fill="white"
              className="dark:fill-neutral-900"
            />
          </svg>

          {/* Content */}
          <div className="absolute inset-0 flex flex-col items-center justify-center p-4 z-10">
            <span className="text-blue-500 dark:text-blue-400 text-base font-bold mb-2 text-center">{skill.name}</span>
            <div className="w-8 h-0.5 bg-gradient-to-r from-blue-400 to-cyan-500"></div>
          </div>
        </div>

        {/* Animated dots around hexagon on hover */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-blue-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        <div className="absolute top-1/4 right-0 translate-x-1/2 w-2 h-2 rounded-full bg-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-75"></div>
        <div className="absolute bottom-1/4 right-0 translate-x-1/2 w-2 h-2 rounded-full bg-blue-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-150"></div>
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-2 h-2 rounded-full bg-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-200"></div>
        <div className="absolute bottom-1/4 left-0 -translate-x-1/2 w-2 h-2 rounded-full bg-blue-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-150"></div>
        <div className="absolute top-1/4 left-0 -translate-x-1/2 w-2 h-2 rounded-full bg-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-75"></div>

        {/* Connection lines to adjacent hexagons (visible on hover) */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-0.5 h-8 -translate-y-full bg-gradient-to-t from-blue-400/30 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0.5 h-8 translate-y-full bg-gradient-to-b from-blue-400/30 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
      </div>
    </motion.div>
  );
};

export const About = () => {
  const skills = [
    { name: "Customer Service", level: 90 },
    { name: "Problem Solving", level: 85 },
    { name: "Communication", level: 95 },
    { name: "Empathy", level: 90 },
    { name: "Technical Support", level: 80 },
  ];

  const interests = [
    { icon: <Heart className="w-5 h-5" />, text: "Helping Others" },
    { icon: <Star className="w-5 h-5" />, text: "Learning New Skills" },
    { icon: <Coffee className="w-5 h-5" />, text: "Coffee Enthusiast" },
    { icon: <Smile className="w-5 h-5" />, text: "Positive Vibes" },
  ];

  const qualities = [
    { icon: <Award className="w-6 h-6" />, title: "Dedicated", description: "Committed to providing exceptional support" },
    { icon: <Zap className="w-6 h-6" />, title: "Energetic", description: "Bringing positive energy to every interaction" },
    { icon: <Brain className="w-6 h-6" />, title: "Analytical", description: "Finding the root cause of complex issues" },
    { icon: <Lightbulb className="w-6 h-6" />, title: "Creative", description: "Developing innovative solutions" },
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-b from-blue-50 to-white dark:from-blue-950 dark:to-neutral-900 w-full overflow-hidden relative">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden opacity-20 pointer-events-none">
        <div className="absolute top-20 left-10 w-64 h-64 rounded-full bg-blue-300 dark:bg-blue-700 blur-3xl" />
        <div className="absolute bottom-20 right-10 w-72 h-72 rounded-full bg-cyan-300 dark:bg-cyan-700 blur-3xl" />
      </div>

      <div className="container mx-auto px-4 md:px-6 max-w-7xl relative z-10">
        <div className="flex flex-col items-center mb-16">
          <FloatingAnimation>
            <Sparkles color="#6495ED">
              <h2 className="text-3xl md:text-5xl font-bold text-center mb-4">
                <TextAnimation text="About Me" />
              </h2>
            </Sparkles>
          </FloatingAnimation>

          <FloatingAnimation delay={0.2}>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-cyan-500 rounded-full mb-6" />
          </FloatingAnimation>

          <FloatingAnimation delay={0.3}>
            <p className="text-center text-muted-foreground max-w-2xl">
              Passionate customer support professional dedicated to creating exceptional experiences
            </p>
          </FloatingAnimation>
        </div>

        {/* Main content with image */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16">
          {/* Image column */}
          <FloatingAnimation delay={0.2} className="lg:col-span-5">
            <motion.div
              className="relative rounded-2xl overflow-hidden shadow-xl border-4 border-white dark:border-blue-900"
              initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
              whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ duration: 0.8, type: "spring", bounce: 0.4 }}
              viewport={{ once: true }}
            >
              <div className="aspect-[4/5] relative">
                {/* Replace with actual image */}
                <Image
                  src="/placeholder-profile.svg"
                  alt="Shelby Bianca Delgado"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/70 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h3 className="text-2xl font-bold mb-1">Shelby Delgado</h3>
                  <p className="text-blue-100">Customer Support Professional</p>
                </div>
              </div>
            </motion.div>
          </FloatingAnimation>

          {/* Story column */}
          <div className="lg:col-span-7 space-y-8">
            <FloatingAnimation delay={0.3}>
              <div className="relative">
                <div className="absolute -left-4 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-400 via-cyan-400 to-blue-500 rounded-full" />
                <div className="pl-8">
                  <motion.h3
                    className="text-3xl font-bold mb-6 text-blue-600 dark:text-blue-400 inline-block"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                  >
                    My Story
                  </motion.h3>

                  <div className="space-y-6">
                    <motion.p
                      className="text-lg leading-relaxed"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.2 }}
                      viewport={{ once: true }}
                    >
                      I'm <span className="text-blue-600 dark:text-blue-400 font-semibold">Shelby</span>, an enthusiastic customer support professional with a
                      passion for creating positive experiences. I believe that great
                      customer support is about more than just solving problems—it's
                      about building relationships and making people feel valued.
                    </motion.p>

                    <motion.p
                      className="text-lg leading-relaxed"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.4 }}
                      viewport={{ once: true }}
                    >
                      With a background in <span className="text-blue-600 dark:text-blue-400 font-semibold">communication</span> and a natural talent for
                      <span className="text-blue-600 dark:text-blue-400 font-semibold"> empathy</span>, I strive to understand customer needs and provide
                      solutions that exceed expectations. I'm excited to bring my
                      skills and positive energy to help your team deliver exceptional
                      customer experiences.
                    </motion.p>

                    <motion.div
                      className="flex gap-4 items-center"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.6 }}
                      viewport={{ once: true }}
                    >
                      <div className="h-0.5 flex-grow bg-gradient-to-r from-blue-400 to-transparent rounded-full" />
                      <span className="text-blue-500 font-medium">My Passion</span>
                      <div className="h-0.5 flex-grow bg-gradient-to-l from-blue-400 to-transparent rounded-full" />
                    </motion.div>

                    <motion.p
                      className="text-lg leading-relaxed italic"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.8 }}
                      viewport={{ once: true }}
                    >
                      "I'm dedicated to transforming customer interactions into meaningful connections,
                      ensuring every person feels heard, valued, and supported throughout their journey."
                    </motion.p>
                  </div>
                </div>
              </div>
            </FloatingAnimation>
          </div>
        </div>

        {/* Expertise section - Honeycomb design */}
        <div className="mb-24">
          <FloatingAnimation delay={0.4}>
            <div className="text-center mb-16">
              <h3 className="text-3xl font-bold mb-4 text-blue-600 dark:text-blue-400 inline-block relative">
                My Expertise
                <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-blue-400 to-transparent"></div>
              </h3>
            </div>

            {/* Honeycomb container with proper offset rows */}
            <div className="flex flex-col items-center">
              {/* First row - 3 hexagons */}
              <div className="flex -mb-10">
                {skills.slice(0, 3).map((skill, index) => (
                  <HoneycombHex
                    key={index}
                    skill={skill}
                    index={index}
                  />
                ))}
              </div>

              {/* Second row - 2 hexagons (offset) */}
              <div className="flex ml-[4.4rem] -mb-10">
                {skills.slice(3, 5).map((skill, index) => (
                  <HoneycombHex
                    key={index + 3}
                    skill={skill}
                    index={index + 3}
                  />
                ))}
              </div>

              {/* Decorative elements */}
              <div className="relative w-full max-w-2xl mt-8">
                <div className="absolute -top-16 left-1/4 w-20 h-20 rounded-full bg-blue-400/5 blur-xl"></div>
                <div className="absolute -top-20 right-1/4 w-24 h-24 rounded-full bg-cyan-400/5 blur-xl"></div>

                <motion.div
                  className="w-full h-0.5 bg-gradient-to-r from-transparent via-blue-400/30 to-transparent"
                  initial={{ width: 0, opacity: 0 }}
                  whileInView={{ width: "100%", opacity: 1 }}
                  transition={{ duration: 1.5, delay: 0.5 }}
                  viewport={{ once: true }}
                />
              </div>
            </div>
          </FloatingAnimation>
        </div>

        {/* Key Qualities section - Timeline style */}
        <div className="mb-24">
          <FloatingAnimation delay={0.5}>
            <div className="text-center mb-16">
              <h3 className="text-3xl font-bold mb-4 text-blue-600 dark:text-blue-400 inline-block relative">
                Key Qualities
                <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-blue-400 to-transparent"></div>
              </h3>
            </div>

            <div className="relative">
              {/* Central timeline line */}
              <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-400 via-cyan-400 to-blue-500 transform -translate-x-1/2"></div>

              <div className="space-y-16">
                {qualities.map((quality, index) => (
                  <motion.div
                    key={index}
                    className={`relative flex ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}
                    initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 * index }}
                    viewport={{ once: true }}
                  >
                    {/* Timeline dot */}
                    <div className="absolute left-1/2 top-8 w-6 h-6 rounded-full bg-gradient-to-r from-blue-400 to-cyan-500 transform -translate-x-1/2 z-10 shadow-md"></div>

                    {/* Content container */}
                    <div className={`w-5/12 relative ${index % 2 === 0 ? 'pr-12' : 'pl-12'}`}>
                      {/* Connecting line to center */}
                      <div className={`absolute top-8 ${index % 2 === 0 ? 'right-0 left-auto' : 'left-0 right-auto'} h-0.5 w-12 bg-gradient-to-r from-blue-400 to-cyan-500`}></div>

                      {/* Content */}
                      <div className="relative">
                        <div className="flex items-center gap-4 mb-4">
                          <div className="w-12 h-12 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center text-blue-500">
                            {quality.icon}
                          </div>
                          <h4 className="text-xl font-bold text-blue-600 dark:text-blue-400">{quality.title}</h4>
                        </div>
                        <p className="text-muted-foreground ml-16">{quality.description}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </FloatingAnimation>
        </div>

        {/* Interests section */}
        <div className="mb-16 relative">
          <FloatingAnimation delay={0.6}>
            <div className="text-center mb-12">
              <h3 className="text-3xl font-bold mb-4 text-blue-600 dark:text-blue-400 inline-block relative">
                Interests & Hobbies
                <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-blue-400 to-transparent"></div>
              </h3>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {interests.map((interest, index) => (
                <motion.div
                  key={index}
                  className="relative group"
                  initial={{ opacity: 0, scale: 0.8, rotate: -2 }}
                  whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                  transition={{
                    duration: 0.6,
                    delay: 0.15 * index,
                    type: "spring",
                    bounce: 0.4
                  }}
                  viewport={{ once: true }}
                  whileHover={{
                    y: -8,
                    rotate: 2,
                    transition: { duration: 0.3 }
                  }}
                >
                  <div className="bg-gradient-to-br from-blue-50 to-white dark:from-blue-900/40 dark:to-blue-950/40 p-8 rounded-2xl shadow-lg h-full border border-blue-100/80 dark:border-blue-800/30 backdrop-blur-sm overflow-hidden">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-blue-400/5 rounded-full -mr-16 -mt-16 group-hover:bg-blue-400/10 transition-all duration-500"></div>

                    <div className="relative z-10 flex flex-col items-center text-center">
                      <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-400 to-cyan-400 flex items-center justify-center text-white mb-5 shadow-md transform transition-transform duration-300 group-hover:scale-110">
                        {interest.icon}
                      </div>
                      <span className="font-semibold text-lg">{interest.text}</span>

                      <div className="h-0.5 w-8 bg-gradient-to-r from-blue-400 to-cyan-500 rounded-full mt-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </FloatingAnimation>
        </div>

        {/* Final decorative element */}
        <div className="flex justify-center mb-8">
          <motion.div
            className="w-24 h-1.5 bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-500 rounded-full"
            initial={{ width: 0 }}
            whileInView={{ width: 96 }}
            transition={{ duration: 1, delay: 0.2 }}
            viewport={{ once: true }}
          />
        </div>
      </div>
    </section>
  );
};

export default About;

"use client";

import React from "react";
import FloatingAnimation from "@/components/ui/floating-animation";
import TextAnimation from "@/components/ui/text-animation";
import Sparkles from "@/components/ui/sparkles";
import MouseFollowCard from "@/components/ui/mouse-follow-card";
import { motion } from "framer-motion";
import Image from "next/image";
import { Heart, Star, Coffee, Smile, Award, Zap, Brain, Lightbulb } from "lucide-react";
import StarsBackground from "@/components/ui/stars-background";
import GridPattern from "@/components/ui/grid-pattern";

// Expertise Item Component
interface ExpertiseItemProps {
  skill: { name: string; level: number; description?: string };
  index: number;
  isEven?: boolean;
}

const ExpertiseItem: React.FC<ExpertiseItemProps> = ({ skill, index, isEven = true }) => {
  // Generate a unique pattern for each skill
  const patternElements = Array.from({ length: 3 }, (_, i) => {
    const size = 10 + (i * 5);
    const opacity = 0.1 + (i * 0.05);
    const delay = i * 0.1;

    return (
      <motion.div
        key={i}
        className={`absolute rounded-full bg-blue-400/10 dark:bg-blue-400/5`}
        style={{
          width: size,
          height: size,
          top: `${15 + (i * 20)}%`,
          right: isEven ? `${10 + (i * 8)}%` : 'auto',
          left: isEven ? 'auto' : `${10 + (i * 8)}%`,
          opacity
        }}
        initial={{ scale: 0, opacity: 0 }}
        whileInView={{ scale: 1, opacity }}
        transition={{ duration: 0.5, delay: 0.3 + delay }}
        viewport={{ once: true }}
      />
    );
  });

  return (
    <motion.div
      className="relative"
      initial={{ opacity: 0, y: 20, x: isEven ? -20 : 20 }}
      whileInView={{ opacity: 1, y: 0, x: 0 }}
      transition={{
        duration: 0.7,
        delay: 0.15 * index,
        type: "spring",
        bounce: 0.4
      }}
      viewport={{ once: true }}
      whileHover={{
        y: -5,
        transition: { duration: 0.2 }
      }}
    >
      <div className="group relative bg-gradient-to-br from-white to-blue-50 dark:from-neutral-900 dark:to-blue-950/30 rounded-xl p-6 shadow-md border border-blue-100 dark:border-blue-900/50 overflow-hidden backdrop-blur-sm">
        {/* Background decoration */}
        <div className="absolute -right-12 -top-12 w-40 h-40 bg-blue-400/5 rounded-full transform transition-transform duration-500 group-hover:scale-150"></div>
        <div className="absolute -left-12 -bottom-12 w-32 h-32 bg-cyan-400/5 rounded-full transform transition-transform duration-500 group-hover:scale-150"></div>

        {/* Pattern elements */}
        {patternElements}

        {/* Skill name with animated underline */}
        <div className="relative z-10 mb-3">
          <div className="flex items-center gap-2 mb-1">
            <div className="w-2 h-2 rounded-full bg-gradient-to-r from-blue-400 to-cyan-500"></div>
            <h4 className="text-xl font-bold text-blue-600 dark:text-blue-400">{skill.name}</h4>
          </div>
          <div className="h-0.5 w-0 bg-gradient-to-r from-blue-400 to-cyan-500 rounded-full group-hover:w-full transition-all duration-700 ease-out ml-4"></div>
        </div>

        {/* Description */}
        {skill.description && (
          <p className="text-muted-foreground text-sm relative z-10 ml-4">{skill.description}</p>
        )}

        {/* Decorative elements */}
        <div className="absolute top-2 right-2 w-2 h-2 rounded-full bg-blue-400/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        <div className="absolute top-4 right-4 w-1.5 h-1.5 rounded-full bg-cyan-400/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100"></div>
        <div className="absolute top-6 right-6 w-1 h-1 rounded-full bg-blue-400/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-200"></div>

        {/* Animated border on hover */}
        <div className="absolute inset-0 rounded-xl overflow-hidden opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
          <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-blue-400 to-transparent transform -translate-x-full group-hover:translate-x-full transition-transform duration-1500"></div>
          <div className="absolute top-0 right-0 w-0.5 h-full bg-gradient-to-b from-transparent via-blue-400 to-transparent transform -translate-y-full group-hover:translate-y-full transition-transform duration-1500 delay-200"></div>
          <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-cyan-400 to-transparent transform translate-x-full group-hover:-translate-x-full transition-transform duration-1500 delay-400"></div>
          <div className="absolute top-0 left-0 w-0.5 h-full bg-gradient-to-b from-transparent via-cyan-400 to-transparent transform translate-y-full group-hover:-translate-y-full transition-transform duration-1500 delay-600"></div>
        </div>
      </div>
    </motion.div>
  );
};

export const About = () => {
  const skills = [
    {
      name: "Layout Artist",
      level: 90,
      description: "Creating visually appealing layouts for various digital and print materials."
    },
    {
      name: "Technical Skills",
      level: 85,
      description: "Proficient in technical problem-solving and implementing practical solutions."
    },
    {
      name: "Hardware Development",
      level: 85,
      description: "Experience with computer hardware components and system assembly."
    },
    {
      name: "Operating System Setup",
      level: 90,
      description: "Installing and configuring operating systems and essential software."
    },
    {
      name: "Microsoft Skills",
      level: 95,
      description: "Proficient in Microsoft Word, Excel, PowerPoint, Outlook, and Social Media Platforms."
    },
  ];

  const interests = [
    { icon: <Heart className="w-5 h-5" />, text: "Computer Technology" },
    { icon: <Star className="w-5 h-5" />, text: "Learning New Skills" },
    { icon: <Coffee className="w-5 h-5" />, text: "System Building" },
    { icon: <Smile className="w-5 h-5" />, text: "Problem Solving" },
  ];

  const qualities = [
    {
      icon: <Award className="w-6 h-6" />,
      title: "Practical Individual",
      description: "Approaching tasks with a hands-on, solution-oriented mindset and strong moral principles."
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Professional",
      description: "Maintaining high standards of professionalism and work ethics in all endeavors."
    },
    {
      icon: <Brain className="w-6 h-6" />,
      title: "Effective Communicator",
      description: "Demonstrated ability to communicate clearly and confidently in both written and verbal forms."
    },
    {
      icon: <Lightbulb className="w-6 h-6" />,
      title: "Adaptable",
      description: "Quickly adapting to new situations and challenges with resourceful solutions and continuous improvement mindset."
    },
  ];

  return (
    <section id="about" className="py-20 min-h-screen bg-gradient-to-b from-blue-50 to-white dark:from-blue-950 dark:to-neutral-900 w-full overflow-hidden relative">
      {/* Blue glowing stars in light mode */}
      <StarsBackground
        count={30}
        color="#3B82F6" // Blue color
        maxSize={2.5}
        minSize={1.2}
        opacity={0.8}
        zIndex={1}
        className="block dark:hidden" // Only show in light mode
      />

      {/* Stars for dark mode */}
      <StarsBackground
        count={30}
        color="#FFFFFF"
        maxSize={2.5}
        minSize={1.2}
        opacity={0.7}
        zIndex={1}
        className="hidden dark:block" // Only show in dark mode
      />

      {/* Subtle grid pattern - black in light mode, white in dark mode */}
      <GridPattern
        size={50}
        lineWidth={1.2}
        lineColor="var(--grid-color, #000000)"
        opacity={0.07}
        zIndex={1}
        className="[--grid-color:#000000] dark:[--grid-color:#FFFFFF]"
      />

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
              A practical individual with strong morals, professionalism, and work ethics
            </p>
          </FloatingAnimation>
        </div>

        {/* Main content with image */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16">
          {/* Image column with enhanced hover effects */}
          <FloatingAnimation delay={0.2} className="lg:col-span-5">
            <div className="perspective-[1200px] relative group cursor-pointer">
              {/* Decorative elements that appear on hover */}
              <motion.div
                className="absolute -top-6 -left-6 w-20 h-20 rounded-full bg-gradient-to-r from-blue-400/20 to-cyan-400/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                animate={{
                  scale: [1, 1.2, 1],
                  rotate: [0, 15, 0]
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  repeatType: "reverse"
                }}
              />
              <motion.div
                className="absolute -bottom-6 -right-6 w-24 h-24 rounded-full bg-gradient-to-r from-cyan-400/20 to-blue-400/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                animate={{
                  scale: [1, 0.8, 1],
                  rotate: [0, -15, 0]
                }}
                transition={{
                  duration: 7,
                  repeat: Infinity,
                  repeatType: "reverse",
                  delay: 0.5
                }}
              />

              {/* Animated border that appears on hover */}
              <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl opacity-0 group-hover:opacity-100 blur-sm transition-all duration-500 group-hover:duration-200"></div>

              {/* Main image container with mouse-following 3D effect */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
                whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                transition={{ duration: 0.8, type: "spring", bounce: 0.4 }}
                viewport={{ once: true }}
              >
                <MouseFollowCard
                  className="relative rounded-2xl overflow-hidden shadow-xl border-4 border-white dark:border-blue-900 bg-white dark:bg-blue-950 transform-gpu transition-all duration-500 ease-out"
                  rotateIntensity={20}
                  glareOpacity={0.15}
                  glareColor="rgba(100, 149, 237, 0.8)"
                  shadow="0 25px 50px -12px rgba(59, 130, 246, 0.25)"
                >
                <div className="aspect-[4/5] relative">
                  {/* Animated particles on hover - with fixed positions to prevent hydration mismatch */}
                  <div className="absolute inset-0 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                    {[...Array(8)].map((_, i) => {
                      // Use fixed positions based on index instead of random values
                      const positions = [
                        { left: 15, top: 20 },
                        { left: 35, top: 45 },
                        { left: 65, top: 30 },
                        { left: 85, top: 60 },
                        { left: 25, top: 75 },
                        { left: 45, top: 15 },
                        { left: 75, top: 85 },
                        { left: 90, top: 40 },
                      ];
                      const pos = positions[i];

                      // Fixed animation values based on index
                      const yMovement = -40 - (i * 7);
                      const xMovement = (i % 2 === 0) ? 10 : -10;
                      const duration = 2 + (i * 0.2);
                      const delay = i * 0.25;

                      return (
                        <motion.div
                          key={i}
                          className="absolute w-1.5 h-1.5 rounded-full bg-blue-400"
                          style={{
                            left: `${pos.left}%`,
                            top: `${pos.top}%`,
                          }}
                          animate={{
                            y: [0, yMovement],
                            x: [0, xMovement],
                            scale: [0, 1, 0],
                            opacity: [0, 1, 0]
                          }}
                          transition={{
                            duration: duration,
                            repeat: Infinity,
                            delay: delay
                          }}
                        />
                      );
                    })}
                  </div>

                  {/* Image with hover zoom effect */}
                  <Image
                    src="/about-pic.jpg"
                    alt="Shelby Bianca Delgado"
                    fill
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-110 group-hover:rotate-3"
                  />

                  {/* Enhanced gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-900/80 via-blue-900/40 to-transparent opacity-100 group-hover:opacity-80 transition-opacity duration-500" />

                  {/* Info container with animated elements */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform transition-transform duration-500 group-hover:translate-y-2">
                    <div className="overflow-hidden">
                      <motion.h3
                        className="text-2xl font-bold mb-1 transform origin-left"
                        whileHover={{ scale: 1.05 }}
                      >
                        Shelby Delgado
                      </motion.h3>
                    </div>
                    <div className="overflow-hidden">
                      <p className="text-blue-100 transform transition-all duration-500 group-hover:translate-x-2">
                        Computer Engineering Student
                      </p>
                    </div>

                    {/* Animated line that expands on hover */}
                    <div className="h-0.5 w-0 bg-gradient-to-r from-blue-400 to-cyan-400 mt-3 group-hover:w-full transition-all duration-700 ease-out"></div>
                  </div>

                  {/* Decorative corner accents that appear on hover */}
                  <div className="absolute top-4 left-4 w-8 h-8 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="absolute top-0 left-0 w-3 h-0.5 bg-blue-400"></div>
                    <div className="absolute top-0 left-0 w-0.5 h-3 bg-blue-400"></div>
                  </div>
                  <div className="absolute top-4 right-4 w-8 h-8 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="absolute top-0 right-0 w-3 h-0.5 bg-cyan-400"></div>
                    <div className="absolute top-0 right-0 w-0.5 h-3 bg-cyan-400"></div>
                  </div>
                  <div className="absolute bottom-4 left-4 w-8 h-8 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="absolute bottom-0 left-0 w-3 h-0.5 bg-cyan-400"></div>
                    <div className="absolute bottom-0 left-0 w-0.5 h-3 bg-cyan-400"></div>
                  </div>
                  <div className="absolute bottom-4 right-4 w-8 h-8 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="absolute bottom-0 right-0 w-3 h-0.5 bg-blue-400"></div>
                    <div className="absolute bottom-0 right-0 w-0.5 h-3 bg-blue-400"></div>
                  </div>
                </div>
              </MouseFollowCard>
              </motion.div>
            </div>
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
                      I&apos;m <span className="text-blue-600 dark:text-blue-400 font-semibold">Shelby Bianca R. Delgado</span>, a
                      <span className="text-blue-600 dark:text-blue-400 font-semibold"> practical individual</span> with strong morals,
                      professionalism, and work ethics from NCR Philippines. I have demonstrated
                      effective communication skills during my senior high school and college years.
                    </motion.p>

                    <motion.p
                      className="text-lg leading-relaxed"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.4 }}
                      viewport={{ once: true }}
                    >
                      My experiences as a <span className="text-blue-600 dark:text-blue-400 font-semibold">Student Assistant</span> at JBEST School of Technology
                      have enhanced my ability to <span className="text-blue-600 dark:text-blue-400 font-semibold">communicate clearly and confidently</span>.
                      I&apos;m currently pursuing a <span className="text-blue-600 dark:text-blue-400 font-semibold">Bachelor of Science in Computer Engineering</span>
                      and eager to build foundational skills in computer literacy and language fluency.
                    </motion.p>

                    <motion.div
                      className="flex gap-4 items-center"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.6 }}
                      viewport={{ once: true }}
                    >
                      <div className="h-0.5 flex-grow bg-gradient-to-r from-blue-400 to-transparent rounded-full" />
                      <span className="text-blue-500 font-medium">My Approach</span>
                      <div className="h-0.5 flex-grow bg-gradient-to-l from-blue-400 to-transparent rounded-full" />
                    </motion.div>

                    <motion.p
                      className="text-lg leading-relaxed italic"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.8 }}
                      viewport={{ once: true }}
                    >
                      &ldquo;                      I am committed to continuous improvement, adaptability, and applying a strong work ethic to achieve both personal and professional growth while contributing effectively to a dynamic team environment.&ldquo; 
                    </motion.p>
                  </div>
                </div>
              </div>
            </FloatingAnimation>
          </div>
        </div>

        {/* Expertise section - Modern design */}
        <div className="mb-24 relative">
          {/* Background decorative elements */}
          <div className="absolute -top-20 right-0 w-64 h-64 bg-blue-200/10 dark:bg-blue-700/10 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-20 left-0 w-72 h-72 bg-cyan-200/10 dark:bg-cyan-700/10 rounded-full blur-3xl"></div>

          <FloatingAnimation delay={0.4}>
            <div className="text-center mb-12 relative">
              {/* Decorative sparkles */}
              <Sparkles color="#6495ED">
                <h3 className="text-3xl font-bold mb-4 text-blue-600 dark:text-blue-400 inline-block relative">
                  <TextAnimation text="Technical Skills" />
                  <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-blue-400 to-transparent"></div>
                </h3>
              </Sparkles>

              <motion.p
                className="text-muted-foreground max-w-2xl mx-auto"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: true }}
              >
                Areas where I excel and bring the most value with my technical knowledge and practical skills.
              </motion.p>

              {/* Decorative elements */}
              <motion.div
                className="absolute -top-6 -right-6 w-12 h-12 rounded-full bg-blue-400/5 blur-xl"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
              />
              <motion.div
                className="absolute -bottom-6 -left-6 w-12 h-12 rounded-full bg-cyan-400/5 blur-xl"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                viewport={{ once: true }}
              />
            </div>

            {/* Main content */}
            <div className="relative">
              {/* Connecting line */}
              <motion.div
                className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-400/50 via-cyan-400/50 to-blue-400/50 transform -translate-x-1/2 hidden md:block"
                initial={{ height: 0, opacity: 0 }}
                whileInView={{ height: "100%", opacity: 1 }}
                transition={{ duration: 1.5, delay: 0.3 }}
                viewport={{ once: true }}
              />

              {/* Skills grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative">
                {skills.map((skill, index) => {
                  // Alternate sides for desktop layout
                  const isEven = index % 2 === 0;
                  return (
                    <div key={index} className={`md:w-[90%] ${isEven ? 'md:mr-auto' : 'md:ml-auto'}`}>
                      {/* Connection dot to center line (visible on desktop) */}
                      <motion.div
                        className="absolute left-1/2 w-3 h-3 rounded-full bg-gradient-to-r from-blue-400 to-cyan-500 transform -translate-x-1/2 hidden md:block z-10"
                        style={{ top: `calc(${index * 25}% + 2rem)` }}
                        initial={{ scale: 0, opacity: 0 }}
                        whileInView={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.5 + (index * 0.1) }}
                        viewport={{ once: true }}
                      />

                      {/* Expertise item */}
                      <ExpertiseItem
                        skill={skill}
                        index={index}
                        isEven={isEven}
                      />
                    </div>
                  );
                })}
              </div>

              {/* Bottom decorative element */}
              <div className="flex justify-center mt-12">
                <motion.div
                  className="w-24 h-1 bg-gradient-to-r from-transparent via-blue-400 to-transparent rounded-full"
                  initial={{ width: 0, opacity: 0 }}
                  whileInView={{ width: 96, opacity: 1 }}
                  transition={{ duration: 1, delay: 0.5 }}
                  viewport={{ once: true }}
                />
              </div>
            </div>
          </FloatingAnimation>
        </div>

        {/* Key Qualities section - Interactive Floating Bubbles */}
        <div className="mb-24 relative overflow-hidden">
          {/* Background decorative elements */}
          <div className="absolute top-20 left-10 w-64 h-64 rounded-full bg-blue-200/10 dark:bg-blue-700/10 blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-72 h-72 rounded-full bg-cyan-200/10 dark:bg-cyan-700/10 blur-3xl"></div>

          <FloatingAnimation delay={0.5}>
            <div className="text-center mb-16 relative">
              <Sparkles color="#6495ED">
                <h3 className="text-3xl font-bold mb-4 text-blue-600 dark:text-blue-400 inline-block relative">
                  <TextAnimation text="Key Qualities" />
                  <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-blue-400 to-transparent"></div>
                </h3>
              </Sparkles>

              <motion.p
                className="text-muted-foreground max-w-2xl mx-auto"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: true }}
              >
                Personal attributes that define my approach to work, learning, and professional growth.
              </motion.p>
            </div>

            {/* Interactive Bubble Layout */}
            <div className="relative py-10">
              {/* Central decorative elements */}
              <motion.div
                className="absolute left-1/2 top-1/2 w-40 h-40 rounded-full bg-gradient-to-r from-blue-400/5 to-cyan-400/5 transform -translate-x-1/2 -translate-y-1/2 hidden md:block"
                initial={{ scale: 0, opacity: 0 }}
                whileInView={{
                  scale: 1,
                  opacity: 0.5
                }}
                viewport={{ once: true }}
                animate={{
                  scale: [1, 1.1, 1],
                  opacity: [0.5, 0.7, 0.5]
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  repeatType: "reverse",
                  delay: 0.2
                }}
              />

              {/* Inner circle */}
              <motion.div
                className="absolute left-1/2 top-1/2 w-24 h-24 rounded-full bg-gradient-to-r from-blue-400/10 to-cyan-400/10 transform -translate-x-1/2 -translate-y-1/2 hidden md:block"
                initial={{ scale: 0, opacity: 0 }}
                whileInView={{
                  scale: 1,
                  opacity: 0.7
                }}
                viewport={{ once: true }}
                animate={{
                  scale: [1, 0.9, 1],
                  opacity: [0.7, 0.9, 0.7]
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  repeatType: "reverse",
                  delay: 0.4
                }}
              />

              {/* Connecting lines */}
              {[45, 135, 225, 315].map((angle, i) => (
                <motion.div
                  key={i}
                  className="absolute left-1/2 top-1/2 h-0.5 bg-gradient-to-r from-blue-400/10 to-transparent hidden md:block origin-left"
                  style={{
                    width: '80px',
                    transform: `translate(-50%, -50%) rotate(${angle}deg)`
                  }}
                  initial={{ scaleX: 0, opacity: 0 }}
                  whileInView={{ scaleX: 1, opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.6 + (i * 0.1) }}
                  viewport={{ once: true }}
                />
              ))}

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 relative">
                {qualities.map((quality, index) => (
                  <motion.div
                    key={index}
                    className="relative"
                    initial={{
                      opacity: 0,
                      y: 30,
                      x: index % 2 === 0 ? -20 : 20
                    }}
                    whileInView={{
                      opacity: 1,
                      y: 0,
                      x: 0
                    }}
                    transition={{
                      duration: 0.7,
                      delay: 0.2 * index,
                      type: "spring",
                      bounce: 0.4
                    }}
                    viewport={{ once: true }}
                  >
                    <div className="group relative bg-white dark:bg-neutral-900 rounded-2xl p-6 shadow-lg border border-blue-100 dark:border-blue-900/50 overflow-hidden backdrop-blur-sm hover:shadow-xl transition-all duration-300">
                      {/* Animated gradient background on hover */}
                      <div className="absolute inset-0 bg-gradient-to-br from-blue-400/5 to-cyan-400/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                      {/* Floating bubbles */}
                      <div className="absolute right-4 top-4 w-20 h-20">
                        {[...Array(3)].map((_, i) => (
                          <motion.div
                            key={i}
                            className="absolute rounded-full bg-blue-400/10 dark:bg-blue-400/5"
                            style={{
                              width: 6 + i * 4,
                              height: 6 + i * 4,
                              top: i * 8,
                              right: i * 6,
                            }}
                            animate={{
                              y: [0, -10, 0],
                              opacity: [0.3, 0.8, 0.3],
                            }}
                            transition={{
                              duration: 3,
                              delay: i * 0.3,
                              repeat: Infinity,
                              repeatType: "reverse",
                            }}
                          />
                        ))}
                      </div>

                      {/* Content with icon */}
                      <div className="relative z-10">
                        <div className="flex items-start gap-5">
                          <div className="relative">
                            {/* Icon background with animated border */}
                            <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-blue-50 to-white dark:from-blue-900/40 dark:to-blue-950/40 flex items-center justify-center shadow-md relative overflow-hidden group-hover:shadow-lg transition-all duration-300">
                              {/* Animated border */}
                              <div className="absolute inset-0 overflow-hidden opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                                <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-blue-400 to-transparent transform -translate-x-full group-hover:translate-x-full transition-transform duration-1500"></div>
                                <div className="absolute top-0 right-0 w-0.5 h-full bg-gradient-to-b from-transparent via-blue-400 to-transparent transform -translate-y-full group-hover:translate-y-full transition-transform duration-1500 delay-200"></div>
                                <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-cyan-400 to-transparent transform translate-x-full group-hover:-translate-x-full transition-transform duration-1500 delay-400"></div>
                                <div className="absolute top-0 left-0 w-0.5 h-full bg-gradient-to-b from-transparent via-cyan-400 to-transparent transform translate-y-full group-hover:-translate-y-full transition-transform duration-1500 delay-600"></div>
                              </div>

                              {/* Icon */}
                              <div className="text-blue-500 dark:text-blue-400 transform group-hover:scale-110 transition-transform duration-300">
                                {quality.icon}
                              </div>
                            </div>

                            {/* Connecting line to title */}
                            <div className="absolute top-16 left-1/2 w-0.5 h-4 bg-gradient-to-b from-blue-400 to-transparent transform -translate-x-1/2"></div>
                          </div>

                          <div className="flex-1 pt-1">
                            <h4 className="text-xl font-bold text-blue-600 dark:text-blue-400 mb-2 group-hover:translate-x-1 transition-transform duration-300">{quality.title}</h4>
                            <p className="text-muted-foreground">{quality.description}</p>

                            {/* Animated underline on hover */}
                            <div className="h-0.5 w-0 bg-gradient-to-r from-blue-400 to-cyan-500 rounded-full mt-3 group-hover:w-full transition-all duration-700 ease-out"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Bottom decorative element */}
              <div className="flex justify-center mt-12">
                <motion.div
                  className="w-32 h-1 bg-gradient-to-r from-transparent via-blue-400 to-transparent rounded-full"
                  initial={{ width: 0, opacity: 0 }}
                  whileInView={{ width: 128, opacity: 1 }}
                  transition={{ duration: 1, delay: 0.5 }}
                  viewport={{ once: true }}
                />
              </div>
            </div>
          </FloatingAnimation>
        </div>

        {/* Interests section */}
        <div className="mb-16 relative">
          <FloatingAnimation delay={0.6}>
            <div className="text-center mb-12">
              <h3 className="text-3xl font-bold mb-4 text-blue-600 dark:text-blue-400 inline-block relative">
                <Sparkles color="#6495ED">
                  <TextAnimation text="Interests & Focus Areas" delay={0.1} />
                </Sparkles>
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

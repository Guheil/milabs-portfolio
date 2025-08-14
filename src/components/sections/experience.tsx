"use client";

import React, { useRef } from "react";
import { useScroll, useTransform } from "framer-motion";
import FloatingAnimation from "@/components/ui/floating-animation";
import Timeline from "@/components/ui/timeline";
import SkillCard from "@/components/ui/skill-card";
import TextAnimation from "@/components/ui/text-animation";
import Sparkles from "@/components/ui/sparkles";
import StarsBackground from "@/components/ui/stars-background";
import GridPattern from "@/components/ui/grid-pattern";
import {
  MessageSquare,
  Headphones,
  Award,
  Briefcase,
  GraduationCap,
  Clock,
  Heart
} from "lucide-react";

export const Experience = () => {
  const sectionRef = useRef<HTMLElement>(null);

  // Scroll animations
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.4, 1, 1, 0.4]);
  const scale = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.8, 1, 1, 0.8]);

  // Experience data from resume
  const experiences = [
    {
      title: "Administrative Assistant",
      subtitle: "Fernwood Corp Entrerprises OPC",
      period: "2024 - 2025",
      description: [
        "Provided administrative support to ensure efficient office operations.",
        "Handled correspondence, organized files, and maintained records.",
        "Assisted in preparing reports, managing schedules, and coordinating meetings.",
        "Communicated with clients and suppliers professionally and promptly.",
        "Supported day-to-day operations and contributed to a productive work environment."
      ],
      icon: <Briefcase className="w-4 h-4" />
    },
    {
      title: "Student Assistant",
      subtitle: "JBEST School of Technology and Practical Skills Inc.",
      period: "2020 - 2023",
      description: [
        "Assisted professors and staff with administrative tasks, such as organizing materials and preparing documents.",
        "Helped students with inquiries, providing guidance on coursework and resources.",
        "Managed office supplies and assisted with maintaining records.",
        "Supported classroom setup, ensuring a smooth learning environment.",
        "Assisted in grading assignments and providing feedback to students when needed."
      ],
      icon: <Briefcase className="w-4 h-4" />
    }
  ];

  // Education data from resume
  const education = [
    {
      title: "Bachelor of Science in Computer Engineering",
      subtitle: "Rizal Technological University",
      period: "2023 - 2024",
      description: "Currently pursuing a degree in Computer Engineering, focusing on developing technical skills and knowledge in computer systems and engineering principles.",
      icon: <GraduationCap className="w-4 h-4" />
    },
    {
      title: "Bachelor of Science in Computer Engineering",
      subtitle: "Colegio De Montalban",
      period: "2024 - 2025",
      description: "Continuing education in Computer Engineering, building on previous coursework and expanding knowledge in the field.",
      icon: <GraduationCap className="w-4 h-4" />
    },
    {
      title: "Technical Training",
      subtitle: "JBEST School of Technology and Practical Skills Inc.",
      period: "2020 - 2023",
      description: "Completed technical training programs focused on practical skills development and technology applications.",
      icon: <GraduationCap className="w-4 h-4" />
    }
  ];

  // Soft skills from resume
  const softSkills = [
    {
      title: "Effective Communication",
      icon: <MessageSquare className="w-5 h-5" />,
      description: "Clear and confident communication in both written and verbal forms."
    },
    {
      title: "Active Listening & Empathy",
      icon: <Headphones className="w-5 h-5" />,
      description: "Attentive to others' needs with a compassionate and understanding approach."
    },
    {
      title: "Time Management",
      icon: <Clock className="w-5 h-5" />,
      description: "Efficient prioritization of tasks to meet deadlines and manage workload effectively."
    },
    {
      title: "Adaptability",
      icon: <Award className="w-5 h-5" />,
      description: "Quickly adapting to new situations and challenges with resourceful solutions."
    },
    {
      title: "Work Ethics",
      icon: <Heart className="w-5 h-5" />,
      description: "Strong moral principles and dedication to delivering quality work."
    }
  ];

  return (
    <section ref={sectionRef} id="experience" className="py-20 min-h-screen w-full relative overflow-hidden">
      {/* Blue glowing stars in light mode */}
      <StarsBackground
        count={25}
        color="#3B82F6" // Blue color
        maxSize={2.5}
        minSize={1.2}
        opacity={0.8}
        zIndex={1}
        className="block dark:hidden" // Only show in light mode
      />

      {/* Stars for dark mode */}
      <StarsBackground
        count={25}
        color="#FFFFFF"
        maxSize={2.5}
        minSize={1.2}
        opacity={0.7}
        zIndex={1}
        className="hidden dark:block" // Only show in dark mode
      />

      {/* Subtle grid pattern - black in light mode, white in dark mode */}
      <GridPattern
        size={45}
        lineWidth={1.2}
        lineColor="var(--grid-color, #000000)"
        opacity={0.07}
        zIndex={1}
        className="[--grid-color:#000000] dark:[--grid-color:#FFFFFF]"
      />

      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-64 bg-gradient-to-b from-blue-50/50 to-transparent dark:from-blue-950/30 dark:to-transparent" />
        <div className="absolute bottom-0 left-0 w-full h-64 bg-gradient-to-t from-blue-50/50 to-transparent dark:from-blue-950/30 dark:to-transparent" />
        <div className="absolute -top-20 -right-20 w-64 h-64 rounded-full bg-blue-200/20 dark:bg-blue-800/10 blur-3xl" />
        <div className="absolute -bottom-20 -left-20 w-64 h-64 rounded-full bg-cyan-200/20 dark:bg-cyan-800/10 blur-3xl" />
      </div>

      <div
        className="container mx-auto px-4 md:px-6 max-w-7xl relative z-10"
        style={{
          opacity: opacity as unknown as number,
          scale: scale as unknown as number,
          transition: "all 0.5s cubic-bezier(0.17, 0.55, 0.55, 1)"
        }}
      >
        <FloatingAnimation>
          <div className="flex flex-col items-center justify-center">
            <Sparkles color="#6495ED">
              <h2 className="text-3xl md:text-5xl font-bold text-center mb-4">
                <TextAnimation text="Experience & Education" />
              </h2>
            </Sparkles>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-cyan-500 rounded-full mb-6" />
            <p className="text-center text-muted-foreground max-w-2xl mx-auto mb-16">
              My professional journey and academic background that have shaped my skills and expertise.
            </p>
          </div>
        </FloatingAnimation>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          {/* Left column - Experience & Education */}
          <div className="lg:col-span-7 space-y-12">
            {/* Work Experience */}
            <div>
              <FloatingAnimation delay={0.2}>
                <h3 className="text-2xl font-semibold mb-6 text-blue-600 dark:text-blue-400 flex items-center">
                  <Briefcase className="w-6 h-6 mr-2" />
                  <Sparkles color="#6495ED">
                    <TextAnimation text="Work Experience" delay={0.1} />
                  </Sparkles>
                </h3>
              </FloatingAnimation>

              <Timeline items={experiences} />
            </div>

            {/* Education */}
            <div>
              <FloatingAnimation delay={0.3}>
                <h3 className="text-2xl font-semibold mb-6 text-blue-600 dark:text-blue-400 flex items-center">
                  <GraduationCap className="w-6 h-6 mr-2" />
                  <Sparkles color="#6495ED">
                    <TextAnimation text="Education" delay={0.1} />
                  </Sparkles>
                </h3>
              </FloatingAnimation>

              <Timeline items={education} />
            </div>
          </div>

          {/* Right column - Skills */}
          <div className="lg:col-span-5 space-y-12">
            {/* Soft Skills */}
            <div>
              <FloatingAnimation delay={0.4}>
                <h3 className="text-2xl font-semibold mb-6 text-blue-600 dark:text-blue-400 flex items-center">
                  <Heart className="w-6 h-6 mr-2" />
                  <Sparkles color="#6495ED">
                    <TextAnimation text="Soft Skills" delay={0.1} />
                  </Sparkles>
                </h3>
              </FloatingAnimation>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {softSkills.map((skill, index) => (
                  <SkillCard
                    key={index}
                    title={skill.title}
                    icon={skill.icon}
                    description={skill.description}
                    index={index}
                  />
                ))}
              </div>
            </div>

            {/* Personal Statement */}
            <FloatingAnimation delay={0.6}>
              <div className="bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-950/50 dark:to-cyan-950/50 rounded-xl p-6 border border-blue-100 dark:border-blue-900/50 shadow-md">
                <h3 className="text-xl font-semibold mb-3 text-blue-600 dark:text-blue-400">
                  <Sparkles color="#6495ED">
                    <TextAnimation text="Personal Statement" delay={0.1} />
                  </Sparkles>
                </h3>
                <div className="text-muted-foreground text-sm">
                  <TextAnimation
                    text="I am a practical individual with strong morals, professionalism, and work ethics. I have demonstrated effective communication skills during my senior high school and college years by actively participating in presentations and consistently being chosen as a class representative."
                    delay={0.2}
                  />
                  <div className="h-2"></div>
                  <TextAnimation
                    text="I am eager to build foundational skills in computer literacy and language fluency, while contributing effectively to a dynamic team environment."
                    delay={0.4}
                  />
                  <div className="h-2"></div>
                  <TextAnimation
                    text="I am committed to continuous improvement, adaptability, and applying a strong work ethic to achieve both personal and professional growth."
                    delay={0.6}
                  />
                </div>
              </div>
            </FloatingAnimation>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;

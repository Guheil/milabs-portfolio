"use client";

import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface SkillCardProps {
  title: string;
  icon: React.ReactNode;
  description?: string;
  className?: string;
  index?: number;
}

export const SkillCard = ({
  title,
  icon,
  description,
  className,
  index = 0,
}: SkillCardProps) => {
  return (
    <motion.div
      className={cn(
        "group relative overflow-hidden rounded-xl bg-white dark:bg-neutral-900 p-6 shadow-md border border-blue-100 dark:border-blue-900/50 hover:shadow-xl transition-all duration-300",
        className
      )}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.1 * index }}
      viewport={{ once: true, margin: "-50px" }}
      whileHover={{ y: -5 }}
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-white dark:from-blue-950/30 dark:to-neutral-900 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      
      {/* Decorative corner */}
      <div className="absolute top-0 right-0 w-16 h-16 overflow-hidden">
        <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-blue-400 to-cyan-400 rotate-45 transform origin-top-right scale-0 group-hover:scale-100 transition-transform duration-300 delay-100" />
      </div>
      
      <div className="relative z-10">
        {/* Icon container */}
        <div className="w-12 h-12 rounded-lg bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center mb-4 text-blue-600 dark:text-blue-400 group-hover:scale-110 transition-transform duration-300">
          {icon}
        </div>
        
        {/* Title */}
        <h3 className="text-lg font-semibold mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
          {title}
        </h3>
        
        {/* Description */}
        {description && (
          <p className="text-muted-foreground text-sm">{description}</p>
        )}
        
        {/* Animated underline */}
        <div className="h-0.5 w-0 bg-gradient-to-r from-blue-400 to-cyan-400 mt-3 group-hover:w-full transition-all duration-500 ease-out" />
      </div>
    </motion.div>
  );
};

export default SkillCard;

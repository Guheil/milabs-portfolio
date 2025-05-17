"use client";

import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface CardHoverEffectProps {
  items: {
    title: string;
    description: string;
    icon?: React.ReactNode;
  }[];
  className?: string;
}

export const CardHoverEffect: React.FC<CardHoverEffectProps> = ({
  items,
  className,
}) => {
  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 py-10 w-full",
        className
      )}
    >
      {items.map((item, idx) => (
        <HoverCard key={idx} item={item} />
      ))}
    </div>
  );
};

interface HoverCardProps {
  item: {
    title: string;
    description: string;
    icon?: React.ReactNode;
  };
}

const HoverCard: React.FC<HoverCardProps> = ({ item }) => {
  const [isHovered, setIsHovered] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  return (
    <motion.div
      ref={cardRef}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="relative overflow-hidden rounded-xl border border-blue-200 bg-white p-6 shadow-md transition-all duration-300 hover:shadow-lg dark:border-blue-800 dark:bg-neutral-950 h-full"
      whileHover={{ y: -5 }}
      transition={{ duration: 0.3, type: "spring", stiffness: 300 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
    >
      <div className="relative z-10 flex flex-col gap-3">
        {item.icon && (
          <div className="text-blue-500 w-12 h-12 flex items-center justify-center rounded-full bg-blue-100 dark:bg-blue-900 dark:text-blue-400 mb-2">
            {item.icon}
          </div>
        )}
        <h3 className="text-xl font-semibold text-neutral-800 dark:text-neutral-200">
          {item.title}
        </h3>
        <p className="text-neutral-600 dark:text-neutral-400">
          {item.description}
        </p>
      </div>
      <div
        className={`absolute inset-0 z-0 bg-gradient-to-br from-blue-500/20 via-cyan-500/10 to-transparent opacity-0 transition-opacity duration-500 ${
          isHovered ? "opacity-100" : ""
        }`}
      />
    </motion.div>
  );
};

export default CardHoverEffect;

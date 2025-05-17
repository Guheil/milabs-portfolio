"use client";

import React from "react";
import { motion } from "framer-motion";

interface TimelineItemProps {
  title: string;
  subtitle: string;
  period: string;
  description: string | string[];
  index?: number;
  isLast?: boolean;
  icon?: React.ReactNode;
}

export const TimelineItem = ({
  title,
  subtitle,
  period,
  description,
  index = 0,
  isLast = false,
  icon,
}: TimelineItemProps) => {
  return (
    <div className="relative">
      {/* Connecting line */}
      {!isLast && (
        <div className="absolute top-8 bottom-0 left-4 w-0.5 bg-gradient-to-b from-blue-400 to-blue-100 dark:from-blue-600 dark:to-blue-900/30" />
      )}

      <div className="relative flex gap-6">
        {/* Timeline dot */}
        <motion.div
          className="relative z-10 w-8 h-8 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center text-white shadow-md mt-1.5"
          initial={{ scale: 0, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.1 * index }}
          viewport={{ once: true }}
        >
          {icon || (
            <span className="text-xs font-bold">{(index + 1).toString().padStart(2, '0')}</span>
          )}
        </motion.div>

        {/* Content card */}
        <motion.div
          className="flex-1 mb-10"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 * index }}
          viewport={{ once: true }}
        >
          <div className="bg-white dark:bg-neutral-900 rounded-xl p-6 shadow-md border border-blue-100 dark:border-blue-900/50 hover:shadow-xl transition-all duration-300 group">
            {/* Card header */}
            <div className="flex flex-wrap justify-between items-start mb-3">
              <div>
                <h3 className="text-xl font-semibold group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                  {title}
                </h3>
                <p className="text-muted-foreground font-medium">{subtitle}</p>
              </div>
              <span className="text-sm text-blue-600 dark:text-blue-400 px-3 py-1 bg-blue-100 dark:bg-blue-900/50 rounded-full font-medium">
                {period}
              </span>
            </div>

            {/* Description */}
            <div className="text-muted-foreground space-y-2">
              {Array.isArray(description) ? (
                <ul className="list-disc list-inside space-y-1 ml-1">
                  {description.map((item, i) => (
                    <li key={i} className="text-sm">{item}</li>
                  ))}
                </ul>
              ) : (
                <p>{description}</p>
              )}
            </div>

            {/* Animated border on hover */}
            <div className="absolute inset-0 pointer-events-none rounded-xl overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-blue-400 to-transparent transform -translate-x-full group-hover:translate-x-0 transition-transform duration-1000" />
              <div className="absolute top-0 right-0 w-0.5 h-full bg-gradient-to-b from-transparent via-blue-400 to-transparent transform -translate-y-full group-hover:translate-y-0 transition-transform duration-1000 delay-150" />
              <div className="absolute bottom-0 right-0 w-full h-0.5 bg-gradient-to-r from-transparent via-cyan-400 to-transparent transform translate-x-full group-hover:translate-x-0 transition-transform duration-1000 delay-300" />
              <div className="absolute bottom-0 left-0 w-0.5 h-full bg-gradient-to-b from-transparent via-cyan-400 to-transparent transform translate-y-full group-hover:translate-y-0 transition-transform duration-1000 delay-450" />
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export const Timeline = ({ items }: { items: TimelineItemProps[] }) => {
  return (
    <div className="relative py-4">
      {items.map((item, index) => (
        <TimelineItem
          key={index}
          {...item}
          index={index}
          isLast={index === items.length - 1}
        />
      ))}
    </div>
  );
};

export default Timeline;

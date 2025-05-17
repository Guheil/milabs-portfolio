"use client";

import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import FloatingAnimation from "@/components/ui/floating-animation";
import { Mail, Phone, MapPin, Globe, Send, Download } from "lucide-react";
import { motion } from "framer-motion";
import Sparkles from "@/components/ui/sparkles";
import StarsBackground from "@/components/ui/stars-background";
import GridPattern from "@/components/ui/grid-pattern";
import { cn } from "@/lib/utils";

// Define contact items outside the component to avoid re-creation on each render
const contactItems = [
  {
    icon: <Mail className="w-5 h-5" />,
    title: "Email",
    value: "shelbibiancadelgado@gmail.com",
    color: "from-blue-400 to-blue-600",
    delay: 0.2
  },
  {
    icon: <Phone className="w-5 h-5" />,
    title: "Phone",
    value: "09932884677",
    color: "from-cyan-400 to-cyan-600",
    delay: 0.3
  },
  {
    icon: <MapPin className="w-5 h-5" />,
    title: "Location",
    value: "San Jose, Rodriguez, Rizal, South Luzon",
    color: "from-indigo-400 to-indigo-600",
    delay: 0.4
  },
  {
    icon: <Globe className="w-5 h-5" />,
    title: "Facebook",
    value: "facebook.com/shelbybianca.delgado.77",
    color: "from-sky-400 to-sky-600",
    delay: 0.5
  }
];

export const Contact = () => {
  // Use client-side only state with useEffect to prevent hydration mismatch
  const [activeInput, setActiveInput] = useState<string | null>(null);
  const [isMounted, setIsMounted] = useState(false);

  // Only enable client-side features after component has mounted
  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <section id="contact" className="py-20 min-h-screen w-full relative overflow-hidden">
      {/* Cute background with gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-50 to-white dark:from-blue-950/20 dark:to-neutral-900 -z-10" />

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
        size={35}
        lineWidth={1.2}
        lineColor="var(--grid-color, #000000)"
        opacity={0.07}
        zIndex={1}
        className="[--grid-color:#000000] dark:[--grid-color:#FFFFFF]"
      />

      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-64 h-64 rounded-full bg-blue-200/20 dark:bg-blue-800/10 blur-3xl -z-5" />
      <div className="absolute bottom-20 right-10 w-80 h-80 rounded-full bg-cyan-200/20 dark:bg-cyan-800/10 blur-3xl -z-5" />

      <div className="container mx-auto px-4 md:px-6 max-w-7xl relative z-10">
        <FloatingAnimation>
          <div className="text-center mb-4">
            {isMounted ? (
              <Sparkles color="#60a5fa">
                <h2 className="text-3xl md:text-4xl font-bold inline-block bg-gradient-to-r from-blue-500 to-cyan-500 bg-clip-text text-transparent">
                  Get In Touch
                </h2>
              </Sparkles>
            ) : (
              <h2 className="text-3xl md:text-4xl font-bold inline-block bg-gradient-to-r from-blue-500 to-cyan-500 bg-clip-text text-transparent">
                Get In Touch
              </h2>
            )}
          </div>
        </FloatingAnimation>

        <FloatingAnimation delay={0.1}>
          <p className="text-center text-muted-foreground max-w-2xl mx-auto mb-12">
            I'm currently pursuing a Bachelor of Science in Computer Engineering and looking for opportunities
            to build my skills. Feel free to reach out if you'd like to connect!
          </p>
        </FloatingAnimation>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Contact information - 5 columns */}
          <div className="lg:col-span-5 space-y-6">
            <FloatingAnimation delay={0.15}>
              <div className="bg-white/80 dark:bg-neutral-900/80 backdrop-blur-sm rounded-2xl p-6 border border-blue-100 dark:border-blue-900 shadow-lg">
                <h3 className="text-2xl font-semibold mb-6 text-blue-600 dark:text-blue-400 flex items-center gap-2">
                  <span className="relative">
                    Contact Information
                    <span className="absolute -bottom-1 left-0 w-full h-1 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full"></span>
                  </span>
                </h3>

                <div className="space-y-5">
                  {contactItems.map((item, index) => (
                    <FloatingAnimation key={index} delay={item.delay}>
                      <div className="flex items-start gap-4 p-3 rounded-xl transition-all duration-300 hover:bg-blue-50 dark:hover:bg-blue-900/20 hover:translate-x-1">

                        <div className={`p-3 rounded-full bg-gradient-to-br ${item.color} text-white shadow-md`}>
                          {item.icon}
                        </div>
                        <div className="flex-1">
                          <h4 className="font-medium">{item.title}</h4>
                          <p className="text-muted-foreground break-words">{item.value}</p>
                        </div>
                      </div>
                    </FloatingAnimation>
                  ))}
                </div>

                <div className="mt-8">
                  <Button
                    className="w-full rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white shadow-md transition-all duration-300 hover:shadow-lg group"
                  >
                    <Download className={`w-4 h-4 mr-2 ${isMounted ? 'group-hover:animate-bounce' : ''}`} />
                    Download Resume
                  </Button>
                </div>
              </div>
            </FloatingAnimation>
          </div>

          {/* Contact form - 7 columns */}
          <div className="lg:col-span-7">
            <FloatingAnimation delay={0.2}>
              <div className="bg-white/80 dark:bg-neutral-900/80 backdrop-blur-sm rounded-2xl p-6 border border-blue-100 dark:border-blue-900 shadow-lg">
                <h3 className="text-2xl font-semibold mb-6 text-blue-600 dark:text-blue-400 flex items-center gap-2">
                  <span className="relative">
                    Send Me a Message
                    <span className="absolute -bottom-1 left-0 w-full h-1 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full"></span>
                  </span>
                </h3>

                <form className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div className="space-y-2 relative">
                      <label
                        htmlFor="name"
                        className={cn(
                          "text-sm font-medium transition-all duration-200",
                          activeInput === "name" ? "text-blue-500" : ""
                        )}
                      >
                        Name
                      </label>
                      <input
                        id="name"
                        className="flex h-12 w-full rounded-xl border border-blue-100 dark:border-blue-900 bg-white/50 dark:bg-neutral-800/50 px-4 py-2 text-sm transition-all duration-200 focus:border-blue-400 focus:ring-2 focus:ring-blue-400/20 dark:focus:border-blue-500 dark:focus:ring-blue-500/20 outline-none"
                        placeholder="Your name"
                        onFocus={() => setActiveInput("name")}
                        onBlur={() => setActiveInput(null)}
                      />
                      {isMounted && activeInput === "name" && (
                        <motion.div
                          className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-blue-400 to-cyan-400"
                          initial={{ width: 0 }}
                          animate={{ width: "100%" }}
                          transition={{ duration: 0.3 }}
                        />
                      )}
                    </div>

                    <div className="space-y-2 relative">
                      <label
                        htmlFor="email"
                        className={cn(
                          "text-sm font-medium transition-all duration-200",
                          activeInput === "email" ? "text-blue-500" : ""
                        )}
                      >
                        Email
                      </label>
                      <input
                        id="email"
                        type="email"
                        className="flex h-12 w-full rounded-xl border border-blue-100 dark:border-blue-900 bg-white/50 dark:bg-neutral-800/50 px-4 py-2 text-sm transition-all duration-200 focus:border-blue-400 focus:ring-2 focus:ring-blue-400/20 dark:focus:border-blue-500 dark:focus:ring-blue-500/20 outline-none"
                        placeholder="Your email"
                        onFocus={() => setActiveInput("email")}
                        onBlur={() => setActiveInput(null)}
                      />
                      {isMounted && activeInput === "email" && (
                        <motion.div
                          className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-blue-400 to-cyan-400"
                          initial={{ width: 0 }}
                          animate={{ width: "100%" }}
                          transition={{ duration: 0.3 }}
                        />
                      )}
                    </div>
                  </div>

                  <div className="space-y-2 relative">
                    <label
                      htmlFor="subject"
                      className={cn(
                        "text-sm font-medium transition-all duration-200",
                        activeInput === "subject" ? "text-blue-500" : ""
                      )}
                    >
                      Subject
                    </label>
                    <input
                      id="subject"
                      className="flex h-12 w-full rounded-xl border border-blue-100 dark:border-blue-900 bg-white/50 dark:bg-neutral-800/50 px-4 py-2 text-sm transition-all duration-200 focus:border-blue-400 focus:ring-2 focus:ring-blue-400/20 dark:focus:border-blue-500 dark:focus:ring-blue-500/20 outline-none"
                      placeholder="Subject"
                      onFocus={() => setActiveInput("subject")}
                      onBlur={() => setActiveInput(null)}
                    />
                    {isMounted && activeInput === "subject" && (
                      <motion.div
                        className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-blue-400 to-cyan-400"
                        initial={{ width: 0 }}
                        animate={{ width: "100%" }}
                        transition={{ duration: 0.3 }}
                      />
                    )}
                  </div>

                  <div className="space-y-2 relative">
                    <label
                      htmlFor="message"
                      className={cn(
                        "text-sm font-medium transition-all duration-200",
                        activeInput === "message" ? "text-blue-500" : ""
                      )}
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      className="flex min-h-[150px] w-full rounded-xl border border-blue-100 dark:border-blue-900 bg-white/50 dark:bg-neutral-800/50 px-4 py-3 text-sm transition-all duration-200 focus:border-blue-400 focus:ring-2 focus:ring-blue-400/20 dark:focus:border-blue-500 dark:focus:ring-blue-500/20 outline-none resize-none"
                      placeholder="Your message"
                      onFocus={() => setActiveInput("message")}
                      onBlur={() => setActiveInput(null)}
                    />
                    {isMounted && activeInput === "message" && (
                      <motion.div
                        className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-blue-400 to-cyan-400"
                        initial={{ width: 0 }}
                        animate={{ width: "100%" }}
                        transition={{ duration: 0.3 }}
                      />
                    )}
                  </div>

                  <Button
                    className="w-full rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white shadow-md transition-all duration-300 hover:shadow-lg group h-12"
                  >
                    <Send className="w-4 h-4 mr-2 transition-transform duration-300 group-hover:translate-x-1" />
                    Send Message
                  </Button>
                </form>
              </div>
            </FloatingAnimation>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

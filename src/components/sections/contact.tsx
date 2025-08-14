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
import emailjs from '@emailjs/browser';
const contactItems = [
  {
    icon: <Mail className="w-5 h-5" />,
    title: "Email",
    value: "shelbiancadelgado@gmail.com",
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
    value: "National Capital Region, Philippines",
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
  const [activeInput, setActiveInput] = useState<string | null>(null);
  const [isMounted, setIsMounted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  
  // Form data state
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  useEffect(() => {
    setIsMounted(true);
    // Initialize EmailJS with your public key
    emailjs.init('axT_rJTqCGoHeEb6E'); // Replace with your EmailJS public key
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      // Send email using EmailJS
      await emailjs.send(
        'service_1kdum87', 
        'template_1hss44k', 
        {
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message,
          to_email: 'shelbiancadelgado@gmail.com' // Your email
        }
      );

      setSubmitStatus('success');
      // Reset form
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
    } catch (error) {
      console.error('Error sending email:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
      // Reset status after 5 seconds
      setTimeout(() => setSubmitStatus('idle'), 5000);
    }
  };

  return (
    <section id="contact" className="py-20 min-h-screen w-full relative overflow-hidden">
      {/* Background and decorative elements remain the same */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-50 to-white dark:from-blue-950/20 dark:to-neutral-900 -z-10" />

      <StarsBackground
        count={30}
        color="#3B82F6"
        maxSize={2.5}
        minSize={1.2}
        opacity={0.8}
        zIndex={1}
        className="block dark:hidden"
      />

      <StarsBackground
        count={30}
        color="#FFFFFF"
        maxSize={2.5}
        minSize={1.2}
        opacity={0.7}
        zIndex={1}
        className="hidden dark:block"
      />

      <GridPattern
        size={35}
        lineWidth={1.2}
        lineColor="var(--grid-color, #000000)"
        opacity={0.07}
        zIndex={1}
        className="[--grid-color:#000000] dark:[--grid-color:#FFFFFF]"
      />

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
            I&apos;m currently pursuing a Bachelor of Science in Computer Engineering and looking for opportunities
            to build my skills. Feel free to reach out if you&apos;d like to connect!
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

                {/* Status messages */}
                {submitStatus === 'success' && (
                  <div className="mb-4 p-4 rounded-xl bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800">
                    <p className="text-green-700 dark:text-green-400 text-sm">
                      ✅ Message sent successfully! I`&apos;`ll get back to you soon.
                    </p>
                  </div>
                )}

                {submitStatus === 'error' && (
                  <div className="mb-4 p-4 rounded-xl bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800">
                    <p className="text-red-700 dark:text-red-400 text-sm">
                      ❌ Failed to send message. Please try again or contact me directly.
                    </p>
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div className="space-y-2 relative">
                      <label
                        htmlFor="name"
                        className={cn(
                          "text-sm font-medium transition-all duration-200",
                          activeInput === "name" ? "text-blue-500" : ""
                        )}
                      >
                        Name *
                      </label>
                      <input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
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
                        Email *
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
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
                      Subject *
                    </label>
                    <input
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      required
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
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
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
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white shadow-md transition-all duration-300 hover:shadow-lg group h-12 disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <div className="flex items-center">
                        <div className="w-4 h-4 mr-2 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        Sending...
                      </div>
                    ) : (
                      <>
                        <Send className="w-4 h-4 mr-2 transition-transform duration-300 group-hover:translate-x-1" />
                        Send Message
                      </>
                    )}
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
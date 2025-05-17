"use client";

import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import FloatingAnimation from "@/components/ui/floating-animation";
import CardHoverEffect from "@/components/ui/card-hover-effect";
import { MessageSquare, Headphones, BookOpen, Award } from "lucide-react";

export const Experience = () => {
  const experiences = [
    {
      title: "Customer Service Representative",
      company: "TechSupport Inc.",
      period: "2022 - Present",
      description:
        "Provided exceptional customer support via phone, email, and chat. Resolved technical issues and maintained a 95% customer satisfaction rating.",
    },
    {
      title: "Customer Support Intern",
      company: "HelpDesk Solutions",
      period: "2021 - 2022",
      description:
        "Assisted senior support staff with ticket management and basic customer inquiries. Learned industry best practices and support tools.",
    },
    {
      title: "Retail Associate",
      company: "Fashion Boutique",
      period: "2019 - 2021",
      description:
        "Delivered personalized shopping experiences and resolved customer concerns. Developed strong interpersonal and problem-solving skills.",
    },
  ];

  const strengths = [
    {
      title: "Effective Communication",
      description:
        "Clear and empathetic communication with customers across all channels.",
      icon: <MessageSquare className="w-6 h-6" />,
    },
    {
      title: "Active Listening",
      description:
        "Attentive to customer needs, ensuring their concerns are fully understood.",
      icon: <Headphones className="w-6 h-6" />,
    },
    {
      title: "Continuous Learning",
      description:
        "Always expanding knowledge to better assist customers with their issues.",
      icon: <BookOpen className="w-6 h-6" />,
    },
    {
      title: "Problem Solving",
      description:
        "Creative and efficient approach to resolving complex customer issues.",
      icon: <Award className="w-6 h-6" />,
    },
  ];

  return (
    <section id="experience" className="py-20 w-full">
      <div className="container mx-auto px-4 md:px-6 max-w-7xl">
        <FloatingAnimation>
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Experience & Strengths
          </h2>
        </FloatingAnimation>

        <div className="space-y-16">
          <div>
            <FloatingAnimation delay={0.2}>
              <h3 className="text-2xl font-semibold mb-6 text-blue-600 dark:text-blue-400">
                Work Experience
              </h3>
            </FloatingAnimation>

            <div className="space-y-6">
              {experiences.map((exp, index) => (
                <FloatingAnimation key={index} delay={0.2 + index * 0.1}>
                  <Card className="border-blue-200 dark:border-blue-800 shadow-md overflow-hidden">
                    <div className="h-2 bg-gradient-to-r from-blue-400 to-cyan-500" />
                    <CardContent className="p-6">
                      <div className="flex flex-wrap justify-between items-start mb-2">
                        <h4 className="text-xl font-semibold">{exp.title}</h4>
                        <span className="text-sm text-muted-foreground px-2 py-1 bg-blue-100 dark:bg-blue-900 rounded-full">
                          {exp.period}
                        </span>
                      </div>
                      <p className="text-muted-foreground font-medium mb-3">
                        {exp.company}
                      </p>
                      <p className="text-muted-foreground">{exp.description}</p>
                    </CardContent>
                  </Card>
                </FloatingAnimation>
              ))}
            </div>
          </div>

          <div>
            <FloatingAnimation delay={0.4}>
              <h3 className="text-2xl font-semibold mb-6 text-blue-600 dark:text-blue-400">
                Key Strengths
              </h3>
            </FloatingAnimation>

            <FloatingAnimation delay={0.5}>
              <CardHoverEffect items={strengths} />
            </FloatingAnimation>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;

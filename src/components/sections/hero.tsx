"use client";

import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import FloatingAnimation from "@/components/ui/floating-animation";
import TextAnimation from "@/components/ui/text-animation";
import Sparkles from "@/components/ui/sparkles";

export const Hero = () => {
  return (
    <section className="relative min-h-[90vh] w-full flex flex-col items-center justify-center py-20 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_center,rgba(173,216,230,0.25),transparent_70%)]" />

      <div className="container mx-auto px-4 md:px-6 max-w-7xl flex flex-col lg:flex-row items-center gap-12">
        <div className="flex-1 space-y-8">
          <FloatingAnimation delay={0.1}>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
              <TextAnimation text="Hi, I'm" delay={0.2} />
              <br />
              <Sparkles color="#6495ED">
                <span className="bg-gradient-to-r from-blue-500 to-cyan-500 bg-clip-text text-transparent">
                  Shelby Bianca Delgado
                </span>
              </Sparkles>
            </h1>
          </FloatingAnimation>

          <FloatingAnimation delay={0.3}>
            <p className="text-xl text-muted-foreground max-w-[600px]">
              A passionate customer support professional dedicated to creating
              exceptional user experiences and solving problems with empathy and
              efficiency.
            </p>
          </FloatingAnimation>

          <FloatingAnimation delay={0.5}>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="rounded-full bg-blue-500 hover:bg-blue-600">
                Contact Me
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="rounded-full border-blue-300 hover:bg-blue-50 dark:hover:bg-blue-950"
              >
                View Resume
              </Button>
            </div>
          </FloatingAnimation>
        </div>

        <FloatingAnimation delay={0.4} className="flex-1 flex justify-center">
          <div className="relative w-[280px] h-[280px] md:w-[350px] md:h-[350px] rounded-full overflow-hidden border-4 border-blue-200 dark:border-blue-800 shadow-xl">
            {/* Replace with actual image of Shelby */}
            <Image
              src="/placeholder-profile.svg"
              alt="Shelby Bianca Delgado"
              fill
              className="object-cover"
              priority
            />
          </div>
        </FloatingAnimation>
      </div>
    </section>
  );
};

export default Hero;

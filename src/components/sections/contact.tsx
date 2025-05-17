"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import FloatingAnimation from "@/components/ui/floating-animation";
import { Mail, Phone, MapPin, Linkedin } from "lucide-react";

export const Contact = () => {
  return (
    <section id="contact" className="py-20 min-h-screen bg-neutral-50 dark:bg-neutral-900 w-full">
      <div className="container mx-auto px-4 md:px-6 max-w-7xl">
        <FloatingAnimation>
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            Get In Touch
          </h2>
        </FloatingAnimation>

        <FloatingAnimation delay={0.1}>
          <p className="text-center text-muted-foreground max-w-2xl mx-auto mb-12">
            I'm currently looking for new opportunities in customer support. Whether
            you have a question or just want to say hi, I'll do my best to get back
            to you!
          </p>
        </FloatingAnimation>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <FloatingAnimation delay={0.2}>
            <Card className="border-blue-200 dark:border-blue-800 shadow-md h-full">
              <CardContent className="p-6 h-full flex flex-col">
                <h3 className="text-2xl font-semibold mb-6 text-blue-600 dark:text-blue-400">
                  Contact Information
                </h3>

                <div className="space-y-6 flex-grow">
                  <div className="flex items-start gap-4">
                    <div className="bg-blue-100 dark:bg-blue-900 p-3 rounded-full text-blue-600 dark:text-blue-400">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-medium">Email</h4>
                      <p className="text-muted-foreground">
                        shelby.delgado@example.com
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="bg-blue-100 dark:bg-blue-900 p-3 rounded-full text-blue-600 dark:text-blue-400">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-medium">Phone</h4>
                      <p className="text-muted-foreground">(123) 456-7890</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="bg-blue-100 dark:bg-blue-900 p-3 rounded-full text-blue-600 dark:text-blue-400">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-medium">Location</h4>
                      <p className="text-muted-foreground">San Francisco, CA</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="bg-blue-100 dark:bg-blue-900 p-3 rounded-full text-blue-600 dark:text-blue-400">
                      <Linkedin className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-medium">LinkedIn</h4>
                      <p className="text-muted-foreground">
                        linkedin.com/in/shelbydelgado
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-8">
                  <Button className="w-full rounded-full bg-blue-500 hover:bg-blue-600">
                    Download Resume
                  </Button>
                </div>
              </CardContent>
            </Card>
          </FloatingAnimation>

          <FloatingAnimation delay={0.3}>
            <Card className="border-blue-200 dark:border-blue-800 shadow-md">
              <CardContent className="p-6">
                <h3 className="text-2xl font-semibold mb-6 text-blue-600 dark:text-blue-400">
                  Send Me a Message
                </h3>

                <form className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label
                        htmlFor="name"
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        Name
                      </label>
                      <input
                        id="name"
                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                        placeholder="Your name"
                      />
                    </div>
                    <div className="space-y-2">
                      <label
                        htmlFor="email"
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        Email
                      </label>
                      <input
                        id="email"
                        type="email"
                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                        placeholder="Your email"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label
                      htmlFor="subject"
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      Subject
                    </label>
                    <input
                      id="subject"
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      placeholder="Subject"
                    />
                  </div>
                  <div className="space-y-2">
                    <label
                      htmlFor="message"
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      className="flex min-h-[120px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      placeholder="Your message"
                    />
                  </div>
                  <Button className="w-full rounded-full bg-blue-500 hover:bg-blue-600">
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </FloatingAnimation>
        </div>
      </div>
    </section>
  );
};

export default Contact;

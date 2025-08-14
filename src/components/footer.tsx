"use client";

import React from "react";
import Link from "next/link";
import {  TwitterIcon, LinkedinIcon, InstagramIcon, FacebookIcon } from "lucide-react";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-blue-100 dark:bg-blue-950 py-12 w-full">
      <div className="container mx-auto px-4 md:px-6 max-w-7xl">
        <div className="flex flex-col items-center">
          <Link href="#" className="text-2xl font-bold text-blue-600 dark:text-blue-400 mb-6">
            Shelby
          </Link>

          <div className="flex space-x-6 mb-8">
            <Link
              href="#"
              className="text-muted-foreground hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              <FacebookIcon className="w-5 h-5" />
              <span className="sr-only">Facebook</span>
            </Link>
            <Link
              href="#"
              className="text-muted-foreground hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              <TwitterIcon className="w-5 h-5" />
              <span className="sr-only">Twitter</span>
            </Link>
            <Link
              href="#"
              className="text-muted-foreground hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              <LinkedinIcon className="w-5 h-5" />
              <span className="sr-only">LinkedIn</span>
            </Link>
            <Link
              href="#"
              className="text-muted-foreground hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              <InstagramIcon className="w-5 h-5" />
              <span className="sr-only">Instagram</span>
            </Link>
          </div>

          <div className="text-center text-sm text-muted-foreground">
            <p className="flex items-center justify-center mb-2">
              Shelby Bianca Delgado
            </p>
            <p>&copy; {currentYear} All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

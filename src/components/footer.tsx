"use client";

import React from "react";
import Link from "next/link";
import {LinkedinIcon, InstagramIcon, FacebookIcon, Heart } from "lucide-react";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: FacebookIcon, label: "Facebook", href: "https://www.facebook.com/shelbybianca.delgado.77" },
    { icon: LinkedinIcon, label: "LinkedIn", href: "https://www.linkedin.com/in/shelby-bianca-delgado-95935437a/" },
    { icon: InstagramIcon, label: "Instagram", href: "#" },
  ];

  return (
    <footer className="bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-blue-950 dark:to-indigo-950 py-16 w-full">
      <div className="container mx-auto px-4 md:px-6 max-w-7xl">
        <div className="flex flex-col items-center space-y-8">
          {/* Logo/Brand */}
          <Link 
            href="#" 
            className="group text-3xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400 bg-clip-text text-transparent hover:scale-105 transition-transform duration-300"
          >
            Shelby
            <div className="w-0 group-hover:w-full h-0.5 bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400 transition-all duration-300 mx-auto"></div>
          </Link>

          {/* Social Links */}
          <div className="flex space-x-6">
            {socialLinks.map(({ icon: Icon, label, href }) => (
              <Link
                key={label}
                href={href}
                className="group relative p-3 rounded-full bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm border border-gray-200/50 dark:border-gray-700/50 text-gray-600 dark:text-gray-400 hover:text-white hover:bg-gradient-to-r hover:from-blue-500 hover:to-indigo-500 hover:border-transparent hover:scale-110 transition-all duration-300 shadow-sm hover:shadow-lg"
                aria-label={label}
              >
                <Icon className="w-5 h-5" />
                <span className="sr-only">{label}</span>
                
                {/* Tooltip */}
                <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 px-2 py-1 bg-gray-900 dark:bg-gray-100 text-white dark:text-gray-900 text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap">
                  {label}
                  <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-900 dark:border-t-gray-100"></div>
                </div>
              </Link>
            ))}
          </div>

          {/* Copyright and Name */}
          <div className="text-center space-y-3">
            <div className="flex items-center justify-center gap-2 text-gray-700 dark:text-gray-300">
              <Heart className="w-4 h-4 text-red-500 animate-pulse" />
              <span className="font-medium">Shelby Bianca Delgado</span>
            </div>
            
            <div className="h-px w-32 bg-gradient-to-r from-transparent via-gray-300 dark:via-gray-600 to-transparent mx-auto"></div>
            
            <p className="text-sm text-gray-600 dark:text-gray-400">
              &copy; {currentYear} All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
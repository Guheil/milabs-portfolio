"use client";

import React, { useState, useEffect } from "react";
import dynamic from "next/dynamic";

// Import the splash screen component with SSR disabled to avoid hydration errors
const SplashScreen = dynamic(() => import("./splash-screen"), {
  ssr: false
});

interface SplashWrapperProps {
  children: React.ReactNode;
}

const SplashWrapper: React.FC<SplashWrapperProps> = ({ children }) => {
  // State to control splash screen visibility
  const [showSplash, setShowSplash] = useState(false);

  useEffect(() => {
    // Only show splash on client-side and only on first visit
    try {
      const visited = sessionStorage.getItem("hasVisited");
      if (!visited) {
        setShowSplash(true);
        sessionStorage.setItem("hasVisited", "true");
      }
    } catch (error) {
      // Handle case where sessionStorage is not available
      console.log("SessionStorage not available, skipping splash screen");
    }
  }, []);

  return (
    <>
      {/* Use AnimatePresence to handle exit animations */}
      <div style={{ position: 'relative' }}>
        {showSplash && (
          <SplashScreen finishLoading={() => setShowSplash(false)} />
        )}

        {/* Render children with opacity based on splash screen state */}
        <div style={{
          opacity: showSplash ? 0 : 1,
          transition: 'opacity 0.5s ease-in-out',
          visibility: showSplash ? 'hidden' : 'visible'
        }}>
          {children}
        </div>
      </div>
    </>
  );
};

export default SplashWrapper;

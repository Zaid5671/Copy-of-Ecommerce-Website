"use client";

import { useEffect, useState } from "react";

// The 'LoadingScreenProps' interface is removed for JSX compatibility.
const LoadingScreen = ({ onComplete }) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
      setTimeout(onComplete, 500); // Allow fade out animation to complete
    }, 2500);

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center golden-gradient transition-opacity duration-500 ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
    >
      <div className="text-center">
        {/* Rotating Mandala Background */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-96 h-96 border-2 border-primary-foreground/20 rounded-full animate-loading-spin">
            <div className="w-full h-full border-t-2 border-primary-foreground/40 rounded-full animate-pulse">
              <div className="w-full h-full flex items-center justify-center">
                <div className="w-48 h-48 border border-primary-foreground/10 rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Brand Name */}
        <div className="relative z-10">
          <h1 className="noor-logo text-6xl md:text-8xl text-primary-foreground animate-fade-in-up">
            Noor
          </h1>
          <div className="mt-4 opacity-0 animate-[fade-in-up_0.8s_ease-out_1s_forwards]">
            <div className="w-24 h-[2px] bg-primary-foreground mx-auto mb-2"></div>
            <p className="text-primary-foreground/80 text-sm tracking-widest">
              LUXURY ETHNIC WEAR
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;

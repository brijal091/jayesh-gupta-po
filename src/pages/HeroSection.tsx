"use client";

import { HOME_CONTENT } from "@/constants/constants";
import React, { useState, useEffect, useMemo } from "react";
import "@/styles/hero-animations.scss";

const HeroSection = () => {
  const [isTyping, setIsTyping] = useState(false);
  const [displayText, setDisplayText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);

  const dynamicTexts = useMemo(
    () => [
      "Full Stack Developer",
      "System Architect",
      "Cloud Expert",
      "Problem Solver",
      "Innovation Driver",
    ],
    []
  );

  useEffect(() => {
    const typeText = () => {
      const currentText = dynamicTexts[currentIndex];
      let charIndex = 0;

      setIsTyping(true);
      setDisplayText("");

      const typeInterval = setInterval(() => {
        if (charIndex < currentText.length) {
          setDisplayText(currentText.slice(0, charIndex + 1));
          charIndex++;
        } else {
          clearInterval(typeInterval);
          setIsTyping(false);

          setTimeout(() => {
            setCurrentIndex((prev) => (prev + 1) % dynamicTexts.length);
          }, 2000);
        }
      }, 100);
    };

    const timer = setTimeout(typeText, 500);
    return () => clearTimeout(timer);
  }, [currentIndex, dynamicTexts]);

  return (
    <div className="relative container text-white mx-auto px-4 md:px-6 min-h-screen flex flex-col justify-center overflow-hidden">
      {/* Main Content */}
      <div className="relative z-10 grid lg:grid-cols-2 gap-8 items-center min-h-screen">
        {/* Left Column - Content */}
        <div className="">
          <div className="flex flex-col lg:items-start items-center">
            {/* Title Tag with Animation */}
            <div className="relative">
              <p className="text-primary-100 tracking-wider font-semibold text-sm md:text-base animate-fadeInUp">
                {HOME_CONTENT.TITLE_TAG}
              </p>
            </div>

            {/* Main Heading with Dynamic Text */}
            <div className="lg:text-left text-center space-y-4">
              <h1 className="text-5xl md:text-7xl font-milkwhite !mt-12">
                {HOME_CONTENT.GREETING}{" "}
                <span className="text-7xl lg:text-9xl">{HOME_CONTENT.NAME_HIGHLIGHT}</span>{" "}
                {HOME_CONTENT.SPEAKING}
              </h1>
              {/* Dynamic Role Text */}
              <div className="h-12 flex items-center lg:justify-start justify-center">
                <span className="text-xl md:text-2xl text-primary-100 font-semibold">
                  {displayText}
                  <span
                    className={`inline-block w-0.5 h-6 bg-primary-100 ml-1 ${
                      isTyping ? "animate-pulse" : "animate-blink"
                    }`}
                  />
                </span>
              </div>
            </div>

            {/* Experience Section with Enhanced Design */}
             <p className="text-xl">
                <span className="font-semibold">
                  {HOME_CONTENT.EXPERIENCE.YEARS}
                </span>{" "}
                <span className="text-primary-100">
                  {HOME_CONTENT.EXPERIENCE.DESCRIPTION}
                </span>
              </p>

            {/* Call to Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mt-24">
              <button
                className="px-8 py-4 bg-primary-100 text-primary-50 rounded-xl font-semibold hover:bg-primary-200 hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-primary-100/50 animate-fadeInUp"
                style={{ animationDelay: "1500ms" }}
              >
                View My Work
              </button>
              <button
                className="px-8 py-4 border-2 border-primary-100 text-primary-100 rounded-xl font-semibold hover:bg-primary-100 hover:text-primary-50 hover:scale-105 transition-all duration-300 animate-fadeInUp"
                style={{ animationDelay: "1600ms" }}
              >
                Let&apos;s Connect
              </button>
            </div>
          </div>
        </div>

        {/* Right Column - Animated Person Image */}
        <div
          className="relative flex items-center justify-center lg:justify-end animate-fadeInUp"
          style={{ animationDelay: "800ms" }}
        >
          {/* Decorative Background Elements for Image */}
          <div className="absolute inset-0 flex items-center justify-center">
            {/* Rotating Circle */}
            <div className="absolute w-80 h-80 lg:w-96 lg:h-96 border-2 border-primary-100/20 rounded-full animate-spin-slow"></div>

            {/* Pulsing Ring */}
            <div className="absolute w-72 h-72 lg:w-88 lg:h-88 border border-primary-100/30 rounded-full animate-pulse"></div>

            {/* Floating Icons */}
            <div className="absolute hidden lg:flex w-12 h-12 -top-6 -right-6 bg-primary-100/20 rounded-full items-center justify-center animate-bounce-slow">
              <span className="text-2xl">⚛️</span>
            </div>
            <div
              className="absolute hidden lg:flex w-10 h-10 -bottom-4 bg-primary-100/20 rounded-full items-center justify-center animate-bounce-slow"
              style={{ animationDelay: "0.5s" }}
            >
              <span className="text-xl">☁️</span>
            </div>
            <div
              className="absolute hidden lg:flex w-14 h-14 top-16 bg-primary-100/20 rounded-full items-center justify-center animate-bounce-slow"
              style={{ animationDelay: "1s" }}
            >
              <span className="text-2xl">🚀</span>
            </div>
            <div
              className="absolute hidden lg:flex w-10 h-10 bottom-16 -right-2 bg-primary-100/20 rounded-full items-center justify-center animate-bounce-slow"
              style={{ animationDelay: "1.5s" }}
            >
              <span className="text-xl">⚡</span>
            </div>
          </div>

          {/* Main Profile Image */}
          <div className="relative z-10 w-64 h-64 lg:w-80 lg:h-80 rounded-full overflow-hidden border-4 border-primary-100/30 bg-gradient-to-br from-primary-100/10 to-primary-200/10 hover:scale-105 transition-transform duration-500 hover:border-primary-100/60">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/my/no-bg/profile.png"
              alt="Jayesh Gupta - Full Stack Developer"
              className="w-full h-full object-cover animate-gentle-float"
              onError={(e) => {
                // Fallback to profile2.png if profile.png doesn't exist
                const target = e.target as HTMLImageElement;
                target.src = "/my/no-bg/profile2.png";
              }}
            />
          </div>

          {/* Background Glow Effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-primary-100/10 to-primary-200/10 rounded-full blur-2xl scale-110 animate-pulse-slow"></div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;

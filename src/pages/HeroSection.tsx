"use client";

import { HOME_CONTENT } from "@/constants/constants";
import React, { useState, useEffect, useMemo } from "react";
import "@/styles/hero-animations.scss";

const HeroSection = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
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
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

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
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Floating Particles */}
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-primary-100/30 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${3 + Math.random() * 4}s`,
            }}
          />
        ))}

        {/* Grid Pattern */}
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `linear-gradient(rgba(174, 156, 150, 0.1) 1px, transparent 1px),
                             linear-gradient(90deg, rgba(174, 156, 150, 0.1) 1px, transparent 1px)`,
            backgroundSize: "50px 50px",
            transform: `translate(${mousePosition.x * 0.1}px, ${
              mousePosition.y * 0.1
            }px)`,
            transition: "transform 0.3s ease-out",
          }}
        />

        {/* Gradient Orbs */}
        <div
          className="absolute w-96 h-96 bg-primary-100/10 rounded-full blur-3xl"
          style={{
            top: "10%",
            left: "20%",
            transform: `translate(${mousePosition.x * 0.2}px, ${
              mousePosition.y * 0.2
            }px)`,
            transition: "transform 0.5s ease-out",
          }}
        />
        <div
          className="absolute w-80 h-80 bg-primary-200/5 rounded-full blur-3xl"
          style={{
            bottom: "20%",
            right: "20%",
            transform: `translate(${-mousePosition.x * 0.15}px, ${
              -mousePosition.y * 0.15
            }px)`,
            transition: "transform 0.5s ease-out",
          }}
        />
      </div>

      {/* Main Content */}
      <div className="relative z-10 grid lg:grid-cols-2 gap-8 items-center min-h-screen">
        {/* Left Column - Content */}
        <div className="space-y-8 lg:pr-8">
          <div className="space-y-6 flex flex-col lg:items-start items-center">
            {/* Title Tag with Animation */}
            <div className="relative">
              <p className="text-primary-100 tracking-wider font-semibold text-sm md:text-base animate-fadeInUp">
                {HOME_CONTENT.TITLE_TAG}
              </p>
              <div className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-primary-100 to-transparent animate-pulse" />
            </div>

            {/* Main Heading with Dynamic Text */}
            <div className="lg:text-left text-center space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-milkwhite animate-fadeInUp">
                <span className="block">{HOME_CONTENT.GREETING}</span>
                <span className="block text-5xl md:text-6xl lg:text-7xl xl:text-8xl text-primary-100 hover:text-primary-200 transition-colors duration-500 cursor-pointer transform hover:scale-105">
                  {HOME_CONTENT.NAME_HIGHLIGHT}
                </span>
                <span className="block">{HOME_CONTENT.SPEAKING}</span>
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
            <div className="lg:text-left text-center space-y-4">
              <div className="flex items-center lg:justify-start justify-center gap-4">
                <div className="w-12 h-0.5 bg-primary-100/50" />
                <p className="text-lg md:text-xl">
                  <span className="font-bold text-2xl md:text-3xl text-primary-200 hover:text-white transition-colors duration-300">
                    {HOME_CONTENT.EXPERIENCE.YEARS}
                  </span>
                </p>
                <div className="w-12 h-0.5 bg-primary-100/50" />
              </div>
              <p className="text-primary-100 text-base md:text-lg max-w-2xl">
                {HOME_CONTENT.EXPERIENCE.DESCRIPTION}
              </p>
            </div>

            {/* Interactive Skills Tags */}
            <div className="flex flex-wrap lg:justify-start justify-center gap-3 mt-8">
              {["Angular", "React", "Node.js", "AWS", "Java", "TypeScript"].map(
                (skill, index) => (
                  <div
                    key={skill}
                    className="px-4 py-2 bg-primary-100/20 border border-primary-100/40 rounded-full text-primary-100 text-sm font-medium hover:bg-primary-100/30 hover:border-primary-100/60 hover:scale-105 transition-all duration-300 cursor-pointer animate-fadeInUp"
                    style={{
                      animationDelay: `${index * 100 + 1000}ms`,
                    }}
                  >
                    {skill}
                  </div>
                )
              )}
            </div>

            {/* Call to Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mt-12">
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
            <div className="absolute w-12 h-12 -top-6 -right-6 bg-primary-100/20 rounded-full flex items-center justify-center animate-bounce-slow">
              <span className="text-2xl">⚛️</span>
            </div>
            <div
              className="absolute w-10 h-10 -bottom-4 -left-4 bg-primary-100/20 rounded-full flex items-center justify-center animate-bounce-slow"
              style={{ animationDelay: "0.5s" }}
            >
              <span className="text-xl">☁️</span>
            </div>
            <div
              className="absolute w-14 h-14 top-16 -left-8 bg-primary-100/20 rounded-full flex items-center justify-center animate-bounce-slow"
              style={{ animationDelay: "1s" }}
            >
              <span className="text-2xl">🚀</span>
            </div>
            <div
              className="absolute w-10 h-10 bottom-16 -right-2 bg-primary-100/20 rounded-full flex items-center justify-center animate-bounce-slow"
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

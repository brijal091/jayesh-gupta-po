'use client';

import React, { useState, useEffect } from 'react';
import { ABOUT_ME, JOURNEY_TIMELINE } from "@/constants/about";

export default function About() {
  const [activeCard, setActiveCard] = useState<number | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleMouseMove = (e: React.MouseEvent) => {
    setMousePosition({ x: e.clientX, y: e.clientY });
  };

  return (
    <div className="container mx-auto px-4 py-8 min-h-screen bg-gradient-to-br from-primary-50 via-black to-primary-50" onMouseMove={handleMouseMove}>
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
      {/* Animated Background Elements */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary-100/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary-100/3 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div 
          className="absolute w-4 h-4 bg-primary-100/20 rounded-full blur-sm transition-all duration-300 ease-out"
          style={{
            left: mousePosition.x - 8,
            top: mousePosition.y - 8,
          }}
        />
      </div>

      {/* Header Section */}
      <div className={`text-center mb-16 transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
        <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-primary-100 via-white to-primary-100 bg-clip-text text-transparent mb-4 animate-pulse">
          About Me
        </h1>
        <div className="w-24 h-1 bg-gradient-to-r from-transparent via-primary-100 to-transparent mx-auto mb-8"></div>
        <p className="text-base md:text-xl text-primary-200 max-w-2xl mx-auto leading-relaxed">
          Welcome to my journey page. Discover my story, skills, and the path that led me here.
        </p>
      </div>

      {/* About Me Section with Interactive Elements */}
      <div className={`mb-20 transform transition-all duration-1000 delay-200 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-semibold text-white mb-8 text-center relative">
            <span className="relative z-10">My Story</span>
            <div className="absolute inset-0 bg-gradient-to-r from-primary-100/20 to-primary-100/10 blur-xl rounded-full transform scale-150"></div>
          </h2>
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-primary-100/10 via-transparent to-primary-100/10 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
            <div className="relative bg-black/30 backdrop-blur-sm rounded-2xl p-5 md:p-8 border border-primary-100/20 hover:border-primary-100/40 transition-all duration-500 hover:shadow-2xl hover:shadow-primary-100/10">
              <p className="text-primary-200 leading-relaxed text-lg">{ABOUT_ME}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Modern Journey Timeline */}
      <div className={`mb-12 transform transition-all duration-1000 delay-400 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
        <h2 className="text-3xl md:text-4xl font-semibold text-white mb-12 text-center relative">
          <span className="relative z-10 bg-gradient-to-r from-primary-100 via-white to-primary-100 bg-clip-text text-transparent">
            My Journey
          </span>
          <div className="absolute inset-0 bg-gradient-to-r from-primary-100/20 to-primary-100/10 blur-xl rounded-full transform scale-150"></div>
        </h2>

        {/* Clean Timeline Container */}
        <div className="max-w-4xl mx-auto relative">
          {/* Central Timeline Line */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary-100/20 via-primary-100/50 to-primary-100/20 transform md:-translate-x-1/2"></div>
          
          {/* Journey Steps */}
          <div className="space-y-16">
            {JOURNEY_TIMELINE.map((item, index) => {
              const isActive = activeCard === index;
              const isHovered = hoveredCard === index;
              const isLeft = index % 2 === 0;
              
              return (
                <div
                  key={index}
                  className={`relative flex items-center ${isLeft ? 'md:flex-row' : 'md:flex-row-reverse'}`}
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  {/* Timeline Node */}
                  <div className="absolute left-6 md:left-1/2 transform -translate-x-1/2 z-20">
                    <div
                      className={`w-8 h-8 md:w-12 md:h-12 rounded-full bg-gradient-to-br from-primary-100 to-primary-100/80 border-4 border-black shadow-lg flex items-center justify-center cursor-pointer transition-all duration-500 ${
                        isActive || isHovered ? 'scale-125 shadow-primary-100/50' : 'hover:scale-110'
                      }`}
                      onClick={() => setActiveCard(isActive ? null : index)}
                    >
                      <div className={`w-4 h-4 rounded-full bg-white transition-all duration-300 ${
                        isActive ? 'animate-ping' : 'animate-pulse'
                      }`}></div>
                    </div>
                  </div>

                  {/* Content Card */}
                  <div className={`w-[calc(100%-4rem)] ml-auto md:w-5/12 md:ml-0 ${isLeft ? 'md:pr-16' : 'md:pl-16'}`}>
                    <div
                      className={`relative group cursor-pointer transition-all duration-500 ${
                        isActive ? 'scale-105' : 'hover:scale-102'
                      }`}
                      onClick={() => setActiveCard(isActive ? null : index)}
                      onMouseEnter={() => setHoveredCard(index)}
                      onMouseLeave={() => setHoveredCard(null)}
                    >
                      {/* Year Badge */}
                      <div className={`absolute -top-3 -left-3 ${isLeft ? 'md:-right-3 md:left-auto' : 'md:-left-3'} bg-gradient-to-r from-primary-100 to-primary-100/90 text-black text-xs md:text-sm font-bold px-3 py-1.5 md:px-4 md:py-2 rounded-full shadow-lg border border-white/20 z-10 transition-all duration-300 ${
                        isHovered ? 'scale-110 shadow-primary-100/30' : ''
                      }`}>
                        {item.year}
                      </div>

                      {/* Main Card */}
                      <div className={`bg-gradient-to-br from-black/40 via-black/30 to-black/60 backdrop-blur-sm rounded-2xl p-4 md:p-6 border transition-all duration-500 ${
                        isActive
                          ? 'border-primary-100/60 shadow-2xl shadow-primary-100/20'
                          : isHovered
                          ? 'border-primary-100/40 shadow-xl shadow-primary-100/10'
                          : 'border-primary-100/20 shadow-lg hover:shadow-xl hover:shadow-primary-100/10'
                      }`}>
                        {/* Card Header */}
                        <div className="mb-4">
                          <h3 className={`text-xl font-bold text-white mb-2 transition-colors duration-300 ${
                            isHovered ? 'text-primary-100' : ''
                          }`}>
                            {item.title}
                          </h3>
                          <div className={`h-1 bg-gradient-to-r from-primary-100 to-transparent rounded-full transition-all duration-500 ${
                            isActive ? 'w-full' : isHovered ? 'w-3/4' : 'w-1/2'
                          }`}></div>
                        </div>

                        {/* Description */}
                        <p className={`text-primary-200/90 leading-relaxed transition-all duration-300 ${
                          isActive ? 'text-primary-200 text-base' : 'text-sm'
                        }`}>
                          {item.description}
                        </p>

                        {/* Expandable Content */}
                        {isActive && (
                          <div className="mt-4 pt-4 border-t border-primary-100/20 animate-fadeIn">
                            <div className="flex items-center justify-between">
                              <div className="flex items-center gap-2 text-primary-100 text-xs">
                                <div className="w-2 h-2 bg-primary-100 rounded-full animate-pulse"></div>
                                <span>Milestone {index + 1} of {JOURNEY_TIMELINE.length}</span>
                              </div>
                              <div className="text-primary-200/60 text-xs">Click to minimize</div>
                            </div>
                          </div>
                        )}

                        {/* Progress Bar */}
                        <div className="mt-4">
                          <div className="flex justify-between items-center mb-2">
                            <span className="text-primary-200/60 text-xs">Progress</span>
                            <span className="text-primary-100 text-xs font-medium">
                              {Math.round(((index + 1) / JOURNEY_TIMELINE.length) * 100)}%
                            </span>
                          </div>
                          <div className="w-full bg-primary-100/10 rounded-full h-2">
                            <div 
                              className="bg-gradient-to-r from-primary-100 to-primary-100/80 h-2 rounded-full transition-all duration-1000 ease-out"
                              style={{ width: `${((index + 1) / JOURNEY_TIMELINE.length) * 100}%` }}
                            ></div>
                          </div>
                        </div>

                        {/* Interactive Glow */}
                        <div className={`absolute inset-0 rounded-2xl transition-all duration-700 pointer-events-none ${
                          isHovered ? 'bg-gradient-to-br from-primary-100/5 to-primary-100/2' : ''
                        }`}></div>
                      </div>

                      {/* Connecting Line to Timeline */}
                      <div className={`hidden md:block absolute top-6 ${isLeft ? '-right-16' : '-left-16'} w-16 h-0.5 bg-gradient-to-r ${
                        isLeft 
                          ? 'from-primary-100/30 to-transparent' 
                          : 'from-transparent to-primary-100/30'
                      } transition-all duration-500 ${isHovered ? 'opacity-100 scale-y-150' : 'opacity-60'}`}></div>
                    </div>
                  </div>

                  {/* Empty space for alternating layout */}
                  <div className="hidden md:block w-5/12"></div>
                </div>
              );
            })}
          </div>

          {/* Journey Summary */}
          <div className="mt-16 text-center">
            <div className="bg-gradient-to-br from-black/40 via-black/30 to-black/60 backdrop-blur-sm rounded-2xl p-6 border border-primary-100/20 max-w-2xl mx-auto">
              <h3 className="text-lg font-bold text-white mb-3">Journey Summary</h3>
              <p className="text-primary-200/80 text-sm">
                {JOURNEY_TIMELINE.length} milestones and counting. Each step has shaped who I am today.
              </p>
              <div className="flex justify-center gap-2 mt-4">
                {JOURNEY_TIMELINE.map((_, index) => (
                  <button
                    key={index}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      activeCard === index
                        ? 'bg-primary-100 scale-150'
                        : 'bg-primary-100/30 hover:bg-primary-100/60'
                    }`}
                    onClick={() => setActiveCard(activeCard === index ? null : index)}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
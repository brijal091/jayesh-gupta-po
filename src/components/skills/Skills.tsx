"use client";

import React, { useState, useEffect } from "react";
import { SKILLS_CATEGORIES, FEATURED_SKILLS } from "@/constants/skills";

const Skills = () => {
  const [selectedCategory, setSelectedCategory] = useState(0);
  const [animatedSkills, setAnimatedSkills] = useState(new Set<string>());

  useEffect(() => {
    // Trigger animations when category changes
    const timer = setTimeout(() => {
      const currentSkills = SKILLS_CATEGORIES[selectedCategory].skills;
      currentSkills.forEach((skill, index) => {
        setTimeout(() => {
          setAnimatedSkills((prev) => new Set([...prev, skill.name]));
        }, index * 100);
      });
    }, 200);

    return () => {
      clearTimeout(timer);
      setAnimatedSkills(new Set());
    };
  }, [selectedCategory]);

  interface Skill {
    name: string;
    level: number;
    icon: string;
  }

  const SkillBubble = ({ skill, index }: { skill: Skill; index: number }) => {
    const isAnimated = animatedSkills.has(skill.name);

    return (
      <div
        className={`relative group cursor-pointer transition-all duration-500 transform
          ${isAnimated ? "scale-100 opacity-100" : "scale-75 opacity-0"}
        `}
        style={{ transitionDelay: `${index * 50}ms` }}
      >
        {/* Skill Bubble */}
        <div
          className="relative p-6 rounded-2xl bg-gradient-to-br from-primary-100/20 to-primary-50/40 
          border border-primary-100/30 hover:border-primary-100/60 transition-all duration-300
          hover:scale-105 hover:shadow-lg hover:shadow-primary-100/20"
        >
          {/* Skill Icon */}
          <div className="text-3xl mb-3 text-center group-hover:scale-110 transition-transform duration-300">
            {skill.icon}
          </div>

          {/* Skill Name */}
          <h4 className="text-white font-semibold text-center mb-3 group-hover:text-primary-100 transition-colors">
            {skill.name}
          </h4>

          {/* Progress Bar */}
          <div className="relative">
            <div className="w-full h-2 bg-primary-50 rounded-full overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-primary-100 to-primary-200 rounded-full 
                  transition-all duration-1000 ease-out"
                style={{
                  width: isAnimated ? `${skill.level}%` : "0%",
                  transitionDelay: `${index * 100 + 300}ms`,
                }}
              />
            </div>
            <span className="absolute -top-6 right-0 text-xs text-primary-100 font-medium">
              {skill.level}%
            </span>
          </div>

          {/* Hover Glow Effect */}
          <div
            className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary-100/10 to-transparent 
            opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
          />
        </div>
      </div>
    );
  };

  const FeaturedSkillTag = ({
    skill,
    index,
  }: {
    skill: string;
    index: number;
  }) => (
    <div
      className="px-4 py-2 bg-gradient-to-r from-primary-100/20 to-primary-200/20 
        border border-primary-100/40 rounded-full text-primary-100 text-sm font-medium
        hover:border-primary-100/80 hover:bg-primary-100/30 transition-all duration-300
        cursor-pointer hover:scale-105 transform"
      style={{
        animationDelay: `${index * 100}ms`,
        animation: "fadeInUp 0.6s ease-out forwards",
      }}
    >
      {skill}
    </div>
  );

  return (
    <div className="rounded-2xl p-6">
      {/* Header */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-white mb-4 flex items-center">
          <div className="w-2 h-8 bg-primary-100 rounded-full mr-4"></div>
          Technical Arsenal
          <span className="ml-3 text-lg">🚀</span>
        </h2>

        {/* Featured Skills */}
        <div className="mb-6">
          <h3 className="text-primary-100 text-sm font-medium mb-3 opacity-80">
            💫 FEATURED EXPERTISE
          </h3>
          <div className="flex flex-wrap gap-2">
            {FEATURED_SKILLS.map((skill, index) => (
              <FeaturedSkillTag key={skill} skill={skill} index={index} />
            ))}
          </div>
        </div>
      </div>

      {/* Category Tabs */}
      <div className="flex flex-wrap gap-2 mb-8">
        {SKILLS_CATEGORIES.map((category, index) => (
          <button
            key={index}
            onClick={() => setSelectedCategory(index)}
            className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 flex items-center gap-2
              ${
                selectedCategory === index
                  ? "bg-primary-100 text-primary-50 shadow-lg transform scale-105"
                  : "bg-primary-50/50 text-primary-100 hover:bg-primary-100/20 border border-primary-100/30"
              }`}
          >
            <span className="text-lg">{category.icon}</span>
            {category.category}
          </button>
        ))}
      </div>

      {/* Skills Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {SKILLS_CATEGORIES[selectedCategory].skills.map((skill, index) => (
          <SkillBubble key={skill.name} skill={skill} index={index} />
        ))}
      </div>

      {/* Stats Section */}
      <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6">
        <div className="text-center p-4 rounded-xl bg-primary-50/30 border border-primary-100/20">
          <div className="text-2xl font-bold text-primary-100 mb-1">
            {SKILLS_CATEGORIES.reduce(
              (total, cat) => total + cat.skills.length,
              0
            )}
            +
          </div>
          <div className="text-white/80 text-sm">Technologies</div>
        </div>
        <div className="text-center p-4 rounded-xl bg-primary-50/30 border border-primary-100/20">
          <div className="text-2xl font-bold text-primary-100 mb-1">4+</div>
          <div className="text-white/80 text-sm">Years Experience</div>
        </div>
        <div className="text-center p-4 rounded-xl bg-primary-50/30 border border-primary-100/20">
          <div className="text-2xl font-bold text-primary-100 mb-1">50+</div>
          <div className="text-white/80 text-sm">Projects Delivered</div>
        </div>
        <div className="text-center p-4 rounded-xl bg-primary-50/30 border border-primary-100/20">
          <div className="text-2xl font-bold text-primary-100 mb-1">6+</div>
          <div className="text-white/80 text-sm">Certifications</div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
};

export default Skills;

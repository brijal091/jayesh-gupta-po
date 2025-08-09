"use client";

import React, { useState } from "react";
import { SKILLS_CATEGORIES } from "@/constants/skills";
import { CERTIFICATES } from "@/constants/certificates";
import FolderCard from "../common/card/FolderCard";

interface Skill {
  name: string;
  level: number;
  icon: string;
}

interface Certificate {
  id: string;
  title: string;
  issuer: string;
  year: string;
  type: string;
  description: string;
  image: string;
  skills: string[];
  credentialId: string;
  validUntil: string;
  category: string;
}

const Expertise = () => {
  // Skills state
  const [selectedSkillCategory, setSelectedSkillCategory] = useState(0);

  // Certificates state
  const [selectedCertificate, setSelectedCertificate] =
    useState<Certificate | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleCertificateClick = (certificate: Certificate) => {
    setSelectedCertificate(certificate);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedCertificate(null);
  };

  const SkillBubble = ({ skill, index }: { skill: Skill; index: number }) => {
    return (
      <div
        className="relative group cursor-pointer transition-all duration-500 transform"
        style={{ transitionDelay: `${index * 50}ms` }}
      >
        {/* Skill Bubble */}
        <div
          className="relative p-4 rounded-xl bg-gradient-to-br from-primary-100/20 to-primary-50/40 
          border border-primary-100/30 hover:border-primary-100/60 transition-all duration-300
          hover:scale-105 hover:shadow-lg hover:shadow-primary-100/20"
        >
          {/* Skill Icon */}
          <div className="text-2xl mb-2 text-center group-hover:scale-110 transition-transform duration-300">
            {skill.icon}
          </div>

          {/* Skill Name */}
          <h4 className="text-white font-medium text-center text-sm group-hover:text-primary-100 transition-colors">
            {skill.name}
          </h4>

          {/* Hover Glow Effect */}
          <div
            className="absolute inset-0 rounded-xl bg-gradient-to-br from-primary-100/10 to-transparent 
            opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
          />
        </div>
      </div>
    );
  };


  const CertificateModal = () => {
    if (!selectedCertificate || !isModalOpen) return null;

    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm">
        <div className="relative max-w-4xl max-h-[90vh] mx-4 bg-primary-50 rounded-2xl border border-primary-100/30 overflow-hidden">
          {/* Close Button */}
          <button
            onClick={closeModal}
            className="absolute top-4 right-4 z-10 w-8 h-8 bg-primary-100/20 hover:bg-primary-100/40 
              rounded-full flex items-center justify-center text-white hover:text-primary-100 
              transition-all duration-300"
          >
            ✕
          </button>

          {/* Certificate Image */}
          <div className="relative">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={selectedCertificate.image}
              alt={selectedCertificate.title}
              className="w-full h-auto max-h-[60vh] object-contain"
              onError={(e) => {
                // Fallback placeholder if image doesn't exist
                const target = e.target as HTMLImageElement;
                target.src = `data:image/svg+xml;base64,${btoa(`
                  <svg width="800" height="600" xmlns="http://www.w3.org/2000/svg">
                    <rect width="100%" height="100%" fill="#1f191a"/>
                    <rect x="50" y="50" width="700" height="500" fill="#ae9c96" opacity="0.1" rx="20"/>
                    <text x="400" y="200" text-anchor="middle" fill="#ae9c96" font-size="32" font-family="Arial">📜</text>
                    <text x="400" y="250" text-anchor="middle" fill="#f4f3f2" font-size="24" font-family="Arial">${selectedCertificate.title}</text>
                    <text x="400" y="300" text-anchor="middle" fill="#ae9c96" font-size="18" font-family="Arial">Issued by: ${selectedCertificate.issuer}</text>
                    <text x="400" y="350" text-anchor="middle" fill="#ae9c96" font-size="16" font-family="Arial">Year: ${selectedCertificate.year}</text>
                    <text x="400" y="400" text-anchor="middle" fill="#ae9c96" font-size="14" font-family="Arial">Credential ID: ${selectedCertificate.credentialId}</text>
                  </svg>
                `)}`;
              }}
            />
          </div>

          {/* Certificate Details */}
          <div className="p-6 bg-gradient-to-t from-primary-50 to-transparent">
            <div className="grid md:grid-cols-2 gap-6">
              {/* Left Column */}
              <div>
                <h3 className="text-2xl font-bold text-white mb-2">
                  {selectedCertificate.title}
                </h3>
                <p className="text-primary-100 text-lg mb-2">
                  {selectedCertificate.issuer} • {selectedCertificate.year}
                </p>
                <p className="text-white/80 mb-4">
                  {selectedCertificate.description}
                </p>

                {/* Skills */}
                <div className="mb-4">
                  <h4 className="text-primary-100 font-semibold mb-2">
                    Skills Covered:
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedCertificate.skills.map((skill, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-primary-100/20 text-primary-100 rounded-full text-sm"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right Column */}
              <div>
                <div className="space-y-4">
                  <div className="p-4 bg-primary-100/10 rounded-xl border border-primary-100/20">
                    <h4 className="text-primary-100 font-semibold mb-1">
                      Credential ID
                    </h4>
                    <p className="text-white font-mono text-sm">
                      {selectedCertificate.credentialId}
                    </p>
                  </div>

                  <div className="p-4 bg-primary-100/10 rounded-xl border border-primary-100/20">
                    <h4 className="text-primary-100 font-semibold mb-1">
                      Valid Until
                    </h4>
                    <p className="text-white">
                      {selectedCertificate.validUntil}
                    </p>
                  </div>

                  <div className="p-4 bg-primary-100/10 rounded-xl border border-primary-100/20">
                    <h4 className="text-primary-100 font-semibold mb-1">
                      Type
                    </h4>
                    <p className="text-white">{selectedCertificate.type}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="rounded-2xl p-6">
      {/* Skills Section */}
      <div className="mb-16">
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-white mb-4 flex items-center">
            <div className="w-2 h-8 bg-primary-100 rounded-full mr-4"></div>
            Technical Skills
          </h2>

          <div className="mb-6 flex flex-col gap-8">
            {/* Skills Stats Section */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
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
                <div className="text-2xl font-bold text-primary-100 mb-1">
                  4+
                </div>
                <div className="text-white/80 text-sm">Years Experience</div>
              </div>
              <div className="text-center p-4 rounded-xl bg-primary-50/30 border border-primary-100/20">
                <div className="text-2xl font-bold text-primary-100 mb-1">
                  50+
                </div>
                <div className="text-white/80 text-sm">Projects Delivered</div>
              </div>
              <div className="text-center p-4 rounded-xl bg-primary-50/30 border border-primary-100/20">
                <div className="text-2xl font-bold text-primary-100 mb-1">
                  6+
                </div>
                <div className="text-white/80 text-sm">Certifications</div>
              </div>
            </div>
          
          </div>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap gap-6 mb-8">
          {SKILLS_CATEGORIES.map((category, index) => (
            <button
              key={index}
              onClick={() => setSelectedSkillCategory(index)}
              className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 flex items-center gap-2
                ${
                  selectedSkillCategory === index
                    ? "bg-primary-100 text-primary-50 shadow-lg transform scale-105"
                    : "bg-primary-50/50 text-primary-100 hover:bg-primary-100/20 border border-primary-100/30"
                }`}
            >
              {category.category}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-4 mb-12">
          {SKILLS_CATEGORIES[selectedSkillCategory].skills.map(
            (skill, index) => (
              <SkillBubble key={skill.name} skill={skill} index={index} />
            )
          )}
        </div>
      </div>

      {/* Certificates Section */}
      <div>
        <h2 className="text-3xl font-bold text-white mb-4 flex items-center">
          <div className="w-2 h-8 bg-primary-100 rounded-full mr-4"></div>
          Professional Certifications
        </h2>

        <p className="text-primary-100 mb-8 opacity-80">
          Industry-recognized certifications validating my expertise across
          various technologies
        </p>

        {/* Certificates Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 gap-y-32">
          {CERTIFICATES.length > 0 &&
            CERTIFICATES.map((certificate) => (
              <FolderCard
                key={certificate.id}
                year={certificate.year}
                title={certificate.title}
                company={certificate.issuer}
                type={certificate.category}
                description={certificate.description}
                image={certificate.image}
                onClick={() => handleCertificateClick(certificate)}
              />
            ))}
        </div>
      </div>

      {/* Certificate Modal */}
      <CertificateModal />

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

export default Expertise;

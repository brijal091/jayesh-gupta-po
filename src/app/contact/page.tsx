"use client";

import { CV_IMAGE, CV_LINK, SOCIAL_LINKS } from "@/constants/constants";
import React, { useState } from "react";
import Image from "next/image";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    subject: "",
    message: "",
    purpose: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const purposeOptions = [
    { value: "project-consultation", label: "Project Consultation" },
    { value: "web-development", label: "Web Development" },
    { value: "mentor-session", label: "Mentor Me Please" },
    { value: "speaker-invite", label: "Invite Me to Speak" },
    { value: "host-event", label: "Host an Event" },
    { value: "freelancing", label: "Freelancing Opportunity" },
    { value: "collaboration", label: "Creative Collaboration" },
    { value: "partnership", label: "Business Partnership" },
    { value: "interview", label: "Media Interview" },
    { value: "feedback", label: "Feedback & Suggestions" },
    { value: "other", label: "Something Else Amazing" },
  ];

  const handleInputChange = (e: {
    target: { name: string; value: string };
  }) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async () => {
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 2000));

    alert("Thanks for reaching out! I'll get back to you soon.");
    setFormData({ name: "", subject: "", message: "", purpose: "" });
    setIsSubmitting(false);
  };

  const selectedPurpose = purposeOptions.find(
    (option) => option.value === formData.purpose
  );

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Header Section */}
      <div className="text-center mb-12">
        <p className="text-primary-200 text-sm font-medium tracking-wider uppercase mb-4">
          GET IN TOUCH
        </p>
        <h1 className="text-white text-6xl font-bold mb-8">Contact.</h1>
        <p className="text-primary-200 text-lg mb-16 max-w-2xl mx-auto">
          I&apos;d love to hear from you! Whether you have a project in mind, want
          to collaborate, or just want to say hello.
        </p>
      </div>

      {/* Hero Badge */}
      <div className="text-center mb-12">
        <div className="inline-flex items-center gap-2 bg-primary-100/20 px-6 py-3 rounded-full border border-primary-100/30">
          <img className="h-12 w-12" src={"/contact-us.svg"} alt="Contact Us" />
          <span className="text-primary-100 font-medium text-lg">
            Let&apos;s Create Magic Together
          </span>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-12">
        {/* Left Section - Resume Download */}
        <div className="flex flex-col">
          <div className="bg-black/30 backdrop-blur-xl h-full rounded-2xl p-10 border-2 border-primary-100/30 w-full hover:border-primary-100/50 transition-all duration-300">
            {/* <h1 className="text-white text-5xl font-semibold">My Careear</h1> */}
            <div className="flex flex-col h-full">
              {/* Resume Image - Made bigger with padding and border */}
              <div className="flex items-center justify-center">
                <div className="relative group w-full mb-12">
                  <a
                    href={CV_LINK}
                    download
                    className="block transition-all duration-300 hover:scale-105"
                  >
                    <div className="relative border border-primary-100/40 rounded-xl overflow-hidden group-hover:border-primary-100/60 transition-all duration-300 p-4 bg-white/5">
                      <Image
                        src={CV_IMAGE}
                        alt="Resume Preview"
                        height={400}
                        width={320}
                        className="h-auto w-full rounded-lg shadow-lg"
                        unoptimized
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center rounded-xl">
                        <span className="text-white font-semibold bg-primary-100/20 backdrop-blur-sm px-4 py-2 rounded-lg border border-primary-100/30">
                          Download Resume PDF
                        </span>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
              
              {/* Social Media Icons - Positioned at the bottom */}
              <div className="mt-auto">
              
                <div className="flex items-center justify-center gap-4">
                  {SOCIAL_LINKS.map((social, index) => (
                    <a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 rounded-full border-2 border-primary-100 flex items-center justify-center text-primary-100 hover:border-primary-100 hover:bg-primary-100/10 transition-all duration-300 hover:scale-110"
                      title={social.name}
                    >
                      {social.icon && <social.icon />}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Section - Contact Form */}
        <div className="bg-black/30 backdrop-blur-xl rounded-2xl p-8 md:p-12 border-2 border-primary-100/30 hover:border-primary-100/50 transition-all duration-300">
          <div className="space-y-8">
            <div className="grid md:grid-cols-1 gap-8">
              {/* Name Field */}
              <div className="space-y-2">
                <label className="flex items-center gap-2 text-primary-200 font-medium mb-3">
                  Your Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full px-4 py-4 bg-black/40 border-2 border-primary-100/30 rounded-xl text-white placeholder-primary-100/60 focus:border-primary-100 focus:ring-0 focus:outline-none transition-all duration-300"
                  placeholder="What should I call you?"
                  required
                />
              </div>

              {/* Purpose Dropdown */}
              <div className="space-y-2">
                <label
                  htmlFor="purpose"
                  className="flex items-center gap-2 text-primary-200 font-medium mb-3"
                >
                  What&apos;s on Your Mind?
                </label>
                <select
                  id="purpose"
                  value={selectedPurpose?.value || ""}
                  onChange={(e) => handleInputChange(e)}
                  name="purpose"
                  className="w-full px-4 pr-10 py-4 bg-black/40 border-2 border-primary-100/30 rounded-xl text-white focus:border-primary-100 focus:outline-none transition-all duration-300 appearance-none bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNNiA5TDEyIDE1TDE4IDkiIHN0cm9rZT0iI2FlOWM5NiIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz48L3N2Zz4=')] bg-no-repeat bg-[center_right_1rem]"
                  style={{
                    backgroundSize: "20px",
                    cursor: "pointer",
                  }}
                >
                  <option value="" disabled className="text-gray-400">
                    Choose your adventure...
                  </option>
                  {purposeOptions.map((option) => (
                    <option
                      key={option.value}
                      value={option.value}
                      className="bg-primary-50 text-white py-2"
                    >
                      {option.label}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Subject Field */}
            <div className="space-y-2">
              <label className="flex items-center gap-2 text-primary-200 font-medium mb-3">
                Subject Line
              </label>
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleInputChange}
                className="w-full px-4 py-4 bg-black/40 border-2 border-primary-100/30 rounded-xl text-white placeholder-primary-100/60 focus:border-primary-100 focus:ring-0 focus:outline-none transition-all duration-300"
                placeholder="Give me a hint about what's coming..."
                required
              />
            </div>

            {/* Message Field */}
            <div className="space-y-2">
              <label className="flex items-center gap-2 text-primary-200 font-medium mb-3">
                Your Message
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                rows={6}
                className="w-full px-4 py-4 bg-black/40 border-2 border-primary-100/30 rounded-xl text-white placeholder-primary-100/60 focus:border-primary-100 focus:ring-0 focus:outline-none transition-all duration-300 resize-none"
                placeholder="Share your vision, ideas, or just say hello! The more details, the better I can help you bring it to life..."
                required
              />
            </div>

            {/* Submit Button */}
            <div className="pt-4">
              <button
                onClick={handleSubmit}
                disabled={
                  isSubmitting ||
                  !formData.name ||
                  !formData.subject ||
                  !formData.message ||
                  !formData.purpose
                }
                className="w-full md:w-auto px-12 py-4 bg-primary-100 text-primary-50 font-bold rounded-xl hover:bg-primary-100/90 focus:outline-none focus:ring-4 focus:ring-primary-100/30 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 shadow-lg hover:shadow-primary-100/20"
              >
                <div className="flex items-center justify-center gap-3">
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-primary-50/30 border-t-primary-50 rounded-full animate-spin"></div>
                      <span>Sending Message...</span>
                    </>
                  ) : (
                    <>
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                      </svg>
                      <span>Send Message</span>
                    </>
                  ) }
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
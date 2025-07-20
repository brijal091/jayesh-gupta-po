"use client";

import Footer from "@/components/footer/Footer";
import Navbar from "@/components/navbar/Navbar";
import React, { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    subject: "",
    message: "",
    purpose: "",
  });
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
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

  const handlePurposeSelect = (value: string, label: string) => {
    setFormData((prev) => ({ ...prev, purpose: value }));
    setIsDropdownOpen(false);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
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
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 pt-20">
        <div className="container mx-auto px-4 py-8">
          <h1 className="text-white text-4xl font-bold  mb-8">
            Let&apos;s Talk
          </h1>
          <p className="text-white text-lg mb-16">
            I&apos;d love to hear from you! Whether you have a project in mind,
            want to collaborate, or just want to say hello.
          </p>
          {/* Hero Section */}
          <div className="text-center">
            <div className="inline-flex items-center gap-2 bg-primary-100/20 px-6 py-3 rounded-full mb-8 border border-primary-100/30">
              <img className="h-12 w-12" src={'/contact-us.svg'} alt="Contact Us"/>
              <span className="text-primary-100 font-medium text-lg">
                Let&apos;s Create Magic Together 
              </span>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-black/30 backdrop-blur-xl rounded-2xl p-8 md:p-12 border border-primary-100/20">
            <div className="space-y-8">
              <div className="grid md:grid-cols-2 gap-8">
                {/* Name Field */}
                <div className="space-y-2">
                  <label className="flex items-center gap-2 text-primary-200 font-medium mb-3">
                    {/* <User className="w-4 h-4 text-primary-100" /> */}
                    Your Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-4 bg-black/40 border border-primary-100/30 rounded-xl text-white placeholder-primary-100/60 focus:border-primary-100 focus:ring-0 focus:outline-none transition-all duration-300"
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
                    onChange={(e) => {
                      const selectedOption = purposeOptions.find(
                        (opt) => opt.value === e.target.value
                      );
                      handlePurposeSelect(
                        selectedOption.value,
                        selectedOption.label
                      );
                    }}
                    className="w-full px-4 py-4 bg-black/40 border border-primary-100/30 rounded-xl text-white focus:border-primary-100 focus:outline-none transition-all duration-300"
                  >
                    <option value="" disabled>
                      Choose your adventure...
                    </option>
                    {purposeOptions.map((option) => (
                      <option key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Subject Field */}
              <div className="space-y-2">
                <label className="flex items-center gap-2 text-primary-200 font-medium mb-3">
                  {/* <MessageSquare className="w-4 h-4 text-primary-100" /> */}
                  Subject Line
                </label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  className="w-full px-4 py-4 bg-black/40 border border-primary-100/30 rounded-xl text-white placeholder-primary-100/60 focus:border-primary-100 focus:ring-0 focus:outline-none transition-all duration-300"
                  placeholder="Give me a hint about what's coming..."
                  required
                />
              </div>

              {/* Message Field */}
              <div className="space-y-2">
                <label className="flex items-center gap-2 text-primary-200 font-medium mb-3">
                  {/* <MessageSquare className="w-4 h-4 text-primary-100" /> */}
                  Your Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={6}
                  className="w-full px-4 py-4 bg-black/40 border border-primary-100/30 rounded-xl text-white placeholder-primary-100/60 focus:border-primary-100 focus:ring-0 focus:outline-none transition-all duration-300 resize-none"
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
                  className="w-full md:w-auto px-12 py-4 bg-primary-100 text-primary-50 font-bold rounded-xl hover:bg-primary-100/90 focus:outline-none focus:ring-4 focus:ring-primary-100/30 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 shadow-lg"
                >
                  <div className="flex items-center justify-center gap-3">
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-primary-50/30 border-t-primary-50 rounded-full animate-spin"></div>
                        <span>Sending Message...</span>
                      </>
                    ) : (
                      <>
                        {/* <Send className="w-5 h-5" /> */}
                        <span>Send Message</span>
                      </>
                    )}
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

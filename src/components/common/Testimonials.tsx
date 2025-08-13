"use client";

import { TESTIMONIALS_DATA } from "@/constants/about";
import React, { useState } from "react";

// Paste the testimonialsData array here

const NOTES_PER_PAGE = 12;

const Testimonials = () => {
  const [page, setPage] = useState(0);

  const pageCount = Math.ceil(TESTIMONIALS_DATA.length / NOTES_PER_PAGE);

  const handlePrev = () => setPage((prev) => Math.max(prev - 1, 0));
  const handleNext = () => setPage((prev) => Math.min(prev + 1, pageCount - 1));

  // Paginated data
  const pageNotes = TESTIMONIALS_DATA.slice(
    page * NOTES_PER_PAGE,
    (page + 1) * NOTES_PER_PAGE
  );

  // Predefined rotations for consistent look
  const rotations = [2, -1, 1, -2, -1, 2, 1, -1, 2, -2, 1, -1];

  return (
    <div className="flex flex-col items-center min-h-screen py-8">
      <div className="text-center mb-16">
        <h2 className="mb-8 text-6xl font-bold font-milkwhite text-primary-200">
          Wall of Love
        </h2>
        <p className="text-primary-100 text-xl text-center mx-auto">
          We are grateful for our amazing customers! See what they have to say
          about our services.
        </p>
      </div>

      {/* Wall Container with Navigation */}
      <div className="relative">
        {/* Previous Button */}
        <button
          onClick={handlePrev}
          disabled={page === 0}
          className="absolute left-[-50px] top-1/2 transform -translate-y-1/2 z-10 bg-primary-100 text-primary-50 p-3 rounded-full shadow-lg disabled:opacity-50 hover:bg-primary-50 hover:text-primary-100 transition-all duration-300"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        {/* Wall Container */}
        <div className="p-6 w-full ">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-none">
            {pageNotes.map((t, idx) => (
              <div
                key={idx}
                className="group cursor-pointer"
                style={{
                  transform: `rotate(${rotations[idx % rotations.length]}deg)`,
                }}
              >
                {/* Polaroid Card - Consistent sizing for all cards */}
                <div className="bg-black/20 backdrop-blur-md border-2 border-primary-100 shadow-lg p-6 w-80 h-[440px] transition-all duration-300 hover:scale-105 hover:rotate-0 hover:shadow-xl hover:z-10 relative">
                  
                  {/* Photo Area - Fixed height for consistency */}
                  <div className="h-64 bg-gray-100 mb-6 overflow-hidden flex-shrink-0">
                    <img
                      src={t.clientImage}
                      alt={t.clientName}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  
                  {/* Text Area - Fixed height for consistency */}
                  <div className="h-32 flex flex-col justify-between px-2 flex-shrink-0">
                    <div className="text-center flex-1 flex items-center justify-center">
                      <p className="text-white text-lg font-handwriting leading-relaxed italic" style={{ fontFamily: 'Kalam, cursive' }}>
                        {t.review.length > 80 ? t.review.substring(0, 80) + '...' : t.review}
                      </p>
                    </div>
                    <div className="text-center mt-4 pb-2">
                      <p className="text-white text-sm font-handwriting opacity-80" style={{ fontFamily: 'Kalam, cursive' }}>
                        - {t.clientName}, {t.clientLocation}
                      </p>
                    </div>
                  </div>

                  {/* Hover Overlay with Full Review */}
                  <div className="absolute inset-0 bg-black/80 backdrop-blur-sm p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center">
                    <div className="text-center text-white">
                      <div className="flex items-center justify-center mb-4">
                        <img
                          src={t.clientImage}
                          alt={t.clientName}
                          className="w-12 h-12 rounded-full border-2 border-white mr-3"
                        />
                        <div className="text-left">
                          <h4 className="font-semibold">{t.clientName}</h4>
                          <p className="text-sm text-gray-300">{t.clientLocation}</p>
                        </div>
                      </div>
                      <p className="text-lg leading-relaxed italic">
                        {t.review}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Next Button */}
        <button
          onClick={handleNext}
          disabled={page === pageCount - 1}
          className="absolute right-[-50px] top-1/2 transform -translate-y-1/2 z-10 bg-primary-100 text-primary-50 p-3 rounded-full shadow-lg disabled:opacity-50 hover:bg-primary-50 hover:text-primary-100 transition-all duration-300"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>

      {/* Page Indicator */}
      <div className="mt-8 flex items-center space-x-2">
        {Array.from({ length: pageCount }, (_, i) => (
          <button
            key={i}
            onClick={() => setPage(i)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              page === i 
                ? 'bg-primary-100' 
                : 'bg-primary-100/30 hover:bg-primary-100/60'
            }`}
          />
        ))}
      </div>
      
      <div className="text-center mt-4">
        <span className="text-primary-100 text-sm">
          Page {page + 1} of {pageCount}
        </span>
      </div>
    </div>
  );
};

export default Testimonials;
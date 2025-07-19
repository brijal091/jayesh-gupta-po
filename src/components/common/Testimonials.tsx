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

      {/* Wall Container with Border and Navigation */}
      <div className="relative">
        {/* Previous Button */}
        <button
          onClick={handlePrev}
          disabled={page === 0}
          className="absolute left-[-80px] top-1/2 transform -translate-y-1/2 z-10 bg-primary-100 text-primary-50 p-3 rounded-full shadow-lg disabled:opacity-50 hover:bg-primary-50 hover:text-primary-100 transition-all duration-300"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        {/* Wall Border */}
        <div className="border-4 border-primary-100 rounded-2xl p-8 bg-primary-200/5 backdrop-blur-sm">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {pageNotes.map((t, idx) => (
              <div
                key={idx}
                className="group cursor-pointer"
                style={{
                  transform: `rotate(${rotations[idx % rotations.length]}deg)`,
                }}
              >
                {/* Polaroid Card */}
                <div className="bg-white/90 backdrop-blur-sm shadow-2xl rounded-lg p-4 w-60 transition-all duration-300 hover:scale-110 hover:rotate-0 hover:bg-white hover:shadow-3xl hover:z-10">
                  
                  {/* Photo Area */}
                  <div className="aspect-square bg-gray-100 rounded mb-4 overflow-hidden border border-gray-200">
                    <img
                      src={t.clientImage}
                      alt={t.clientName}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  
                  {/* Handwritten Caption Area */}
                  <div className="min-h-[80px] flex flex-col justify-center">
                    <div className="text-center">
                      <p className="text-primary-50 text-lg font-handwriting leading-tight mb-2" style={{ fontFamily: 'Kalam, cursive' }}>
                        {t.clientName} from {t.clientLocation}
                      </p>
                      <p className="text-primary-50 text-base font-handwriting italic" style={{ fontFamily: 'Kalam, cursive' }}>
                        {t.review.length > 60 ? t.review.substring(0, 60) + '...' : t.review}
                      </p>
                    </div>
                  </div>

                  {/* Hover Overlay with Full Review */}
                  <div className="absolute inset-0 bg-black/80 backdrop-blur-sm rounded-lg p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center">
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
                      <p className="text-sm leading-relaxed italic">
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
          className="absolute right-[-80px] top-1/2 transform -translate-y-1/2 z-10 bg-primary-100 text-primary-50 p-3 rounded-full shadow-lg disabled:opacity-50 hover:bg-primary-50 hover:text-primary-100 transition-all duration-300"
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
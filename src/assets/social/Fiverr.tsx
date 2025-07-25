import React from "react";

const Fiverr = ({ size = 32, color = "white" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    aria-label="Fiverr logo"
  >
    {/* Duotone background shape */}
    <path 
      d="M15 3h-2a6 6 0 0 0-6 6h-3v4h3v8h4v-7h4v7h4v-11h-8v-1.033a1.967 1.967 0 0 1 2-1.967h2v-4z"
      fill="white"
      opacity="0.2"
    />
    {/* Outline path */}
    <path 
      d="M15 3h-2a6 6 0 0 0-6 6h-3v4h3v8h4v-7h4v7h4v-11h-8v-1.033a1.967 1.967 0 0 1 2-1.967h2v-4z"
      stroke={color}
      strokeWidth="2"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default Fiverr;

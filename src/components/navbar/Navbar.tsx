"use client";
import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { NAME, NAV_ITEMS } from "@/constants/constants";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [hoveredItem, setHoveredItem] = useState<string|null>(null);
  const pathname = usePathname();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 h-20 backdrop-blur-[100px] text-white">
      <div className="container mx-auto px-4 h-full flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="text-4xl font-bold font-milkwhite">
          {NAME}
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          {NAV_ITEMS.map((item) => (
            <div
              key={item.name}
              className="relative"
              onMouseEnter={() => setHoveredItem(item.name)}
              onMouseLeave={() => setHoveredItem(null)}
            >
              {item.download ? (
                <a
                  href={item.href}
                  download
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`text-lg transition-colors duration-300 hover:text-primary-100 block ${
                    pathname === item.href ? "text-primary-100" : "text-white"
                  }`}
                >
                  {item.name}
                </a>
              ) : (
                <Link
                  href={item.href}
                  className={`text-lg transition-colors duration-300 hover:text-primary-100 block ${
                    pathname === item.href ? "text-primary-100" : "text-white"
                  }`}
                >
                  {item.name}
                </Link>
              )}

              {/* SVG Underline - shows for active or hovered items */}
              <div
                className={`w-full absolute -bottom-2 left-1/2 transform -translate-x-1/2 transition-opacity duration-300 ${
                  pathname === item.href || hoveredItem === item.name
                    ? "opacity-100"
                    : "opacity-0"
                }`}
              >
                <img
                  src="/assets/underline.svg"
                  alt=""
                  className="w-full h-auto transition-opacity duration-300"
                />
              </div>
            </div>
          ))}
        </div>

        {/* Mobile Hamburger Button */}
        <button
          className="md:hidden flex flex-col items-center justify-center w-8 h-8 space-y-1"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <div
            className={`w-6 h-0.5 bg-white transition-all duration-300 ${
              isMenuOpen ? "rotate-45 translate-y-1.5" : ""
            }`}
          ></div>
          <div
            className={`w-6 h-0.5 bg-white transition-all duration-300 ${
              isMenuOpen ? "opacity-0" : ""
            }`}
          ></div>
          <div
            className={`w-6 h-0.5 bg-white transition-all duration-300 ${
              isMenuOpen ? "-rotate-45 -translate-y-1.5" : ""
            }`}
          ></div>
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden absolute top-20 left-0 right-0 backdrop-blur-[100px] border-t border-white/10 transition-all duration-300 ${
          isMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      >
        <div className="container mx-auto px-4 py-6">
          {NAV_ITEMS.map((item) => (
            <div key={item.name} className="relative">
              {item.download ? (
                <a
                  href={item.href}
                  download
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`text-lg transition-colors duration-300 hover:text-primary-100 block ${
                    pathname === item.href ? "text-primary-100" : "text-white"
                  }`}
                >
                  {item.name}
                </a>
              ) : (
                <Link
                  href={item.href}
                  className={`text-lg transition-colors duration-300 hover:text-primary-100 block ${
                    pathname === item.href ? "text-primary-100" : "text-white"
                  }`}
                >
                  {item.name}
                </Link>
              )}

              {/* SVG Underline for mobile - only shows for active items */}
              {pathname === item.href && (
                <div className="absolute bottom-2 left-0 w-full">
                  <img
                    src="/assets/underline.svg"
                    alt=""
                    className="w-full h-auto transition-opacity duration-300"
                  />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

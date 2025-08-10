import React from "react";
import { SOCIAL_LINKS } from "@/constants/constants";

const Footer = () => {
  return (
    <footer className="bg-primary-50 w-full py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Mobile: Stacked layout */}
        <div className="flex flex-col items-center justify-center space-y-6 md:hidden">
          {SOCIAL_LINKS.map((link) => (
            <a
              key={link.name}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 hover:opacity-80 transition-opacity duration-200 font-milkwhite text-primary-200 text-xl"
            >
              <span className="text-primary-200">{link.name}</span>
              <link.icon />
            </a>
          ))}
        </div>

        {/* Desktop: Horizontal layout with dividers */}
        <div className="hidden md:flex items-center justify-center">
          <div className="flex items-center">
            {SOCIAL_LINKS.map((link, idx) => (
              <React.Fragment key={link.name}>
                <a
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 hover:opacity-80 transition-opacity duration-200 font-milkwhite text-primary-200 text-2xl px-4"
                >
                  <span className="text-primary-200">{link.name}</span>
                  <link.icon />
                </a>
                {idx < SOCIAL_LINKS.length - 1 && (
                  <div className="h-8 border-l border-white/30 mx-2"></div>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>

        {/* Tablet: Horizontal but more compact */}
        <div className="hidden sm:flex md:hidden items-center justify-center">
          <div className="flex items-center flex-wrap justify-center gap-6">
            {SOCIAL_LINKS.map((link) => (
              <a
                key={link.name}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:opacity-80 transition-opacity duration-200 font-milkwhite text-primary-200 text-lg"
              >
                <span className="text-primary-200">{link.name}</span>
                <link.icon />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
import React from "react";
import { SOCIAL_LINKS } from "@/constants/constants";

const Footer = () => {
  return (
    <footer className="bg-primary-50 w-full py-6 px-4 flex flex-col md:flex-row items-center justify-center font-milkwhite text-primary-200 text-2xl">
      <div className="flex items-center gap-8 w-full md:w-auto justify-center md:justify-start">
        {SOCIAL_LINKS.map((link, idx) => (
          <React.Fragment key={link.name}>
            <a
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:opacity-80 transition"
            >
              <span className="text-primary-200">{link.name}</span>
            {<link.icon />}
            </a>
            {idx < SOCIAL_LINKS.length - 1 && (
              <span className="hidden md:block h-6 border-l border-white opacity-30 mx-4"></span>
            )}
          </React.Fragment>
        ))}
      </div>
    </footer>
  );
};

export default Footer;

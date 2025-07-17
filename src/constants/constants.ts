import Github from "@/assets/social/Github";
import Insagram from "@/assets/social/Insagram";
import LinkedIn from "@/assets/social/LinkedIn";
import Twitter from "@/assets/social/Twitter";

// About person
export const NAME = "Jayesh Gupta";
// Navigation items for the website
export const NAV_ITEMS = [
  { name: "Home", href: "/" },
  { name: "Work", href: "/work" },
  { name: "About", href: "/about" },
  { name: "Blog", href: "/blog" },
  { name: "Let's Talk", href: "/contact" },
];

// Social media links
export const SOCIAL_LINKS = [
  {
    name: "LINKEDIN",
    href: "https://www.linkedin.com/",
    icon: LinkedIn,
    alt: "LinkedIn",
  },
  {
    name: "GITHUB",
    href: "https://www.linkedin.com/",
    icon: Github,
    alt: "Github",
  },
  {
    name: "INSTAGRAM",
    href: "https://www.instagram.com/",
    icon: Insagram,
    alt: "Instagram",
  },
  {
    name: "X",
    href: "https://twitter.com/",
    icon: Twitter,
    alt: "X",
  },
];

// Home page content
export const HOME_CONTENT = {
  TITLE_TAG: "FullStack Developer",
  GREETING: "HELLO, I'M",
  NAME_HIGHLIGHT: "Jayesh",
  SPEAKING: "SPEAKING",
  EXPERIENCE: {
    YEARS: "4 yrs",
    DESCRIPTION: "of Building Scalable, Seamless & Smart Solutions",
  },
  SCROLL_TEXT: "SCROLL • SCROLL • SCROLL",
};

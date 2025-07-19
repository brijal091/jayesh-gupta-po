import Github from "@/assets/social/Github";
import Insagram from "@/assets/social/Insagram";
import LinkedIn from "@/assets/social/LinkedIn";
import Twitter from "@/assets/social/Twitter";
import dayjs from "dayjs";

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
    href: "https://in.linkedin.com/in/jayeshgupta91",
    icon: LinkedIn,
    alt: "LinkedIn",
  },
  {
    name: "GITHUB",
    href: "https://github.com/jayeshgupta91",
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
  TITLE_TAG: "CEO at Belivers Technologies . FullStack Developer",
  GREETING: "HELLO, I'M",
  NAME_HIGHLIGHT: "Jayesh",
  SPEAKING: "SPEAKING ...",
  EXPERIENCE: {
    YEARS: `${dayjs().diff(dayjs('2021-01-01'), 'year')} yrs`,
    DESCRIPTION: "of Building Scalable, Seamless & Smart Solutions",
  },
};

export const SERVICES = [
  {
    title: "Strategic Consultancy",
    description: "Unlock growth and efficiency with targeted, insightful consultation. Jayesh offers tailored advice to help businesses overcome challenges, streamline operations, and achieve sustainable success. His approach blends industry knowledge with practical solutions to deliver measurable impact for every client."
  },
  {
    title: "Dynamic Web Development",
    description: "Build a powerful online presence with intuitive, engaging, and scalable web solutions. From dynamic websites to robust web applications, Jayesh crafts digital experiences that align seamlessly with your brand and business goals—always prioritizing user experience and cutting-edge technology."
  },
  {
    title: "Automation & Scripting Solutions",
    description: "Supercharge productivity by automating repetitive tasks and workflows. Jayesh designs smart automation and scripting tools customized to your unique needs, helping you save time, reduce errors, and focus on what truly matters. Experience seamless integration and smooth execution for your digital ecosystem."
  },
  {
    title: "Event Hosting & Guest Speaking",
    description: "Elevate your next event with an engaging host or visionary speaker. Jayesh brings energy, clarity, and expert perspective to panels, workshops, and conferences. Whether you need a moderator or a keynote speaker, he delivers memorable, actionable insights to inspire any audience."
  },
  {
    title: "Data Analytics & Insights",
    description: "Transform raw data into actionable business intelligence. Jayesh helps organizations leverage data analytics for smarter decision-making, performance tracking, and strategic growth. His ability to communicate complex insights in a clear, practical way empowers clients to stay ahead of the competition."
  },
  {
    title: "Cloud Solutions & Integration",
    description: "Guide your digital transformation with seamless cloud adoption and integration services. Jayesh offers expertise in cloud architecture, migration, security, and management, ensuring your business is agile, scalable, and future-ready."
  },
  {
    title: "Technical Training & Workshops",
    description: "Empower your team with hands-on training in modern technologies, development best practices, and automation tools. Jayesh’s interactive workshops cater to varying skill levels, focusing on practical, up-to-date knowledge that drives team competency and innovation."
  }
];

import { ABOUT_ME, JOURNEY_TIMELINE } from "@/constants/about";

export default function About() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-white mb-8">About Me</h1>
      <div className="text-white">
        <p className="text-lg mb-4">
          Welcome to my journey page. Here you can learn more about my
          background, skills, and experience.
        </p>
        {/* Your about section */}
        <p>{ABOUT_ME}</p>
        <div className="flex gap-2 p-4">
          {JOURNEY_TIMELINE.map((item, index) => (
            <div key={index} className="border border-white/10 h-72 w-56 p-2">
              <img src="/" alt="img" className="h-40 w-full object-cover" />
              <p className="font-semibold self-end">{item.title}</p>
              {/* <p>{item.description}</p> */}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

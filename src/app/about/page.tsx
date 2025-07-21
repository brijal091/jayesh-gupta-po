import { ABOUT_ME, JOURNEY_TIMELINE } from "@/constants/about";

export default function About() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-white mb-8">About Me</h1>
      <div className="text-white">
        <p className="text-lg mb-4">
          Welcome to my about page. Here you can learn more about my background,
          skills, and experience.
        </p>
      {/* Your about section */}
      <div className="container mx-auto px-4 py-12">
        <div className="mt-20">
          <div className="relative mx-auto">
            {/* Connecting lines SVG */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none z-0" viewBox="0 0 1000 600">
              {/* Journey path connecting all cards */}
              <path
                d="M 167 200 
                   Q 250 180 333 200
                   Q 400 220 500 200
                   Q 600 180 667 200
                   Q 700 250 650 320
                   Q 600 380 500 400
                   Q 400 380 350 320"
                stroke="white"
                strokeWidth="2"
                strokeDasharray="8,4"
                fill="none"
                opacity="0.6"
                className="animate-pulse"
              />
              {/* Connection dots at each card position */}
              <circle cx="167" cy="200" r="3" fill="white" opacity="0.8"/>
              <circle cx="333" cy="200" r="3" fill="white" opacity="0.8"/>
              <circle cx="500" cy="200" r="3" fill="white" opacity="0.8"/>
              <circle cx="667" cy="200" r="3" fill="white" opacity="0.8"/>
              <circle cx="350" cy="400" r="3" fill="white" opacity="0.8"/>
              <circle cx="500" cy="400" r="3" fill="white" opacity="0.8"/>
            </svg>

            {/* Photo Grid */}
            <div className="relative z-10 py-12">
              {/* First row - 3 cards */}
              <div className="flex justify-center items-start gap-8 md:gap-16 mb-20">
                {JOURNEY_TIMELINE.slice(0, 3).map((item, index) => (
                  <div
                    key={index}
                    className={`relative ${item.rotation || 'rotate-1'} hover:rotate-0 transition-transform duration-500 hover:scale-110 cursor-pointer`}
                    style={{
                      marginTop: index === 1 ? "-1rem" : index === 2 ? "0.5rem" : "0",
                    }}
                  >
                    {/* Polaroid Card */}
                    <div className="bg-white/10 backdrop-blur-md border border-white/20 p-3 pb-8 shadow-lg hover:shadow-2xl hover:bg-white/20 transition-all duration-300 w-32 md:w-40">
                      {/* Photo */}
                      <div className="aspect-square overflow-hidden bg-white/20 backdrop-blur-sm border border-white/30 mb-3 rounded-sm">
                        <img
                          src={item.image || "/placeholder.svg"}
                          alt={item.title}
                          className="w-full h-full object-cover opacity-90"
                        />
                      </div>
                      {/* Handwritten-style caption */}
                      <div className="px-1">
                        <p className="text-white text-xs md:text-sm font-handwriting text-center leading-tight drop-shadow-sm">{item.title}</p>
                        <p className="text-white/70 text-xs text-center mt-1 font-handwriting drop-shadow-sm">{item.year}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Second row - 2 cards */}
              <div className="flex justify-center items-start gap-12 md:gap-20">
                {JOURNEY_TIMELINE.slice(3).map((item, index) => (
                  <div
                    key={index + 3}
                    className={`relative ${item.rotation || (index === 0 ? '-rotate-2' : 'rotate-2')} hover:rotate-0 transition-transform duration-500 hover:scale-110 cursor-pointer`}
                    style={{
                      marginTop: index === 0 ? "0" : "-0.5rem",
                    }}
                  >
                    {/* Polaroid Card */}
                    <div className="bg-white/10 backdrop-blur-md border border-white/20 p-3 pb-8 shadow-lg hover:shadow-2xl hover:bg-white/20 transition-all duration-300 w-32 md:w-40">
                      {/* Photo */}
                      <div className="aspect-square overflow-hidden bg-white/20 backdrop-blur-sm border border-white/30 mb-3 rounded-sm">
                        <img
                          src={item.image || "/placeholder.svg"}
                          alt={item.title}
                          className="w-full h-full object-cover opacity-90"
                        />
                      </div>
                      {/* Handwritten-style caption */}
                      <div className="px-1">
                        <p className="text-white text-xs md:text-sm font-handwriting text-center leading-tight drop-shadow-sm">{item.title}</p>
                        <p className="text-white/70 text-xs text-center mt-1 font-handwriting drop-shadow-sm">{item.year}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="text-center mt-20 pt-12 border-t border-[#ae9c96] border-opacity-30">
          <p className="text-[#ae9c96] text-lg">The journey continues... 🚀</p>
        </div>
      </div>
      </div>
    </div>
  );
}
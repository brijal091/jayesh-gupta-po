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
        {/* About Me Section */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold text-white mb-4">My Story</h2>
          <p className="text-gray-300 leading-relaxed">{ABOUT_ME}</p>
        </div>

        {/* Journey Timeline Board */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold text-white mb-8">My Journey</h2>
          <div className="relative bg-black/20 backdrop-blur-sm rounded-2xl p-8 border border-white/5">
            {/* Journey Board */}
            <div className="space-y-12">
              {Array.from(
                { length: Math.ceil(JOURNEY_TIMELINE.length / 3) },
                (_, rowIndex) => (
                  <div key={rowIndex} className="relative">
                    {/* Row of Cards */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
                      {JOURNEY_TIMELINE.slice(
                        rowIndex * 3,
                        (rowIndex + 1) * 3
                      ).map((item, cardIndex) => {
                        const globalIndex = rowIndex * 3 + cardIndex;
                        return (
                          <div key={globalIndex} className="relative group">
                            {/* Horizontal Connection Line (within row) */}
                            {cardIndex < 2 &&
                              cardIndex <
                                JOURNEY_TIMELINE.slice(
                                  rowIndex * 3,
                                  (rowIndex + 1) * 3
                                ).length -
                                  1 && (
                                <div className="hidden md:block absolute top-1/2 left-full w-16 z-10 -translate-y-1/2">
                                  <svg
                                    className="w-16 h-8"
                                    viewBox="0 0 64 32"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <path
                                      d="M4 16 L56 16"
                                      stroke="#ae9c96"
                                      strokeWidth="2"
                                      strokeDasharray="5 3"
                                      fill="none"
                                      opacity="0.8"
                                      strokeLinecap="round"
                                    />
                                    <path
                                      d="M48 12 L56 16 L48 20"
                                      stroke="#ae9c96"
                                      strokeWidth="2"
                                      fill="none"
                                      opacity="0.8"
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                    />
                                    <circle
                                      cx="4"
                                      cy="16"
                                      r="2"
                                      fill="#ae9c96"
                                      opacity="0.7"
                                    />
                                  </svg>
                                </div>
                              )}

                            {/* Journey Card */}
                            <div
                              className={`relative bg-gradient-to-br from-black/40 to-black/60 backdrop-blur-sm border border-primary-100/10 rounded-xl p-5 h-80 w-full max-w-xs mx-auto transform transition-all duration-500 hover:scale-[1.02] hover:border-primary-100/30 hover:shadow-2xl hover:shadow-primary-100/10 group-hover:bg-gradient-to-br group-hover:from-black/50 group-hover:to-black/70 ${
                                item.rotation || ""
                              }`}
                            >
                              {/* Timeline Dot */}
                              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 w-8 h-8 bg-gradient-to-br from-primary-100 to-primary-100/80 rounded-full border-4 border-black shadow-lg flex items-center justify-center">
                                <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                              </div>

                              {/* Year Badge */}
                              <div className="absolute -top-2 -right-2 bg-gradient-to-r from-primary-100 to-primary-100/80 text-black text-xs font-bold px-3 py-1 rounded-full shadow-lg border border-white/20">
                                {item.year}
                              </div>

                              {/* Card Content */}
                              <div className="h-full flex flex-col justify-between pt-6">
                                <div className="flex-1">
                                  <h3 className="text-lg font-bold text-white mb-3 leading-tight">
                                    {item.title}
                                  </h3>
                                  <p className="text-primary-200/90 text-sm leading-relaxed overflow-hidden">
                                    {item.description}
                                  </p>
                                </div>

                                {/* Card Number */}
                                <div className="flex items-center justify-center mt-4">
                                  <div className="w-10 h-10 bg-gradient-to-br from-primary-100 to-primary-100/80 rounded-full flex items-center justify-center text-black font-bold text-lg shadow-lg border-2 border-white/20">
                                    {globalIndex + 1}
                                  </div>
                                </div>
                              </div>

                              {/* Subtle Hover Glow */}
                              <div className="absolute inset-0 bg-gradient-to-br from-primary-100/0 to-primary-100/0 group-hover:from-primary-100/5 group-hover:to-primary-100/10 rounded-xl transition-all duration-500 pointer-events-none"></div>
                            </div>
                          </div>
                        );
                      })}
                    </div>

                    {/* Journey Flow Connection (between rows) */}
                    {rowIndex < Math.ceil(JOURNEY_TIMELINE.length / 3) - 1 && (
                      <div className="hidden md:block relative w-full mt-8 mb-8">
                        <svg
                          className="w-full h-16"
                          viewBox="0 0 400 64"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          preserveAspectRatio="none"
                        >
                          <path
                            d="M350 8 Q300 20 250 32 Q200 44 150 32 Q100 20 50 8 Q25 14 12 32 Q25 50 50 56 Q100 44 150 32 Q200 20 250 32 Q300 44 350 56"
                            stroke="#ae9c96"
                            strokeWidth="2"
                            strokeDasharray="8 6"
                            fill="none"
                            opacity="0.7"
                            strokeLinecap="round"
                          />
                          {/* Journey waypoints */}
                          <circle
                            cx="350"
                            cy="8"
                            r="3"
                            fill="#ae9c96"
                            opacity="0.9"
                          />
                          <circle
                            cx="200"
                            cy="32"
                            r="2"
                            fill="#ae9c96"
                            opacity="0.6"
                          />
                          <circle
                            cx="50"
                            cy="56"
                            r="3"
                            fill="#ae9c96"
                            opacity="0.9"
                          />
                        </svg>
                      </div>
                    )}
                  </div>
                )
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

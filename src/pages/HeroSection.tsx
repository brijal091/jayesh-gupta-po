import { HOME_CONTENT } from '@/constants/constants'
import React from 'react'

const HeroSection = () => {
  return (
         <div className="container text-white mx-auto px-4 md:px-6 min-h-screen flex flex-col justify-center">
          <div className="space-y-6">
            <div className="space-y-2 flex flex-col items-center gap-6">
              <p className="text-primary-100 tracking-wider font-semibold">
                {HOME_CONTENT.TITLE_TAG}
              </p>
              <h1 className="text-5xl md:text-7xl font-milkwhite !mt-12">
                {HOME_CONTENT.GREETING}{" "}
                <span className="text-9xl">{HOME_CONTENT.NAME_HIGHLIGHT}</span>{" "}
                {HOME_CONTENT.SPEAKING}
              </h1>
              <p className="text-xl">
                <span className="font-semibold">
                  {HOME_CONTENT.EXPERIENCE.YEARS}
                </span>{" "}
                <span className="text-primary-100">
                  {HOME_CONTENT.EXPERIENCE.DESCRIPTION}
                </span>
              </p>
            </div>
          </div>
        </div>
  )
}

export default HeroSection

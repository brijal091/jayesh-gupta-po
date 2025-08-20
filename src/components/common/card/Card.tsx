import React from 'react'
import Image from 'next/image'
import '@/styles/components/Card.scss'

interface CardProps {
  smallTitle: string
  bigTitle: string
  imageSrc: string
  imageAlt: string
  hideNextArrow?: boolean
}

const Card: React.FC<CardProps> = ({
  smallTitle,
  bigTitle,
  imageSrc,
  imageAlt,
  hideNextArrow = false
}) => {
  return (
    <div className="card relative w-full max-w-sm rounded-lg shadow-lg overflow-hidden border border-gray-200">
      <div className="card__background absolute inset-0 z-0 rounded-lg pointer-events-none backdrop-blur-sm" />
      <div className="relative z-10 p-6 flex flex-col h-full">
                <div className="card__mascot-area w-full h-48 rounded-md mb-7 overflow-hidden relative">
            <Image
              src={imageSrc}
              alt={imageAlt}
              fill
              style={{ objectFit: "cover" }}
              className="w-full h-full"
              priority
            />
        </div>
        {/* <div className="mb-2 flex items-center gap-2">
          <span className="text-primary-200 text-xl font-bold">NEOAPE</span>
          <span className="text-primary-100 text-xl">|</span>
          <span className="text-primary-200 text-lg font-semibold">Mascot Design</span>
        </div> */}
        <div className=" text-white text-3xl leading-snug font-bold mb-auto">
          {bigTitle}
        </div>
        <p className='hidden'>{smallTitle}</p>
        {!hideNextArrow && (
        <button className="card__arrow-button absolute bottom-7 right-7 w-8 h-8 rounded flex items-center justify-center text-white transition-all duration-300 ease-in-out hover:text-black">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
            <path d="M9 18l6-6-6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
        )}
      </div>
    </div>
  )
}

export default Card
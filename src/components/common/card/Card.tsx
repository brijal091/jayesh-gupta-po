import React from 'react'
import { CardBackground } from '@/assets/card/CardBackground'
import Image from 'next/image'

interface CardProps {
  smallTitle: string
  bigTitle: string
  imageSrc: string
  imageAlt: string
}

const Card: React.FC<CardProps> = ({ smallTitle, bigTitle, imageSrc, imageAlt }) => {
  return (
    <div className="relative w-[512px] h-[360px]">
      <div className="absolute inset-0">
        <CardBackground />
      </div>
      <div className="relative z-10 p-6 flex flex-col items-center">
        <div className="w-full h-48 relative mb-4">
          <Image
            src={imageSrc}
            alt={imageAlt}
            fill
            className="object-cover rounded-lg"
          />
        </div>
        <p className="text-sm text-gray-400 mb-2">{smallTitle}</p>
        <h3 className="text-xl font-bold text-white">{bigTitle}</h3>
      </div>
    </div>
  )
}

export default Card

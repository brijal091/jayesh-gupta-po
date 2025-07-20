import React from 'react';
import { CardBgImage } from '@/assets/card/CardBgImage';
import { CardBackground } from '@/assets/card/CardBackground';

const FolderCard = ({ 
  year, 
  image, 
  title, 
  company, 
  type, 
  description,
  onClick 
}: {
  year?: string, 
  image?: string, 
  title?: string, 
  company?: string, 
  type?: string, 
  description?: string, 
  onClick?: () => void
}) => {
  return (
    <div className="relative w-full max-w-sm cursor-pointer group transition-transform duration-200 hover:scale-105" style={{ aspectRatio: '380/320' }}>
      {/* Folder appearance background - Bottom layer */}
      <div className="absolute inset-0 w-full h-full">
        <CardBgImage />
      </div>
      
      {/* Base Card Background for styling - Middle layer */}
      <div className="absolute left-1/2 top-[62%] transform -translate-x-1/2 -translate-y-1/2" style={{ 
        width: '99.7%', 
        height: '75%'
      }}>
        <CardBackground />
      </div>
      
      {/* Year Badge - Top layer */}
      {year && (
        <div className="absolute bg-black/50 text-white text-xs px-2.5 py-1 rounded-md backdrop-blur-sm z-30 left-[8%] top-[6%]">
          {year}
        </div>
      )}
      
      {/* Content Container - Top layer */}
      <div className="absolute left-1/2 top-[60%] transform -translate-x-1/2 -translate-y-1/2 flex flex-col z-20 h-full w-full" style={{
        padding: '5%'
      }}>
        {/* Image Section */}
        <div className="flex-1 flex items-center justify-center mb-4">
          <div className="w-20 h-16 rounded-lg overflow-hidden shadow-lg flex items-center justify-center bg-gradient-to-br from-orange-400 to-orange-600">
            {image ? (
              <img 
                src={image} 
                alt={title} 
                className="w-full h-full object-contain bg-white/10 rounded-lg" 
              />
            ) : (
              <div className="text-2xl">📦</div>
            )}
          </div>
        </div>
        
        {/* Text Content */}
        <div className="text-white space-y-1">
          {/* Company and Type */}
          {(company || type) && (
            <div className="flex items-center gap-1.5 text-xs opacity-80">
              {company && <span className="font-medium uppercase tracking-wide">{company}</span>}
              {company && type && <span>•</span>}
              {type && <span className="capitalize">{type}</span>}
            </div>
          )}
          
          {/* Title */}
          <h3 className="text-base font-semibold leading-tight line-clamp-2 min-h-[2.5rem]">
            {title || 'Folder Title'}
          </h3>
          
          {/* Description */}
          {description && description.trim() && (
            <p className="text-xs opacity-70 line-clamp-2 leading-relaxed">
              {description}
            </p>
          )}
        </div>
      </div>
      
      {/* Arrow Icon - Top layer */}
      <div className="absolute text-white opacity-60 group-hover:opacity-100 transition-opacity duration-200 z-30 right-[13%] bottom-[12.5%]">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M7 17l9.2-9.2M17 17V7H7"/>
        </svg>
      </div>
      
      {/* Click Handler - Topmost layer */}
      {onClick && (
        <div 
          className="absolute z-40 cursor-pointer left-1/2 top-[60%] transform -translate-x-1/2 -translate-y-1/2" 
          style={{
            width: '84%',
            height: '75%'
          }}
          onClick={onClick}
        />
      )}
    </div>
  );
};

export default FolderCard;  
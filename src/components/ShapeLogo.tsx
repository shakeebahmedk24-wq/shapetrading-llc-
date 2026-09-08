import React, { useState } from 'react';

interface ShapeLogoProps {
  variant?: 'full' | 'shield' | 'monochrome';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  onClick?: () => void;
  inverted?: boolean;
}

export const ShapeLogo: React.FC<ShapeLogoProps> = ({
  size = 'md',
  className = '',
  onClick,
  inverted = false
}) => {
  const [imgError, setImgError] = useState(false);

  const heights = {
    sm: 'h-8 sm:h-9',
    md: 'h-10 sm:h-11',
    lg: 'h-12 sm:h-14'
  };

  return (
    <div
      id="shape-trading-logo"
      onClick={onClick}
      className={`inline-flex items-center gap-2 select-none cursor-pointer transition-opacity hover:opacity-90 ${className}`}
    >
      {!imgError ? (
        <img
          src="https://shapet.ae/wp-content/uploads/2021/04/Logo-final-1.png"
          alt="Shape Trading L.L.C."
          referrerPolicy="no-referrer"
          onError={() => setImgError(true)}
          className={`${heights[size]} w-auto object-contain ${inverted ? 'brightness-0 invert' : ''}`}
        />
      ) : (
        <div className="flex items-center gap-2.5">
          <div className="w-9 h-9 rounded-lg bg-[#f53e6a] text-white flex items-center justify-center font-black text-lg shadow-sm">
            S
          </div>
          <div className="flex flex-col leading-none">
            <span className="font-extrabold tracking-tight text-[#2f2f2f] text-lg">
              SHAPE
            </span>
            <span className="text-[10px] font-bold tracking-widest text-[#f53e6a] uppercase">
              TRADING L.L.C.
            </span>
          </div>
        </div>
      )}
    </div>
  );
};

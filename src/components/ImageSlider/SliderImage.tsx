import React from 'react';
import { SlideImage } from './types';

interface SliderImageProps {
  slide: SlideImage;
  showCaption?: boolean;
}

const SliderImage: React.FC<SliderImageProps> = ({ slide, showCaption }) => {
  return (
    <div className="relative w-full h-full">
      <img
        src={slide.url}
        alt={slide.alt}
        className="w-full h-full object-cover"
      />
      {showCaption && slide.caption && (
        <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-4">
          <p className="text-sm md:text-base">{slide.caption}</p>
        </div>
      )}
    </div>
  );
};

export default SliderImage;
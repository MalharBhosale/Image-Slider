import React from 'react';
import { SliderControlsProps } from './types';

const SliderControls: React.FC<SliderControlsProps> = ({
  currentIndex,
  totalSlides,
  onPrevious,
  onNext,
  isPlaying,
  toggleAutoPlay,
  showIndicators = true,
  showArrows = true,
}) => {
  return (
    <>
      {showArrows && (
        <>
          <button
            className="absolute left-2 top-1/2 -translate-y-1/2 bg-black bg-opacity-30 hover:bg-opacity-50 text-white p-2 rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-indigo-400 z-10"
            onClick={onPrevious}
            aria-label="Previous slide"
          >
            &lt; {/* Replace ChevronLeft */}
          </button>

          <button
            className="absolute right-2 top-1/2 -translate-y-1/2 bg-black bg-opacity-30 hover:bg-opacity-50 text-white p-2 rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-indigo-400 z-10"
            onClick={onNext}
            aria-label="Next slide"
          >
            &gt; {/* Replace ChevronRight */}
          </button>
        </>
      )}

      {showIndicators && (
        <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2 z-10">
          {Array.from({ length: totalSlides }).map((_, index) => (
            <button
              key={index}
              className={`w-2.5 h-2.5 rounded-full transition-all duration-300 focus:outline-none ${
                currentIndex === index
                  ? 'bg-white scale-125'
                  : 'bg-white bg-opacity-50 hover:bg-opacity-75'
              }`}
              aria-label={`Go to slide ${index + 1}`}
              onClick={() => {
                // This function will be implemented in the main component
                // and passed as a prop
              }}
            />
          ))}
        </div>
      )}

      <button
        className="absolute bottom-4 right-4 bg-black bg-opacity-30 hover:bg-opacity-50 text-white p-2 rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-indigo-400 z-10"
        onClick={toggleAutoPlay}
        aria-label={isPlaying ? 'Pause slideshow' : 'Play slideshow'}
      >
        {isPlaying ? 'Pause' : 'Play'} {/* Replace Pause and Play */}
      </button>
    </>
  );
};

export default SliderControls;
import React, { useState, useEffect, useCallback, useRef } from 'react';
import SliderImage from './SliderImage';
import SliderControls from './SliderControls';
import { ImageSliderProps } from './types';

const ImageSlider: React.FC<ImageSliderProps> = ({
  slides,
  autoPlay = true,
  autoPlayInterval = 3000,
  showIndicators = true,
  showArrows = true,
  showCaption = true,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(autoPlay);
  const autoPlayTimer = useRef<number | null>(null);

  const goToNextSlide = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex === slides.length - 1 ? 0 : prevIndex + 1));
  }, [slides.length]);

  const goToPreviousSlide = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? slides.length - 1 : prevIndex - 1));
  }, [slides.length]);

  const toggleAutoPlay = useCallback(() => {
    setIsPlaying((prev) => !prev);
  }, []);

  const resetAutoPlayTimer = useCallback(() => {
    if (autoPlayTimer.current) {
      window.clearTimeout(autoPlayTimer.current);
    }

    if (isPlaying) {
      autoPlayTimer.current = window.setTimeout(() => {
        goToNextSlide();
      }, autoPlayInterval);
    }
  }, [isPlaying, autoPlayInterval, goToNextSlide]);

  // Handle auto-play
  useEffect(() => {
    resetAutoPlayTimer();
    return () => {
      if (autoPlayTimer.current) {
        window.clearTimeout(autoPlayTimer.current);
      }
    };
  }, [currentIndex, isPlaying, resetAutoPlayTimer]);

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') {
        goToPreviousSlide();
      } else if (e.key === 'ArrowRight') {
        goToNextSlide();
      } else if (e.key === ' ') {
        // Space key to toggle play/pause
        toggleAutoPlay();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [goToNextSlide, goToPreviousSlide, toggleAutoPlay]);

  if (!slides || slides.length === 0) {
    return <div className="text-center p-8">No slides to display</div>;
  }

  return (
    <div className="relative w-full aspect-[16/9] overflow-hidden rounded-lg shadow-lg">
      <div 
        className="w-full h-full flex transition-transform duration-500 ease-in-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {slides.map((slide) => (
          <div key={slide.id} className="min-w-full h-full">
            <SliderImage slide={slide} showCaption={showCaption} />
          </div>
        ))}
      </div>

      <SliderControls
        currentIndex={currentIndex}
        totalSlides={slides.length}
        onPrevious={goToPreviousSlide}
        onNext={goToNextSlide}
        isPlaying={isPlaying}
        toggleAutoPlay={toggleAutoPlay}
        showIndicators={showIndicators}
        showArrows={showArrows}
      />
    </div>
  );
};

export default ImageSlider;
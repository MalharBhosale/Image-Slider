export interface SlideImage {
  id: number;
  url: string;
  alt: string;
  caption?: string;
}

export interface ImageSliderProps {
  slides: SlideImage[];
  autoPlay?: boolean;
  autoPlayInterval?: number;
  showIndicators?: boolean;
  showArrows?: boolean;
  showCaption?: boolean;
}

export interface SliderControlsProps {
  currentIndex: number;
  totalSlides: number;
  onPrevious: () => void;
  onNext: () => void;
  isPlaying: boolean;
  toggleAutoPlay: () => void;
  showIndicators?: boolean;
  showArrows?: boolean;
}
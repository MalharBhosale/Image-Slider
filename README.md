# React Image Slider Component

A modern, responsive image slider component built with React, TypeScript, and Tailwind CSS. This component provides a smooth and interactive way to showcase images with features like auto-play, keyboard navigation, and customizable controls.

## Features

- 🖼️ Smooth image transitions
- ⚡ Auto-play functionality
- ⌨️ Keyboard navigation support
- 📱 Responsive design
- 🎨 Customizable controls and indicators
- 📝 Optional image captions
- 🎯 TypeScript support
- 🎨 Tailwind CSS styling

## Installation

```bash
npm install
```

## Usage

```tsx
import { ImageSlider } from './components/ImageSlider';
import type { SlideImage } from './components/ImageSlider';

const slides: SlideImage[] = [
  {
    id: 1,
    url: 'image-url-1.jpg',
    alt: 'Image 1',
    caption: 'Optional caption for image 1'
  },
  // Add more slides as needed
];

function App() {
  return (
    <ImageSlider
      slides={slides}
      autoPlay={true}
      autoPlayInterval={3000}
      showIndicators={true}
      showArrows={true}
      showCaption={true}
    />
  );
}
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `slides` | `SlideImage[]` | Required | Array of slide objects |
| `autoPlay` | `boolean` | `true` | Enable/disable auto-play |
| `autoPlayInterval` | `number` | `3000` | Time between slides (ms) |
| `showIndicators` | `boolean` | `true` | Show/hide slide indicators |
| `showArrows` | `boolean` | `true` | Show/hide navigation arrows |
| `showCaption` | `boolean` | `true` | Show/hide image captions |

## Development

```bash
npm run dev
```

## Build

```bash
npm run build
```

## License

MIT
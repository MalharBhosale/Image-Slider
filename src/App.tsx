import React, { useState } from 'react';
import { ImageSlider } from './components/ImageSlider';
import { slides } from './data/slides';

function App() {
  const [settings, setSettings] = useState({
    autoPlay: true,
    autoPlayInterval: 3000,
    showIndicators: true,
    showArrows: true,
    showCaption: true,
  });

  const toggleSetting = (setting: keyof typeof settings) => {
    setSettings(prev => ({
      ...prev,
      [setting]: !prev[setting]
    }));
  };

  const updateInterval = (value: number) => {
    setSettings(prev => ({
      ...prev,
      autoPlayInterval: value
    }));
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center p-4 sm:p-8">
      <header className="w-full max-w-5xl mb-8 text-center">
        <h1 className="text-3xl sm:text-4xl font-bold text-indigo-600 mb-2">
          Interactive Image Slider
        </h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          A responsive image carousel with smooth transitions and customizable settings.
        </p>
      </header>

      <main className="w-full max-w-5xl mb-8">
        <div className="bg-white p-6 rounded-xl shadow-md">
          <ImageSlider 
            slides={slides}
            autoPlay={settings.autoPlay}
            autoPlayInterval={settings.autoPlayInterval}
            showIndicators={settings.showIndicators}
            showArrows={settings.showArrows}
            showCaption={settings.showCaption}
          />
        </div>

        <div className="mt-8 bg-white p-6 rounded-xl shadow-md">
          <div className="flex items-center gap-2 mb-4">
            <h2 className="text-xl font-semibold text-gray-800">Slider Settings</h2>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <h3 className="font-medium text-gray-700 mb-2">Features</h3>
              <div className="space-y-2">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={settings.autoPlay}
                    onChange={() => toggleSetting('autoPlay')}
                    className="w-4 h-4 text-indigo-600 focus:ring-indigo-500 rounded"
                  />
                  <span>Auto Play</span>
                </label>
                
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={settings.showIndicators}
                    onChange={() => toggleSetting('showIndicators')}
                    className="w-4 h-4 text-indigo-600 focus:ring-indigo-500 rounded"
                  />
                  <span>Show Indicators</span>
                </label>
                
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={settings.showArrows}
                    onChange={() => toggleSetting('showArrows')}
                    className="w-4 h-4 text-indigo-600 focus:ring-indigo-500 rounded"
                  />
                  <span>Show Navigation Arrows</span>
                </label>
                
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={settings.showCaption}
                    onChange={() => toggleSetting('showCaption')}
                    className="w-4 h-4 text-indigo-600 focus:ring-indigo-500 rounded"
                  />
                  <span>Show Captions</span>
                </label>
              </div>
            </div>
            
            <div>
              <h3 className="font-medium text-gray-700 mb-2">Auto Play Interval</h3>
              <div className="flex items-center gap-4">
                <input
                  type="range"
                  min="1000"
                  max="10000"
                  step="1000"
                  value={settings.autoPlayInterval}
                  onChange={(e) => updateInterval(Number(e.target.value))}
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                />
                <span className="text-sm text-gray-600 w-16">
                  {settings.autoPlayInterval / 1000}s
                </span>
              </div>
              <p className="text-xs text-gray-500 mt-1">
                Slide transition delay (1-10 seconds)
              </p>
            </div>
          </div>
        </div>
      </main>

      <footer className="text-center text-gray-500 text-sm">
        <p>Use keyboard arrow keys to navigate slides or spacebar to toggle play/pause</p>
      </footer>
    </div>
  );
}

export default App;
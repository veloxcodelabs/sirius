import React, { useState, useEffect } from 'react';
import { Volume2, VolumeX, Waves, Sparkles } from 'lucide-react';
import { soundEngine } from '../utils/audioEngine';
import { Language } from '../types';

interface SoundToggleFloatingProps {
  language?: Language;
}

export const SoundToggleFloating: React.FC<SoundToggleFloatingProps> = ({ language = 'EN' }) => {
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [showTooltip, setShowTooltip] = useState<boolean>(false);

  const isBg = language === 'BG';

  const toggleSound = () => {
    const active = soundEngine.toggle();
    setIsPlaying(active);
  };

  useEffect(() => {
    // Show gentle introductory tooltip after 3 seconds, then auto-fade
    const timer = setTimeout(() => {
      setShowTooltip(true);
      setTimeout(() => setShowTooltip(false), 6000);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="fixed bottom-6 right-6 z-40 flex items-center space-x-3">
      {/* Floating Tooltip Bubble */}
      {showTooltip && (
        <div className="glass-panel px-3.5 py-2 rounded-xl text-xs text-amber-200 border border-amber-400/40 shadow-2xl animate-fade-in hidden sm:flex items-center space-x-2">
          <Waves className="w-4 h-4 text-cyan-400 animate-pulse" />
          <span>
            {isPlaying 
              ? (isBg ? 'Звукът на морските вълни е включен' : 'Ocean waves playing')
              : (isBg ? 'Кликнете, за да чуете релаксиращи морски вълни' : 'Click to hear live ocean waves soundscape')}
          </span>
        </div>
      )}

      {/* Main Floating Button */}
      <button
        onClick={toggleSound}
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
        aria-label="Toggle Ocean Waves Sound"
        className={`w-13 h-13 rounded-full border flex items-center justify-center shadow-2xl transition-all duration-300 transform hover:scale-110 active:scale-95 cursor-pointer ${
          isPlaying
            ? 'bg-gradient-to-r from-amber-400 via-amber-500 to-cyan-500 border-white text-slate-950 shadow-amber-500/40'
            : 'bg-slate-900/90 hover:bg-slate-800 border-amber-500/40 text-amber-300 backdrop-blur-xl'
        }`}
      >
        {isPlaying ? (
          <div className="flex items-center space-x-0.5">
            {/* Equalizer animation bars */}
            <span className="w-1 h-3.5 bg-slate-950 rounded-full animate-bounce"></span>
            <span className="w-1 h-5 bg-slate-950 rounded-full animate-bounce [animation-delay:0.15s]"></span>
            <span className="w-1 h-2.5 bg-slate-950 rounded-full animate-bounce [animation-delay:0.3s]"></span>
            <span className="w-1 h-4 bg-slate-950 rounded-full animate-bounce [animation-delay:0.45s]"></span>
          </div>
        ) : (
          <VolumeX className="w-5 h-5" />
        )}
      </button>
    </div>
  );
};


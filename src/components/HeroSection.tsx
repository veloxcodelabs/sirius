import React from 'react';
import { Waves, ArrowDown, ChevronRight, ShieldCheck, Flame } from 'lucide-react';
import { Language } from '../types';
import { translations } from '../translations/translations';

interface HeroSectionProps {
  language: Language;
  onExploreSpa: () => void;
  onCheckAvailability: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  language,
  onExploreSpa,
  onCheckAvailability,
}) => {
  const t = translations[language] || translations.EN;

  return (
    <section className="relative min-h-[92vh] flex items-center justify-center overflow-hidden">
      {/* Background Video with Luxury Gradients */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          poster="https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=2000&q=85"
          className="w-full h-full object-cover scale-105 transform filter brightness-65 contrast-110"
        >
          {/* Coastal and thermal water video */}
          <source 
            src="https://assets.mixkit.co/videos/preview/mixkit-waves-in-the-water-1164-large.mp4" 
            type="video/mp4" 
          />
        </video>

        {/* Sophisticated Dark Luxury Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0b1523] via-[#0b1523]/50 to-[#08121e]/80"></div>
        <div className="absolute inset-0 bg-radial-at-c from-transparent via-[#0b1523]/30 to-[#0b1523]/90"></div>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center flex flex-col items-center">
        
        {/* Prestige Mineral Badge */}
        <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full border border-amber-400/40 bg-gradient-to-r from-amber-500/15 via-[#0f2744]/70 to-amber-500/15 backdrop-blur-md text-amber-300 text-xs sm:text-sm font-semibold tracking-widest uppercase shadow-xl mb-6 transform hover:scale-105 transition">
          <Flame className="w-4 h-4 text-amber-400 animate-pulse" />
          <span>{t.hero.badge}</span>
          <span className="hidden sm:inline text-amber-400/50">•</span>
          <span className="hidden sm:inline text-slate-200">{t.hero.springDepth}</span>
        </div>

        {/* Main Editorial Headline */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold font-serif-luxury text-white tracking-tight leading-[1.08] max-w-4xl text-shadow-lg">
          {t.hero.headlinePart1}
          <span className="gold-gradient-text italic font-normal">{t.hero.headlinePart2}</span>
        </h1>

        {/* Sub-headline */}
        <p className="mt-6 text-base sm:text-xl text-slate-200/90 max-w-2xl font-light leading-relaxed">
          {t.hero.subheadline}
        </p>

        {/* Core Value Micro-Pills */}
        <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-3xl w-full text-xs text-slate-300">
          <div className="glass-panel py-2.5 px-3 rounded-xl border border-amber-500/20 flex flex-col items-center justify-center">
            <span className="text-amber-400 font-bold text-base sm:text-lg">38°C</span>
            <span className="text-[11px] text-slate-300">{t.hero.statThermal}</span>
          </div>
          <div className="glass-panel py-2.5 px-3 rounded-xl border border-amber-500/20 flex flex-col items-center justify-center">
            <span className="text-amber-400 font-bold text-base sm:text-lg">0 {language === 'BG' ? 'Метра' : 'Meters'}</span>
            <span className="text-[11px] text-slate-300">{t.hero.statBeach}</span>
          </div>
          <div className="glass-panel py-2.5 px-3 rounded-xl border border-amber-500/20 flex flex-col items-center justify-center">
            <span className="text-amber-400 font-bold text-base sm:text-lg">1908</span>
            <span className="text-[11px] text-slate-300">{t.hero.statHeritage}</span>
          </div>
          <div className="glass-panel py-2.5 px-3 rounded-xl border border-amber-500/20 flex flex-col items-center justify-center">
            <span className="text-amber-400 font-bold text-base sm:text-lg">{language === 'BG' ? 'Кораб Сириус' : 'The Sirius Ship'}</span>
            <span className="text-[11px] text-slate-300">{t.hero.statGalleon}</span>
          </div>
        </div>

        {/* High-Converting CTA Button Row */}
        <div className="mt-10 flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
          <button
            onClick={onCheckAvailability}
            className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 hover:from-amber-300 hover:to-amber-500 text-slate-950 font-bold rounded-full text-xs sm:text-sm uppercase tracking-widest shadow-2xl shadow-amber-500/25 transition transform hover:scale-105 active:scale-95 flex items-center justify-center space-x-2 cursor-pointer"
          >
            <span>{t.hero.btnBook}</span>
            <ChevronRight className="w-4 h-4" />
          </button>

          <button
            onClick={onExploreSpa}
            className="w-full sm:w-auto px-8 py-4 glass-panel hover:bg-amber-500/15 border border-amber-400/50 text-amber-200 hover:text-white font-semibold rounded-full text-xs sm:text-sm uppercase tracking-widest transition flex items-center justify-center space-x-2 cursor-pointer"
          >
            <Waves className="w-4 h-4 text-amber-400" />
            <span>{t.hero.btnExploreSpa}</span>
          </button>
        </div>

        {/* Direct Booking Assurance */}
        <div className="mt-8 flex items-center space-x-2 text-slate-400 text-xs">
          <ShieldCheck className="w-4 h-4 text-emerald-400" />
          <span>{t.hero.directGuarantee}</span>
        </div>

        {/* Scroll down indicator */}
        <a 
          href="#booking-bar" 
          aria-label="Scroll to booking" 
          className="mt-12 text-slate-400 hover:text-amber-300 transition animate-bounce flex flex-col items-center cursor-pointer"
        >
          <span className="text-[10px] tracking-widest uppercase mb-1">{t.hero.scrollCheck}</span>
          <ArrowDown className="w-4 h-4 text-amber-400" />
        </a>
      </div>
    </section>
  );
};


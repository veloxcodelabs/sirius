import React, { useState } from 'react';
import { Currency, Language } from '../types';
import { 
  Waves, 
  Phone, 
  Calendar, 
  Sparkles, 
  Globe, 
  Menu, 
  X, 
  Download,
  ShieldCheck,
  ChevronDown
} from 'lucide-react';
import { downloadStandaloneHtml } from '../utils/exportHtml';
import { translations } from '../translations/translations';

interface HeaderNavbarProps {
  currency: Currency;
  setCurrency: (c: Currency) => void;
  language: Language;
  setLanguage: (l: Language) => void;
  onOpenBooking: () => void;
}

export const HeaderNavbar: React.FC<HeaderNavbarProps> = ({
  currency,
  setCurrency,
  language,
  setLanguage,
  onOpenBooking,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [currencyDropdown, setCurrencyDropdown] = useState(false);
  const [langDropdown, setLangDropdown] = useState(false);

  const t = translations[language] || translations.EN;

  const currencies: Currency[] = ['EUR', 'BGN', 'USD', 'GBP'];
  const languages: { code: Language; label: string; flag: string }[] = [
    { code: 'BG', label: 'Български', flag: '🇧🇬' },
    { code: 'EN', label: 'English', flag: '🇬🇧' },
    { code: 'DE', label: 'Deutsch', flag: '🇩🇪' },
    { code: 'RU', label: 'Русский', flag: '🇷🇺' },
  ];

  return (
    <header className="sticky top-0 z-50 w-full transition-all duration-300">
      {/* Top Luxury Announcement Bar */}
      <div className="bg-gradient-to-r from-[#0d1f35] via-[#162e4d] to-[#0d1f35] border-b border-amber-500/20 text-xs py-1.5 px-4 text-slate-200">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center space-x-2">
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span className="text-amber-300 font-medium tracking-wide">
              {t.nav.announcement}
            </span>
            <span className="hidden md:inline text-slate-400">| {t.nav.locationShort}</span>
          </div>

          <div className="flex items-center space-x-4">
            <a 
              href="tel:+35952361224" 
              className="flex items-center space-x-1 hover:text-amber-300 transition text-[11px] font-medium"
            >
              <Phone className="w-3 h-3 text-amber-400" />
              <span>+359 52 361 224</span>
            </a>

            {/* Standalone HTML Download Button */}
            <button
              onClick={downloadStandaloneHtml}
              title="Download standalone single-file HTML version"
              className="hidden sm:inline-flex items-center space-x-1 px-2.5 py-0.5 rounded bg-amber-500/15 hover:bg-amber-500/30 text-amber-300 border border-amber-500/30 transition text-[11px]"
            >
              <Download className="w-3 h-3" />
              <span>{t.nav.downloadHtml}</span>
            </button>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <nav className="bg-[#08121e]/90 backdrop-blur-xl border-b border-amber-500/15 px-4 sm:px-6 lg:px-8 py-3.5">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Brand Crest */}
          <a href="#" className="flex items-center space-x-3 group">
            <div className="w-10 h-10 rounded-full border border-amber-400/40 flex items-center justify-center bg-gradient-to-br from-amber-500/20 to-blue-900/40 text-amber-300 group-hover:border-amber-400 transition shadow-lg shadow-amber-500/10">
              <Waves className="w-5 h-5 text-amber-400 animate-pulse-subtle" />
            </div>
            <div>
              <div className="flex items-center space-x-1">
                <span className="font-cinzel text-lg sm:text-xl font-bold tracking-widest text-amber-100 group-hover:text-amber-300 transition">
                  {language === 'BG' ? 'СИРИУС БИЙЧ' : 'SIRIUS BEACH'}
                </span>
                <span className="text-[10px] text-amber-400 tracking-tighter">★★★★</span>
              </div>
              <span className="text-[9px] tracking-[0.28em] text-amber-400/90 uppercase font-semibold block">
                {language === 'BG' ? 'СПА ХОТЕЛ & ТЕРМАЛЕН РЕЗОРТ' : 'THERMAL SPA & HOTEL RESORT'}
              </span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <div className="hidden lg:flex items-center space-x-7 text-xs uppercase tracking-widest font-semibold text-slate-300">
            <a href="#spa" className="hover:text-amber-300 transition py-1">{t.nav.thermalHub}</a>
            <a href="#rooms" className="hover:text-amber-300 transition py-1">{t.nav.rooms}</a>
            <a href="#ship" className="hover:text-amber-300 transition py-1 flex items-center gap-1">
              <span>{t.nav.ship}</span>
              <span className="px-1.5 py-0.5 text-[8px] bg-amber-500/20 text-amber-300 rounded font-normal">{t.nav.shipGalleonBadge}</span>
            </a>
            <a href="#packages" className="hover:text-amber-300 transition py-1">{t.nav.packages}</a>
            <a href="#livecam" className="hover:text-amber-300 transition py-1 flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse"></span>
              <span>{t.nav.liveCam}</span>
            </a>
            <a href="#location" className="hover:text-amber-300 transition py-1">{t.nav.resortStory}</a>
          </div>

          {/* Right Action Controls */}
          <div className="flex items-center space-x-3">
            {/* Currency Selector */}
            <div className="relative">
              <button
                onClick={() => { setCurrencyDropdown(!currencyDropdown); setLangDropdown(false); }}
                className="px-2.5 py-1.5 rounded-lg border border-slate-700 bg-slate-900/80 hover:border-amber-400/50 text-slate-200 text-xs font-semibold flex items-center space-x-1 transition"
              >
                <span>{currency}</span>
                <ChevronDown className="w-3 h-3 text-slate-400" />
              </button>
              {currencyDropdown && (
                <div className="absolute right-0 mt-2 w-28 bg-[#0d1d33] border border-amber-500/30 rounded-xl shadow-2xl py-1 z-50 text-xs">
                  {currencies.map((c) => (
                    <button
                      key={c}
                      onClick={() => { setCurrency(c); setCurrencyDropdown(false); }}
                      className={`w-full text-left px-3 py-1.5 hover:bg-amber-500/20 transition ${currency === c ? 'text-amber-300 font-bold bg-amber-500/10' : 'text-slate-300'}`}
                    >
                      {c}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Language Selector */}
            <div className="relative">
              <button
                onClick={() => { setLangDropdown(!langDropdown); setCurrencyDropdown(false); }}
                className="px-2.5 py-1.5 rounded-lg border border-slate-700 bg-slate-900/80 hover:border-amber-400/50 text-slate-200 text-xs font-semibold flex items-center space-x-1.5 transition"
              >
                <Globe className="w-3.5 h-3.5 text-amber-400" />
                <span>{language}</span>
              </button>
              {langDropdown && (
                <div className="absolute right-0 mt-2 w-36 bg-[#0d1d33] border border-amber-500/30 rounded-xl shadow-2xl py-1 z-50 text-xs">
                  {languages.map((l) => (
                    <button
                      key={l.code}
                      onClick={() => { setLanguage(l.code); setLangDropdown(false); }}
                      className={`w-full text-left px-3 py-2 flex items-center space-x-2 hover:bg-amber-500/20 transition ${language === l.code ? 'text-amber-300 font-bold bg-amber-500/10' : 'text-slate-300'}`}
                    >
                      <span>{l.flag}</span>
                      <span>{l.label}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Direct Book CTA */}
            <button
              onClick={onOpenBooking}
              className="hidden sm:inline-flex items-center space-x-1.5 px-4 py-2 bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 hover:from-amber-300 hover:to-amber-500 text-slate-950 font-bold text-xs uppercase tracking-widest rounded-full shadow-lg shadow-amber-500/20 transition transform hover:-translate-y-0.5 active:translate-y-0"
            >
              <Calendar className="w-3.5 h-3.5" />
              <span>{t.nav.bookStay}</span>
            </button>

            {/* Mobile Hamburger */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg text-slate-300 hover:text-amber-300 hover:bg-slate-800 transition"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-4 pt-4 border-t border-slate-800 space-y-3 pb-3 text-sm">
            <a 
              href="#spa" 
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-lg text-slate-200 hover:bg-amber-500/10 hover:text-amber-300 font-medium"
            >
              {t.nav.thermalHub} (38°C)
            </a>
            <a 
              href="#rooms" 
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-lg text-slate-200 hover:bg-amber-500/10 hover:text-amber-300 font-medium"
            >
              {t.nav.rooms}
            </a>
            <a 
              href="#ship" 
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-lg text-slate-200 hover:bg-amber-500/10 hover:text-amber-300 font-medium"
            >
              {t.nav.ship}
            </a>
            <a 
              href="#packages" 
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-lg text-slate-200 hover:bg-amber-500/10 hover:text-amber-300 font-medium"
            >
              {t.nav.packages}
            </a>
            <a 
              href="#livecam" 
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-lg text-slate-200 hover:bg-amber-500/10 hover:text-amber-300 font-medium"
            >
              {t.nav.liveCam}
            </a>
            <a 
              href="#location" 
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-lg text-slate-200 hover:bg-amber-500/10 hover:text-amber-300 font-medium"
            >
              {t.nav.resortStory}
            </a>
            
            <div className="pt-2 flex flex-col gap-2">
              <button
                onClick={() => { setMobileMenuOpen(false); onOpenBooking(); }}
                className="w-full py-3 bg-gradient-to-r from-amber-400 to-amber-500 text-slate-950 font-bold uppercase tracking-wider text-xs rounded-xl shadow-lg"
              >
                {t.nav.bookStay}
              </button>
              <button
                onClick={() => { setMobileMenuOpen(false); downloadStandaloneHtml(); }}
                className="w-full py-2 bg-slate-800 text-amber-300 border border-amber-500/30 text-xs font-semibold rounded-xl flex items-center justify-center gap-1.5"
              >
                <Download className="w-3.5 h-3.5" />
                <span>{t.nav.downloadHtml}</span>
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};


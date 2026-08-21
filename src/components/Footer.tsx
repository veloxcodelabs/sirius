import React, { useState } from 'react';
import { 
  Waves, 
  Phone, 
  Mail, 
  MapPin, 
  Award, 
  Download, 
  ShieldCheck, 
  Sparkles, 
  ArrowRight,
  Check
} from 'lucide-react';
import { HOTEL_INFO } from '../data/hotelData';
import { downloadStandaloneHtml } from '../utils/exportHtml';
import { Language } from '../types';
import { translations } from '../translations/translations';

interface FooterProps {
  language: Language;
}

export const Footer: React.FC<FooterProps> = ({ language }) => {
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [newsletterSubscribed, setNewsletterSubscribed] = useState(false);

  const t = translations[language] || translations.EN;
  const isBg = language === 'BG';

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (newsletterEmail) {
      setNewsletterSubscribed(true);
    }
  };

  return (
    <footer className="bg-[#060e18] border-t border-amber-500/20 text-slate-300 pt-20 pb-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto space-y-16">
        
        {/* Top Newsletter & VIP Club */}
        <div className="glass-panel p-8 sm:p-10 rounded-3xl border border-amber-500/30 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-6 space-y-2">
            <span className="text-xs uppercase tracking-widest text-amber-400 font-bold flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-amber-400" />
              <span>Sirius Luxury Club</span>
            </span>
            <h3 className="text-2xl sm:text-3xl font-bold font-serif-luxury text-white">
              {isBg ? 'Получете 10% отстъпка за Вашия първи СПА престой' : 'Receive 10% Off Your First Thermal Spa Stay'}
            </h3>
            <p className="text-xs sm:text-sm text-slate-300">
              {isBg ? 'Абонирайте се за ексклузивни сезонни балнео пакети, дегустации на вино на Кораб Сириус и специални оферти.' : 'Subscribe for exclusive seasonal balneo packages, wine tastings at The Sirius Ship, and private beach invitations.'}
            </p>
          </div>

          <div className="lg:col-span-6">
            {!newsletterSubscribed ? (
              <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  required
                  placeholder={isBg ? 'Въведете Вашия имейл...' : 'Enter your email address...'}
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  className="bg-slate-950 border border-slate-700 text-white rounded-xl px-4 py-3 text-xs focus:border-amber-400 outline-none flex-grow"
                />
                <button
                  type="submit"
                  className="px-6 py-3 bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 text-slate-950 font-bold uppercase tracking-wider text-xs rounded-xl shadow-lg transition flex items-center justify-center space-x-1.5 flex-shrink-0 cursor-pointer"
                >
                  <span>{isBg ? 'Абонирай се' : 'Subscribe'}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </form>
            ) : (
              <div className="p-4 rounded-xl bg-emerald-500/15 border border-emerald-400/40 text-emerald-300 text-xs flex items-center space-x-2">
                <Check className="w-5 h-5 flex-shrink-0" />
                <span>{isBg ? 'Благодарим за абонамента! Вашият 10% промо код е ' : 'Thank you for subscribing! Your 10% promo code is '}<strong>SIRIUS2026</strong>.</span>
              </div>
            )}
          </div>
        </div>

        {/* Main Footer Links & Info Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 text-xs">
          
          {/* Col 1: Brand & Bio */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-9 h-9 rounded-full border border-amber-400/50 flex items-center justify-center bg-amber-500/10 text-amber-300">
                <Waves className="w-4 h-4 text-amber-400" />
              </div>
              <div>
                <span className="font-cinzel text-lg font-bold tracking-widest text-amber-100 block">SIRIUS BEACH</span>
                <span className="text-[9px] tracking-[0.25em] text-amber-400 uppercase font-semibold">THERMAL SPA & HOTEL RESORT ****</span>
              </div>
            </div>

            <p className="text-slate-400 text-xs leading-relaxed max-w-sm">
              {isBg
                ? 'Разположен директно на морския бряг в Св. св. Константин и Елена, предлагащ лековити минерални извори с 38°C вода, морски стаи и кулинарни преживявания на автентичен корабен галеон.'
                : 'Nestled directly on the sandy shoreline of Saints Constantine and Helena resort, offering restorative 38°C hyper-thermal mineral springs, serene coastal suites, and legendary seafood dining aboard a real 13th-century ship galleon.'}
            </p>

            <div className="pt-2">
              <button
                onClick={downloadStandaloneHtml}
                className="inline-flex items-center space-x-2 px-3.5 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-amber-300 border border-amber-500/40 text-xs font-semibold transition cursor-pointer"
              >
                <Download className="w-4 h-4 text-amber-400" />
                <span>{isBg ? 'Изтегли самостоятелен Single-File HTML' : 'Download Standalone Single-File HTML'}</span>
              </button>
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="space-y-3">
            <h4 className="font-bold text-sm text-white uppercase tracking-wider font-cinzel">{isBg ? 'Навигация' : 'Experience'}</h4>
            <ul className="space-y-2 text-slate-400">
              <li><a href="#spa" className="hover:text-amber-300 transition">{t.nav.thermalSpa}</a></li>
              <li><a href="#rooms" className="hover:text-amber-300 transition">{t.nav.rooms}</a></li>
              <li><a href="#ship" className="hover:text-amber-300 transition">{t.nav.shipRestaurant}</a></li>
              <li><a href="#packages" className="hover:text-amber-300 transition">{t.nav.allInclusive}</a></li>
              <li><a href="#livecam" className="hover:text-amber-300 transition">{t.nav.liveCam}</a></li>
              <li><a href="#location" className="hover:text-amber-300 transition">{t.nav.resortLocation}</a></li>
            </ul>
          </div>

          {/* Col 3: Balneology & Wellness */}
          <div className="space-y-3">
            <h4 className="font-bold text-sm text-white uppercase tracking-wider font-cinzel">{isBg ? 'Термални грижи' : 'Thermal Care'}</h4>
            <ul className="space-y-2 text-slate-400">
              <li><span>{isBg ? 'Извор от 1300м дълбочина' : '1,300m Underground Spring'}</span></li>
              <li><span>{isBg ? '38°C Хидромасажен басейн' : '38°C Hydro-massage Pool'}</span></li>
              <li><span>{isBg ? '36°C Отопляем инфинити басейн' : '36°C Heated Beach Infinity Pool'}</span></li>
              <li><span>{isBg ? 'Калолечение с варненска кал' : 'Varna Estuary Mud Therapy'}</span></li>
              <li><span>{isBg ? 'Финландска сауна комплекс' : 'Finnish Sauna Village'}</span></li>
              <li><span>{isBg ? 'Хималайска солна стая' : 'Himalayan Salt Halotherapy'}</span></li>
            </ul>
          </div>

          {/* Col 4: Contact & Direct Inquiries */}
          <div className="space-y-3">
            <h4 className="font-bold text-sm text-white uppercase tracking-wider font-cinzel">{isBg ? 'Резервации' : 'Reservations'}</h4>
            <div className="space-y-2 text-slate-400">
              <p className="flex items-start space-x-2">
                <MapPin className="w-4 h-4 text-amber-400 flex-shrink-0 mt-0.5" />
                <span>{isBg && HOTEL_INFO.locationBg ? HOTEL_INFO.locationBg : HOTEL_INFO.location}</span>
              </p>
              <p className="flex items-center space-x-2">
                <Phone className="w-4 h-4 text-amber-400 flex-shrink-0" />
                <a href="tel:+35952361224" className="hover:text-amber-300 transition">+359 52 361 224</a>
              </p>
              <p className="flex items-center space-x-2">
                <Phone className="w-4 h-4 text-amber-400 flex-shrink-0" />
                <a href="tel:+359884899900" className="hover:text-amber-300 transition">+359 884 899 900 (VIP)</a>
              </p>
              <p className="flex items-center space-x-2">
                <Mail className="w-4 h-4 text-amber-400 flex-shrink-0" />
                <a href={`mailto:${HOTEL_INFO.email}`} className="hover:text-amber-300 transition">{HOTEL_INFO.email}</a>
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Legal & Accreditations */}
        <div className="border-t border-slate-800/80 pt-8 flex flex-col sm:flex-row items-center justify-between text-slate-400 text-xs gap-4">
          <div className="flex items-center space-x-4">
            <span className="flex items-center gap-1">
              <Award className="w-4 h-4 text-amber-400" />
              <span>{isBg ? 'Сертифициран член на Европейската СПА Асоциация' : 'Certified European Balneology Member'}</span>
            </span>
            <span className="hidden md:inline text-slate-600">•</span>
            <span className="hidden md:inline">{isBg ? 'Еко сертификат Green Key' : 'Green Key Eco Certified'}</span>
          </div>

          <p>© 2026 Spa Hotel Sirius Beach. {isBg ? 'Всички права запазени. Св. св. Константин и Елена, България.' : 'All Rights Reserved. St. Constantine & Elena, Bulgaria.'}</p>
        </div>
      </div>
    </footer>
  );
};


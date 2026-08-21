import React from 'react';
import { 
  MapPin, 
  Trees, 
  Plane, 
  Building2, 
  Sparkles, 
  Award, 
  Compass,
  ArrowUpRight
} from 'lucide-react';
import { RESORT_FACTS, HOTEL_INFO } from '../data/hotelData';
import { Language } from '../types';
import { translations } from '../translations/translations';

interface LocationAndResortProps {
  language: Language;
}

export const LocationAndResort: React.FC<LocationAndResortProps> = ({ language }) => {
  const t = translations[language] || translations.EN;
  const isBg = language === 'BG';

  return (
    <section id="location" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-amber-500/15">
      <div className="space-y-16">
        
        {/* Section Header */}
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full border border-amber-400/30 bg-amber-500/10 text-amber-300 text-xs uppercase tracking-widest font-semibold">
            <MapPin className="w-3.5 h-3.5 text-amber-400" />
            <span>{isBg ? 'Курортно наследство от 1908 г.' : 'Resort Heritage Since 1908'}</span>
          </div>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-serif-luxury text-white tracking-tight">
            {t.location.title}
          </h2>

          <p className="text-slate-300 text-base sm:text-lg">
            {t.location.subtitle}
          </p>
        </div>

        {/* 4 Core Heritage Stat Blocks */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {RESORT_FACTS.map((fact, idx) => {
            const label = isBg && fact.labelBg ? fact.labelBg : fact.label;
            const sub = isBg && fact.subBg ? fact.subBg : fact.sub;
            return (
              <div
                key={idx}
                className="glass-panel p-6 rounded-2xl border border-amber-500/20 text-center space-y-1 hover:border-amber-400/50 transition transform hover:-translate-y-1"
              >
                <span className="text-[11px] uppercase tracking-wider text-slate-400 font-semibold block">{label}</span>
                <span className="text-3xl sm:text-4xl font-bold font-serif-luxury gold-gradient-text block">{fact.value}</span>
                <span className="text-xs text-amber-200/80 font-medium block">{sub}</span>
              </div>
            );
          })}
        </div>

        {/* Split Location Map Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left: Nearby Attractions */}
          <div className="lg:col-span-6 space-y-5">
            <h3 className="text-2xl sm:text-3xl font-bold font-serif-luxury text-white">
              {isBg ? 'Привилегировано разположение на първа линия' : 'Privileged Frontline Coastal Setting'}
            </h3>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              {isBg 
                ? 'Разположен точно там, където спокойният плаж среща защитения ботанически боров парк, Спа Хотел Сириус Бийч предлага уединение без изолация. Насладете се на кратки разходки до исторически забележителности и бърз достъп до Варна.' 
                : 'Nestled right where the serene beach meets a lush protected botanical pine park, Spa Hotel Sirius Beach offers seclusion without isolation. Enjoy short strolls to historical landmarks and quick connections to Varna.'}
            </p>

            <div className="space-y-3 pt-2">
              <div className="flex items-center space-x-3 p-3.5 rounded-xl bg-slate-900/80 border border-slate-800">
                <div className="p-2 bg-amber-500/10 text-amber-400 rounded-lg">
                  <Trees className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-white">
                    {isBg ? 'Университетска Ботаническа Градина и Екопарк' : 'University Botanical Garden & Ecopark'}
                  </h4>
                  <p className="text-xs text-slate-400">
                    {isBg ? '800 метра • Над 300 редки дървесни и розови видове' : '800 meters • Over 300 rare tree & rose species'}
                  </p>
                </div>
              </div>

              <div className="flex items-center space-x-3 p-3.5 rounded-xl bg-slate-900/80 border border-slate-800">
                <div className="p-2 bg-amber-500/10 text-amber-400 rounded-lg">
                  <Building2 className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-white">
                    {isBg ? 'Манастир „Св. св. Константин и Елена“ (16-ти век)' : '16th-Century Monastery of St. Constantine & Helena'}
                  </h4>
                  <p className="text-xs text-slate-400">
                    {isBg ? '500 метра • Древно свято аязмо с лековита вода' : '500 meters • Ancient holy spring (Ayazmo) with healing waters'}
                  </p>
                </div>
              </div>

              <div className="flex items-center space-x-3 p-3.5 rounded-xl bg-slate-900/80 border border-slate-800">
                <div className="p-2 bg-amber-500/10 text-amber-400 rounded-lg">
                  <Plane className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-white">
                    {isBg ? 'Международно летище Варна (VAR)' : 'Varna International Airport (VAR)'}
                  </h4>
                  <p className="text-xs text-slate-400">
                    {isBg ? '18 км • 20 минути по директния курортен булевард' : '18 km • 20 minutes via direct resort highway'}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Interactive Resort Map Card */}
          <div className="lg:col-span-6 relative rounded-3xl overflow-hidden border border-amber-500/30 shadow-2xl min-h-[380px] bg-slate-950">
            <img
              src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80"
              alt="Resort Aerial Map"
              className="w-full h-full object-cover brightness-70"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/30 to-transparent"></div>

            {/* Interactive Pin */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center space-y-2">
              <div className="w-14 h-14 mx-auto rounded-full bg-gradient-to-tr from-amber-500 to-amber-300 p-1 shadow-2xl animate-pulse">
                <div className="w-full h-full rounded-full bg-slate-950 flex items-center justify-center text-amber-300">
                  <MapPin className="w-6 h-6" />
                </div>
              </div>
              <div className="bg-slate-950/90 backdrop-blur-md px-4 py-2 rounded-xl border border-amber-400/40 text-xs shadow-2xl">
                <span className="font-bold text-white block">Spa Hotel Sirius Beach ****</span>
                <span className="text-[10px] text-amber-300 uppercase tracking-widest font-semibold">{isBg ? 'Първа линия Черно море' : 'Frontline Black Sea Shore'}</span>
              </div>
            </div>

            {/* Address bar footer */}
            <div className="absolute bottom-4 left-4 right-4 bg-slate-950/85 backdrop-blur-md p-3.5 rounded-xl border border-slate-800 flex items-center justify-between text-xs text-slate-300">
              <div className="truncate">
                <span className="font-semibold text-white block">{isBg ? 'Адрес:' : 'Address:'}</span>
                <span className="text-slate-400 truncate">{isBg && HOTEL_INFO.locationBg ? HOTEL_INFO.locationBg : HOTEL_INFO.location}</span>
              </div>
              <a
                href="https://maps.google.com/?q=Spa+Hotel+Sirius+Beach+St+Constantine+and+Elena"
                target="_blank"
                rel="noreferrer"
                className="px-3 py-1.5 bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold rounded-lg transition flex items-center gap-1 text-[11px] flex-shrink-0"
              >
                <span>Google Maps</span>
                <ArrowUpRight className="w-3 h-3" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};


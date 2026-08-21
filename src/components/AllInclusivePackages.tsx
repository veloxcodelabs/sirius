import React, { useState } from 'react';
import { 
  Check, 
  X, 
  Sparkles, 
  ShieldCheck, 
  Crown, 
  Sun, 
  UtensilsCrossed, 
  Flame, 
  Umbrella,
  Wine
} from 'lucide-react';
import { PACKAGE_TIERS } from '../data/hotelData';
import { Currency, Language } from '../types';
import { translations } from '../translations/translations';

interface AllInclusivePackagesProps {
  currency: Currency;
  language: Language;
  onSelectPackage: (packageId: string) => void;
}

export const AllInclusivePackages: React.FC<AllInclusivePackagesProps> = ({
  currency,
  language,
  onSelectPackage,
}) => {
  const [billingCycle, setBillingCycle] = useState<'perNight' | 'totalWeek'>('perNight');

  const t = translations[language] || translations.EN;
  const isBg = language === 'BG';

  const currencyRates: Record<Currency, { symbol: string; rate: number }> = {
    EUR: { symbol: '€', rate: 1 },
    BGN: { symbol: 'лв', rate: 1.95583 },
    USD: { symbol: '$', rate: 1.08 },
    GBP: { symbol: '£', rate: 0.85 },
  };
  const rate = currencyRates[currency];

  return (
    <section id="packages" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      
      {/* Section Header */}
      <div className="text-center space-y-4 max-w-3xl mx-auto mb-16">
        <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full border border-amber-400/30 bg-amber-500/10 text-amber-300 text-xs uppercase tracking-widest font-semibold">
          <Crown className="w-3.5 h-3.5 text-amber-400" />
          <span>{t.packages.badge}</span>
        </div>

        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-serif-luxury text-white tracking-tight">
          {t.packages.title}
        </h2>

        <p className="text-slate-300 text-base sm:text-lg">
          {t.packages.subtitle}
        </p>

        {/* Nightly vs 7-Day Stay Switcher */}
        <div className="pt-3 inline-flex items-center p-1 bg-slate-900 border border-slate-800 rounded-full text-xs font-semibold">
          <button
            onClick={() => setBillingCycle('perNight')}
            className={`px-4 py-1.5 rounded-full transition cursor-pointer ${billingCycle === 'perNight' ? 'bg-amber-400 text-slate-950 font-bold' : 'text-slate-400 hover:text-white'}`}
          >
            {isBg ? 'Цена за нощувка' : 'Price Per Night'}
          </button>
          <button
            onClick={() => setBillingCycle('totalWeek')}
            className={`px-4 py-1.5 rounded-full transition cursor-pointer ${billingCycle === 'totalWeek' ? 'bg-amber-400 text-slate-950 font-bold' : 'text-slate-400 hover:text-white'}`}
          >
            {isBg ? '7-дневен пакет (-10%)' : '7-Night Holiday Package (-10%)'}
          </button>
        </div>
      </div>

      {/* Comparison Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
        {PACKAGE_TIERS.map((pkg) => {
          const multiplier = billingCycle === 'totalWeek' ? 7 * 0.9 : 1;
          const displayPrice = Math.round(pkg.priceEurPerNight * multiplier * rate.rate);
          const name = isBg && pkg.nameBg ? pkg.nameBg : pkg.name;
          const tagline = isBg && pkg.taglineBg ? pkg.taglineBg : pkg.tagline;

          return (
            <div
              key={pkg.id}
              className={`glass-panel rounded-3xl p-7 sm:p-8 flex flex-col justify-between transition-all duration-300 relative ${
                pkg.popular
                  ? 'border-2 border-amber-400 shadow-2xl shadow-amber-500/20 bg-gradient-to-b from-[#132742] via-[#0d1d33] to-[#091524] lg:-translate-y-3'
                  : 'border border-slate-800 hover:border-amber-400/40'
              }`}
            >
              {/* Popular Badge */}
              {pkg.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-amber-400 to-amber-500 text-slate-950 text-[10px] font-extrabold uppercase tracking-widest px-4 py-1 rounded-full shadow-lg">
                  {isBg ? 'Най-предпочитан избор' : 'Most Popular Choice'}
                </div>
              )}

              <div className="space-y-6">
                <div>
                  <h3 className="text-2xl font-bold font-serif-luxury text-white">
                    {name}
                  </h3>
                  <p className="text-xs text-slate-400 mt-1 min-h-[32px]">
                    {tagline}
                  </p>
                </div>

                {/* Price Display */}
                <div className="pt-2 pb-4 border-y border-slate-800 flex items-baseline justify-between">
                  <div>
                    <span className="text-4xl sm:text-5xl font-bold font-serif-luxury text-amber-300">
                      {rate.symbol}{displayPrice}
                    </span>
                    <span className="text-xs text-slate-400 ml-1.5 font-normal">
                      {billingCycle === 'perNight' ? (isBg ? '/ нощ' : '/ night') : (isBg ? '/ 7 нощувки' : '/ 7 nights total')}
                    </span>
                  </div>
                </div>

                {/* Features List */}
                <div className="space-y-3">
                  <span className="text-[11px] uppercase tracking-wider text-slate-400 font-bold block">
                    {t.packages.included}
                  </span>
                  <ul className="space-y-2.5 text-xs text-slate-200">
                    {pkg.features.map((feat, idx) => {
                      const featText = (isBg && feat.textBg) ? feat.textBg : feat.text;
                      return (
                        <li key={idx} className="flex items-start space-x-2.5">
                          {feat.included ? (
                            <div className="p-0.5 rounded bg-emerald-500/20 text-emerald-400 mt-0.5 flex-shrink-0">
                              <Check className="w-3.5 h-3.5" />
                            </div>
                          ) : (
                            <div className="p-0.5 rounded bg-slate-800 text-slate-500 mt-0.5 flex-shrink-0">
                              <X className="w-3.5 h-3.5" />
                            </div>
                          )}
                          <span className={feat.included ? 'text-slate-200' : 'text-slate-500 line-through'}>
                            {featText}
                          </span>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </div>

              {/* Action Button */}
              <div className="pt-8">
                <button
                  onClick={() => onSelectPackage(pkg.id)}
                  className={`w-full py-3.5 rounded-xl text-xs font-bold uppercase tracking-wider transition transform hover:scale-102 active:scale-98 cursor-pointer ${
                    pkg.popular
                      ? 'bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 hover:from-amber-300 text-slate-950 shadow-xl shadow-amber-500/20'
                      : 'bg-slate-800 hover:bg-slate-700 text-white border border-slate-700'
                  }`}
                >
                  {isBg ? `Избери пакет ${name}` : `Select ${pkg.name.split(' ')[0]} Package`}
                </button>
              </div>
            </div>
          );
        })}
      </div>

      {/* Feature Comparison Table Callout */}
      <div className="mt-16 glass-panel p-6 sm:p-8 rounded-3xl border border-amber-500/20 grid grid-cols-2 sm:grid-cols-4 gap-6 text-center text-xs">
        <div className="space-y-2">
          <Flame className="w-6 h-6 text-amber-400 mx-auto" />
          <strong className="text-white block text-sm">{isBg ? '38°C Термални извори' : '38°C Thermal Springs'}</strong>
          <p className="text-slate-400 text-[11px]">{isBg ? 'Безплатен достъп за всички гости независимо от пакета.' : 'Free access to all hotel guests regardless of package tier.'}</p>
        </div>
        <div className="space-y-2">
          <Umbrella className="w-6 h-6 text-cyan-400 mx-auto" />
          <strong className="text-white block text-sm">{isBg ? 'Собствен пясъчен плаж' : 'Private Sandy Beach'}</strong>
          <p className="text-slate-400 text-[11px]">{isBg ? 'Шезлонги и чадъри точно пред хотела на първа линия.' : 'Sunbeds & umbrellas directly on the sand in front of the hotel.'}</p>
        </div>
        <div className="space-y-2">
          <UtensilsCrossed className="w-6 h-6 text-amber-400 mx-auto" />
          <strong className="text-white block text-sm">{isBg ? 'Бюфет на Кораба и Грил' : 'Ship Buffet & Grills'}</strong>
          <p className="text-slate-400 text-[11px]">{isBg ? 'Шоу-кукинг станции, свежи черноморски салати и десерти.' : 'Show-cooking stations, fresh Black Sea salads, and desserts.'}</p>
        </div>
        <div className="space-y-2">
          <Wine className="w-6 h-6 text-pink-400 mx-auto" />
          <strong className="text-white block text-sm">{isBg ? 'Плажни коктейл барове' : 'Beach Cocktail Bars'}</strong>
          <p className="text-slate-400 text-[11px]">{isBg ? 'Освежаващи шприцове, българска бира и занаятчийски сладолед.' : 'Refreshing spritzes, Bulgarian beers, and artisanal ice cream.'}</p>
        </div>
      </div>
    </section>
  );
};


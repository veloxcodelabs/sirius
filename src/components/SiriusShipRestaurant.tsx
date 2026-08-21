import React, { useState } from 'react';
import { 
  Anchor, 
  Utensils, 
  Wine, 
  Sparkles, 
  Clock, 
  Compass, 
  Check, 
  ChevronRight, 
  Calendar 
} from 'lucide-react';
import { SHIP_MENU_ITEMS } from '../data/hotelData';
import { Currency, MenuItem, Language } from '../types';
import { translations } from '../translations/translations';

interface SiriusShipRestaurantProps {
  currency: Currency;
  language: Language;
  onReserveTable: () => void;
}

export const SiriusShipRestaurant: React.FC<SiriusShipRestaurantProps> = ({
  currency,
  language,
  onReserveTable,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<'all' | 'seafood' | 'starters' | 'mains' | 'cocktails'>('all');

  const t = translations[language] || translations.EN;
  const isBg = language === 'BG';

  const currencyRates: Record<Currency, { symbol: string; rate: number }> = {
    EUR: { symbol: '€', rate: 1 },
    BGN: { symbol: 'лв', rate: 1.95583 },
    USD: { symbol: '$', rate: 1.08 },
    GBP: { symbol: '£', rate: 0.85 },
  };
  const rate = currencyRates[currency];

  const filteredMenu = selectedCategory === 'all' 
    ? SHIP_MENU_ITEMS 
    : SHIP_MENU_ITEMS.filter(item => item.category === selectedCategory);

  return (
    <section id="ship" className="py-24 bg-gradient-to-b from-[#091524] via-[#0d1d33] to-[#091524] border-y border-amber-500/20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      
      {/* Background Decorative Watermark & Ambient Glow */}
      <div className="absolute top-10 right-10 opacity-5 pointer-events-none">
        <Anchor className="w-96 h-96 text-amber-300" />
      </div>

      <div className="max-w-7xl mx-auto space-y-16 relative z-10">
        
        {/* Section Header */}
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full border border-amber-400/30 bg-amber-500/10 text-amber-300 text-xs uppercase tracking-widest font-semibold">
            <Anchor className="w-3.5 h-3.5 text-amber-400" />
            <span>{t.ship.badge}</span>
          </div>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-serif-luxury text-white tracking-tight">
            {t.ship.title}
          </h2>
          <p className="text-amber-300/80 font-cinzel text-xs sm:text-sm tracking-widest uppercase">
            {isBg ? 'Корабът "Сириус" • Автентичен галеон от 13-и век на морския бряг' : 'Корабът "Сириус" • Authentic 13th-Century Galleon on the Seafront'}
          </p>

          <p className="text-slate-300 text-base sm:text-lg">
            {t.ship.subtitle}
          </p>
        </div>

        {/* Split-Screen Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left: Atmospheric Imagery & Historical Galleon Details */}
          <div className="lg:col-span-6 space-y-6">
            <div className="relative rounded-3xl overflow-hidden border border-amber-500/30 shadow-2xl group min-h-[420px]">
              <img
                src="https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=1200&q=80"
                alt="Sirius Ship Restaurant"
                className="w-full h-[450px] object-cover group-hover:scale-105 transition duration-700 brightness-90"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/30 to-transparent"></div>

              {/* Floating Caption on Image */}
              <div className="absolute bottom-6 left-6 right-6 bg-slate-950/85 backdrop-blur-md p-5 rounded-2xl border border-amber-500/30 space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-xs uppercase tracking-widest text-amber-400 font-bold flex items-center gap-1.5">
                    <Compass className="w-3.5 h-3.5" /> {isBg ? 'Места на горната панорамна палуба' : 'Upper Panoramic Deck Seating'}
                  </span>
                  <span className="text-[11px] text-emerald-400 font-semibold">{isBg ? 'Музика на живо по залез' : 'Live Sunset Music'}</span>
                </div>
                <h4 className="text-lg font-bold font-serif-luxury text-white">
                  {isBg ? '360° Безпрепятствен Черноморски хоризонт' : '360° Unobstructed Black Sea Horizon'}
                </h4>
                <p className="text-xs text-slate-300">
                  {isBg ? 'Слушайте шепота на морските вълни, докато се наслаждавате на гурме кулинарни специалитети над водата.' : 'Hear the soothing maritime tides while enjoying fine culinary dining directly over the water.'}
                </p>
              </div>
            </div>

            {/* Quick Experience Badges */}
            <div className="grid grid-cols-3 gap-3 text-xs">
              <div className="glass-panel p-3.5 rounded-xl text-center space-y-1">
                <Utensils className="w-4 h-4 text-amber-400 mx-auto" />
                <span className="font-bold text-white block">{isBg ? 'Пресен ежедневен улов' : 'Fresh Daily Catch'}</span>
                <span className="text-[10px] text-slate-400">{isBg ? 'Калкан и кая от Черно море' : 'Black Sea Turbot & Gobi'}</span>
              </div>
              <div className="glass-panel p-3.5 rounded-xl text-center space-y-1">
                <Wine className="w-4 h-4 text-amber-400 mx-auto" />
                <span className="font-bold text-white block">{isBg ? 'Сомелиерска изба' : 'Sommelier Cellar'}</span>
                <span className="text-[10px] text-slate-400">{isBg ? '120+ селектирани вина' : '120+ Curated Vintages'}</span>
              </div>
              <div className="glass-panel p-3.5 rounded-xl text-center space-y-1">
                <Clock className="w-4 h-4 text-amber-400 mx-auto" />
                <span className="font-bold text-white block">12:00 - 23:30</span>
                <span className="text-[10px] text-slate-400">{isBg ? 'Обяд и вечеря по залез' : 'Lunch & Sunset Dinner'}</span>
              </div>
            </div>
          </div>

          {/* Right: Seasonal Menu Highlights & Reservation CTA */}
          <div className="lg:col-span-6 space-y-6">
            <div className="flex flex-wrap items-center justify-between gap-2 border-b border-amber-500/20 pb-4">
              <h3 className="text-2xl sm:text-3xl font-bold font-serif-luxury text-white">
                {t.ship.signatureDishes}
              </h3>

              {/* Menu Filter Chips */}
              <div className="flex items-center space-x-1 text-xs">
                <button
                  onClick={() => setSelectedCategory('all')}
                  className={`px-3 py-1 rounded-full font-semibold transition cursor-pointer ${selectedCategory === 'all' ? 'bg-amber-400 text-slate-950 font-bold' : 'text-slate-300 hover:text-white'}`}
                >
                  {isBg ? 'Всички' : 'All'}
                </button>
                <button
                  onClick={() => setSelectedCategory('seafood')}
                  className={`px-3 py-1 rounded-full font-semibold transition cursor-pointer ${selectedCategory === 'seafood' ? 'bg-amber-400 text-slate-950 font-bold' : 'text-slate-300 hover:text-white'}`}
                >
                  {isBg ? 'Морски дарове' : 'Seafood'}
                </button>
                <button
                  onClick={() => setSelectedCategory('mains')}
                  className={`px-3 py-1 rounded-full font-semibold transition cursor-pointer ${selectedCategory === 'mains' ? 'bg-amber-400 text-slate-950 font-bold' : 'text-slate-300 hover:text-white'}`}
                >
                  {isBg ? 'Основни' : 'Mains'}
                </button>
                <button
                  onClick={() => setSelectedCategory('cocktails')}
                  className={`px-3 py-1 rounded-full font-semibold transition cursor-pointer ${selectedCategory === 'cocktails' ? 'bg-amber-400 text-slate-950 font-bold' : 'text-slate-300 hover:text-white'}`}
                >
                  {isBg ? 'Коктейли' : 'Cocktails'}
                </button>
              </div>
            </div>

            {/* Menu List Items */}
            <div className="space-y-3.5">
              {filteredMenu.map((item) => {
                const name = isBg && item.nameBg ? item.nameBg : item.name;
                const desc = isBg && item.descriptionBg ? item.descriptionBg : item.description;
                const highlight = isBg && item.highlightBg ? item.highlightBg : item.highlight;
                return (
                  <div
                    key={item.id}
                    className="glass-panel p-4 rounded-2xl border border-slate-800 hover:border-amber-400/40 transition flex items-center justify-between gap-4 group"
                  >
                    {item.image && (
                      <img
                        src={item.image}
                        alt={name}
                        className="w-16 h-16 rounded-xl object-cover flex-shrink-0 group-hover:scale-105 transition"
                      />
                    )}
                    <div className="flex-grow space-y-1">
                      <div className="flex items-center space-x-2">
                        <h4 className="font-bold text-sm sm:text-base text-white group-hover:text-amber-300 transition">
                          {name}
                        </h4>
                        {highlight && (
                          <span className="text-[9px] bg-amber-400/20 text-amber-300 border border-amber-400/30 px-2 py-0.5 rounded-full font-bold uppercase">
                            {highlight}
                          </span>
                        )}
                      </div>
                      <p className="text-xs text-slate-300 leading-relaxed">
                        {desc}
                      </p>
                    </div>

                    <div className="text-right flex-shrink-0">
                      <span className="text-lg sm:text-xl font-bold font-serif-luxury text-amber-300 block">
                        {rate.symbol}{Math.round(item.priceEur * rate.rate)}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Reserve Table CTA Card */}
            <div className="p-6 rounded-2xl bg-gradient-to-r from-amber-500/15 via-[#132742] to-amber-500/15 border border-amber-400/40 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-xl">
              <div className="space-y-1 text-center sm:text-left">
                <span className="text-xs uppercase tracking-widest text-amber-300 font-bold block">
                  {isBg ? 'Вечеря по залез на морска палуба' : 'Sunset & Sea-Deck Dining'}
                </span>
                <h4 className="text-lg font-bold font-serif-luxury text-white">
                  {isBg ? 'Резервирайте маса на галеона' : 'Reserve Your Galleon Table'}
                </h4>
                <p className="text-xs text-slate-300">
                  {isBg ? 'С предимство за гости на хотела и All Inclusive пакети.' : 'Priority seating given to hotel guests & Ultra All-Inclusive stays.'}
                </p>
              </div>

              <button
                onClick={onReserveTable}
                className="w-full sm:w-auto px-6 py-3.5 bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 hover:from-amber-300 text-slate-950 font-bold uppercase tracking-widest text-xs rounded-full shadow-lg transition transform hover:scale-105 active:scale-95 flex items-center justify-center space-x-2 cursor-pointer"
              >
                <Calendar className="w-4 h-4" />
                <span>{t.ship.reserveTable}</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};


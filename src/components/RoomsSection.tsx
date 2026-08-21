import React, { useState } from 'react';
import { 
  Bed, 
  Maximize, 
  Users, 
  Eye, 
  Wifi, 
  Sparkles, 
  Check, 
  Compass, 
  ChevronRight,
  ShieldAlert,
  Play
} from 'lucide-react';
import { ROOMS } from '../data/hotelData';
import { Room, Currency, Language } from '../types';
import { translations } from '../translations/translations';

interface RoomsSectionProps {
  currency: Currency;
  language: Language;
  onSelectRoom: (roomId: string) => void;
  onOpenVirtualTour: (room: Room) => void;
}

export const RoomsSection: React.FC<RoomsSectionProps> = ({
  currency,
  language,
  onSelectRoom,
  onOpenVirtualTour,
}) => {
  const [activeCategory, setActiveCategory] = useState<'all' | 'sea' | 'park' | 'suite'>('all');
  const [selectedPhotoIndex, setSelectedPhotoIndex] = useState<Record<string, number>>({});

  const t = translations[language] || translations.EN;
  const isBg = language === 'BG';

  const currencyRates: Record<Currency, { symbol: string; rate: number }> = {
    EUR: { symbol: '€', rate: 1 },
    BGN: { symbol: 'лв', rate: 1.95583 },
    USD: { symbol: '$', rate: 1.08 },
    GBP: { symbol: '£', rate: 0.85 },
  };
  const rate = currencyRates[currency];

  const filteredRooms = activeCategory === 'all' 
    ? ROOMS 
    : ROOMS.filter(r => r.category === activeCategory);

  const handleThumbnailClick = (roomId: string, index: number) => {
    setSelectedPhotoIndex(prev => ({ ...prev, [roomId]: index }));
  };

  return (
    <section id="rooms" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-amber-500/15">
      
      {/* Section Header */}
      <div className="text-center space-y-4 max-w-3xl mx-auto mb-14">
        <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full border border-amber-400/30 bg-amber-500/10 text-amber-300 text-xs uppercase tracking-widest font-semibold">
          <Bed className="w-3.5 h-3.5 text-amber-400" />
          <span>{t.rooms.badge}</span>
        </div>

        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-serif-luxury text-white tracking-tight">
          {t.rooms.title}
        </h2>

        <p className="text-slate-300 text-base sm:text-lg">
          {t.rooms.subtitle}
        </p>

        {/* Interactive Filter Pills */}
        <div className="pt-4 flex flex-wrap items-center justify-center gap-2">
          <button
            onClick={() => setActiveCategory('all')}
            className={`px-5 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition cursor-pointer ${
              activeCategory === 'all'
                ? 'bg-amber-400 text-slate-950 shadow-lg shadow-amber-500/20'
                : 'bg-slate-900/80 text-slate-300 hover:text-white border border-slate-800'
            }`}
          >
            {t.rooms.filterAll} ({ROOMS.length})
          </button>
          <button
            onClick={() => setActiveCategory('sea')}
            className={`px-5 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition cursor-pointer ${
              activeCategory === 'sea'
                ? 'bg-amber-400 text-slate-950 shadow-lg shadow-amber-500/20'
                : 'bg-slate-900/80 text-slate-300 hover:text-white border border-slate-800'
            }`}
          >
            {t.rooms.filterSea}
          </button>
          <button
            onClick={() => setActiveCategory('suite')}
            className={`px-5 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition cursor-pointer ${
              activeCategory === 'suite'
                ? 'bg-amber-400 text-slate-950 shadow-lg shadow-amber-500/20'
                : 'bg-slate-900/80 text-slate-300 hover:text-white border border-slate-800'
            }`}
          >
            {t.rooms.filterSuite}
          </button>
          <button
            onClick={() => setActiveCategory('park')}
            className={`px-5 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition cursor-pointer ${
              activeCategory === 'park'
                ? 'bg-amber-400 text-slate-950 shadow-lg shadow-amber-500/20'
                : 'bg-slate-900/80 text-slate-300 hover:text-white border border-slate-800'
            }`}
          >
            {t.rooms.filterPark}
          </button>
        </div>
      </div>

      {/* Room Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {filteredRooms.map((room) => {
          const currentImgIndex = selectedPhotoIndex[room.id] || 0;
          const activeImage = room.gallery[currentImgIndex] || room.image;
          const name = isBg && room.nameBg ? room.nameBg : room.name;
          const desc = isBg && room.descriptionBg ? room.descriptionBg : room.description;
          const view = isBg && room.viewBg ? room.viewBg : room.view;
          const badge = isBg && room.badgeBg ? room.badgeBg : room.badge;
          const amenities = isBg && room.amenitiesBg ? room.amenitiesBg : room.amenities;
          const bedType = isBg && room.bedTypeBg ? room.bedTypeBg : room.bedType;

          return (
            <div
              key={room.id}
              className="glass-panel rounded-3xl overflow-hidden border border-amber-500/20 hover:border-amber-400/50 transition-all duration-500 shadow-2xl flex flex-col justify-between group"
            >
              {/* Image & Interactive Gallery Carousel */}
              <div className="relative h-72 sm:h-80 overflow-hidden bg-slate-950">
                <img
                  src={activeImage}
                  alt={name}
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-700 brightness-95"
                />
                
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent"></div>

                {/* Badge if present */}
                {badge && (
                  <span className="absolute top-4 left-4 bg-gradient-to-r from-amber-500 to-amber-600 text-slate-950 text-[10px] font-extrabold uppercase tracking-widest px-3 py-1 rounded-full shadow-lg">
                    {badge}
                  </span>
                )}

                {/* 360° Virtual Tour Button */}
                <button
                  onClick={() => onOpenVirtualTour(room)}
                  className="absolute top-4 right-4 bg-slate-950/85 hover:bg-amber-400 hover:text-slate-950 text-amber-300 text-xs font-bold px-3 py-1.5 rounded-full border border-amber-400/40 backdrop-blur-md shadow-xl transition flex items-center space-x-1.5 group/btn cursor-pointer"
                >
                  <Compass className="w-3.5 h-3.5 group-hover/btn:rotate-180 transition duration-700 text-amber-400 group-hover/btn:text-slate-950" />
                  <span>{t.rooms.virtualTour}</span>
                </button>

                {/* Balcony View Pill */}
                <div className="absolute bottom-4 left-4 flex items-center space-x-2">
                  <span className="bg-slate-900/90 backdrop-blur-md border border-slate-700 text-slate-200 text-xs font-semibold px-3 py-1 rounded-lg flex items-center gap-1.5">
                    <Eye className="w-3.5 h-3.5 text-amber-400" />
                    <span>{view}</span>
                  </span>
                </div>

                {/* Gallery Thumbnail dots */}
                {room.gallery.length > 1 && (
                  <div className="absolute bottom-4 right-4 flex items-center space-x-1.5 bg-slate-950/70 backdrop-blur-md p-1 rounded-full">
                    {room.gallery.map((img, idx) => (
                      <button
                        key={idx}
                        onClick={() => handleThumbnailClick(room.id, idx)}
                        className={`w-2.5 h-2.5 rounded-full transition cursor-pointer ${currentImgIndex === idx ? 'bg-amber-400 scale-125' : 'bg-slate-500 hover:bg-slate-300'}`}
                        aria-label={`View photo ${idx + 1}`}
                      />
                    ))}
                  </div>
                )}
              </div>

              {/* Room Content & Specs */}
              <div className="p-6 sm:p-7 space-y-5 flex-grow flex flex-col justify-between">
                <div>
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                    <h3 className="text-2xl sm:text-3xl font-bold font-serif-luxury text-white">
                      {name}
                    </h3>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed line-clamp-3">
                    {desc}
                  </p>

                  {/* Room Specs Badges */}
                  <div className="grid grid-cols-3 gap-2 mt-4 pt-3 border-t border-slate-800/80 text-[11px] text-slate-300">
                    <div className="bg-slate-900/80 border border-slate-800 p-2 rounded-lg text-center">
                      <Maximize className="w-3.5 h-3.5 text-amber-400 mx-auto mb-0.5" />
                      <span>{room.sizeM2} m² {isBg ? 'Площ' : 'Space'}</span>
                    </div>
                    <div className="bg-slate-900/80 border border-slate-800 p-2 rounded-lg text-center">
                      <Users className="w-3.5 h-3.5 text-amber-400 mx-auto mb-0.5" />
                      <span>{isBg ? `${room.capacity.replace('Guests', 'Гости').replace('Adults', 'Възрастни')}` : room.capacity}</span>
                    </div>
                    <div className="bg-slate-900/80 border border-slate-800 p-2 rounded-lg text-center">
                      <Bed className="w-3.5 h-3.5 text-amber-400 mx-auto mb-0.5" />
                      <span className="truncate block">{bedType}</span>
                    </div>
                  </div>

                  {/* Amenities checklist */}
                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {amenities.slice(0, 5).map((amenity, idx) => (
                      <span
                        key={idx}
                        className="text-[10px] bg-slate-900/60 border border-slate-800 text-slate-300 px-2 py-0.5 rounded-md flex items-center gap-1"
                      >
                        <Check className="w-2.5 h-2.5 text-emerald-400" />
                        <span>{amenity}</span>
                      </span>
                    ))}
                    {amenities.length > 5 && (
                      <span className="text-[10px] text-amber-400 font-semibold px-1 py-0.5">
                        +{amenities.length - 5} {isBg ? 'още' : 'more'}
                      </span>
                    )}
                  </div>
                </div>

                {/* Pricing & CTA */}
                <div className="pt-5 border-t border-slate-800/80 flex items-center justify-between gap-4">
                  <div>
                    <span className="text-[10px] uppercase tracking-wider text-slate-400 block font-semibold">{t.rooms.from}</span>
                    <div className="flex items-baseline space-x-1">
                      <span className="text-3xl font-bold text-amber-300 font-serif-luxury">
                        {rate.symbol}{Math.round(room.priceEur * rate.rate)}
                      </span>
                      <span className="text-xs text-slate-400">{t.rooms.perNight}</span>
                    </div>
                  </div>

                  <div className="flex items-center space-x-2">
                    <button
                      onClick={() => onOpenVirtualTour(room)}
                      className="hidden sm:inline-flex px-3.5 py-2.5 bg-slate-900 hover:bg-slate-800 border border-slate-700 text-slate-200 text-xs font-semibold rounded-xl transition cursor-pointer"
                    >
                      360° Tour
                    </button>
                    <button
                      onClick={() => onSelectRoom(room.id)}
                      className="px-5 py-2.5 bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 text-slate-950 font-bold uppercase tracking-wider text-xs rounded-xl shadow-lg shadow-amber-500/20 transition transform hover:scale-105 active:scale-95 cursor-pointer"
                    >
                      {t.rooms.reserveRoom}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};


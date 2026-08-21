import React, { useState } from 'react';
import { Star, Quote, CheckCircle2, ThumbsUp, Sparkles, ChevronLeft, ChevronRight } from 'lucide-react';
import { GUEST_REVIEWS } from '../data/hotelData';
import { Language } from '../types';
import { translations } from '../translations/translations';

interface GuestReviewsProps {
  language: Language;
}

export const GuestReviews: React.FC<GuestReviewsProps> = ({ language }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const t = translations[language] || translations.EN;
  const isBg = language === 'BG';

  const nextReview = () => {
    setCurrentIndex((prev) => (prev + 1) % GUEST_REVIEWS.length);
  };

  const prevReview = () => {
    setCurrentIndex((prev) => (prev - 1 + GUEST_REVIEWS.length) % GUEST_REVIEWS.length);
  };

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-amber-500/15">
      <div className="space-y-12">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 border-b border-slate-800 pb-8">
          <div>
            <div className="inline-flex items-center space-x-1.5 text-xs text-amber-400 font-bold uppercase tracking-widest mb-1">
              <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
              <span>{isBg ? '4.9 / 5.0 Рейтинг от над 1280 проверени отзива' : '4.9 / 5.0 Rating from 1,280+ Verified Guests'}</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold font-serif-luxury text-white">
              {t.reviews.title}
            </h2>
          </div>

          <div className="flex items-center space-x-2">
            <button
              onClick={prevReview}
              className="p-2.5 rounded-full bg-slate-900 hover:bg-amber-500 hover:text-slate-950 border border-slate-700 text-slate-300 transition cursor-pointer"
              aria-label="Previous Review"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={nextReview}
              className="p-2.5 rounded-full bg-slate-900 hover:bg-amber-500 hover:text-slate-950 border border-slate-700 text-slate-300 transition cursor-pointer"
              aria-label="Next Review"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* 3 Review Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {GUEST_REVIEWS.map((rev) => {
            const title = isBg && rev.titleBg ? rev.titleBg : rev.title;
            const comment = isBg && rev.commentBg ? rev.commentBg : rev.comment;
            const roomType = isBg && rev.roomTypeBg ? rev.roomTypeBg : rev.roomType;
            const country = isBg && rev.countryBg ? rev.countryBg : rev.country;

            return (
              <div
                key={rev.id}
                className="glass-panel p-6 sm:p-7 rounded-3xl border border-amber-500/20 hover:border-amber-400/50 transition-all duration-300 flex flex-col justify-between space-y-4"
              >
                <div className="space-y-3">
                  {/* Stars & Date */}
                  <div className="flex items-center justify-between">
                    <div className="flex space-x-1 text-amber-400">
                      {[...Array(rev.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                      ))}
                    </div>
                    <span className="text-[11px] text-slate-400">{rev.date}</span>
                  </div>

                  <h3 className="text-base font-bold font-serif-luxury text-white">
                    "{title}"
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed italic">
                    "{comment}"
                  </p>
                </div>

                {/* Author & Room Tag */}
                <div className="pt-4 border-t border-slate-800/80 flex items-center space-x-3">
                  <img
                    src={rev.avatar}
                    alt={rev.author}
                    className="w-10 h-10 rounded-full object-cover border border-amber-400/40"
                  />
                  <div className="text-xs">
                    <span className="font-bold text-white block flex items-center gap-1">
                      <span>{rev.author}</span>
                      <CheckCircle2 className="w-3 h-3 text-emerald-400 inline" />
                    </span>
                    <span className="text-slate-400 text-[11px] block">{country}</span>
                    <span className="text-amber-400/90 text-[10px] block font-medium">{roomType}</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};


import React, { useState } from 'react';
import { 
  Calendar as CalendarIcon, 
  Users, 
  BedDouble, 
  ShieldCheck, 
  Sparkles, 
  Tag, 
  ChevronDown, 
  Check,
  Percent
} from 'lucide-react';
import { Currency, Language, BookingState } from '../types';
import { translations } from '../translations/translations';

interface StickyBookingBarProps {
  currency: Currency;
  language: Language;
  bookingState: BookingState;
  setBookingState: React.Dispatch<React.SetStateAction<BookingState>>;
  onCheckAvailability: () => void;
}

export const StickyBookingBar: React.FC<StickyBookingBarProps> = ({
  currency,
  language,
  bookingState,
  setBookingState,
  onCheckAvailability,
}) => {
  const [promoOpen, setPromoOpen] = useState(false);
  const [promoApplied, setPromoApplied] = useState(false);
  const [promoError, setPromoError] = useState('');
  const [guestsDropdown, setGuestsDropdown] = useState(false);

  const t = translations[language] || translations.EN;

  // Conversion multipliers
  const currencyRates: Record<Currency, { symbol: string; rate: number }> = {
    EUR: { symbol: '€', rate: 1 },
    BGN: { symbol: 'лв', rate: 1.95583 },
    USD: { symbol: '$', rate: 1.08 },
    GBP: { symbol: '£', rate: 0.85 },
  };

  const currentRate = currencyRates[currency];

  const handleApplyPromo = () => {
    if (bookingState.promoCode.trim().toUpperCase() === 'SIRIUS2026' || bookingState.promoCode.trim().toUpperCase() === 'VIPSPA') {
      setPromoApplied(true);
      setPromoError('');
    } else if (bookingState.promoCode.trim().length > 0) {
      setPromoError(language === 'BG' ? 'Невалиден код. Опитайте "SIRIUS2026" за 10% отстъпка' : 'Invalid code. Try "SIRIUS2026" for 10% off');
      setPromoApplied(false);
    }
  };

  return (
    <div id="booking-bar" className="relative z-30 max-w-6xl mx-auto px-4 -mt-12 mb-20">
      <div className="glass-panel p-5 sm:p-7 rounded-2xl sm:rounded-3xl shadow-2xl border border-amber-500/30 backdrop-blur-2xl">
        
        {/* Top Guarantee Bar */}
        <div className="flex flex-wrap items-center justify-between gap-3 border-b border-amber-500/15 pb-4 mb-5 text-xs">
          <div className="flex items-center space-x-2">
            <div className="p-1 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
              <ShieldCheck className="w-4 h-4" />
            </div>
            <span className="font-semibold text-amber-200 tracking-wider uppercase text-[11px]">
              {language === 'BG' ? 'Гаранция за най-добра цена при директна резервация' : 'Direct Booking Best Rate Guaranteed'}
            </span>
            <span className="hidden md:inline text-slate-400">
              • {language === 'BG' ? 'Включен безплатен достъп до 38°C термален СПА комплекс' : 'Includes Free Daily 38°C Thermal Spa Circuit'}
            </span>
          </div>

          <div className="flex items-center space-x-4">
            <button
              onClick={() => setPromoOpen(!promoOpen)}
              className="text-amber-400 hover:text-amber-300 transition flex items-center space-x-1 font-medium text-[11px] cursor-pointer"
            >
              <Tag className="w-3.5 h-3.5" />
              <span>{promoApplied ? 'Promo: SIRIUS2026 (-10%)' : (language === 'BG' ? 'Имате промо код?' : 'Have a Promo Code?')}</span>
            </button>

            <span className="bg-amber-400/10 text-amber-300 px-2.5 py-0.5 rounded-full border border-amber-400/20 text-[10px] uppercase font-bold tracking-wider">
              {language === 'BG' ? 'Моментно потвърждение' : 'Instant Confirmation'}
            </span>
          </div>
        </div>

        {/* Promo code drawer */}
        {promoOpen && (
          <div className="mb-5 p-3 rounded-xl bg-slate-900/90 border border-amber-500/30 flex flex-wrap items-center gap-3 animate-fade-in">
            <span className="text-xs text-slate-300">
              {language === 'BG' ? 'Въведете промо или корпоративен код:' : 'Enter Promo or Corporate Code:'}
            </span>
            <div className="flex items-center gap-2 flex-grow max-w-sm">
              <input
                type="text"
                placeholder={language === 'BG' ? 'Опитайте: SIRIUS2026' : 'Try: SIRIUS2026'}
                value={bookingState.promoCode}
                onChange={(e) => setBookingState({ ...bookingState, promoCode: e.target.value })}
                className="bg-slate-950 border border-slate-700 text-white rounded-lg px-3 py-1.5 text-xs uppercase tracking-wider focus:border-amber-400 outline-none flex-grow"
              />
              <button
                type="button"
                onClick={handleApplyPromo}
                className="px-3 py-1.5 bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold rounded-lg text-xs transition cursor-pointer"
              >
                {language === 'BG' ? 'Приложи' : 'Apply'}
              </button>
            </div>
            {promoApplied && (
              <span className="text-emerald-400 text-xs flex items-center gap-1 font-semibold">
                <Check className="w-3.5 h-3.5" /> {language === 'BG' ? '10% директна отстъпка е начислена!' : '10% Direct Discount Applied!'}
              </span>
            )}
            {promoError && (
              <span className="text-rose-400 text-xs">{promoError}</span>
            )}
          </div>
        )}

        {/* Direct Booking Engine Inputs */}
        <form 
          onSubmit={(e) => {
            e.preventDefault();
            onCheckAvailability();
          }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-3.5"
        >
          {/* Check-in / Check-out Dates */}
          <div className="lg:col-span-4 bg-slate-900/80 hover:bg-slate-900 border border-slate-700/80 hover:border-amber-400/40 rounded-xl p-3 transition">
            <label className="block text-[10px] uppercase tracking-widest text-slate-400 font-bold mb-1 flex items-center justify-between">
              <span className="flex items-center gap-1">
                <CalendarIcon className="w-3 h-3 text-amber-400" />
                <span>{t.bookingBar.checkIn} — {t.bookingBar.checkOut}</span>
              </span>
              <span className="text-amber-400/80 lowercase">{language === 'BG' ? '5 нощувки' : '5 nights'}</span>
            </label>
            <div className="grid grid-cols-2 gap-2 text-xs">
              <input
                type="date"
                value={bookingState.checkIn}
                onChange={(e) => setBookingState({ ...bookingState, checkIn: e.target.value })}
                className="w-full bg-slate-950/70 border border-slate-800 text-slate-200 px-2 py-1.5 rounded-lg text-xs focus:border-amber-400 outline-none"
              />
              <input
                type="date"
                value={bookingState.checkOut}
                onChange={(e) => setBookingState({ ...bookingState, checkOut: e.target.value })}
                className="w-full bg-slate-950/70 border border-slate-800 text-slate-200 px-2 py-1.5 rounded-lg text-xs focus:border-amber-400 outline-none"
              />
            </div>
          </div>

          {/* Guests Count */}
          <div className="lg:col-span-3 bg-slate-900/80 hover:bg-slate-900 border border-slate-700/80 hover:border-amber-400/40 rounded-xl p-3 transition relative">
            <label className="block text-[10px] uppercase tracking-widest text-slate-400 font-bold mb-1 flex items-center gap-1">
              <Users className="w-3 h-3 text-amber-400" />
              <span>{t.bookingBar.guests}</span>
            </label>
            <button
              type="button"
              onClick={() => setGuestsDropdown(!guestsDropdown)}
              className="w-full text-left bg-slate-950/70 border border-slate-800 text-slate-200 px-3 py-1.5 rounded-lg text-xs flex items-center justify-between cursor-pointer"
            >
              <span className="font-semibold text-white">
                {bookingState.adults} {language === 'BG' ? 'Възрастни' : 'Adults'}, {bookingState.children} {language === 'BG' ? 'Деца' : 'Children'}
              </span>
              <ChevronDown className="w-3.5 h-3.5 text-slate-400" />
            </button>

            {guestsDropdown && (
              <div className="absolute left-0 right-0 top-full mt-2 bg-[#0c1a2c] border border-amber-500/30 rounded-xl p-4 shadow-2xl z-50 space-y-3">
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-xs font-semibold text-white block">{t.bookingBar.adultsLabel}</span>
                    <span className="text-[10px] text-slate-400">{language === 'BG' ? '13+ год.' : 'Ages 13+'}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <button
                      type="button"
                      disabled={bookingState.adults <= 1}
                      onClick={() => setBookingState({ ...bookingState, adults: bookingState.adults - 1 })}
                      className="w-7 h-7 rounded-lg bg-slate-800 hover:bg-slate-700 text-white disabled:opacity-30 text-sm font-bold cursor-pointer"
                    >
                      -
                    </button>
                    <span className="w-6 text-center text-xs font-bold text-white">{bookingState.adults}</span>
                    <button
                      type="button"
                      disabled={bookingState.adults >= 4}
                      onClick={() => setBookingState({ ...bookingState, adults: bookingState.adults + 1 })}
                      className="w-7 h-7 rounded-lg bg-slate-800 hover:bg-slate-700 text-white disabled:opacity-30 text-sm font-bold cursor-pointer"
                    >
                      +
                    </button>
                  </div>
                </div>

                <div className="flex items-center justify-between border-t border-slate-800 pt-2">
                  <div>
                    <span className="text-xs font-semibold text-white block">{t.bookingBar.childrenLabel}</span>
                    <span className="text-[10px] text-slate-400">{language === 'BG' ? '0-12 год. (Безплатно < 4)' : 'Ages 0-12 (Free < 4)'}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <button
                      type="button"
                      disabled={bookingState.children <= 0}
                      onClick={() => setBookingState({ ...bookingState, children: bookingState.children - 1 })}
                      className="w-7 h-7 rounded-lg bg-slate-800 hover:bg-slate-700 text-white disabled:opacity-30 text-sm font-bold cursor-pointer"
                    >
                      -
                    </button>
                    <span className="w-6 text-center text-xs font-bold text-white">{bookingState.children}</span>
                    <button
                      type="button"
                      disabled={bookingState.children >= 3}
                      onClick={() => setBookingState({ ...bookingState, children: bookingState.children + 1 })}
                      className="w-7 h-7 rounded-lg bg-slate-800 hover:bg-slate-700 text-white disabled:opacity-30 text-sm font-bold cursor-pointer"
                    >
                      +
                    </button>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => setGuestsDropdown(false)}
                  className="w-full py-1.5 bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold rounded-lg text-xs transition cursor-pointer"
                >
                  {language === 'BG' ? 'Готово' : 'Done'}
                </button>
              </div>
            )}
          </div>

          {/* Room Category */}
          <div className="lg:col-span-3 bg-slate-900/80 hover:bg-slate-900 border border-slate-700/80 hover:border-amber-400/40 rounded-xl p-3 transition">
            <label className="block text-[10px] uppercase tracking-widest text-slate-400 font-bold mb-1 flex items-center gap-1">
              <BedDouble className="w-3 h-3 text-amber-400" />
              <span>{t.bookingBar.roomType}</span>
            </label>
            <select
              value={bookingState.roomType}
              onChange={(e) => setBookingState({ ...bookingState, roomType: e.target.value })}
              className="w-full bg-slate-950/70 border border-slate-800 text-slate-200 px-3 py-1.5 rounded-lg text-xs focus:border-amber-400 outline-none font-medium cursor-pointer"
            >
              <option value="deluxe-sea-view">
                {language === 'BG' ? 'Делукс Морска гледка' : 'Deluxe Frontline Sea View'} (от {currentRate.symbol}{Math.round(145 * currentRate.rate)})
              </option>
              <option value="captain-ship-suite">
                {language === 'BG' ? 'Капитански VIP апартамент' : "Captain's Ship Suite"} (от {currentRate.symbol}{Math.round(240 * currentRate.rate)})
              </option>
              <option value="superior-park-view">
                {language === 'BG' ? 'Супериор Парков изглед' : 'Superior Botanical Park View'} (от {currentRate.symbol}{Math.round(110 * currentRate.rate)})
              </option>
              <option value="executive-family-suite">
                {language === 'BG' ? 'Фамилен морски апартамент' : 'Executive Family Sea Suite'} (от {currentRate.symbol}{Math.round(210 * currentRate.rate)})
              </option>
            </select>
          </div>

          {/* CTA Check Availability Button */}
          <div className="lg:col-span-2 flex items-end">
            <button
              type="submit"
              className="w-full h-full min-h-[48px] bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 hover:from-amber-300 hover:to-amber-500 text-slate-950 font-bold uppercase tracking-wider text-xs rounded-xl shadow-xl shadow-amber-500/20 transition transform hover:-translate-y-0.5 active:translate-y-0 flex flex-col items-center justify-center py-2 cursor-pointer"
            >
              <span className="font-extrabold text-sm">{t.bookingBar.btnCheck}</span>
              <span className="text-[9px] text-slate-900 font-semibold opacity-90">
                {language === 'BG' ? 'Гарантирана най-добра цена' : 'Best Price Guaranteed'}
              </span>
            </button>
          </div>
        </form>

        {/* Small Benefit Tickers under Booking Bar */}
        <div className="mt-4 pt-3 border-t border-slate-800/80 flex flex-wrap items-center justify-center sm:justify-between text-[11px] text-slate-400 gap-2">
          <span className="flex items-center gap-1 text-slate-300">
            <Check className="w-3.5 h-3.5 text-emerald-400" /> 
            {language === 'BG' ? 'Безплатна анулация до 48 часа преди настаняване' : 'Free cancellation up to 48 hours prior'}
          </span>
          <span className="flex items-center gap-1 text-slate-300">
            <Check className="w-3.5 h-3.5 text-emerald-400" /> 
            {language === 'BG' ? 'Без такси за резервация или скрити курортни такси' : 'No booking fees or hidden resort charges'}
          </span>
          <span className="flex items-center gap-1 text-amber-300 font-medium">
            <Sparkles className="w-3.5 h-3.5 text-amber-400" /> 
            {language === 'BG' ? 'Безплатен минерален СПА достъп за всички директни резервации' : 'Free Mineral Spa access included for all direct bookings'}
          </span>
        </div>
      </div>
    </div>
  );
};


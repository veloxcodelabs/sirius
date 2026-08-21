import React, { useState } from 'react';
import { X, Sparkles, Clock, Calendar, Check, HeartHandshake, Droplet } from 'lucide-react';
import { SPA_TREATMENTS } from '../../data/hotelData';
import { Currency, Language } from '../../types';

interface SpaTreatmentModalProps {
  isOpen: boolean;
  onClose: () => void;
  currency: Currency;
  language?: Language;
  initialTreatmentName?: string;
}

export const SpaTreatmentModal: React.FC<SpaTreatmentModalProps> = ({
  isOpen,
  onClose,
  currency,
  language = 'EN',
  initialTreatmentName,
}) => {
  const [treatment, setTreatment] = useState(initialTreatmentName || SPA_TREATMENTS[0].name);
  const [preferredDate, setPreferredDate] = useState('2026-08-26');
  const [timeSlot, setTimeSlot] = useState('11:00');
  const [guestName, setGuestName] = useState('');
  const [roomNumber, setRoomNumber] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);

  if (!isOpen) return null;

  const isBg = language === 'BG';

  const currencyRates: Record<Currency, { symbol: string; rate: number }> = {
    EUR: { symbol: '€', rate: 1 },
    BGN: { symbol: 'лв', rate: 1.95583 },
    USD: { symbol: '$', rate: 1.08 },
    GBP: { symbol: '£', rate: 0.85 },
  };
  const rate = currencyRates[currency];

  const selectedTreatmentObj = SPA_TREATMENTS.find(t => t.name === treatment || t.nameBg === treatment) || SPA_TREATMENTS[0];
  const treatmentDesc = isBg && selectedTreatmentObj.descriptionBg ? selectedTreatmentObj.descriptionBg : selectedTreatmentObj.description;
  const treatmentCat = isBg && selectedTreatmentObj.categoryBg ? selectedTreatmentObj.categoryBg : selectedTreatmentObj.category;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSuccess(true);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/80 backdrop-blur-md flex items-center justify-center p-4 animate-fade-in">
      <div className="relative w-full max-w-xl glass-panel rounded-3xl border border-cyan-500/40 shadow-2xl overflow-hidden my-8">
        
        {/* Header */}
        <div className="bg-gradient-to-r from-[#0a192f] via-[#0e2744] to-[#0a192f] border-b border-cyan-500/20 px-6 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Droplet className="w-4 h-4 text-cyan-400" />
            <span className="font-cinzel text-base font-bold tracking-wider text-white uppercase">
              {isBg ? 'Балнеология и СПА процедура' : 'Balneotherapy & Spa Appointment'}
            </span>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-full bg-slate-800 hover:bg-slate-700 text-slate-300 transition cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {!isSuccess ? (
          <form onSubmit={handleSubmit} className="p-6 sm:p-8 space-y-5">
            <div>
              <label className="block text-xs uppercase font-bold text-slate-300 mb-1">
                {isBg ? 'Изберете СПА ритуал / процедура' : 'Select Ritual / Treatment'}
              </label>
              <select
                value={treatment}
                onChange={(e) => setTreatment(e.target.value)}
                className="w-full bg-slate-900 border border-slate-700 rounded-xl p-3 text-xs text-white focus:border-cyan-400 outline-none font-medium"
              >
                {SPA_TREATMENTS.map(t => {
                  const tName = isBg && t.nameBg ? t.nameBg : t.name;
                  return (
                    <option key={t.id} value={tName}>
                      {tName} ({t.durationMin} {isBg ? 'мин' : 'min'} • {rate.symbol}{Math.round(t.priceEur * rate.rate)})
                    </option>
                  );
                })}
                <option value={isBg ? 'Дневен пропуск за закрит 38°C термален басейн' : 'Indoor 38°C Thermal Pool Day Pass'}>
                  {isBg ? 'Дневен пропуск за закрит 38°C термален басейн' : 'Indoor 38°C Thermal Balneo Pool Day Pass'}
                </option>
                <option value={isBg ? 'Сауна парк и хималайска солна стая' : 'Sauna Village & Himalayan Salt Room Circuit'}>
                  {isBg ? 'Сауна парк и хималайска солна стая' : 'Sauna Village & Himalayan Salt Room Circuit'}
                </option>
              </select>
            </div>

            <div className="p-3.5 rounded-xl bg-cyan-950/40 border border-cyan-500/30 text-xs text-slate-300 space-y-1">
              <span className="text-cyan-300 font-semibold block">{treatmentCat}</span>
              <p>{treatmentDesc}</p>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block text-xs uppercase font-bold text-slate-300 mb-1">{isBg ? 'Дата' : 'Preferred Date'}</label>
                <input
                  type="date"
                  value={preferredDate}
                  onChange={(e) => setPreferredDate(e.target.value)}
                  className="w-full bg-slate-900 border border-slate-700 rounded-xl p-2.5 text-xs text-white focus:border-cyan-400 outline-none"
                />
              </div>
              <div>
                <label className="block text-xs uppercase font-bold text-slate-300 mb-1">{isBg ? 'Час' : 'Time Slot'}</label>
                <select
                  value={timeSlot}
                  onChange={(e) => setTimeSlot(e.target.value)}
                  className="w-full bg-slate-900 border border-slate-700 rounded-xl p-2.5 text-xs text-white focus:border-cyan-400 outline-none"
                >
                  <option>09:30</option>
                  <option>11:00</option>
                  <option>14:00</option>
                  <option>16:30</option>
                  <option>18:00</option>
                </select>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block text-xs uppercase font-bold text-slate-300 mb-1">{isBg ? 'Име на госта' : 'Guest Name'}</label>
                <input
                  type="text"
                  required
                  placeholder={isBg ? 'Вашето име' : 'Your Name'}
                  value={guestName}
                  onChange={(e) => setGuestName(e.target.value)}
                  className="w-full bg-slate-900 border border-slate-700 rounded-xl p-2.5 text-xs text-white focus:border-cyan-400 outline-none"
                />
              </div>
              <div>
                <label className="block text-xs uppercase font-bold text-slate-300 mb-1">{isBg ? 'Номер на стая' : 'Room # (if staying)'}</label>
                <input
                  type="text"
                  placeholder={isBg ? 'напр. 402 или външен гост' : 'e.g. 402 or Day Visitor'}
                  value={roomNumber}
                  onChange={(e) => setRoomNumber(e.target.value)}
                  className="w-full bg-slate-900 border border-slate-700 rounded-xl p-2.5 text-xs text-white focus:border-cyan-400 outline-none"
                />
              </div>
            </div>

            <button
              type="submit"
              className="w-full py-3.5 bg-gradient-to-r from-cyan-400 to-blue-500 hover:from-cyan-300 text-slate-950 font-bold uppercase tracking-wider text-xs rounded-xl shadow-lg transition cursor-pointer"
            >
              {isBg ? 'Потвърди СПА резервацията' : 'Confirm Spa Appointment'}
            </button>
          </form>
        ) : (
          <div className="p-8 text-center space-y-4 animate-fade-in">
            <div className="w-14 h-14 mx-auto rounded-full bg-cyan-500/20 border border-cyan-400 text-cyan-400 flex items-center justify-center">
              <Check className="w-7 h-7" />
            </div>
            <h3 className="text-2xl font-bold font-serif-luxury text-white">
              {isBg ? 'СПА часът е запазен' : 'Spa Treatment Reserved'}
            </h3>
            <p className="text-slate-300 text-xs leading-relaxed max-w-sm mx-auto">
              {isBg 
                ? <>Вашият час за <strong className="text-cyan-300">{treatment}</strong> на {preferredDate} в {timeSlot} ч. е потвърден. Моля, заповядайте 10 минути по-рано за билков чай и термална подготовка.</>
                : <>Your appointment for <strong className="text-cyan-300">{treatment}</strong> on {preferredDate} at {timeSlot} is confirmed. Please arrive 10 minutes prior for herbal tea and thermal preparation.</>}
            </p>
            <button
              onClick={onClose}
              className="px-6 py-2.5 bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold uppercase text-xs rounded-xl transition cursor-pointer"
            >
              {isBg ? 'Готово' : 'Done'}
            </button>
          </div>
        )}
      </div>
    </div>
  );
};


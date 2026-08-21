import React, { useState } from 'react';
import { X, Anchor, Utensils, Calendar, Clock, Check, Users, Compass } from 'lucide-react';
import { Language } from '../../types';

interface TableReservationModalProps {
  isOpen: boolean;
  onClose: () => void;
  language?: Language;
}

export const TableReservationModal: React.FC<TableReservationModalProps> = ({
  isOpen,
  onClose,
  language = 'EN',
}) => {
  const [date, setDate] = useState('2026-08-25');
  const [time, setTime] = useState('19:30');
  const [guests, setGuests] = useState('2 Guests');
  const [seatingArea, setSeatingArea] = useState('Upper Panoramic Open Deck (Sunset View)');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [notes, setNotes] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);

  if (!isOpen) return null;

  const isBg = language === 'BG';

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSuccess(true);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/80 backdrop-blur-md flex items-center justify-center p-4 animate-fade-in">
      <div className="relative w-full max-w-xl glass-panel rounded-3xl border border-amber-500/40 shadow-2xl overflow-hidden my-8">
        
        {/* Header */}
        <div className="bg-gradient-to-r from-[#0a192f] via-[#152e4d] to-[#0a192f] border-b border-amber-500/20 px-6 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Anchor className="w-4 h-4 text-amber-400" />
            <span className="font-cinzel text-base font-bold tracking-wider text-amber-100 uppercase">
              {isBg ? 'Кораб Сириус • Резервация на маса' : 'The Sirius Ship • Table Reservation'}
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
          <form onSubmit={handleSubmit} className="p-6 sm:p-8 space-y-4">
            <div className="space-y-1">
              <label className="block text-xs uppercase font-bold text-slate-300">
                {isBg ? 'Изберете зона на кораба-галеон' : 'Choose Galleon Seating Zone'}
              </label>
              <select
                value={seatingArea}
                onChange={(e) => setSeatingArea(e.target.value)}
                className="w-full bg-slate-900 border border-slate-700 rounded-xl p-3 text-xs text-white focus:border-amber-400 outline-none font-semibold"
              >
                <option>{isBg ? 'Горна панорамна открита палуба (Гледка залез & вълни)' : 'Upper Panoramic Open Deck (Sunset & Waves View)'}</option>
                <option>{isBg ? 'Исторически дървен капитански салон (Уют & климатик)' : "Captain's Historic Wooden Saloon (Intimate & Air Conditioned)"}</option>
                <option>{isBg ? 'Крайбрежна пирс тераса (Директен достъп до пясъка)' : 'Waterfront Pier Shore Terrace (Direct Sand Access)'}</option>
              </select>
            </div>

            <div className="grid grid-cols-3 gap-3">
              <div>
                <label className="block text-[11px] uppercase font-bold text-slate-300 mb-1">{isBg ? 'Дата' : 'Date'}</label>
                <input
                  type="date"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  className="w-full bg-slate-900 border border-slate-700 rounded-xl p-2.5 text-xs text-white focus:border-amber-400 outline-none"
                />
              </div>

              <div>
                <label className="block text-[11px] uppercase font-bold text-slate-300 mb-1">{isBg ? 'Час' : 'Time'}</label>
                <select
                  value={time}
                  onChange={(e) => setTime(e.target.value)}
                  className="w-full bg-slate-900 border border-slate-700 rounded-xl p-2.5 text-xs text-white focus:border-amber-400 outline-none"
                >
                  <option>18:30 ({isBg ? 'Златен час' : 'Golden Hour'})</option>
                  <option>19:30 ({isBg ? 'Вечеря по залез' : 'Sunset Dinner'})</option>
                  <option>20:30 ({isBg ? 'Вечерна атмосфера' : 'Evening Vibe'})</option>
                  <option>13:00 ({isBg ? 'Морски обяд' : 'Seafood Lunch'})</option>
                </select>
              </div>

              <div>
                <label className="block text-[11px] uppercase font-bold text-slate-300 mb-1">{isBg ? 'Гости' : 'Guests'}</label>
                <select
                  value={guests}
                  onChange={(e) => setGuests(e.target.value)}
                  className="w-full bg-slate-900 border border-slate-700 rounded-xl p-2.5 text-xs text-white focus:border-amber-400 outline-none"
                >
                  <option>{isBg ? '2 Гости' : '2 Guests'}</option>
                  <option>{isBg ? '4 Гости' : '4 Guests'}</option>
                  <option>{isBg ? '6 Гости (Семейна маса)' : '6 Guests (Family Table)'}</option>
                  <option>{isBg ? '1 Гост' : '1 Guest'}</option>
                </select>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block text-[11px] uppercase font-bold text-slate-300 mb-1">{isBg ? 'Име на госта' : 'Guest Name'}</label>
                <input
                  type="text"
                  required
                  placeholder={isBg ? 'Вашето име' : 'Your Name'}
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full bg-slate-900 border border-slate-700 rounded-xl p-2.5 text-xs text-white focus:border-amber-400 outline-none"
                />
              </div>

              <div>
                <label className="block text-[11px] uppercase font-bold text-slate-300 mb-1">{isBg ? 'Телефон за контакт' : 'Contact Phone'}</label>
                <input
                  type="tel"
                  required
                  placeholder="+359..."
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full bg-slate-900 border border-slate-700 rounded-xl p-2.5 text-xs text-white focus:border-amber-400 outline-none"
                />
              </div>
            </div>

            <div>
              <label className="block text-[11px] uppercase font-bold text-slate-300 mb-1">
                {isBg ? 'Специален повод / Предпочитания' : 'Special Occasion / Dietary Needs'}
              </label>
              <input
                type="text"
                placeholder={isBg ? 'напр. Годишнина, морски дарове, маса до прозореца' : 'e.g. Anniversary, seafood lovers, window table'}
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                className="w-full bg-slate-900 border border-slate-700 rounded-xl p-2.5 text-xs text-white focus:border-amber-400 outline-none"
              />
            </div>

            <button
              type="submit"
              className="w-full py-3.5 bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 hover:from-amber-300 text-slate-950 font-bold uppercase tracking-wider text-xs rounded-xl shadow-lg transition cursor-pointer"
            >
              {isBg ? 'Потвърди резервацията на маса' : 'Confirm Galleon Table Reservation'}
            </button>
          </form>
        ) : (
          <div className="p-8 text-center space-y-4 animate-fade-in">
            <div className="w-14 h-14 mx-auto rounded-full bg-amber-500/20 border border-amber-400 text-amber-400 flex items-center justify-center">
              <Check className="w-7 h-7" />
            </div>
            <h3 className="text-2xl font-bold font-serif-luxury text-white">
              {isBg ? 'Масата в Кораб Сириус е резервирана' : 'Table Reserved at The Sirius Ship'}
            </h3>
            <p className="text-slate-300 text-xs leading-relaxed max-w-sm mx-auto">
              {isBg
                ? <>Вашата маса за <strong className="text-amber-300">{guests}</strong> в зона <strong className="text-white">{seatingArea}</strong> на {date} в {time} ч. е потвърдена.</>
                : <>Your table for <strong className="text-amber-300">{guests}</strong> on the <strong className="text-white">{seatingArea}</strong> on {date} at {time} is confirmed.</>}
            </p>
            <button
              onClick={onClose}
              className="px-6 py-2.5 bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold uppercase text-xs rounded-xl transition cursor-pointer"
            >
              {isBg ? 'Готово' : 'Done'}
            </button>
          </div>
        )}
      </div>
    </div>
  );
};


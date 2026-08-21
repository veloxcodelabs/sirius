import React, { useState } from 'react';
import { 
  X, 
  Calendar, 
  Users, 
  BedDouble, 
  ShieldCheck, 
  Sparkles, 
  Check, 
  CreditCard,
  Lock,
  Phone,
  Mail,
  User,
  ArrowRight
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { ROOMS, PACKAGE_TIERS } from '../../data/hotelData';
import { Currency, BookingState, Room, Language } from '../../types';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  currency: Currency;
  language?: Language;
  bookingState: BookingState;
  setBookingState: React.Dispatch<React.SetStateAction<BookingState>>;
}

export const BookingModal: React.FC<BookingModalProps> = ({
  isOpen,
  onClose,
  currency,
  language = 'EN',
  bookingState,
  setBookingState,
}) => {
  const [step, setStep] = useState<'details' | 'success'>('details');
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [specialRequests, setSpecialRequests] = useState('');
  const [selectedRoomId, setSelectedRoomId] = useState(bookingState.roomType || ROOMS[0].id);
  const [selectedPkgId, setSelectedPkgId] = useState(bookingState.packageType || 'all-inclusive');

  if (!isOpen) return null;

  const isBg = language === 'BG';

  const currencyRates: Record<Currency, { symbol: string; rate: number }> = {
    EUR: { symbol: '€', rate: 1 },
    BGN: { symbol: 'лв', rate: 1.95583 },
    USD: { symbol: '$', rate: 1.08 },
    GBP: { symbol: '£', rate: 0.85 },
  };
  const rate = currencyRates[currency];

  const currentRoom = ROOMS.find(r => r.id === selectedRoomId) || ROOMS[0];
  const currentPkg = PACKAGE_TIERS.find(p => p.id === selectedPkgId) || PACKAGE_TIERS[1];

  const roomName = isBg && currentRoom.nameBg ? currentRoom.nameBg : currentRoom.name;
  const roomView = isBg && currentRoom.viewBg ? currentRoom.viewBg : currentRoom.view;
  const pkgName = isBg && currentPkg.nameBg ? currentPkg.nameBg : currentPkg.name;
  const pkgTagline = isBg && currentPkg.taglineBg ? currentPkg.taglineBg : currentPkg.tagline;

  // Calculate nights
  const checkInDate = new Date(bookingState.checkIn || '2026-08-25');
  const checkOutDate = new Date(bookingState.checkOut || '2026-08-30');
  const diffTime = Math.abs(checkOutDate.getTime() - checkInDate.getTime());
  const nights = Math.max(1, Math.ceil(diffTime / (1000 * 60 * 60 * 24)));

  const basePricePerNight = currentRoom.priceEur + (currentPkg.priceEurPerNight - 85);
  const promoDiscount = bookingState.promoCode.trim().toUpperCase() === 'SIRIUS2026' ? 0.9 : 1.0;
  const totalPrice = Math.round(basePricePerNight * nights * promoDiscount * rate.rate);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStep('success');
    try {
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 }
      });
    } catch {
      // safe fallback
    }
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/80 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 animate-fade-in">
      <div className="relative w-full max-w-3xl glass-panel rounded-3xl border border-amber-500/40 shadow-2xl overflow-hidden my-8">
        
        {/* Modal Header */}
        <div className="bg-gradient-to-r from-[#0a192f] via-[#132845] to-[#0a192f] border-b border-amber-500/20 px-6 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-400"></span>
            <span className="font-cinzel text-base font-bold tracking-wider text-amber-100 uppercase">
              {isBg ? 'Спа Хотел Сириус Бийч • Директна резервация' : 'Spa Hotel Sirius Beach • Direct Booking'}
            </span>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-full bg-slate-800 hover:bg-slate-700 text-slate-300 transition cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {step === 'details' ? (
          <div className="p-6 sm:p-8 space-y-6">
            
            {/* Direct Booking Benefit Alert */}
            <div className="p-3.5 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-between text-xs text-amber-200">
              <span className="flex items-center gap-1.5 font-semibold">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>{isBg ? 'Гаранция за най-добра директна цена' : 'Best Rate Direct Guarantee Applied'}</span>
              </span>
              <span className="text-slate-300">{isBg ? 'Включен безплатен достъп до 38°C термален басейн' : 'Free 38°C Thermal Pool Access Included'}</span>
            </div>

            {/* Room & Package Selection Summary */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-slate-900/90 border border-slate-800 p-4 rounded-2xl space-y-2">
                <label className="text-[10px] uppercase font-bold tracking-wider text-slate-400 block">
                  {isBg ? 'Избрана стая' : 'Selected Room'}
                </label>
                <select
                  value={selectedRoomId}
                  onChange={(e) => setSelectedRoomId(e.target.value)}
                  className="w-full bg-slate-950 border border-slate-700 text-white rounded-lg p-2 text-xs font-semibold focus:border-amber-400 outline-none"
                >
                  {ROOMS.map(r => {
                    const rName = isBg && r.nameBg ? r.nameBg : r.name;
                    return (
                      <option key={r.id} value={r.id}>
                        {rName} ({rate.symbol}{Math.round(r.priceEur * rate.rate)}/{isBg ? 'нощ' : 'nt'})
                      </option>
                    );
                  })}
                </select>
                <span className="text-[11px] text-amber-300 block">{roomView}</span>
              </div>

              <div className="bg-slate-900/90 border border-slate-800 p-4 rounded-2xl space-y-2">
                <label className="text-[10px] uppercase font-bold tracking-wider text-slate-400 block">
                  {isBg ? 'Изхранване & Пакет' : 'Boarding Tier'}
                </label>
                <select
                  value={selectedPkgId}
                  onChange={(e) => setSelectedPkgId(e.target.value)}
                  className="w-full bg-slate-950 border border-slate-700 text-white rounded-lg p-2 text-xs font-semibold focus:border-amber-400 outline-none"
                >
                  {PACKAGE_TIERS.map(p => {
                    const pName = isBg && p.nameBg ? p.nameBg : p.name;
                    return (
                      <option key={p.id} value={p.id}>
                        {pName} (+{rate.symbol}{Math.round((p.priceEurPerNight - 85) * rate.rate)}/{isBg ? 'нощ' : 'nt'})
                      </option>
                    );
                  })}
                </select>
                <span className="text-[11px] text-slate-400 block">{pkgTagline}</span>
              </div>
            </div>

            {/* Guest Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs uppercase font-bold text-slate-300 mb-1">
                    {isBg ? 'Име и фамилия' : 'Full Guest Name'}
                  </label>
                  <div className="relative">
                    <User className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                    <input
                      type="text"
                      required
                      placeholder={isBg ? 'напр. Мария Иванова' : 'e.g. Maria Ivanova'}
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      className="w-full bg-slate-900 border border-slate-700 rounded-xl pl-9 pr-3 py-2.5 text-xs text-white focus:border-amber-400 outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs uppercase font-bold text-slate-300 mb-1">
                    {isBg ? 'Имейл адрес' : 'Email Address'}
                  </label>
                  <div className="relative">
                    <Mail className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                    <input
                      type="email"
                      required
                      placeholder="e.g. maria@example.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full bg-slate-900 border border-slate-700 rounded-xl pl-9 pr-3 py-2.5 text-xs text-white focus:border-amber-400 outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs uppercase font-bold text-slate-300 mb-1">
                    {isBg ? 'Телефон за връзка' : 'Contact Phone Number'}
                  </label>
                  <div className="relative">
                    <Phone className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                    <input
                      type="tel"
                      required
                      placeholder="+359 884 899 900"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full bg-slate-900 border border-slate-700 rounded-xl pl-9 pr-3 py-2.5 text-xs text-white focus:border-amber-400 outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs uppercase font-bold text-slate-300 mb-1">
                    {isBg ? 'Специални изисквания' : 'Special Requests / Preferences'}
                  </label>
                  <input
                    type="text"
                    placeholder={isBg ? 'напр. тих етаж, детска кошара' : 'e.g. Quiet floor, baby cot, high pillow'}
                    value={specialRequests}
                    onChange={(e) => setSpecialRequests(e.target.value)}
                    className="w-full bg-slate-900 border border-slate-700 rounded-xl px-3 py-2.5 text-xs text-white focus:border-amber-400 outline-none"
                  />
                </div>
              </div>

              {/* Price Calculation Card */}
              <div className="p-4 rounded-2xl bg-gradient-to-r from-slate-900 via-[#10243d] to-slate-900 border border-amber-500/30 flex items-center justify-between">
                <div>
                  <span className="text-[10px] uppercase tracking-wider text-slate-400 block font-semibold">
                    {nights} {isBg ? 'Нощувки' : 'Nights'} • {bookingState.adults} {isBg ? 'Възрастни' : 'Adults'}, {bookingState.children} {isBg ? 'Деца' : 'Children'}
                  </span>
                  <span className="text-xs text-emerald-400 font-medium">
                    {isBg ? 'Без предварително плащане. Плащане при настаняване.' : 'No advance payment required. Pay upon check-in.'}
                  </span>
                </div>

                <div className="text-right">
                  <span className="text-[10px] uppercase text-slate-400 block font-semibold">
                    {isBg ? 'Обща гарантирана цена' : 'Total Guaranteed Price'}
                  </span>
                  <span className="text-3xl font-bold font-serif-luxury text-amber-300">
                    {rate.symbol}{totalPrice}
                  </span>
                </div>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-4 bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 hover:from-amber-300 text-slate-950 font-bold uppercase tracking-widest text-xs sm:text-sm rounded-2xl shadow-xl shadow-amber-500/25 transition transform hover:scale-[1.01] active:scale-[0.99] flex items-center justify-center space-x-2 cursor-pointer"
                >
                  <span>{isBg ? 'Завърши гарантираната резервация' : 'Complete Guaranteed Reservation'}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </form>
          </div>
        ) : (
          /* Confirmation Success Screen */
          <div className="p-8 sm:p-12 text-center space-y-6 animate-fade-in">
            <div className="w-16 h-16 mx-auto rounded-full bg-emerald-500/20 border border-emerald-400 text-emerald-400 flex items-center justify-center">
              <Check className="w-8 h-8" />
            </div>

            <div className="space-y-2">
              <span className="text-xs uppercase tracking-widest text-amber-400 font-bold">
                {isBg ? 'Резервацията е потвърдена!' : 'Reservation Confirmed!'}
              </span>
              <h3 className="text-3xl sm:text-4xl font-bold font-serif-luxury text-white">
                {isBg ? `Очакваме с нетърпение да Ви посрещнем, ${fullName || 'Уважаеми госте'}!` : `We Look Forward to Welcoming You, ${fullName || 'Honored Guest'}`}
              </h3>
              <p className="text-slate-300 text-sm max-w-md mx-auto">
                {isBg 
                  ? <>Код на резервация <strong className="text-amber-300 font-mono">SB-{Math.floor(100000 + Math.random() * 900000)}</strong> е регистриран. Потвърдителен ваучер е изпратен на {email || 'Вашия имейл'}.</>
                  : <>Confirmation code <strong className="text-amber-300 font-mono">SB-{Math.floor(100000 + Math.random() * 900000)}</strong> has been registered. A confirmation voucher has been sent to {email || 'your email'}.</>}
              </p>
            </div>

            <div className="glass-panel p-4 rounded-2xl max-w-md mx-auto text-left text-xs space-y-2 border border-slate-800">
              <div className="flex justify-between"><span className="text-slate-400">{isBg ? 'Хотел:' : 'Hotel:'}</span> <strong className="text-white">Spa Hotel Sirius Beach ****</strong></div>
              <div className="flex justify-between"><span className="text-slate-400">{isBg ? 'Дати:' : 'Dates:'}</span> <strong className="text-white">{bookingState.checkIn} {isBg ? 'до' : 'to'} {bookingState.checkOut} ({nights} {isBg ? 'нощувки' : 'nights'})</strong></div>
              <div className="flex justify-between"><span className="text-slate-400">{isBg ? 'Стая:' : 'Room:'}</span> <strong className="text-amber-300">{roomName}</strong></div>
              <div className="flex justify-between"><span className="text-slate-400">{isBg ? 'Пансион:' : 'Boarding:'}</span> <strong className="text-white">{pkgName}</strong></div>
              <div className="flex justify-between border-t border-slate-800 pt-2"><span className="text-slate-400">{isBg ? 'Крайна цена:' : 'Total Price:'}</span> <strong className="text-amber-300 text-sm font-bold">{rate.symbol}{totalPrice}</strong></div>
            </div>

            <button
              onClick={onClose}
              className="px-8 py-3 bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold uppercase tracking-wider text-xs rounded-xl transition cursor-pointer"
            >
              {isBg ? 'Затвори и се върни към сайта' : 'Close & Return to Resort Experience'}
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

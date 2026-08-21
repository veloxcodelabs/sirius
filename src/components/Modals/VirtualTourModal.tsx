import React, { useState } from 'react';
import { 
  X, 
  Compass, 
  RotateCw, 
  Eye, 
  Sparkles, 
  Bed, 
  Bath, 
  Sun, 
  Maximize2,
  Check,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';
import { Room, Currency, Language } from '../../types';

interface VirtualTourModalProps {
  room: Room | null;
  isOpen: boolean;
  onClose: () => void;
  currency: Currency;
  language?: Language;
  onBookRoom: (roomId: string) => void;
}

export const VirtualTourModal: React.FC<VirtualTourModalProps> = ({
  room,
  isOpen,
  onClose,
  currency,
  language = 'EN',
  onBookRoom,
}) => {
  const [panOffset, setPanOffset] = useState<number>(0);
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const [startX, setStartX] = useState<number>(0);
  const [viewAngle, setViewAngle] = useState<'bedroom' | 'balcony' | 'bathroom'>('bedroom');
  const [activeHotspot, setActiveHotspot] = useState<string | null>(null);

  if (!isOpen || !room) return null;

  const isBg = language === 'BG';

  const currencyRates: Record<Currency, { symbol: string; rate: number }> = {
    EUR: { symbol: '€', rate: 1 },
    BGN: { symbol: 'лв', rate: 1.95583 },
    USD: { symbol: '$', rate: 1.08 },
    GBP: { symbol: '£', rate: 0.85 },
  };
  const rate = currencyRates[currency];

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setStartX(e.clientX);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    const delta = e.clientX - startX;
    setPanOffset(prev => (prev + delta * 0.4) % 360);
    setStartX(e.clientX);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const angles = {
    bedroom: {
      title: isBg ? 'Основна спалня & King-size легло' : 'Master Bedroom & King Bed',
      image: room.virtualTour360 || room.image,
      hotspots: [
        { 
          id: 'h1', 
          title: isBg ? 'Хипоалергенен King матрак' : 'Hypoallergenic King Mattress', 
          desc: isBg ? 'Египетски памук 400 нишки & меню от възглавници' : 'Egyptian cotton 400TC linens with pillow menu', 
          x: '45%', 
          y: '60%' 
        },
        { 
          id: 'h2', 
          title: isBg ? 'Smart 4K телевизор' : 'Smart 4K Entertainment', 
          desc: isBg ? '55" Ultra HD екран със стрийминг канали' : '55" Ultra HD with streaming & resort info', 
          x: '75%', 
          y: '35%' 
        }
      ]
    },
    balcony: {
      title: isBg ? 'Директен балкон към плажа' : 'Direct Beachfront Balcony',
      image: room.gallery[1] || room.image,
      hotspots: [
        { 
          id: 'h3', 
          title: isBg ? 'Панорамна морска гледка' : 'Panoramic Wave View', 
          desc: isBg ? 'Открита панорама към Черно море и шезлонгите' : 'Unobstructed Black Sea coastline and sunbeds', 
          x: '50%', 
          y: '40%' 
        },
        { 
          id: 'h4', 
          title: isBg ? 'Ратанова мебел на балкона' : 'Outdoor Rattan Lounge', 
          desc: isBg ? 'Маса от тиково дърво за романтична закуска край вълните' : 'Teak table and loungers for private sea breakfast', 
          x: '25%', 
          y: '70%' 
        }
      ]
    },
    bathroom: {
      title: isBg ? 'Мраморна баня с термална минерална вода' : 'Marble Thermal Water Bathroom',
      image: room.gallery[2] || room.gallery[0] || room.image,
      hotspots: [
        { 
          id: 'h5', 
          title: isBg ? '38°C Термален минерален душ' : '38°C Thermal Mineral Shower', 
          desc: isBg ? 'Директно подавана лечебна минерална вода от извора в стаята' : 'Direct piped natural mineral spring water in-room', 
          x: '60%', 
          y: '50%' 
        }
      ]
    }
  };

  const currentAngleData = angles[viewAngle];
  const roomName = isBg && room.nameBg ? room.nameBg : room.name;
  const roomView = isBg && room.viewBg ? room.viewBg : room.view;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/85 backdrop-blur-md flex items-center justify-center p-2 sm:p-4 animate-fade-in">
      <div className="relative w-full max-w-4xl glass-panel rounded-3xl border border-amber-500/40 shadow-2xl overflow-hidden my-4">
        
        {/* Top Header */}
        <div className="bg-gradient-to-r from-[#0a192f] via-[#142a47] to-[#0a192f] border-b border-amber-500/20 px-6 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Compass className="w-5 h-5 text-amber-400 animate-spin-slow" />
            <div>
              <span className="font-cinzel text-base font-bold tracking-wider text-white uppercase block">
                {isBg ? '360° Интерактивна виртуална обиколка' : '360° Interactive Virtual Tour'}
              </span>
              <span className="text-[10px] text-amber-300 uppercase tracking-widest font-semibold">
                {roomName}
              </span>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-full bg-slate-800 hover:bg-slate-700 text-slate-300 transition cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* 360 Interactive Viewport */}
        <div 
          className="relative h-[380px] sm:h-[460px] overflow-hidden bg-black cursor-grab active:cursor-grabbing select-none"
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp}
        >
          {/* Panable Image Layer */}
          <div 
            className="w-[140%] h-full absolute top-0 -left-[20%] transition-transform duration-75 ease-out"
            style={{ transform: `translateX(${panOffset * 0.6}px) scale(1.08)` }}
          >
            <img
              src={currentAngleData.image}
              alt={currentAngleData.title}
              className="w-full h-full object-cover filter brightness-95"
              draggable={false}
            />
          </div>

          {/* Top Instruction Banner */}
          <div className="absolute top-4 left-4 bg-slate-950/80 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-slate-700 text-[11px] text-slate-300 flex items-center space-x-2 pointer-events-none">
            <RotateCw className="w-3.5 h-3.5 text-amber-400 animate-spin" />
            <span>{isBg ? 'Кликнете и плъзнете наляво/надясно за 360° панорама' : 'Click and drag left/right to pan 360°'}</span>
          </div>

          {/* Interactive Hotspots */}
          {currentAngleData.hotspots.map((spot) => (
            <div
              key={spot.id}
              style={{ left: spot.x, top: spot.y }}
              className="absolute transform -translate-x-1/2 -translate-y-1/2 z-20"
            >
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setActiveHotspot(activeHotspot === spot.id ? null : spot.id);
                }}
                className="w-8 h-8 rounded-full bg-amber-400/90 text-slate-950 flex items-center justify-center font-bold text-xs shadow-xl animate-pulse hover:scale-125 transition cursor-pointer"
              >
                <Sparkles className="w-4 h-4" />
              </button>

              {activeHotspot === spot.id && (
                <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 w-56 bg-slate-900/95 backdrop-blur-md border border-amber-400/50 p-3 rounded-xl shadow-2xl text-left z-30 animate-fade-in">
                  <span className="text-amber-300 font-bold text-xs block">{spot.title}</span>
                  <p className="text-[11px] text-slate-300 mt-1">{spot.desc}</p>
                </div>
              )}
            </div>
          ))}

          {/* Angle Switcher Toolbar */}
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-slate-950/85 backdrop-blur-md p-1.5 rounded-full border border-amber-500/30 flex items-center space-x-1 z-20">
            <button
              onClick={(e) => { e.stopPropagation(); setViewAngle('bedroom'); }}
              className={`px-3 py-1.5 rounded-full text-xs font-semibold flex items-center space-x-1.5 transition cursor-pointer ${viewAngle === 'bedroom' ? 'bg-amber-400 text-slate-950 font-bold' : 'text-slate-300 hover:text-white'}`}
            >
              <Bed className="w-3.5 h-3.5" />
              <span>{isBg ? 'Спалня' : 'Bedroom'}</span>
            </button>
            <button
              onClick={(e) => { e.stopPropagation(); setViewAngle('balcony'); }}
              className={`px-3 py-1.5 rounded-full text-xs font-semibold flex items-center space-x-1.5 transition cursor-pointer ${viewAngle === 'balcony' ? 'bg-amber-400 text-slate-950 font-bold' : 'text-slate-300 hover:text-white'}`}
            >
              <Sun className="w-3.5 h-3.5" />
              <span>{isBg ? 'Морски балкон' : 'Sea Balcony'}</span>
            </button>
            <button
              onClick={(e) => { e.stopPropagation(); setViewAngle('bathroom'); }}
              className={`px-3 py-1.5 rounded-full text-xs font-semibold flex items-center space-x-1.5 transition cursor-pointer ${viewAngle === 'bathroom' ? 'bg-amber-400 text-slate-950 font-bold' : 'text-slate-300 hover:text-white'}`}
            >
              <Bath className="w-3.5 h-3.5" />
              <span>{isBg ? 'Термална баня' : 'Thermal Bath'}</span>
            </button>
          </div>
        </div>

        {/* Bottom Booking Bar */}
        <div className="p-6 bg-slate-900 border-t border-slate-800 flex flex-wrap items-center justify-between gap-4">
          <div>
            <span className="text-xs text-slate-400 block">{roomView} • {room.sizeM2} m² {isBg ? 'площ' : 'Space'}</span>
            <div className="flex items-baseline space-x-1">
              <span className="text-2xl font-bold font-serif-luxury text-amber-300">
                {rate.symbol}{Math.round(room.priceEur * rate.rate)}
              </span>
              <span className="text-xs text-slate-400">/{isBg ? 'нощувка' : 'night'}</span>
            </div>
          </div>

          <div className="flex items-center space-x-3">
            <button
              onClick={onClose}
              className="px-4 py-2.5 bg-slate-800 hover:bg-slate-700 text-slate-300 font-semibold text-xs rounded-xl transition cursor-pointer"
            >
              {isBg ? 'Затвори обиколката' : 'Close Tour'}
            </button>
            <button
              onClick={() => {
                onClose();
                onBookRoom(room.id);
              }}
              className="px-6 py-2.5 bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 text-slate-950 font-bold uppercase tracking-wider text-xs rounded-xl shadow-lg transition cursor-pointer"
            >
              {isBg ? 'Резервирай тази стая' : 'Reserve This Room'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};


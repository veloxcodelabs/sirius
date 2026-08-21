import React, { useState, useEffect } from 'react';
import { 
  Video, 
  Sun, 
  Wind, 
  Droplet, 
  Waves, 
  Camera, 
  Maximize2, 
  Compass, 
  Thermometer, 
  Clock, 
  Sparkles,
  Check
} from 'lucide-react';
import { TempUnit, Language } from '../types';
import { translations } from '../translations/translations';

interface LiveCamWeatherProps {
  tempUnit: TempUnit;
  language: Language;
}

export const LiveCamWeather: React.FC<LiveCamWeatherProps> = ({ tempUnit, language }) => {
  const [activeCam, setActiveCam] = useState<'beach' | 'thermal' | 'ship'>('beach');
  const [currentTime, setCurrentTime] = useState<string>('');
  const [snapshotTaken, setSnapshotTaken] = useState<boolean>(false);
  const [isFullscreen, setIsFullscreen] = useState<boolean>(false);

  const t = translations[language] || translations.EN;
  const isBg = language === 'BG';

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setCurrentTime(now.toLocaleTimeString(isBg ? 'bg-BG' : 'en-GB', { timeZone: 'Europe/Sofia' }) + ' EEST');
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, [isBg]);

  const cams = {
    beach: {
      name: isBg ? 'Черноморски бряг и плажна ивица (Камера #1)' : 'Black Sea Beachfront & Shore Cam (Cam #1)',
      image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1600&q=85',
      waveHeight: isBg ? '0.3 - 0.4 м (Спокойно море)' : '0.3 - 0.4 m (Gentle Swell)',
      seaTempC: 24.2,
      seaTempF: 75.5,
      fps: 30,
      bitrate: '4.8 Mbps HD'
    },
    thermal: {
      name: isBg ? 'Външен термален инфинити басейн 36°C (Камера #2)' : 'Outdoor 36°C Heated Infinity Pool Cam (Cam #2)',
      image: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1600&q=85',
      waveHeight: isBg ? 'Защитен басейнов хоризонт' : 'Protected Pool Horizon',
      seaTempC: 36.4,
      seaTempF: 97.5,
      fps: 60,
      bitrate: '6.2 Mbps 4K'
    },
    ship: {
      name: isBg ? 'Панорамна палуба на Кораб Сириус (Камера #3)' : 'The Sirius Ship Panoramic Deck Cam (Cam #3)',
      image: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=1600&q=85',
      waveHeight: isBg ? 'Морска зона на галеона' : 'Galleon Wave Splash Zone',
      seaTempC: 24.0,
      seaTempF: 75.2,
      fps: 30,
      bitrate: '5.1 Mbps HD'
    }
  };

  const currentCam = cams[activeCam];

  const handleSnapshot = () => {
    setSnapshotTaken(true);
    setTimeout(() => setSnapshotTaken(false), 3000);
  };

  return (
    <section id="livecam" className="py-24 bg-[#091524] border-t border-amber-500/20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto space-y-12">
        
        {/* Section Header */}
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full border border-red-500/30 bg-red-950/30 text-red-300 text-xs uppercase tracking-widest font-semibold">
            <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></span>
            <span>{isBg ? 'Директно излъчване от Св. св. Константин и Елена' : 'Real-Time Broadcast from St. Constantine & Elena'}</span>
          </div>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-serif-luxury text-white tracking-tight">
            {t.livecam.title}
          </h2>

          <p className="text-slate-300 text-base sm:text-lg">
            {t.livecam.subtitle}
          </p>

          {/* Camera Switcher Buttons */}
          <div className="pt-2 flex flex-wrap items-center justify-center gap-2">
            <button
              onClick={() => setActiveCam('beach')}
              className={`px-4 py-2 rounded-full text-xs font-bold transition flex items-center space-x-1.5 cursor-pointer ${
                activeCam === 'beach'
                  ? 'bg-amber-400 text-slate-950 shadow-lg'
                  : 'bg-slate-900/90 text-slate-300 hover:text-white border border-slate-800'
              }`}
            >
              <Video className="w-3.5 h-3.5" />
              <span>{t.livecam.camBeach}</span>
            </button>
            <button
              onClick={() => setActiveCam('thermal')}
              className={`px-4 py-2 rounded-full text-xs font-bold transition flex items-center space-x-1.5 cursor-pointer ${
                activeCam === 'thermal'
                  ? 'bg-amber-400 text-slate-950 shadow-lg'
                  : 'bg-slate-900/90 text-slate-300 hover:text-white border border-slate-800'
              }`}
            >
              <Waves className="w-3.5 h-3.5" />
              <span>{t.livecam.camPool}</span>
            </button>
            <button
              onClick={() => setActiveCam('ship')}
              className={`px-4 py-2 rounded-full text-xs font-bold transition flex items-center space-x-1.5 cursor-pointer ${
                activeCam === 'ship'
                  ? 'bg-amber-400 text-slate-950 shadow-lg'
                  : 'bg-slate-900/90 text-slate-300 hover:text-white border border-slate-800'
              }`}
            >
              <Compass className="w-3.5 h-3.5" />
              <span>{t.livecam.camShip}</span>
            </button>
          </div>
        </div>

        {/* Live Cam Stream Box & Weather Sensor Dashboard */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left: HD Live Camera Frame */}
          <div className="lg:col-span-8 space-y-3">
            <div className={`relative rounded-3xl overflow-hidden border border-amber-500/30 shadow-2xl bg-black ${isFullscreen ? 'fixed inset-4 z-50 rounded-none' : ''}`}>
              <img
                src={currentCam.image}
                alt={currentCam.name}
                className="w-full h-[400px] sm:h-[480px] object-cover filter brightness-95"
              />

              {/* HUD: Top Status Overlay */}
              <div className="absolute top-4 left-4 right-4 flex items-center justify-between pointer-events-none">
                <div className="flex items-center space-x-2 bg-slate-950/80 backdrop-blur-md px-3 py-1.5 rounded-full border border-red-500/40 text-xs font-bold text-white shadow-lg pointer-events-auto">
                  <span className="w-2.5 h-2.5 rounded-full bg-red-500 animate-ping"></span>
                  <span className="text-red-400 uppercase tracking-wider text-[11px]">{isBg ? 'НА ЖИВО HD' : 'LIVE HD STREAM'}</span>
                  <span className="text-slate-500">|</span>
                  <span className="text-slate-300 font-mono text-[11px]">{currentCam.fps} FPS</span>
                </div>

                <div className="bg-slate-950/80 backdrop-blur-md px-3 py-1.5 rounded-full border border-slate-700 text-[11px] font-mono text-amber-300 shadow-lg pointer-events-auto flex items-center space-x-1.5">
                  <Clock className="w-3 h-3 text-amber-400" />
                  <span>{currentTime}</span>
                </div>
              </div>

              {/* HUD: Bottom Controls & Info */}
              <div className="absolute bottom-4 left-4 right-4 bg-slate-950/85 backdrop-blur-md p-4 rounded-2xl border border-slate-800 flex flex-wrap items-center justify-between gap-3 text-xs">
                <div>
                  <span className="text-white font-bold text-sm block font-serif-luxury">
                    {currentCam.name}
                  </span>
                  <span className="text-slate-400 text-[11px]">
                    {isBg ? 'Координати: 43°13\'57"N 28°00\'52"E • Св. св. Константин и Елена' : 'Coordinates: 43°13\'57"N 28°00\'52"E • Saints Constantine & Helena'}
                  </span>
                </div>

                <div className="flex items-center space-x-2">
                  <button
                    onClick={handleSnapshot}
                    className="px-3 py-1.5 bg-slate-800 hover:bg-slate-700 text-slate-200 rounded-lg transition flex items-center space-x-1 text-xs font-semibold cursor-pointer"
                    title="Take Snapshot"
                  >
                    <Camera className="w-3.5 h-3.5 text-amber-400" />
                    <span>{snapshotTaken ? (isBg ? 'Запазено!' : 'Saved!') : (isBg ? 'Снимка' : 'Snapshot')}</span>
                  </button>
                  <button
                    onClick={() => setIsFullscreen(!isFullscreen)}
                    className="p-1.5 bg-slate-800 hover:bg-slate-700 text-slate-200 rounded-lg transition cursor-pointer"
                    title="Toggle Fullscreen"
                  >
                    <Maximize2 className="w-4 h-4 text-slate-300" />
                  </button>
                </div>
              </div>

              {/* Snapshot Feedback Toast */}
              {snapshotTaken && (
                <div className="absolute inset-0 bg-white/20 backdrop-blur-xs flex items-center justify-center animate-fade-in pointer-events-none">
                  <div className="bg-slate-900/95 border border-emerald-400 text-white px-5 py-3 rounded-2xl shadow-2xl flex items-center space-x-2">
                    <Check className="w-4 h-4 text-emerald-400" />
                    <span className="text-xs font-bold">{isBg ? 'Снимката е запазена в галерията!' : 'Beach Webcam Snapshot Saved to Gallery!'}</span>
                  </div>
                </div>
              )}
            </div>

            <div className="flex items-center justify-between text-xs text-slate-400 px-2">
              <span>{isBg ? '✦ HD камера на живо за метеорологични и морски условия' : '✦ High-definition live weather and marine camera updated every second'}</span>
              <span className="text-amber-400/80 font-semibold">{isBg ? 'Статус: Отличен (99.8% ъптайм)' : 'Feed Status: Optimal (99.8% Uptime)'}</span>
            </div>
          </div>

          {/* Right: Real-Time Weather & Marine Hydro Sensors */}
          <div className="lg:col-span-4 space-y-5">
            
            {/* Current Weather Card */}
            <div className="glass-panel p-6 rounded-3xl border border-amber-500/25 space-y-6 shadow-xl">
              <div className="flex items-center justify-between border-b border-slate-800 pb-4">
                <div>
                  <span className="text-[10px] uppercase tracking-widest text-amber-400 font-bold block">
                    {isBg ? 'Метеорологична станция' : 'Meteorological Station'}
                  </span>
                  <h3 className="text-xl font-bold font-serif-luxury text-white">
                    {isBg ? 'Св. св. Константин и Елена' : 'St. Constantine & Elena'}
                  </h3>
                </div>
                <div className="p-3 bg-amber-500/10 border border-amber-400/30 rounded-2xl text-amber-400">
                  <Sun className="w-8 h-8 animate-spin-slow" />
                </div>
              </div>

              {/* Big Temp Display */}
              <div className="flex items-baseline justify-between">
                <div>
                  <div className="flex items-baseline">
                    <span className="text-5xl sm:text-6xl font-bold font-serif-luxury text-white">
                      {tempUnit === 'C' ? '28°C' : '82.4°F'}
                    </span>
                  </div>
                  <span className="text-xs text-slate-300 font-medium mt-1 block">
                    {isBg ? 'Слънчево и лек морски бриз' : 'Sunny & Calm Sea Breeze'}
                  </span>
                </div>
                <div className="text-right text-xs text-slate-400 space-y-0.5">
                  <div>{isBg ? 'Макс:' : 'High:'} <strong className="text-slate-200">29°C</strong></div>
                  <div>{isBg ? 'Мин:' : 'Low:'} <strong className="text-slate-200">21°C</strong></div>
                  <div>{isBg ? 'Усеща се:' : 'Feels like:'} <strong className="text-amber-300">30°C</strong></div>
                </div>
              </div>

              {/* Atmospheric Sensor Readings */}
              <div className="grid grid-cols-2 gap-3 text-xs pt-2">
                <div className="bg-slate-900/80 border border-slate-800 p-3 rounded-xl space-y-1">
                  <span className="text-slate-400 flex items-center gap-1 text-[11px]">
                    <Thermometer className="w-3.5 h-3.5 text-red-400" />
                    <span>{isBg ? 'Термален извор' : '38°C Spring Temp'}</span>
                  </span>
                  <p className="text-amber-300 font-bold text-sm">38.4°C / 101°F</p>
                  <p className="text-[10px] text-slate-500">{isBg ? 'Постоянна под земята' : 'Unchanging underground'}</p>
                </div>

                <div className="bg-slate-900/80 border border-slate-800 p-3 rounded-xl space-y-1">
                  <span className="text-slate-400 flex items-center gap-1 text-[11px]">
                    <Waves className="w-3.5 h-3.5 text-cyan-400" />
                    <span>{isBg ? 'Морска вода' : 'Sea Water Temp'}</span>
                  </span>
                  <p className="text-cyan-300 font-bold text-sm">24.2°C / 75.5°F</p>
                  <p className="text-[10px] text-slate-500">{isBg ? 'Кристално чиста' : 'Crystal Clear / Calm'}</p>
                </div>

                <div className="bg-slate-900/80 border border-slate-800 p-3 rounded-xl space-y-1">
                  <span className="text-slate-400 flex items-center gap-1 text-[11px]">
                    <Sun className="w-3.5 h-3.5 text-amber-400" />
                    <span>{isBg ? 'UV Индекс' : 'UV Index'}</span>
                  </span>
                  <p className="text-white font-bold text-sm">6 ({isBg ? 'Умерен' : 'Moderate'})</p>
                  <p className="text-[10px] text-slate-500">{isBg ? 'Препоръчва се защита' : 'Sun protection advised'}</p>
                </div>

                <div className="bg-slate-900/80 border border-slate-800 p-3 rounded-xl space-y-1">
                  <span className="text-slate-400 flex items-center gap-1 text-[11px]">
                    <Wind className="w-3.5 h-3.5 text-teal-400" />
                    <span>{isBg ? 'Вятър и вълни' : 'Wind & Waves'}</span>
                  </span>
                  <p className="text-white font-bold text-sm">ИИС 8 км/ч</p>
                  <p className="text-[10px] text-slate-500">{isBg ? '0.3м слаб прибой' : '0.3m gentle swell'}</p>
                </div>
              </div>

              {/* 3-Day Forecast Strip */}
              <div className="border-t border-slate-800 pt-4 space-y-2">
                <span className="text-[10px] uppercase tracking-wider text-slate-400 font-bold block">
                  {isBg ? '3-дневна морска прогноза' : '3-Day Coastal Forecast'}
                </span>
                <div className="grid grid-cols-3 gap-2 text-center text-xs">
                  <div className="p-2 rounded-lg bg-slate-900/60 border border-slate-800/80">
                    <span className="text-[10px] text-slate-400 block">{isBg ? 'Утре' : 'Tomorrow'}</span>
                    <Sun className="w-4 h-4 text-amber-400 mx-auto my-1" />
                    <span className="font-bold text-white">29°C</span>
                  </div>
                  <div className="p-2 rounded-lg bg-slate-900/60 border border-slate-800/80">
                    <span className="text-[10px] text-slate-400 block">{isBg ? 'Събота' : 'Saturday'}</span>
                    <Sun className="w-4 h-4 text-amber-400 mx-auto my-1" />
                    <span className="font-bold text-white">30°C</span>
                  </div>
                  <div className="p-2 rounded-lg bg-slate-900/60 border border-slate-800/80">
                    <span className="text-[10px] text-slate-400 block">{isBg ? 'Неделя' : 'Sunday'}</span>
                    <Sun className="w-4 h-4 text-amber-400 mx-auto my-1" />
                    <span className="font-bold text-white">28°C</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Balneo Prompt */}
            <div className="p-5 rounded-2xl bg-gradient-to-br from-cyan-950/50 to-blue-950/60 border border-cyan-500/30 flex items-center justify-between text-xs">
              <div className="space-y-0.5">
                <span className="text-cyan-300 font-bold block">{isBg ? 'Идеален ден за термален басейн' : 'Perfect Day for Thermal Swimming'}</span>
                <span className="text-slate-300 text-[11px]">{isBg ? 'Водата е гореща и лековита на 38°C' : 'Water is hot and soothing at 38°C'}</span>
              </div>
              <a
                href="#spa"
                className="px-3.5 py-1.5 bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold rounded-lg transition text-xs"
              >
                {isBg ? 'СПА Център' : 'Spa Hub'}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};


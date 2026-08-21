import React, { useState } from 'react';
import { 
  Waves, 
  Flame, 
  Sparkles, 
  Thermometer, 
  Clock, 
  CheckCircle2, 
  Info, 
  HeartHandshake, 
  ArrowRight,
  Droplet
} from 'lucide-react';
import { SPA_FACILITIES, SPA_TREATMENTS } from '../data/hotelData';
import { SpaFacility, TempUnit, Currency, Language } from '../types';
import { translations } from '../translations/translations';

interface ThermalSpaHubProps {
  tempUnit: TempUnit;
  setTempUnit: (t: TempUnit) => void;
  currency: Currency;
  language: Language;
  onBookTreatment: (treatmentName?: string) => void;
}

export const ThermalSpaHub: React.FC<ThermalSpaHubProps> = ({
  tempUnit,
  setTempUnit,
  currency,
  language,
  onBookTreatment,
}) => {
  const [activeFacilityId, setActiveFacilityId] = useState<string>(SPA_FACILITIES[0].id);
  const [activeTab, setActiveTab] = useState<'facilities' | 'treatments' | 'minerals'>('facilities');

  const t = translations[language] || translations.EN;
  const isBg = language === 'BG';

  const activeFacility = SPA_FACILITIES.find(f => f.id === activeFacilityId) || SPA_FACILITIES[0];

  const currencyRates: Record<Currency, { symbol: string; rate: number }> = {
    EUR: { symbol: '€', rate: 1 },
    BGN: { symbol: 'лв', rate: 1.95583 },
    USD: { symbol: '$', rate: 1.08 },
    GBP: { symbol: '£', rate: 0.85 },
  };
  const rate = currencyRates[currency];

  const getDisplayTemp = (tempC: number, tempF: number) => {
    return tempUnit === 'C' ? `${tempC}°C` : `${tempF.toFixed(1)}°F`;
  };

  return (
    <section id="spa" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      
      {/* Section Header */}
      <div className="text-center space-y-4 max-w-3xl mx-auto mb-16">
        <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full border border-cyan-400/30 bg-cyan-950/40 text-cyan-300 text-xs uppercase tracking-widest font-semibold">
          <Droplet className="w-3.5 h-3.5 text-cyan-400" />
          <span>{t.spa.badge}</span>
        </div>

        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-serif-luxury text-white tracking-tight leading-tight">
          {t.spa.title}
        </h2>

        <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
          {t.spa.subtitle}
        </p>

        {/* Global Controls: View Tabs & Temp Toggle */}
        <div className="pt-4 flex flex-wrap items-center justify-center gap-3">
          {/* Main Segmented Mode Switch */}
          <div className="p-1 bg-slate-900/90 border border-slate-800 rounded-full inline-flex space-x-1 text-xs font-semibold">
            <button
              onClick={() => setActiveTab('facilities')}
              className={`px-4 py-2 rounded-full transition cursor-pointer ${activeTab === 'facilities' ? 'bg-gradient-to-r from-amber-400 to-amber-500 text-slate-950 shadow-md font-bold' : 'text-slate-300 hover:text-white'}`}
            >
              {t.spa.tabFacilities}
            </button>
            <button
              onClick={() => setActiveTab('treatments')}
              className={`px-4 py-2 rounded-full transition cursor-pointer ${activeTab === 'treatments' ? 'bg-gradient-to-r from-amber-400 to-amber-500 text-slate-950 shadow-md font-bold' : 'text-slate-300 hover:text-white'}`}
            >
              {t.spa.tabTreatments}
            </button>
            <button
              onClick={() => setActiveTab('minerals')}
              className={`px-4 py-2 rounded-full transition cursor-pointer ${activeTab === 'minerals' ? 'bg-gradient-to-r from-amber-400 to-amber-500 text-slate-950 shadow-md font-bold' : 'text-slate-300 hover:text-white'}`}
            >
              {t.spa.tabMinerals}
            </button>
          </div>

          {/* Temperature Unit Switcher */}
          <div className="bg-slate-900/90 border border-slate-800 rounded-full p-1 flex items-center text-xs font-bold">
            <button
              onClick={() => setTempUnit('C')}
              className={`px-3 py-1.5 rounded-full transition cursor-pointer ${tempUnit === 'C' ? 'bg-cyan-500 text-slate-950 font-bold' : 'text-slate-400 hover:text-white'}`}
            >
              °C
            </button>
            <button
              onClick={() => setTempUnit('F')}
              className={`px-3 py-1.5 rounded-full transition cursor-pointer ${tempUnit === 'F' ? 'bg-cyan-500 text-slate-950 font-bold' : 'text-slate-400 hover:text-white'}`}
            >
              °F
            </button>
          </div>
        </div>
      </div>

      {/* VIEW 1: Interactive Thermal Facilities */}
      {activeTab === 'facilities' && (
        <div className="space-y-8 animate-fade-in">
          {/* Facility Tab Selector Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {SPA_FACILITIES.map((facility) => {
              const isSelected = facility.id === activeFacilityId;
              const displayName = isBg && facility.nameBg ? facility.nameBg : facility.name;
              const displayType = isBg && facility.typeBg ? facility.typeBg : facility.type;
              return (
                <button
                  key={facility.id}
                  onClick={() => setActiveFacilityId(facility.id)}
                  className={`p-4 rounded-2xl border text-left transition transform hover:-translate-y-0.5 relative overflow-hidden flex flex-col justify-between cursor-pointer ${
                    isSelected 
                      ? 'bg-gradient-to-b from-[#132742] to-[#0d1d33] border-amber-400 shadow-xl shadow-amber-500/10' 
                      : 'bg-slate-900/60 border-slate-800 hover:border-slate-700 hover:bg-slate-900'
                  }`}
                >
                  {isSelected && (
                    <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-amber-400 via-cyan-400 to-amber-400"></div>
                  )}
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[10px] uppercase font-bold tracking-wider text-slate-400">{displayType}</span>
                    <span className={`text-xs font-extrabold px-2 py-0.5 rounded-full ${
                      facility.tempC >= 38 ? 'bg-red-500/20 text-red-300 border border-red-500/30' :
                      facility.tempC >= 35 ? 'bg-amber-500/20 text-amber-300 border border-amber-500/30' :
                      'bg-cyan-500/20 text-cyan-300 border border-cyan-500/30'
                    }`}>
                      {getDisplayTemp(facility.tempC, facility.tempF)}
                    </span>
                  </div>
                  <h3 className={`text-sm sm:text-base font-bold font-serif-luxury ${isSelected ? 'text-amber-200' : 'text-slate-200'}`}>
                    {displayName}
                  </h3>
                </button>
              );
            })}
          </div>

          {/* Active Facility Spotlight Showcase */}
          <div className="glass-panel p-6 sm:p-8 rounded-3xl border border-amber-500/25 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center shadow-2xl">
            {/* Left: Image with dynamic temperature overlay */}
            <div className="lg:col-span-6 relative rounded-2xl overflow-hidden shadow-2xl group min-h-[340px] max-h-[440px]">
              <img
                src={activeFacility.image}
                alt={isBg && activeFacility.nameBg ? activeFacility.nameBg : activeFacility.name}
                className="w-full h-full object-cover group-hover:scale-105 transition duration-700 brightness-95"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent"></div>
              
              {/* Temperature Badge Overlay */}
              <div className="absolute top-4 left-4 bg-slate-950/85 backdrop-blur-md border border-amber-400/40 px-3.5 py-2 rounded-xl flex items-center space-x-2 shadow-xl">
                <Thermometer className="w-4 h-4 text-red-400 animate-pulse" />
                <div>
                  <span className="text-[10px] uppercase tracking-widest text-slate-400 block font-semibold">{t.spa.waterTemp}</span>
                  <span className="text-sm font-bold text-amber-300">{getDisplayTemp(activeFacility.tempC, activeFacility.tempF)}</span>
                </div>
              </div>

              {/* Hours badge */}
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs text-slate-200 bg-slate-900/80 backdrop-blur-md px-3.5 py-2 rounded-lg border border-slate-800">
                <span className="flex items-center gap-1.5 text-amber-300">
                  <Clock className="w-3.5 h-3.5" />
                  <span>{isBg && activeFacility.hoursBg ? activeFacility.hoursBg : activeFacility.hours}</span>
                </span>
                <span className="text-emerald-400 font-semibold">{isBg ? 'Отворено и подгрято днес' : 'Open & Heated Today'}</span>
              </div>
            </div>

            {/* Right: Rich Balneological Details */}
            <div className="lg:col-span-6 space-y-6">
              <div>
                <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-amber-400/10 border border-amber-400/30 text-amber-300 text-xs font-semibold uppercase tracking-wider mb-2">
                  <Flame className="w-3 h-3 text-amber-400" />
                  <span>{isBg && activeFacility.typeBg ? activeFacility.typeBg : activeFacility.type}</span>
                </div>
                <h3 className="text-3xl sm:text-4xl font-bold font-serif-luxury text-white">
                  {isBg && activeFacility.nameBg ? activeFacility.nameBg : activeFacility.name}
                </h3>
                <p className="mt-3 text-slate-300 text-sm sm:text-base leading-relaxed">
                  {isBg && activeFacility.fullDescBg ? activeFacility.fullDescBg : activeFacility.fullDesc}
                </p>
              </div>

              {/* Health Benefits & Minerals */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="bg-slate-900/80 border border-slate-800 rounded-xl p-4 space-y-2">
                  <h4 className="text-xs uppercase tracking-wider font-bold text-amber-400 flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5 text-amber-400" /> {t.spa.healthBenefits}
                  </h4>
                  <ul className="space-y-1.5 text-xs text-slate-300">
                    {((isBg && activeFacility.healthBenefitsBg) ? activeFacility.healthBenefitsBg : activeFacility.healthBenefits).map((benefit, i) => (
                      <li key={i} className="flex items-start gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0 mt-0.5" />
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-slate-900/80 border border-slate-800 rounded-xl p-4 space-y-2">
                  <h4 className="text-xs uppercase tracking-wider font-bold text-cyan-400 flex items-center gap-1.5">
                    <Droplet className="w-3.5 h-3.5 text-cyan-400" /> {t.spa.mineralComp}
                  </h4>
                  <ul className="space-y-1.5 text-xs text-slate-300">
                    {((isBg && activeFacility.mineralsBg) ? activeFacility.mineralsBg : activeFacility.minerals).map((mineral, i) => (
                      <li key={i} className="flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-cyan-400"></span>
                        <span>{mineral}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-2 flex flex-wrap items-center gap-3">
                <button
                  onClick={() => onBookTreatment(isBg && activeFacility.nameBg ? activeFacility.nameBg : activeFacility.name)}
                  className="px-6 py-3 bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 hover:from-amber-300 text-slate-950 font-bold uppercase tracking-wider text-xs rounded-xl shadow-lg shadow-amber-500/20 transition transform hover:-translate-y-0.5 flex items-center gap-2 cursor-pointer"
                >
                  <HeartHandshake className="w-4 h-4" />
                  <span>{t.spa.bookTreatment}</span>
                </button>
                <button
                  onClick={() => setActiveTab('minerals')}
                  className="px-4 py-3 bg-slate-900 hover:bg-slate-800 text-slate-200 border border-slate-700 text-xs font-semibold rounded-xl transition flex items-center gap-1.5 cursor-pointer"
                >
                  <Info className="w-3.5 h-3.5 text-amber-400" />
                  <span>{t.spa.viewAnalysis}</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* VIEW 2: Balneo Rituals & Mud Therapy */}
      {activeTab === 'treatments' && (
        <div className="space-y-8 animate-fade-in">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {SPA_TREATMENTS.map((treatment) => {
              const name = isBg && treatment.nameBg ? treatment.nameBg : treatment.name;
              const desc = isBg && treatment.descriptionBg ? treatment.descriptionBg : treatment.description;
              const cat = isBg && treatment.categoryBg ? treatment.categoryBg : treatment.category;
              return (
                <div
                  key={treatment.id}
                  className="glass-panel p-6 rounded-2xl border border-amber-500/20 hover:border-amber-400/50 transition duration-300 flex flex-col justify-between space-y-4"
                >
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-[11px] uppercase font-bold tracking-widest text-amber-400">{cat}</span>
                      <span className="text-xs text-slate-400 flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5 text-slate-400" /> {treatment.durationMin} {isBg ? 'Минути' : 'Minutes'}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold font-serif-luxury text-white">
                      {name}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-300 mt-2 leading-relaxed">
                      {desc}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-slate-800 flex items-center justify-between">
                    <div>
                      <span className="text-[10px] uppercase text-slate-400 block font-semibold">{isBg ? 'Терапевтична цена' : 'Therapeutic Price'}</span>
                      <span className="text-2xl font-bold text-amber-300 font-serif-luxury">
                        {rate.symbol}{Math.round(treatment.priceEur * rate.rate)}
                      </span>
                    </div>

                    <button
                      onClick={() => onBookTreatment(name)}
                      className="px-5 py-2.5 bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold uppercase tracking-wider text-xs rounded-xl shadow transition cursor-pointer"
                    >
                      {isBg ? 'Запази ритуал' : 'Reserve Ritual'}
                    </button>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="text-center">
            <p className="text-xs text-slate-400">
              {isBg 
                ? '*Всички процедури включват безплатен достъп до 38°C термални басейни и билков чай сервиз.'
                : '*All treatments include complimentary access to the 38°C thermal pools and relaxing herbal tea service.'}
            </p>
          </div>
        </div>
      )}

      {/* VIEW 3: Mineral Water Composition & Geological Facts */}
      {activeTab === 'minerals' && (
        <div className="glass-panel p-8 rounded-3xl border border-cyan-500/30 space-y-8 animate-fade-in">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
            <div className="lg:col-span-1 space-y-4">
              <span className="text-xs uppercase tracking-widest text-cyan-400 font-semibold">{isBg ? 'Хидрогеоложки сертификат' : 'Hydrogeology Certification'}</span>
              <h3 className="text-3xl font-bold font-serif-luxury text-white">{isBg ? 'Геоложки данни за извора' : 'Geological Spring Data'}</h3>
              <p className="text-slate-300 text-sm leading-relaxed">
                {isBg 
                  ? 'Изворът в Св. Константин и Елена произхожда от дълбоки варовикови пластове. Водата е бактериологично чиста, кристално бистра и естествено хипертермална.'
                  : 'The hot spring origin in St. Constantine & Helena was discovered deep inside karst limestone layers. The water is bacteriologically pure, crystal-clear, and naturally hyper-thermal.'}
              </p>
              <div className="space-y-2 pt-2 text-xs">
                <div className="flex justify-between p-2 rounded-lg bg-slate-900/70 border border-slate-800">
                  <span className="text-slate-400">{isBg ? 'Дълбочина на сондажа:' : 'Spring Depth:'}</span>
                  <strong className="text-white">1,300 {isBg ? 'метра' : 'meters'}</strong>
                </div>
                <div className="flex justify-between p-2 rounded-lg bg-slate-900/70 border border-slate-800">
                  <span className="text-slate-400">{isBg ? 'Температура при извора:' : 'Exit Temperature:'}</span>
                  <strong className="text-amber-300">38.4°C (101.1°F)</strong>
                </div>
                <div className="flex justify-between p-2 rounded-lg bg-slate-900/70 border border-slate-800">
                  <span className="text-slate-400">{isBg ? 'Естествено pH ниво:' : 'Natural pH Level:'}</span>
                  <strong className="text-cyan-300">7.34 ({isBg ? 'Неутрално-алкално' : 'Neutral-Alkaline'})</strong>
                </div>
                <div className="flex justify-between p-2 rounded-lg bg-slate-900/70 border border-slate-800">
                  <span className="text-slate-400">{isBg ? 'Дебит на извора:' : 'Flow Output Rate:'}</span>
                  <strong className="text-white">45 {isBg ? 'литра / секунда' : 'Liters / Second'}</strong>
                </div>
              </div>
            </div>

            <div className="lg:col-span-2 grid grid-cols-2 sm:grid-cols-3 gap-4 text-xs">
              <div className="bg-slate-900/90 border border-slate-800 p-4 rounded-xl space-y-1">
                <span className="text-cyan-400 font-bold text-sm">Mg²⁺ {isBg ? 'Магнезий' : 'Magnesium'}</span>
                <p className="text-slate-200 font-semibold text-base">42.8 mg/L</p>
                <p className="text-[11px] text-slate-400">{isBg ? 'Релаксира мускулните спазми и укрепва костната плътност.' : 'Relaxes muscle spasms and strengthens bone density.'}</p>
              </div>
              <div className="bg-slate-900/90 border border-slate-800 p-4 rounded-xl space-y-1">
                <span className="text-cyan-400 font-bold text-sm">Ca²⁺ {isBg ? 'Калций' : 'Calcium'}</span>
                <p className="text-slate-200 font-semibold text-base">98.4 mg/L</p>
                <p className="text-[11px] text-slate-400">{isBg ? 'Успокоява нервно-мускулната възбудимост и клетъчното възстановяване.' : 'Calms neuro-muscular excitability and supports cellular repair.'}</p>
              </div>
              <div className="bg-slate-900/90 border border-slate-800 p-4 rounded-xl space-y-1">
                <span className="text-cyan-400 font-bold text-sm">HCO₃⁻ {isBg ? 'Хидрокарбонати' : 'Hydrocarbonates'}</span>
                <p className="text-slate-200 font-semibold text-base">312.0 mg/L</p>
                <p className="text-[11px] text-slate-400">{isBg ? 'Успокоява кожните възпаления и оптимизира дермалния метаболизъм.' : 'Soothes skin inflammation and optimizes dermal metabolism.'}</p>
              </div>
              <div className="bg-slate-900/90 border border-slate-800 p-4 rounded-xl space-y-1">
                <span className="text-cyan-400 font-bold text-sm">SO₄²⁻ {isBg ? 'Сулфати' : 'Sulfates'}</span>
                <p className="text-slate-200 font-semibold text-base">145.2 mg/L</p>
                <p className="text-[11px] text-slate-400">{isBg ? 'Подпомага хрущялната тъкан и естествената детоксикация на ставите.' : 'Supports connective cartilage rebuilding and natural detoxification.'}</p>
              </div>
              <div className="bg-slate-900/90 border border-slate-800 p-4 rounded-xl space-y-1">
                <span className="text-cyan-400 font-bold text-sm">H₂SiO₃ {isBg ? 'Метасилициева к-на' : 'Metasilicic Acid'}</span>
                <p className="text-slate-200 font-semibold text-base">38.6 mg/L</p>
                <p className="text-[11px] text-slate-400">{isBg ? 'Стимулира колагеновата еластичност, здравето на косата и кожата.' : 'Promotes collagen elasticity, glowing hair, and radiant skin.'}</p>
              </div>
              <div className="bg-slate-900/90 border border-slate-800 p-4 rounded-xl space-y-1">
                <span className="text-cyan-400 font-bold text-sm">F⁻ {isBg ? 'Флуорид' : 'Natural Fluoride'}</span>
                <p className="text-slate-200 font-semibold text-base">1.2 mg/L</p>
                <p className="text-[11px] text-slate-400">{isBg ? 'Смазва ставните връзки и заздравява зъбния емайл.' : 'Assists joint lubrication and dental enamel protection.'}</p>
              </div>
            </div>
          </div>

          <div className="border-t border-slate-800 pt-4 flex flex-wrap items-center justify-between gap-3 text-xs text-slate-400">
            <span>{isBg ? 'Сертифицирано от Министерство на здравеопазването на Р. България • Институт по балнеология' : 'Verified by Ministry of Health of the Republic of Bulgaria • Balneology Institute'}</span>
            <button
              onClick={() => onBookTreatment(isBg ? 'Балнеологична консултация' : 'Balneotherapy Consultation')}
              className="text-amber-300 hover:text-amber-200 font-semibold flex items-center gap-1 cursor-pointer"
            >
              <span>{isBg ? 'Консултирайте се с наш балнеолог' : 'Consult our Balneology Physician'}</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      )}
    </section>
  );
};


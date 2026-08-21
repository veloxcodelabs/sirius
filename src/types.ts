export type Currency = 'EUR' | 'BGN' | 'USD' | 'GBP';
export type Language = 'EN' | 'BG' | 'DE' | 'RU';
export type TempUnit = 'C' | 'F';

export interface Room {
  id: string;
  name: string;
  nameBg: string;
  category: 'sea' | 'park' | 'suite';
  priceEur: number;
  sizeM2: number;
  capacity: string;
  capacityBg?: string;
  bedType: string;
  bedTypeBg?: string;
  view: string;
  viewBg?: string;
  image: string;
  gallery: string[];
  description: string;
  descriptionBg?: string;
  amenities: string[];
  amenitiesBg?: string[];
  virtualTour360: string;
  badge?: string;
  badgeBg?: string;
}

export interface SpaFacility {
  id: string;
  name: string;
  nameBg?: string;
  tempC: number;
  tempF: number;
  type: string;
  typeBg?: string;
  image: string;
  shortDesc: string;
  shortDescBg?: string;
  fullDesc: string;
  fullDescBg?: string;
  minerals: string[];
  mineralsBg?: string[];
  healthBenefits: string[];
  healthBenefitsBg?: string[];
  hours: string;
  hoursBg?: string;
}

export interface SpaTreatment {
  id: string;
  category: string;
  categoryBg?: string;
  name: string;
  nameBg?: string;
  durationMin: number;
  priceEur: number;
  description: string;
  descriptionBg?: string;
  mineralIngredients: string;
  mineralIngredientsBg?: string;
}

export interface MenuItem {
  id: string;
  category: 'starters' | 'seafood' | 'mains' | 'desserts' | 'cocktails';
  name: string;
  nameBg?: string;
  priceEur: number;
  description: string;
  descriptionBg?: string;
  highlight?: string;
  highlightBg?: string;
  image?: string;
}

export interface PackageTier {
  id: string;
  name: string;
  nameBg?: string;
  tagline: string;
  taglineBg?: string;
  priceEurPerNight: number;
  popular?: boolean;
  features: {
    included: boolean;
    text: string;
    textBg?: string;
  }[];
}

export interface Review {
  id: string;
  author: string;
  country: string;
  countryBg?: string;
  rating: number;
  date: string;
  title: string;
  titleBg?: string;
  comment: string;
  commentBg?: string;
  roomType: string;
  roomTypeBg?: string;
  avatar: string;
}

export interface BookingState {
  checkIn: string;
  checkOut: string;
  adults: number;
  children: number;
  roomType: string;
  promoCode: string;
  packageType: string;
}


import React, { useState } from 'react';
import { Currency, Language, TempUnit, BookingState, Room } from './types';
import { ROOMS } from './data/hotelData';
import { HeaderNavbar } from './components/HeaderNavbar';
import { HeroSection } from './components/HeroSection';
import { StickyBookingBar } from './components/StickyBookingBar';
import { ThermalSpaHub } from './components/ThermalSpaHub';
import { RoomsSection } from './components/RoomsSection';
import { SiriusShipRestaurant } from './components/SiriusShipRestaurant';
import { AllInclusivePackages } from './components/AllInclusivePackages';
import { LiveCamWeather } from './components/LiveCamWeather';
import { LocationAndResort } from './components/LocationAndResort';
import { GuestReviews } from './components/GuestReviews';
import { SoundToggleFloating } from './components/SoundToggleFloating';
import { Footer } from './components/Footer';

// Modals
import { BookingModal } from './components/Modals/BookingModal';
import { SpaTreatmentModal } from './components/Modals/SpaTreatmentModal';
import { TableReservationModal } from './components/Modals/TableReservationModal';
import { VirtualTourModal } from './components/Modals/VirtualTourModal';

export default function App() {
  const [currency, setCurrency] = useState<Currency>('EUR');
  const [language, setLanguage] = useState<Language>('EN');
  const [tempUnit, setTempUnit] = useState<TempUnit>('C');

  // Booking state
  const [bookingState, setBookingState] = useState<BookingState>({
    checkIn: '2026-08-25',
    checkOut: '2026-08-30',
    adults: 2,
    children: 0,
    roomType: 'deluxe-sea-view',
    promoCode: '',
    packageType: 'all-inclusive',
  });

  // Modal visibility states
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
  const [isSpaModalOpen, setIsSpaModalOpen] = useState(false);
  const [spaTreatmentName, setSpaTreatmentName] = useState<string | undefined>(undefined);
  const [isTableModalOpen, setIsTableModalOpen] = useState(false);
  const [isVirtualTourOpen, setIsVirtualTourOpen] = useState(false);
  const [selectedTourRoom, setSelectedTourRoom] = useState<Room | null>(ROOMS[0]);

  const handleOpenBooking = (roomId?: string) => {
    if (roomId) {
      setBookingState(prev => ({ ...prev, roomType: roomId }));
    }
    setIsBookingModalOpen(true);
  };

  const handleOpenSpaTreatment = (treatmentName?: string) => {
    setSpaTreatmentName(treatmentName);
    setIsSpaModalOpen(true);
  };

  const handleOpenVirtualTour = (room: Room) => {
    setSelectedTourRoom(room);
    setIsVirtualTourOpen(true);
  };

  const handleSelectPackage = (packageId: string) => {
    setBookingState(prev => ({ ...prev, packageType: packageId }));
    setIsBookingModalOpen(true);
  };

  const scrollToSection = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#08121e] text-slate-100 selection:bg-amber-400 selection:text-slate-950 font-sans">
      
      {/* Top Navbar */}
      <HeaderNavbar
        currency={currency}
        setCurrency={setCurrency}
        language={language}
        setLanguage={setLanguage}
        onOpenBooking={() => handleOpenBooking()}
      />

      {/* 1. Hero Section & Video Background */}
      <HeroSection
        language={language}
        onExploreSpa={() => scrollToSection('spa')}
        onCheckAvailability={() => scrollToSection('booking-bar')}
      />

      {/* 1.1 Fixed/Sticky Direct Booking Bar */}
      <StickyBookingBar
        currency={currency}
        language={language}
        bookingState={bookingState}
        setBookingState={setBookingState}
        onCheckAvailability={() => handleOpenBooking()}
      />

      {/* 2. Thermal & Spa Hub Section (38°C pools, sauna village, salt room, mineral composition) */}
      <ThermalSpaHub
        tempUnit={tempUnit}
        setTempUnit={setTempUnit}
        currency={currency}
        language={language}
        onBookTreatment={handleOpenSpaTreatment}
      />

      {/* 3. Rooms & Suites Section (Filters, 360 virtual tour triggers, balcony tags) */}
      <RoomsSection
        currency={currency}
        language={language}
        onSelectRoom={handleOpenBooking}
        onOpenVirtualTour={handleOpenVirtualTour}
      />

      {/* 4. Dining & The Sirius Ship Restaurant Section (13th-century galleon, menu highlights, table booking) */}
      <SiriusShipRestaurant
        currency={currency}
        language={language}
        onReserveTable={() => setIsTableModalOpen(true)}
      />

      {/* 5. All-Inclusive & Ultra All-Inclusive Packages Section */}
      <AllInclusivePackages
        currency={currency}
        language={language}
        onSelectPackage={handleSelectPackage}
      />

      {/* 6. Live Beach Cam & Weather Section (Live stream HUD, multi-cam, real-time sensors) */}
      <LiveCamWeather
        tempUnit={tempUnit}
        language={language}
      />

      {/* 7. Location & St. Constantine & Helena Resort Story */}
      <LocationAndResort language={language} />

      {/* 8. Verified Guest Testimonials */}
      <GuestReviews language={language} />

      {/* 9. Floating Ambient Ocean Waves & Thermal Water Sound Toggle */}
      <SoundToggleFloating language={language} />

      {/* 10. Luxury Footer with Standalone HTML Exporter */}
      <Footer language={language} />

      {/* Interactive Modals */}
      <BookingModal
        isOpen={isBookingModalOpen}
        onClose={() => setIsBookingModalOpen(false)}
        currency={currency}
        language={language}
        bookingState={bookingState}
        setBookingState={setBookingState}
      />

      <SpaTreatmentModal
        isOpen={isSpaModalOpen}
        onClose={() => setIsSpaModalOpen(false)}
        currency={currency}
        language={language}
        initialTreatmentName={spaTreatmentName}
      />

      <TableReservationModal
        isOpen={isTableModalOpen}
        onClose={() => setIsTableModalOpen(false)}
        language={language}
      />

      <VirtualTourModal
        room={selectedTourRoom}
        isOpen={isVirtualTourOpen}
        onClose={() => setIsVirtualTourOpen(false)}
        currency={currency}
        language={language}
        onBookRoom={handleOpenBooking}
      />
    </div>
  );
}

import React from 'react';
import { Header } from './components/Header';
import { QuickInfoBar } from './components/QuickInfoBar';
import { Hero } from './components/Hero';
import { OfferingsSection } from './components/OfferingsSection';
import { FoodMenuSection } from './components/FoodMenuSection';
import { ReviewsSection } from './components/ReviewsSection';
import { PricingSection } from './components/PricingSection';
import { LocationHoursSection } from './components/LocationHoursSection';
import { Footer } from './components/Footer';

export default function App() {
  const scrollToPricing = () => {
    const el = document.getElementById('pricing-rates');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToOfferings = () => {
    const el = document.getElementById('offerings');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#0C120C] font-sans text-[#F4F4F0] antialiased selection:bg-[#C5A059] selection:text-[#0C120C]">
      {/* Sticky Header */}
      <Header onBookClick={scrollToPricing} />

      {/* Main Content */}
      <main>
        {/* Quick Info Bar */}
        <QuickInfoBar />

        {/* Hero Banner */}
        <Hero onBookClick={scrollToPricing} onExploreClick={scrollToOfferings} />

        {/* Main Offerings: Private Rooms, Open Bays, Food & Drinks */}
        <OfferingsSection onSelectOffering={scrollToPricing} />

        {/* Food & Drinks Menu */}
        <FoodMenuSection />

        {/* 4.6 Stars (50 Reviews) Google Reviews Section */}
        <ReviewsSection />

        {/* Transparent Pricing & Passes */}
        <PricingSection onBookClick={scrollToPricing} />

        {/* Location & Weekly Hours Schedule */}
        <LocationHoursSection />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

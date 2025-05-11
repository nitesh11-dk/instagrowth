import React from 'react';
import { HeroSection } from '../components/home/HeroSection';
import { ServicesSection } from '../components/home/ServicesSection';
import { PricingPreviewSection } from '../components/home/PricingPreviewSection';
import { ContactSection } from '../components/home/ContactSection';

export const HomePage = () => {
  return (
    <div>
      <HeroSection />
      <ServicesSection />
      <PricingPreviewSection />
      <ContactSection />
    </div>
  );
};
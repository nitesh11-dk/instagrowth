import React from 'react';
import { HeroSection } from '../components/home/HeroSection';
import { PricingPreviewSection } from '../components/home/PricingPreviewSection';
import {PricingPage} from './PricingPage'
export const HomePage = () => {
  return (
    <div>
      <HeroSection />
      <PricingPage />
    </div>
  );
};
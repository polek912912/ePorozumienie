'use client';

import { useRef } from 'react';
import PopupModal from './components/popUp/discount/DiscountModal';
import { PopupModalRef } from '@/lib/types';
import Footer from './components/indexPageSections/Footer';
import Navigation from './components/indexPageSections/Navigation';
import HeroSection from './components/indexPageSections/HeroSection';
import StatsSection from './components/indexPageSections/StatsSection';
import HowItWorksSection from './components/indexPageSections/HowItWorksSection';
import BenefitsSection from './components/indexPageSections/BenefitsSection';
import SwissFrancSection from './components/indexPageSections/SwissFrancSection';
import FeaturesSection from './components/indexPageSections/FeaturesSection';
import PricingSection from './components/indexPageSections/PricingSection';
import TeamSection from './components/indexPageSections/TeamSection';
import CTASection from './components/indexPageSections/CTASection';

export default function Home() {
  const popupRef = useRef<PopupModalRef>(null);

  return (
    <>
      <Navigation />
      <div className="bg-[#e2e8f0]">
        <PopupModal ref={popupRef} />
        <HeroSection />
      <HowItWorksSection />
      <StatsSection />
      <BenefitsSection />
      {/* <SwissFrancSection /> */}
      <FeaturesSection />
      <PricingSection />
      <TeamSection />
      <CTASection />
      <Footer />
    </div>
    </>
  );
}

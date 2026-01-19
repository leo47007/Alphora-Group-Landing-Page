import { useState, useEffect } from 'react';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import CryptoTicker from '@/components/CryptoTicker';
import PartnersSection from '@/components/PartnersSection';
import WhyBitwiseSection from '@/components/WhyBitwiseSection';
import InvestmentsSection from '@/components/InvestmentsSection';
import InsightsSection from '@/components/InsightsSection';
import NewsletterSection from '@/components/NewsletterSection';
import CTASection from '@/components/CTASection';
import Footer from '@/components/Footer';
import InvestorTypeModal from '@/components/InvestorTypeModal';

const Index = () => {
  const [showModal, setShowModal] = useState(true);
  const [selectedInvestorType, setSelectedInvestorType] = useState<string | null>(null);

  const handleInvestorSelect = (type: string) => {
    setSelectedInvestorType(type);
    setShowModal(false);
  };

  return (
    <div className="min-h-screen bg-background">
      {showModal && <InvestorTypeModal onSelect={handleInvestorSelect} />}
      
      <div className={showModal ? 'opacity-30 pointer-events-none' : ''}>
        <Header />
        <main>
          <HeroSection />
          <CryptoTicker />
          <PartnersSection />
          <WhyBitwiseSection />
          <InvestmentsSection />
          <InsightsSection />
          <NewsletterSection />
          <CTASection />
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default Index;

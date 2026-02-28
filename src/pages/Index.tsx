import { useState } from 'react';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import CryptoTicker from '@/components/CryptoTicker';
import WhyBitwiseSection from '@/components/WhyBitwiseSection';
import ClientTypesSection from '@/components/ClientTypesSection';
import InvestmentsSection from '@/components/InvestmentsSection';
import CTASection from '@/components/CTASection';
import Footer from '@/components/Footer';
import InvestorTypeModal from '@/components/InvestorTypeModal';

const Index = () => {
  const [showModal, setShowModal] = useState(true);

  const handleInvestorSelect = (type: string) => {
    if (type === 'individual') {
      window.location.assign('https://insights.alphoragroup.com/');
      return;
    }

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
          <WhyBitwiseSection />
          <ClientTypesSection />
          <InvestmentsSection />
          <CTASection />
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default Index;

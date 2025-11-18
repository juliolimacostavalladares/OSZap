import React from 'react';
import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { Problems } from '@/components/Problems';
import { Features } from '@/components/Features';
import { SmartDemo } from '@/components/SmartDemo';
import { Pricing } from '@/components/Pricing';
import { WaitlistForm } from '@/components/WaitlistForm';
import { Footer } from '@/components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-dark-950 font-sans text-white selection:bg-brand-500 selection:text-white">
      <Header />
      <main>
        <Hero />
        <Problems />
        <Features />
        <SmartDemo />
        <Pricing />
        <WaitlistForm />
      </main>
      <Footer />
    </div>
  );
};

export default App;
import React, { useEffect, useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { SocialProof } from './components/SocialProof';
import { PainPoints } from './components/PainPoints';
import { Solution } from './components/Solution';
import { LeadForm } from './components/LeadForm';
import { Footer } from './components/Footer';

function App() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Simulate high-performance load check
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <main className={`min-h-screen bg-[#050505] text-white selection:bg-zinc-500 selection:text-white overflow-x-hidden transition-opacity duration-1000 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
      <div className="relative z-10">
        <Navbar />
        <Hero />
        <SocialProof />
        <PainPoints />
        <Solution />
        <LeadForm />
        <Footer />
      </div>
    </main>
  );
}

export default App;
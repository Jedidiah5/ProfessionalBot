import { useState, useEffect } from 'react';
import Hero from './components/Hero';
import GamingStats from './components/GamingStats';
import ImageCarousel from './components/ImageCarousel';
import Footer from './components/Footer';

function App() {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="min-h-screen bg-[#0F0F0F] text-white overflow-x-hidden">
      <Hero />
      <GamingStats />
      <ImageCarousel />
      <Footer />
    </div>
  );
}

export default App; 
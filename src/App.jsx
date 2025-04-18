import { useState, useEffect } from 'react';
import Hero from './components/Hero';
import GamingStats from './components/GamingStats';
import ImageCarousel from './components/ImageCarousel';
import Footer from './components/Footer';
import Navbar from './components/Navbar';

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
    <main className="bg-[#0F0F0F] min-h-screen">
      <Navbar />
      <Hero />
      <GamingStats />
      <ImageCarousel />
      <Footer />
    </main>
  );
}

export default App; 
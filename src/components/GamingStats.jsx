import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useEffect, useState } from 'react';

const StatCard = ({ title, value, icon, color, delay }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay }}
      className="bg-[#1A1A1A] p-4 sm:p-6 md:p-8 rounded-xl shadow-lg transform hover:scale-105 transition-transform duration-300 min-w-[280px] sm:min-w-[320px] md:min-w-[380px] lg:min-w-[420px] mx-2 sm:mx-3 md:mx-4"
    >
      <div className="flex flex-col items-center justify-center text-center">
        <div className="text-4xl sm:text-5xl mb-3 sm:mb-4" style={{ color }}>
          {icon}
        </div>
        <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3 text-gray-200">{title}</h3>
        <p className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-[#00D1FF] to-[#00FF7F] bg-clip-text text-transparent">
          {value}
        </p>
      </div>
    </motion.div>
  );
};

const GamingStats = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const controls = useAnimation();

  const stats = [
    {
      title: "Years of Competitive Gaming",
      value: "3+",
      icon: "🎮",
      color: "#00D1FF"
    },
    {
      title: "Main Weapons",
      value: "Shotgun & AR",
      icon: "🔫",
      color: "#FF00AA"
    },
    {
      title: "Legendary Ranks",
      value: "11× BR | 10× MP",
      icon: "🏆",
      color: "#A020F0"
    },
    {
      title: "Clan",
      value: "Barons",
      icon: "👑",
      color: "#00FF7F"
    },
    {
      title: "K/D Ratio",
      value: "2.5+",
      icon: "🎯",
      color: "#FFD700"
    },
    {
      title: "Tournaments Won",
      value: "15+",
      icon: "🏅",
      color: "#FF4500"
    },
    {
      title: "Stream Hours",
      value: "1000+",
      icon: "⏱️",
      color: "#9370DB"
    },
    {
      title: "Subscribers",
      value: "50K+",
      icon: "👥",
      color: "#00CED1"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % stats.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [stats.length]);

  useEffect(() => {
    const cardWidth = window.innerWidth < 640 ? 284 : // 280px + 4px margin
                     window.innerWidth < 768 ? 326 : // 320px + 6px margin
                     window.innerWidth < 1024 ? 388 : // 380px + 8px margin
                     428; // 420px + 8px margin

    controls.start({
      x: -currentIndex * cardWidth,
      transition: { duration: 0.5, ease: "easeInOut" }
    });
  }, [currentIndex, controls]);

  return (
    <section className="py-20 bg-[#0F0F0F] relative overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-center mb-16"
        >
          Gaming Achievements
        </motion.h2>
        
        <div className="overflow-hidden relative">
          {/* Duplicate cards for seamless loop */}
          <motion.div
            className="flex"
            animate={controls}
          >
            {[...stats, ...stats, ...stats].map((stat, index) => (
              <StatCard key={index} {...stat} delay={index * 0.1} />
            ))}
          </motion.div>
          
          {/* Gradient overlays for smooth edges */}
          <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-24 md:w-32 bg-gradient-to-r from-[#0F0F0F] to-transparent"></div>
          <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-24 md:w-32 bg-gradient-to-l from-[#0F0F0F] to-transparent"></div>
        </div>
      </div>
      
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#1A1A1A] to-transparent opacity-30"></div>
    </section>
  );
};

export default GamingStats; 
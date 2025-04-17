import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

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
      className="bg-[#1A1A1A] p-8 rounded-xl shadow-lg transform hover:scale-105 transition-transform duration-300"
    >
      <div className="text-5xl mb-4" style={{ color }}>
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-3 text-gray-200">{title}</h3>
      <p 
        className="text-3xl font-bold bg-gradient-to-r from-[#00D1FF] to-[#00FF7F] bg-clip-text text-transparent"
      >
        {value}
      </p>
    </motion.div>
  );
};

const GamingStats = () => {
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
    }
  ];

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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <StatCard key={index} {...stat} delay={index * 0.2} />
          ))}
        </div>
      </div>
      
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#1A1A1A] to-transparent opacity-30"></div>
    </section>
  );
};

export default GamingStats; 
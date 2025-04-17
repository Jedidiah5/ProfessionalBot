import { motion } from 'framer-motion';
import characterImg from '../assets/character.png';

const socialLinks = [
  { name: 'Discord', icon: 'ri-discord-line', url: '#' },
  { name: 'TikTok', icon: 'ri-tiktok-fill', url: '#' },
  { name: 'YouTube', icon: 'ri-youtube-fill', url: '#' },
  { name: 'WhatsApp', icon: 'ri-whatsapp-line', url: '#' },
  { name: 'Instagram', icon: 'ri-instagram-line', url: '#' }
];

const Hero = () => {
  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-[#0F0F0F]">
      <div className="container mx-auto px-4">
        {/* Mobile Layout */}
        <div className="relative flex flex-col h-screen">
          {/* Character Image Section */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="absolute inset-0"
          >
            <motion.div
              className="w-full h-screen"
              animate={{ 
                scale: [1, 1.02, 1],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <img
                src={characterImg}
                alt="Game Character"
                className="w-full h-full object-contain object-left"
              />
              {/* Gradient overlay for better text readability */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0F0F0F] via-transparent to-transparent"></div>
            </motion.div>
          </motion.div>

          {/* Content Overlay - Centered */}
          <div className="relative z-10 flex items-center justify-start h-full">
            <div className="flex flex-col items-start -mt-20">
              {/* Title Section */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="mb-6"
              >
                <h1 className="text-4xl font-bold text-white">
                  ProfessionalBot
                </h1>
                <p className="text-gray-400 text-sm mt-1">
                  Br main and gamplay editor,connect with me on the following platforms
                </p>
              </motion.div>

              {/* Social Links */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="flex gap-4"
              >
                {socialLinks.map((link, index) => (
                  <motion.a
                    key={link.name}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-[#1A1A1A] flex items-center justify-center"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <i className={`${link.icon} text-lg text-white`}></i>
                  </motion.a>
                ))}
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/10 to-transparent opacity-30"></div>
    </section>
  );
};

export default Hero; 
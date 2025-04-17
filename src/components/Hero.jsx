import { motion } from 'framer-motion';
import characterImg from '../assets/character.png';

const socialLinks = [
  { name: 'Discord', icon: 'ri-discord-line', url: '#', color: '#5865F2' },
  { name: 'TikTok', icon: 'ri-tiktok-fill', url: '#', color: '#000000' },
  { name: 'YouTube', icon: 'ri-youtube-fill', url: '#', color: '#FF0000' },
  { name: 'WhatsApp', icon: 'ri-whatsapp-line', url: '#', color: '#25D366' },
  { name: 'Instagram', icon: 'ri-instagram-line', url: '#', color: '#E4405F' }
];

const Hero = () => {
  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-[#0F0F0F] font-vietnam">
      <div className="container mx-auto px-4 h-full">
        {/* Responsive Layout Container */}
        <div className="relative flex flex-col lg:flex-row h-screen items-center justify-between gap-12 lg:gap-24">
          {/* Character Image Section */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="absolute lg:relative inset-0 lg:inset-auto lg:flex-1"
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
                className="w-full h-full object-contain object-center lg:object-left"
              />
              {/* Gradient overlay only for mobile */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0F0F0F] via-[#0F0F0F]/50 to-transparent lg:hidden"></div>
            </motion.div>
          </motion.div>

          {/* Content Section - Right side on desktop */}
          <div className="relative z-10 lg:flex-1 flex items-center justify-start h-full px-0 lg:px-8">
            <div className="flex flex-col items-start -mt-20 lg:mt-0 w-full max-w-lg">
              {/* Title Section */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="mb-8 space-y-6"
              >
                {/* Main Title */}
                <h1 className="text-5xl lg:text-6xl font-extrabold text-white leading-tight">
                  ProfessionalBot
                </h1>

                {/* Subtitle/Role */}
                <div className="space-y-3">
                  <p className="text-sm lg:text-base text-white font-medium">
                    Br main and gameplay editor, connect with me on the following platforms
                  </p>
                  <p className="text-white text-sm lg:text-base font-medium tracking-wide">
                    Gaming Content Creator | Streamer | Developer
                  </p>
                </div>

                {/* Stats Section */}
                <div className="flex gap-12 py-4">
                  <div className="flex flex-col">
                    <span className="text-white font-bold text-2xl lg:text-3xl">10K+</span>
                    <span className="text-white/70 text-xs lg:text-sm">Followers</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-white font-bold text-2xl lg:text-3xl">500+</span>
                    <span className="text-white/70 text-xs lg:text-sm">Videos</span>
                  </div>
                </div>
              </motion.div>

              {/* Social Links with Enhanced Styling */}
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
                    className="w-12 h-12 lg:w-14 lg:h-14 rounded-xl bg-[#1A1A1A] flex items-center justify-center group hover:bg-[#2A2A2A] transition-all duration-300"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <i className={`${link.icon} text-xl lg:text-2xl text-white group-hover:text-[${link.color}] transition-colors duration-300`}></i>
                  </motion.a>
                ))}
              </motion.div>

              {/* CTA Button */}
              <motion.a
                href="#"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="mt-10 px-8 py-3 lg:px-10 lg:py-4 bg-gradient-to-r from-[#00D1FF] to-[#00FF7F] rounded-lg font-semibold text-black hover:shadow-lg hover:shadow-[#00D1FF]/20 transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Watch Latest Video
              </motion.a>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/10 to-transparent opacity-30"></div>
      <div className="absolute inset-0 bg-[url('/particles.png')] bg-cover bg-no-repeat opacity-20 animate-pulse"></div>
    </section>
  );
};

export default Hero; 
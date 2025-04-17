import { motion } from 'framer-motion';

const socialLinks = [
  { name: 'Discord', icon: '🎮', url: '#' },
  { name: 'TikTok', icon: '📱', url: '#' },
  { name: 'YouTube', icon: '▶️', url: '#' },
  { name: 'WhatsApp', icon: '💬', url: '#' },
  { name: 'Instagram', icon: '📸', url: '#' }
];

const SocialLinks = () => {
  return (
    <section className="py-12 bg-[#1A1A1A]">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-center gap-8">
          {socialLinks.map((link, index) => (
            <motion.a
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-4xl hover:text-[#FF00AA] transition-colors duration-300"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{
                delay: index * 0.2,
                duration: 0.5,
                repeat: Infinity,
                repeatType: "reverse",
                repeatDelay: 1
              }}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
            >
              {link.icon}
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SocialLinks; 
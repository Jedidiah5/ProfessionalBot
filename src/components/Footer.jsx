import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <footer className="bg-[#0F0F0F] py-12">
      <div className="container mx-auto px-4 text-center">
        <motion.a
          href="#"
          className="inline-block bg-[#00D1FF] text-black font-bold py-3 px-8 rounded-full mb-8 hover:bg-[#A020F0] transition-colors duration-300"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Join My Clan
        </motion.a>
        
        <div className="text-gray-400">
          <p className="mb-2">Made for Gamers by Gamers</p>
          <p className="text-sm">
            © {new Date().getFullYear()} PROFESSIONALBOT. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 
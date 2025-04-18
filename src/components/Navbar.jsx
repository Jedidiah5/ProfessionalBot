import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import grenadeIcon from '../assets/greenade.png';

const NavItem = ({ text, isLast = false }) => (
  <motion.div
    whileHover={{ x: 10 }}
    className="relative cursor-pointer group"
  >
    <div className="flex items-center justify-between w-full py-3">
      <span className="text-xl font-bold text-white group-hover:text-[#00FF7F] transition-colors">
        {text}
      </span>
      <motion.span
        whileHover={{ x: 5 }}
        className="text-xl text-white group-hover:text-[#00FF7F]"
      >
        →
      </motion.span>
    </div>
    {!isLast && (
      <div className="border-b border-dashed border-white/20 w-full"></div>
    )}
  </motion.div>
);

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { text: "INTRO" },
    { text: "YOUR GAME PLAN" },
    { text: "CONTACT" },
    { text: "SHOP", isLast: true }
  ];

  const sidebarVariants = {
    open: {
      x: 0,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 30
      }
    },
    closed: {
      x: "-100%",
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 30
      }
    }
  };

  return (
    <>
      {/* Toggle Button */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        onClick={() => setIsOpen(!isOpen)}
        className="fixed top-4 left-4 z-50 w-12 h-12 flex items-center justify-center bg-[#FFC803] hover:bg-[#E6B400] rounded-full hover:scale-110 transition-all duration-300 shadow-lg shadow-[#FFC803]/20"
      >
        <motion.img
          src={grenadeIcon}
          alt="Menu Toggle"
          className="w-8 h-8 invert"
          animate={{ rotate: isOpen ? 90 : 0 }}
          transition={{ duration: 0.3 }}
        />
      </motion.button>

      {/* Backdrop Blur */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-black/30 backdrop-blur-sm z-30"
            onClick={() => setIsOpen(false)}
          />
        )}
      </AnimatePresence>

      {/* Sidebar */}
      <AnimatePresence>
        {isOpen && (
          <motion.nav
            initial="closed"
            animate="open"
            exit="closed"
            variants={sidebarVariants}
            className="fixed left-0 top-0 h-screen w-48 bg-[#0F0F0F]/50 backdrop-blur-md z-40 shadow-xl"
          >
            <div className="flex flex-col h-full p-4 relative">
              {/* Navigation Items - Centered Vertically */}
              <div className="flex-1 flex flex-col justify-center space-y-4">
                {menuItems.map((item, index) => (
                  <NavItem key={index} {...item} />
                ))}
              </div>

              {/* Background Gradient */}
              <div className="absolute inset-0 bg-gradient-to-b from-[#00D1FF]/5 to-[#00FF7F]/5 pointer-events-none"></div>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar; 
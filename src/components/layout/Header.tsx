import React from 'react';
import { motion } from 'framer-motion';
import { Info } from 'lucide-react';
import { HoverPopup } from '../ui/HoverPopup';
import logo from '../../assets/logo.png';

interface HeaderProps {
  hoveredButton: string | null;
  onMouseEnter: (buttonType: string) => void;
  onMouseLeave: () => void;
}

export const Header: React.FC<HeaderProps> = ({ 
  hoveredButton, 
  onMouseEnter, 
  onMouseLeave 
}) => {
  return (
    <header className="fixed top-4 left-4 right-4 sm:top-4 sm:left-8 sm:right-8 z-50">
      <div className="flex items-center justify-between">
        {/* Empty div for spacing */}
        <div className="w-12"></div>
        
        {/* Centered Site Logo */}
        <motion.img 
          src={logo} 
          alt="SillySites Logo" 
          className="h-14 sm:h-24 w-auto drop-shadow-lg"
          whileHover={{ scale: 1.05, rotate: 1 }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: 'spring', stiffness: 300, damping: 20 }}
        />
        
        {/* Info Button */}
        <div className="relative">
          <motion.button
            onMouseEnter={() => onMouseEnter('info')}
            onMouseLeave={onMouseLeave}
            whileHover={{ scale: 1.15 }}
            whileTap={{ scale: 0.9 }}
            className="p-2 bg-white/60 backdrop-blur-lg border border-white/50 rounded-full shadow-md"
          >
            <Info className="w-5 h-5 text-gray-700" />
          </motion.button>
          
          <HoverPopup
            isVisible={hoveredButton === 'info'}
            title="About SillySites"
            content="SillySites is where the web goes wild. One click takes you to random creations by playful devs worldwide some funny, some weird, some totally useless. And that's exactly the point."
            position="top-left"
          />
        </div>
      </div>
    </header>
  );
};
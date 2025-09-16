import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface HoverPopupProps {
  isVisible: boolean;
  content: string;
  title?: string;
  position: 'top-right' | 'top-left' | 'bottom-left' | 'bottom-center';
}

export const HoverPopup: React.FC<HoverPopupProps> = ({ 
  isVisible, 
  content, 
  title, 
  position 
}) => {
  const getPositionClasses = () => {
    switch (position) {
      case 'top-right':
        return 'absolute top-16 right-0 w-72';
      case 'top-left':
        return 'absolute top-0 right-full mr-2 w-72';
      case 'bottom-left':
        return 'absolute bottom-16 -right-4 sm:left-0 w-64';
      case 'bottom-center':
        return 'absolute bottom-16 -right-4 sm:left-1/2 sm:-translate-x-1/2 w-auto max-w-52 sm:w-48 whitespace-nowrap';
      default:
        return 'absolute top-16 right-0 w-72';
    }
  };

  const getArrowClasses = () => {
    switch (position) {
      case 'top-right':
        return 'absolute -top-2 right-6 w-4 h-4 bg-white/80 border-l border-t border-white/50 transform rotate-45';
      case 'top-left':
        return 'absolute top-4 -right-2 w-4 h-4 bg-white/80 border-r border-t border-white/50 transform rotate-45';
      case 'bottom-left':
        return 'absolute -bottom-2 right-6 sm:left-6 w-4 h-4 bg-white/80 border-r border-b border-white/50 transform rotate-45';
      case 'bottom-center':
        return 'absolute -bottom-2 right-6 sm:left-1/2 sm:-translate-x-1/2 w-4 h-4 bg-white/80 border-r border-b border-white/50 rotate-45';
      default:
        return 'absolute -top-2 right-6 w-4 h-4 bg-white/80 border-l border-t border-white/50 transform rotate-45';
    }
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <div className={getPositionClasses()}>
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: position.includes('bottom') ? 10 : -10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: position.includes('bottom') ? 10 : -10 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="relative p-4 bg-white/80 backdrop-blur-xl border border-white/50 rounded-2xl shadow-xl text-left z-20"
          >
            {/* Arrow pointing to button */}
            <div className={getArrowClasses()}></div>
            
            {title && (
              <h3 className="font-semibold text-black/80 text-base mb-2 leading-tight">
                {title}
              </h3>
            )}
            <p className="text-sm text-gray-700 leading-relaxed">
              {content}
            </p>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
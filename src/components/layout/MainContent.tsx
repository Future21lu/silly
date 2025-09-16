import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface MainContentProps {
  messageIndex: number;
  playfulMessages: Array<{ message: string; buttonText: string }>;
  onGoClick: () => void;
}

export const MainContent: React.FC<MainContentProps> = ({ 
  messageIndex, 
  playfulMessages, 
  onGoClick 
}) => {
  return (
    <main className="flex-grow flex flex-col items-center justify-center text-center px-4">
      <AnimatePresence mode="wait">
        <motion.p
          key={messageIndex}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
          className="text-2xl sm:text-4xl text-white font-semibold max-w-md sm:max-w-2xl mb-8 h-24 sm:h-32 flex items-center justify-center"
          style={{
            textShadow: '0 1px 2px rgba(0, 0, 0, 0.3), 0 0 8px rgba(255, 255, 255, 0.2)',
            filter: 'drop-shadow(0 1px 1px rgba(0, 0, 0, 0.2))'
          }}
        >
          {playfulMessages[messageIndex].message}
        </motion.p>
      </AnimatePresence>

      <motion.button
        onClick={onGoClick}
        whileHover={{ scale: 1.05, y: -2 }}
        whileTap={{ scale: 0.98 }}
        transition={{ type: 'spring', stiffness: 300, damping: 20 }}
        className="relative min-w-[280px] h-20 sm:min-w-[340px] sm:h-24 px-8 rounded-3xl overflow-hidden group focus:outline-none bg-white/10 backdrop-blur-xl border border-white/20"
        style={{
          background: 'linear-gradient(135deg, rgba(255, 140, 0, 0.1), rgba(255, 69, 0, 0.08))',
          backdropFilter: 'blur(30px)',
          boxShadow: `
            0 8px 32px rgba(255, 140, 0, 0.1),
            inset 0 1px 0 rgba(255, 255, 255, 0.15),
            0 1px 0 rgba(255, 255, 255, 0.1)
          `
        }}
      >
        {/* Apple-style glass reflection */}
        <div className="absolute inset-0 bg-gradient-to-b from-white/20 via-transparent to-transparent rounded-3xl pointer-events-none" />
        
        <AnimatePresence mode="wait">
          <motion.span
            key={messageIndex}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="relative z-10 block text-xl sm:text-2xl font-bold text-white/90"
            style={{ fontFamily: 'Bungee, cursive', textShadow: '0 1px 2px rgba(0, 0, 0, 0.2)' }}
          >
            {playfulMessages[messageIndex].buttonText}
          </motion.span>
        </AnimatePresence>
      </motion.button>
    </main>
  );
};
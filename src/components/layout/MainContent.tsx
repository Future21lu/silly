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
        whileHover={{ scale: 1.05, boxShadow: '0 20px 40px -10px rgba(0, 0, 0, 0.3)' }}
        whileTap={{ 
          scale: 0.98, 
          boxShadow: '0 0 0 4px rgba(156, 183, 214, 0.3), 0 0 20px rgba(0, 0, 0, 0.2), 0 20px 40px -10px rgba(0, 0, 0, 0.3)' 
        }}
        transition={{ type: 'spring', stiffness: 300, damping: 20 }}
        className="min-w-[280px] h-20 sm:min-w-[340px] sm:h-24 px-8 rounded-full bg-white/20 backdrop-blur-xl shadow-xl flex items-center justify-center text-xl sm:text-2xl font-semibold text-white tracking-tight border border-white/30 focus:outline-none"
        style={{
          textShadow: '0 1px 2px rgba(0, 0, 0, 0.3)',
          backdropFilter: 'blur(20px)'
        }}
      >
        <AnimatePresence mode="wait">
          <motion.span
            key={messageIndex}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="block"
          >
            {playfulMessages[messageIndex].buttonText}
          </motion.span>
        </AnimatePresence>
      </motion.button>
    </main>
  );
};
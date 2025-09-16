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
    <main className="flex-grow flex flex-col items-center justify-center text-center px-4 z-10">
      <AnimatePresence mode="wait">
        <motion.p
          key={messageIndex}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
          className="text-2xl sm:text-3xl lg:text-4xl text-gray-800 font-bold max-w-md sm:max-w-2xl mb-12 leading-tight"
        >
          {playfulMessages[messageIndex].message}
        </motion.p>
      </AnimatePresence>

      <motion.button
        onClick={onGoClick}
        whileHover={{ scale: 1.05, y: -2 }}
        whileTap={{ scale: 0.95 }}
        transition={{ type: 'spring', stiffness: 400, damping: 15 }}
        className="px-8 py-4 sm:px-10 sm:py-5 text-lg sm:text-xl font-semibold text-gray-800 bg-white/70 backdrop-blur-lg border border-white/60 rounded-full shadow-lg hover:shadow-xl hover:bg-white/80 transition-all duration-200"
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
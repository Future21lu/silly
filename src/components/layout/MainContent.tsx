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
    <main className="flex-grow flex flex-col items-center justify-center text-center px-4 relative">
      {/* Floating decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div 
          className="absolute top-1/4 left-1/4 w-2 h-2 bg-orange-400/30 rounded-full"
          animate={{ y: [-10, 10, -10], x: [-5, 5, -5] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div 
          className="absolute top-1/3 right-1/3 w-3 h-3 bg-yellow-400/20 rounded-full"
          animate={{ y: [10, -10, 10], x: [5, -5, 5] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        />
        <motion.div 
          className="absolute bottom-1/3 left-1/3 w-2 h-2 bg-red-400/25 rounded-full"
          animate={{ y: [-8, 8, -8], x: [3, -3, 3] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        />
      </div>

      <AnimatePresence mode="wait">
        <motion.p
          key={messageIndex}
          initial={{ opacity: 0, rotateX: -90, scale: 0.8 }}
          animate={{ opacity: 1, rotateX: 0, scale: 1 }}
          exit={{ opacity: 0, rotateX: 90, scale: 0.8 }}
          transition={{ 
            duration: 0.6, 
            type: "spring", 
            stiffness: 200, 
            damping: 15 
          }}
          className="text-2xl sm:text-4xl text-gray-800 font-bold max-w-md sm:max-w-2xl mb-8 h-24 sm:h-32 flex items-center justify-center leading-tight"
          style={{
            fontFamily: '"Creepster", "Bungee", "Fredoka One", "Comic Sans MS", cursive',
            textShadow: '3px 3px 0px rgba(255, 165, 0, 0.3), -1px -1px 0px rgba(255, 69, 0, 0.2), 2px 2px 8px rgba(0, 0, 0, 0.1)',
            transform: 'rotate(-2deg)',
            letterSpacing: '0.02em'
          }}
        >
          {playfulMessages[messageIndex].message}
        </motion.p>
      </AnimatePresence>

      <motion.button
        onClick={onGoClick}
        whileHover={{ 
          scale: 1.05, 
          rotateZ: 1,
          boxShadow: '0 0 30px rgba(255, 165, 0, 0.4), 0 0 60px rgba(255, 140, 0, 0.2), inset 0 1px 0 rgba(255, 255, 255, 0.3)'
        }}
        whileTap={{ 
          scale: 0.95,
          rotateZ: -1
        }}
        transition={{ type: 'spring', stiffness: 300, damping: 20 }}
        className="relative min-w-[280px] h-20 sm:min-w-[340px] sm:h-24 px-8 rounded-3xl flex items-center justify-center text-xl sm:text-2xl font-bold text-gray-800 tracking-tight focus:outline-none overflow-hidden group"
        style={{
          background: 'linear-gradient(135deg, rgba(255, 165, 0, 0.15) 0%, rgba(255, 140, 0, 0.12) 25%, rgba(255, 69, 0, 0.08) 50%, rgba(255, 99, 71, 0.1) 75%, rgba(255, 165, 0, 0.15) 100%)',
          backdropFilter: 'blur(20px)',
          border: '1.5px solid rgba(255, 165, 0, 0.3)',
          boxShadow: '0 8px 32px rgba(255, 165, 0, 0.15), inset 0 1px 0 rgba(255, 255, 255, 0.2), inset 0 -1px 0 rgba(255, 165, 0, 0.1)',
          fontFamily: '"Bungee", "Fredoka One", "Comic Sans MS", cursive',
          textShadow: '1px 1px 2px rgba(255, 165, 0, 0.3), 0 0 4px rgba(255, 140, 0, 0.2)'
        }}
      >
        {/* Glass reflection overlay */}
        <div 
          className="absolute inset-0 rounded-3xl"
          style={{
            background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.25) 0%, transparent 50%, rgba(255, 165, 0, 0.1) 100%)',
            pointerEvents: 'none'
          }}
        />
        
        {/* Shimmer effect */}
        <div 
          className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          style={{
            background: 'linear-gradient(90deg, transparent 0%, rgba(255, 255, 255, 0.4) 50%, transparent 100%)',
            animation: 'shimmer 2s infinite',
            pointerEvents: 'none'
          }}
        />

        <AnimatePresence mode="wait">
          <motion.span
            key={messageIndex}
            initial={{ opacity: 0, y: 20, rotateX: -90 }}
            animate={{ opacity: 1, y: 0, rotateX: 0 }}
            exit={{ opacity: 0, y: -20, rotateX: 90 }}
            transition={{ 
              duration: 0.4, 
              type: "spring", 
              stiffness: 200,
              damping: 15
            }}
            className="relative z-10 block"
            style={{
              transform: 'rotate(1deg)'
            }}
          >
            {playfulMessages[messageIndex].buttonText}
          </motion.span>
        </AnimatePresence>
      </motion.button>
    </main>
  );
};
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
          initial={{ opacity: 0, y: 20, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -20, scale: 0.9 }}
          transition={{ duration: 0.6, type: "spring", bounce: 0.3 }}
          className="text-3xl sm:text-4xl lg:text-5xl text-gray-800 font-black max-w-md sm:max-w-3xl mb-16 leading-tight tracking-wide"
          style={{
            fontFamily: '"Comic Sans MS", "Chalkduster", "Bradley Hand", cursive',
            textShadow: '2px 2px 4px rgba(0,0,0,0.1), 0 0 20px rgba(255,255,255,0.3)',
            transform: 'rotate(-1deg)'
          }}
        >
          {playfulMessages[messageIndex].message}
        </motion.p>
      </AnimatePresence>

      <motion.button
        onClick={onGoClick}
        whileHover={{ 
          scale: 1.08, 
          y: -4,
          boxShadow: '0 20px 40px rgba(139, 69, 19, 0.3), 0 0 30px rgba(255, 165, 0, 0.4), inset 0 1px 0 rgba(255,255,255,0.6)'
        }}
        whileTap={{ scale: 0.96, y: -2 }}
        transition={{ type: 'spring', stiffness: 300, damping: 20 }}
        className="relative px-12 py-6 text-xl sm:text-2xl font-bold text-white rounded-3xl overflow-hidden group"
        style={{
          background: 'linear-gradient(145deg, #FF6B35, #F7931E, #FFB347, #DEB887)',
          boxShadow: '0 15px 35px rgba(139, 69, 19, 0.25), 0 5px 15px rgba(0,0,0,0.1), inset 0 1px 0 rgba(255,255,255,0.4), inset 0 -1px 0 rgba(0,0,0,0.1)',
          border: '1px solid rgba(255,255,255,0.3)',
          fontFamily: '"Comic Sans MS", "Chalkduster", "Bradley Hand", cursive',
          textShadow: '1px 1px 2px rgba(0,0,0,0.3)',
          backdropFilter: 'blur(10px)'
        }}
      >
        {/* Glassy overlay */}
        <div 
          className="absolute inset-0 opacity-30 group-hover:opacity-50 transition-opacity duration-300"
          style={{
            background: 'linear-gradient(145deg, rgba(255,255,255,0.4) 0%, rgba(255,255,255,0.1) 50%, rgba(255,255,255,0.3) 100%)',
            backdropFilter: 'blur(20px)'
          }}
        />
        
        {/* Shimmer effect */}
        <div 
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          style={{
            background: 'linear-gradient(45deg, transparent 30%, rgba(255,255,255,0.5) 50%, transparent 70%)',
            transform: 'translateX(-100%)',
            animation: 'shimmer 2s infinite'
          }}
        />

        <AnimatePresence mode="wait">
          <motion.span
            key={messageIndex}
            initial={{ opacity: 0, y: 15, rotateX: -90 }}
            animate={{ opacity: 1, y: 0, rotateX: 0 }}
            exit={{ opacity: 0, y: -15, rotateX: 90 }}
            transition={{ duration: 0.4, ease: 'easeOut' }}
            className="relative z-10 block"
            style={{ 
              transform: 'rotate(0.5deg)',
              letterSpacing: '0.5px'
            }}
          >
            {playfulMessages[messageIndex].buttonText}
          </motion.span>
        </AnimatePresence>
      </motion.button>

      {/* Fun floating elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 rounded-full opacity-40"
            style={{
              background: `linear-gradient(45deg, #FF6B35, #F7931E)`,
              left: `${20 + i * 15}%`,
              top: `${30 + (i % 3) * 20}%`,
            }}
            animate={{
              y: [0, -20, 0],
              x: [0, 10, 0],
              scale: [1, 1.2, 1],
              rotate: [0, 180, 360]
            }}
            transition={{
              duration: 3 + i * 0.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.3
            }}
          />
        ))}
      </div>
    </main>
  );
};
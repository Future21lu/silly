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
    <main className="flex-grow flex flex-col items-center justify-center text-center px-4 relative z-10">
      {/* Enhanced message container with glassmorphism */}
      <div className="relative mb-12">
        <AnimatePresence mode="wait">
          <motion.div
            key={messageIndex}
            initial={{ opacity: 0, y: 30, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -30, scale: 0.9 }}
            transition={{ 
              duration: 0.6, 
              ease: [0.25, 0.46, 0.45, 0.94],
              type: "spring",
              stiffness: 100
            }}
            className="relative p-8 sm:p-12 bg-white/10 backdrop-blur-2xl border border-white/20 rounded-3xl shadow-2xl max-w-2xl mx-auto"
            style={{
              background: 'linear-gradient(135deg, rgba(255,255,255,0.15) 0%, rgba(255,255,255,0.05) 100%)',
              backdropFilter: 'blur(20px)',
              boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25), inset 0 1px 0 rgba(255, 255, 255, 0.2)'
            }}
          >
            {/* Decorative corner elements */}
            <div className="absolute top-4 left-4 w-3 h-3 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full opacity-60"></div>
            <div className="absolute top-4 right-4 w-2 h-2 bg-gradient-to-br from-blue-400 to-cyan-400 rounded-full opacity-60"></div>
            <div className="absolute bottom-4 left-4 w-2 h-2 bg-gradient-to-br from-yellow-400 to-orange-400 rounded-full opacity-60"></div>
            <div className="absolute bottom-4 right-4 w-3 h-3 bg-gradient-to-br from-green-400 to-emerald-400 rounded-full opacity-60"></div>
            
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.4 }}
              className="text-2xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight tracking-tight"
              style={{
                fontFamily: '"Inter", "SF Pro Display", -apple-system, BlinkMacSystemFont, sans-serif',
                textShadow: '0 2px 4px rgba(0, 0, 0, 0.3), 0 0 20px rgba(255, 255, 255, 0.1)',
                background: 'linear-gradient(135deg, #ffffff 0%, #f0f9ff 50%, #e0f2fe 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}
            >
              {playfulMessages[messageIndex].message}
            </motion.p>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Enhanced button with better styling */}
      <motion.button
        onClick={onGoClick}
        whileHover={{ 
          scale: 1.05, 
          y: -2,
          boxShadow: '0 25px 50px -10px rgba(0, 0, 0, 0.4), 0 0 30px rgba(255, 255, 255, 0.1)' 
        }}
        whileTap={{ 
          scale: 0.98, 
          y: 0,
          boxShadow: '0 0 0 6px rgba(156, 183, 214, 0.2), 0 10px 30px rgba(0, 0, 0, 0.3)' 
        }}
        transition={{ type: 'spring', stiffness: 400, damping: 25 }}
        className="group relative min-w-[320px] h-20 sm:min-w-[380px] sm:h-24 px-10 rounded-full overflow-hidden focus:outline-none focus:ring-4 focus:ring-white/30"
        style={{
          background: 'linear-gradient(135deg, rgba(255,255,255,0.25) 0%, rgba(255,255,255,0.1) 50%, rgba(255,255,255,0.15) 100%)',
          backdropFilter: 'blur(20px)',
          border: '1px solid rgba(255,255,255,0.3)',
          boxShadow: '0 20px 40px -10px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.2)'
        }}
      >
        {/* Animated background gradient */}
        <div 
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          style={{
            background: 'linear-gradient(135deg, rgba(147, 197, 253, 0.2) 0%, rgba(196, 181, 253, 0.2) 50%, rgba(251, 207, 232, 0.2) 100%)'
          }}
        />
        
        {/* Shimmer effect */}
        <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
        
        <div className="relative flex items-center justify-center h-full">
          <AnimatePresence mode="wait">
            <motion.span
              key={messageIndex}
              initial={{ opacity: 0, y: 15, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -15, scale: 0.9 }}
              transition={{ duration: 0.4, ease: 'easeOut' }}
              className="text-xl sm:text-2xl font-bold text-white tracking-tight"
              style={{
                fontFamily: '"Inter", "SF Pro Display", -apple-system, BlinkMacSystemFont, sans-serif',
                textShadow: '0 2px 4px rgba(0, 0, 0, 0.3)',
                background: 'linear-gradient(135deg, #ffffff 0%, #f8fafc 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}
            >
              {playfulMessages[messageIndex].buttonText}
            </motion.span>
          </AnimatePresence>
        </div>
        
        {/* Subtle pulse ring */}
        <div className="absolute inset-0 rounded-full border border-white/20 group-hover:animate-ping opacity-0 group-hover:opacity-75" />
      </motion.button>

      {/* Floating decorative elements */}
      <div className="absolute top-1/4 left-8 w-4 h-4 bg-gradient-to-br from-purple-400/30 to-pink-400/30 rounded-full animate-float" />
      <div className="absolute top-1/3 right-12 w-3 h-3 bg-gradient-to-br from-blue-400/30 to-cyan-400/30 rounded-full animate-float" style={{ animationDelay: '1s' }} />
      <div className="absolute bottom-1/3 left-16 w-2 h-2 bg-gradient-to-br from-yellow-400/30 to-orange-400/30 rounded-full animate-float" style={{ animationDelay: '2s' }} />
      <div className="absolute bottom-1/4 right-8 w-5 h-5 bg-gradient-to-br from-green-400/20 to-emerald-400/20 rounded-full animate-float" style={{ animationDelay: '0.5s' }} />
    </main>
  );
};
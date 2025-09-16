import React from 'react';
import { motion } from 'framer-motion';

interface AnimatedIconButtonProps {
  children: React.ReactNode;
  text: string;
  onClick?: () => void;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
}

export const AnimatedIconButton: React.FC<AnimatedIconButtonProps> = ({ 
  children, 
  text, 
  onClick, 
  onMouseEnter, 
  onMouseLeave 
}) => (
  <motion.button
    onClick={onClick}
    onMouseEnter={onMouseEnter}
    onMouseLeave={onMouseLeave}
    whileHover={{ scale: 1.1, y: -2 }}
    whileTap={{ scale: 0.95 }}
    transition={{ type: 'spring', stiffness: 400, damping: 15 }}
    className="flex items-center gap-2 px-6 py-3 sm:px-4 sm:py-2 text-sm font-medium text-black/80 bg-white/60 backdrop-blur-lg border border-white/50 rounded-full shadow-md"
  >
    {children}
    <span className="hidden sm:inline">{text}</span>
  </motion.button>
);
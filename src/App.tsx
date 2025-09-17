import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const App: React.FC = () => {
  const [clickCount, setClickCount] = useState(0);
  const [showPrank, setShowPrank] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const prankMessages = [
    "Wait... did you just click that? 🤔",
    "Hmm, interesting choice... 👀",
    "You're really going for it, aren't you? 😏",
    "Okay, this is getting suspicious... 🕵️",
    "GOTCHA! 🎉 You've been pranked! This button does absolutely nothing! 😂"
  ];

  const handleButtonClick = () => {
    setClickCount(prev => prev + 1);
    if (clickCount >= 4) {
      setShowPrank(true);
    }
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (clickCount >= 2 && clickCount < 4) {
      // Make the button run away from the cursor
      setMousePosition({ x: e.clientX, y: e.clientY });
    }
  };

  const getButtonStyle = () => {
    if (clickCount >= 2 && clickCount < 4) {
      const centerX = window.innerWidth / 2;
      const centerY = window.innerHeight / 2;
      const offsetX = mousePosition.x > centerX ? -100 : 100;
      const offsetY = mousePosition.y > centerY ? -50 : 50;
      
      return {
        transform: `translate(${offsetX}px, ${offsetY}px)`,
        transition: 'transform 0.3s ease-out'
      };
    }
    return {};
  };

  return (
    <div 
      className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex flex-col items-center justify-center p-8"
      onMouseMove={handleMouseMove}
    >
      <div className="max-w-2xl mx-auto text-center">
        <motion.h1 
          className="text-4xl md:text-6xl font-bold text-gray-800 mb-6"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {showPrank ? "🎭 PRANKED!" : "Welcome!"}
        </motion.h1>

        <AnimatePresence mode="wait">
          {!showPrank ? (
            <motion.div
              key="normal"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="space-y-8"
            >
              <p className="text-xl text-gray-600 mb-8">
                {clickCount === 0 && "Click the button below to get started!"}
                {clickCount === 1 && "Great! One more time..."}
                {clickCount === 2 && "Hmm, the button seems a bit... shy now 🤭"}
                {clickCount === 3 && "It's really trying to avoid you! 😅"}
                {clickCount >= 4 && "You're persistent, I'll give you that! 😂"}
              </p>

              <motion.button
                onClick={handleButtonClick}
                style={getButtonStyle()}
                whileHover={{ scale: clickCount < 2 ? 1.05 : 1 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-lg shadow-lg transition-colors duration-200"
              >
                {clickCount === 0 && "Click Me!"}
                {clickCount === 1 && "Click Again!"}
                {clickCount === 2 && "Catch Me!"}
                {clickCount === 3 && "Still Trying?"}
                {clickCount >= 4 && "You Got Me!"}
              </motion.button>
            </motion.div>
          ) : (
            <motion.div
              key="prank"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              className="space-y-6"
            >
              <div className="text-6xl mb-4">🎉</div>
              <p className="text-2xl text-gray-700 mb-6">
                Congratulations! You just spent time clicking a button that does absolutely nothing!
              </p>
              <p className="text-lg text-gray-600 mb-8">
                But hey, at least you're persistent! 😄
              </p>
              
              <motion.button
                onClick={() => {
                  setClickCount(0);
                  setShowPrank(false);
                }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 bg-green-500 hover:bg-green-600 text-white font-semibold rounded-lg shadow-lg transition-colors duration-200"
              >
                Prank Someone Else! 😈
              </motion.button>
            </motion.div>
          )}
        </AnimatePresence>

        {!showPrank && clickCount > 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="mt-8"
          >
            <p className="text-sm text-gray-500">
              Clicks: {clickCount} / 5
            </p>
            <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
              <div 
                className="bg-blue-500 h-2 rounded-full transition-all duration-300"
                style={{ width: `${(clickCount / 5) * 100}%` }}
              ></div>
            </div>
          </motion.div>
        )}
      </div>

      {/* Floating elements for visual interest */}
      <div className="absolute top-10 left-10 text-4xl animate-bounce">🎈</div>
      <div className="absolute top-20 right-20 text-3xl animate-pulse">⭐</div>
      <div className="absolute bottom-20 left-20 text-3xl animate-bounce" style={{ animationDelay: '1s' }}>🎪</div>
      <div className="absolute bottom-10 right-10 text-4xl animate-pulse" style={{ animationDelay: '2s' }}>🎭</div>
    </div>
  );
};

export default App;
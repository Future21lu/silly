import React, { useState, useEffect } from 'react';
import { Header } from './components/layout/Header';
import { MainContent } from './components/layout/MainContent';
import { Footer } from './components/layout/Footer';
import { BackgroundShapes } from './components/layout/BackgroundShapes';
import { usePlayfulMessages } from './hooks/usePlayfulMessages';
import bgImage from './assets/bg.png';
import bbgImage from './assets/bbg.jpg';

const App: React.FC = () => {
  const [hoveredButton, setHoveredButton] = useState<string | null>(null);
  const { messageIndex, playfulMessages, stopInterval } = usePlayfulMessages();

  // Prevent right-click context menu and copy/paste shortcuts
  useEffect(() => {
    const preventContextMenu = (e: MouseEvent) => {
      e.preventDefault();
      return false;
    };

    const preventKeyboardShortcuts = (e: KeyboardEvent) => {
      // Prevent common copy/paste/select shortcuts
      if (
        (e.ctrlKey || e.metaKey) && 
        (e.key === 'a' || e.key === 'c' || e.key === 'v' || e.key === 'x' || e.key === 's' || e.key === 'p')
      ) {
        e.preventDefault();
        return false;
      }
      
      // Prevent F12 (Developer Tools)
      if (e.key === 'F12') {
        e.preventDefault();
        return false;
      }
      
      // Prevent Ctrl+Shift+I (Developer Tools)
      if ((e.ctrlKey || e.metaKey) && e.shiftKey && e.key === 'I') {
        e.preventDefault();
        return false;
      }
      
      // Prevent Ctrl+U (View Source)
      if ((e.ctrlKey || e.metaKey) && e.key === 'u') {
        e.preventDefault();
        return false;
      }
    };

    const preventDragStart = (e: DragEvent) => {
      e.preventDefault();
      return false;
    };

    const preventSelectStart = (e: Event) => {
      e.preventDefault();
      return false;
    };

    // Add event listeners
    document.addEventListener('contextmenu', preventContextMenu);
    document.addEventListener('keydown', preventKeyboardShortcuts);
    document.addEventListener('dragstart', preventDragStart);
    document.addEventListener('selectstart', preventSelectStart);

    // Cleanup
    return () => {
      document.removeEventListener('contextmenu', preventContextMenu);
      document.removeEventListener('keydown', preventKeyboardShortcuts);
      document.removeEventListener('dragstart', preventDragStart);
      document.removeEventListener('selectstart', preventSelectStart);
    };
  }, []);

  const handleGoClick = () => {
    stopInterval();
    console.log("Button clicked! Navigating to a silly site...");
  };

  const handleCoffeeClick = () => {
    console.log("Coffee button clicked!");
  };

  const handleLeaderboardClick = () => {
    console.log("Leaderboard button clicked!");
  };

  const handleMouseEnter = (buttonType: string) => {
    setHoveredButton(buttonType);
  };

  const handleMouseLeave = () => {
    setHoveredButton(null);
  };

  return (
    <div 
      className="relative w-full h-screen overflow-hidden font-sans text-gray-800 flex flex-col items-center justify-center p-4 sm:p-8"
      style={{
        backgroundImage: `url(${bgImage}), url(${bbgImage})`,
        backgroundSize: '124%, cover',
        backgroundPosition: 'left bottom, center',
        backgroundRepeat: 'no-repeat, no-repeat'
      }}
    >
      <BackgroundShapes />
      
      <Header 
        hoveredButton={hoveredButton}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      />

      <MainContent 
        messageIndex={messageIndex}
        playfulMessages={playfulMessages}
        onGoClick={handleGoClick}
      />

      <Footer 
        hoveredButton={hoveredButton}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onCoffeeClick={handleCoffeeClick}
        onLeaderboardClick={handleLeaderboardClick}
      />
    </div>
  );
};

export default App;
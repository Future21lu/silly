import React from 'react';
import { Eye, BarChartHorizontalBig } from 'lucide-react';
import { AnimatedIconButton } from '../ui/AnimatedIconButton';
import { HoverPopup } from '../ui/HoverPopup';

interface FooterProps {
  hoveredButton: string | null;
  onMouseEnter: (buttonType: string) => void;
  onMouseLeave: () => void;
  onCoffeeClick: () => void;
  onLeaderboardClick: () => void;
}

export const Footer: React.FC<FooterProps> = ({ 
  hoveredButton, 
  onMouseEnter, 
  onMouseLeave, 
  onCoffeeClick, 
  onLeaderboardClick 
}) => {
  return (
    <footer className="absolute bottom-0 left-0 right-0 p-4 sm:p-8 flex justify-between items-center w-full">
      <div className="z-10"></div>

      <div className="flex gap-2 sm:gap-4 z-10 mr-4">
        <div className="relative">
          <AnimatedIconButton 
            text="Eyes on Us" 
            onClick={onCoffeeClick}
            onMouseEnter={() => onMouseEnter('flex')}
            onMouseLeave={onMouseLeave}
          >
            <Eye className="w-5 h-5" />
          </AnimatedIconButton>
          
          <HoverPopup
            isVisible={hoveredButton === 'flex'}
            content="We see you enjoying this... maybe show some love? 👀💝 (Our ramen budget is looking pretty sad)"
            position="bottom-left"
          />
        </div>
        
        <div className="relative">
          <AnimatedIconButton 
            text="Backstage" 
            onClick={onLeaderboardClick}
            onMouseEnter={() => onMouseEnter('backstage')}
            onMouseLeave={onMouseLeave}
          >
            <BarChartHorizontalBig className="w-5 h-5" />
          </AnimatedIconButton>
          
          <HoverPopup
            isVisible={hoveredButton === 'backstage'}
            content="Meet the silly masterminds"
            position="bottom-center"
          />
        </div>
      </div>
    </footer>
  );
};
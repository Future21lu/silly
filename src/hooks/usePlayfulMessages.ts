import { useState, useEffect, useRef } from 'react';

const playfulMessages = [
  { message: "Welcome to SillySites ✨ Go on, click the button… it won't bite.", buttonText: "🚀Take me somewhere silly" },
  { message: "Oh, still here? 🤔 What's the matter… afraid of a little fun? 😏", buttonText: "🎭Surprise me already" },
  { message: "Wow… you're really just gonna stare at me, huh? Bold move 👏", buttonText: "🔥Click me, I dare you" },
  { message: "Okay, fine. Maybe you enjoy wasting time more than I thought 👀", buttonText: "Prove me wrong😈" },
  { message: "This is getting awkward… 😅 seriously, just click it before I start judging you harder.", buttonText: "😤 Just click it!" }
];

export const usePlayfulMessages = () => {
  const [messageIndex, setMessageIndex] = useState(0);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const stopInterval = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  };

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setMessageIndex(prevIndex => {
        if (prevIndex >= playfulMessages.length - 1) {
          stopInterval();
          return prevIndex;
        }
        return prevIndex + 1;
      });
    }, 6000); // Change message every 6 seconds

    return () => stopInterval();
  }, []);

  return {
    messageIndex,
    playfulMessages,
    stopInterval
    
  };
};
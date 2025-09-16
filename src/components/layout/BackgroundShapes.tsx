import React from 'react';

export const BackgroundShapes: React.FC = () => {
  return (
    <div className="absolute inset-0 overflow-hidden">
      <div className="absolute top-[-20%] left-[-20%] w-96 h-96 bg-gradient-to-br from-purple-200 to-transparent rounded-full filter blur-3xl opacity-50 animate-blob"></div>
      <div className="absolute bottom-[-15%] right-[-15%] w-96 h-96 bg-gradient-to-br from-blue-200 to-transparent rounded-full filter blur-3xl opacity-50 animate-blob animation-delay-2000"></div>
      <div className="absolute top-[10%] right-[5%] w-80 h-80 bg-gradient-to-br from-pink-200 to-transparent rounded-full filter blur-3xl opacity-40 animate-blob animation-delay-4000"></div>
      <div className="absolute bottom-[20%] left-[10%] w-72 h-72 bg-gradient-to-br from-yellow-200 to-transparent rounded-full filter blur-3xl opacity-40 animate-blob animation-delay-6000"></div>
    </div>
  );
};
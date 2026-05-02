import React from 'react';

const Loading = () => {
  return (
    <div className="fixed inset-0 flex flex-col items-center justify-center bg-gray-900/50 backdrop-blur-sm z-50">
      <div className="relative">
        {/* Outer Ring */}
        <div className="w-20 h-20 border-4 border-blue-500/20 border-t-blue-500 rounded-full animate-spin"></div>
        
        {/* Inner Ring (Reverse) */}
        <div className="absolute inset-0 m-auto w-12 h-12 border-4 border-purple-500/20 border-t-purple-500 rounded-full animate-spin-reverse opacity-70"></div>
        
        {/* Pulse Center */}
        <div className="absolute inset-0 m-auto w-4 h-4 bg-white rounded-full animate-pulse shadow-[0_0_15px_rgba(255,255,255,0.8)]"></div>
      </div>
      
      <p className="mt-6 text-white font-medium tracking-widest animate-pulse">
        LOADING<span className="animate-bounce inline-block ml-1">...</span>
      </p>

      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes spin-reverse {
          from { transform: rotate(0deg); }
          to { transform: rotate(-360deg); }
        }
        .animate-spin-reverse {
          animation: spin-reverse 1.5s linear infinite;
        }
      `}} />
    </div>
  );
};

export default Loading;

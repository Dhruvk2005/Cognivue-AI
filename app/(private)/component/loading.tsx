import React from 'react';

const Loading = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-black">
      <div className="relative">
{/*         
        <div className="w-20 h-20 border-2 border-gray-800 border-t-white rounded-full animate-spin"></div> */}
        
       
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-16 h-16 border-2 border-[white] border-l-gray-400 rounded-full animate-spin" style={{ animationDuration: '1.5s' }}></div>
        </div>
        
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-12 h-12 border-2 border-[white] border-r-gray-500 rounded-full animate-spin" style={{ animationDuration: '2s', animationDirection: 'reverse' }}></div>
        </div>
        
      
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
        </div>
      </div>
      
     
      <div className="absolute mt-32">
        <p className="text-sm font-light text-gray-400 tracking-widest uppercase">Loading</p>
        <div className="flex gap-1 mt-3 justify-center">
          <div className="w-1.5 h-1.5 bg-gray-500 rounded-full animate-bounce" style={{ animationDelay: '0s' }}></div>
          <div className="w-1.5 h-1.5 bg-gray-500 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
          <div className="w-1.5 h-1.5 bg-gray-500 rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></div>
        </div>
      </div>
    </div>
  );
};

export default Loading;
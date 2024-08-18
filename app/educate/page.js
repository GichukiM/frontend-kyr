import React from 'react';
import bgImage from '../../public/Logo.png';

function Educate() {
  return (
    <div 
      className="h-screen w-full bg-center flex items-center justify-center" 
      style={{ 
        backgroundImage: 'url(/Logo.png)',
        backgroundPosition: 'center',
        backgroundRepeat: 'repeat',
        backgroundSize: '', }}
    >
      <div className="bg-black bg-opacity-900 p-8 rounded-full h-64 w-64 border-white border flex items-center text-center">
        <h1 className="text-4xl font-bold text-yellow">Coming Soon</h1>
      </div>
    </div>
  );
}

export default Educate;

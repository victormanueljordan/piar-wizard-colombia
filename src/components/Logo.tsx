
import React from 'react';

interface LogoProps {
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ className }) => {
  return (
    <div className={`flex items-center ${className}`}>
      <span className="text-piar-blue font-bold text-2xl tracking-tight">PIAR</span>
      <span className="text-green-500 font-bold text-2xl">1</span>
      <span className="text-blue-500 font-bold text-2xl">2</span>
      <span className="text-yellow-500 font-bold text-2xl">3</span>
    </div>
  );
};

export default Logo;

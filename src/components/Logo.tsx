
import React from 'react';

interface LogoProps {
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ className }) => {
  return (
    <div className={`flex items-center ${className}`}>
      <span className="text-piar-blue font-bold text-2xl">PIAR</span>
      <span className="text-piar-blue font-bold text-2xl">1</span>
      <span className="text-piar-yellow font-bold text-2xl">2</span>
      <span className="text-piar-green font-bold text-2xl">3</span>
    </div>
  );
};

export default Logo;

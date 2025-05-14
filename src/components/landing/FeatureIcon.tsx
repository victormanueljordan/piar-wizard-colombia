
import React from 'react';

interface FeatureIconProps {
  children: React.ReactNode;
  className?: string;
}

export const FeatureIcon = ({ children, className = "" }: FeatureIconProps) => {
  return (
    <div className={`bg-gray-100 p-3 rounded-lg transform hover:rotate-12 transition-all duration-300 ${className}`}>
      {children}
    </div>
  );
};

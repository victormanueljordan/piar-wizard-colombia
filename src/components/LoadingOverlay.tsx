
import React from 'react';
import Logo from './Logo';

interface LoadingOverlayProps {
  message?: string;
}

const LoadingOverlay: React.FC<LoadingOverlayProps> = ({ message = "Cargando..." }) => {
  return (
    <div className="fixed inset-0 bg-white/80 backdrop-blur-sm flex flex-col items-center justify-center z-50">
      <div className="flex flex-col items-center gap-6">
        <div className="animate-bounce transition-all duration-700">
          <Logo className="w-24 h-24" />
        </div>
        <div className="flex flex-col items-center">
          <div className="h-2 w-40 bg-gray-200 rounded-full overflow-hidden">
            <div className="h-full bg-gradient-to-r from-piar-blue to-piar-green animate-pulse rounded-full" />
          </div>
          <p className="text-gray-600 mt-3 font-medium">{message}</p>
        </div>
      </div>
    </div>
  );
};

export default LoadingOverlay;

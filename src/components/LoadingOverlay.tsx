
import React from 'react';
import Logo from './Logo';

interface LoadingOverlayProps {
  message?: string;
}

const LoadingOverlay: React.FC<LoadingOverlayProps> = ({ message = "Cargando..." }) => {
  return (
    <div className="fixed inset-0 bg-white/90 backdrop-blur-sm flex flex-col items-center justify-center z-50">
      <div className="flex flex-col items-center gap-6">
        <div className="animate-bounce transition-all duration-700">
          <Logo className="w-24 h-24 filter drop-shadow-md" />
        </div>
        <div className="flex flex-col items-center">
          <div className="h-2 w-48 bg-gray-200 rounded-full overflow-hidden">
            <div className="h-full bg-gradient-to-r from-piar-blue via-piar-green to-piar-blue animate-pulse rounded-full" 
                 style={{ 
                    backgroundSize: '200% 100%', 
                    animation: 'gradient 2s ease infinite' 
                 }} 
            />
          </div>
          <p className="text-gray-600 mt-3 font-medium animate-fade-in">{message}</p>
        </div>
      </div>
      
      <style jsx>{`
        @keyframes gradient {
          0% { background-position: 0% 50% }
          50% { background-position: 100% 50% }
          100% { background-position: 0% 50% }
        }
      `}</style>
    </div>
  );
};

export default LoadingOverlay;

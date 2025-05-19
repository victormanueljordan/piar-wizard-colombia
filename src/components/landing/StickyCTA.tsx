
import React, { useState, useEffect } from 'react';
import { ChevronUp } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface StickyCTAProps {
  scrollToLogin: () => void;
}

const StickyCTA: React.FC<StickyCTAProps> = ({ scrollToLogin }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 500) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3">
      <Button 
        onClick={scrollToTop}
        className="rounded-full w-12 h-12 bg-white shadow-lg border border-gray-200 hover:bg-gray-100 flex items-center justify-center"
      >
        <ChevronUp className="h-6 w-6 text-piar-blue" />
      </Button>
      
      <Button 
        onClick={scrollToLogin}
        className="cta-button rounded-full px-6 py-3 hidden md:flex animate-pulse"
      >
        Ingresar ahora
      </Button>
    </div>
  );
};

export default StickyCTA;

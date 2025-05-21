
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

interface CallToActionProps {
  scrollToLogin: () => void;
}

const CallToAction = ({ scrollToLogin }: CallToActionProps) => {
  return (
    <section className="section py-20 bg-gradient-to-r from-piar-blue to-blue-700 text-white text-center relative overflow-hidden">
      {/* Animated elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-10 left-10 w-32 h-32 bg-white opacity-10 rounded-full animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-40 h-40 bg-white opacity-10 rounded-full animate-pulse delay-300"></div>
        <div className="absolute top-1/3 right-1/4 w-28 h-28 bg-white opacity-10 rounded-full animate-pulse delay-700"></div>
        
        {/* Light beam effects */}
        <div className="absolute -left-20 top-1/2 w-40 h-[200%] bg-white/10 rotate-45 blur-xl"></div>
        <div className="absolute -right-20 top-1/4 w-40 h-[200%] bg-white/10 -rotate-45 blur-xl"></div>
      </div>
      
      {/* Content container - adjusted for better centering */}
      <div className="container mx-auto max-w-4xl space-y-8 relative z-10 px-4 sm:px-6 flex flex-col items-center">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-heading mb-6 max-w-3xl">
          ¿Eres docente o parte de una institución educativa?
        </h2>
        <p className="text-xl md:text-2xl max-w-3xl mx-auto mb-8">
          Estamos construyendo la herramienta que transformará la manera en que las instituciones educativas abordan la inclusión
        </p>
        <Button 
          onClick={scrollToLogin}
          size="lg" 
          className="bg-white text-blue-600 hover:bg-blue-50 font-bold text-lg transition-all duration-300 hover:shadow-xl px-8 py-7 rounded-md w-full sm:w-auto"
        >
          <span>Sé el primero en probar PIAR123</span>
          <ArrowRight className="ml-2 h-5 w-5" />
        </Button>
      </div>
    </section>
  );
};

export default CallToAction;

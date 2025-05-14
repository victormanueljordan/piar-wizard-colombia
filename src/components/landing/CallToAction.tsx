
import { Button } from '@/components/ui/button';

interface CallToActionProps {
  scrollToLogin: () => void;
}

const CallToAction = ({ scrollToLogin }: CallToActionProps) => {
  return (
    <section className="py-16 px-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white text-center relative overflow-hidden">
      {/* Animated elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-10 left-10 w-32 h-32 bg-white opacity-10 rounded-full animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-40 h-40 bg-white opacity-10 rounded-full animate-pulse delay-300"></div>
        <div className="absolute top-1/3 right-1/4 w-28 h-28 bg-white opacity-10 rounded-full animate-pulse delay-700"></div>
        
        {/* Light beam effects */}
        <div className="absolute -left-20 top-1/2 w-40 h-[200%] bg-white/10 rotate-45 blur-xl"></div>
        <div className="absolute -right-20 top-1/4 w-40 h-[200%] bg-white/10 -rotate-45 blur-xl"></div>
      </div>
      
      <div className="container mx-auto space-y-8 relative z-10">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">¿Eres docente o parte de una institución educativa?</h2>
        <p className="text-xl md:text-2xl max-w-3xl mx-auto">
          Únete a los educadores que ya están transformando la inclusión educativa con PIAR123
        </p>
        <Button 
          onClick={scrollToLogin}
          size="lg" 
          className="bg-white text-blue-600 hover:bg-blue-50 font-bold text-lg transition-all duration-300 hover:shadow-xl px-8 py-6 relative overflow-hidden group"
        >
          <span className="relative z-10">Inicia sesión en PIAR123</span>
          <div className="absolute bottom-0 left-0 h-1 w-full bg-blue-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
        </Button>
      </div>
    </section>
  );
};

export default CallToAction;

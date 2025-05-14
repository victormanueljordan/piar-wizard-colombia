
import { Button } from '@/components/ui/button';

interface CallToActionProps {
  scrollToLogin: () => void;
}

const CallToAction = ({ scrollToLogin }: CallToActionProps) => {
  return (
    <section className="py-16 px-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white text-center relative overflow-hidden">
      {/* Animated elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-10 left-10 w-32 h-32 bg-white opacity-10 rounded-full animate-pulse"></div>
          <div className="absolute bottom-10 right-10 w-40 h-40 bg-white opacity-10 rounded-full animate-pulse delay-300"></div>
          <div className="absolute top-1/3 right-1/4 w-28 h-28 bg-white opacity-10 rounded-full animate-pulse delay-700"></div>
        </div>
      </div>
      
      <div className="container mx-auto space-y-8 relative z-10 animate-scale-in">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">¿Eres docente o parte de una institución educativa?</h2>
        <p className="text-xl md:text-2xl max-w-3xl mx-auto">
          Únete a los educadores que ya están transformando la inclusión educativa con PIAR123
        </p>
        <Button 
          onClick={scrollToLogin}
          size="lg" 
          className="bg-white text-blue-600 hover:bg-gray-100 font-bold text-lg transition-all duration-300 transform hover:scale-110 hover:shadow-xl px-8 py-6"
        >
          Inicia sesión en PIAR123
        </Button>
      </div>
    </section>
  );
};

export default CallToAction;

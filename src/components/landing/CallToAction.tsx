
import { Button } from '@/components/ui/button';

interface CallToActionProps {
  scrollToLogin: () => void;
}

const CallToAction = ({ scrollToLogin }: CallToActionProps) => {
  return (
    <section className="py-12 px-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white text-center relative overflow-hidden">
      {/* Animated elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-10 left-10 w-20 h-20 bg-white opacity-10 rounded-full animate-pulse"></div>
          <div className="absolute bottom-10 right-10 w-32 h-32 bg-white opacity-10 rounded-full animate-pulse delay-300"></div>
          <div className="absolute top-1/3 right-1/4 w-24 h-24 bg-white opacity-10 rounded-full animate-pulse delay-700"></div>
        </div>
      </div>
      
      <div className="container mx-auto space-y-6 relative z-10">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold">¿Eres docente o parte de una institución educativa?</h2>
        <p className="text-xl max-w-2xl mx-auto">
          Únete a los educadores que ya están transformando la inclusión educativa con PIAR123
        </p>
        <Button 
          onClick={scrollToLogin}
          size="lg" 
          className="bg-white text-blue-600 hover:bg-gray-100 font-bold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
        >
          Inicia sesión en PIAR123
        </Button>
      </div>
    </section>
  );
};

export default CallToAction;

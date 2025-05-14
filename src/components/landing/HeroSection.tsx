
import { Button } from '@/components/ui/button';
import { ArrowDown, Play } from 'lucide-react';

interface HeroSectionProps {
  scrollToLogin: () => void;
  scrollToProblem: () => void;
  scrollToVideo: () => void;
}

const HeroSection = ({ scrollToLogin, scrollToProblem, scrollToVideo }: HeroSectionProps) => {
  return (
    <section className="relative min-h-[85vh] py-12 flex items-center overflow-hidden">
      {/* Animated dots background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-20 w-80 h-80 bg-blue-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse delay-700"></div>
        <div className="absolute top-1/3 right-1/4 w-60 h-60 bg-green-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse delay-1000"></div>
      </div>
      
      <div className="container mx-auto px-4 z-10">
        <div className="max-w-4xl mx-auto backdrop-blur-sm p-8 rounded-xl shadow-lg transform hover:scale-[1.01] transition-all duration-500">
          <div className="text-center space-y-6 mb-8 animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 leading-tight bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-purple-500 to-piar-green animate-pulse">
              Transformamos la inclusión educativa con tecnología
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mx-auto max-w-3xl animate-fade-in">
              PIAR123 es la plataforma inteligente que facilita la creación de Planes Individuales de Ajustes Razonables (PIAR) para docentes, instituciones y familias.
            </p>
          </div>
          
          <div className="flex flex-col md:flex-row gap-4 max-w-md mx-auto justify-center animate-scale-in">
            <Button 
              size="lg"
              className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-medium text-lg py-6 transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
              onClick={scrollToLogin}
            >
              Ingresar al sistema
              <ArrowDown className="h-4 w-4 ml-1 animate-bounce" />
            </Button>
            <Button 
              size="lg"
              variant="outline" 
              className="border-blue-500 text-blue-600 hover:bg-blue-50 font-medium text-lg py-6 transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
              onClick={scrollToVideo}
            >
              Ver nuestro pitch
              <Play className="h-4 w-4 ml-1" />
            </Button>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 animate-bounce z-10">
        <Button 
          variant="ghost" 
          size="icon" 
          className="rounded-full bg-white shadow-md hover:shadow-lg h-12 w-12"
          onClick={scrollToProblem}
        >
          <ArrowDown className="text-blue-600 h-5 w-5" />
        </Button>
      </div>
    </section>
  );
};

export default HeroSection;

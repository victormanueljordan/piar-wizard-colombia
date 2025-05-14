
import { Button } from '@/components/ui/button';
import { ArrowDown, Play } from 'lucide-react';

interface HeroSectionProps {
  scrollToLogin: () => void;
  scrollToProblem: () => void;
  scrollToVideo: () => void;
}

const HeroSection = ({ scrollToLogin, scrollToProblem, scrollToVideo }: HeroSectionProps) => {
  return (
    <section className="relative min-h-[85vh] py-8 flex items-center">
      {/* Enhanced animated background elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-10 left-10 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-80 h-80 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-pulse delay-700"></div>
        <div className="absolute top-1/3 right-1/3 w-64 h-64 bg-green-200 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-pulse delay-1000"></div>
        <div className="absolute bottom-1/3 left-1/4 w-60 h-60 bg-yellow-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse delay-500"></div>
      </div>
      
      <div className="container mx-auto px-4 z-10">
        <div className="max-w-4xl mx-auto bg-white/80 backdrop-blur-sm p-8 rounded-xl shadow-lg">
          <div className="text-center space-y-6 mb-10">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 leading-tight">
              Transformamos la inclusión educativa con tecnología
            </h1>
            <p className="text-xl text-gray-600 mx-auto max-w-2xl">
              PIAR123 es la plataforma inteligente que facilita la creación de Planes Individuales de Ajustes Razonables (PIAR) para docentes, instituciones y familias.
            </p>
          </div>
          
          <div className="flex flex-col gap-4 max-w-md mx-auto">
            <Button 
              size="lg"
              className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-medium text-lg py-6 transition-all duration-300"
              onClick={scrollToLogin}
            >
              Ingresar al sistema
              <ArrowDown className="h-4 w-4" />
            </Button>
            <Button 
              size="lg"
              variant="outline" 
              className="border-blue-500 text-blue-600 hover:bg-blue-50 font-medium text-lg py-6 transition-all duration-300"
              onClick={scrollToVideo}
            >
              Ver nuestro pitch
              <Play className="h-4 w-4" />
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

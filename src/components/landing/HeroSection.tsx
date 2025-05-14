
import { Button } from '@/components/ui/button';
import { ArrowDown, Play } from 'lucide-react';
import { AspectRatio } from '@/components/ui/aspect-ratio';

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
      
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-5 items-center gap-8 px-4 z-10">
        <div className="lg:col-span-3 space-y-6 animate-fade-in">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 leading-tight">
            Transformamos la inclusión educativa con tecnología
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 max-w-2xl">
            PIAR123 es la plataforma inteligente que facilita la creación de Planes Individuales de Ajustes Razonables (PIAR) para docentes, instituciones y familias.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <Button 
              size="lg"
              className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-medium text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg flex items-center gap-2"
              onClick={scrollToLogin}
            >
              Ingresar al sistema
              <ArrowDown className="h-4 w-4" />
            </Button>
            <Button 
              size="lg"
              variant="outline" 
              className="border-blue-500 text-blue-600 hover:bg-blue-50 font-medium text-lg transition-all duration-300 transform hover:scale-105 flex items-center gap-2"
              onClick={scrollToVideo}
            >
              Ver nuestro pitch
              <Play className="h-4 w-4" />
            </Button>
          </div>
        </div>
        
        <div className="lg:col-span-2 animate-scale-in">
          <div className="bg-gradient-to-br from-purple-100 to-blue-100 p-6 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:scale-[1.02]">
            <AspectRatio ratio={4/3} className="bg-white rounded-lg overflow-hidden">
              <img 
                src="/lovable-uploads/00c8b7b7-970c-4d79-98ef-20808abb6313.png" 
                alt="Aplicación PIAR123 en acción"
                className="w-full h-full object-cover"
              />
            </AspectRatio>
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


import { useRef } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowDown, Play } from 'lucide-react';

interface HeroSectionProps {
  scrollToLogin: () => void;
  scrollToProblem: () => void;
  scrollToVideo: () => void;
}

const HeroSection = ({ scrollToLogin, scrollToProblem, scrollToVideo }: HeroSectionProps) => {
  return (
    <section className="min-h-[92vh] flex flex-col justify-center relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-20 w-64 h-64 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-72 h-72 bg-green-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse delay-700"></div>
        <div className="absolute top-1/3 right-1/3 w-60 h-60 bg-yellow-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse delay-1000"></div>
      </div>
      
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-12 py-16 px-4">
        <div className="flex-1 space-y-6 animate-fade-in z-10">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 leading-tight">
            Transformamos la inclusión educativa con tecnología
          </h1>
          <p className="text-xl md:text-2xl text-gray-600">
            PIAR123 es la plataforma inteligente que facilita la creación de Planes Individuales de Ajustes Razonables (PIAR) para docentes, instituciones y familias.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button 
              size="lg"
              className="bg-piar-blue hover:bg-blue-700 text-white font-medium text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg flex items-center gap-2"
              onClick={scrollToLogin}
            >
              Ingresar al sistema
              <ArrowDown className="h-4 w-4" />
            </Button>
            <Button 
              size="lg"
              variant="outline" 
              className="border-piar-blue text-piar-blue hover:bg-piar-blue/10 font-medium text-lg transition-all duration-300 transform hover:scale-105 flex items-center gap-2"
              onClick={scrollToVideo}
            >
              Ver nuestro pitch
              <Play className="h-4 w-4" />
            </Button>
          </div>
        </div>
        <div className="flex-1 p-4 animate-scale-in">
          <div className="bg-gradient-to-br from-piar-blue/20 to-piar-green/20 p-6 rounded-2xl shadow-xl transform hover:scale-[1.02] transition-all duration-500 overflow-hidden">
            <img 
              src="/placeholder.svg" 
              alt="Estudiantes utilizando PIAR123" 
              className="w-full h-auto rounded-lg shadow-lg hover:shadow-xl transition-all duration-300" 
            />
            <div className="mt-4 p-4 bg-white/80 backdrop-blur-sm rounded-lg">
              <p className="text-lg font-medium text-piar-blue">
                "PIAR123 transformó nuestra manera de crear planes de inclusión"
              </p>
              <p className="text-sm text-gray-600 mt-2">
                - María González, Docente
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce z-10">
        <Button 
          variant="ghost" 
          size="icon" 
          className="rounded-full bg-white shadow-md hover:shadow-lg h-12 w-12"
          onClick={scrollToProblem}
        >
          <ArrowDown className="text-piar-blue h-5 w-5" />
        </Button>
      </div>
    </section>
  );
};

export default HeroSection;

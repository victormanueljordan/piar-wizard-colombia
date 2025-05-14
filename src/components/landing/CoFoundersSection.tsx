
import { Separator } from '@/components/ui/separator';
import { ArrowRight } from 'lucide-react';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';

const CoFoundersSection = () => {
  return (
    <section className="py-16 px-4 bg-white">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 text-gray-800">
          Nuestros Cofundadores
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Martha Gómez */}
          <div className="bg-gradient-to-br from-blue-50 to-green-50 rounded-xl shadow-md p-6 flex flex-col items-center transform hover:scale-[1.02] hover:shadow-lg transition-all duration-300">
            <Avatar className="h-28 w-28 border-4 border-white shadow-md mb-4">
              <AvatarImage src="/placeholder.svg" alt="Martha Gómez" />
              <AvatarFallback className="bg-piar-blue text-white text-xl">MG</AvatarFallback>
            </Avatar>
            <h3 className="text-xl font-bold text-gray-800 mb-1">Martha Gómez</h3>
            <p className="text-gray-500 mb-3">Co-fundadora</p>
            <p className="text-center text-gray-600 mb-4">
              Liderando la transformación educativa con experiencia en inclusión y tecnologías para el aprendizaje.
            </p>
            <a 
              href="https://www.linkedin.com/in/martha-liliana-g%C3%B3mez-gaviria-1b33a389" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-piar-blue hover:underline"
            >
              <span>Ver perfil en LinkedIn</span>
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
          
          {/* Victor Jordan */}
          <div className="bg-gradient-to-br from-blue-50 to-green-50 rounded-xl shadow-md p-6 flex flex-col items-center transform hover:scale-[1.02] hover:shadow-lg transition-all duration-300">
            <Avatar className="h-28 w-28 border-4 border-white shadow-md mb-4">
              <AvatarImage src="/placeholder.svg" alt="Victor Jordan" />
              <AvatarFallback className="bg-piar-green text-white text-xl">VJ</AvatarFallback>
            </Avatar>
            <h3 className="text-xl font-bold text-gray-800 mb-1">Victor Jordan</h3>
            <p className="text-gray-500 mb-3">Co-fundador</p>
            <p className="text-center text-gray-600 mb-4">
              Innovador en tecnología educativa con enfoque en soluciones inclusivas para cada estudiante.
            </p>
            <a 
              href="https://www.linkedin.com/in/victor-manuel-jordan-beghelli" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-piar-green hover:underline"
            >
              <span>Ver perfil en LinkedIn</span>
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CoFoundersSection;

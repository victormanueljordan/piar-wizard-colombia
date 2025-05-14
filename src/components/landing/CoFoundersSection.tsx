
import { Separator } from '@/components/ui/separator';
import { ArrowRight } from 'lucide-react';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';

const CoFoundersSection = () => {
  return (
    <section className="py-16 px-4 bg-white">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800 bg-clip-text text-transparent bg-gradient-to-r from-piar-blue via-purple-500 to-piar-green animate-pulse">
          Nuestros Cofundadores
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl mx-auto">
          {/* Martha Gómez */}
          <div className="bg-gradient-to-br from-blue-50 to-green-50 rounded-xl shadow-md p-8 flex flex-col items-center transform hover:scale-[1.03] hover:shadow-lg transition-all duration-300 opacity-0 animate-fade-in">
            <Avatar className="h-32 w-32 border-4 border-white shadow-lg mb-6">
              <AvatarImage src="/placeholder.svg" alt="Martha Gómez" />
              <AvatarFallback className="bg-piar-blue text-white text-2xl">MG</AvatarFallback>
            </Avatar>
            <h3 className="text-2xl font-bold text-gray-800 mb-1 text-center">Martha Liliana Gómez Gaviria</h3>
            <p className="text-piar-blue font-medium mb-4 text-center">Cofundadora</p>
            <p className="text-center text-gray-600 mb-6">
              Licenciada en Ciencias Naturales con amplia experiencia docente, comprometida con la inclusión y la innovación educativa.
            </p>
            <a 
              href="https://www.linkedin.com/in/martha-liliana-g%C3%B3mez-gaviria-1b33a389" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-piar-blue hover:underline transform hover:translate-x-1 transition-all duration-300"
            >
              <span>Ver perfil en LinkedIn</span>
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
          
          {/* Victor Jordan */}
          <div className="bg-gradient-to-br from-blue-50 to-green-50 rounded-xl shadow-md p-8 flex flex-col items-center transform hover:scale-[1.03] hover:shadow-lg transition-all duration-300 opacity-0 animate-fade-in" style={{ animationDelay: "200ms", animationFillMode: "forwards" }}>
            <Avatar className="h-32 w-32 border-4 border-white shadow-lg mb-6">
              <AvatarImage src="/placeholder.svg" alt="Victor Jordan" />
              <AvatarFallback className="bg-piar-green text-white text-2xl">VJ</AvatarFallback>
            </Avatar>
            <h3 className="text-2xl font-bold text-gray-800 mb-1 text-center">Víctor Manuel Jordán Beghelli</h3>
            <p className="text-piar-green font-medium mb-4 text-center">Cofundador y líder tecnológico</p>
            <p className="text-center text-gray-600 mb-6">
              Ingeniero experto en soluciones de información para la industria, con enfoque en inteligencia artificial y automatización educativa.
            </p>
            <a 
              href="https://www.linkedin.com/in/victor-manuel-jordan-beghelli" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-piar-green hover:underline transform hover:translate-x-1 transition-all duration-300"
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

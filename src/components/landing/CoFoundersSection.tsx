
import { Separator } from '@/components/ui/separator';
import { ArrowRight } from 'lucide-react';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';

const CoFoundersSection = () => {
  return (
    <section className="py-16 px-4 bg-gradient-to-br from-white to-blue-50 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-64 h-64 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
        <div className="absolute bottom-10 right-20 w-72 h-72 bg-green-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
      </div>
      
      <div className="container mx-auto relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-piar-blue via-purple-500 to-piar-green">
          Nuestros Cofundadores
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl mx-auto">
          {/* Martha Gómez */}
          <div className="bg-white bg-opacity-70 backdrop-blur-sm rounded-xl shadow-lg p-8 flex flex-col items-center transform hover:shadow-xl transition-shadow duration-300 border border-blue-100">
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-400 to-piar-green rounded-full opacity-75 blur-sm"></div>
              <Avatar className="h-32 w-32 border-4 border-white shadow-lg mb-6 relative z-10">
                <AvatarImage src="/lovable-uploads/479f3d34-d04f-4ed0-a5f9-a28acb545208.png" alt="Martha Gómez" />
                <AvatarFallback className="bg-piar-blue text-white text-2xl">MG</AvatarFallback>
              </Avatar>
            </div>
            <h3 className="text-2xl font-bold text-gray-800 mb-1">Martha Liliana Gómez Gaviria</h3>
            <p className="text-piar-blue font-medium mb-4 text-center">Cofundadora</p>
            <p className="text-center text-gray-600 mb-6">
              Licenciada en Ciencias Naturales con amplia experiencia docente, comprometida con la inclusión y la innovación educativa.
            </p>
            <a 
              href="https://www.linkedin.com/in/martha-liliana-g%C3%B3mez-gaviria-1b33a389" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-piar-blue hover:underline group transition-all duration-300"
            >
              <span>Ver perfil en LinkedIn</span>
              <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
          
          {/* Victor Jordan */}
          <div className="bg-white bg-opacity-70 backdrop-blur-sm rounded-xl shadow-lg p-8 flex flex-col items-center transform hover:shadow-xl transition-shadow duration-300 border border-green-100">
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-piar-blue to-piar-green rounded-full opacity-75 blur-sm"></div>
              <Avatar className="h-32 w-32 border-4 border-white shadow-lg mb-6 relative z-10">
                <AvatarImage src="/lovable-uploads/0387a12f-c093-4e6a-9e2b-18defa8eeb90.png" alt="Victor Jordan" />
                <AvatarFallback className="bg-piar-green text-white text-2xl">VJ</AvatarFallback>
              </Avatar>
            </div>
            <h3 className="text-2xl font-bold text-gray-800 mb-1">Víctor Manuel Jordán Beghelli</h3>
            <p className="text-piar-green font-medium mb-4 text-center">Cofundador y líder tecnológico</p>
            <p className="text-center text-gray-600 mb-6">
              Ingeniero experto en soluciones de información para la industria, con enfoque en inteligencia artificial y automatización educativa.
            </p>
            <a 
              href="https://www.linkedin.com/in/victor-manuel-jordan-beghelli" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-piar-green hover:underline group transition-all duration-300"
            >
              <span>Ver perfil en LinkedIn</span>
              <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CoFoundersSection;

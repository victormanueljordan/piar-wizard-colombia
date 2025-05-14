
import { Check } from 'lucide-react';

const ProblemSection = () => {
  return (
    <section className="py-20 px-4 bg-white relative">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-blue-50 to-transparent"></div>
      <div className="absolute bottom-0 right-0 w-1/3 h-1/3 bg-gradient-to-br from-piar-yellow/5 to-piar-yellow/20 rounded-full filter blur-3xl animate-pulse"></div>
      
      <div className="container mx-auto relative z-10">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-16 animate-fade-in">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-piar-blue to-piar-green animate-pulse">
            Una solución al alcance de los docentes
          </span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              text: "Docentes sin acompañamiento para construir los PIAR",
              image: "/placeholder.svg",
              alt: "Docente trabajando solo",
              delay: 0
            },
            {
              text: "Exceso de carga administrativa y poco tiempo",
              image: "/placeholder.svg",
              alt: "Docente con muchos papeles",
              delay: 200
            },
            {
              text: "Dificultad para cumplir con el Decreto 1421 de 2017",
              image: "/placeholder.svg",
              alt: "Documento de regulación",
              delay: 400
            }
          ].map((item, index) => (
            <div 
              key={index} 
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-500 transform hover:scale-105 opacity-0 animate-fade-in"
              style={{ animationDelay: `${item.delay}ms`, animationFillMode: 'forwards' }}
            >
              <div className="bg-piar-blue/10 p-4 rounded-lg mb-5 flex justify-center transform hover:rotate-3 transition-all duration-300">
                <img src={item.image} alt={item.alt} className="h-32 w-auto object-cover rounded" />
              </div>
              <div className="flex items-start gap-3">
                <div className="bg-gradient-to-br from-piar-blue to-piar-green p-2 rounded-full flex-shrink-0">
                  <Check className="h-5 w-5 text-white" />
                </div>
                <p className="text-gray-700 text-lg">{item.text}</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 bg-gradient-to-r from-piar-blue/20 to-piar-green/20 p-6 rounded-xl shadow-md max-w-2xl mx-auto transform hover:scale-[1.02] hover:shadow-lg transition-all duration-500 opacity-0 animate-fade-in" style={{ animationDelay: "600ms", animationFillMode: "forwards" }}>
          <p className="text-xl md:text-2xl font-medium text-gray-700 italic text-center">
            "Con PIAR123, cada estudiante recibe lo que necesita."
          </p>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;

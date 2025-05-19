
import React from 'react';
import { Check } from 'lucide-react';
import ScrollReveal from '@/components/ScrollReveal';

const ProblemSection = () => {
  const solutions = [
    {
      text: "Docentes con acompañamiento continuo para construir los PIAR",
      image: "/lovable-uploads/solution-1.svg",
      alt: "Docente trabajando con apoyo",
      delay: 0
    },
    {
      text: "Optimización de tiempo y reducción de carga administrativa",
      image: "/lovable-uploads/solution-2.svg",
      alt: "Docente con tiempo óptimo",
      delay: 200
    },
    {
      text: "Facilidad para cumplir con el Decreto 1421 de 2017",
      image: "/lovable-uploads/solution-3.svg",
      alt: "Documento de regulación simplificado",
      delay: 400
    }
  ];
  
  return (
    <section className="section bg-white" id="problemas">
      {/* Light beam effect */}
      <div className="absolute top-0 -left-40 h-full w-1/3 bg-gradient-to-r from-blue-50 to-transparent transform rotate-12 -z-10"></div>
      <div className="absolute top-0 -right-40 h-full w-1/3 bg-gradient-to-l from-green-50 to-transparent transform -rotate-12 -z-10"></div>
      
      <div className="container mx-auto relative z-10">
        <ScrollReveal>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-6 font-heading">
            <span className="gradient-text">
              Una solución al alcance de los docentes
            </span>
          </h2>
          <p className="text-xl text-gray-600 text-center mb-16 max-w-3xl mx-auto">
            Transforma la manera en que creas e implementas los Planes Individuales de Ajustes Razonables con nuestra plataforma intuitiva y eficiente.
          </p>
        </ScrollReveal>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {solutions.map((item, index) => (
            <ScrollReveal key={index} delay={item.delay}>
              <div className="hover-card p-6 h-full flex flex-col">
                <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-xl mb-6 flex justify-center items-center">
                  <img src={item.image} alt={item.alt} className="h-40 w-auto object-contain" />
                </div>
                <div className="flex items-start gap-3">
                  <div className="bg-gradient-to-br from-piar-blue to-piar-green p-2 rounded-full flex-shrink-0 mt-1">
                    <Check className="h-5 w-5 text-white" />
                  </div>
                  <p className="text-gray-700 text-lg">{item.text}</p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
        
        <ScrollReveal delay={300}>
          <div className="mt-16 bg-gradient-to-r from-piar-blue/10 to-piar-green/10 p-8 rounded-xl shadow-md max-w-2xl mx-auto transform hover:scale-[1.01] hover:shadow-lg transition-all duration-500">
            <p className="text-xl md:text-2xl font-medium text-gray-700 italic text-center">
              "Con PIAR123, cada estudiante recibe lo que necesita, y cada docente recupera su tiempo."
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default ProblemSection;

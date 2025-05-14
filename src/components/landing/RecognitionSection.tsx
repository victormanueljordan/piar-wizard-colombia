
import { Award } from 'lucide-react';

const RecognitionSection = () => {
  return (
    <section className="py-16 px-4 bg-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-gradient-to-br from-piar-yellow/10 to-piar-blue/10 rounded-full filter blur-3xl"></div>
      
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row items-center gap-10">
          <div className="flex-1 order-2 md:order-1">
            <h2 className="text-3xl md:text-4xl font-bold mb-5 text-gray-800">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-piar-yellow to-piar-blue">
                Ganador Hackathon LATAM de IA
              </span>
            </h2>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              PIAR123 fue el proyecto ganador entre más de 800 participantes en la Hackathon de Inteligencia Artificial realizada en Latinoamérica. Nuestro enfoque innovador en la educación inclusiva utilizando tecnología de vanguardia nos destacó entre los participantes.
            </p>
            <div className="bg-gradient-to-r from-piar-yellow/20 to-piar-blue/20 p-5 rounded-xl shadow-md border-l-4 border-piar-yellow transform hover:scale-[1.01] hover:shadow-lg transition-all duration-300">
              <p className="italic text-gray-700 leading-relaxed">
                "PIAR123 representa una innovación educativa significativa que tiene el potencial de transformar la forma en que se implementan los planes de inclusión en toda Latinoamérica."
              </p>
              <p className="mt-3 font-medium text-right text-gray-800">- Jurado de la Hackathon LATAM de IA</p>
            </div>
          </div>
          <div className="flex-1 flex justify-center items-center order-1 md:order-2">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-piar-yellow/30 to-piar-blue/30 rounded-full blur-3xl -z-10"></div>
              <div className="relative z-10 transform hover:scale-105 transition-all duration-500">
                <Award className="h-40 w-40 text-piar-yellow drop-shadow-[0_0_15px_rgba(243,199,28,0.6)] animate-pulse" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RecognitionSection;

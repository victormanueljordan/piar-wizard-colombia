
import React from 'react';
import { Award, User } from 'lucide-react';
import ScrollReveal from '@/components/ScrollReveal';

const RecognitionSection = () => {
  return (
    <section className="section bg-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-gradient-to-br from-piar-yellow/10 to-piar-blue/10 rounded-full filter blur-3xl"></div>
      
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-10">
          <ScrollReveal className="flex-1 order-2 md:order-1">
            <div className="bg-gradient-to-br from-yellow-50 to-yellow-100 p-1 rounded-lg mb-6 hidden md:block">
              {/* Video about the hackathon achievement */}
              <div className="aspect-video rounded-lg overflow-hidden">
                <iframe
                  src="https://www.linkedin.com/embed/feed/update/urn:li:activity:7328400341597655040"
                  height="415"
                  width="100%"
                  frameBorder="0"
                  allowFullScreen=""
                  title="Hackathon Achievement Video"
                  className="w-full h-full"
                ></iframe>
              </div>
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold mb-5 text-gray-800 font-heading">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-piar-yellow to-piar-blue">
                Ganador Hackathon LATAM de IA
              </span>
            </h2>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              PIAR123 fue reconocido como prototipo ganador en la Hackathon de Inteligencia Artificial realizada en Latinoamérica por su enfoque disruptivo en inclusión educativa. Nuestro proyecto destacó entre más de 800 participantes por su uso innovador de tecnología.
            </p>
          </ScrollReveal>
          
          <ScrollReveal className="flex-1 flex justify-center items-center order-1 md:order-2 delay-300">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-piar-yellow/30 to-piar-blue/30 rounded-full blur-3xl -z-10"></div>
              <div className="relative z-10 flex items-center justify-center">
                <div className="absolute inset-0 rounded-full bg-white/30 blur-xl"></div>
                <Award className="h-40 w-40 text-piar-yellow drop-shadow-[0_0_15px_rgba(243,199,28,0.6)] relative z-10" />
              </div>
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 h-60 rounded-full border-4 border-dashed border-yellow-200 animate-spin-slow"></div>
            </div>
          </ScrollReveal>
        </div>
      
        {/* Lo que dicen los expertos */}
        <ScrollReveal delay={400}>
          <div className="mt-20">
            <h3 className="text-2xl md:text-3xl font-bold text-center mb-10 font-heading">Lo que dicen los expertos</h3>
            
            <div className="bg-gradient-to-r from-piar-blue/10 to-piar-yellow/10 p-6 md:p-8 rounded-xl shadow-md border-l-4 border-piar-yellow hover:shadow-lg transition-all duration-300 relative overflow-hidden max-w-3xl mx-auto">
              <div className="absolute -right-10 -bottom-10 w-40 h-40 bg-piar-yellow/10 rounded-full blur-xl"></div>
              
              <p className="italic text-gray-700 leading-relaxed relative z-10 text-lg">
                "PIAR123 es una herramienta que pueden usar los profesores que tienen mucha carga, para llegar de una mejor manera a los estudiantes que tienen necesidades especiales."
              </p>
              
              <div className="flex items-center mt-6 relative z-10">
                <div className="bg-white/80 p-2 rounded-full mr-4 shadow overflow-hidden">
                  <img 
                    src="https://media.licdn.com/dms/image/v2/D4E03AQE_2fo2s6sgzw/profile-displayphoto-shrink_200_200/B4EZRQpZOzHsAg-/0/1736519816768?e=1753315200&v=beta&t=t09anQBg0es-W_RH7G2tJqL8qPJ-jQRjH3MLGiPd0Zo" 
                    alt="Tomás Calle" 
                    className="h-10 w-10 object-cover rounded-full"
                  />
                </div>
                <div>
                  <p className="font-medium text-gray-800">Tomás Calle</p>
                  <p className="text-sm text-gray-600">Fundador de Croma y cofundador de Nilho</p>
                  <a 
                    href="https://www.linkedin.com/in/tomas-calle/" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-xs text-blue-600 hover:underline"
                  >
                    Ver perfil en LinkedIn
                  </a>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default RecognitionSection;

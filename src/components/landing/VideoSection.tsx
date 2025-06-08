
import React from 'react';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import ScrollReveal from '@/components/ScrollReveal';
import { Play } from 'lucide-react';

const VideoSection = () => {
  return (
    <section className="section bg-gray-900 text-white relative overflow-hidden" id="videos">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('/placeholder.svg')] bg-cover bg-center"></div>
      </div>
      
      {/* Animated light beams */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -left-20 top-1/2 w-40 h-[200%] bg-blue-500/10 rotate-45 blur-xl"></div>
        <div className="absolute -right-20 top-1/4 w-40 h-[200%] bg-purple-500/10 -rotate-45 blur-xl"></div>
      </div>
      
      <div className="container mx-auto relative z-10 px-4">
        <ScrollReveal>
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-6 font-heading bg-clip-text text-transparent bg-gradient-to-r from-blue-300 to-purple-300">
            Conoce nuestra historia
          </h2>
          <div className="h-1 w-24 mx-auto bg-gradient-to-r from-blue-300 to-purple-300 mb-12"></div>
        </ScrollReveal>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Pitch Video */}
          <ScrollReveal>
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl shadow-2xl border border-white/10 hover:shadow-blue-900/20 hover:shadow-2xl transition-all duration-500 group">
              <div className="flex items-center mb-4">
                <div className="bg-blue-500/20 p-2 rounded-lg mr-3">
                  <Play className="text-blue-300 h-5 w-5" />
                </div>
                <h3 className="text-xl font-semibold">Nuestro Pitch</h3>
              </div>
              
              <div className="aspect-video rounded-lg overflow-hidden border border-white/20 group-hover:border-blue-300/30 transition-colors duration-300 relative">
                <iframe
                  src="https://www.youtube.com/embed/ZWpj-XXPno8"
                  title="PIAR123 Pitch Video"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full"
                ></iframe>
              </div>
              <p className="mt-4 text-gray-300 text-sm">
                Descubre la visión detrás de PIAR123 y cómo estamos transformando la educación inclusiva para docentes y estudiantes a través de la tecnología.
              </p>
            </div>
          </ScrollReveal>
          
          {/* Award Video */}
          <ScrollReveal delay={300}>
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl shadow-2xl border border-white/10 hover:shadow-purple-900/20 hover:shadow-2xl transition-all duration-500 group">
              <div className="flex items-center mb-4">
                <div className="bg-purple-500/20 p-2 rounded-lg mr-3">
                  <Play className="text-purple-300 h-5 w-5" />
                </div>
                <h3 className="text-xl font-semibold">Premio Hackathon</h3>
              </div>
              
              <div className="aspect-video rounded-lg overflow-hidden border border-white/20 group-hover:border-purple-300/30 transition-colors duration-300">
                <iframe
                  src="https://www.youtube.com/embed/wQWlMbVKNDc"
                  title="PIAR123 Award Ceremony"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full"
                ></iframe>
              </div>
              <p className="mt-4 text-gray-300 text-sm">
                PIAR123 fue galardonado en la Hackathon LATAM de IA entre más de 800 participantes por su innovación en el sector educativo inclusivo.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;

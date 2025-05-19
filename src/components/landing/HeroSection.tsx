import React, { useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowDown, Play } from 'lucide-react';
import ScrollReveal from '@/components/ScrollReveal';
interface HeroSectionProps {
  scrollToLogin: () => void;
  scrollToProblem: () => void;
  scrollToVideo: () => void;
}
const HeroSection = ({
  scrollToLogin,
  scrollToProblem,
  scrollToVideo
}: HeroSectionProps) => {
  return <section className="relative min-h-[90vh] py-12 flex items-center overflow-hidden">
      {/* Modern abstract shapes in background */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-20 left-20 w-80 h-80 bg-blue-300 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-float"></div>
        <div className="absolute bottom-10 right-10 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl opacity-15 animate-float delay-700"></div>
        <div className="absolute top-1/3 right-1/4 w-60 h-60 bg-green-300 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-float delay-500"></div>
        
        {/* Add subtle pattern overlay */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCI+CjxyZWN0IHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgZmlsbD0iI2ZmZiI+PC9yZWN0Pgo8cGF0aCBkPSJNMzYgNDRjMCAxIDEgMiAyIDJoMmMxIDAgMi0xIDItMnYtMmMwLTEtMS0yLTItMmgtMmMtMSAwLTIgMS0yIDJ2MnptMC0yMGMwIDEgMSAyIDIgMmgyYzEgMCAyLTEgMi0ydi0yYzAtMS0xLTItMi0yaC0yYy0xIDAtMiAxLTIgMnYyem0tMTAgMGMwIDEgMSAyIDIgMmgyYzEgMCAyLTEgMi0ydi0yYzAtMS0xLTItMi0yaC0yYy0xIDAtMiAxLTIgMnYyem0tMTAgMjBjMCAxIDEgMiAyIDJoMmMxIDAgMi0xIDItMnYtMmMwLTEtMS0yLTItMmgtMmMtMSAwLTIgMS0yIDJ2MnptMC0xMGMwIDEgMSAyIDIgMmgyYzEgMCAyLTEgMi0ydi0yYzAtMS0xLTItMi0yaC0yYy0xIDAtMiAxLTIgMnYyem0wLTEwYzAgMSAxIDIgMiAyaDJjMSAwIDItMSAyLTJ2LTJjMC0xLTEtMi0yLTJoLTJjLTEgMC0yIDEtMiAydjJ6bS0xMCAxMGMwIDEgMSAyIDIgMmgyYzEgMCAyLTEgMi0ydi0yYzAtMS0xLTItMi0yaC0yYy0xIDAtMiAxLTIgMnYyem0wLTEwYzAgMSAxIDIgMiAyaDJjMSAwIDItMSAyLTJ2LTJjMC0xLTEtMi0yLTJoLTJjLTEgMC0yIDEtMiAydjJ6bTMwIDBjMCAxIDEgMiAyIDJoMmMxIDAgMi0xIDItMnYtMmMwLTEtMS0yLTItMmgtMmMtMSAwLTIgMS0yIDJ2MnptLTEwIDEwYzAgMSAxIDIgMiAyaDJjMSAwIDItMSAyLTJ2LTJjMC0xLTEtMi0yLTJoLTJjLTEgMC0yIDEtMiAydjJ6Ii8+Cjwvc3ZnPg==')] opacity-5"></div>
      </div>
      
      <div className="container mx-auto px-4 z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <ScrollReveal>
              <span className="inline-block px-4 py-2 rounded-full bg-blue-100 text-blue-800 text-sm font-medium mb-6">
                Ganador Hackathon LATAM de IA
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 leading-tight mb-6 font-heading">
                <span className="gradient-text">
                  Transformamos la inclusión educativa con tecnología
                </span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 max-w-lg">
                PIAR123 es la plataforma inteligente que facilita la creación de Planes Individuales de Ajustes Razonables (PIAR) para docentes, instituciones y familias.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="relative bg-gradient-to-r from-piar-blue to-blue-700 text-white font-medium text-lg py-6 px-8 transition-all duration-300 hover:shadow-xl rounded-md group" onClick={scrollToLogin}>
                  <span className="relative z-10">Ingresar al sistema</span>
                  <div className="absolute inset-0 h-full w-full bg-gradient-to-r from-blue-700 to-piar-blue opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-md"></div>
                </Button>
                <Button size="lg" variant="outline" className="border-2 border-blue-500 text-blue-600 hover:bg-blue-50 font-medium text-lg py-6 transition-all duration-300 hover:shadow-lg group rounded-md" onClick={scrollToVideo}>
                  <span>Ver nuestro pitch</span>
                  <Play className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            </ScrollReveal>
          </div>
          
          <div className="order-1 lg:order-2 flex justify-center">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-piar-blue/20 to-piar-green/20 rounded-full blur-3xl"></div>
              <img alt="PIAR123 - Inclusión Educativa" className="relative z-10 max-w-md w-full h-auto animate-float" src="/lovable-uploads/a6989286-b41f-4a2f-ac2e-03c81642f1f7.jpg" />
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-10">
        <Button variant="ghost" size="icon" className="rounded-full bg-white/80 backdrop-blur-sm shadow-md hover:shadow-lg h-12 w-12 animate-scroll-down" onClick={scrollToProblem}>
          <ArrowDown className="text-blue-600 h-5 w-5" />
        </Button>
      </div>
    </section>;
};
export default HeroSection;
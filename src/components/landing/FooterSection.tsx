
import React from 'react';
import Logo from '@/components/Logo';
import { Phone, Mail, MapPin, Facebook, Instagram, Youtube } from 'lucide-react';
import ScrollReveal from '@/components/ScrollReveal';
import PartnersSection from './PartnersSection';

const FooterSection = () => {
  return <footer>
      <PartnersSection />
      
      <div className="py-16 px-4 bg-gray-900 text-gray-300">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center mb-12">
            <ScrollReveal>
              <Logo className="h-12 w-auto mb-6 md:mb-0" />
            </ScrollReveal>
            <div className="flex flex-col md:flex-row items-center gap-6">
              <ScrollReveal delay={100}>
                <div className="flex items-center gap-2">
                  <div className="bg-white/10 p-2 rounded-full">
                    <Phone size={18} className="text-white" />
                  </div>
                  <span className="text-sm md:text-base">+573186229344</span>
                </div>
              </ScrollReveal>
              <ScrollReveal delay={200}>
                <div className="flex items-center gap-2">
                  <div className="bg-white/10 p-2 rounded-full">
                    <Mail size={18} className="text-white" />
                  </div>
                  <span className="text-sm md:text-base">contacto@piar123.com</span>
                </div>
              </ScrollReveal>
            </div>
          </div>
          
          <div className="border-t border-gray-800 pt-8 pb-4">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <ScrollReveal>
                <div>
                  <h3 className="text-lg font-semibold mb-4 text-white">Acerca de PIAR123</h3>
                  <p className="text-sm text-gray-400 mb-4">
                    PIAR123 será una plataforma inteligente que facilitará la creación de Planes Individuales de Ajustes Razonables para docentes, instituciones y familias.
                  </p>
                  <div className="flex gap-4">
                    <a href="#" className="text-gray-400 hover:text-white transition-colors">
                      <Facebook size={20} />
                    </a>
                    <a href="#" className="text-gray-400 hover:text-white transition-colors">
                      <Instagram size={20} />
                    </a>
                    <a href="https://www.youtube.com/@PIAR123" className="text-gray-400 hover:text-white transition-colors">
                      <Youtube size={20} />
                    </a>
                  </div>
                </div>
              </ScrollReveal>
              
              <ScrollReveal delay={100}>
                <div>
                  <h3 className="text-lg font-semibold mb-4 text-white">Enlaces rápidos</h3>
                  <ul className="space-y-2 text-sm text-gray-400">
                    <li><a href="#" className="hover:text-white transition-colors">Inicio</a></li>
                    <li><a href="#problemas" className="hover:text-white transition-colors">Soluciones</a></li>
                    <li><a href="#videos" className="hover:text-white transition-colors">Videos</a></li>
                    <li><a href="#login" className="hover:text-white transition-colors">Iniciar sesión</a></li>
                  </ul>
                </div>
              </ScrollReveal>
              
              <ScrollReveal delay={200}>
                <div>
                  <h3 className="text-lg font-semibold mb-4 text-white">Legal</h3>
                  <ul className="space-y-2 text-sm text-gray-400">
                    <li><a href="#" className="hover:text-white transition-colors">Términos y condiciones</a></li>
                    <li><a href="#" className="hover:text-white transition-colors">Política de privacidad</a></li>
                    <li><a href="#" className="hover:text-white transition-colors">Soporte</a></li>
                  </ul>
                </div>
              </ScrollReveal>
              
              <ScrollReveal delay={300}>
                <div>
                  <h3 className="text-lg font-semibold mb-4 text-white">Ubicación</h3>
                  <div className="flex items-start gap-2 mb-3">
                    <MapPin size={18} className="text-gray-400 mt-1 flex-shrink-0" />
                    <span className="text-sm text-gray-400">
                      Cra 12 # 90-20, Oficina 204<br />
                      Bogotá, Colombia
                    </span>
                  </div>
                  <img src="/lovable-uploads/hackathon-badge.svg" alt="Hackathon LATAM Winner" className="h-16 w-auto mt-4" />
                </div>
              </ScrollReveal>
            </div>
          </div>
          
          <div className="text-center mt-8 pt-6 border-t border-gray-800">
            <p className="text-sm text-gray-500">© 2025 PIAR123. Todos los derechos reservados.</p>
          </div>
        </div>
      </div>
    </footer>;
};
export default FooterSection;

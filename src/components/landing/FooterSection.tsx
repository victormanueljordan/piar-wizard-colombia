
import Logo from '@/components/Logo';
import { Phone } from 'lucide-react';

const FooterSection = () => {
  return (
    <footer className="py-12 px-4 bg-gray-900 text-gray-300">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <Logo className="h-10 w-auto mb-6 md:mb-0" />
          <div className="flex flex-col md:flex-row items-center gap-6">
            <div className="flex items-center gap-2">
              <div className="bg-white/10 p-2 rounded-full">
                <Phone size={18} className="text-white"/>
              </div>
              <span className="text-sm md:text-base">+1 (215) 398 1983</span>
            </div>
            <div className="flex gap-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </a>
              <a href="https://www.youtube.com/@PIAR123" className="text-gray-400 hover:text-white transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
                  <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path>
                  <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon>
                </svg>
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 pb-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">Acerca de PIAR123</h3>
              <p className="text-sm text-gray-400">
                PIAR123 es una plataforma inteligente que facilita la creación de Planes Individuales de Ajustes Razonables para docentes, instituciones y familias.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Enlaces rápidos</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Inicio</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Características</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Testimonios</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contacto</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Legal</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Términos y condiciones</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Política de privacidad</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Soporte</a></li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="text-center mt-8">
          <p className="text-sm text-gray-500">© 2025 PIAR123. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;

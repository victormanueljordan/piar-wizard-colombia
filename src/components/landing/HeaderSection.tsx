
import React from 'react';
import Logo from '@/components/Logo';
import { MessageSquare, Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';

const HeaderSection = () => {
  return (
    <header className="sticky top-0 w-full bg-white/95 backdrop-blur-sm shadow-sm py-3 px-4 md:px-8 z-50">
      <div className="container mx-auto flex justify-between items-center">
        <Logo className="h-10 w-auto" />
        
        <div className="hidden md:flex items-center gap-8">
          <nav>
            <ul className="flex gap-6">
              <li><a href="#" className="text-gray-700 hover:text-piar-blue transition-colors font-medium">Inicio</a></li>
              <li><a href="#problemas" className="text-gray-700 hover:text-piar-blue transition-colors font-medium">Solución</a></li>
              <li><a href="#videos" className="text-gray-700 hover:text-piar-blue transition-colors font-medium">Videos</a></li>
              <li><a href="#login" className="text-gray-700 hover:text-piar-blue transition-colors font-medium">Ingresar</a></li>
            </ul>
          </nav>
          
          <a 
            href="https://wa.me/573186229344" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-green-500 text-white px-3 py-2 rounded-md hover:bg-green-600 transition-colors duration-300"
          >
            <MessageSquare size={18} className="text-white"/>
            <span className="font-medium">+57 318 622 9344</span>
          </a>
        </div>
        
        <div className="flex md:hidden items-center gap-3">
          <a 
            href="https://wa.me/573186229344" 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-green-500 p-2 rounded-full animate-pulse"
          >
            <MessageSquare size={18} className="text-white"/>
          </a>
          
          <Button variant="ghost" size="icon">
            <Menu className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </header>
  );
};

export default HeaderSection;

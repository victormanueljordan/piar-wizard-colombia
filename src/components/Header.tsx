
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import Logo from './Logo';
import { LogOut } from 'lucide-react';

interface HeaderProps {
  userName?: string;
}

const Header: React.FC<HeaderProps> = ({ userName }) => {
  return (
    <header className="w-full bg-white border-b border-gray-200 py-3 px-4 md:px-6 flex justify-between items-center shadow-sm sticky top-0 z-10">
      <div className="flex items-center">
        <Link to="/dashboard" className="flex items-center">
          <Logo />
        </Link>
        <span className="ml-2 px-3 py-1 bg-blue-100 text-piar-blue text-sm font-medium rounded-full">
          Docentes
        </span>
      </div>
      {userName && (
        <div className="flex items-center gap-2 md:gap-4">
          <div className="hidden sm:flex items-center gap-2">
            <div className="h-8 w-8 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center text-white font-medium text-sm">
              {userName.charAt(0).toUpperCase()}
            </div>
            <span className="text-sm text-gray-600">
              Bienvenido(a), <span className="font-semibold text-gray-800">{userName}</span>
            </span>
          </div>
          <Button 
            variant="ghost" 
            size="sm" 
            className="flex items-center gap-1 text-gray-700 hover:text-gray-900 hover:bg-gray-100 ml-2"
            asChild
          >
            <Link to="/logout">
              <LogOut className="w-4 h-4" />
              <span className="ml-1 hidden md:inline">Cerrar sesión</span>
            </Link>
          </Button>
        </div>
      )}
    </header>
  );
};

export default Header;

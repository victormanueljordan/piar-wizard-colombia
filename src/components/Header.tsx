
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
    <header className="w-full bg-white border-b border-gray-200 py-3 px-4 md:px-6 flex justify-between items-center shadow-sm">
      <div className="flex items-center">
        <Link to="/dashboard" className="flex items-center">
          <Logo />
        </Link>
        <span className="ml-2 px-3 py-1 bg-blue-100 text-piar-blue text-sm font-medium rounded-md">
          Docentes
        </span>
      </div>
      {userName && (
        <div className="flex items-center gap-2 md:gap-4">
          <div className="hidden sm:block">
            <span className="text-sm text-gray-600">
              Bienvenido(a), <span className="font-medium">{userName}</span>
            </span>
          </div>
          <Button 
            variant="ghost" 
            size="sm" 
            className="flex items-center gap-1 text-gray-700 hover:text-gray-900 hover:bg-gray-100"
            asChild
          >
            <Link to="/logout">
              <LogOut className="w-4 h-4" />
              <span className="ml-1">Cerrar sesión</span>
            </Link>
          </Button>
        </div>
      )}
    </header>
  );
};

export default Header;

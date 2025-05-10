
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import Logo from './Logo';

interface HeaderProps {
  userName?: string;
}

const Header: React.FC<HeaderProps> = ({ userName }) => {
  return (
    <header className="w-full bg-white border-b border-gray-200 py-2 px-4 flex justify-between items-center">
      <div className="flex items-center">
        <Link to="/dashboard">
          <Logo />
        </Link>
        <span className="ml-2 px-3 py-1 bg-blue-100 text-piar-blue text-sm font-medium rounded-md">
          Docentes
        </span>
      </div>
      {userName && (
        <div className="flex items-center gap-4">
          <span className="text-sm text-gray-600">
            Bienvenido(a), <span className="font-medium">{userName}</span>
          </span>
          <Button 
            variant="ghost" 
            size="sm" 
            asChild
          >
            <Link to="/logout">Cerrar sesión</Link>
          </Button>
        </div>
      )}
    </header>
  );
};

export default Header;

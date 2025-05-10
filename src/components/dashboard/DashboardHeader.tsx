
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { PlusCircle } from 'lucide-react';

interface DashboardHeaderProps {
  userName: string;
}

const DashboardHeader: React.FC<DashboardHeaderProps> = ({ userName }) => {
  return (
    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8">
      <div>
        <h1 className="text-2xl font-bold text-gray-800">Panel de Control</h1>
        <p className="text-gray-600">Bienvenido(a) {userName}, gestione los PIARs de sus estudiantes.</p>
      </div>
      <Button 
        className="mt-4 md:mt-0 bg-piar-blue hover:bg-blue-700 transition-all duration-300 hover:scale-[1.03] shadow-md hover:shadow-lg" 
        asChild
      >
        <Link to="/crear-piar">
          <PlusCircle className="h-4 w-4 mr-2 animate-enter" />
          Crear nuevo PIAR
        </Link>
      </Button>
    </div>
  );
};

export default DashboardHeader;

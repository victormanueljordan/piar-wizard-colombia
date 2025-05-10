
import React from 'react';
import { FileText, Clock, CheckCircle } from 'lucide-react';
import StatCard from './StatCard';

interface StatsSectionProps {
  stats: {
    estudiantes: number;
    borradores: number;
    completados: number;
  };
}

const StatsSection: React.FC<StatsSectionProps> = ({ stats }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
      <StatCard
        title="Estudiantes Registrados"
        value={stats.estudiantes}
        description="Estudiantes con PIAR asignado"
        icon={<FileText className="h-5 w-5 text-white" />}
        iconColor="bg-blue-500"
      />
      <StatCard
        title="PIARs en Borrador"
        value={stats.borradores}
        description="Pendientes por completar"
        icon={<Clock className="h-5 w-5 text-white" />}
        iconColor="bg-yellow-500"
      />
      <StatCard
        title="PIARs Completos"
        value={stats.completados}
        description="Finalizados y aprobados"
        icon={<CheckCircle className="h-5 w-5 text-white" />}
        iconColor="bg-green-500"
      />
    </div>
  );
};

export default StatsSection;

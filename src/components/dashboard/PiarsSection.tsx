
import React from 'react';
import PiarsTable from './PiarsTable';
import { Piar } from '@/hooks/usePiars';

interface PiarsSectionProps {
  piars: Piar[];
  loading: boolean;
}

const PiarsSection: React.FC<PiarsSectionProps> = ({ piars, loading }) => {
  return (
    <div className="bg-white/80 backdrop-blur-sm rounded-lg border p-6 mb-6 shadow-sm transition-all duration-300 hover:shadow-md">
      <h2 className="text-lg font-semibold mb-4">Estudiantes con PIAR</h2>
      <PiarsTable piars={piars} loading={loading} />
    </div>
  );
};

export default PiarsSection;


import React, { useState, useEffect } from 'react';
import Header from '@/components/Header';
import AnimatedBackground from '@/components/AnimatedBackground';
import LoadingOverlay from '@/components/LoadingOverlay';
import { usePiars } from '@/hooks/usePiars';
import { supabase } from '@/integrations/supabase/client';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { InfoIcon } from 'lucide-react';

// Import refactored components
import DashboardHeader from '@/components/dashboard/DashboardHeader';
import StatsSection from '@/components/dashboard/StatsSection';
import PiarsSection from '@/components/dashboard/PiarsSection';

// Sample data for demo purposes
const samplePiars = [
  { id: "1", fecha_creacion: "2025-05-15", estado: "completo", estudiante: { id: "e1", nombre_estudiante: "Carlos Andrés Gutiérrez" } },
  { id: "2", fecha_creacion: "2025-05-12", estado: "borrador", estudiante: { id: "e2", nombre_estudiante: "María José Hernández" } },
  { id: "3", fecha_creacion: "2025-05-10", estado: "completo", estudiante: { id: "e3", nombre_estudiante: "Juan Diego Rodríguez" } },
  { id: "4", fecha_creacion: "2025-05-08", estado: "borrador", estudiante: { id: "e4", nombre_estudiante: "Valentina Torres" } },
  { id: "5", fecha_creacion: "2025-05-05", estado: "completo", estudiante: { id: "e5", nombre_estudiante: "Santiago Gómez Pérez" } },
  { id: "6", fecha_creacion: "2025-05-03", estado: "borrador", estudiante: { id: "e6", nombre_estudiante: "Luciana Ramírez" } },
  { id: "7", fecha_creacion: "2025-05-01", estado: "completo", estudiante: { id: "e7", nombre_estudiante: "Sebastián Morales" } },
  { id: "8", fecha_creacion: "2025-04-28", estado: "borrador", estudiante: { id: "e8", nombre_estudiante: "Isabella Martínez" } },
  { id: "9", fecha_creacion: "2025-04-25", estado: "completo", estudiante: { id: "e9", nombre_estudiante: "Mateo Jiménez" } },
  { id: "10", fecha_creacion: "2025-04-22", estado: "borrador", estudiante: { id: "e10", nombre_estudiante: "Sofía Castro" } },
  { id: "11", fecha_creacion: "2025-04-20", estado: "completo", estudiante: { id: "e11", nombre_estudiante: "Samuel Vargas" } },
  { id: "12", fecha_creacion: "2025-04-18", estado: "borrador", estudiante: { id: "e12", nombre_estudiante: "Valeria Ortiz" } },
  { id: "13", fecha_creacion: "2025-04-15", estado: "completo", estudiante: { id: "e13", nombre_estudiante: "Emiliano Díaz" } },
  { id: "14", fecha_creacion: "2025-04-12", estado: "borrador", estudiante: { id: "e14", nombre_estudiante: "Camila Ramos" } },
  { id: "15", fecha_creacion: "2025-04-10", estado: "completo", estudiante: { id: "e15", nombre_estudiante: "Benjamín López" } },
];

const sampleStats = {
  estudiantes: 15,
  borradores: 7,
  completados: 8
};

const Dashboard = () => {
  const [userName, setUserName] = useState('docente');
  const [useDemoData, setUseDemoData] = useState(true);
  const { loading: apiLoading, piars: apiPiars, stats: apiStats, refetch } = usePiars();

  // Determine whether to use real or demo data
  const piars = useDemoData ? samplePiars : apiPiars;
  const stats = useDemoData ? sampleStats : apiStats;
  const loading = useDemoData ? false : apiLoading;

  // Obtener el nombre del usuario al cargar el componente
  useEffect(() => {
    const getUserInfo = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      
      if (session?.user) {
        const email = session.user.email;
        const name = email ? email.split('@')[0] : 'docente';
        setUserName(name);
      }
    };
    
    getUserInfo();
  }, []);

  if (loading) {
    return <LoadingOverlay message="Cargando dashboard..." />;
  }

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col relative">
      <AnimatedBackground type="gradient" intensity="low" />
      <Header userName={userName} />
      
      <main className="flex-1 container max-w-screen-xl mx-auto px-4 py-6">
        <Alert className="mb-6 bg-blue-50 border-blue-200">
          <InfoIcon className="h-4 w-4 text-blue-500 mr-2" />
          <AlertDescription className="text-blue-700">
            <strong>Nota de demo:</strong> Los datos presentados en este panel son ficticios. 
            Esta aplicación es solo una demostración de las funcionalidades de la plataforma PIAR123 
            y no está conectada a una base de datos real. Los PIARs generados no deben utilizarse como 
            documentos oficiales en instituciones educativas.
          </AlertDescription>
        </Alert>
        
        <DashboardHeader userName={userName} />
        <StatsSection stats={stats} />
        <PiarsSection piars={piars} loading={loading} />
      </main>
    </div>
  );
};

export default Dashboard;

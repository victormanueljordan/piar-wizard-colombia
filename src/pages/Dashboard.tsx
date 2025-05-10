
import React, { useState, useEffect } from 'react';
import Header from '@/components/Header';
import AnimatedBackground from '@/components/AnimatedBackground';
import LoadingOverlay from '@/components/LoadingOverlay';
import { usePiars } from '@/hooks/usePiars';
import { supabase } from '@/integrations/supabase/client';

// Import refactored components
import DashboardHeader from '@/components/dashboard/DashboardHeader';
import StatsSection from '@/components/dashboard/StatsSection';
import PiarsSection from '@/components/dashboard/PiarsSection';

const Dashboard = () => {
  const [userName, setUserName] = useState('docente');
  const { loading, piars, stats, refetch } = usePiars();

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
        <DashboardHeader userName={userName} />
        <StatsSection stats={stats} />
        <PiarsSection piars={piars} loading={loading} />
      </main>
    </div>
  );
};

export default Dashboard;

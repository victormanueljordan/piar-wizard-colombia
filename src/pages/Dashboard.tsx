
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import Header from '@/components/Header';
import { toast } from 'sonner';
import { FileText, Clock, CheckCircle, PlusCircle, Eye, Edit } from 'lucide-react';
import AnimatedBackground from '@/components/AnimatedBackground';
import LoadingOverlay from '@/components/LoadingOverlay';
import { usePiars } from '@/hooks/usePiars';
import { supabase } from '@/integrations/supabase/client';

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

  const StatCard = ({ 
    title, 
    value, 
    description, 
    icon, 
    iconColor 
  }: { 
    title: string; 
    value: number; 
    description: string; 
    icon: React.ReactNode; 
    iconColor: string;
  }) => (
    <Card className="border hover:shadow-md transition-all duration-300 hover:translate-y-[-2px]">
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <CardTitle className="text-sm font-medium text-gray-700">{title}</CardTitle>
        <div className={`rounded-full p-2 ${iconColor}`}>{icon}</div>
      </CardHeader>
      <CardContent>
        <div className="text-3xl font-bold">{value}</div>
        <p className="text-xs text-gray-600 mt-1">{description}</p>
      </CardContent>
    </Card>
  );

  if (loading) {
    return <LoadingOverlay message="Cargando dashboard..." />;
  }

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col relative">
      <AnimatedBackground type="gradient" intensity="low" />
      <Header userName={userName} />
      
      <main className="flex-1 container max-w-screen-xl mx-auto px-4 py-6">
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
        
        <div className="bg-white/80 backdrop-blur-sm rounded-lg border p-6 mb-6 shadow-sm transition-all duration-300 hover:shadow-md">
          <h2 className="text-lg font-semibold mb-4">Estudiantes con PIAR</h2>
          {loading ? (
            <div className="flex items-center justify-center h-40">
              <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-piar-blue"></div>
              <span className="ml-3 text-gray-600">Cargando estudiantes...</span>
            </div>
          ) : piars.length > 0 ? (
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow className="bg-gray-50">
                    <TableHead>Nombre del Estudiante</TableHead>
                    <TableHead>Estado</TableHead>
                    <TableHead>Fecha de Creación</TableHead>
                    <TableHead className="text-right">Acciones</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {piars.map((piar) => (
                    <TableRow key={piar.id} className="hover:bg-gray-50 transition-colors duration-150">
                      <TableCell className="font-medium">
                        {piar.estudiante?.nombre_estudiante || "Sin información"}
                      </TableCell>
                      <TableCell>
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                          piar.estado === 'borrador' 
                            ? 'bg-yellow-100 text-yellow-800' 
                            : 'bg-green-100 text-green-800'
                        }`}>
                          {piar.estado === 'borrador' ? 'Borrador' : 'Completo'}
                        </span>
                      </TableCell>
                      <TableCell>{piar.fecha_creacion}</TableCell>
                      <TableCell className="text-right">
                        <div className="flex items-center justify-end gap-2">
                          <Button
                            variant="outline"
                            size="sm"
                            className="flex items-center gap-1 transition-all duration-200 hover:scale-[1.03]"
                            asChild
                          >
                            <Link to={`/piar/${piar.id}`}>
                              {piar.estado === 'borrador' ? (
                                <>
                                  <Edit className="h-3 w-3" />
                                  <span>Completar</span>
                                </>
                              ) : (
                                <>
                                  <Eye className="h-3 w-3" />
                                  <span>Visualizar</span>
                                </>
                              )}
                            </Link>
                          </Button>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          ) : (
            <div className="text-center py-8">
              <p className="text-gray-500 mb-4">No hay estudiantes con PIAR registrados.</p>
              <Button 
                asChild
                className="transition-all duration-300 hover:scale-[1.02]"
              >
                <Link to="/crear-piar">
                  <PlusCircle className="h-4 w-4 mr-2" />
                  Crear primer PIAR
                </Link>
              </Button>
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default Dashboard;

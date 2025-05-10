
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Header from '@/components/Header';
import { toast } from 'sonner';
import { FileText, Clock, CheckCircle, PlusCircle } from 'lucide-react';

const Dashboard = () => {
  const [loading, setLoading] = useState(true);
  const [userName, setUserName] = useState('docente');
  const [stats, setStats] = useState({
    estudiantes: 0,
    borradores: 0,
    completados: 0
  });

  useEffect(() => {
    // Simulating data load from API/Supabase
    const loadData = () => {
      setTimeout(() => {
        // This is placeholder data until Supabase is connected
        setStats({
          estudiantes: 0,
          borradores: 0,
          completados: 0
        });
        setLoading(false);
        toast.success("Iniciado sesión exitosamente");
      }, 1000);
    };
    
    loadData();
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
    <Card className="border">
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

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Header userName={userName} />
      
      <main className="flex-1 container max-w-screen-xl mx-auto px-4 py-6">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8">
          <div>
            <h1 className="text-2xl font-bold text-gray-800">Panel de Control</h1>
            <p className="text-gray-600">Bienvenido(a) docente, gestione los PIARs de sus estudiantes.</p>
          </div>
          <Button className="mt-4 md:mt-0 bg-piar-blue hover:bg-blue-700" asChild>
            <Link to="/crear-piar">
              <PlusCircle className="h-4 w-4 mr-2" />
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
        
        <div className="bg-white rounded-lg border p-6 mb-6">
          <h2 className="text-lg font-semibold mb-4">Estudiantes con PIAR</h2>
          {loading ? (
            <div className="flex items-center justify-center h-40">
              <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-piar-blue"></div>
              <span className="ml-3 text-gray-600">Cargando estudiantes...</span>
            </div>
          ) : stats.estudiantes > 0 ? (
            <table className="w-full text-sm">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-4 py-2 text-left text-gray-600">Nombre</th>
                  <th className="px-4 py-2 text-left text-gray-600">Documento</th>
                  <th className="px-4 py-2 text-left text-gray-600">Grado</th>
                  <th className="px-4 py-2 text-left text-gray-600">Estado</th>
                  <th className="px-4 py-2 text-right text-gray-600">Acciones</th>
                </tr>
              </thead>
              <tbody>
                {/* Table rows will be populated here when connected to Supabase */}
              </tbody>
            </table>
          ) : (
            <div className="text-center py-8">
              <p className="text-gray-500 mb-4">No hay estudiantes con PIAR registrados.</p>
              <Button asChild>
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

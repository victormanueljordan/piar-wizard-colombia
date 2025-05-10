
import { useState, useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { toast } from 'sonner';

export interface Piar {
  id: string;
  fecha_creacion: string;
  estado: string;
  estudiante?: {
    id: string;
    nombre_estudiante: string;
  };
}

export const usePiars = () => {
  const [loading, setLoading] = useState(true);
  const [piars, setPiars] = useState<Piar[]>([]);
  const [stats, setStats] = useState({
    estudiantes: 0,
    borradores: 0,
    completados: 0
  });

  const fetchPiars = async () => {
    try {
      setLoading(true);
      
      // Obtener la sesión actual para verificar que el usuario está autenticado
      const { data: sessionData } = await supabase.auth.getSession();
      if (!sessionData.session) {
        toast.error("No hay sesión activa. Por favor inicie sesión.");
        return;
      }

      // Consulta para obtener los PIARs del usuario actual con los datos de estudiantes relacionados
      const { data, error } = await supabase
        .from('piars')
        .select(`
          id,
          created_at,
          estado,
          estudiantes (
            id,
            nombre_estudiante
          )
        `)
        .eq('user_id', sessionData.session.user.id)
        .order('created_at', { ascending: false });

      if (error) {
        console.error("Error al obtener PIARs:", error);
        toast.error(`Error al cargar los PIARs: ${error.message}`);
        return;
      }

      // Transformar los datos al formato esperado por la UI
      const formattedData = data.map(item => {
        // Check the type of estudiantes to handle it correctly
        let estudianteData;
        
        if (item.estudiantes) {
          if (Array.isArray(item.estudiantes) && item.estudiantes.length > 0) {
            estudianteData = {
              id: item.estudiantes[0]?.id || '',
              nombre_estudiante: item.estudiantes[0]?.nombre_estudiante || 'Estudiante sin nombre'
            };
          } else if (typeof item.estudiantes === 'object') {
            estudianteData = {
              id: (item.estudiantes as any).id || '',
              nombre_estudiante: (item.estudiantes as any).nombre_estudiante || 'Estudiante sin nombre'
            };
          }
        }
        
        return {
          id: item.id,
          fecha_creacion: new Date(item.created_at).toISOString().split('T')[0],
          estado: item.estado || 'borrador',
          estudiante: estudianteData
        };
      });

      setPiars(formattedData);

      // Calcular estadísticas
      const estudiantes = formattedData.length;
      const borradores = formattedData.filter(p => p.estado === 'borrador').length;
      const completados = formattedData.filter(p => p.estado === 'completo').length;
      
      setStats({
        estudiantes,
        borradores,
        completados
      });
    } catch (error) {
      console.error("Error en fetchPiars:", error);
      toast.error("Error al cargar los datos del dashboard");
    } finally {
      setLoading(false);
    }
  };

  // Cargar los PIARs al montar el componente
  useEffect(() => {
    fetchPiars();
  }, []);

  return {
    loading,
    piars,
    stats,
    refetch: fetchPiars
  };
};

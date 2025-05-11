
import { toast } from 'sonner';
import { PiarFormData } from '@/types/piarFormTypes';
import { supabase } from "@/integrations/supabase/client";

export const fetchPiarById = async (
  id: string,
  setLoading: (value: boolean) => void,
  setFormData: (value: PiarFormData | ((prev: PiarFormData) => PiarFormData)) => void,
  setEstudianteId: (value: string) => void
) => {
  setLoading(true);
  try {
    // Get PIAR details
    const { data: piarData, error: piarError } = await supabase
      .from('piars')
      .select('*')
      .eq('id', id)
      .single();
    
    if (piarError) throw piarError;
    if (!piarData) throw new Error("PIAR no encontrado");
    
    // Get student details
    const { data: estudianteData, error: estudianteError } = await supabase
      .from('estudiantes')
      .select('*')
      .eq('piar_id', id)
      .single();
    
    if (estudianteError && estudianteError.code !== 'PGRST116') throw estudianteError;
    
    // Set estudiante ID if it exists
    if (estudianteData) {
      setEstudianteId(estudianteData.id);
    }
    
    // Get entorno salud
    const { data: saludData } = await supabase
      .from('entorno_salud')
      .select('*')
      .eq('estudiante_id', estudianteData?.id || '')
      .maybeSingle();
    
    // Get entorno hogar
    const { data: hogarData } = await supabase
      .from('entorno_hogar')
      .select('*')
      .eq('estudiante_id', estudianteData?.id || '')
      .maybeSingle();
    
    // Get entorno educativo
    const { data: educativoData } = await supabase
      .from('entorno_educativo')
      .select('*')
      .eq('estudiante_id', estudianteData?.id || '')
      .maybeSingle();
    
    // Get características y ajustes
    const { data: caracteristicasData } = await supabase
      .from('caracteristicas_ajustes')
      .select('*')
      .eq('piar_id', id)
      .maybeSingle();
    
    // Get participantes y compromisos
    const { data: participantesData } = await supabase
      .from('participantes_compromisos')
      .select('*')
      .eq('piar_id', id)
      .maybeSingle();
    
    // Get ajustes por trimestre
    const { data: ajustesTrimestre1 } = await supabase
      .from('ajustes_trimestre')
      .select('ajustes')
      .eq('piar_id', id)
      .eq('trimestre', 1)
      .maybeSingle();
    
    const { data: ajustesTrimestre2 } = await supabase
      .from('ajustes_trimestre')
      .select('ajustes')
      .eq('piar_id', id)
      .eq('trimestre', 2)
      .maybeSingle();
    
    const { data: ajustesTrimestre3 } = await supabase
      .from('ajustes_trimestre')
      .select('ajustes')
      .eq('piar_id', id)
      .eq('trimestre', 3)
      .maybeSingle();
    
    // Ensure ajustes are always arrays
    const ensureArray = (value: any): any[] => {
      if (Array.isArray(value)) {
        return value;
      } else if (value === null || value === undefined) {
        return [];
      } else {
        return [value];
      }
    };
    
    // Update form data with all fetched data
    setFormData({
      // Paso 1 - Encabezado
      fecha_diligenciamiento: piarData.fecha_diligenciamiento || new Date().toISOString().split('T')[0],
      lugar_diligenciamiento: piarData.lugar_diligenciamiento || '',
      nombre_persona_diligencia: piarData.nombre_persona_diligencia || '',
      rol_en_ie: piarData.rol_en_ie || '',
      institucion_educativa: piarData.institucion_educativa || '',
      sede: piarData.sede || '',
      jornada: piarData.jornada || '',
      
      // Paso 1 - Identificación del estudiante
      nombre_estudiante: estudianteData?.nombre_estudiante || '',
      documento_identificacion: estudianteData?.documento_identificacion || '',
      edad: estudianteData?.edad || '',
      grado: estudianteData?.grado || '',
      
      // Paso 1 - Información general del estudiante
      nombres_apellidos: estudianteData?.nombre_estudiante || '',
      lugar_nacimiento: estudianteData?.lugar_nacimiento || '',
      fecha_nacimiento: estudianteData?.fecha_nacimiento || '',
      tipo_documento: estudianteData?.tipo_documento || '',
      numero_identificacion: estudianteData?.numero_identificacion || '',
      departamento: estudianteData?.departamento || '',
      municipio: estudianteData?.municipio || '',
      direccion: estudianteData?.direccion || '',
      telefono: estudianteData?.telefono || '',
      centro_proteccion: estudianteData?.centro_proteccion || '',
      grado_aspira: estudianteData?.grado_aspira || '',
      
      // Paso 1 - Entorno Salud
      afiliado_salud: saludData?.afiliado_salud || '',
      regimen: saludData?.regimen || '',
      atendido_salud: saludData?.atendido_salud || '',
      tiene_diagnostico: saludData?.tiene_diagnostico || '',
      recibe_tratamiento: saludData?.recibe_tratamiento || '',
      
      // Paso 1 - Entorno Hogar
      nombre_cuidador: hogarData?.nombre_cuidador || '',
      parentesco: hogarData?.parentesco || '',
      nivel_educativo_cuidador: hogarData?.nivel_educativo_cuidador || '',
      telefono_cuidador: hogarData?.telefono_cuidador || '',
      bajo_proteccion: hogarData?.bajo_proteccion || '',
      recibe_subsidio: hogarData?.recibe_subsidio || '',
      
      // Paso 1 - Entorno Educativo
      vinculado_otra_ie: educativoData?.vinculado_otra_ie || '',
      ultimo_grado: educativoData?.ultimo_grado || '',
      aprobo: educativoData?.aprobo || '',
      medio_transporte: educativoData?.medio_transporte || '',
      tiempo_desplazamiento: educativoData?.tiempo_desplazamiento || '',
      
      // Paso 2 - Docentes responsables
      docentes_nombres_cargos: caracteristicasData?.docentes_nombres_cargos || '',
      
      // Paso 2 - Características del Estudiante
      descripcion_general: caracteristicasData?.descripcion_general || '',
      descripcion_apoyos: caracteristicasData?.descripcion_apoyos || '',
      habilidades_competencias: caracteristicasData?.habilidades_competencias || '',
      
      // Paso 2 - Ajustes razonables
      objetivos_propositos: caracteristicasData?.objetivos_propositos || '',
      barreras_evidenciadas: caracteristicasData?.barreras_evidenciadas || '',
      ajustes_estrategias: caracteristicasData?.ajustes_estrategias || '',
      evaluacion_ajustes: caracteristicasData?.evaluacion_ajustes || '',
      
      // Paso 2 - Recomendaciones institucionales
      acciones: caracteristicasData?.acciones || '',
      estrategias: caracteristicasData?.estrategias || '',
      nombre_firma: caracteristicasData?.nombre_firma || '',
      area: caracteristicasData?.area || '',
      
      // Paso 3 - Participantes
      nombres_directivos_docentes: participantesData?.nombres_directivos_docentes || '',
      nombres_familia: participantesData?.nombres_familia || '',
      parentesco_participantes: participantesData?.parentesco_participantes || '',
      
      // Paso 3 - Compromisos
      compromisos_aula: participantesData?.compromisos_aula || '',
      nombre_actividad: participantesData?.nombre_actividad || '',
      descripcion_actividad: participantesData?.descripcion_actividad || '',
      frecuencia_actividad: participantesData?.frecuencia_actividad || '',
      
      // Paso 3 - Firmas
      firma_estudiante: participantesData?.firma_estudiante || '',
      firma_acudiente: participantesData?.firma_acudiente || '',
      firma_docente: participantesData?.firma_docente || '',
      firma_directivo: participantesData?.firma_directivo || '',
      
      // Ajustes por trimestre - Fix type conversion issues here
      ajustes_trimestre1: ensureArray(ajustesTrimestre1?.ajustes || []),
      ajustes_trimestre2: ensureArray(ajustesTrimestre2?.ajustes || []),
      ajustes_trimestre3: ensureArray(ajustesTrimestre3?.ajustes || []),
      
      // Estado del PIAR
      estado: piarData.estado || 'borrador'
    });
    
    toast.success("PIAR cargado correctamente");
  } catch (error: any) {
    console.error("Error al cargar el PIAR:", error);
    toast.error(`Error al cargar el PIAR: ${error.message}`);
  } finally {
    setLoading(false);
  }
};

// Utility function to get the current user
export const getCurrentUser = async () => {
  const { data: { session } } = await supabase.auth.getSession();
  return session?.user || null;
};

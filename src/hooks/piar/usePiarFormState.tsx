
import { useState } from 'react';
import { PiarFormData } from '@/types/piarFormTypes';

export const usePiarFormState = (idProp?: string) => {
  const [currentStep, setCurrentStep] = useState(1);
  const [currentSection, setCurrentSection] = useState(0);
  const [loading, setLoading] = useState(false);
  const [piarId, setPiarId] = useState<string>(idProp || '');
  const [estudianteId, setEstudianteId] = useState<string>('');
  
  // Initialize all form fields with empty values
  const [formData, setFormData] = useState<PiarFormData>({
    // Paso 1 - Encabezado
    fecha_diligenciamiento: new Date().toISOString().split('T')[0],
    lugar_diligenciamiento: '',
    nombre_persona_diligencia: '',
    rol_en_ie: '',
    institucion_educativa: '',
    sede: '',
    jornada: '',
    
    // Paso 1 - Identificación del estudiante
    nombre_estudiante: '',
    documento_identificacion: '',
    edad: '',
    grado: '',
    
    // Paso 1 - Información general del estudiante
    nombres_apellidos: '',
    lugar_nacimiento: '',
    fecha_nacimiento: '',
    tipo_documento: '',
    numero_identificacion: '',
    departamento: '',
    municipio: '',
    direccion: '',
    telefono: '',
    centro_proteccion: '',
    grado_aspira: '',
    
    // Paso 1 - Entorno Salud
    afiliado_salud: '',
    regimen: '',
    atendido_salud: '',
    tiene_diagnostico: '',
    recibe_tratamiento: '',
    
    // Paso 1 - Entorno Hogar
    nombre_cuidador: '',
    parentesco: '',
    nivel_educativo_cuidador: '',
    telefono_cuidador: '',
    bajo_proteccion: '',
    recibe_subsidio: '',
    
    // Paso 1 - Entorno Educativo
    vinculado_otra_ie: '',
    ultimo_grado: '',
    aprobo: '',
    medio_transporte: '',
    tiempo_desplazamiento: '',
    
    // Paso 2 - Docentes responsables
    docentes_nombres_cargos: '',
    
    // Paso 2 - Características del Estudiante
    descripcion_general: '',
    descripcion_apoyos: '',
    habilidades_competencias: '',
    
    // Paso 2 - Ajustes razonables
    objetivos_propositos: '',
    barreras_evidenciadas: '',
    ajustes_estrategias: '',
    evaluacion_ajustes: '',
    
    // Paso 2 - Recomendaciones institucionales
    acciones: '',
    estrategias: '',
    nombre_firma: '',
    area: '',
    
    // Paso 3 - Participantes
    nombres_directivos_docentes: '',
    nombres_familia: '',
    parentesco_participantes: '',
    
    // Paso 3 - Compromisos
    compromisos_aula: '',
    nombre_actividad: '',
    descripcion_actividad: '',
    frecuencia_actividad: '',
    
    // Paso 3 - Firmas
    firma_estudiante: '',
    firma_acudiente: '',
    firma_docente: '',
    firma_directivo: '',
    
    // New fields for ajustes razonables
    ajustes_trimestre1: [],
    ajustes_trimestre2: [],
    ajustes_trimestre3: [],
    
    // Add estado property for form state
    estado: 'borrador'
  });

  const handleInputChange = (id: string, value: any) => {
    setFormData((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  return {
    currentStep,
    setCurrentStep,
    currentSection,
    setCurrentSection,
    loading,
    setLoading,
    piarId,
    setPiarId,
    estudianteId,
    setEstudianteId,
    formData,
    setFormData,
    handleInputChange
  };
};

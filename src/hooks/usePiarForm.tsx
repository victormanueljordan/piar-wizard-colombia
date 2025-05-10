
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'sonner';
import { PiarFormData } from '@/types/piarFormTypes';

const usePiarForm = () => {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(1);
  const [currentSection, setCurrentSection] = useState(0);
  const [loading, setLoading] = useState(false);
  
  // Initialize all form fields with empty values
  const [formData, setFormData] = useState<PiarFormData>({
    // Paso 1 - Encabezado
    fecha_diligenciamiento: '',
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
  });

  const handleInputChange = (id: string, value: any) => {
    setFormData((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  const handleSaveDraft = () => {
    setLoading(true);
    
    // Simulate saving to Supabase
    setTimeout(() => {
      setLoading(false);
      toast.success("Borrador guardado exitosamente");
    }, 1000);
  };

  const handleNext = () => {
    if (currentStep < 3) { // total number of steps
      setCurrentStep(currentStep + 1);
      setCurrentSection(0); // Reset section index when changing steps
      window.scrollTo(0, 0);
    } else {
      // Handle final submission
      toast.success("PIAR completado exitosamente");
      navigate('/dashboard');
    }
  };

  const handlePrevious = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
      setCurrentSection(0); // Reset section index when changing steps
      window.scrollTo(0, 0);
    }
  };
  
  const handleNextSection = () => {
    // Get total sections from STEP_SECTIONS for the current step
    const totalSections = [6, 4, 3][currentStep - 1]; // Hardcoded from STEP_SECTIONS
    
    if (currentSection < totalSections - 1) {
      setCurrentSection(currentSection + 1);
      window.scrollTo(0, 0);
    } else if (currentStep < 3) { // total number of steps
      // Move to next step if we're at the last section
      setCurrentStep(currentStep + 1);
      setCurrentSection(0);
      window.scrollTo(0, 0);
    }
  };
  
  const handlePrevSection = () => {
    if (currentSection > 0) {
      setCurrentSection(currentSection - 1);
      window.scrollTo(0, 0);
    } else if (currentStep > 1) {
      // Move to previous step if we're at the first section
      setCurrentStep(currentStep - 1);
      const prevStepTotalSections = [6, 4, 3][currentStep - 2]; // Hardcoded from STEP_SECTIONS
      setCurrentSection(prevStepTotalSections - 1); // Go to last section of previous step
      window.scrollTo(0, 0);
    }
  };
  
  const handleDownloadPDF = () => {
    toast.info("Preparando PDF para descarga...");
    // In a real implementation this would connect to PDF generation
  };

  return {
    currentStep,
    currentSection,
    formData,
    loading,
    handleInputChange,
    handleSaveDraft,
    handleNext,
    handlePrevious,
    handleNextSection,
    handlePrevSection,
    handleDownloadPDF,
  };
};

export default usePiarForm;

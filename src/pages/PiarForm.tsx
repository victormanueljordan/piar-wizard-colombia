
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '@/components/Header';
import WizardNav from '@/components/wizard/WizardNav';
import FormSection from '@/components/wizard/FormSection';
import FormField from '@/components/wizard/FormField';
import WizardActions from '@/components/wizard/WizardActions';
import { Button } from '@/components/ui/button';
import { toast } from 'sonner';
import { Download } from 'lucide-react';

// Define wizard steps
const WIZARD_STEPS = [
  { name: 'Paso 1 - Información General' },
  { name: 'Paso 2 - Caracterización y Ajustes' },
  { name: 'Paso 3 - Acta de Acuerdo' },
];

// Options for select fields
const TIPO_DOCUMENTO_OPTIONS = [
  { value: 'cc', label: 'Cédula de Ciudadanía' },
  { value: 'ti', label: 'Tarjeta de Identidad' },
  { value: 'rc', label: 'Registro Civil' },
  { value: 'otro', label: 'Otro' },
];

const SI_NO_OPTIONS = [
  { value: 'si', label: 'Sí' },
  { value: 'no', label: 'No' },
];

const REGIMEN_OPTIONS = [
  { value: 'contributivo', label: 'Contributivo' },
  { value: 'subsidiado', label: 'Subsidiado' },
  { value: 'especial', label: 'Especial' },
];

const NIVEL_EDUCATIVO_OPTIONS = [
  { value: 'primaria', label: 'Primaria' },
  { value: 'secundaria', label: 'Secundaria' },
  { value: 'media', label: 'Media' },
  { value: 'tecnico', label: 'Técnico' },
  { value: 'tecnologico', label: 'Tecnológico' },
  { value: 'profesional', label: 'Profesional' },
  { value: 'postgrado', label: 'Postgrado' },
  { value: 'ninguno', label: 'Ninguno' },
];

const TRANSPORTE_OPTIONS = [
  { value: 'caminando', label: 'Caminando' },
  { value: 'bicicleta', label: 'Bicicleta' },
  { value: 'transporte_publico', label: 'Transporte Público' },
  { value: 'transporte_escolar', label: 'Transporte Escolar' },
  { value: 'vehiculo_particular', label: 'Vehículo Particular' },
  { value: 'otro', label: 'Otro' },
];

const PiarForm = () => {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(1);
  const [loading, setLoading] = useState(false);
  
  // Initialize all form fields with empty values
  const [formData, setFormData] = useState({
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
    if (currentStep < WIZARD_STEPS.length) {
      setCurrentStep(currentStep + 1);
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
      window.scrollTo(0, 0);
    }
  };
  
  const handleDownloadPDF = () => {
    toast.info("Preparando PDF para descarga...");
    // In a real implementation this would connect to PDF generation
  };

  // This renders step 1 content
  const renderStep1 = () => (
    <>
      <FormSection title="Encabezado del formulario" required>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <FormField
            id="fecha_diligenciamiento"
            label="Fecha de Diligenciamiento"
            type="date"
            required
            value={formData.fecha_diligenciamiento}
            onChange={(value) => handleInputChange("fecha_diligenciamiento", value)}
          />
          
          <FormField
            id="lugar_diligenciamiento"
            label="Lugar de Diligenciamiento"
            required
            value={formData.lugar_diligenciamiento}
            onChange={(value) => handleInputChange("lugar_diligenciamiento", value)}
          />
          
          <FormField
            id="nombre_persona_diligencia"
            label="Nombre de quien Diligencia"
            required
            value={formData.nombre_persona_diligencia}
            onChange={(value) => handleInputChange("nombre_persona_diligencia", value)}
          />
          
          <FormField
            id="rol_en_ie"
            label="Rol en la IE"
            required
            value={formData.rol_en_ie}
            onChange={(value) => handleInputChange("rol_en_ie", value)}
          />
          
          <FormField
            id="institucion_educativa"
            label="Institución Educativa"
            required
            value={formData.institucion_educativa}
            onChange={(value) => handleInputChange("institucion_educativa", value)}
          />
          
          <FormField
            id="sede"
            label="Sede"
            required
            value={formData.sede}
            onChange={(value) => handleInputChange("sede", value)}
          />
          
          <FormField
            id="jornada"
            label="Jornada"
            required
            value={formData.jornada}
            onChange={(value) => handleInputChange("jornada", value)}
          />
        </div>
      </FormSection>
      
      <FormSection title="Identificación del estudiante" required>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <FormField
            id="nombre_estudiante"
            label="Nombre del Estudiante"
            required
            value={formData.nombre_estudiante}
            onChange={(value) => handleInputChange("nombre_estudiante", value)}
          />
          
          <FormField
            id="documento_identificacion"
            label="Documento de Identificación"
            required
            value={formData.documento_identificacion}
            onChange={(value) => handleInputChange("documento_identificacion", value)}
          />
          
          <FormField
            id="edad"
            label="Edad"
            type="number"
            required
            value={formData.edad}
            onChange={(value) => handleInputChange("edad", value)}
          />
          
          <FormField
            id="grado"
            label="Grado"
            required
            value={formData.grado}
            onChange={(value) => handleInputChange("grado", value)}
          />
        </div>
      </FormSection>

      <FormSection title="Información general del estudiante" required>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <FormField
            id="nombres_apellidos"
            label="Nombres y Apellidos"
            required
            value={formData.nombres_apellidos}
            onChange={(value) => handleInputChange("nombres_apellidos", value)}
          />
          
          <FormField
            id="lugar_nacimiento"
            label="Lugar de Nacimiento"
            required
            value={formData.lugar_nacimiento}
            onChange={(value) => handleInputChange("lugar_nacimiento", value)}
          />
          
          <FormField
            id="fecha_nacimiento"
            label="Fecha de Nacimiento"
            type="date"
            required
            value={formData.fecha_nacimiento}
            onChange={(value) => handleInputChange("fecha_nacimiento", value)}
          />
          
          <FormField
            id="tipo_documento"
            label="Tipo de Documento"
            type="select"
            required
            value={formData.tipo_documento}
            onChange={(value) => handleInputChange("tipo_documento", value)}
            options={TIPO_DOCUMENTO_OPTIONS}
          />
          
          <FormField
            id="numero_identificacion"
            label="Número de Identificación"
            required
            value={formData.numero_identificacion}
            onChange={(value) => handleInputChange("numero_identificacion", value)}
          />
          
          <FormField
            id="departamento"
            label="Departamento"
            required
            value={formData.departamento}
            onChange={(value) => handleInputChange("departamento", value)}
          />
          
          <FormField
            id="municipio"
            label="Municipio"
            required
            value={formData.municipio}
            onChange={(value) => handleInputChange("municipio", value)}
          />
          
          <FormField
            id="direccion"
            label="Dirección"
            required
            value={formData.direccion}
            onChange={(value) => handleInputChange("direccion", value)}
          />
          
          <FormField
            id="telefono"
            label="Teléfono"
            required
            value={formData.telefono}
            onChange={(value) => handleInputChange("telefono", value)}
          />
          
          <FormField
            id="centro_proteccion"
            label="¿Está bajo protección de centro especializado?"
            type="select"
            required
            value={formData.centro_proteccion}
            onChange={(value) => handleInputChange("centro_proteccion", value)}
            options={SI_NO_OPTIONS}
          />
          
          <FormField
            id="grado_aspira"
            label="Grado al que Aspira"
            required
            value={formData.grado_aspira}
            onChange={(value) => handleInputChange("grado_aspira", value)}
          />
        </div>
      </FormSection>

      <FormSection title="Entorno Salud" required>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <FormField
            id="afiliado_salud"
            label="¿Afiliado a Salud?"
            type="select"
            required
            value={formData.afiliado_salud}
            onChange={(value) => handleInputChange("afiliado_salud", value)}
            options={SI_NO_OPTIONS}
          />
          
          <FormField
            id="regimen"
            label="Régimen"
            type="select"
            required
            value={formData.regimen}
            onChange={(value) => handleInputChange("regimen", value)}
            options={REGIMEN_OPTIONS}
          />
          
          <FormField
            id="atendido_salud"
            label="¿Ha sido atendido por el sistema de salud?"
            type="select"
            required
            value={formData.atendido_salud}
            onChange={(value) => handleInputChange("atendido_salud", value)}
            options={SI_NO_OPTIONS}
          />
          
          <FormField
            id="tiene_diagnostico"
            label="¿Cuenta con diagnóstico médico?"
            type="select"
            required
            value={formData.tiene_diagnostico}
            onChange={(value) => handleInputChange("tiene_diagnostico", value)}
            options={SI_NO_OPTIONS}
          />
          
          <FormField
            id="recibe_tratamiento"
            label="¿Recibe tratamiento médico?"
            type="select"
            required
            value={formData.recibe_tratamiento}
            onChange={(value) => handleInputChange("recibe_tratamiento", value)}
            options={SI_NO_OPTIONS}
          />
        </div>
      </FormSection>

      <FormSection title="Entorno Hogar" required>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <FormField
            id="nombre_cuidador"
            label="Nombre del Cuidador"
            required
            value={formData.nombre_cuidador}
            onChange={(value) => handleInputChange("nombre_cuidador", value)}
          />
          
          <FormField
            id="parentesco"
            label="Parentesco"
            required
            value={formData.parentesco}
            onChange={(value) => handleInputChange("parentesco", value)}
          />
          
          <FormField
            id="nivel_educativo_cuidador"
            label="Nivel Educativo del Cuidador"
            type="select"
            required
            value={formData.nivel_educativo_cuidador}
            onChange={(value) => handleInputChange("nivel_educativo_cuidador", value)}
            options={NIVEL_EDUCATIVO_OPTIONS}
          />
          
          <FormField
            id="telefono_cuidador"
            label="Teléfono del Cuidador"
            required
            value={formData.telefono_cuidador}
            onChange={(value) => handleInputChange("telefono_cuidador", value)}
          />
          
          <FormField
            id="bajo_proteccion"
            label="¿Bajo Protección?"
            type="select"
            required
            value={formData.bajo_proteccion}
            onChange={(value) => handleInputChange("bajo_proteccion", value)}
            options={SI_NO_OPTIONS}
          />
          
          <FormField
            id="recibe_subsidio"
            label="¿Recibe Subsidio?"
            type="select"
            required
            value={formData.recibe_subsidio}
            onChange={(value) => handleInputChange("recibe_subsidio", value)}
            options={SI_NO_OPTIONS}
          />
        </div>
      </FormSection>

      <FormSection title="Entorno Educativo" required>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <FormField
            id="vinculado_otra_ie"
            label="¿Ha estado vinculado a otra IE?"
            type="select"
            required
            value={formData.vinculado_otra_ie}
            onChange={(value) => handleInputChange("vinculado_otra_ie", value)}
            options={SI_NO_OPTIONS}
          />
          
          <FormField
            id="ultimo_grado"
            label="Último Grado Cursado"
            required
            value={formData.ultimo_grado}
            onChange={(value) => handleInputChange("ultimo_grado", value)}
          />
          
          <FormField
            id="aprobo"
            label="¿Aprobó?"
            type="select"
            required
            value={formData.aprobo}
            onChange={(value) => handleInputChange("aprobo", value)}
            options={SI_NO_OPTIONS}
          />
          
          <FormField
            id="medio_transporte"
            label="Medio de Transporte"
            type="select"
            required
            value={formData.medio_transporte}
            onChange={(value) => handleInputChange("medio_transporte", value)}
            options={TRANSPORTE_OPTIONS}
          />
          
          <FormField
            id="tiempo_desplazamiento"
            label="Tiempo de Desplazamiento (minutos)"
            type="number"
            required
            value={formData.tiempo_desplazamiento}
            onChange={(value) => handleInputChange("tiempo_desplazamiento", value)}
          />
        </div>
      </FormSection>
    </>
  );
  
  const renderStep2 = () => (
    <>
      <FormSection title="Docentes responsables del PIAR" required>
        <div className="grid grid-cols-1 gap-6">
          <FormField
            id="docentes_nombres_cargos"
            label="Nombres y Cargos de los Docentes Responsables"
            type="textarea"
            required
            value={formData.docentes_nombres_cargos}
            onChange={(value) => handleInputChange("docentes_nombres_cargos", value)}
          />
        </div>
      </FormSection>
      
      <FormSection title="Características del Estudiante" required>
        <div className="grid grid-cols-1 gap-6">
          <FormField
            id="descripcion_general"
            label="Descripción General del Estudiante"
            type="textarea"
            required
            value={formData.descripcion_general}
            onChange={(value) => handleInputChange("descripcion_general", value)}
          />
          
          <FormField
            id="descripcion_apoyos"
            label="Descripción de Apoyos Requeridos"
            type="textarea"
            required
            value={formData.descripcion_apoyos}
            onChange={(value) => handleInputChange("descripcion_apoyos", value)}
          />
          
          <FormField
            id="habilidades_competencias"
            label="Habilidades y Competencias"
            type="textarea"
            required
            value={formData.habilidades_competencias}
            onChange={(value) => handleInputChange("habilidades_competencias", value)}
          />
        </div>
      </FormSection>
      
      <FormSection title="Ajustes razonables" required>
        <div className="grid grid-cols-1 gap-6">
          <FormField
            id="objetivos_propositos"
            label="Objetivos/Propósitos"
            type="textarea"
            required
            value={formData.objetivos_propositos}
            onChange={(value) => handleInputChange("objetivos_propositos", value)}
          />
          
          <FormField
            id="barreras_evidenciadas"
            label="Barreras Evidenciadas"
            type="textarea"
            required
            value={formData.barreras_evidenciadas}
            onChange={(value) => handleInputChange("barreras_evidenciadas", value)}
          />
          
          <FormField
            id="ajustes_estrategias"
            label="Ajustes y Estrategias"
            type="textarea"
            required
            value={formData.ajustes_estrategias}
            onChange={(value) => handleInputChange("ajustes_estrategias", value)}
          />
          
          <FormField
            id="evaluacion_ajustes"
            label="Evaluación de Ajustes"
            type="textarea"
            required
            value={formData.evaluacion_ajustes}
            onChange={(value) => handleInputChange("evaluacion_ajustes", value)}
          />
        </div>
      </FormSection>
      
      <FormSection title="Recomendaciones institucionales" required>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <FormField
            id="acciones"
            label="Acciones"
            type="textarea"
            required
            value={formData.acciones}
            onChange={(value) => handleInputChange("acciones", value)}
          />
          
          <FormField
            id="estrategias"
            label="Estrategias"
            type="textarea"
            required
            value={formData.estrategias}
            onChange={(value) => handleInputChange("estrategias", value)}
          />
          
          <FormField
            id="nombre_firma"
            label="Nombre y Firma"
            required
            value={formData.nombre_firma}
            onChange={(value) => handleInputChange("nombre_firma", value)}
          />
          
          <FormField
            id="area"
            label="Área"
            required
            value={formData.area}
            onChange={(value) => handleInputChange("area", value)}
          />
        </div>
      </FormSection>
    </>
  );
  
  const renderStep3 = () => (
    <>
      <FormSection title="Participantes" required>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <FormField
            id="nombres_directivos_docentes"
            label="Nombres Directivos/Docentes"
            type="textarea"
            required
            value={formData.nombres_directivos_docentes}
            onChange={(value) => handleInputChange("nombres_directivos_docentes", value)}
          />
          
          <FormField
            id="nombres_familia"
            label="Nombres de Familiares"
            type="textarea"
            required
            value={formData.nombres_familia}
            onChange={(value) => handleInputChange("nombres_familia", value)}
          />
          
          <FormField
            id="parentesco_participantes"
            label="Parentesco"
            required
            value={formData.parentesco_participantes}
            onChange={(value) => handleInputChange("parentesco_participantes", value)}
          />
        </div>
      </FormSection>
      
      <FormSection title="Compromisos" required>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <FormField
            id="compromisos_aula"
            label="Compromisos en el Aula"
            type="textarea"
            required
            value={formData.compromisos_aula}
            onChange={(value) => handleInputChange("compromisos_aula", value)}
            className="md:col-span-2"
          />
          
          <FormField
            id="nombre_actividad"
            label="Nombre de la Actividad"
            required
            value={formData.nombre_actividad}
            onChange={(value) => handleInputChange("nombre_actividad", value)}
          />
          
          <FormField
            id="descripcion_actividad"
            label="Descripción de la Actividad"
            type="textarea"
            required
            value={formData.descripcion_actividad}
            onChange={(value) => handleInputChange("descripcion_actividad", value)}
          />
          
          <FormField
            id="frecuencia_actividad"
            label="Frecuencia de la Actividad"
            required
            value={formData.frecuencia_actividad}
            onChange={(value) => handleInputChange("frecuencia_actividad", value)}
          />
        </div>
      </FormSection>
      
      <FormSection title="Firmas" required>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <FormField
            id="firma_estudiante"
            label="Firma del Estudiante"
            required
            value={formData.firma_estudiante}
            onChange={(value) => handleInputChange("firma_estudiante", value)}
          />
          
          <FormField
            id="firma_acudiente"
            label="Firma del Acudiente"
            required
            value={formData.firma_acudiente}
            onChange={(value) => handleInputChange("firma_acudiente", value)}
          />
          
          <FormField
            id="firma_docente"
            label="Firma del Docente"
            required
            value={formData.firma_docente}
            onChange={(value) => handleInputChange("firma_docente", value)}
          />
          
          <FormField
            id="firma_directivo"
            label="Firma del Directivo"
            required
            value={formData.firma_directivo}
            onChange={(value) => handleInputChange("firma_directivo", value)}
          />
        </div>
      </FormSection>
    </>
  );

  // Render current step content
  const renderStepContent = () => {
    switch (currentStep) {
      case 1:
        return renderStep1();
      case 2:
        return renderStep2();
      case 3:
        return renderStep3();
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Header userName="docente" />
      
      <main className="flex-1 container max-w-screen-xl mx-auto px-4 py-6">
        <div className="bg-white rounded-lg border p-6">
          <div className="flex items-center justify-between mb-6">
            <Button 
              variant="outline" 
              onClick={handleDownloadPDF} 
              className="flex items-center"
            >
              <Download className="w-4 h-4 mr-2" />
              Descargar PDF
            </Button>
          </div>
          
          <WizardNav 
            currentStep={currentStep} 
            steps={WIZARD_STEPS} 
          />
          
          {renderStepContent()}
          
          <WizardActions 
            currentStep={currentStep}
            totalSteps={WIZARD_STEPS.length}
            onPrevious={handlePrevious}
            onNext={handleNext}
            onSaveDraft={handleSaveDraft}
            loading={loading}
          />
        </div>
      </main>
    </div>
  );
};

export default PiarForm;

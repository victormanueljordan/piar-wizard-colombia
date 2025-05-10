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

const PiarForm = () => {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(1);
  const [loading, setLoading] = useState(false);
  
  // State for first step form fields
  const [formData, setFormData] = useState({
    // Encabezado
    fecha_diligenciamiento: '',
    lugar_diligenciamiento: '',
    nombre_persona_diligencia: '',
    rol_en_ie: '',
    institucion_educativa: '',
    sede: '',
    jornada: '',
    
    // Identificación del estudiante
    nombre_estudiante: '',
    documento_identificacion: '',
    edad: '',
    grado: '',
    
    // Other sections would be added here
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
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
            onChange={handleInputChange}
          />
          
          <FormField
            id="lugar_diligenciamiento"
            label="Lugar de Diligenciamiento"
            required
            value={formData.lugar_diligenciamiento}
            onChange={handleInputChange}
          />
          
          <FormField
            id="nombre_persona_diligencia"
            label="Nombre de quien Diligencia"
            required
            value={formData.nombre_persona_diligencia}
            onChange={handleInputChange}
          />
          
          <FormField
            id="rol_en_ie"
            label="Rol en la IE"
            required
            value={formData.rol_en_ie}
            onChange={handleInputChange}
          />
          
          <FormField
            id="institucion_educativa"
            label="Institución Educativa"
            required
            value={formData.institucion_educativa}
            onChange={handleInputChange}
          />
          
          <FormField
            id="sede"
            label="Sede"
            required
            value={formData.sede}
            onChange={handleInputChange}
          />
          
          <FormField
            id="jornada"
            label="Jornada"
            required
            value={formData.jornada}
            onChange={handleInputChange}
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
            onChange={handleInputChange}
          />
          
          <FormField
            id="documento_identificacion"
            label="Documento de Identificación"
            required
            value={formData.documento_identificacion}
            onChange={handleInputChange}
          />
          
          <FormField
            id="edad"
            label="Edad"
            type="number"
            required
            value={formData.edad}
            onChange={handleInputChange}
          />
          
          <FormField
            id="grado"
            label="Grado"
            required
            value={formData.grado}
            onChange={handleInputChange}
          />
        </div>
      </FormSection>
      
      {/* Additional sections would be added here */}
    </>
  );
  
  // Placeholder for steps 2 and 3
  const renderStep2 = () => (
    <div className="text-center py-12">
      <p className="text-gray-600 mb-4">Paso 2 - Caracterización y Ajustes</p>
      <p className="text-sm text-gray-500">
        Esta sección se implementará en la próxima versión
      </p>
    </div>
  );
  
  const renderStep3 = () => (
    <div className="text-center py-12">
      <p className="text-gray-600 mb-4">Paso 3 - Acta de Acuerdo</p>
      <p className="text-sm text-gray-500">
        Esta sección se implementará en la próxima versión
      </p>
    </div>
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


import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import Header from '@/components/Header';
import WizardNav from '@/components/wizard/WizardNav';
import WizardActions from '@/components/wizard/WizardActions';
import SectionNav from '@/components/wizard/SectionNav';
import SectionRenderer from '@/components/piar/SectionRenderer';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Download } from 'lucide-react';
import usePiarForm from '@/hooks/usePiarForm';
import { WIZARD_STEPS, STEP_SECTIONS } from '@/constants/piarFormConstants';
import AnimatedBackground from '@/components/AnimatedBackground';
import LoadingOverlay from '@/components/LoadingOverlay';

const PiarForm = () => {
  const { id } = useParams<{ id: string }>();
  
  const {
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
  } = usePiarForm(id);

  const [isInitialLoading, setIsInitialLoading] = useState(true);

  // Calculate progress percentage
  const totalSections = STEP_SECTIONS.reduce((acc, step) => acc + step.length, 0);
  let completedSections = 0;
  
  for (let i = 0; i < currentStep - 1; i++) {
    completedSections += STEP_SECTIONS[i].length;
  }
  completedSections += currentSection;
  
  const progressPercentage = (completedSections / totalSections) * 100;

  // Simulate initial loading
  React.useEffect(() => {
    const timer = setTimeout(() => {
      setIsInitialLoading(false);
    }, 1200);
    
    return () => clearTimeout(timer);
  }, []);

  if (isInitialLoading) {
    return <LoadingOverlay message={id ? "Cargando PIAR existente..." : "Preparando formulario PIAR..."} />;
  }

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col relative">
      <AnimatedBackground type="gradient" intensity="low" />
      <Header userName="docente" />
      
      <main className="flex-1 container max-w-screen-xl mx-auto px-4 py-6">
        <div className="bg-white/90 backdrop-blur-sm rounded-lg border p-6 shadow-md transition-all duration-300">
          <div className="flex items-center justify-between mb-6">
            <div className="flex-1 mr-4">
              <h1 className="text-xl font-bold text-gray-800 mb-2">
                {id ? (formData?.estado === 'borrador' ? 'Completar PIAR' : 'Visualizar PIAR') : 'Nuevo Plan Individual de Ajustes Razonables'}
              </h1>
              <div className="w-full">
                <div className="flex justify-between text-xs text-gray-600 mb-1">
                  <span>Progreso</span>
                  <span>{Math.round(progressPercentage)}%</span>
                </div>
                <Progress value={progressPercentage} className="h-2" />
              </div>
            </div>
            <Button 
              variant="outline" 
              onClick={handleDownloadPDF}
              className="flex items-center transition-all duration-300 hover:bg-gray-100 hover:scale-[1.03]"
            >
              <Download className="w-4 h-4 mr-2" />
              Descargar PDF
            </Button>
          </div>
          
          <WizardNav 
            currentStep={currentStep} 
            steps={WIZARD_STEPS} 
          />
          
          <div className="transition-all duration-300">
            <SectionRenderer 
              currentStep={currentStep}
              currentSection={currentSection}
              formData={formData}
              handleInputChange={handleInputChange}
            />
          </div>
          
          <SectionNav
            currentSection={currentSection}
            totalSections={STEP_SECTIONS[currentStep - 1].length}
            onNextSection={handleNextSection}
            onPrevSection={handlePrevSection}
            showPrev={!(currentStep === 1 && currentSection === 0)}
            showNext={!(currentStep === WIZARD_STEPS.length && currentSection === STEP_SECTIONS[currentStep - 1].length - 1)}
          />
          
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

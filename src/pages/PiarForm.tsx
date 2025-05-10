
import React from 'react';
import Header from '@/components/Header';
import WizardNav from '@/components/wizard/WizardNav';
import WizardActions from '@/components/wizard/WizardActions';
import SectionNav from '@/components/wizard/SectionNav';
import SectionRenderer from '@/components/piar/SectionRenderer';
import { Button } from '@/components/ui/button';
import { Download } from 'lucide-react';
import usePiarForm from '@/hooks/usePiarForm';
import { WIZARD_STEPS, STEP_SECTIONS } from '@/constants/piarFormConstants';

const PiarForm = () => {
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
  } = usePiarForm();

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
          
          <SectionRenderer 
            currentStep={currentStep}
            currentSection={currentSection}
            formData={formData}
            handleInputChange={handleInputChange}
          />
          
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

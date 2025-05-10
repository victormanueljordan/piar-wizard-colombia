
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowLeft, ArrowRight, Bot, Save } from 'lucide-react';

interface WizardActionsProps {
  currentStep: number;
  totalSteps: number;
  onPrevious: () => void;
  onNext: () => void;
  onSaveDraft: () => void;
  loading: boolean;
}

const WizardActions: React.FC<WizardActionsProps> = ({
  currentStep,
  totalSteps,
  onPrevious,
  onNext,
  onSaveDraft,
  loading,
}) => {
  const isFirstStep = currentStep === 1;
  const isLastStep = currentStep === totalSteps;

  return (
    <footer className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 mt-6 border-t">
      <div className="flex gap-2 items-center w-full sm:w-auto order-3 sm:order-1">
        <Button
          variant="outline"
          onClick={onSaveDraft}
          disabled={loading}
          className="flex-1 sm:flex-none transition-all duration-300 hover:bg-blue-50 hover:border-blue-300"
        >
          <Save className="w-4 h-4 mr-2" />
          {loading ? 
            <span className="flex items-center">
              <span className="animate-spin h-4 w-4 mr-2 border-2 border-t-transparent border-blue-500 rounded-full" />
              Guardando...
            </span> 
            : 'Guardar borrador'
          }
        </Button>
      </div>
      
      <div className="flex items-center gap-3 order-2">
        <Button
          variant="outline"
          onClick={onPrevious}
          disabled={isFirstStep}
          className="flex items-center gap-1 transition-all duration-300 hover:bg-gray-100"
        >
          <ArrowLeft className="w-4 h-4" />
          <span className="hidden sm:inline">Anterior</span>
        </Button>
        
        <Button
          onClick={onNext}
          className="flex items-center gap-1 transition-all duration-300 hover:scale-[1.03] bg-piar-blue hover:bg-blue-700"
        >
          <span>{isLastStep ? 'Finalizar' : 'Siguiente'}</span>
          {!isLastStep && <ArrowRight className="w-4 h-4" />}
        </Button>
      </div>
    </footer>
  );
};

export default WizardActions;

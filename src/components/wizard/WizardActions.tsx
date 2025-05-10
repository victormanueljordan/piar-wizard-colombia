
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowLeft, ArrowRight } from 'lucide-react';

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
      <Button
        variant="outline"
        onClick={onSaveDraft}
        disabled={loading}
        className="w-full sm:w-auto order-3 sm:order-1"
      >
        {loading ? 'Guardando...' : 'Guardar borrador'}
      </Button>
      
      <div className="flex items-center gap-3 order-2">
        <Button
          variant="outline"
          onClick={onPrevious}
          disabled={isFirstStep}
          className="flex items-center gap-1"
        >
          <ArrowLeft className="w-4 h-4" />
          <span className="hidden sm:inline">Anterior</span>
        </Button>
        
        <Button
          onClick={onNext}
          className="flex items-center gap-1"
        >
          <span>{isLastStep ? 'Finalizar' : 'Siguiente'}</span>
          {!isLastStep && <ArrowRight className="w-4 h-4" />}
        </Button>
      </div>
    </footer>
  );
};

export default WizardActions;

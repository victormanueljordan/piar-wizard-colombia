
import React from 'react';
import { Button } from '@/components/ui/button';
import { Save, ArrowLeft, ArrowRight } from 'lucide-react';

interface WizardActionsProps {
  currentStep: number;
  totalSteps: number;
  onPrevious: () => void;
  onNext: () => void;
  onSaveDraft: () => void;
  loading?: boolean;
}

const WizardActions: React.FC<WizardActionsProps> = ({
  currentStep,
  totalSteps,
  onPrevious,
  onNext,
  onSaveDraft,
  loading = false,
}) => {
  return (
    <div className="flex items-center justify-between py-4 px-1 border-t mt-6">
      <div>
        <Button
          variant="outline"
          onClick={onSaveDraft}
          disabled={loading}
          className="flex items-center"
        >
          <Save className="w-4 h-4 mr-2" />
          Guardar borrador
        </Button>
      </div>
      
      <div className="flex items-center space-x-2">
        {currentStep > 1 && (
          <Button
            variant="outline"
            onClick={onPrevious}
            disabled={loading}
            className="flex items-center"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Anterior
          </Button>
        )}
        
        <Button
          onClick={onNext}
          disabled={loading}
          className="flex items-center bg-piar-blue hover:bg-blue-700"
        >
          {currentStep < totalSteps ? (
            <>
              Siguiente
              <ArrowRight className="w-4 h-4 ml-2" />
            </>
          ) : (
            'Finalizar'
          )}
        </Button>
      </div>
    </div>
  );
};

export default WizardActions;

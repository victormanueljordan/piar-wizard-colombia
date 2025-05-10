
import React from 'react';
import { Button } from '@/components/ui/button';
import { Save, ArrowLeft, ArrowRight, Loader2 } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';

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
  const isMobile = useIsMobile();
  
  return (
    <div className="flex flex-col sm:flex-row justify-between items-center mt-6 pt-4 border-t space-y-3 sm:space-y-0">
      <Button
        variant="outline"
        onClick={onSaveDraft}
        disabled={loading}
        className="w-full sm:w-auto flex items-center justify-center transition-all duration-300 hover:bg-gray-100 hover:scale-[1.03]"
      >
        {loading ? (
          <>
            <Loader2 className="w-4 h-4 mr-2 animate-spin" />
            Guardando...
          </>
        ) : (
          <>
            <Save className="w-4 h-4 mr-2" />
            Guardar borrador
          </>
        )}
      </Button>
      
      <div className="flex items-center space-x-3 w-full sm:w-auto">
        <Button
          variant="outline"
          onClick={onPrevious}
          disabled={currentStep === 1 || loading}
          className="flex-1 sm:flex-initial transition-all duration-300 hover:bg-gray-100"
        >
          <ArrowLeft className={`${isMobile ? 'w-4 h-4' : 'w-5 h-5'} mr-2`} />
          Anterior
        </Button>
        
        <Button
          onClick={onNext}
          disabled={loading}
          className={`flex-1 sm:flex-initial bg-piar-blue hover:bg-blue-700 transition-all duration-300 hover:scale-[1.03] ${loading ? 'opacity-70' : ''}`}
        >
          {currentStep === totalSteps ? (
            'Finalizar'
          ) : (
            <>
              Siguiente
              <ArrowRight className={`${isMobile ? 'w-4 h-4' : 'w-5 h-5'} ml-2`} />
            </>
          )}
        </Button>
      </div>
    </div>
  );
};

export default WizardActions;

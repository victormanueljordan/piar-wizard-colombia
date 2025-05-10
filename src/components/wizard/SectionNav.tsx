
import React from 'react';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { ArrowLeft, ArrowRight } from 'lucide-react';

interface SectionNavProps {
  currentSection: number;
  totalSections: number;
  showPrev: boolean;
  showNext: boolean;
  onPrevSection: () => void;
  onNextSection: () => void;
}

const SectionNav: React.FC<SectionNavProps> = ({
  currentSection,
  totalSections,
  showPrev,
  showNext,
  onPrevSection,
  onNextSection,
}) => {
  const progressPercentage = ((currentSection + 1) / totalSections) * 100;
  
  return (
    <div className="space-y-4 my-6">
      <div className="flex items-center justify-between mb-1">
        <div className="text-sm font-medium text-gray-700">
          Progreso de la sección
        </div>
        <div className="text-sm text-gray-500">
          {currentSection + 1} de {totalSections}
        </div>
      </div>
      
      <Progress value={progressPercentage} className="h-2" />
      
      <div className="flex flex-col sm:flex-row items-center justify-between gap-2 pt-4">
        <div className="w-full sm:w-auto order-2 sm:order-1">
          {showPrev && (
            <Button
              variant="outline"
              onClick={onPrevSection}
              className="w-full sm:w-auto flex items-center gap-2"
              size="lg"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Sección anterior</span>
            </Button>
          )}
        </div>
        
        <div className="w-full sm:w-auto order-1 sm:order-2">
          {showNext && (
            <Button
              onClick={onNextSection}
              className="w-full sm:w-auto flex items-center gap-2 bg-piar-blue hover:bg-blue-700"
              size="lg"
            >
              <span>Siguiente sección</span>
              <ArrowRight className="w-4 h-4" />
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

export default SectionNav;

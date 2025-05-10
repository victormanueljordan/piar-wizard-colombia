
import React from 'react';
import { Button } from '@/components/ui/button';
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
  return (
    <div className="flex flex-col sm:flex-row items-center justify-between gap-2 my-6">
      <div className="text-sm text-gray-500 mb-2 sm:mb-0">
        Sección {currentSection + 1} de {totalSections}
      </div>
      
      <div className="flex items-center gap-3 w-full sm:w-auto justify-between sm:justify-end">
        {showPrev && (
          <Button
            variant="outline"
            onClick={onPrevSection}
            className="flex-1 sm:flex-none flex items-center gap-1"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Sección anterior</span>
          </Button>
        )}
        
        {showNext && (
          <Button
            onClick={onNextSection}
            className="flex-1 sm:flex-none flex items-center gap-1"
          >
            <span>Siguiente sección</span>
            <ArrowRight className="w-4 h-4" />
          </Button>
        )}
      </div>
    </div>
  );
};

export default SectionNav;

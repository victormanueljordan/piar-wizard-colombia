
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowLeft, ArrowRight } from 'lucide-react';

interface SectionNavProps {
  currentSection: number;
  totalSections: number;
  onNextSection: () => void;
  onPrevSection: () => void;
  showPrev?: boolean;
  showNext?: boolean;
}

const SectionNav: React.FC<SectionNavProps> = ({
  currentSection,
  totalSections,
  onNextSection,
  onPrevSection,
  showPrev = true,
  showNext = true,
}) => {
  return (
    <div className="flex items-center justify-between mt-6 pt-4 border-t">
      <div>
        {showPrev && (
          <Button
            variant="outline"
            onClick={onPrevSection}
            disabled={currentSection === 0}
            className="flex items-center"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Sección anterior
          </Button>
        )}
      </div>
      <div className="text-sm text-gray-500">
        Sección {currentSection + 1} de {totalSections}
      </div>
      <div>
        {showNext && (
          <Button
            variant="outline"
            onClick={onNextSection}
            disabled={currentSection === totalSections - 1}
            className="flex items-center"
          >
            Siguiente sección
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        )}
      </div>
    </div>
  );
};

export default SectionNav;

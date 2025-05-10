
import React from 'react';
import { PiarFormData } from '@/types/piarFormTypes';

// Step 1 Components
import Encabezado from './step1/Encabezado';
import Identificacion from './step1/Identificacion';
import InfoGeneral from './step1/InfoGeneral';
import EntornoSalud from './step1/EntornoSalud';
import EntornoHogar from './step1/EntornoHogar';
import EntornoEducativo from './step1/EntornoEducativo';

// Step 2 Components
import DocentesResponsables from './step2/DocentesResponsables';
import CaracteristicasEstudiante from './step2/CaracteristicasEstudiante';
import AjustesRazonables from '@/components/wizard/AjustesRazonables';
import RecomendacionesInstitucionales from './step2/RecomendacionesInstitucionales';

// Step 3 Components
import Participantes from './step3/Participantes';
import Compromisos from './step3/Compromisos';
import Firmas from './step3/Firmas';

interface SectionRendererProps {
  currentStep: number;
  currentSection: number;
  formData: PiarFormData;
  handleInputChange: (id: string, value: any) => void;
}

const SectionRenderer: React.FC<SectionRendererProps> = ({
  currentStep,
  currentSection,
  formData,
  handleInputChange
}) => {
  const stepIndex = currentStep - 1;

  switch (stepIndex) {
    case 0: // Step 1
      switch (currentSection) {
        case 0: return <Encabezado formData={formData} handleInputChange={handleInputChange} />;
        case 1: return <Identificacion formData={formData} handleInputChange={handleInputChange} />;
        case 2: return <InfoGeneral formData={formData} handleInputChange={handleInputChange} />;
        case 3: return <EntornoSalud formData={formData} handleInputChange={handleInputChange} />;
        case 4: return <EntornoHogar formData={formData} handleInputChange={handleInputChange} />;
        case 5: return <EntornoEducativo formData={formData} handleInputChange={handleInputChange} />;
        default: return null;
      }
    case 1: // Step 2
      switch (currentSection) {
        case 0: return <DocentesResponsables formData={formData} handleInputChange={handleInputChange} />;
        case 1: return <CaracteristicasEstudiante formData={formData} handleInputChange={handleInputChange} />;
        case 2: return <AjustesRazonables formData={formData} onChange={handleInputChange} />;
        case 3: return <RecomendacionesInstitucionales formData={formData} handleInputChange={handleInputChange} />;
        default: return null;
      }
    case 2: // Step 3
      switch (currentSection) {
        case 0: return <Participantes formData={formData} handleInputChange={handleInputChange} />;
        case 1: return <Compromisos formData={formData} handleInputChange={handleInputChange} />;
        case 2: return <Firmas formData={formData} handleInputChange={handleInputChange} />;
        default: return null;
      }
    default:
      return null;
  }
};

export default SectionRenderer;

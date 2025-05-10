
import React from 'react';
import FormSection from '@/components/wizard/FormSection';
import FormField from '@/components/wizard/FormField';
import { SectionProps } from '@/types/piarFormTypes';

const Firmas: React.FC<SectionProps> = ({ formData, handleInputChange }) => {
  return (
    <FormSection title="Firmas">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <FormField
          id="firma_estudiante"
          label="Firma del Estudiante"
          required
          value={formData.firma_estudiante}
          onChange={(value) => handleInputChange("firma_estudiante", value)}
        />
        
        <FormField
          id="firma_acudiente"
          label="Firma del Acudiente"
          required
          value={formData.firma_acudiente}
          onChange={(value) => handleInputChange("firma_acudiente", value)}
        />
        
        <FormField
          id="firma_docente"
          label="Firma del Docente"
          required
          value={formData.firma_docente}
          onChange={(value) => handleInputChange("firma_docente", value)}
        />
        
        <FormField
          id="firma_directivo"
          label="Firma del Directivo"
          required
          value={formData.firma_directivo}
          onChange={(value) => handleInputChange("firma_directivo", value)}
        />
      </div>
    </FormSection>
  );
};

export default Firmas;

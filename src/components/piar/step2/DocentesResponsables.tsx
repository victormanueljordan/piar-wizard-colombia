
import React from 'react';
import FormSection from '@/components/wizard/FormSection';
import FormField from '@/components/wizard/FormField';
import { SectionProps } from '@/types/piarFormTypes';

const DocentesResponsables: React.FC<SectionProps> = ({ formData, handleInputChange }) => {
  return (
    <FormSection title="Docentes responsables del PIAR">
      <div className="grid grid-cols-1 gap-6">
        <FormField
          id="docentes_nombres_cargos"
          label="Nombres y Cargos de los Docentes Responsables"
          type="textarea"
          required
          value={formData.docentes_nombres_cargos}
          onChange={(value) => handleInputChange("docentes_nombres_cargos", value)}
        />
      </div>
    </FormSection>
  );
};

export default DocentesResponsables;


import React from 'react';
import FormSection from '@/components/wizard/FormSection';
import FormField from '@/components/wizard/FormField';
import { SectionProps } from '@/types/piarFormTypes';

const Participantes: React.FC<SectionProps> = ({ formData, handleInputChange }) => {
  return (
    <FormSection title="Participantes">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <FormField
          id="nombres_directivos_docentes"
          label="Nombres Directivos/Docentes"
          type="textarea"
          required
          value={formData.nombres_directivos_docentes}
          onChange={(value) => handleInputChange("nombres_directivos_docentes", value)}
        />
        
        <FormField
          id="nombres_familia"
          label="Nombres de Familiares"
          type="textarea"
          required
          value={formData.nombres_familia}
          onChange={(value) => handleInputChange("nombres_familia", value)}
        />
        
        <FormField
          id="parentesco_participantes"
          label="Parentesco"
          required
          value={formData.parentesco_participantes}
          onChange={(value) => handleInputChange("parentesco_participantes", value)}
        />
      </div>
    </FormSection>
  );
};

export default Participantes;

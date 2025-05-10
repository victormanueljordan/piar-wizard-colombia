
import React from 'react';
import FormSection from '@/components/wizard/FormSection';
import FormField from '@/components/wizard/FormField';
import { SectionProps } from '@/types/piarFormTypes';

const RecomendacionesInstitucionales: React.FC<SectionProps> = ({ formData, handleInputChange }) => {
  return (
    <FormSection title="Recomendaciones institucionales">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <FormField
          id="acciones"
          label="Acciones"
          type="textarea"
          required
          value={formData.acciones}
          onChange={(value) => handleInputChange("acciones", value)}
        />
        
        <FormField
          id="estrategias"
          label="Estrategias"
          type="textarea"
          required
          value={formData.estrategias}
          onChange={(value) => handleInputChange("estrategias", value)}
        />
        
        <FormField
          id="nombre_firma"
          label="Nombre y Firma"
          value={formData.nombre_firma}
          onChange={(value) => handleInputChange("nombre_firma", value)}
        />
        
        <FormField
          id="area"
          label="Área"
          value={formData.area}
          onChange={(value) => handleInputChange("area", value)}
        />
      </div>
    </FormSection>
  );
};

export default RecomendacionesInstitucionales;

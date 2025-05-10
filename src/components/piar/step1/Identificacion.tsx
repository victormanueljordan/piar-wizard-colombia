
import React from 'react';
import FormSection from '@/components/wizard/FormSection';
import FormField from '@/components/wizard/FormField';
import { SectionProps } from '@/types/piarFormTypes';

const Identificacion: React.FC<SectionProps> = ({ formData, handleInputChange }) => {
  return (
    <FormSection title="Identificación del estudiante">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <FormField
          id="nombre_estudiante"
          label="Nombre del Estudiante"
          required
          value={formData.nombre_estudiante}
          onChange={(value) => handleInputChange("nombre_estudiante", value)}
        />
        
        <FormField
          id="documento_identificacion"
          label="Documento de Identificación"
          required
          value={formData.documento_identificacion}
          onChange={(value) => handleInputChange("documento_identificacion", value)}
        />
        
        <FormField
          id="edad"
          label="Edad"
          type="number"
          required
          value={formData.edad}
          onChange={(value) => handleInputChange("edad", value)}
        />
        
        <FormField
          id="grado"
          label="Grado"
          required
          value={formData.grado}
          onChange={(value) => handleInputChange("grado", value)}
        />
      </div>
    </FormSection>
  );
};

export default Identificacion;

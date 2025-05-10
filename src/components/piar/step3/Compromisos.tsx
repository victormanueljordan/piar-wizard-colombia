
import React from 'react';
import FormSection from '@/components/wizard/FormSection';
import FormField from '@/components/wizard/FormField';
import { SectionProps } from '@/types/piarFormTypes';

const Compromisos: React.FC<SectionProps> = ({ formData, handleInputChange }) => {
  return (
    <FormSection title="Compromisos">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <FormField
          id="compromisos_aula"
          label="Compromisos en el Aula"
          type="textarea"
          required
          value={formData.compromisos_aula}
          onChange={(value) => handleInputChange("compromisos_aula", value)}
          className="md:col-span-2"
        />
        
        <FormField
          id="nombre_actividad"
          label="Nombre de la Actividad"
          required
          value={formData.nombre_actividad}
          onChange={(value) => handleInputChange("nombre_actividad", value)}
        />
        
        <FormField
          id="descripcion_actividad"
          label="Descripción de la Actividad"
          type="textarea"
          required
          value={formData.descripcion_actividad}
          onChange={(value) => handleInputChange("descripcion_actividad", value)}
        />
        
        <FormField
          id="frecuencia_actividad"
          label="Frecuencia de la Actividad"
          required
          value={formData.frecuencia_actividad}
          onChange={(value) => handleInputChange("frecuencia_actividad", value)}
        />
      </div>
    </FormSection>
  );
};

export default Compromisos;

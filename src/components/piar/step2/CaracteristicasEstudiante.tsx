
import React from 'react';
import FormSection from '@/components/wizard/FormSection';
import FormField from '@/components/wizard/FormField';
import { SectionProps } from '@/types/piarFormTypes';

const CaracteristicasEstudiante: React.FC<SectionProps> = ({ formData, handleInputChange }) => {
  return (
    <FormSection title="Características del Estudiante">
      <div className="grid grid-cols-1 gap-6">
        <FormField
          id="descripcion_general"
          label="Descripción General del Estudiante"
          type="textarea"
          required
          value={formData.descripcion_general}
          onChange={(value) => handleInputChange("descripcion_general", value)}
        />
        
        <FormField
          id="descripcion_apoyos"
          label="Descripción de Apoyos Requeridos"
          type="textarea"
          required
          value={formData.descripcion_apoyos}
          onChange={(value) => handleInputChange("descripcion_apoyos", value)}
        />
        
        <FormField
          id="habilidades_competencias"
          label="Habilidades y Competencias"
          type="textarea"
          required
          value={formData.habilidades_competencias}
          onChange={(value) => handleInputChange("habilidades_competencias", value)}
        />
      </div>
    </FormSection>
  );
};

export default CaracteristicasEstudiante;

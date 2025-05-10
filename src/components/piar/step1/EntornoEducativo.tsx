
import React from 'react';
import FormSection from '@/components/wizard/FormSection';
import FormField from '@/components/wizard/FormField';
import { SectionProps } from '@/types/piarFormTypes';
import { SI_NO_OPTIONS, TRANSPORTE_OPTIONS } from '@/constants/piarFormConstants';

const EntornoEducativo: React.FC<SectionProps> = ({ formData, handleInputChange }) => {
  return (
    <FormSection title="Entorno Educativo">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <FormField
          id="vinculado_otra_ie"
          label="¿Ha estado vinculado a otra IE?"
          type="select"
          required
          value={formData.vinculado_otra_ie}
          onChange={(value) => handleInputChange("vinculado_otra_ie", value)}
          options={SI_NO_OPTIONS}
        />
        
        <FormField
          id="ultimo_grado"
          label="Último Grado Cursado"
          required
          value={formData.ultimo_grado}
          onChange={(value) => handleInputChange("ultimo_grado", value)}
        />
        
        <FormField
          id="aprobo"
          label="¿Aprobó?"
          type="select"
          required
          value={formData.aprobo}
          onChange={(value) => handleInputChange("aprobo", value)}
          options={SI_NO_OPTIONS}
        />
        
        <FormField
          id="medio_transporte"
          label="Medio de Transporte"
          type="select"
          required
          value={formData.medio_transporte}
          onChange={(value) => handleInputChange("medio_transporte", value)}
          options={TRANSPORTE_OPTIONS}
        />
        
        <FormField
          id="tiempo_desplazamiento"
          label="Tiempo de Desplazamiento (minutos)"
          type="number"
          required
          value={formData.tiempo_desplazamiento}
          onChange={(value) => handleInputChange("tiempo_desplazamiento", value)}
        />
      </div>
    </FormSection>
  );
};

export default EntornoEducativo;

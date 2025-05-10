
import React from 'react';
import FormSection from '@/components/wizard/FormSection';
import FormField from '@/components/wizard/FormField';
import { SectionProps } from '@/types/piarFormTypes';
import { SI_NO_OPTIONS, NIVEL_EDUCATIVO_OPTIONS } from '@/constants/piarFormConstants';

const EntornoHogar: React.FC<SectionProps> = ({ formData, handleInputChange }) => {
  return (
    <FormSection title="Entorno Hogar">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <FormField
          id="nombre_cuidador"
          label="Nombre del Cuidador"
          required
          value={formData.nombre_cuidador}
          onChange={(value) => handleInputChange("nombre_cuidador", value)}
        />
        
        <FormField
          id="parentesco"
          label="Parentesco"
          required
          value={formData.parentesco}
          onChange={(value) => handleInputChange("parentesco", value)}
        />
        
        <FormField
          id="nivel_educativo_cuidador"
          label="Nivel Educativo del Cuidador"
          type="select"
          required
          value={formData.nivel_educativo_cuidador}
          onChange={(value) => handleInputChange("nivel_educativo_cuidador", value)}
          options={NIVEL_EDUCATIVO_OPTIONS}
        />
        
        <FormField
          id="telefono_cuidador"
          label="Teléfono del Cuidador"
          required
          value={formData.telefono_cuidador}
          onChange={(value) => handleInputChange("telefono_cuidador", value)}
        />
        
        <FormField
          id="bajo_proteccion"
          label="¿Bajo Protección?"
          type="select"
          required
          value={formData.bajo_proteccion}
          onChange={(value) => handleInputChange("bajo_proteccion", value)}
          options={SI_NO_OPTIONS}
        />
        
        <FormField
          id="recibe_subsidio"
          label="¿Recibe Subsidio?"
          type="select"
          required
          value={formData.recibe_subsidio}
          onChange={(value) => handleInputChange("recibe_subsidio", value)}
          options={SI_NO_OPTIONS}
        />
      </div>
    </FormSection>
  );
};

export default EntornoHogar;

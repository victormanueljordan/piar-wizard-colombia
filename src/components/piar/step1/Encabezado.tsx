
import React from 'react';
import FormSection from '@/components/wizard/FormSection';
import FormField from '@/components/wizard/FormField';
import { SectionProps } from '@/types/piarFormTypes';

const Encabezado: React.FC<SectionProps> = ({ formData, handleInputChange }) => {
  return (
    <FormSection title="Encabezado del formulario">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <FormField
          id="fecha_diligenciamiento"
          label="Fecha de Diligenciamiento"
          type="date"
          required
          value={formData.fecha_diligenciamiento}
          onChange={(value) => handleInputChange("fecha_diligenciamiento", value)}
        />
        
        <FormField
          id="lugar_diligenciamiento"
          label="Lugar de Diligenciamiento"
          required
          value={formData.lugar_diligenciamiento}
          onChange={(value) => handleInputChange("lugar_diligenciamiento", value)}
        />
        
        <FormField
          id="nombre_persona_diligencia"
          label="Nombre de quien Diligencia"
          required
          value={formData.nombre_persona_diligencia}
          onChange={(value) => handleInputChange("nombre_persona_diligencia", value)}
        />
        
        <FormField
          id="rol_en_ie"
          label="Rol en la IE"
          required
          value={formData.rol_en_ie}
          onChange={(value) => handleInputChange("rol_en_ie", value)}
        />
        
        <FormField
          id="institucion_educativa"
          label="Institución Educativa"
          required
          value={formData.institucion_educativa}
          onChange={(value) => handleInputChange("institucion_educativa", value)}
        />
        
        <FormField
          id="sede"
          label="Sede"
          required
          value={formData.sede}
          onChange={(value) => handleInputChange("sede", value)}
        />
        
        <FormField
          id="jornada"
          label="Jornada"
          required
          value={formData.jornada}
          onChange={(value) => handleInputChange("jornada", value)}
        />
      </div>
    </FormSection>
  );
};

export default Encabezado;

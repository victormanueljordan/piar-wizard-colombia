
import React from 'react';
import FormSection from '@/components/wizard/FormSection';
import FormField from '@/components/wizard/FormField';
import { SectionProps } from '@/types/piarFormTypes';
import { TIPO_DOCUMENTO_OPTIONS, SI_NO_OPTIONS } from '@/constants/piarFormConstants';

const InfoGeneral: React.FC<SectionProps> = ({ formData, handleInputChange }) => {
  return (
    <FormSection title="Información general del estudiante">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <FormField
          id="nombres_apellidos"
          label="Nombres y Apellidos"
          required
          value={formData.nombres_apellidos}
          onChange={(value) => handleInputChange("nombres_apellidos", value)}
        />
        
        <FormField
          id="lugar_nacimiento"
          label="Lugar de Nacimiento"
          required
          value={formData.lugar_nacimiento}
          onChange={(value) => handleInputChange("lugar_nacimiento", value)}
        />
        
        <FormField
          id="fecha_nacimiento"
          label="Fecha de Nacimiento"
          type="date"
          required
          value={formData.fecha_nacimiento}
          onChange={(value) => handleInputChange("fecha_nacimiento", value)}
        />
        
        <FormField
          id="tipo_documento"
          label="Tipo de Documento"
          type="select"
          required
          value={formData.tipo_documento}
          onChange={(value) => handleInputChange("tipo_documento", value)}
          options={TIPO_DOCUMENTO_OPTIONS}
        />
        
        <FormField
          id="numero_identificacion"
          label="Número de Identificación"
          required
          value={formData.numero_identificacion}
          onChange={(value) => handleInputChange("numero_identificacion", value)}
        />
        
        <FormField
          id="departamento"
          label="Departamento"
          required
          value={formData.departamento}
          onChange={(value) => handleInputChange("departamento", value)}
        />
        
        <FormField
          id="municipio"
          label="Municipio"
          required
          value={formData.municipio}
          onChange={(value) => handleInputChange("municipio", value)}
        />
        
        <FormField
          id="direccion"
          label="Dirección"
          required
          value={formData.direccion}
          onChange={(value) => handleInputChange("direccion", value)}
        />
        
        <FormField
          id="telefono"
          label="Teléfono"
          required
          value={formData.telefono}
          onChange={(value) => handleInputChange("telefono", value)}
        />
        
        <FormField
          id="centro_proteccion"
          label="¿Está bajo protección de centro especializado?"
          type="select"
          required
          value={formData.centro_proteccion}
          onChange={(value) => handleInputChange("centro_proteccion", value)}
          options={SI_NO_OPTIONS}
        />
        
        <FormField
          id="grado_aspira"
          label="Grado al que Aspira"
          required
          value={formData.grado_aspira}
          onChange={(value) => handleInputChange("grado_aspira", value)}
        />
      </div>
    </FormSection>
  );
};

export default InfoGeneral;

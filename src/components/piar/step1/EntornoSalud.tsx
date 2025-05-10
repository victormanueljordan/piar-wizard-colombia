
import React from 'react';
import FormSection from '@/components/wizard/FormSection';
import FormField from '@/components/wizard/FormField';
import { SectionProps } from '@/types/piarFormTypes';
import { SI_NO_OPTIONS, REGIMEN_OPTIONS } from '@/constants/piarFormConstants';

const EntornoSalud: React.FC<SectionProps> = ({ formData, handleInputChange }) => {
  return (
    <FormSection title="Entorno Salud">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <FormField
          id="afiliado_salud"
          label="¿Afiliado a Salud?"
          type="select"
          required
          value={formData.afiliado_salud}
          onChange={(value) => handleInputChange("afiliado_salud", value)}
          options={SI_NO_OPTIONS}
        />
        
        <FormField
          id="regimen"
          label="Régimen"
          type="select"
          required
          value={formData.regimen}
          onChange={(value) => handleInputChange("regimen", value)}
          options={REGIMEN_OPTIONS}
        />
        
        <FormField
          id="atendido_salud"
          label="¿Ha sido atendido por el sistema de salud?"
          type="select"
          required
          value={formData.atendido_salud}
          onChange={(value) => handleInputChange("atendido_salud", value)}
          options={SI_NO_OPTIONS}
        />
        
        <FormField
          id="tiene_diagnostico"
          label="¿Cuenta con diagnóstico médico?"
          type="select"
          required
          value={formData.tiene_diagnostico}
          onChange={(value) => handleInputChange("tiene_diagnostico", value)}
          options={SI_NO_OPTIONS}
        />
        
        <FormField
          id="recibe_tratamiento"
          label="¿Recibe tratamiento médico?"
          type="select"
          required
          value={formData.recibe_tratamiento}
          onChange={(value) => handleInputChange("recibe_tratamiento", value)}
          options={SI_NO_OPTIONS}
        />
      </div>
    </FormSection>
  );
};

export default EntornoSalud;

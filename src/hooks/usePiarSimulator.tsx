
import React, { createContext, useContext, useState } from 'react';

interface PiarData {
  anexo1: {
    prompt_institucion?: boolean;
    institucion_educativa?: string;
    sede?: string;
    jornada?: string;
  };
  anexo2: {
    docentes_responsables?: string;
    apoyos?: string;
    habilidades?: string;
  };
  anexo3: {
    participacion_familiar?: string;
    accesibilidad?: string;
    contexto?: string;
  };
}

interface PiarSimulatorContextType {
  piarData: PiarData;
  updatePiarData: (section: string, field: string, value: any) => void;
}

const PiarSimulatorContext = createContext<PiarSimulatorContextType | undefined>(undefined);

export const PiarSimulatorProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [piarData, setPiarData] = useState<PiarData>({
    anexo1: {},
    anexo2: {},
    anexo3: {}
  });

  const updatePiarData = (section: string, field: string, value: any) => {
    setPiarData(prev => ({
      ...prev,
      [section]: {
        ...prev[section as keyof PiarData],
        [field]: value
      }
    }));
  };

  return (
    <PiarSimulatorContext.Provider value={{ piarData, updatePiarData }}>
      {children}
    </PiarSimulatorContext.Provider>
  );
};

export const usePiarSimulator = () => {
  const context = useContext(PiarSimulatorContext);
  if (context === undefined) {
    throw new Error('usePiarSimulator must be used within a PiarSimulatorProvider');
  }
  return context;
};

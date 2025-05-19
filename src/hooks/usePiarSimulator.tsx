
import React, { createContext, useContext, useState } from 'react';

interface PiarData {
  anexo1: {
    prompt_institucion?: boolean;
    institucion_educativa?: string;
    sede?: string;
    jornada?: string;
    nombre_estudiante?: string;
    fecha_nacimiento?: string;
    documento_identidad?: string;
    direccion?: string;
    diagnostico_medico?: string;
    productos_apoyo?: string;
    terapias?: string;
    info_familia?: string;
    trayectoria_educativa?: string;
  };
  anexo2: {
    docentes_responsables?: string;
    apoyos?: string;
    habilidades?: string;
    descripcion_estudiante?: string;
    habilidades_actuales?: string;
    barreras_aprendizaje?: string;
    participacion_extracurricular?: string;
    estilo_aprendizaje?: string;
    ajustes_razonables?: string;
    estrategias_metodologicas?: string;
    recursos_didacticos?: string;
  };
  anexo3: {
    participacion_familiar?: string;
    accesibilidad?: string;
    contexto?: string;
    asignaturas_focales?: string;
    cronograma_ajustes?: string;
    indicadores_seguimiento?: string;
    plan_trabajo_aula?: string;
    recomendaciones_pmi?: string;
  };
}

interface PiarSimulatorContextType {
  piarData: PiarData;
  updatePiarData: (section: string, field: string, value: any) => void;
  generateWithAI: (section: string, field: string) => Promise<void>;
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

  // Simulated AI generation function
  const generateWithAI = async (section: string, field: string) => {
    // In a real implementation, this would connect to an LLM API
    const placeholderResponses: Record<string, string> = {
      ajustes_razonables: "Se implementarán materiales adaptados con alto contraste y tamaño de letra aumentado. Se ubicará al estudiante en primera fila para facilitar su visualización de la pizarra. Se proporcionará tiempo adicional para completar actividades escritas.",
      estrategias_metodologicas: "Implementación de explicaciones verbales detalladas para complementar el material visual. Uso de recursos táctiles y manipulativos para facilitar la comprensión de conceptos abstractos. Alternancia entre actividades individuales y grupales para mantener el interés.",
      recursos_didacticos: "Material didáctico con letra ampliada y alto contraste. Grabaciones de audio complementarias para reforzar el contenido. Software de lectura de pantalla para actividades digitales. Guías impresas con instrucciones paso a paso.",
      cronograma_ajustes: "Semana 1-4: Implementación de ajustes iniciales y evaluación de respuesta. Semana 5-8: Revisión y ajuste de estrategias según resultados observados. Semana 9-12: Consolidación de prácticas efectivas e introducción de nuevos elementos según sea necesario.",
      indicadores_seguimiento: "Participación activa en clase (registro semanal). Completitud de tareas asignadas con ajustes (porcentaje). Avance en objetivos académicos específicos (evaluación mensual). Autoevaluación del estudiante sobre su proceso (formato adaptado).",
      plan_trabajo_aula: "Lunes: Introducción de conceptos con material adaptado. Miércoles: Actividades prácticas con apoyo personalizado. Viernes: Evaluación formativa adaptada y retroalimentación específica.",
      recomendaciones_pmi: "Capacitar al personal docente en estrategias para estudiantes con necesidades similares. Adquirir recursos didácticos especializados para el aula de recursos. Establecer un protocolo de comunicación efectiva entre el equipo de apoyo y los docentes de aula."
    };

    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 1500));

    // Update the state with the "AI-generated" content
    updatePiarData(section, field, placeholderResponses[field] || "Contenido generado por IA para este campo.");
  };

  return (
    <PiarSimulatorContext.Provider value={{ piarData, updatePiarData, generateWithAI }}>
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

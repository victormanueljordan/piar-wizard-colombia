
import React from 'react';
import { ScrollArea } from "@/components/ui/scroll-area";
import FormSection from '@/components/wizard/FormSection';
import { usePiarSimulator } from '@/hooks/usePiarSimulator';
import { Button } from '@/components/ui/button';
import { Wand2 } from 'lucide-react';
import { Skeleton } from "@/components/ui/skeleton";

interface PiarPreviewProps {
  section: 'anexo1' | 'anexo2' | 'anexo3';
  loading?: Record<string, boolean>;
}

const PiarPreview: React.FC<PiarPreviewProps> = ({ section, loading = {} }) => {
  const { piarData, generateWithAI } = usePiarSimulator();
  
  const handleGenerateWithAI = (field: string) => {
    generateWithAI(section, field);
  };
  
  const renderAnexo1 = () => {
    return (
      <>
        <FormSection title="Información General">
          <div className="grid grid-cols-1 gap-4">
            <InfoField 
              label="Institución Educativa" 
              value={piarData.anexo1.institucion_educativa} 
            />
            <InfoField 
              label="Sede" 
              value={piarData.anexo1.sede} 
            />
            <InfoField 
              label="Fecha de Diligenciamiento" 
              value={new Date().toLocaleDateString()} 
            />
            <InfoField 
              label="Nombre del Estudiante" 
              value={localStorage.getItem('piar_student_data') ? 
                JSON.parse(localStorage.getItem('piar_student_data') || '{}').nombre_estudiante : 
                piarData.anexo1.nombre_estudiante} 
            />
            <InfoField 
              label="Fecha de Nacimiento" 
              value={piarData.anexo1.fecha_nacimiento} 
            />
            <InfoField 
              label="Documento de Identidad" 
              value={localStorage.getItem('piar_student_data') ? 
                JSON.parse(localStorage.getItem('piar_student_data') || '{}').documento_identificacion : 
                piarData.anexo1.documento_identidad} 
            />
            <InfoField 
              label="Dirección" 
              value={piarData.anexo1.direccion} 
            />
            <InfoField 
              label="Diagnóstico Médico" 
              value={piarData.anexo1.diagnostico_medico} 
            />
            <InfoField 
              label="Productos de Apoyo" 
              value={piarData.anexo1.productos_apoyo} 
            />
            <InfoField 
              label="Terapias" 
              value={piarData.anexo1.terapias} 
            />
            <InfoField 
              label="Información Familiar" 
              value={piarData.anexo1.info_familia} 
            />
            <InfoField 
              label="Trayectoria Educativa" 
              value={piarData.anexo1.trayectoria_educativa} 
            />
          </div>
        </FormSection>
      </>
    );
  };
  
  const renderAnexo2 = () => {
    return (
      <>
        <FormSection title="Valoración Pedagógica">
          <div className="grid grid-cols-1 gap-4">
            <InfoField 
              label="Docentes Responsables" 
              value={piarData.anexo2.docentes_responsables} 
            />
            <InfoField 
              label="Descripción del Estudiante" 
              value={piarData.anexo2.descripcion_estudiante} 
            />
            <InfoField 
              label="Habilidades Actuales" 
              value={piarData.anexo2.habilidades_actuales} 
            />
            <InfoField 
              label="Barreras para el Aprendizaje" 
              value={piarData.anexo2.barreras_aprendizaje} 
            />
            <InfoField 
              label="Participación Extracurricular" 
              value={piarData.anexo2.participacion_extracurricular} 
            />
            <InfoField 
              label="Estilo de Aprendizaje" 
              value={piarData.anexo2.estilo_aprendizaje} 
            />
            <InfoFieldWithAI 
              label="Ajustes Razonables" 
              value={piarData.anexo2.ajustes_razonables} 
              fieldName="ajustes_razonables"
              onGenerateAI={handleGenerateWithAI}
              isLoading={loading?.ajustes_razonables}
            />
            <InfoFieldWithAI 
              label="Estrategias Metodológicas" 
              value={piarData.anexo2.estrategias_metodologicas} 
              fieldName="estrategias_metodologicas"
              onGenerateAI={handleGenerateWithAI}
              isLoading={loading?.estrategias_metodologicas}
            />
            <InfoFieldWithAI 
              label="Recursos Didácticos" 
              value={piarData.anexo2.recursos_didacticos} 
              fieldName="recursos_didacticos"
              onGenerateAI={handleGenerateWithAI}
              isLoading={loading?.recursos_didacticos}
            />
          </div>
        </FormSection>
      </>
    );
  };
  
  const renderAnexo3 = () => {
    return (
      <>
        <FormSection title="Compromisos en el Aula">
          <div className="grid grid-cols-1 gap-4">
            <InfoField 
              label="Asignaturas Focales" 
              value={piarData.anexo3.asignaturas_focales} 
            />
            <InfoFieldWithAI 
              label="Cronograma de Ajustes" 
              value={piarData.anexo3.cronograma_ajustes} 
              fieldName="cronograma_ajustes"
              onGenerateAI={handleGenerateWithAI}
              isLoading={loading?.cronograma_ajustes}
            />
            <InfoFieldWithAI 
              label="Indicadores de Seguimiento" 
              value={piarData.anexo3.indicadores_seguimiento} 
              fieldName="indicadores_seguimiento"
              onGenerateAI={handleGenerateWithAI}
              isLoading={loading?.indicadores_seguimiento}
            />
            <InfoFieldWithAI 
              label="Plan de Trabajo en el Aula" 
              value={piarData.anexo3.plan_trabajo_aula} 
              fieldName="plan_trabajo_aula"
              onGenerateAI={handleGenerateWithAI}
              isLoading={loading?.plan_trabajo_aula}
            />
            <InfoFieldWithAI 
              label="Recomendaciones PMI" 
              value={piarData.anexo3.recomendaciones_pmi} 
              fieldName="recomendaciones_pmi"
              onGenerateAI={handleGenerateWithAI}
              isLoading={loading?.recomendaciones_pmi}
            />
          </div>
        </FormSection>
      </>
    );
  };

  return (
    <ScrollArea className="h-[600px] p-4">
      {section === 'anexo1' && renderAnexo1()}
      {section === 'anexo2' && renderAnexo2()}
      {section === 'anexo3' && renderAnexo3()}
      
      {/* Empty state when no data is available */}
      {((section === 'anexo1' && !Object.values(piarData.anexo1).some(Boolean)) ||
        (section === 'anexo2' && !Object.values(piarData.anexo2).some(Boolean)) ||
        (section === 'anexo3' && !Object.values(piarData.anexo3).some(Boolean))) && (
        <div className="flex flex-col items-center justify-center h-96 text-center p-4">
          <div className="text-4xl mb-4 text-gray-300">📝</div>
          <h3 className="text-xl font-medium text-gray-500">Información pendiente</h3>
          <p className="text-gray-400 mt-2 max-w-md">
            Interactúa con el asistente en el chat para completar esta sección del PIAR
          </p>
        </div>
      )}
    </ScrollArea>
  );
};

// Helper component for displaying field/value pairs
const InfoField = ({ label, value }: { label: string; value?: string }) => {
  if (!value) return null;
  
  return (
    <div className="border-b pb-2">
      <p className="text-sm font-medium text-gray-500">{label}</p>
      <p className="text-base">{value}</p>
    </div>
  );
};

// Helper component for displaying field/value pairs with AI generation button
const InfoFieldWithAI = ({ 
  label, 
  value, 
  fieldName,
  onGenerateAI,
  isLoading
}: { 
  label: string; 
  value?: string;
  fieldName: string;
  onGenerateAI: (fieldName: string) => void;
  isLoading?: boolean;
}) => {
  return (
    <div className="border-b pb-2">
      <div className="flex justify-between items-center mb-1">
        <p className="text-sm font-medium text-gray-500">{label}</p>
        {!value && (
          <Button 
            variant="outline" 
            size="sm" 
            className="flex items-center text-xs h-7 px-2"
            onClick={() => onGenerateAI(fieldName)}
            disabled={isLoading}
          >
            <Wand2 className="h-3 w-3 mr-1" />
            {isLoading ? "Generando..." : "Llenar con IA"}
          </Button>
        )}
      </div>
      {isLoading ? (
        <Skeleton className="w-full h-16" />
      ) : (
        value ? <p className="text-base">{value}</p> : <p className="text-xs text-gray-400 italic">Pendiente de completar</p>
      )}
    </div>
  );
};

export default PiarPreview;

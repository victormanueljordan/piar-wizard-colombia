
import React from 'react';
import { ScrollArea } from "@/components/ui/scroll-area";
import { Card, CardContent } from "@/components/ui/card";
import FormSection from '@/components/wizard/FormSection';
import { usePiarSimulator } from '@/hooks/usePiarSimulator';

interface PiarPreviewProps {
  section: 'anexo1' | 'anexo2' | 'anexo3';
}

const PiarPreview: React.FC<PiarPreviewProps> = ({ section }) => {
  const { piarData } = usePiarSimulator();
  
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
          </div>
        </FormSection>
        
        <FormSection title="Datos del Estudiante">
          <div className="grid grid-cols-1 gap-4">
            <InfoField 
              label="Nombre del Estudiante" 
              value={localStorage.getItem('piar_student_data') ? 
                JSON.parse(localStorage.getItem('piar_student_data') || '{}').nombre_estudiante : ''} 
            />
            <InfoField 
              label="Número de Identificación" 
              value={localStorage.getItem('piar_student_data') ? 
                JSON.parse(localStorage.getItem('piar_student_data') || '{}').documento_identificacion : ''} 
            />
          </div>
        </FormSection>
      </>
    );
  };
  
  const renderAnexo2 = () => {
    return (
      <>
        <FormSection title="Docentes Responsables">
          <div className="grid grid-cols-1 gap-4">
            <InfoField 
              label="Docentes Responsables" 
              value={piarData.anexo2.docentes_responsables} 
            />
          </div>
        </FormSection>
        
        <FormSection title="Apoyos y Ajustes Razonables">
          <div className="grid grid-cols-1 gap-4">
            <InfoField 
              label="Apoyos Requeridos" 
              value={piarData.anexo2.apoyos} 
            />
            <InfoField 
              label="Habilidades Destacadas" 
              value={piarData.anexo2.habilidades} 
            />
          </div>
        </FormSection>
      </>
    );
  };
  
  const renderAnexo3 = () => {
    return (
      <>
        <FormSection title="Participación y Seguimiento">
          <div className="grid grid-cols-1 gap-4">
            <InfoField 
              label="Participación Familiar" 
              value={piarData.anexo3.participacion_familiar} 
            />
            <InfoField 
              label="Necesidades de Accesibilidad" 
              value={piarData.anexo3.accesibilidad} 
            />
            <InfoField 
              label="Contexto Social/Comunitario" 
              value={piarData.anexo3.contexto} 
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
      {((section === 'anexo1' && !piarData.anexo1.prompt_institucion) ||
        (section === 'anexo2' && !piarData.anexo2.docentes_responsables) ||
        (section === 'anexo3' && !piarData.anexo3.participacion_familiar)) && (
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

export default PiarPreview;

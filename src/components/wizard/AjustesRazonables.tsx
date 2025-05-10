import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import FormSection from '@/components/wizard/FormSection';
import FormField from '@/components/wizard/FormField';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { PlusCircle, Sparkles } from 'lucide-react';
import { toast } from 'sonner';

// Mock data for DBA options - this would come from your database in a real implementation
const DBA_OPTIONS = [
  { value: 'dba1', label: 'Comprende y aplica conceptos de números naturales' },
  { value: 'dba2', label: 'Resuelve problemas aditivos y multiplicativos' },
  { value: 'dba3', label: 'Identifica y analiza propiedades de figuras geométricas' },
  { value: 'dba4', label: 'Comprende textos literarios y los relaciona con su contexto' },
  { value: 'dba5', label: 'Reconoce fenómenos naturales y los explica científicamente' },
];

// Mock areas
const AREAS_OPTIONS = [
  { value: 'matematicas', label: 'Matemáticas' },
  { value: 'ciencias', label: 'Ciencias Naturales' },
  { value: 'lenguaje', label: 'Lenguaje' },
  { value: 'sociales', label: 'Ciencias Sociales' },
  { value: 'artes', label: 'Educación Artística' },
  { value: 'fisica', label: 'Educación Física' },
  { value: 'otra', label: 'Otra' },
];

interface AjustesRazonablesProps {
  formData: any;
  onChange: (id: string, value: any) => void;
}

interface AreaAjuste {
  id: string;
  area: string;
  objetivo: string;
  barreras: string;
  ajustes: string;
  evaluacion: string;
}

const generateWithAI = (field: string, objetivo: string): Promise<string> => {
  // Here you would connect to an actual AI API
  // For now, we'll just return placeholder suggestions after a delay
  return new Promise((resolve) => {
    setTimeout(() => {
      const suggestions = {
        barreras: `Sugerencia de barrera para el objetivo: "${objetivo}". El estudiante puede presentar dificultades para comprender conceptos abstractos y mantener la atención en tareas que requieren concentración prolongada.`,
        ajustes: `Sugerencia de ajuste razonable para el objetivo: "${objetivo}". Utilizar material concreto, realizar actividades con apoyo visual, dividir las tareas en pasos más pequeños y ofrecer mayor tiempo para completarlas.`,
        evaluacion: `Sugerencia de evaluación para el objetivo: "${objetivo}". Realizar evaluación continua mediante observación directa, permitir demostraciones prácticas de los conceptos aprendidos y valorar el proceso más que el resultado final.`,
      };
      
      resolve(suggestions[field as keyof typeof suggestions] || "No se pudo generar una sugerencia.");
    }, 1500);
  });
};

const AjustesRazonables: React.FC<AjustesRazonablesProps> = ({ formData, onChange }) => {
  const [activeTab, setActiveTab] = useState('trimestre1');
  const [trimestreData, setTrimestreData] = useState<{
    trimestre1: AreaAjuste[];
    trimestre2: AreaAjuste[];
    trimestre3: AreaAjuste[];
  }>({
    trimestre1: [],
    trimestre2: [],
    trimestre3: [],
  });
  const [loadingAI, setLoadingAI] = useState<{[key: string]: boolean}>({});
  const [animatingButton, setAnimatingButton] = useState<{[key: string]: boolean}>({});

  const handleAddArea = (trimestre: string) => {
    const newArea: AreaAjuste = {
      id: `area_${Date.now()}`,
      area: '',
      objetivo: '',
      barreras: '',
      ajustes: '',
      evaluacion: ''
    };

    setTrimestreData(prev => ({
      ...prev,
      [trimestre]: [...prev[trimestre as keyof typeof prev], newArea]
    }));
  };

  const handleAreaChange = (trimestre: string, areaIndex: number, field: string, value: any) => {
    setTrimestreData(prev => {
      const updatedAreas = [...prev[trimestre as keyof typeof prev]];
      updatedAreas[areaIndex] = {
        ...updatedAreas[areaIndex],
        [field]: value
      };
      return {
        ...prev,
        [trimestre]: updatedAreas
      };
    });

    // Also update the main form data for saving
    onChange(`ajustes_${trimestre}`, trimestreData[trimestre as keyof typeof trimestreData]);
  };

  const handleGenerateAI = async (trimestre: string, areaIndex: number, field: string) => {
    const area = trimestreData[trimestre as keyof typeof trimestreData][areaIndex];
    const loadingKey = `${trimestre}_${areaIndex}_${field}`;
    
    if (!area.objetivo) {
      toast.error("Debe seleccionar un objetivo/propósito primero");
      return;
    }
    
    setLoadingAI(prev => ({ ...prev, [loadingKey]: true }));
    setAnimatingButton(prev => ({ ...prev, [loadingKey]: true }));
    
    try {
      const suggestion = await generateWithAI(field, area.objetivo);
      handleAreaChange(trimestre, areaIndex, field, suggestion);
      toast.success("Sugerencia generada exitosamente");
    } catch (error) {
      toast.error("Error al generar la sugerencia");
      console.error("Error generating AI suggestion:", error);
    } finally {
      setLoadingAI(prev => ({ ...prev, [loadingKey]: false }));
      // Let the animation complete before turning it off
      setTimeout(() => {
        setAnimatingButton(prev => ({ ...prev, [loadingKey]: false }));
      }, 1000);
    }
  };

  return (
    <FormSection title="Ajustes Razonables">
      <Tabs value={activeTab} onValueChange={setActiveTab}>
        <TabsList className="grid grid-cols-3 mb-6">
          <TabsTrigger value="trimestre1">Trimestre 1</TabsTrigger>
          <TabsTrigger value="trimestre2">Trimestre 2</TabsTrigger>
          <TabsTrigger value="trimestre3">Trimestre 3</TabsTrigger>
        </TabsList>
        
        {['trimestre1', 'trimestre2', 'trimestre3'].map((trimestre) => (
          <TabsContent key={trimestre} value={trimestre}>
            <div className="mb-4 flex justify-between items-center">
              <h3 className="text-lg font-medium">
                {trimestre === 'trimestre1' ? 'Primer trimestre' : 
                 trimestre === 'trimestre2' ? 'Segundo trimestre' : 'Tercer trimestre'}
              </h3>
              <Button 
                onClick={() => handleAddArea(trimestre)}
                variant="outline"
                className="flex items-center"
              >
                <PlusCircle className="w-4 h-4 mr-2" />
                Agregar Área
              </Button>
            </div>

            {trimestreData[trimestre as keyof typeof trimestreData].length === 0 && (
              <div className="text-center py-10 text-gray-500">
                No hay áreas añadidas. Haga clic en "Agregar Área" para comenzar.
              </div>
            )}

            <Accordion type="single" collapsible className="w-full">
              {trimestreData[trimestre as keyof typeof trimestreData].map((area, areaIndex) => (
                <AccordionItem key={area.id} value={area.id}>
                  <AccordionTrigger className="font-medium">
                    {area.area ? AREAS_OPTIONS.find(opt => opt.value === area.area)?.label || area.area : "Nueva Área"}
                  </AccordionTrigger>
                  <AccordionContent>
                    <div className="space-y-4 py-2">
                      <FormField
                        id={`area_${area.id}`}
                        label="Área"
                        type="select"
                        options={AREAS_OPTIONS}
                        value={area.area}
                        onChange={(value) => handleAreaChange(trimestre, areaIndex, 'area', value)}
                      />

                      <FormField
                        id={`objetivo_${area.id}`}
                        label="Objetivo/Propósito (DBA)"
                        type="select"
                        options={DBA_OPTIONS}
                        value={area.objetivo}
                        onChange={(value) => handleAreaChange(trimestre, areaIndex, 'objetivo', value)}
                      />

                      <div className="border p-4 rounded-md bg-gray-50">
                        <FormField
                          id={`barreras_${area.id}`}
                          label="Barreras Evidenciadas"
                          type="textarea"
                          value={area.barreras}
                          onChange={(value) => handleAreaChange(trimestre, areaIndex, 'barreras', value)}
                        />
                        <div className="flex justify-end mt-2">
                          <Button 
                            variant="outline" 
                            size="sm" 
                            onClick={() => handleGenerateAI(trimestre, areaIndex, 'barreras')}
                            disabled={loadingAI[`${trimestre}_${areaIndex}_barreras`]}
                            className={`bg-gradient-to-r from-purple-500 to-blue-500 text-white hover:bg-gradient-to-r hover:from-purple-600 hover:to-blue-600 transition-all ${animatingButton[`${trimestre}_${areaIndex}_barreras`] ? 'animate-enter' : ''}`}
                          >
                            <Sparkles className="w-4 h-4 mr-2" />
                            {loadingAI[`${trimestre}_${areaIndex}_barreras`] ? 'Generando...' : 'Generar sugerencia con IA'}
                          </Button>
                        </div>
                      </div>

                      <div className="border p-4 rounded-md bg-gray-50">
                        <FormField
                          id={`ajustes_${area.id}`}
                          label="Ajustes Razonables"
                          type="textarea"
                          value={area.ajustes}
                          onChange={(value) => handleAreaChange(trimestre, areaIndex, 'ajustes', value)}
                        />
                        <div className="flex justify-end mt-2">
                          <Button 
                            variant="outline" 
                            size="sm" 
                            onClick={() => handleGenerateAI(trimestre, areaIndex, 'ajustes')}
                            disabled={loadingAI[`${trimestre}_${areaIndex}_ajustes`]}
                            className={`bg-gradient-to-r from-purple-500 to-blue-500 text-white hover:bg-gradient-to-r hover:from-purple-600 hover:to-blue-600 transition-all ${animatingButton[`${trimestre}_${areaIndex}_ajustes`] ? 'animate-enter' : ''}`}
                          >
                            <Sparkles className="w-4 h-4 mr-2" />
                            {loadingAI[`${trimestre}_${areaIndex}_ajustes`] ? 'Generando...' : 'Generar sugerencia con IA'}
                          </Button>
                        </div>
                      </div>

                      <div className="border p-4 rounded-md bg-gray-50">
                        <FormField
                          id={`evaluacion_${area.id}`}
                          label="Evaluación de Ajustes"
                          type="textarea"
                          value={area.evaluacion}
                          onChange={(value) => handleAreaChange(trimestre, areaIndex, 'evaluacion', value)}
                        />
                        <div className="flex justify-end mt-2">
                          <Button 
                            variant="outline" 
                            size="sm" 
                            onClick={() => handleGenerateAI(trimestre, areaIndex, 'evaluacion')}
                            disabled={loadingAI[`${trimestre}_${areaIndex}_evaluacion`]}
                            className={`bg-gradient-to-r from-purple-500 to-blue-500 text-white hover:bg-gradient-to-r hover:from-purple-600 hover:to-blue-600 transition-all ${animatingButton[`${trimestre}_${areaIndex}_evaluacion`] ? 'animate-enter' : ''}`}
                          >
                            <Sparkles className="w-4 h-4 mr-2" />
                            {loadingAI[`${trimestre}_${areaIndex}_evaluacion`] ? 'Generando...' : 'Generar sugerencia con IA'}
                          </Button>
                        </div>
                      </div>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </TabsContent>
        ))}
      </Tabs>
    </FormSection>
  );
};

export default AjustesRazonables;

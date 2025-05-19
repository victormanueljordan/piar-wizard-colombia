
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '@/components/Header';
import AnimatedBackground from '@/components/AnimatedBackground';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Download, InfoIcon } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useToast } from '@/hooks/use-toast';
import { Alert, AlertTitle, AlertDescription } from "@/components/ui/alert";
import PiarChatSimulator from '@/components/simulator/PiarChatSimulator';
import PiarPreview from '@/components/simulator/PiarPreview';
import { PiarSimulatorProvider } from '@/hooks/usePiarSimulator';

const PiarSimulator = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [studentData, setStudentData] = useState<any>(null);
  const [showIncompleteAlert, setShowIncompleteAlert] = useState(false);
  const [loadingFields, setLoadingFields] = useState<Record<string, boolean>>({});
  const [progress, setProgress] = useState({
    overall: 10,
    anexo1: 15,
    anexo2: 5,
    anexo3: 0
  });

  // Load student data from localStorage
  useEffect(() => {
    const storedData = localStorage.getItem('piar_student_data');
    if (!storedData) {
      toast({
        title: "Datos no encontrados",
        description: "No hay información del estudiante. Serás redirigido al formulario.",
        variant: "destructive",
      });
      navigate('/crear-piar');
      return;
    }
    setStudentData(JSON.parse(storedData));
  }, [navigate, toast]);

  const handleGeneratePDF = () => {
    if (progress.overall < 100) {
      setShowIncompleteAlert(true);
      toast({
        title: "PIAR incompleto",
        description: "Este PIAR aún no está completo. Puedes continuar más adelante o descargar lo que llevas hasta ahora.",
      });
    } else {
      // PDF generation logic would go here in a real implementation
      toast({
        title: "Generando PDF",
        description: "Tu PIAR se está generando y pronto estará listo para descargar.",
      });
    }
  };

  // Function to be passed to context for handling AI field generation
  const setFieldLoading = (fieldName: string, isLoading: boolean) => {
    setLoadingFields(prev => ({
      ...prev,
      [fieldName]: isLoading
    }));
  };

  if (!studentData) return null;

  return (
    <PiarSimulatorProvider>
      <div className="min-h-screen bg-gray-50 flex flex-col relative">
        <AnimatedBackground type="gradient" intensity="low" />
        <Header userName="docente" />
        
        <main className="flex-1 container max-w-screen-xl mx-auto px-4 py-6">
          <Alert className="mb-6 bg-blue-50 border-blue-200">
            <InfoIcon className="h-4 w-4 text-blue-500 mr-2" />
            <AlertDescription className="text-blue-700">
              <strong>Modo demostración:</strong> Este simulador permite crear campos específicos de los anexos del PIAR 
              con el objetivo de presentar la funcionalidad de la herramienta. El PIAR generado es únicamente una muestra 
              y no debe utilizarse como documento oficial en instituciones educativas. Cualquier documento descargado 
              incluirá una marca de agua para prevenir su uso inadecuado.
            </AlertDescription>
          </Alert>
          
          <div className="flex justify-between items-center mb-6">
            <div>
              <h1 className="text-2xl font-bold text-gray-800">Creación Asistida del PIAR</h1>
              <p className="text-gray-600">Estudiante: {studentData.nombre_estudiante}</p>
            </div>
            
            <Button 
              onClick={handleGeneratePDF} 
              className="bg-piar-green hover:bg-green-600 transition-all duration-300 flex items-center shadow-md hover:shadow-lg"
            >
              <Download className="h-4 w-4 mr-2" />
              Generar PDF del PIAR
            </Button>
          </div>
          
          {showIncompleteAlert && (
            <Alert className="mb-6">
              <AlertTitle>PIAR incompleto</AlertTitle>
              <AlertDescription>
                Este PIAR aún no está completo. Puedes continuar más adelante o descargar lo que llevas hasta ahora.
              </AlertDescription>
            </Alert>
          )}
          
          <div className="mb-6">
            <div className="flex justify-between text-sm text-gray-600 mb-1">
              <span>Progreso PIAR</span>
              <span>{progress.overall}%</span>
            </div>
            <Progress value={progress.overall} className="h-2" />
            
            <div className="grid grid-cols-3 gap-4 mt-4">
              <div>
                <div className="flex justify-between text-xs text-gray-600 mb-1">
                  <span>Anexo 1: Información General</span>
                  <span>{progress.anexo1}%</span>
                </div>
                <Progress value={progress.anexo1} className="h-1.5 bg-gray-200" />
              </div>
              <div>
                <div className="flex justify-between text-xs text-gray-600 mb-1">
                  <span>Anexo 2: Valoración Pedagógica</span>
                  <span>{progress.anexo2}%</span>
                </div>
                <Progress value={progress.anexo2} className="h-1.5 bg-gray-200" />
              </div>
              <div>
                <div className="flex justify-between text-xs text-gray-600 mb-1">
                  <span>Anexo 3: Compromisos en el Aula</span>
                  <span>{progress.anexo3}%</span>
                </div>
                <Progress value={progress.anexo3} className="h-1.5 bg-gray-200" />
              </div>
            </div>
          </div>
          
          <div className="flex flex-col lg:flex-row gap-6">
            {/* Left side: Chat */}
            <div className="w-full lg:w-1/2 bg-white rounded-lg border shadow-md overflow-hidden">
              <PiarChatSimulator studentName={studentData.nombre_estudiante} />
            </div>
            
            {/* Right side: Preview */}
            <div className="w-full lg:w-1/2 bg-white rounded-lg border shadow-md overflow-hidden">
              <Tabs defaultValue="anexo1">
                <TabsList className="w-full">
                  <TabsTrigger value="anexo1" className="flex-1">Anexo 1: Información General</TabsTrigger>
                  <TabsTrigger value="anexo2" className="flex-1">Anexo 2: Valoración Pedagógica</TabsTrigger>
                  <TabsTrigger value="anexo3" className="flex-1">Anexo 3: Compromisos en el Aula</TabsTrigger>
                </TabsList>
                <TabsContent value="anexo1">
                  <PiarPreview section="anexo1" loading={loadingFields} />
                </TabsContent>
                <TabsContent value="anexo2">
                  <PiarPreview section="anexo2" loading={loadingFields} />
                </TabsContent>
                <TabsContent value="anexo3">
                  <PiarPreview section="anexo3" loading={loadingFields} />
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </main>
      </div>
    </PiarSimulatorProvider>
  );
};

export default PiarSimulator;

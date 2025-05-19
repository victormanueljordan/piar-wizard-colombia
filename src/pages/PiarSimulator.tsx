
import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '@/components/Header';
import AnimatedBackground from '@/components/AnimatedBackground';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Download } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useToast } from '@/hooks/use-toast';
import PiarChatSimulator from '@/components/simulator/PiarChatSimulator';
import PiarPreview from '@/components/simulator/PiarPreview';
import { PiarSimulatorProvider } from '@/hooks/usePiarSimulator';

const PiarSimulator = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [studentData, setStudentData] = useState<any>(null);
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
      toast({
        title: "PIAR incompleto",
        description: "Este PIAR aún no está completo. Puedes continuar más adelante o descargar lo que llevas hasta ahora.",
        variant: "warning",
      });
    }
    // PDF generation logic would go here in a real implementation
    toast({
      title: "Generando PDF",
      description: "Tu PIAR se está generando y pronto estará listo para descargar.",
    });
  };

  if (!studentData) return null;

  return (
    <PiarSimulatorProvider>
      <div className="min-h-screen bg-gray-50 flex flex-col relative">
        <AnimatedBackground type="gradient" intensity="low" />
        <Header userName="docente" />
        
        <main className="flex-1 container max-w-screen-xl mx-auto px-4 py-6">
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
                  <span>Anexo 2: Ajustes Razonables</span>
                  <span>{progress.anexo2}%</span>
                </div>
                <Progress value={progress.anexo2} className="h-1.5 bg-gray-200" />
              </div>
              <div>
                <div className="flex justify-between text-xs text-gray-600 mb-1">
                  <span>Anexo 3: Seguimiento</span>
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
                  <TabsTrigger value="anexo2" className="flex-1">Anexo 2: Ajustes Razonables</TabsTrigger>
                  <TabsTrigger value="anexo3" className="flex-1">Anexo 3: Seguimiento</TabsTrigger>
                </TabsList>
                <TabsContent value="anexo1">
                  <PiarPreview section="anexo1" />
                </TabsContent>
                <TabsContent value="anexo2">
                  <PiarPreview section="anexo2" />
                </TabsContent>
                <TabsContent value="anexo3">
                  <PiarPreview section="anexo3" />
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

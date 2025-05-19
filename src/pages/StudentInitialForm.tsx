
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '@/components/Header';
import AnimatedBackground from '@/components/AnimatedBackground';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Sparkles } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const StudentInitialForm = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [studentData, setStudentData] = useState({
    nombre_estudiante: '',
    tipo_documento: '',
    documento_identificacion: ''
  });

  const handleInputChange = (field: string) => (e: React.ChangeEvent<HTMLInputElement>) => {
    setStudentData(prev => ({
      ...prev,
      [field]: e.target.value
    }));
  };

  const handleSelectChange = (field: string) => (value: string) => {
    setStudentData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate form
    if (!studentData.nombre_estudiante || !studentData.tipo_documento || !studentData.documento_identificacion) {
      toast({
        title: "Información incompleta",
        description: "Por favor completa todos los campos",
        variant: "destructive"
      });
      return;
    }

    // Store data in localStorage to use in simulator
    localStorage.setItem('piar_student_data', JSON.stringify(studentData));
    
    // Navigate to simulator
    navigate('/simulador-piar');
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col relative">
      <AnimatedBackground type="gradient" intensity="low" />
      <Header userName="docente" />
      
      <main className="flex-1 container max-w-screen-md mx-auto px-4 py-12">
        <Card className="w-full shadow-lg bg-white/95 backdrop-blur-sm border-gray-200">
          <CardHeader className="text-center space-y-1 pb-2">
            <CardTitle className="text-2xl font-bold text-gray-800">Información Inicial del Estudiante</CardTitle>
            <p className="text-gray-600">Ingresa los datos básicos del estudiante para crear su PIAR</p>
          </CardHeader>
          
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6 py-4">
              <div className="space-y-4">
                <div className="grid gap-2">
                  <Label htmlFor="nombre_estudiante">Nombre del Estudiante</Label>
                  <Input
                    id="nombre_estudiante"
                    placeholder="Nombre completo"
                    value={studentData.nombre_estudiante}
                    onChange={handleInputChange('nombre_estudiante')}
                    className="w-full"
                  />
                </div>
                
                <div className="grid gap-2">
                  <Label htmlFor="tipo_documento">Tipo de Identificación</Label>
                  <Select 
                    value={studentData.tipo_documento} 
                    onValueChange={handleSelectChange('tipo_documento')}
                  >
                    <SelectTrigger id="tipo_documento" className="w-full">
                      <SelectValue placeholder="Selecciona tipo de documento" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="tarjeta_identidad">Tarjeta de Identidad</SelectItem>
                      <SelectItem value="registro_civil">Registro Civil</SelectItem>
                      <SelectItem value="cedula">Cédula de Ciudadanía</SelectItem>
                      <SelectItem value="pasaporte">Pasaporte</SelectItem>
                      <SelectItem value="otro">Otro</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div className="grid gap-2">
                  <Label htmlFor="documento_identificacion">Número de Identificación</Label>
                  <Input
                    id="documento_identificacion"
                    placeholder="Ingresa el número de documento"
                    value={studentData.documento_identificacion}
                    onChange={handleInputChange('documento_identificacion')}
                    className="w-full"
                  />
                </div>
              </div>
              
              <Button 
                type="submit" 
                className="w-full py-6 text-lg font-semibold bg-gradient-to-r from-piar-blue to-violet-600 hover:from-blue-700 hover:to-violet-700 text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02] rounded-lg"
              >
                <Sparkles className="h-5 w-5 mr-2 animate-pulse" />
                Iniciar creación mágica del PIAR
              </Button>
            </form>
          </CardContent>
        </Card>
      </main>
    </div>
  );
};

export default StudentInitialForm;

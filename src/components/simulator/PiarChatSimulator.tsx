
import React, { useState, useRef, useEffect } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { ScrollArea } from "@/components/ui/scroll-area";
import { MessageSquare, Send } from 'lucide-react';
import { usePiarSimulator } from '@/hooks/usePiarSimulator';

interface Message {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  timestamp: Date;
}

interface PiarChatSimulatorProps {
  studentName: string;
}

const PiarChatSimulator: React.FC<PiarChatSimulatorProps> = ({ studentName }) => {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<Message[]>([]);
  const [currentStep, setCurrentStep] = useState(0);
  const scrollAreaRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const { updatePiarData } = usePiarSimulator();
  
  // Questions sequence - in a real app this would be more dynamic based on previous answers
  const conversationFlow = [
    {
      question: `Hola, soy el asistente de creación del PIAR para ${studentName}. Voy a ayudarte a completar el documento paso a paso. ¿Comenzamos con la información de la institución educativa?`,
      field: null,
      section: null
    },
    {
      question: "¿Cuál es el nombre de la institución educativa donde estudia el alumno?",
      field: "institucion_educativa",
      section: "anexo1"
    },
    {
      question: "¿En qué sede y jornada está estudiando?",
      field: "sede",
      section: "anexo1"
    },
    {
      question: "¿Cuál es la fecha de nacimiento del estudiante?",
      field: "fecha_nacimiento",
      section: "anexo1"
    },
    {
      question: "¿Cuál es la dirección de residencia del estudiante?",
      field: "direccion",
      section: "anexo1"
    },
    {
      question: "¿Cuenta el estudiante con algún diagnóstico médico relevante para su proceso educativo?",
      field: "diagnostico_medico",
      section: "anexo1"
    },
    {
      question: "¿Requiere el estudiante productos de apoyo específicos?",
      field: "productos_apoyo",
      section: "anexo1"
    },
    {
      question: "¿Recibe el estudiante terapias actualmente? ¿Cuáles?",
      field: "terapias",
      section: "anexo1"
    },
    {
      question: "¿Puedes compartir información relevante sobre el contexto familiar del estudiante?",
      field: "info_familia",
      section: "anexo1"
    },
    {
      question: "¿Cuál ha sido la trayectoria educativa del estudiante hasta el momento?",
      field: "trayectoria_educativa",
      section: "anexo1"
    },
    {
      question: "Ahora pasaremos al Anexo 2. ¿Quiénes son los docentes responsables de implementar el PIAR?",
      field: "docentes_responsables",
      section: "anexo2"
    },
    {
      question: "¿Podrías describir brevemente al estudiante en términos de su personalidad y forma de relacionarse?",
      field: "descripcion_estudiante",
      section: "anexo2"
    },
    {
      question: "¿Cuáles son las habilidades actuales más destacadas del estudiante?",
      field: "habilidades_actuales",
      section: "anexo2"
    },
    {
      question: "¿Qué barreras ha identificado para el aprendizaje del estudiante?",
      field: "barreras_aprendizaje",
      section: "anexo2"
    },
    {
      question: "¿Participa el estudiante en actividades extracurriculares? ¿Cuáles?",
      field: "participacion_extracurricular",
      section: "anexo2"
    },
    {
      question: "¿Qué estilo de aprendizaje has observado en el estudiante? (visual, auditivo, kinestésico, etc.)",
      field: "estilo_aprendizaje",
      section: "anexo2"
    },
    {
      question: "Ahora vamos con el Anexo 3. ¿En qué asignaturas se enfocarán principalmente los ajustes?",
      field: "asignaturas_focales",
      section: "anexo3"
    },
    {
      question: "¡Perfecto! Hemos recopilado información valiosa para el PIAR. Ahora puedes revisar cada anexo en el panel derecho. Para los campos que requieren mayor elaboración, puedes usar el botón 'Llenar con IA' disponible en algunos de ellos.",
      field: null,
      section: null
    }
  ];

  // Initial bot message
  useEffect(() => {
    setTimeout(() => {
      handleBotResponse(conversationFlow[0].question);
    }, 1000);
  }, [studentName]);

  // Auto scroll to bottom when new messages come in
  useEffect(() => {
    if (scrollAreaRef.current) {
      const scrollContainer = scrollAreaRef.current;
      scrollContainer.scrollTop = scrollContainer.scrollHeight;
    }
  }, [messages]);

  const handleSendMessage = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    
    if (!input.trim()) return;
    
    const newMessage: Message = {
      id: Date.now().toString(),
      role: 'user',
      content: input,
      timestamp: new Date(),
    };
    
    setMessages(prev => [...prev, newMessage]);
    setInput('');
    
    // Focus back on input after sending
    setTimeout(() => {
      if (inputRef.current) inputRef.current.focus();
    }, 100);
    
    // Process the current conversation step
    processUserResponse(input);
  };

  const processUserResponse = (userMessage: string) => {
    // Get current step data
    const currentStepData = conversationFlow[currentStep];
    
    // If this step has a field to update, save the user's response
    if (currentStepData && currentStepData.field && currentStepData.section) {
      updatePiarData(currentStepData.section, currentStepData.field, userMessage);
    }
    
    // Move to the next step
    const nextStep = currentStep + 1;
    if (nextStep < conversationFlow.length) {
      setCurrentStep(nextStep);
      // Show next question after a short delay
      setTimeout(() => {
        handleBotResponse(conversationFlow[nextStep].question);
      }, 1000);
    } else {
      // End of conversation flow
      setTimeout(() => {
        handleBotResponse("Has completado el proceso guiado. Puedes continuar editando el PIAR en cualquier momento o generar el documento PDF.");
      }, 1000);
    }
  };

  const handleBotResponse = (content: string) => {
    const newMessage: Message = {
      id: Date.now().toString(),
      role: 'assistant',
      content,
      timestamp: new Date(),
    };
    
    setMessages(prev => [...prev, newMessage]);
  };

  return (
    <div className="flex flex-col h-[600px]">
      <div className="p-4 bg-piar-blue bg-opacity-10 border-b">
        <h3 className="text-lg font-medium">Asistente para Creación del PIAR</h3>
        <p className="text-sm text-gray-600">Conversa para completar la información</p>
      </div>
      
      <ScrollArea className="flex-1 p-4" ref={scrollAreaRef}>
        <div className="space-y-4">
          {messages.map((message) => (
            <div
              key={message.id}
              className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              <div
                className={`max-w-[80%] rounded-lg px-4 py-2 ${
                  message.role === 'user'
                    ? 'bg-piar-blue text-white'
                    : 'bg-gray-100 text-gray-800'
                }`}
              >
                <p className="text-sm">{message.content}</p>
                <p className="text-xs opacity-70 mt-1">
                  {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                </p>
              </div>
            </div>
          ))}
        </div>
      </ScrollArea>
      
      <form onSubmit={handleSendMessage} className="p-4 border-t bg-white">
        <div className="flex space-x-2">
          <Input
            ref={inputRef}
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Escribe tu respuesta aquí..."
            className="flex-1"
            autoFocus
          />
          <Button type="submit" size="icon" disabled={!input.trim()}>
            <Send className="h-4 w-4" />
          </Button>
        </div>
      </form>
    </div>
  );
};

export default PiarChatSimulator;


import React, { useState, useRef, useEffect } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { ScrollArea } from "@/components/ui/scroll-area";
import { Send } from 'lucide-react';
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
  const scrollAreaRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const { updatePiarData } = usePiarSimulator();
  
  // Initial bot message
  useEffect(() => {
    setTimeout(() => {
      handleBotResponse(`Hola, soy el asistente de creación del PIAR para ${studentName}. Voy a ayudarte a completar el documento paso a paso. ¿Empezamos con la información de la institución educativa?`);
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
    
    // Simulate bot response after delay
    setTimeout(() => {
      generateBotResponse(input);
    }, 1000 + Math.random() * 500);
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

  const generateBotResponse = (userMessage: string) => {
    // Predefined responses based on keywords
    // In a real implementation this would connect to n8n or another LLM service
    const responses: Record<string, { response: string, data?: Record<string, any> }> = {
      "institución": { 
        response: "Perfecto. ¿Cuál es el nombre de la institución educativa?",
        data: { section: "anexo1", field: "prompt_institucion", value: true }
      },
      "colegio": {
        response: "¡Gracias! ¿En qué sede y jornada está estudiando?",
        data: { section: "anexo1", field: "institucion_educativa", value: userMessage }
      },
      "sede": {
        response: "Excelente. Ahora, ¿quiénes son los docentes responsables de implementar el PIAR?",
        data: { section: "anexo1", field: "sede", value: userMessage }
      },
      "docente": {
        response: "Gracias por esa información. Ahora cuéntame, ¿qué apoyos específicos necesita el estudiante?",
        data: { section: "anexo2", field: "docentes_responsables", value: userMessage }
      },
      "apoy": {
        response: "Comprendo las necesidades. ¿Podrías describir brevemente las habilidades destacadas del estudiante?",
        data: { section: "anexo2", field: "apoyos", value: userMessage }
      },
      "habilidad": {
        response: "Es importante reconocer esas fortalezas. ¿Qué participación tiene la familia en el proceso educativo?",
        data: { section: "anexo2", field: "habilidades", value: userMessage }
      },
      "familia": {
        response: "La participación familiar es clave. ¿Hay necesidades de accesibilidad o ajustes físicos que debamos considerar?",
        data: { section: "anexo3", field: "participacion_familiar", value: userMessage }
      },
      "accesibilidad": {
        response: "Anotado. Finalmente, ¿cuál es el contexto social/comunitario del estudiante?",
        data: { section: "anexo3", field: "accesibilidad", value: userMessage }
      },
      "contexto": {
        response: "¡Perfecto! Hemos recopilado información valiosa para el PIAR. Puedes revisar la información en cada anexo en el panel derecho y hacer ajustes si es necesario.",
        data: { section: "anexo3", field: "contexto", value: userMessage }
      }
    };
    
    // Find matching response
    let matchedKey = '';
    for (const key of Object.keys(responses)) {
      if (userMessage.toLowerCase().includes(key.toLowerCase())) {
        matchedKey = key;
        break;
      }
    }
    
    if (!matchedKey) {
      handleBotResponse("Gracias por esa información. ¿Hay algo más específico sobre el estudiante que quieras compartir?");
    } else {
      const { response, data } = responses[matchedKey];
      handleBotResponse(response);
      
      // Update PIAR data if applicable
      if (data) {
        updatePiarData(data.section, data.field, data.value);
      }
    }
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


import React, { useState } from 'react';
import { 
  Sheet,
  SheetContent, 
  SheetHeader,
  SheetTitle,
  SheetFooter,
  SheetClose
} from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Bot, MessageSquare, SendHorizontal } from 'lucide-react';

interface AIMessage {
  id: string;
  content: string;
  sender: 'user' | 'ai';
  timestamp: Date;
}

interface AIChatDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const AIChatDialog: React.FC<AIChatDialogProps> = ({ open, onOpenChange }) => {
  const [messages, setMessages] = useState<AIMessage[]>([
    {
      id: '1',
      content: '¡Hola! Soy tu asistente PIAR. ¿En qué puedo ayudarte hoy?',
      sender: 'ai',
      timestamp: new Date(),
    }
  ]);
  const [currentMessage, setCurrentMessage] = useState('');
  const [isTyping, setIsTyping] = useState(false);

  const handleSendMessage = () => {
    if (!currentMessage.trim()) return;
    
    // Add user message
    const userMessage: AIMessage = {
      id: Date.now().toString(),
      content: currentMessage.trim(),
      sender: 'user',
      timestamp: new Date(),
    };

    setMessages(prev => [...prev, userMessage]);
    setCurrentMessage('');
    setIsTyping(true);

    // Simulate AI response (in a real app, this would be an API call)
    setTimeout(() => {
      const aiResponse: AIMessage = {
        id: (Date.now() + 1).toString(),
        content: getAIResponse(currentMessage.trim()),
        sender: 'ai',
        timestamp: new Date(),
      };
      setMessages(prev => [...prev, aiResponse]);
      setIsTyping(false);
    }, 1000);
  };

  // Simple response generator (would be replaced by a real AI service)
  const getAIResponse = (message: string): string => {
    const lowercaseMessage = message.toLowerCase();
    
    if (lowercaseMessage.includes('hola') || lowercaseMessage.includes('saludos')) {
      return '¡Hola! ¿Cómo puedo ayudarte con tu PIAR hoy?';
    } else if (lowercaseMessage.includes('gracias')) {
      return 'De nada, estoy aquí para ayudarte.';
    } else if (lowercaseMessage.includes('ajustes') || lowercaseMessage.includes('razonables')) {
      return 'Los ajustes razonables son modificaciones y adaptaciones necesarias que permiten garantizar a las personas con discapacidad el goce o ejercicio de todos los derechos en igualdad de condiciones. En la sección "Ajustes Razonables", puedes especificarlos para cada área.';
    } else if (lowercaseMessage.includes('guardar') || lowercaseMessage.includes('borrador')) {
      return 'Para guardar tu PIAR como borrador, haz clic en el botón "Guardar borrador" ubicado en la parte inferior izquierda del formulario. Esto almacenará tu progreso actual.';
    } else {
      return 'Entiendo tu consulta. ¿Puedes proporcionar más detalles para que pueda ayudarte mejor? Estoy aquí para apoyarte en la creación de tu PIAR.';
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleSendMessage();
    }
  };

  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent className="sm:max-w-md">
        <SheetHeader>
          <SheetTitle className="flex items-center gap-2">
            <Bot className="h-5 w-5 text-piar-blue" />
            Asistente PIAR
          </SheetTitle>
        </SheetHeader>
        <div className="flex flex-col mt-4 h-[calc(100vh-12rem)] justify-between">
          <div className="flex-1 overflow-y-auto pr-1">
            <div className="space-y-4 mb-4">
              {messages.map((msg) => (
                <div
                  key={msg.id}
                  className={`flex ${
                    msg.sender === 'user' ? 'justify-end' : 'justify-start'
                  }`}
                >
                  <div
                    className={`rounded-lg px-4 py-2 max-w-[80%] ${
                      msg.sender === 'user'
                        ? 'bg-piar-blue text-white'
                        : 'bg-gray-100 text-gray-800'
                    }`}
                  >
                    <p>{msg.content}</p>
                    <p className="text-xs opacity-70 mt-1">
                      {msg.timestamp.toLocaleTimeString([], {
                        hour: '2-digit',
                        minute: '2-digit',
                      })}
                    </p>
                  </div>
                </div>
              ))}
              {isTyping && (
                <div className="flex justify-start">
                  <div className="rounded-lg px-4 py-2 bg-gray-100 text-gray-800">
                    <div className="flex space-x-1">
                      <div className="w-2 h-2 bg-gray-500 rounded-full animate-bounce" />
                      <div className="w-2 h-2 bg-gray-500 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }} />
                      <div className="w-2 h-2 bg-gray-500 rounded-full animate-bounce" style={{ animationDelay: '0.4s' }} />
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>

          <SheetFooter className="mt-4">
            <div className="flex w-full gap-2">
              <Input
                placeholder="Escribe tu mensaje..."
                value={currentMessage}
                onChange={(e) => setCurrentMessage(e.target.value)}
                onKeyPress={handleKeyPress}
                className="flex-1"
              />
              <Button 
                onClick={handleSendMessage} 
                size="icon"
                disabled={!currentMessage.trim() || isTyping}
              >
                <SendHorizontal className="h-4 w-4" />
              </Button>
            </div>
          </SheetFooter>
          <div className="text-xs text-center text-gray-500 mt-4">
            Este asistente es una demo y no utiliza un modelo de IA real
          </div>
        </div>
        <SheetClose className="absolute right-4 top-4" />
      </SheetContent>
    </Sheet>
  );
};

export default AIChatDialog;


import React from 'react';
import { Button } from '@/components/ui/button';
import { Bot, MessageCircle, X } from 'lucide-react';
import { cn } from '@/lib/utils';

interface AIFloatingButtonProps {
  isOpen: boolean;
  onClick: () => void;
  className?: string;
}

const AIFloatingButton: React.FC<AIFloatingButtonProps> = ({ 
  isOpen, 
  onClick, 
  className 
}) => {
  return (
    <Button
      onClick={onClick}
      size="lg"
      className={cn(
        'fixed bottom-6 right-6 rounded-full w-14 h-14 shadow-lg z-50 hover:scale-110 transition-all duration-300',
        isOpen ? 'bg-red-500 hover:bg-red-600' : 'bg-piar-blue hover:bg-blue-700',
        className
      )}
      aria-label={isOpen ? "Cerrar asistente" : "Abrir asistente"}
    >
      <div className="absolute inset-0 flex items-center justify-center">
        {isOpen ? (
          <X className="h-6 w-6" />
        ) : (
          <div className="flex gap-1 items-center">
            <Bot className="h-6 w-6" />
          </div>
        )}
      </div>
      <span className={cn(
        'absolute -top-1 -right-1 bg-piar-green text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center',
        isOpen ? 'hidden' : 'block animate-pulse'
      )}>
        AI
      </span>
    </Button>
  );
};

export default AIFloatingButton;

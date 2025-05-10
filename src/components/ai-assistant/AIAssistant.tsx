
import React, { useState } from 'react';
import AIFloatingButton from './AIFloatingButton';
import AIChatDialog from './AIChatDialog';

const AIAssistant: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <AIFloatingButton isOpen={isOpen} onClick={toggleChat} />
      <AIChatDialog open={isOpen} onOpenChange={setIsOpen} />
    </>
  );
};

export default AIAssistant;


import React from 'react';

interface WizardNavProps {
  currentStep: number;
  steps: { name: string }[];
}

const WizardNav: React.FC<WizardNavProps> = ({ currentStep, steps }) => {
  return (
    <div className="border-b pb-4 mb-6">
      <h2 className="text-xl font-bold text-gray-800 mb-4">Anexos del PIAR</h2>
      <p className="text-sm text-gray-600 mb-6">
        Plan Individual de Ajustes Razonables (Decreto 1421 de 2017)
      </p>
      
      <div className="flex flex-row justify-center items-center space-x-8 md:space-x-16 lg:space-x-20">
        {steps.map((step, index) => {
          const stepNumber = index + 1;
          let status = stepNumber === currentStep 
            ? 'active' 
            : stepNumber < currentStep 
              ? 'complete' 
              : 'pending';
          
          // PIAR123 logo colors matching for steps
          // Step 1 - Green, Step 2 - Blue, Step 3 - Yellow
          const colorClasses = 
            stepNumber === 1 
              ? 'bg-green-500' 
              : stepNumber === 2 
                ? 'bg-blue-500' 
                : 'bg-yellow-500';
          
          return (
            <div key={index} className="flex flex-col items-center relative">
              <div 
                className={`flex items-center justify-center rounded-full w-12 h-12 text-white font-bold text-lg ${colorClasses} ${
                  status === 'active' ? 'ring-2 ring-offset-2 ring-offset-white' : ''
                } ${status === 'active' ? stepNumber === 1 ? 'ring-green-500' : stepNumber === 2 ? 'ring-blue-500' : 'ring-yellow-500' : ''}`}
              >
                {stepNumber}
              </div>
              <div className="mt-2 text-center">
                <span className="text-xs md:text-sm font-medium text-center text-gray-700 max-w-[80px] md:max-w-[120px] lg:max-w-full break-words">
                  {step.name}
                </span>
              </div>
              
              {/* Connecting line between steps */}
              {index < steps.length - 1 && (
                <div className="hidden sm:block h-0.5 w-12 md:w-16 lg:w-20 bg-gray-200 absolute top-6 left-full"></div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default WizardNav;

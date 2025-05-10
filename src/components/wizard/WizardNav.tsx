
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
      
      <div className="flex flex-col md:flex-row items-center justify-center space-y-2 md:space-y-0 md:space-x-8 lg:space-x-12">
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
            <div key={index} className="flex flex-col items-center">
              <div 
                className={`flex items-center justify-center rounded-full w-10 h-10 text-white font-bold text-lg ${colorClasses} ${
                  status === 'active' ? 'ring-2 ring-offset-2 ring-offset-white' : ''
                } ${status === 'active' ? stepNumber === 1 ? 'ring-green-500' : stepNumber === 2 ? 'ring-blue-500' : 'ring-yellow-500' : ''}`}
              >
                {stepNumber}
              </div>
              <div className="flex items-center mt-2">
                <span className="text-xs md:text-sm font-medium text-center text-gray-700 max-w-[100px] md:max-w-full">
                  {step.name}
                </span>
              </div>
              {index < steps.length - 1 && (
                <div className="hidden md:block h-0.5 w-16 lg:w-24 bg-gray-200 absolute translate-x-[80px] lg:translate-x-[120px]"></div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default WizardNav;

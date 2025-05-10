
import React from 'react';

interface WizardNavProps {
  currentStep: number;
  steps: { name: string }[];
}

const WizardNav: React.FC<WizardNavProps> = ({ currentStep, steps }) => {
  return (
    <div className="border-b pb-4 mb-6">
      <h2 className="text-xl font-bold text-gray-800 mb-4">Anexos del PIAR</h2>
      <p className="text-sm text-gray-600 mb-4">
        Plan Individual de Ajustes Razonables (Decreto 1421 de 2017)
      </p>
      
      <div className="flex items-center justify-start space-x-4 mt-6">
        {steps.map((step, index) => {
          const stepNumber = index + 1;
          let status = stepNumber === currentStep 
            ? 'active' 
            : stepNumber < currentStep 
              ? 'complete' 
              : 'pending';
          
          return (
            <div key={index} className="flex items-center">
              <div className={`piar-wizard-step piar-wizard-step-${stepNumber} ${status}`}>
                {stepNumber}
              </div>
              <span className="ml-2 text-sm font-medium text-gray-700">{step.name}</span>
              {index < steps.length - 1 && (
                <div className="mx-4 h-0.5 w-8 bg-gray-200"></div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default WizardNav;

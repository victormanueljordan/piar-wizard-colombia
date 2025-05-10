
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

interface FormSectionProps {
  title: string;
  children: React.ReactNode;
  required?: boolean;
}

const FormSection: React.FC<FormSectionProps> = ({ 
  title, 
  children, 
  required = false 
}) => {
  return (
    <Card className="mb-6 border shadow-sm">
      <CardHeader className="bg-gray-50 border-b py-4">
        <CardTitle className="text-lg font-medium text-gray-800 flex items-center">
          {title}
          {required && (
            <span className="ml-2 text-xs text-white bg-red-500 rounded-md px-2 py-1">
              Requerido
            </span>
          )}
        </CardTitle>
      </CardHeader>
      <CardContent className="p-6 bg-white">{children}</CardContent>
    </Card>
  );
};

export default FormSection;

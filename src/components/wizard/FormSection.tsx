
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

interface FormSectionProps {
  title: string;
  children: React.ReactNode;
  className?: string;
}

const FormSection: React.FC<FormSectionProps> = ({ 
  title, 
  children,
  className = ''
}) => {
  return (
    <Card className={`mb-6 border shadow-sm ${className}`}>
      <CardHeader className="bg-gray-50 border-b py-4">
        <CardTitle className="text-lg font-medium text-gray-800 flex items-center">
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent className="p-6 bg-white">{children}</CardContent>
    </Card>
  );
};

export default FormSection;

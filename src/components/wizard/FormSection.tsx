
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useIsMobile } from '@/hooks/use-mobile';

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
  const isMobile = useIsMobile();
  
  return (
    <Card className={`mb-6 border shadow-sm ${className}`}>
      <CardHeader className="bg-gray-50 border-b py-3 md:py-4">
        <CardTitle className={`${isMobile ? 'text-base' : 'text-lg'} font-medium text-gray-800 flex items-center break-words`}>
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent className={`p-4 md:p-6 bg-white`}>{children}</CardContent>
    </Card>
  );
};

export default FormSection;

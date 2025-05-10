
import React from 'react';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Checkbox } from '@/components/ui/checkbox';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

interface FormFieldProps {
  id: string;
  label: string;
  type?: 'text' | 'email' | 'number' | 'date' | 'textarea' | 'radio' | 'checkbox' | 'select';
  required?: boolean;
  placeholder?: string;
  value: any;
  onChange: (value: any) => void;
  options?: { value: string; label: string }[];
  className?: string;
}

const FormField: React.FC<FormFieldProps> = ({
  id,
  label,
  type = 'text',
  required = false,
  placeholder = '',
  value,
  onChange,
  options = [],
  className = '',
}) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    onChange(e.target.value);
  };

  const handleSelectChange = (value: string) => {
    onChange(value);
  };

  const handleCheckboxChange = (checked: boolean) => {
    onChange(checked);
  };

  return (
    <div className={`mb-4 ${className}`}>
      <Label 
        htmlFor={id} 
        className="block text-sm font-medium text-gray-700 mb-1"
      >
        {label} {required && <span className="text-red-500">*</span>}
      </Label>
      
      {type === 'textarea' ? (
        <Textarea
          id={id}
          placeholder={placeholder}
          value={value || ''}
          onChange={handleChange}
          required={required}
          className="w-full"
        />
      ) : type === 'select' ? (
        <Select value={value} onValueChange={handleSelectChange}>
          <SelectTrigger id={id} className="w-full">
            <SelectValue placeholder={placeholder} />
          </SelectTrigger>
          <SelectContent>
            {options.map((option) => (
              <SelectItem key={option.value} value={option.value}>
                {option.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      ) : type === 'radio' ? (
        <RadioGroup
          value={value}
          onValueChange={onChange}
          className="flex flex-col space-y-1 mt-2"
        >
          {options.map((option) => (
            <div key={option.value} className="flex items-center space-x-2">
              <RadioGroupItem value={option.value} id={`${id}-${option.value}`} />
              <Label htmlFor={`${id}-${option.value}`}>{option.label}</Label>
            </div>
          ))}
        </RadioGroup>
      ) : type === 'checkbox' ? (
        <div className="flex items-center space-x-2 mt-2">
          <Checkbox
            id={id}
            checked={value === true}
            onCheckedChange={handleCheckboxChange}
          />
          <Label htmlFor={id}>{placeholder}</Label>
        </div>
      ) : (
        <Input
          id={id}
          type={type}
          placeholder={placeholder}
          value={value || ''}
          onChange={handleChange}
          required={required}
          className="w-full"
        />
      )}
    </div>
  );
};

export default FormField;

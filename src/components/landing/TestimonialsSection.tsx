
import React from 'react';
import ScrollReveal from '@/components/ScrollReveal';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Quote } from 'lucide-react';

const testimonials = [
  {
    quote: "PIAR123 revolucionó la manera en que creamos planes individuales. Ha reducido nuestro tiempo de trabajo en un 70%.",
    name: "Dra. Ana María Pérez",
    role: "Rectora IE La Esperanza",
    avatar: "/lovable-uploads/testimonial-1.png"
  },
  {
    quote: "La plataforma me permitió centrarme más en los estudiantes y menos en el papeleo. Una herramienta realmente transformadora.",
    name: "Carlos Ramírez",
    role: "Docente de Inclusión",
    avatar: "/lovable-uploads/testimonial-2.png"
  },
  {
    quote: "Gracias a PIAR123, nuestra institución cumple con las normativas del Decreto 1421 de forma eficiente y personalizada.",
    name: "Marta Gómez",
    role: "Coordinadora Académica",
    avatar: "/lovable-uploads/testimonial-3.png"
  }
];

const TestimonialsSection = () => {
  return (
    <section className="section bg-gradient-to-br from-blue-50 to-white">
      <div className="container mx-auto px-4">
        <ScrollReveal>
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 font-heading">Lo que dicen nuestros usuarios</h2>
          <div className="h-1 w-24 mx-auto bg-gradient-to-r from-piar-blue to-piar-green mb-12"></div>
        </ScrollReveal>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <ScrollReveal key={index} delay={index * 200} className="h-full">
              <div className="testimonial-card h-full">
                <div className="mb-4 relative">
                  <Quote className="text-piar-blue/20 absolute -top-2 -left-2" size={42} />
                </div>
                
                <p className="text-gray-700 mb-6 flex-grow">"{testimonial.quote}"</p>
                
                <div className="flex items-center mt-auto">
                  <Avatar className="h-12 w-12 mr-3 border-2 border-white shadow">
                    <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
                    <AvatarFallback>{testimonial.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-semibold text-gray-800">{testimonial.name}</p>
                    <p className="text-sm text-gray-500">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;

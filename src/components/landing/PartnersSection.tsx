
import React from 'react';
import ScrollReveal from '@/components/ScrollReveal';

const partners = [
  {
    name: "Ministerio de Educación",
    logo: "/lovable-uploads/partner-1.svg"
  },
  {
    name: "Hackathon LATAM de IA",
    logo: "/lovable-uploads/partner-2.svg"
  },
  {
    name: "Google for Education",
    logo: "/lovable-uploads/partner-3.svg"
  },
  {
    name: "Microsoft Education",
    logo: "/lovable-uploads/partner-4.svg"
  },
  {
    name: "UNESCO",
    logo: "/lovable-uploads/partner-5.svg"
  }
];

const PartnersSection = () => {
  return (
    <section className="section bg-white py-12">
      <div className="container mx-auto">
        <ScrollReveal>
          <h3 className="text-xl font-semibold text-center mb-8 text-gray-700">Respaldado por instituciones de confianza</h3>
        </ScrollReveal>
        
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
          {partners.map((partner, index) => (
            <ScrollReveal key={index} delay={index * 100} className="grayscale hover:grayscale-0 transition-all duration-500">
              <div className="h-12 flex items-center justify-center">
                <img 
                  src={partner.logo} 
                  alt={`Logo de ${partner.name}`}
                  className="max-h-12 max-w-[120px] md:max-w-[180px]"
                />
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;


import React from 'react';
import ScrollReveal from '@/components/ScrollReveal';
import { Building, School, Landmark } from 'lucide-react';

const PartnersSection = () => {
  return (
    <section className="section bg-white py-12">
      <div className="container mx-auto px-4">
        <ScrollReveal>
          <h3 className="text-xl font-semibold text-center mb-6 text-gray-700">Alianzas estratégicas</h3>
        </ScrollReveal>
        
        <ScrollReveal delay={200}>
          <p className="text-center max-w-2xl mx-auto text-gray-600 mb-8">
            Nos proyectamos como aliados estratégicos de instituciones comprometidas con la equidad educativa.
          </p>
        </ScrollReveal>
        
        <div className="flex flex-wrap justify-center items-center gap-10 md:gap-16">
          <ScrollReveal delay={100} className="text-center">
            <div className="flex flex-col items-center">
              <div className="bg-blue-50 p-4 rounded-full mb-3">
                <School className="h-8 w-8 text-blue-600" />
              </div>
              <p className="text-sm text-gray-600">Instituciones Educativas</p>
            </div>
          </ScrollReveal>
          
          <ScrollReveal delay={200} className="text-center">
            <div className="flex flex-col items-center">
              <div className="bg-green-50 p-4 rounded-full mb-3">
                <Building className="h-8 w-8 text-green-600" />
              </div>
              <p className="text-sm text-gray-600">Organizaciones Educativas</p>
            </div>
          </ScrollReveal>
          
          <ScrollReveal delay={300} className="text-center">
            <div className="flex flex-col items-center">
              <div className="bg-amber-50 p-4 rounded-full mb-3">
                <Landmark className="h-8 w-8 text-amber-600" />
              </div>
              <p className="text-sm text-gray-600">Entidades Gubernamentales</p>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;

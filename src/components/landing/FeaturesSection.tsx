
import React from 'react';
import ScrollReveal from '@/components/ScrollReveal';
import { BrainCircuit, Users, FileType, ShieldCheck, Check } from 'lucide-react';

const FeaturesSection = () => {
  const features = [
    {
      title: "IA Asistente",
      description: "Sugerencias automáticas con IA que facilitarán la creación de planes personalizados",
      icon: <BrainCircuit className="h-10 w-10 text-white" />,
      color: "from-blue-500 to-indigo-600",
      delay: 0
    },
    {
      title: "Gestión Centralizada",
      description: "Gestión centralizada por institución y docente que mejorará la coordinación",
      icon: <Users className="h-10 w-10 text-white" />,
      color: "from-green-500 to-emerald-600",
      delay: 200
    },
    {
      title: "Exportación a PDF",
      description: "Exportación de PIAR en PDF listos para presentar en cualquier momento",
      icon: <FileType className="h-10 w-10 text-white" />,
      color: "from-yellow-400 to-amber-500",
      delay: 400
    },
    {
      title: "Seguridad Garantizada",
      description: "Plataforma segura y fácil de usar que protegerá la información sensible",
      icon: <ShieldCheck className="h-10 w-10 text-white" />,
      color: "from-red-500 to-rose-600",
      delay: 600
    }
  ];

  return (
    <section className="section bg-gradient-to-br from-gray-50 via-white to-blue-50">
      <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-blue-50 to-transparent -z-10"></div>
      <div className="container mx-auto relative z-10">
        <ScrollReveal>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-4 font-heading text-gray-800">
            Una herramienta inteligente, simple y efectiva
          </h2>
          <p className="text-xl text-gray-600 text-center mb-12 max-w-3xl mx-auto">
            Diseñada por docentes para docentes, nuestra plataforma simplificará la creación de PIAR mientras optimiza tu tiempo y recursos.
          </p>
        </ScrollReveal>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <ScrollReveal key={index} delay={feature.delay}>
              <div className="feature-card h-full flex flex-col">
                <div className={`rounded-xl p-4 mb-6 inline-flex bg-gradient-to-br ${feature.color}`}>
                  {feature.icon}
                </div>
                <h3 className="font-semibold text-xl mb-3 text-gray-800">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
                
                <ul className="mt-4 space-y-2">
                  {[1, 2].map((item) => (
                    <li key={item} className="flex items-center">
                      <span className="inline-flex items-center justify-center h-5 w-5 rounded-full bg-green-100 mr-2">
                        <Check className="h-3 w-3 text-green-600" />
                      </span>
                      <span className="text-sm text-gray-600">
                        {index === 0 && item === 1 ? "Diseñada para reducir significativamente el tiempo que los docentes dedican a crear PIAR" : 
                         `Beneficio ${index + 1}.${item}`}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;

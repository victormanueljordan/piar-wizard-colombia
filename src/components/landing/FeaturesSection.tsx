
import { FeatureIcon } from '@/components/landing/FeatureIcon';
import { BrainCircuit, Users, FileType, ShieldCheck } from 'lucide-react';

const FeaturesSection = () => {
  return (
    <section className="py-20 px-4 bg-gradient-to-br from-blue-50 via-white to-green-50 relative overflow-hidden">
      {/* Animated circles */}
      <div className="absolute -top-40 -left-40 w-80 h-80 bg-piar-blue opacity-5 rounded-full animate-pulse"></div>
      <div className="absolute -bottom-40 -right-40 w-80 h-80 bg-piar-green opacity-5 rounded-full animate-pulse delay-700"></div>
      
      <div className="container mx-auto relative z-10">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-16 text-gray-800 bg-clip-text text-transparent bg-gradient-to-r from-piar-blue to-piar-green animate-pulse">
          Una herramienta inteligente, simple y efectiva
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            {
              title: "IA Asistente",
              description: "Sugerencias automáticas con IA que facilitan la creación de planes personalizados",
              color: "from-blue-500 to-purple-600",
              icon: <BrainCircuit className="h-8 w-8 text-blue-500" />,
              delay: 0
            },
            {
              title: "Gestión Centralizada",
              description: "Gestión centralizada por institución y docente que mejora la coordinación",
              color: "from-green-500 to-teal-600",
              icon: <Users className="h-8 w-8 text-green-500" />,
              delay: 200
            },
            {
              title: "Exportación a PDF",
              description: "Exportación de PIAR en PDF listos para presentar en cualquier momento",
              color: "from-yellow-500 to-orange-600",
              icon: <FileType className="h-8 w-8 text-yellow-500" />,
              delay: 400
            },
            {
              title: "Seguridad Garantizada",
              description: "Plataforma segura y fácil de usar que protege la información sensible",
              color: "from-red-500 to-pink-600",
              icon: <ShieldCheck className="h-8 w-8 text-red-500" />,
              delay: 600
            }
          ].map((feature, index) => (
            <div 
              key={index} 
              className="bg-white rounded-xl shadow-md overflow-hidden transform hover:scale-105 hover:shadow-xl transition-all duration-500 opacity-0 animate-fade-in"
              style={{ animationDelay: `${feature.delay}ms`, animationFillMode: 'forwards' }}
            >
              <div className={`h-2 bg-gradient-to-r ${feature.color}`}></div>
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <div className="bg-gray-100 p-3 rounded-lg mr-4 transform hover:rotate-12 transition-all duration-300">
                    {feature.icon}
                  </div>
                  <h3 className="font-bold text-lg text-gray-800">{feature.title}</h3>
                </div>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;

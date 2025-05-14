
const FeaturesSection = () => {
  return (
    <section className="py-16 px-4 bg-gradient-to-br from-blue-50 via-white to-green-50 relative overflow-hidden">
      {/* Animated circles */}
      <div className="absolute -top-40 -left-40 w-80 h-80 bg-piar-blue opacity-5 rounded-full"></div>
      <div className="absolute -bottom-40 -right-40 w-80 h-80 bg-piar-green opacity-5 rounded-full"></div>
      
      <div className="container mx-auto relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800">Una herramienta inteligente, simple y efectiva</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              title: "IA Asistente",
              description: "Sugerencias automáticas con IA que facilitan la creación de planes personalizados",
              color: "from-blue-500 to-purple-600",
              icon: "/placeholder.svg"
            },
            {
              title: "Gestión Centralizada",
              description: "Gestión centralizada por institución y docente que mejora la coordinación",
              color: "from-green-500 to-teal-600",
              icon: "/placeholder.svg"
            },
            {
              title: "Exportación a PDF",
              description: "Exportación de PIAR en PDF listos para presentar en cualquier momento",
              color: "from-yellow-500 to-orange-600",
              icon: "/placeholder.svg"
            },
            {
              title: "Seguridad Garantizada",
              description: "Plataforma segura y fácil de usar que protege la información sensible",
              color: "from-red-500 to-pink-600",
              icon: "/placeholder.svg"
            }
          ].map((feature, index) => (
            <div key={index} className="bg-white rounded-xl shadow-md overflow-hidden transform hover:scale-[1.02] hover:shadow-lg transition-all duration-300">
              <div className={`h-2 bg-gradient-to-r ${feature.color}`}></div>
              <div className="p-5">
                <div className="flex items-center mb-3">
                  <div className="bg-gray-100 p-2 rounded-lg mr-3">
                    <img src={feature.icon} alt={feature.title} className="h-7 w-7" />
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

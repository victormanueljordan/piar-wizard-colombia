
import { AspectRatio } from '@/components/ui/aspect-ratio';

const VideoSection = () => {
  return (
    <section className="py-16 px-4 bg-gray-900 text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('/placeholder.svg')] bg-cover bg-center"></div>
      </div>
      
      <div className="container mx-auto relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">Conoce nuestra historia</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Pitch Video */}
          <div className="bg-white/10 backdrop-blur-sm p-4 rounded-xl shadow-2xl">
            <h3 className="text-xl font-semibold mb-3 text-center">Nuestro Pitch</h3>
            <div className="aspect-video rounded-lg overflow-hidden">
              <iframe
                src="https://www.youtube.com/embed/ZWpj-XXPno8"
                title="PIAR123 Pitch Video"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
              ></iframe>
            </div>
            <p className="mt-3 text-gray-300 text-center">
              Descubre la visión detrás de PIAR123 y cómo estamos transformando la educación inclusiva.
            </p>
          </div>
          
          {/* Award Video */}
          <div className="bg-white/10 backdrop-blur-sm p-4 rounded-xl shadow-2xl">
            <h3 className="text-xl font-semibold mb-3 text-center">Premio Hackathon</h3>
            <div className="aspect-video rounded-lg overflow-hidden">
              <iframe
                src="https://www.youtube.com/embed/8UVhvfzC0bI"
                title="PIAR123 Award Ceremony"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
              ></iframe>
            </div>
            <p className="mt-3 text-gray-300 text-center">
              PIAR123 fue galardonado en la Hackathon LATAM de IA entre más de 800 participantes.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;

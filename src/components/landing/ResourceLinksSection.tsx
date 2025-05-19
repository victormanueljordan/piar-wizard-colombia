
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ExternalLink, FileText, Book, Bookmark } from 'lucide-react';
import ScrollReveal from '@/components/ScrollReveal';

type ResourceLink = {
  title: string;
  url: string;
  description: string;
  icon: 'pdf' | 'web' | 'doc' | 'guide';
}

const resources: ResourceLink[] = [
  {
    title: 'Decreto 1421 del 29 de agosto de 2017',
    url: 'https://www.saldarriagaconcha.org/wp-content/uploads/2022/08/DECRETO-1421-DEL-29-DE-AGOSTO-DE-2017.pdf',
    description: 'Marco legal que regula la atención educativa a estudiantes con discapacidad.',
    icon: 'pdf'
  },
  {
    title: 'Formato PIAR (incluye los tres anexos)',
    url: 'https://www.saldarriagaconcha.org/wp-content/uploads/2019/01/Formato-PIAR.pdf',
    description: 'Formato oficial para la construcción de PIAR con sus respectivos anexos.',
    icon: 'pdf'
  },
  {
    title: 'Micrositio del Ministerio de Educación Nacional – Educación Inclusiva',
    url: 'https://www.mineducacion.gov.co/portal/micrositios-preescolar-basica-y-media/Direccion-de-Calidad/Gestion-Institucional/374740:Educacion-inclusiva',
    description: 'Portal con lineamientos y recursos sobre educación inclusiva en Colombia.',
    icon: 'web'
  },
  {
    title: 'Orientaciones técnicas, administrativas y pedagógicas – MEN',
    url: 'https://www.mineducacion.gov.co/1780/articles-360293_foto_portada.pdf',
    description: 'Documento guía para la atención educativa de estudiantes con discapacidad.',
    icon: 'guide'
  }
];

// Icon renderer based on resource type
const ResourceIcon = ({ type }: { type: string }) => {
  switch (type) {
    case 'pdf':
      return <FileText className="h-6 w-6 text-red-500" />;
    case 'web':
      return <ExternalLink className="h-6 w-6 text-blue-500" />;
    case 'doc':
      return <FileText className="h-6 w-6 text-blue-500" />;
    case 'guide':
      return <Book className="h-6 w-6 text-green-500" />;
    default:
      return <Bookmark className="h-6 w-6 text-gray-500" />;
  }
};

const ResourceLinksSection = () => {
  return (
    <section className="section bg-gradient-to-b from-white to-gray-50 py-16 px-4">
      <div className="container mx-auto">
        <ScrollReveal>
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-3 font-heading">
            Enlaces de interés sobre el PIAR y la educación inclusiva
          </h2>
          <p className="text-lg text-gray-600 text-center max-w-3xl mx-auto mb-12">
            Recursos oficiales, normativas y guías para la implementación del PIAR
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {resources.map((resource) => (
            <ScrollReveal key={resource.url} delay={200}>
              <a 
                href={resource.url} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="block group hover:no-underline"
              >
                <Card className="h-full hover:shadow-lg transition-all duration-300 border-l-4 border-l-piar-blue group-hover:border-l-blue-600">
                  <CardHeader className="flex flex-row items-center gap-4 p-4 pb-2">
                    <div className="bg-gray-100 rounded-full p-3 group-hover:bg-blue-50 transition-colors">
                      <ResourceIcon type={resource.icon} />
                    </div>
                    <CardTitle className="text-lg font-medium group-hover:text-piar-blue transition-colors">
                      {resource.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="p-4 pt-2">
                    <CardDescription className="text-gray-600">
                      {resource.description}
                    </CardDescription>
                    <div className="flex justify-end mt-2">
                      <span className="text-sm text-blue-600 flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                        Abrir recurso <ExternalLink className="h-4 w-4" />
                      </span>
                    </div>
                  </CardContent>
                </Card>
              </a>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ResourceLinksSection;

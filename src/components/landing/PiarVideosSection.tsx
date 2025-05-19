
import React from 'react';
import { 
  Carousel, 
  CarouselContent, 
  CarouselItem, 
  CarouselNext, 
  CarouselPrevious 
} from '@/components/ui/carousel';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import ScrollReveal from '@/components/ScrollReveal';

type VideoInfo = {
  id: string;
  title: string;
}

const videos: VideoInfo[] = [
  {
    id: 'ZoY834PpynY',
    title: 'TE INVITAMOS A ENTENDER LOS PIAR'
  },
  {
    id: 'q-z6j9iCxw0',
    title: 'ELEMENTOS DEL PLAN INDIVIDUAL DE AJUSTES RAZONABLES'
  },
  {
    id: 'aJu5J6ujxRE',
    title: 'IMPLEMENTACIÓN DEL PIAR'
  },
  {
    id: 'jNWflL8YIKU',
    title: 'LA EDUCACIÓN INCLUSIVA Y EL PIAR'
  }
];

const PiarVideosSection = () => {
  return (
    <section className="section bg-gradient-to-b from-gray-50 to-white py-16 px-4">
      <div className="container mx-auto">
        <ScrollReveal>
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-3 font-heading">
            PIAR en acción: aprende en video
          </h2>
          <p className="text-lg text-gray-600 text-center max-w-3xl mx-auto mb-12">
            Explora contenido audiovisual que explica la importancia y aplicación del PIAR en la educación inclusiva.
          </p>
        </ScrollReveal>

        <div className="relative px-4 md:px-12">
          <Carousel 
            opts={{
              align: 'start',
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent>
              {videos.map((video) => (
                <CarouselItem key={video.id} className="md:basis-1/2 lg:basis-1/3 pl-4 pr-4">
                  <ScrollReveal delay={200}>
                    <Card className="overflow-hidden hover:shadow-lg transition-all duration-300 h-full">
                      <CardHeader className="p-4 pb-2">
                        <CardTitle className="text-lg">{video.title}</CardTitle>
                      </CardHeader>
                      <CardContent className="p-4 pt-2">
                        <div className="aspect-video rounded-md overflow-hidden">
                          <iframe
                            width="100%"
                            height="100%"
                            src={`https://www.youtube.com/embed/${video.id}`}
                            title={video.title}
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                            className="w-full h-full"
                          ></iframe>
                        </div>
                      </CardContent>
                    </Card>
                  </ScrollReveal>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="hidden md:block">
              <CarouselPrevious className="left-2 bg-white shadow-md hover:bg-gray-100" />
              <CarouselNext className="right-2 bg-white shadow-md hover:bg-gray-100" />
            </div>
          </Carousel>

          <div className="mt-8 text-center">
            <p className="text-sm text-gray-500 hidden md:block">Usa las flechas para navegar</p>
            <p className="text-sm text-gray-500 block md:hidden">Desliza para ver más videos</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PiarVideosSection;

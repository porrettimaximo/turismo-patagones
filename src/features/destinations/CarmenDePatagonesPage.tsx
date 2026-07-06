import { useState } from 'react';
import { MapPin, FileImage, Info, ArrowLeft, Video, ChevronLeft, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import FolleteriaModal from '../../shared/FolleteriaModal';

export default function CarmenDePatagonesPage() {
  const [isFolleteriaOpen, setIsFolleteriaOpen] = useState(false);
  const brochures = [
    { title: 'Plano de la ciudad', image: '/images/folleteria/carmen-de-patagones/plano-ciudad.pdf' },
    { title: 'Guía de servicios', image: '/images/folleteria/carmen-de-patagones/guia-servicios.pdf' },
    { title: 'Circuitos autoguiados', image: '/images/folleteria/carmen-de-patagones/circuitos-autoguiados.pdf' },
    { title: 'Ruta de los museos', image: '/images/folleteria/carmen-de-patagones/ruta-museos.pdf' }
  ];

  const [currentVideo, setCurrentVideo] = useState(0);
  const videos = [
    "https://www.youtube.com/embed/INe5SP2Uo2E?si=3HpL3XyeX3cVS-Zy",
    "https://www.youtube.com/embed/_OxEGqopFog?si=IFd-CVUagAx6i2vV"
  ];

  const nextVideo = () => setCurrentVideo((prev) => (prev + 1) % videos.length);
  const prevVideo = () => setCurrentVideo((prev) => (prev - 1 + videos.length) % videos.length);

  return (
    <div className="w-full min-h-screen bg-neutral-50 pb-12">
      {/* Hero Header */}
      <div className="w-full h-[50vh] min-h-[300px] relative">
        <img 
          src="/images/carmen-de-patagones.jpg" 
          alt="Vista aérea de Carmen de Patagones y el río Negro" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40 flex flex-col justify-end p-8">
          <div className="max-w-4xl mx-auto w-full">
            <Link to="/destinos" className="inline-flex items-center gap-2 text-white/90 hover:text-white mb-4 transition-colors font-medium">
              <ArrowLeft className="w-5 h-5" /> Volver a Destinos
            </Link>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-2">
              Carmen de Patagones
            </h1>
            <p className="text-xl text-white/90 flex items-center gap-2">
                <MapPin className="w-5 h-5" /> Patagonia Argentina
              </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 mt-8 flex flex-col gap-8">
        <div className="bg-white p-8 rounded-xl shadow-sm border border-neutral-100 flex flex-col gap-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b pb-4">
            <div className="flex items-center gap-3 text-[var(--color-primary)]">
              <Info className="w-6 h-6" />
              <h2 className="text-2xl font-bold">Acerca del destino</h2>
            </div>
            <div className="flex gap-2 items-center flex-wrap">
              <button 
                onClick={() => setIsFolleteriaOpen(true)}
                className="inline-flex items-center gap-2 bg-neutral-100 hover:bg-neutral-200 text-neutral-800 px-4 py-2 rounded-full transition-colors text-sm font-medium w-fit whitespace-nowrap"
              >
                <FileImage className="w-4 h-4" />
                Folletería
              </button>
              <a 
                href="https://www.google.com/maps/search/?api=1&query=Carmen+de+Patagones+Buenos+Aires"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[var(--color-primary)] hover:opacity-90 text-white px-4 py-2 rounded-full transition-opacity text-sm font-medium w-fit"
              >
                <MapPin className="w-4 h-4" />
                Ver en Maps
              </a>
            </div>
          </div>
          
          <div className="prose max-w-none text-neutral-700 leading-relaxed text-lg flex flex-col gap-4">
            <p>
              Carmen de Patagones, cabecera del partido homónimo, es la ciudad más austral de la provincia de Buenos Aires. Se encuentra emplazada sobre la margen norte del río Negro, frente a la ciudad de Viedma (capital de la provincia de Río Negro), conformando ambas la histórica y pintoresca Comarca Viedma-Patagones.
            </p>
            <p>
              Su <strong>Casco Histórico</strong> fue declarado Poblado Histórico Nacional en 2003, conservando con orgullo sus calles sinuosas, sus antiguas casonas coloniales, los vestigios del Fuerte del Carmen y la imponente Iglesia Parroquial Nuestra Señora del Carmen. 
            </p>
            <p>
              Caminar por sus callejones empedrados es un viaje directo al pasado: fue escenario de importantes gestas nacionales, como la heroica defensa durante la Invasión del Imperio del Brasil en 1827. Dicha victoria se conmemora cada año a través de la gran <em>Fiesta de la Soberanía Patagónica</em>, que reúne historia, cultura, tradición y shows artísticos.
            </p>
            <p>
              Sus pronunciadas barrancas miran directamente al caudaloso río Negro, ofreciendo hermosas postales en el muelle nacional y paseos tranquilos. Aquí nace verdaderamente la Patagonia, uniendo en un solo lugar la hospitalidad de su gente y el peso de una historia viva.
            </p>
          </div>
        </div>

        {/* Video Section */}
        <div className="bg-white p-8 rounded-xl shadow-sm border border-neutral-100 flex flex-col gap-6">
          <div className="flex items-center gap-3 text-[var(--color-primary)] border-b pb-4">
            <Video className="w-6 h-6" />
            <h2 className="text-2xl font-bold">Carmen de Patagones a través de los viajeros</h2>
          </div>
          
          <div className="relative w-full">
            <div className="relative w-full overflow-hidden rounded-lg bg-neutral-900" style={{ paddingTop: '56.25%' }}>
              <iframe 
                key={currentVideo}
                className="absolute top-0 left-0 w-full h-full"
                src={videos[currentVideo]}
                title={`Experiencia de viajero ${currentVideo + 1}`}
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen>
              </iframe>
            </div>

            {/* Controles del carrusel */}
            <div className="flex items-center justify-between mt-4">
              <button 
                onClick={prevVideo}
                className="p-2 rounded-full bg-neutral-100 hover:bg-neutral-200 text-neutral-700 transition-colors flex items-center justify-center"
                aria-label="Video anterior"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              
              <div className="flex gap-2">
                {videos.map((_, idx) => (
                  <button 
                    key={idx}
                    onClick={() => setCurrentVideo(idx)}
                    className={`w-3 h-3 rounded-full transition-colors ${
                      currentVideo === idx ? 'bg-[var(--color-primary)]' : 'bg-neutral-300 hover:bg-neutral-400'
                    }`}
                    aria-label={`Ir al video ${idx + 1}`}
                  />
                ))}
              </div>

              <button 
                onClick={nextVideo}
                className="p-2 rounded-full bg-neutral-100 hover:bg-neutral-200 text-neutral-700 transition-colors flex items-center justify-center"
                aria-label="Siguiente video"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>

      </div>
    
      <FolleteriaModal isOpen={isFolleteriaOpen} onClose={() => setIsFolleteriaOpen(false)} brochures={brochures} />
    </div>
  );
}
import { useState } from 'react';
import { MapPin, FileImage, Info, ArrowLeft, Video, ChevronLeft, ChevronRight, Calendar, Map } from 'lucide-react';
import { Link } from 'react-router-dom';
import FolleteriaModal from '../../shared/FolleteriaModal';

export default function Villa7DeMarzoPage() {
  const [isFolleteriaOpen, setIsFolleteriaOpen] = useState(false);
  const brochures: any[] = [];

  const [currentVideo, setCurrentVideo] = useState(0);
  const videos = [
    "https://www.youtube.com/embed/v-C1ArGjsXU?si=BoW8_aKbDvMdGtOd",
    "https://www.youtube.com/embed/teoo8KBcHCs?si=fnl3E10rxJl9aTtl"
  ];

  const nextVideo = () => setCurrentVideo((prev) => (prev + 1) % videos.length);
  const prevVideo = () => setCurrentVideo((prev) => (prev - 1 + videos.length) % videos.length);

  return (
    <div className="w-full min-h-screen bg-neutral-50 pb-12">
      {/* Hero Header */}
      <div className="w-full h-[50vh] min-h-[300px] relative bg-neutral-900">
        <img 
          src="/images/villa-7-de-marzo.jpg" 
          alt="Vista aérea de la Villa Turística 7 de Marzo" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40 flex flex-col justify-end p-8">
          <div className="max-w-4xl mx-auto w-full">
            <Link to="/destinos" className="inline-flex items-center gap-2 text-white/90 hover:text-white mb-4 transition-colors font-medium">
              <ArrowLeft className="w-5 h-5" /> Volver a Destinos
            </Link>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-2">
              Villa Turística 7 de Marzo
            </h1>
            <p className="text-xl text-white/90 flex items-center gap-2">
                <MapPin className="w-5 h-5" /> Donde el Río Negro abraza al mar
              </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 mt-8 flex flex-col gap-8">
        
        {/* Información del destino */}
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
                href="https://www.google.com/maps/search/?api=1&query=La+Baliza,+Villa+7+de+Marzo,+Patagones,+Provincia+de+Buenos+Aires"
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
              Conocida popularmente como <strong>"La Baliza"</strong>, la Villa Turística 7 de Marzo es el punto exacto donde las aguas del imponente río Negro desembocan finalmente en el Mar Argentino, ofreciendo un espectáculo natural inigualable.
            </p>
            <p>
              Es un paraje de belleza agreste y virgen, ideal para quienes buscan alejarse del ruido, disfrutar de una tranquilidad absoluta, practicar pesca deportiva de costa y entrar en contacto directo con la naturaleza en su estado más puro. Sus inmensas playas de arena fina son perfectas para caminatas y para el disfrute familiar durante el verano.
            </p>
            <p>
              Su nombre rinde homenaje a la heroica gesta del <em>7 de Marzo de 1827</em>, fecha en la que el pueblo de Carmen de Patagones repelió valerosamente la invasión del Imperio del Brasil.
            </p>
            <p>
              Visitar este destino es ser testigo privilegiado de la inmensidad patagónica, donde la historia, el río y el mar se unen de forma magistral.
            </p>
          </div>
        </div>

        {/* Servicios e Info Section */}
        <div className="bg-white p-8 rounded-xl shadow-sm border border-neutral-100 flex flex-col gap-6">
          <div className="flex items-center gap-3 text-[var(--color-primary)] border-b pb-4">
            <Info className="w-6 h-6" />
            <h2 className="text-2xl font-bold">Información de Viaje</h2>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <Link to="/que-hacer?loc=Villa Turística 7 de Marzo" className="flex flex-col items-center justify-center gap-3 p-6 bg-neutral-50 rounded-xl border border-neutral-100 hover:bg-orange-50 hover:border-orange-200 hover:text-[var(--color-tertiary)] transition-all group">
              <div className="p-3 bg-white rounded-full shadow-sm text-[var(--color-primary)] group-hover:text-[var(--color-tertiary)] transition-colors">
                <Calendar className="w-6 h-6" />
              </div>
              <span className="font-bold text-neutral-700 group-hover:text-[var(--color-tertiary)] text-center text-sm md:text-base">Qué hacer</span>
            </Link>
            
            <Link to="/info-viaje?loc=Villa Turística 7 de Marzo" className="flex flex-col items-center justify-center gap-3 p-6 bg-neutral-50 rounded-xl border border-neutral-100 hover:bg-orange-50 hover:border-orange-200 hover:text-[var(--color-tertiary)] transition-all group">
              <div className="p-3 bg-white rounded-full shadow-sm text-[var(--color-primary)] group-hover:text-[var(--color-tertiary)] transition-colors">
                <Map className="w-6 h-6" />
              </div>
              <span className="font-bold text-neutral-700 group-hover:text-[var(--color-tertiary)] text-center text-sm md:text-base">Consejos y Accesos</span>
            </Link>
          </div>
        </div>

        {/* Video Section */}
        <div className="bg-white p-8 rounded-xl shadow-sm border border-neutral-100 flex flex-col gap-6">
          <div className="flex items-center gap-3 text-[var(--color-primary)] border-b pb-4">
            <Video className="w-6 h-6" />
            <h2 className="text-2xl font-bold">La Villa a través de los viajeros</h2>
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
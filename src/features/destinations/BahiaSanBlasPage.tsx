import { useState } from 'react';
import { MapPin, FileImage, Info, ArrowLeft, Video, ChevronLeft, ChevronRight, Utensils, Bed, Store, Anchor, Map, Calendar } from 'lucide-react';
import { Link } from 'react-router-dom';
import FolleteriaModal from '../../shared/FolleteriaModal';

export default function BahiaSanBlasPage() {
  const [isFolleteriaOpen, setIsFolleteriaOpen] = useState(false);
  const brochures = [
    { title: 'Plano de la localidad', image: '/images/folleteria/san-blas/plano-localidad.png' },
    { title: 'Plano de la isla', image: '/images/folleteria/san-blas/plano-isla.jpg' },
    { title: 'Circuito patrimonial', image: '/images/folleteria/san-blas/circuito-patrimonial.png' },
    { title: 'Guía de pesca', image: '/images/folleteria/san-blas/guia-pesca.pdf' }
  ];

  const [currentVideo, setCurrentVideo] = useState(0);
  const videos = [
    "https://www.youtube.com/embed/gjBWxU1--1g?si=zpaTSDvoF_s27jkT",
    "https://www.youtube.com/embed/2BDL71bk_oE?si=MTcOwDTxGtHQ3VBh&controls=0"
  ];

  const nextVideo = () => setCurrentVideo((prev) => (prev + 1) % videos.length);
  const prevVideo = () => setCurrentVideo((prev) => (prev - 1 + videos.length) % videos.length);

  return (
    <div className="w-full min-h-screen bg-neutral-50 pb-12">
      {/* Hero Header */}
      <div className="w-full h-[50vh] min-h-[300px] relative">
        <img
          src="/images/bahia-san-blas.jpg"
          alt="Vista de la costanera de Bahía San Blas con sus sombrillas características"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40 flex flex-col justify-end p-8">
          <div className="max-w-4xl mx-auto w-full">
            <Link to="/destinos" className="inline-flex items-center gap-2 text-white/90 hover:text-white mb-4 transition-colors font-medium">
              <ArrowLeft className="w-5 h-5" /> Volver a Destinos
            </Link>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-2">
              Bahía San Blas
            </h1>
            <p className="text-xl text-white/90 flex items-center gap-2">
              <MapPin className="w-5 h-5" /> El Paraíso del Pescador
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
                href="https://www.google.com/maps/search/?api=1&query=Bahia+San+Blas+Buenos+Aires"
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
              Ubicada en el sur de la provincia de Buenos Aires, dentro del partido de Patagones, <strong>Bahía San Blas</strong> es reconocida a nivel nacional e internacional como el <em>"Paraíso del pescador deportivo"</em>.
            </p>
            <p>
              Sus extensas playas de canto rodado y suave oleaje ofrecen un entorno ideal para la pesca, tanto de costa como embarcado. Las aguas que bañan la Isla del Jabalí son hogar de una gran variedad de especies, destacándose la captura de pejerreyes, pescadillas, corvinas y diferentes variedades de tiburones.
            </p>
            <p>
              Pero San Blas es mucho más que pesca. Al formar parte de una Reserva Natural de Usos Múltiples, este destino invita a disfrutar de su naturaleza intacta, observar su variada fauna (como aves marinas y terrestres) y desconectarse de la rutina en un ambiente de absoluta paz y tranquilidad.
            </p>
            <p>
              Con una infraestructura turística preparada para recibir a los visitantes, la bahía ofrece todos los servicios necesarios para unas vacaciones inolvidables, combinando la pasión por el deporte con el descanso en familia.
            </p>
          </div>
        </div>

        {/* Servicios e Info Section */}
        <div className="bg-white p-8 rounded-xl shadow-sm border border-neutral-100 flex flex-col gap-6">
          <div className="flex items-center gap-3 text-[var(--color-primary)] border-b pb-4">
            <Info className="w-6 h-6" />
            <h2 className="text-2xl font-bold">Información y Servicios</h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            <Link to="/info-viaje?loc=Bahía San Blas&q=alojamiento" className="flex flex-col items-center justify-center gap-3 p-6 bg-neutral-50 rounded-xl border border-neutral-100 hover:bg-orange-50 hover:border-orange-200 hover:text-[var(--color-tertiary)] transition-all group">
              <div className="p-3 bg-white rounded-full shadow-sm text-[var(--color-primary)] group-hover:text-[var(--color-tertiary)] transition-colors">
                <Bed className="w-6 h-6" />
              </div>
              <span className="font-bold text-neutral-700 group-hover:text-[var(--color-tertiary)] text-center text-sm md:text-base">¿Dónde dormir?</span>
            </Link>

            <Link to="/info-viaje?loc=Bahía San Blas&q=gastronomía" className="flex flex-col items-center justify-center gap-3 p-6 bg-neutral-50 rounded-xl border border-neutral-100 hover:bg-orange-50 hover:border-orange-200 hover:text-[var(--color-tertiary)] transition-all group">
              <div className="p-3 bg-white rounded-full shadow-sm text-[var(--color-primary)] group-hover:text-[var(--color-tertiary)] transition-colors">
                <Utensils className="w-6 h-6" />
              </div>
              <span className="font-bold text-neutral-700 group-hover:text-[var(--color-tertiary)] text-center text-sm md:text-base">¿Dónde comer?</span>
            </Link>

            <Link to="/info-viaje?loc=Bahía San Blas&q=comercios" className="flex flex-col items-center justify-center gap-3 p-6 bg-neutral-50 rounded-xl border border-neutral-100 hover:bg-orange-50 hover:border-orange-200 hover:text-[var(--color-tertiary)] transition-all group">
              <div className="p-3 bg-white rounded-full shadow-sm text-[var(--color-primary)] group-hover:text-[var(--color-tertiary)] transition-colors">
                <Store className="w-6 h-6" />
              </div>
              <span className="font-bold text-neutral-700 group-hover:text-[var(--color-tertiary)] text-center text-sm md:text-base">Comercios</span>
            </Link>

            <Link to="/info-viaje?loc=Bahía San Blas&q=llegar" className="flex flex-col items-center justify-center gap-3 p-6 bg-neutral-50 rounded-xl border border-neutral-100 hover:bg-orange-50 hover:border-orange-200 hover:text-[var(--color-tertiary)] transition-all group">
              <div className="p-3 bg-white rounded-full shadow-sm text-[var(--color-primary)] group-hover:text-[var(--color-tertiary)] transition-colors">
                <Map className="w-6 h-6" />
              </div>
              <span className="font-bold text-neutral-700 group-hover:text-[var(--color-tertiary)] text-center text-sm md:text-base">Cómo llegar</span>
            </Link>

            <Link to="/que-hacer?loc=Bahía San Blas&q=embarcada" className="flex flex-col items-center justify-center gap-3 p-6 bg-neutral-50 rounded-xl border border-neutral-100 hover:bg-orange-50 hover:border-orange-200 hover:text-[var(--color-tertiary)] transition-all group">
              <div className="p-3 bg-white rounded-full shadow-sm text-[var(--color-primary)] group-hover:text-[var(--color-tertiary)] transition-colors">
                <Anchor className="w-6 h-6" />
              </div>
              <span className="font-bold text-neutral-700 group-hover:text-[var(--color-tertiary)] text-center text-sm md:text-base">Pesca Embarcada</span>
            </Link>

            <Link to="/que-hacer?loc=Bahía San Blas" className="flex flex-col items-center justify-center gap-3 p-6 bg-neutral-50 rounded-xl border border-neutral-100 hover:bg-orange-50 hover:border-orange-200 hover:text-[var(--color-tertiary)] transition-all group">
              <div className="p-3 bg-white rounded-full shadow-sm text-[var(--color-primary)] group-hover:text-[var(--color-tertiary)] transition-colors">
                <Calendar className="w-6 h-6" />
              </div>
              <span className="font-bold text-neutral-700 group-hover:text-[var(--color-tertiary)] text-center text-sm md:text-base">Qué hacer</span>
            </Link>
          </div>
        </div>

        {/* Video Section */}
        <div className="bg-white p-8 rounded-xl shadow-sm border border-neutral-100 flex flex-col gap-6">
          <div className="flex items-center gap-3 text-[var(--color-primary)] border-b pb-4">
            <Video className="w-6 h-6" />
            <h2 className="text-2xl font-bold">Bahía San Blas a través de los viajeros</h2>
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
                    className={`w-3 h-3 rounded-full transition-colors ${currentVideo === idx ? 'bg-[var(--color-primary)]' : 'bg-neutral-300 hover:bg-neutral-400'
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
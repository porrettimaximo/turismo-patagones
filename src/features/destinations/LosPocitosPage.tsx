import { useState } from 'react';
import { MapPin, FileImage, Info, ArrowLeft, Video, ChevronLeft, ChevronRight, Bed, Anchor, Map, Calendar } from 'lucide-react';
import { Link } from 'react-router-dom';
import FolleteriaModal from '../../shared/FolleteriaModal';

export default function LosPocitosPage() {
  const [isFolleteriaOpen, setIsFolleteriaOpen] = useState(false);
  const brochures = [
    { title: 'Guía de servicios', image: '/images/folleteria/los-pocitos/guia-servicios.pdf' },
    { title: 'Folleto Los Pocitos', image: '/images/folleteria/los-pocitos/folleto.pdf' }
  ];

  const [currentVideo, setCurrentVideo] = useState(0);
  const videos = [
    "https://www.youtube.com/embed/z07jovUXRgM?si=Kjs2zaRA_RJT-G7A&controls=0",
    "https://www.youtube.com/embed/JjtJKJJ7Vf0?si=EFkDqOVPFt89rG7G&controls=0"
  ];

  const nextVideo = () => setCurrentVideo((prev) => (prev + 1) % videos.length);
  const prevVideo = () => setCurrentVideo((prev) => (prev - 1 + videos.length) % videos.length);

  return (
    <div className="w-full min-h-screen bg-neutral-50 pb-12">
      {/* Hero Header */}
      <div className="w-full h-[50vh] min-h-[300px] relative">
        <img
          src="/images/los-pocitos.jpg"
          alt="Vista del mar sereno y las playas del Balneario Los Pocitos"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40 flex flex-col justify-end p-8">
          <div className="max-w-4xl mx-auto w-full">
            <Link to="/destinos" className="inline-flex items-center gap-2 text-white/90 hover:text-white mb-4 transition-colors font-medium">
              <ArrowLeft className="w-5 h-5" /> Volver a Destinos
            </Link>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-2">
              Balneario Los Pocitos
            </h1>
            <p className="text-xl text-white/90 flex items-center gap-2">
              <MapPin className="w-5 h-5" /> Remanso de paz y naturaleza
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
                href="https://www.google.com/maps/search/?api=1&query=Balneario+Los+Pocitos+Buenos+Aires"
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
              El <strong>Balneario Los Pocitos</strong> es un encantador y pequeño poblado turístico ubicado a pocos kilómetros de Bahía San Blas. Se distingue por la extrema tranquilidad de su entorno y por contar con aguas sumamente mansas, protegidas de los grandes oleajes.
            </p>
            <p>
              Sus playas de arena y conchilla invitan al descanso, a largas caminatas contemplativas y a disfrutar del sol en un ambiente agreste y familiar, lejos de las multitudes.
            </p>
            <p>
              Uno de sus mayores atractivos es, sin dudas, su rica gastronomía centrada en la producción local. Los Pocitos es famoso en toda la región por ser productor de <em>las mejores ostras</em>, celebrándose allí anualmente la popular "Fiesta Provincial de la Ostra", un evento que reúne a visitantes y lugareños para degustar deliciosos platos de mar.
            </p>
            <p>
              Además del relax y la buena comida, las aguas del balneario son propicias para deportes náuticos tranquilos, kayak, paseos embarcados y, por supuesto, la infaltable pesca deportiva costera.
            </p>
          </div>
        </div>

        {/* Servicios e Info Section */}
        <div className="bg-white p-8 rounded-xl shadow-sm border border-neutral-100 flex flex-col gap-6">
          <div className="flex items-center gap-3 text-[var(--color-primary)] border-b pb-4">
            <Info className="w-6 h-6" />
            <h2 className="text-2xl font-bold">Información y Servicios</h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <Link to="/info-viaje?loc=Los Pocitos&q=alojamiento" className="flex flex-col items-center justify-center gap-3 p-6 bg-neutral-50 rounded-xl border border-neutral-100 hover:bg-orange-50 hover:border-orange-200 hover:text-[var(--color-tertiary)] transition-all group">
              <div className="p-3 bg-white rounded-full shadow-sm text-[var(--color-primary)] group-hover:text-[var(--color-tertiary)] transition-colors">
                <Bed className="w-6 h-6" />
              </div>
              <span className="font-bold text-neutral-700 group-hover:text-[var(--color-tertiary)] text-center text-sm md:text-base">¿Dónde dormir?</span>
            </Link>

            <Link to="/info-viaje?loc=Los Pocitos&q=llegar" className="flex flex-col items-center justify-center gap-3 p-6 bg-neutral-50 rounded-xl border border-neutral-100 hover:bg-orange-50 hover:border-orange-200 hover:text-[var(--color-tertiary)] transition-all group">
              <div className="p-3 bg-white rounded-full shadow-sm text-[var(--color-primary)] group-hover:text-[var(--color-tertiary)] transition-colors">
                <Map className="w-6 h-6" />
              </div>
              <span className="font-bold text-neutral-700 group-hover:text-[var(--color-tertiary)] text-center text-sm md:text-base">Cómo llegar</span>
            </Link>

            <Link to="/que-hacer?loc=Los Pocitos&q=embarcada" className="flex flex-col items-center justify-center gap-3 p-6 bg-neutral-50 rounded-xl border border-neutral-100 hover:bg-orange-50 hover:border-orange-200 hover:text-[var(--color-tertiary)] transition-all group">
              <div className="p-3 bg-white rounded-full shadow-sm text-[var(--color-primary)] group-hover:text-[var(--color-tertiary)] transition-colors">
                <Anchor className="w-6 h-6" />
              </div>
              <span className="font-bold text-neutral-700 group-hover:text-[var(--color-tertiary)] text-center text-sm md:text-base">Pesca Embarcada</span>
            </Link>

            <Link to="/que-hacer?loc=Los Pocitos" className="flex flex-col items-center justify-center gap-3 p-6 bg-neutral-50 rounded-xl border border-neutral-100 hover:bg-orange-50 hover:border-orange-200 hover:text-[var(--color-tertiary)] transition-all group">
              <div className="p-3 bg-white rounded-full shadow-sm text-[var(--color-primary)] group-hover:text-[var(--color-tertiary)] transition-colors">
                <Calendar className="w-6 h-6" />
              </div>
              <span className="font-bold text-neutral-700 group-hover:text-[var(--color-tertiary)] text-center text-sm md:text-base">Actividades</span>
            </Link>
          </div>
        </div>

        {/* Video Section */}
        <div className="bg-white p-8 rounded-xl shadow-sm border border-neutral-100 flex flex-col gap-6">
          <div className="flex items-center gap-3 text-[var(--color-primary)] border-b pb-4">
            <Video className="w-6 h-6" />
            <h2 className="text-2xl font-bold">Los Pocitos a través de los viajeros</h2>
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
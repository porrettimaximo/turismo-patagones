import { useState } from 'react';
import { MapPin, FileImage, Info, ArrowLeft, Video, Utensils, Map } from 'lucide-react';
import { Link } from 'react-router-dom';
import FolleteriaModal from '../../shared/FolleteriaModal';

export default function VillalongaPage() {
  const [isFolleteriaOpen, setIsFolleteriaOpen] = useState(false);
  const brochures: any[] = [];

  return (
    <div className="w-full min-h-screen bg-neutral-50 pb-12">
      {/* Hero Header */}
      <div className="w-full h-[50vh] min-h-[300px] relative bg-neutral-900">
        <img 
          src="/images/villalonga.jpg" 
          alt="Vista aérea de la plaza y el pueblo de Villalonga" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40 flex flex-col justify-end p-8">
          <div className="max-w-4xl mx-auto w-full">
            <Link to="/destinos" className="inline-flex items-center gap-2 text-white/90 hover:text-white mb-4 transition-colors font-medium">
              <ArrowLeft className="w-5 h-5" /> Volver a Destinos
            </Link>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-2">
              Villalonga
            </h1>
            <p className="text-xl text-white/90 flex items-center gap-2">
                <MapPin className="w-5 h-5" /> Motor productivo de la región
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
                href="https://www.google.com/maps/search/?api=1&query=Villalonga+Buenos+Aires"
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
              Ubicada estratégicamente sobre la Ruta Nacional N° 3, <strong>Villalonga</strong> es una de las localidades más prósperas y pujantes del partido de Patagones. Su desarrollo e historia están íntimamente ligados a la llegada de inmigrantes que apostaron al crecimiento y a la riqueza de estas tierras.
            </p>
            <p>
              La localidad se destaca por su marcado orden urbanístico, sus frondosas calles arboladas y su imponente plaza central, la cual sirve como punto de encuentro para todos los vecinos y visitantes. Cuenta con todos los servicios necesarios, convirtiéndose en el centro neurálgico del comercio y la producción agropecuaria de la zona norte del partido.
            </p>
            <p>
              Además de ser el punto de acceso ideal hacia atractivos como el Balneario Los Pocitos y la Salina de Piedras, Villalonga invita a conocer la cálida vida de un pueblo rural moderno, preservando sus tradiciones, su tranquilidad y su inmensa hospitalidad.
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
            <Link to="/info-viaje?q=gastronomía%20villalonga" className="flex flex-col items-center justify-center gap-3 p-6 bg-neutral-50 rounded-xl border border-neutral-100 hover:bg-orange-50 hover:border-orange-200 hover:text-[var(--color-tertiary)] transition-all group">
              <div className="p-3 bg-white rounded-full shadow-sm text-[var(--color-primary)] group-hover:text-[var(--color-tertiary)] transition-colors">
                <Utensils className="w-6 h-6" />
              </div>
              <span className="font-bold text-neutral-700 group-hover:text-[var(--color-tertiary)] text-center text-sm md:text-base">¿Dónde comer?</span>
            </Link>
            
            <Link to="/info-viaje?q=llegar%20villalonga" className="flex flex-col items-center justify-center gap-3 p-6 bg-neutral-50 rounded-xl border border-neutral-100 hover:bg-orange-50 hover:border-orange-200 hover:text-[var(--color-tertiary)] transition-all group">
              <div className="p-3 bg-white rounded-full shadow-sm text-[var(--color-primary)] group-hover:text-[var(--color-tertiary)] transition-colors">
                <Map className="w-6 h-6" />
              </div>
              <span className="font-bold text-neutral-700 group-hover:text-[var(--color-tertiary)] text-center text-sm md:text-base">Cómo llegar</span>
            </Link>
          </div>
        </div>

        {/* Video Section */}
        <div className="bg-white p-8 rounded-xl shadow-sm border border-neutral-100 flex flex-col gap-6">
          <div className="flex items-center gap-3 text-[var(--color-primary)] border-b pb-4">
            <Video className="w-6 h-6" />
            <h2 className="text-2xl font-bold">Villalonga a través de los viajeros</h2>
          </div>
          
          <div className="relative w-full overflow-hidden rounded-lg bg-neutral-900" style={{ paddingTop: '56.25%' }}>
            <iframe 
              className="absolute top-0 left-0 w-full h-full"
              src="https://www.youtube.com/embed/Dj7X31ABEhs?si=7sJOWCropv3YMr3i" 
              title="YouTube video player"
              frameBorder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen>
            </iframe>
          </div>
        </div>

      </div>
    
      <FolleteriaModal isOpen={isFolleteriaOpen} onClose={() => setIsFolleteriaOpen(false)} brochures={brochures} />
    </div>
  );
}
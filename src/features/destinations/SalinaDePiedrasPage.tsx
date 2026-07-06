import { useState } from 'react';
import { MapPin, FileImage, Info, ArrowLeft, Video, Map, Compass, Calendar } from 'lucide-react';
import { Link } from 'react-router-dom';
import FolleteriaModal from '../../shared/FolleteriaModal';

export default function SalinaDePiedrasPage() {
  const [isFolleteriaOpen, setIsFolleteriaOpen] = useState(false);
  const brochures: any[] = [];

  return (
    <div className="w-full min-h-screen bg-neutral-50 pb-12">
      {/* Hero Header */}
      <div className="w-full h-[50vh] min-h-[300px] relative">
        <img 
          src="/images/salina-de-piedras.png" 
          alt="Paisaje de la Salina de Piedras con montículos de sal y agua rosada" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40 flex flex-col justify-end p-8">
          <div className="max-w-4xl mx-auto w-full">
            <Link to="/destinos" className="inline-flex items-center gap-2 text-white/90 hover:text-white mb-4 transition-colors font-medium">
              <ArrowLeft className="w-5 h-5" /> Volver a Destinos
            </Link>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-2">
              Salina de Piedras
            </h1>
            <p className="text-xl text-white/90 flex items-center gap-2">
                <MapPin className="w-5 h-5" /> El espejo rosado de la Patagonia
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
                href="https://www.google.com/maps/search/?api=1&query=Salina+de+Piedras+Patagones+Buenos+Aires"
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
              Ubicada a pocos kilómetros de la ciudad, la <strong>Salina de Piedras</strong> es uno de los secretos mejor guardados del partido de Patagones. Se trata de una inmensa depresión natural que funciona como un yacimiento de sal y que regala uno de los paisajes más exóticos de la región.
            </p>
            <p>
              Dependiendo de la época del año, la cantidad de lluvia y la presencia de ciertos microorganismos (como algas halófilas y bacterias), el agua que cubre superficialmente la salina puede adquirir <em>tonalidades que van desde el rojizo intenso hasta un rosa suave</em>, creando un contraste espectacular con la blancura de la sal cristalizada y el cielo patagónico.
            </p>
            <p>
              Este escenario es un verdadero paraíso para los amantes de la fotografía y la observación de la naturaleza agreste. Caminar por los alrededores de la salina es una experiencia que transmite una inmensa paz y permite dimensionar la riqueza mineral y geológica de la estepa bonaerense.
            </p>
            <p>
              Su paisaje agreste, silencioso y cambiante, invita a la contemplación y al asombro frente a las maravillas escondidas que ofrece la Patagonia Norte.
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
            <Link to="/info-viaje?loc=Salina de Piedras" className="flex flex-col items-center justify-center gap-3 p-6 bg-neutral-50 rounded-xl border border-neutral-100 hover:bg-orange-50 hover:border-orange-200 hover:text-[var(--color-tertiary)] transition-all group">
              <div className="p-3 bg-white rounded-full shadow-sm text-[var(--color-primary)] group-hover:text-[var(--color-tertiary)] transition-colors">
                <Info className="w-6 h-6" />
              </div>
              <span className="font-bold text-neutral-700 group-hover:text-[var(--color-tertiary)] text-center text-sm md:text-base">Información Local</span>
            </Link>
            
            <Link to="/que-hacer?loc=Salina de Piedras" className="flex flex-col items-center justify-center gap-3 p-6 bg-neutral-50 rounded-xl border border-neutral-100 hover:bg-orange-50 hover:border-orange-200 hover:text-[var(--color-tertiary)] transition-all group">
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
            <h2 className="text-2xl font-bold">Salina de Piedras a través de los viajeros</h2>
          </div>
          
          <div className="relative w-full overflow-hidden rounded-lg bg-neutral-900" style={{ paddingTop: '56.25%' }}>
            <iframe 
              className="absolute top-0 left-0 w-full h-full"
              src="https://www.youtube.com/embed/1luwRKYs8So?si=u7HC_ydzyuA3XDtP" 
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
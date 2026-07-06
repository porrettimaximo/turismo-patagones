import { useState } from 'react';
import { MapPin, FileImage, Info, ArrowLeft, Video, Utensils, Map } from 'lucide-react';
import { Link } from 'react-router-dom';
import FolleteriaModal from '../../shared/FolleteriaModal';

export default function StroederPage() {
  const [isFolleteriaOpen, setIsFolleteriaOpen] = useState(false);
  const brochures: any[] = [];

  return (
    <div className="w-full min-h-screen bg-neutral-50 pb-12">
      {/* Hero Header */}
      <div className="w-full h-[50vh] min-h-[300px] relative">
        <img 
          src="/images/stroeder.jpg" 
          alt="Vista aérea del pueblo de Stroeder rodeado de campos" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40 flex flex-col justify-end p-8">
          <div className="max-w-4xl mx-auto w-full">
            <Link to="/destinos" className="inline-flex items-center gap-2 text-white/90 hover:text-white mb-4 transition-colors font-medium">
              <ArrowLeft className="w-5 h-5" /> Volver a Destinos
            </Link>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-2">
              Stroeder
            </h1>
            <p className="text-xl text-white/90 flex items-center gap-2">
                <MapPin className="w-5 h-5" /> El corazón agrícola del partido
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
                href="https://www.google.com/maps/search/?api=1&query=Stroeder+Buenos+Aires"
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
              Fundada en 1913, <strong>Stroeder</strong> es una pintoresca localidad del partido de Patagones, ubicada sobre la Ruta Nacional N° 3. Su paisaje está dominado por inmensas llanuras cultivadas y los característicos silos, dando testimonio de su marcado perfil agropecuario.
            </p>
            <p>
              El pueblo se destaca por la inmensa hospitalidad de su gente y por la extrema tranquilidad de sus calles, siendo un destino ideal para el turismo rural y para aquellos que buscan desconectarse del ritmo de las grandes ciudades y acercarse a las tradiciones del campo.
            </p>
            <p>
              Stroeder es además famosa por ser la cuna de la <em>Fiesta Provincial del Agro</em>. Este gran evento anual reúne a cientos de visitantes que llegan para disfrutar de exposiciones de maquinaria, desfiles tradicionales, destrezas criollas, números artísticos y excelentes propuestas gastronómicas típicas de la región.
            </p>
            <p>
              Visitar Stroeder es adentrarse en la historia viva de los pioneros que forjaron la región a base de esfuerzo y trabajo en la tierra patagónica bonaerense.
            </p>
          </div>
        </div>

        {/* Servicios e Info Section */}
        <div className="bg-white p-8 rounded-xl shadow-sm border border-neutral-100 flex flex-col gap-6">
          <div className="flex items-center gap-3 text-[var(--color-primary)] border-b pb-4">
            <Info className="w-6 h-6" />
            <h2 className="text-2xl font-bold">Información de Viaje</h2>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            <Link to="/info-viaje?loc=Stroeder&q=gastronomía" className="flex flex-col items-center justify-center gap-3 p-6 bg-neutral-50 rounded-xl border border-neutral-100 hover:bg-orange-50 hover:border-orange-200 hover:text-[var(--color-tertiary)] transition-all group">
              <div className="p-3 bg-white rounded-full shadow-sm text-[var(--color-primary)] group-hover:text-[var(--color-tertiary)] transition-colors">
                <Utensils className="w-6 h-6" />
              </div>
              <span className="font-bold text-neutral-700 group-hover:text-[var(--color-tertiary)] text-center text-sm md:text-base">¿Dónde comer?</span>
            </Link>
            
            <Link to="/info-viaje?loc=Stroeder&q=llegar" className="flex flex-col items-center justify-center gap-3 p-6 bg-neutral-50 rounded-xl border border-neutral-100 hover:bg-orange-50 hover:border-orange-200 hover:text-[var(--color-tertiary)] transition-all group">
              <div className="p-3 bg-white rounded-full shadow-sm text-[var(--color-primary)] group-hover:text-[var(--color-tertiary)] transition-colors">
                <Map className="w-6 h-6" />
              </div>
              <span className="font-bold text-neutral-700 group-hover:text-[var(--color-tertiary)] text-center text-sm md:text-base">Cómo llegar</span>
            </Link>
            
            <Link to="/que-hacer?loc=Stroeder" className="flex flex-col items-center justify-center gap-3 p-6 bg-neutral-50 rounded-xl border border-neutral-100 hover:bg-orange-50 hover:border-orange-200 hover:text-[var(--color-tertiary)] transition-all group">
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
            <h2 className="text-2xl font-bold">Stroeder a través de los viajeros</h2>
          </div>
          
          <div className="relative w-full overflow-hidden rounded-lg bg-neutral-900" style={{ paddingTop: '56.25%' }}>
            <iframe 
              className="absolute top-0 left-0 w-full h-full"
              src="https://www.youtube.com/embed/oZc46V6cJG4?si=jaO5uUHmEGak2Fqr" 
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
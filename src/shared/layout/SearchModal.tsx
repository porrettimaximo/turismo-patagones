import { useState, useEffect, useRef } from 'react';
import { Search, X, MapPin, Info, Phone, Calendar } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { travelInfo } from '../../features/travel-info/travelInfo';
import { activities } from '../../features/activities/activities';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function SearchModal({ isOpen, onClose }: SearchModalProps) {
  const [query, setQuery] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();

  // Focus input when modal opens
  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 100);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
      setQuery('');
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [isOpen]);

  const searchData = [
    { title: 'Carmen de Patagones', type: 'Destino', description: '', url: '/destinos/carmen-de-patagones', icon: <MapPin className="w-5 h-5" /> },
    { title: 'Bahía San Blas', type: 'Destino', description: '', url: '/destinos/bahia-san-blas', icon: <MapPin className="w-5 h-5" /> },
    { title: 'Los Pocitos', type: 'Destino', description: '', url: '/destinos/los-pocitos', icon: <MapPin className="w-5 h-5" /> },
    { title: 'Villa 7 de Marzo', type: 'Destino', description: '', url: '/destinos/villa-7-de-marzo', icon: <MapPin className="w-5 h-5" /> },
    { title: 'Stroeder', type: 'Destino', description: '', url: '/destinos/stroeder', icon: <MapPin className="w-5 h-5" /> },
    { title: 'Villalonga', type: 'Destino', description: '', url: '/destinos/villalonga', icon: <MapPin className="w-5 h-5" /> },
    { title: 'Salina de Piedras', type: 'Destino', description: '', url: '/destinos/salina-de-piedras', icon: <MapPin className="w-5 h-5" /> },
    { title: 'Oficinas de Turismo', type: 'Contacto', description: '', url: '/contacto', icon: <Phone className="w-5 h-5" /> },
    
    // Dynamic Travel Info
    ...travelInfo.map(info => ({
      title: info.title,
      type: `Info de Viaje - ${info.location}`,
      description: info.description,
      url: `/info-viaje?q=${encodeURIComponent(info.title)}`,
      icon: <Info className="w-5 h-5" />
    })),

    // Dynamic Activities
    ...activities.map(act => ({
      title: act.title,
      type: `Qué Hacer - ${act.location}`,
      description: act.description,
      url: `/que-hacer?q=${encodeURIComponent(act.title)}`,
      icon: <Calendar className="w-5 h-5" />
    }))
  ];

  const filteredResults = searchData.filter(item => {
    if (!query.trim()) return true;
    
    const normalizeText = (text: string) => text.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
    const normalizedQuery = normalizeText(query.trim());
    const words = normalizedQuery.split(/\s+/);
    
    return words.every(word =>
      normalizeText(item.title).includes(word) || 
      normalizeText(item.type).includes(word) ||
      normalizeText(item.description).includes(word)
    );
  }).slice(0, 15); // limit to 15 results for performance

  // Add a generic search in activities option if there's a query
  const resultsWithGeneric = query.trim() ? [
    ...filteredResults,
    { 
      title: `Ver todos los resultados para "${query}"`, 
      type: 'Búsqueda Global', 
      description: '',
      url: `/que-hacer?q=${encodeURIComponent(query)}`, 
      icon: <Search className="w-5 h-5" /> 
    }
  ] : filteredResults;

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex flex-col bg-white/90 backdrop-blur-sm animate-in fade-in duration-200">
      {/* Search Bar Header */}
      <div className="w-full bg-white shadow-sm p-4 flex items-center gap-3">
        <Search className="w-6 h-6 text-neutral-400" />
        <input 
          ref={inputRef}
          type="text" 
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="¿Qué estás buscando? (Ej. San Blas, Pesca, Alojamiento...)"
          className="flex-1 text-lg outline-none bg-transparent"
        />
        <button onClick={onClose} className="p-2 bg-neutral-100 rounded-full hover:bg-neutral-200">
          <X className="w-6 h-6 text-neutral-600" />
        </button>
      </div>

      {/* Results */}
      <div className="flex-1 overflow-y-auto p-4 max-w-3xl mx-auto w-full">
        {query && resultsWithGeneric.length === 0 && (
          <div className="text-center text-neutral-500 mt-12">
            No encontramos resultados para "{query}"
          </div>
        )}

        <div className="flex flex-col gap-2 mt-4">
          {query && resultsWithGeneric.map((result, idx) => (
            <button 
              key={idx}
              onClick={() => {
                onClose();
                navigate(result.url);
              }}
              className="flex items-center gap-4 p-4 bg-white rounded-xl shadow-sm border border-neutral-100 hover:border-[var(--color-primary)] hover:bg-orange-50 transition-colors text-left"
            >
              <div className="bg-orange-100 p-3 rounded-lg text-[var(--color-primary)]">
                {result.icon}
              </div>
              <div>
                <h3 className="font-bold text-neutral-800 text-lg">{result.title}</h3>
                <span className="text-sm text-neutral-500 font-medium">{result.type}</span>
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

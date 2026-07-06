import { useState } from 'react';
import { destinations } from './destinations';
import { MapPin, Search } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function DestinationsPage() {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredDestinations = destinations.filter(dest => {
    const query = searchQuery.toLowerCase().trim();
    if (!query) return true;
    
    return (
      dest.title.toLowerCase().includes(query) ||
      dest.description.toLowerCase().includes(query) ||
      dest.highlights.some(h => h.toLowerCase().includes(query))
    );
  });

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8">
        <h1 className="text-4xl font-bold text-[var(--color-primary)]">Destinos</h1>
        
        {/* Search Bar */}
        <div className="relative w-full md:max-w-md">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-neutral-400">
            <Search className="w-5 h-5" />
          </div>
          <input
            type="text"
            placeholder="Buscar destinos, atractivos o palabras clave..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2 border border-neutral-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] focus:border-transparent bg-white shadow-sm transition-all"
          />
        </div>
      </div>
      
      {filteredDestinations.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredDestinations.map(dest => (
            <div key={dest.id} className="bg-white rounded-xl shadow-md overflow-hidden border border-neutral-100 hover:shadow-lg transition-shadow flex flex-col">
              {dest.image ? (
                <img src={dest.image} alt={dest.title} className="h-48 w-full object-cover" />
              ) : (
                <div className="h-48 bg-neutral-200 w-full flex items-center justify-center text-neutral-400">
                  <span className="text-sm">Imagen de {dest.title}</span>
                </div>
              )}
              <div className="p-6 flex flex-col flex-1">
                <h2 className="text-2xl font-bold mb-2 text-neutral-800 flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-[var(--color-tertiary)] shrink-0" />
                  {dest.title}
                </h2>
                <p className="text-neutral-600 mb-4">{dest.description}</p>
                
                <div className="mb-4 flex-1">
                  <h3 className="font-semibold text-sm uppercase tracking-wider text-neutral-500 mb-2">Destacados</h3>
                  <ul className="list-disc list-inside text-neutral-700 text-sm">
                    {dest.highlights.map((h, i) => <li key={i}>{h}</li>)}
                  </ul>
                </div>
                
                <Link 
                  to={`/destinos/${dest.id}`}
                  className="w-full mt-auto block text-center bg-neutral-100 hover:bg-neutral-200 text-[var(--color-primary)] font-medium py-2 rounded-lg transition-colors"
                >
                  Ver detalles
                </Link>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center py-12 bg-white rounded-xl border border-neutral-200 shadow-sm max-w-lg mx-auto">
          <Search className="w-12 h-12 text-neutral-300 mx-auto mb-4" />
          <h3 className="text-lg font-bold text-neutral-700 mb-1">Sin resultados</h3>
          <p className="text-neutral-500">No encontramos destinos que coincidan con "{searchQuery}"</p>
        </div>
      )}
    </div>
  );
}

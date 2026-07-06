import { useState, useMemo, useEffect } from 'react';
import { travelInfo } from './travelInfo';
import { Search, MapPin, Navigation, Info, ChevronDown, ChevronUp } from 'lucide-react';

export default function TravelInfoPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [expandedCategories, setExpandedCategories] = useState<string[]>([]);

  // Extract unique locations for the navigation bar
  const locations = useMemo(() => {
    const locs = new Set(travelInfo.map(info => info.location));
    return Array.from(locs);
  }, []);

  const filteredInfo = useMemo(() => {
    return travelInfo.filter(info => {
      const query = searchQuery.toLowerCase().trim();
      if (!query) return true;

      return (
        info.title.toLowerCase().includes(query) ||
        info.description.toLowerCase().includes(query) ||
        info.location.toLowerCase().includes(query) ||
        info.category.toLowerCase().includes(query)
      );
    });
  }, [searchQuery]);

  // Group info by location
  const groupedInfo = useMemo(() => {
    const groups: Record<string, typeof travelInfo> = {};
    filteredInfo.forEach(info => {
      if (!groups[info.location]) {
        groups[info.location] = [];
      }
      groups[info.location].push(info);
    });
    return groups;
  }, [filteredInfo]);

  // Expand all categories that have search results when searching
  useEffect(() => {
    if (searchQuery.trim() !== '') {
      setExpandedCategories(Object.keys(groupedInfo));
    } else {
      setExpandedCategories([]);
    }
  }, [searchQuery, groupedInfo]);

  const toggleCategory = (location: string) => {
    setExpandedCategories(prev =>
      prev.includes(location)
        ? prev.filter(c => c !== location)
        : [...prev, location]
    );
  };

  const handleScrollTo = (location: string) => {
    setExpandedCategories(prev => {
      if (!prev.includes(location)) {
        return [...prev, location];
      }
      return prev;
    });

    setTimeout(() => {
      const id = location.replace(/[\s/]/g, '-').toLowerCase();
      const element = document.getElementById(id);
      if (element) {
        const y = element.getBoundingClientRect().top + window.scrollY - 100;
        window.scrollTo({ top: y, behavior: 'smooth' });
      }
    }, 100);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      {/* Header and Search */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8">
        <div>
          <h1 className="text-4xl font-bold text-[var(--color-primary)] mb-2">Información de Viaje</h1>
          <p className="text-neutral-600">Todo lo que necesitas saber antes de tu viaje.</p>
        </div>

        <div className="relative w-full md:max-w-md">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-neutral-400">
            <Search className="w-5 h-5" />
          </div>
          <input
            type="text"
            placeholder="Buscar por lugar, nombre o palabra clave..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-3 border border-neutral-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] focus:border-transparent bg-white shadow-sm transition-all"
          />
        </div>
      </div>

      {/* Town Navigation Links */}
      {locations.length > 0 && !searchQuery && (
        <div className="flex flex-wrap gap-2 mb-12">
          {locations.map(location => (
            <button
              key={location}
              onClick={() => handleScrollTo(location)}
              className="inline-flex items-center gap-2 px-4 py-2 bg-white border border-neutral-200 text-neutral-700 rounded-full text-sm font-medium hover:bg-orange-50 hover:text-[var(--color-tertiary)] hover:border-orange-200 transition-colors shadow-sm"
            >
              <Navigation className="w-4 h-4" />
              {location}
            </button>
          ))}
        </div>
      )}

      {/* Grouped Information */}
      {Object.keys(groupedInfo).length > 0 ? (
        <div className="space-y-6">
          {Object.entries(groupedInfo).map(([location, locInfos]) => {
            const isExpanded = expandedCategories.includes(location);
            return (
              <section
                key={location}
                id={location.replace(/[\s/]/g, '-').toLowerCase()}
                className="scroll-mt-24"
              >
                <div className="bg-white rounded-2xl shadow-sm border border-neutral-200 overflow-hidden">
                  {/* Accordion Header */}
                  <button
                    onClick={() => toggleCategory(location)}
                    className="w-full flex items-center justify-between p-6 md:p-8 hover:bg-neutral-50 transition-colors"
                  >
                    <div className="flex items-center gap-3">
                      <MapPin className="w-6 h-6 text-[var(--color-tertiary)]" />
                      <h2 className="text-2xl md:text-3xl font-bold text-[var(--color-primary)] text-left">
                        {location}
                      </h2>
                    </div>
                    {isExpanded ? (
                      <ChevronUp className="w-6 h-6 text-neutral-500 flex-shrink-0" />
                    ) : (
                      <ChevronDown className="w-6 h-6 text-neutral-500 flex-shrink-0" />
                    )}
                  </button>

                  {/* Accordion Content */}
                  {isExpanded && (
                    <div className="p-6 md:p-8 pt-0 border-t border-neutral-100">
                      <div className="space-y-8 pt-6">
                        {locInfos.map((info, idx) => (
                          <div key={info.id} className={idx !== 0 ? "pt-8 border-t border-neutral-100" : ""}>
                            <div className="mb-4">
                              <span className={`inline-flex items-center gap-1 text-xs font-bold uppercase tracking-wider mb-3 px-3 py-1.5 rounded-md ${info.category === 'Cómo Llegar' ? 'bg-blue-50 text-blue-700' : 'bg-orange-50 text-[var(--color-tertiary)]'}`}>
                                <Info className="w-4 h-4" />
                                {info.category}
                              </span>
                              <h3 className="text-2xl font-bold text-neutral-800 leading-tight">
                                {info.title}
                              </h3>
                            </div>

                            <div className="text-neutral-600 text-base leading-relaxed max-w-4xl">
                              {info.description.split('\n').map((paragraph, pIdx) => (
                                paragraph.trim() ? <p key={pIdx} className="mb-3 last:mb-0">{paragraph}</p> : null
                              ))}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </section>
            );
          })}
        </div>
      ) : (
        <div className="text-center py-16 bg-white rounded-xl border border-neutral-200 shadow-sm max-w-lg mx-auto">
          <Search className="w-16 h-16 text-neutral-300 mx-auto mb-4" />
          <h3 className="text-xl font-bold text-neutral-700 mb-2">Sin resultados</h3>
          <p className="text-neutral-500">No encontramos información que coincida con "{searchQuery}"</p>
        </div>
      )}
    </div>
  );
}

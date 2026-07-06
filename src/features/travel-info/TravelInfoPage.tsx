import { useState, useMemo, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { travelInfo } from './travelInfo';
import { Search, MapPin, Navigation, Info, ChevronDown, ChevronUp } from 'lucide-react';

export default function TravelInfoPage() {
  const [searchParams] = useSearchParams();
  const [searchQuery, setSearchQuery] = useState(searchParams.get('q') || '');
  const [expandedCategories, setExpandedCategories] = useState<string[]>([]);
  const [expandedInfos, setExpandedInfos] = useState<string[]>([]);

  // Extract unique locations for the navigation bar
  const locations = useMemo(() => {
    const locs = new Set(travelInfo.map(info => info.location));
    return Array.from(locs);
  }, []);

  const filteredInfo = useMemo(() => {
    return travelInfo.filter(info => {
      const locParam = searchParams.get('loc');
      if (locParam && info.location.toLowerCase() !== locParam.toLowerCase()) return false;

      const query = searchQuery.trim();
      if (!query) return true;

      const normalizeText = (text: string) => text.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
      
      const normalizedQuery = normalizeText(query);
      const words = normalizedQuery.split(/\s+/);
      
      return words.every(word =>
        normalizeText(info.title).includes(word) ||
        normalizeText(info.description).includes(word) ||
        normalizeText(info.location).includes(word) ||
        normalizeText(info.category).includes(word)
      );
    });
  }, [searchQuery, searchParams]);

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

  // Update search query if URL changes
  useEffect(() => {
    const q = searchParams.get('q');
    if (q) setSearchQuery(q);
  }, [searchParams]);

  // Expand all categories and info items that have search results when searching
  useEffect(() => {
    const locParam = searchParams.get('loc');
    if (searchQuery.trim() !== '') {
      setExpandedCategories(Object.keys(groupedInfo));
      setExpandedInfos(filteredInfo.map(i => i.id));
    } else if (locParam) {
      setExpandedCategories(Object.keys(groupedInfo));
      setExpandedInfos([]); // Keep info items closed initially
    } else {
      setExpandedCategories([]);
      setExpandedInfos([]);
    }
  }, [searchQuery, searchParams, groupedInfo, filteredInfo]);

  const toggleCategory = (location: string) => {
    setExpandedCategories(prev =>
      prev.includes(location)
        ? prev.filter(c => c !== location)
        : [...prev, location]
    );
  };

  const toggleInfo = (id: string) => {
    setExpandedInfos(prev =>
      prev.includes(id)
        ? prev.filter(i => i !== id)
        : [...prev, id]
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
          <h1 className="text-4xl font-bold text-[var(--color-primary)] mb-2">
            {searchParams.get('loc') ? `Información de tu viaje a ${searchParams.get('loc')}` : 'Información de Viaje'}
          </h1>
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
      {locations.length > 0 && !searchQuery && !searchParams.get('loc') && (
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
                    <div className="p-2 bg-neutral-100 rounded-full text-[var(--color-primary)] transition-transform duration-300">
                      {isExpanded ? (
                        <ChevronUp className="w-5 h-5" />
                      ) : (
                        <ChevronDown className="w-5 h-5" />
                      )}
                    </div>
                  </button>

                  {/* Accordion Content */}
                  <div 
                    className={`transition-all duration-300 ease-in-out ${
                      isExpanded ? 'max-h-[5000px] opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
                    }`}
                  >
                    <div className="p-6 md:p-8 pt-0 border-t border-neutral-100">
                      <div className="space-y-4 pt-6">
                        {locInfos.map((info) => {
                          const isInfoExpanded = expandedInfos.includes(info.id);
                          return (
                            <div key={info.id} className="border border-neutral-200 rounded-xl overflow-hidden bg-neutral-50">
                              <button 
                                onClick={() => toggleInfo(info.id)}
                                className="w-full flex items-center justify-between p-4 hover:bg-neutral-100 transition-colors text-left"
                              >
                                <div>
                                  <span className={`inline-flex items-center gap-1 text-xs font-bold uppercase tracking-wider mb-2 px-2 py-1 rounded-md ${info.category === 'Cómo Llegar' ? 'bg-blue-100 text-blue-700' : 'bg-orange-100 text-[var(--color-tertiary)]'}`}>
                                    <Info className="w-3.5 h-3.5" />
                                    {info.category}
                                  </span>
                                  <h3 className="text-xl font-bold text-neutral-800 leading-tight">
                                    {info.title}
                                  </h3>
                                </div>
                                <div className="p-2 bg-white rounded-full text-neutral-500 shadow-sm transition-transform duration-300 ml-4 flex-shrink-0">
                                  {isInfoExpanded ? (
                                    <ChevronUp className="w-5 h-5" />
                                  ) : (
                                    <ChevronDown className="w-5 h-5" />
                                  )}
                                </div>
                              </button>

                              <div 
                                className={`transition-all duration-300 ease-in-out bg-white ${
                                  isInfoExpanded ? 'max-h-[2000px] opacity-100 border-t border-neutral-200' : 'max-h-0 opacity-0 overflow-hidden'
                                }`}
                              >
                                <div className="p-6">
                                  <div className="text-neutral-600 text-base leading-relaxed">
                                    {info.description.split('\n').map((paragraph, pIdx) => (
                                      paragraph.trim() ? <p key={pIdx} className="mb-3 last:mb-0">{paragraph}</p> : null
                                    ))}
                                  </div>
                                </div>
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  </div>
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

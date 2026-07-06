import { useState, useMemo, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { activities } from './activities';
import { Search, MapPin, Navigation, ChevronDown, ChevronUp } from 'lucide-react';

export default function QueHacerPage() {
  const [searchParams] = useSearchParams();
  const [searchQuery, setSearchQuery] = useState(searchParams.get('q') || '');
  const [expandedCategories, setExpandedCategories] = useState<string[]>([]);
  const [expandedActivities, setExpandedActivities] = useState<string[]>([]);

  // Update search query if URL changes
  useEffect(() => {
    setSearchQuery(searchParams.get('q') || '');
  }, [searchParams]);

  // Extract unique locations for the navigation bar
  const locations = useMemo(() => {
    const locs = new Set(activities.map(a => a.location));
    return Array.from(locs);
  }, []);

  const filteredActivities = useMemo(() => {
    return activities.filter(activity => {
      const locParam = searchParams.get('loc');
      if (locParam && activity.location.toLowerCase() !== locParam.toLowerCase()) return false;

      const query = searchQuery.trim();
      if (!query) return true;
      
      const normalizeText = (text: string) => text.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
      
      const normalizedQuery = normalizeText(query);
      const words = normalizedQuery.split(/\s+/);
      
      return words.every(word =>
        normalizeText(activity.title).includes(word) ||
        normalizeText(activity.description).includes(word) ||
        normalizeText(activity.location).includes(word)
      );
    });
  }, [searchQuery, searchParams]);

  // Group activities by location
  const groupedActivities = useMemo(() => {
    const groups: Record<string, typeof activities> = {};
    filteredActivities.forEach(activity => {
      if (!groups[activity.location]) {
        groups[activity.location] = [];
      }
      groups[activity.location].push(activity);
    });
    return groups;
  }, [filteredActivities]);

  // Expand categories and activities
  useEffect(() => {
    const locParam = searchParams.get('loc');
    if (searchQuery.trim() !== '') {
      setExpandedCategories(Object.keys(groupedActivities));
      setExpandedActivities(filteredActivities.map(a => a.id));
    } else if (locParam) {
      setExpandedCategories(Object.keys(groupedActivities));
      setExpandedActivities([]); // Keep activities closed initially
    } else {
      setExpandedCategories([]);
      setExpandedActivities([]);
    }
  }, [searchQuery, searchParams, groupedActivities, filteredActivities]);

  const toggleCategory = (location: string) => {
    setExpandedCategories(prev => 
      prev.includes(location) 
        ? prev.filter(cat => cat !== location)
        : [...prev, location]
    );
  };

  const toggleActivity = (id: string) => {
    setExpandedActivities(prev =>
      prev.includes(id)
        ? prev.filter(a => a !== id)
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
            {searchParams.get('loc') ? `¿Qué hacer en ${searchParams.get('loc')}?` : '¿Qué Hacer?'}
          </h1>
          <p className="text-neutral-600">Descubre todas las actividades, historia y patrimonio que tenemos para ofrecer.</p>
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
      
      {/* Grouped Activities */}
      {Object.keys(groupedActivities).length > 0 ? (
        <div className="space-y-6">
          {Object.entries(groupedActivities).map(([location, locActivities]) => {
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
                    className="w-full flex items-center justify-between p-6 md:p-8 hover:bg-neutral-50 transition-colors text-left"
                  >
                    <div className="flex items-center gap-3">
                      <MapPin className="w-6 h-6 text-[var(--color-tertiary)]" />
                      <h2 className="text-2xl md:text-3xl font-bold text-[var(--color-primary)]">
                        {location}
                      </h2>
                    </div>
                    <div className="p-2 bg-neutral-100 rounded-full text-[var(--color-primary)] transition-transform duration-300 flex-shrink-0">
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
                        {locActivities.map(activity => {
                          const isActivityExpanded = expandedActivities.includes(activity.id);
                          return (
                            <div key={activity.id} className="border border-neutral-200 rounded-xl overflow-hidden bg-neutral-50">
                              <button 
                                onClick={() => toggleActivity(activity.id)}
                                className="w-full flex items-center justify-between p-4 hover:bg-neutral-100 transition-colors text-left"
                              >
                                <div>
                                  <h3 className="text-xl font-bold text-neutral-800 leading-tight">
                                    {activity.title}
                                  </h3>
                                </div>
                                <div className="p-2 bg-white rounded-full text-neutral-500 shadow-sm transition-transform duration-300 ml-4 flex-shrink-0">
                                  {isActivityExpanded ? (
                                    <ChevronUp className="w-5 h-5" />
                                  ) : (
                                    <ChevronDown className="w-5 h-5" />
                                  )}
                                </div>
                              </button>

                              <div 
                                className={`transition-all duration-300 ease-in-out bg-white ${
                                  isActivityExpanded ? 'max-h-[2000px] opacity-100 border-t border-neutral-200' : 'max-h-0 opacity-0 overflow-hidden'
                                }`}
                              >
                                <div className="p-6">
                                  <div className="text-neutral-600 text-base leading-relaxed">
                                    {activity.description.split('\n').map((paragraph, idx) => (
                                      paragraph.trim() ? <p key={idx} className="mb-3 last:mb-0">{paragraph}</p> : null
                                    ))}
                                  </div>
                                </div>
                              </div>
                            </div>
                          );
                        })}
                      </div>
                      
                      {/* Contact Card for the Location */}
                      {(() => {
                        // Collect unique contact lines for the location
                        const contactLines = new Set<string>();
                        locActivities.forEach(act => {
                          if (act.contact) {
                            act.contact.split('\n').forEach(line => {
                              if (line.trim()) contactLines.add(line.trim());
                            });
                          }
                        });
                        const uniqueContacts = Array.from(contactLines);

                        if (uniqueContacts.length > 0) {
                          return (
                            <div className="mt-8 bg-orange-50 border border-orange-100 rounded-xl p-6 shadow-sm flex flex-col md:flex-row gap-6 items-start md:items-center">
                              <div className="bg-white p-3 rounded-full shadow-sm">
                                <MapPin className="w-6 h-6 text-[var(--color-tertiary)]" />
                              </div>
                              <div>
                                <h4 className="text-lg font-bold text-[var(--color-primary)] mb-2">Contacto / Información de {location}</h4>
                                <div className="text-sm text-neutral-700 leading-relaxed space-y-1">
                                  {uniqueContacts.map((contact, idx) => (
                                    <p key={idx}>{contact}</p>
                                  ))}
                                </div>
                              </div>
                            </div>
                          );
                        }
                        return null;
                      })()}
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
          <p className="text-neutral-500">No encontramos actividades que coincidan con "{searchQuery}"</p>
        </div>
      )}
    </div>
  );
}

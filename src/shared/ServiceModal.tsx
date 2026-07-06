import { X } from 'lucide-react';
import { useEffect } from 'react';

interface Section {
  subtitle: string;
  items: string[];
}

interface ServiceData {
  title: string;
  icon: string;
  sections: Section[];
}

interface ServiceModalProps {
  isOpen: boolean;
  onClose: () => void;
  data: ServiceData | null;
}

export default function ServiceModal({ isOpen, onClose, data }: ServiceModalProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [isOpen]);

  if (!isOpen || !data) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200">
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={onClose} />
      
      <div className="bg-white rounded-2xl shadow-xl w-full max-w-2xl max-h-[85vh] overflow-hidden flex flex-col relative z-10 animate-in zoom-in-95 duration-200">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-neutral-100 bg-orange-50/50">
          <h2 className="text-2xl font-bold text-[var(--color-primary)]">{data.title}</h2>
          <button 
            onClick={onClose}
            className="p-2 rounded-full bg-white hover:bg-neutral-100 transition-colors shadow-sm text-neutral-500"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto flex-1">
          <div className="space-y-8">
            {data.sections.map((section, idx) => (
              <div key={idx}>
                <h3 className="text-sm font-bold text-neutral-400 tracking-wider uppercase mb-4 border-b pb-2">
                  {section.subtitle}
                </h3>
                <ul className="space-y-3">
                  {section.items.map((item, itemIdx) => {
                    const isLink = item.includes('turismo.patagones.gob.ar');
                    return (
                      <li key={itemIdx} className="text-neutral-700 bg-neutral-50 p-3 rounded-lg border border-neutral-100 text-sm md:text-base leading-relaxed">
                        {isLink ? (
                          <a href={`https://${item.split(': ')[1] || item}`} target="_blank" rel="noopener noreferrer" className="text-[var(--color-primary)] font-semibold hover:underline">
                            {item}
                          </a>
                        ) : (
                          item
                        )}
                      </li>
                    );
                  })}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

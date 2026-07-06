import { useState } from 'react';
import { tourismDownloads } from './downloads';
import { Download, Eye, X } from 'lucide-react';

export default function DownloadsPage() {
  const [selectedPdf, setSelectedPdf] = useState<string | null>(null);

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-4 text-[var(--color-primary)]">Biblioteca Turística</h1>
      <p className="text-xl text-neutral-600 mb-8">
        Descargá planos, guías y folletos para planificar tu viaje.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {tourismDownloads.map(doc => (
          <div key={doc.id} className="bg-white rounded-xl shadow-sm border border-neutral-200 p-6 flex flex-col justify-between">
            <div>
              <div className="flex justify-between items-start mb-2">
                <h2 className="text-xl font-bold text-neutral-800">{doc.title}</h2>
                <span className="text-xs font-bold px-2 py-1 bg-neutral-100 text-neutral-600 rounded uppercase">
                  {doc.category}
                </span>
              </div>
              <p className="text-neutral-600 mb-6">{doc.description}</p>
            </div>
            
            <div className="flex gap-3 mt-4">
              <button 
                onClick={() => setSelectedPdf(doc.url)}
                className="flex-1 flex justify-center items-center gap-2 bg-[var(--color-primary)] text-white py-2 rounded-lg hover:bg-blue-800 transition-colors"
              >
                <Eye className="w-4 h-4" /> Ver Online
              </button>
              <a 
                href={doc.url} 
                download={doc.fileName}
                target="_blank"
                rel="noreferrer"
                className="flex-1 flex justify-center items-center gap-2 bg-neutral-100 text-neutral-800 py-2 rounded-lg hover:bg-neutral-200 transition-colors"
              >
                <Download className="w-4 h-4" /> Descargar
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* PDF Viewer Modal */}
      {selectedPdf && (
        <div className="fixed inset-0 z-[100] bg-black/80 flex flex-col">
          <div className="flex justify-between items-center p-4 bg-neutral-900 text-white">
            <h3 className="font-bold">Visor de PDF</h3>
            <button 
              onClick={() => setSelectedPdf(null)}
              className="p-2 hover:bg-white/10 rounded-full transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
          </div>
          <div className="flex-1 w-full bg-neutral-800 p-2 md:p-6">
            <object 
              data={selectedPdf} 
              type="application/pdf" 
              className="w-full h-full rounded-lg bg-white"
            >
              <iframe 
                src={selectedPdf} 
                className="w-full h-full rounded-lg bg-white"
                title="Visor PDF"
              />
            </object>
          </div>
        </div>
      )}
    </div>
  );
}

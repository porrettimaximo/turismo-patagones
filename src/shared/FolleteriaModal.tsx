import { X, ChevronLeft, ChevronRight, FileImage, Download } from 'lucide-react';
import { useState, useEffect } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';

pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

export type Brochure = {
  title: string;
  image: string;
};

interface FolleteriaModalProps {
  isOpen: boolean;
  onClose: () => void;
  brochures: Brochure[];
}

export default function FolleteriaModal({ isOpen, onClose, brochures }: FolleteriaModalProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [numPages, setNumPages] = useState<number>(1);
  const [retryCount, setRetryCount] = useState(0);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      setCurrentIndex(0);
      setNumPages(1);
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % brochures.length);
    setNumPages(1);
  };
  
  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + brochures.length) % brochures.length);
    setNumPages(1);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
      <div className="relative w-full max-w-5xl bg-white rounded-2xl overflow-hidden shadow-2xl flex flex-col max-h-[90vh]">
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b">
          <div className="flex items-center gap-2 text-[var(--color-primary)]">
            <FileImage className="w-6 h-6" />
            <h2 className="text-xl font-bold">Folletería y Planos</h2>
          </div>
          <button 
            onClick={onClose}
            className="p-2 text-neutral-500 hover:bg-neutral-100 rounded-full transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-auto bg-neutral-100 p-4 flex flex-col items-center justify-start relative min-h-[50vh]">
          {brochures.length > 0 ? (
            <>
              {/* Title & Download Button */}
              <div className="w-full shrink-0 flex flex-row items-center justify-between gap-4 mb-6 bg-white p-4 rounded-xl shadow-sm z-10">
                <div className="text-left">
                  <h3 className="text-lg font-bold text-neutral-800">{brochures[currentIndex].title}</h3>
                  <p className="text-sm text-neutral-500">{currentIndex + 1} de {brochures.length}</p>
                </div>
                <a 
                  href={brochures[currentIndex].image}
                  download
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-[var(--color-primary)] hover:opacity-90 text-white px-4 py-2 rounded-lg transition-opacity text-sm font-medium"
                >
                  <Download className="w-4 h-4" />
                  Descargar
                </a>
              </div>

              <div className="relative w-full flex-1 flex flex-col items-center justify-start min-h-[300px] py-4 pb-12 overflow-y-auto max-h-[60vh] bg-neutral-200/50 rounded-lg">
                {brochures[currentIndex].image.endsWith('.pdf') ? (
                  <Document 
                    key={`${brochures[currentIndex].image}_${retryCount}`}
                    file={brochures[currentIndex].image}
                    loading={
                      <div className="flex items-center justify-center p-8 text-neutral-500">
                        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-[var(--color-primary)] mr-3"></div>
                        Cargando PDF...
                      </div>
                    }
                    error={
                      <div className="p-4 flex flex-col gap-3 items-center text-red-500 bg-red-50 rounded-lg border border-red-100 text-center">
                        <p className="font-medium">Hubo un problema al procesar el archivo.</p>
                        <div className="flex gap-2">
                          <button 
                            onClick={() => setRetryCount(c => c + 1)}
                            className="px-3 py-1.5 bg-red-100 hover:bg-red-200 rounded-md text-red-700 text-sm font-semibold transition-colors"
                          >
                            Reintentar
                          </button>
                          <a 
                            href={brochures[currentIndex].image}
                            download
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-3 py-1.5 bg-red-500 hover:bg-red-600 rounded-md text-white text-sm font-semibold transition-colors"
                          >
                            Descargar
                          </a>
                        </div>
                      </div>
                    }
                    className="flex flex-col items-center gap-4"
                    onLoadSuccess={({ numPages }) => setNumPages(numPages)}
                  >
                    {Array.from(new Array(numPages), (_, index) => (
                      <Page 
                        key={`page_${index + 1}`} 
                        pageNumber={index + 1} 
                        renderTextLayer={false}
                        renderAnnotationLayer={false}
                        className="shadow-md rounded overflow-hidden bg-white"
                        width={Math.min(window.innerWidth * 0.8, 800)}
                      />
                    ))}
                  </Document>
                ) : (
                  <img 
                    src={brochures[currentIndex].image} 
                    alt={brochures[currentIndex].title}
                    className="max-w-full max-h-[50vh] object-contain drop-shadow-md rounded"
                  />
                )}
              </div>

              {/* Controls */}
              {brochures.length > 1 && (
                <>
                  <button 
                    onClick={prevSlide}
                    className="absolute left-4 top-1/2 -translate-y-1/2 p-3 bg-white/90 hover:bg-white text-[var(--color-primary)] rounded-full shadow-lg transition-all hover:scale-105"
                  >
                    <ChevronLeft className="w-6 h-6" />
                  </button>
                  <button 
                    onClick={nextSlide}
                    className="absolute right-4 top-1/2 -translate-y-1/2 p-3 bg-white/90 hover:bg-white text-[var(--color-primary)] rounded-full shadow-lg transition-all hover:scale-105"
                  >
                    <ChevronRight className="w-6 h-6" />
                  </button>
                </>
              )}
            </>
          ) : (
            <div className="text-center p-8">
              <FileImage className="w-16 h-16 mx-auto text-neutral-300 mb-4" />
              <p className="text-xl font-medium text-neutral-500">Próximamente folletería disponible</p>
            </div>
          )}
        </div>
        
        {/* Thumbnails if multiple */}
        {brochures.length > 1 && (
          <div className="bg-white p-4 border-t flex items-center justify-center gap-2 overflow-x-auto">
            {brochures.map((b, idx) => (
              <button
                key={idx}
                onClick={() => {
                  setCurrentIndex(idx);
                  setNumPages(1);
                }}
                className={`relative w-20 h-16 flex-shrink-0 rounded overflow-hidden border-2 transition-all ${
                  currentIndex === idx ? 'border-[var(--color-primary)] opacity-100' : 'border-transparent opacity-50 hover:opacity-100'
                }`}
                title={b.title}
              >
                {b.image.endsWith('.pdf') ? (
                  <div className="w-full h-full bg-neutral-200 flex flex-col items-center justify-center text-neutral-500">
                    <FileImage className="w-6 h-6 mb-1" />
                    <span className="text-[10px] font-medium">PDF</span>
                  </div>
                ) : (
                  <img src={b.image} alt={b.title} className="w-full h-full object-cover" />
                )}
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

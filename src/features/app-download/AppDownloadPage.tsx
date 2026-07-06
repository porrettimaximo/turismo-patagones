import { Smartphone, Download, CheckCircle, Share, PlusSquare } from 'lucide-react';
import { promptInstall } from '../../shared/pwa';
import { useState, useEffect } from 'react';

export default function AppDownloadPage() {
  const [isIOS, setIsIOS] = useState(false);
  const [isStandalone, setIsStandalone] = useState(false);

  useEffect(() => {
    // Detect iOS
    const iOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !(window as any).MSStream;
    setIsIOS(iOS);

    // Detect if already installed
    const standalone = window.matchMedia('(display-mode: standalone)').matches || ('standalone' in navigator && (navigator as any).standalone);
    setIsStandalone(standalone);
  }, []);

  const handleInstallClick = async () => {
    if (isIOS) {
      alert('Sigue las instrucciones en pantalla para instalar en tu iPhone.');
      return;
    }
    
    const success = await promptInstall();
    if (!success) {
      alert('La instalación automática no está disponible o ya tienes la app instalada. Busca la opción "Agregar a la pantalla principal" en el menú de tu navegador.');
    }
  };

  return (
    <div className="min-h-screen bg-neutral-50 flex flex-col items-center py-12 px-4 relative overflow-hidden">
      
      {/* Background Decor */}
      <div className="absolute top-[-10%] left-[-10%] w-96 h-96 bg-[var(--color-primary)] rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob"></div>
      <div className="absolute top-[20%] right-[-10%] w-96 h-96 bg-sky-400 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-2000"></div>
      
      <div className="max-w-3xl w-full bg-white rounded-3xl shadow-xl overflow-hidden z-10">
        
        <div className="bg-[var(--color-primary)] text-white text-center py-12 px-6 relative">
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="relative z-10 flex flex-col items-center">
            <div className="w-24 h-24 bg-white p-2 rounded-2xl shadow-2xl mb-6">
              <img src="/logo.png" alt="Logo Turismo Patagones" className="w-full h-full rounded-xl object-cover" />
            </div>
            <h1 className="text-3xl md:text-4xl font-bold mb-4">Lleva a Patagones en tu bolsillo</h1>
            <p className="text-lg text-white/90 max-w-xl mx-auto">
              Descarga nuestra app y accede a toda la información turística, mapas y circuitos autoguiados estés donde estés.
            </p>
          </div>
        </div>

        <div className="p-8 md:p-12">
          {isStandalone ? (
            <div className="text-center p-8 bg-green-50 rounded-2xl border border-green-100">
              <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
              <h2 className="text-2xl font-bold text-green-800 mb-2">¡App Instalada!</h2>
              <p className="text-green-700">Ya estás usando nuestra aplicación. Disfruta de todo el contenido.</p>
            </div>
          ) : (
            <div className="flex flex-col gap-12">
              
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-bold text-neutral-800 mb-4 flex items-center gap-2">
                    <CheckCircle className="w-6 h-6 text-[var(--color-primary)]" />
                    Beneficios
                  </h3>
                  <ul className="space-y-4">
                    <li className="flex gap-3 text-neutral-600">
                      <div className="shrink-0 w-6 h-6 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center font-bold text-sm">1</div>
                      <p><strong>Rápida y ligera:</strong> No ocupa espacio en tu teléfono ni requiere descargas de la App Store o Google Play.</p>
                    </li>
                    <li className="flex gap-3 text-neutral-600">
                      <div className="shrink-0 w-6 h-6 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center font-bold text-sm">2</div>
                      <p><strong>Acceso offline:</strong> Mira folletos y planos de las ciudades incluso si te quedas sin cobertura de datos.</p>
                    </li>
                    <li className="flex gap-3 text-neutral-600">
                      <div className="shrink-0 w-6 h-6 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center font-bold text-sm">3</div>
                      <p><strong>Siempre a mano:</strong> Encuentra las actividades y servicios directamente desde la pantalla de inicio de tu celular.</p>
                    </li>
                  </ul>
                </div>
                
                <div className="bg-neutral-50 p-6 rounded-2xl border border-neutral-100 flex flex-col justify-center items-center text-center h-full">
                  {isIOS ? (
                    <div className="flex flex-col items-center">
                      <Smartphone className="w-12 h-12 text-neutral-400 mb-4" />
                      <h4 className="font-bold text-lg text-neutral-800 mb-2">Instalar en iPhone</h4>
                      <p className="text-sm text-neutral-600 mb-6">Para instalar la app en tu dispositivo iOS, sigue estos dos sencillos pasos:</p>
                      
                      <div className="flex flex-col gap-4 text-left w-full">
                        <div className="flex items-center gap-3 bg-white p-3 rounded-lg shadow-sm border">
                          <Share className="w-5 h-5 text-blue-500 shrink-0" />
                          <span className="text-sm">1. Toca el botón <strong>Compartir</strong> en la barra inferior de Safari.</span>
                        </div>
                        <div className="flex items-center gap-3 bg-white p-3 rounded-lg shadow-sm border">
                          <PlusSquare className="w-5 h-5 text-neutral-700 shrink-0" />
                          <span className="text-sm">2. Selecciona <strong>Agregar a la pantalla de inicio</strong>.</span>
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div className="flex flex-col items-center">
                      <Download className="w-12 h-12 text-[var(--color-primary)] mb-4" />
                      <h4 className="font-bold text-lg text-neutral-800 mb-2">Instalación automática</h4>
                      <p className="text-sm text-neutral-600 mb-6">Haz clic en el botón de abajo para instalar la aplicación directamente en tu dispositivo Android o computadora.</p>
                      <button 
                        onClick={handleInstallClick}
                        className="bg-[var(--color-primary)] hover:opacity-90 text-white font-bold py-3 px-8 rounded-full shadow-lg shadow-blue-500/30 transition-all hover:scale-105 active:scale-95 flex items-center gap-2"
                      >
                        <Download className="w-5 h-5" />
                        Descargar e Instalar
                      </button>
                    </div>
                  )}
                </div>
              </div>

            </div>
          )}
        </div>
      </div>
    </div>
  );
}

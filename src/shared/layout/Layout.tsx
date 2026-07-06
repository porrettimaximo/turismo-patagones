import { Link, Outlet } from 'react-router-dom';
import { Menu, X, Download, Search } from 'lucide-react';
import { useState, useEffect } from 'react';
import SearchModal from './SearchModal';

export default function Layout() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isStandalone, setIsStandalone] = useState(false);
  const [isMobile, setIsMobile] = useState(true);
  const [searchOpen, setSearchOpen] = useState(false);

  useEffect(() => {
    // Detect if app is installed (standalone mode)
    const standalone = window.matchMedia('(display-mode: standalone)').matches || ('standalone' in navigator && (navigator as any).standalone);
    setIsStandalone(standalone);

    // Detect if the device is a mobile device
    const mobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    setIsMobile(mobile);

    // Scroll to top on route change or when layout mounts
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-neutral-50 text-neutral-900">
      {/* Desktop & Mobile Top Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[var(--color-primary)] text-white shadow-md">
        <div className="w-full px-4 md:px-8 h-16 flex items-center justify-between">
          <Link to="/" className="font-bold text-xl tracking-tight flex items-center gap-2">
            <img src="/logo.png" alt="Logo Turismo Patagones" className="w-8 h-8 rounded-md" />
            Turismo Patagones
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-2">
            <Link to="/" className="px-3 py-2 rounded-lg font-medium hover:bg-white/10 hover:text-sky-300 hover:scale-105 transition-all duration-300">Inicio</Link>
            <Link to="/destinos" className="px-3 py-2 rounded-lg font-medium hover:bg-white/10 hover:text-sky-300 hover:scale-105 transition-all duration-300">Destinos</Link>
            <Link to="/que-hacer" className="px-3 py-2 rounded-lg font-medium hover:bg-white/10 hover:text-sky-300 hover:scale-105 transition-all duration-300">¿Qué hacer?</Link>
            <Link to="/info-viaje" className="px-3 py-2 rounded-lg font-medium hover:bg-white/10 hover:text-sky-300 hover:scale-105 transition-all duration-300">Info de Viaje</Link>
            <Link to="/contacto" className="px-3 py-2 rounded-lg font-medium hover:bg-white/10 hover:text-sky-300 hover:scale-105 transition-all duration-300">Contacto</Link>
            {!isStandalone && isMobile && (
              <Link to="/descargar-app" className="px-3 py-2 ml-2 bg-white/20 rounded-lg font-bold hover:bg-white/30 text-white hover:scale-105 transition-all duration-300 flex items-center gap-2">
                <Download className="w-4 h-4" /> App
              </Link>
            )}

            <button 
              onClick={() => setSearchOpen(true)}
              className="px-3 py-2 ml-2 rounded-lg font-medium hover:bg-white/10 hover:text-sky-300 hover:scale-105 transition-all duration-300 flex items-center gap-2"
            >
              <Search className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-1 ml-2 border-l border-white/20 pl-4">
              <a href="https://www.facebook.com/TurismoPartidodePatagones/" target="_blank" rel="noopener noreferrer" className="p-2 rounded-lg hover:bg-white/10 hover:text-sky-300 hover:scale-110 transition-all duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" /></svg>
              </a>
              <a href="https://www.instagram.com/turismopatagones/#" target="_blank" rel="noopener noreferrer" className="p-2 rounded-lg hover:bg-white/10 hover:text-sky-300 hover:scale-110 transition-all duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" x2="17.51" y1="6.5" y2="6.5" /></svg>
              </a>
              <a href="https://api.whatsapp.com/send/?phone=5492920366892&text&type=phone_number&app_absent=0" target="_blank" rel="noopener noreferrer" className="p-2 rounded-lg hover:bg-white/10 hover:text-sky-300 hover:scale-110 transition-all duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9L3 21" /><path d="M9 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0v1a5 5 0 0 0 5 5h1a.5.5 0 0 0 0-1h-1a.5.5 0 0 0 0 1" /></svg>
              </a>
            </div>
          </div>

          <div className="md:hidden flex items-center gap-4">
            <button 
              onClick={() => setSearchOpen(true)}
              className="p-2 text-white hover:text-sky-300 transition-colors"
            >
              <Search className="w-6 h-6" />
            </button>


            <button
              className="p-2 bg-white/20 rounded-lg hover:bg-white/30 active:scale-95 transition-all shadow-sm border border-white/10 overflow-hidden"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
            >
              <div className={`transition-transform duration-300 ease-in-out flex items-center justify-center ${menuOpen ? 'rotate-90' : 'rotate-0'}`}>
                {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Dropdown */}
        {menuOpen && (
          <div className="md:hidden bg-white text-neutral-900 border-t flex flex-col shadow-lg">
            <Link to="/" className="p-4 border-b hover:bg-neutral-50" onClick={() => setMenuOpen(false)}>Inicio</Link>
            <Link to="/destinos" className="p-4 border-b hover:bg-neutral-50" onClick={() => setMenuOpen(false)}>Destinos</Link>
            <Link to="/que-hacer" className="p-4 border-b hover:bg-neutral-50" onClick={() => setMenuOpen(false)}>¿Qué hacer?</Link>
            <Link to="/info-viaje" className="p-4 border-b hover:bg-neutral-50" onClick={() => setMenuOpen(false)}>Info de Viaje</Link>
            <Link to="/contacto" className="p-4 border-b hover:bg-neutral-50" onClick={() => setMenuOpen(false)}>Contacto</Link>
            {!isStandalone && isMobile && (
              <Link to="/descargar-app" className="p-4 bg-[var(--color-primary)]/5 font-bold text-[var(--color-primary)] flex items-center gap-2" onClick={() => setMenuOpen(false)}>
                <Download className="w-5 h-5" /> Descargar App
              </Link>
            )}
          </div>
        )}
      </nav>

      {/* Main Content Area */}
      <main className="flex-1 w-full pt-16">
        <Outlet />
      </main>

      <SearchModal isOpen={searchOpen} onClose={() => setSearchOpen(false)} />
    </div>
  );
}

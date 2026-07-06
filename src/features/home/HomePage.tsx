import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Mousewheel, Pagination } from 'swiper/modules';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import 'swiper/css';
import 'swiper/css/pagination';

export default function HomePage() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="relative w-full h-[calc(100vh-4rem)] text-white font-sans overflow-hidden bg-black">
      {/* Fondo de video fijo */}
      <div className="absolute inset-0 z-0">
        <video 
          autoPlay 
          loop 
          muted 
          playsInline 
          className="absolute inset-0 w-full h-full object-cover saturate-[0.7] contrast-75 brightness-95"
        >
          <source src="/videos/hero-bg.webm" type="video/webm" />
        </video>
        {/* Efecto nublado/neblina: capa gris azulada sutil con un mínimo desenfoque */}
        <div className="absolute inset-0 bg-slate-400/20 backdrop-blur-[2px]"></div>
      </div>

      <Swiper
        direction={'vertical'}
        slidesPerView={1}
        spaceBetween={0}
        mousewheel={true}
        onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
        pagination={{
          clickable: true,
        }}
        modules={[Mousewheel, Pagination]}
        className="w-full h-full z-10 relative"
      >
        {/* Slide 1: Hero */}
        <SwiperSlide>
          <div className="w-full h-full flex flex-col justify-center items-center text-center p-6">
            <div className="relative z-20 w-full px-4">
              <motion.h1 
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8 }}
                className="text-5xl md:text-7xl font-bold mb-4 tracking-tight drop-shadow-lg"
              >
                Carmen de Patagones
              </motion.h1>
              <motion.p 
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-xl md:text-2xl mb-8 font-light text-neutral-100 drop-shadow-md w-full"
              >
                Puerta de entrada a la Patagonia. Patrimonio, historia y naturaleza.
              </motion.p>
              <Link to="/destinos" className="inline-block">
                <motion.button 
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  className="bg-[var(--color-tertiary)] hover:bg-orange-800 text-white px-8 py-3 rounded-full text-lg font-medium transition-colors shadow-xl"
                >
                  Descubrí la ciudad
                </motion.button>
              </Link>

              {/* Social Media Links */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="mt-12 flex items-center justify-center gap-6"
              >
                <a href="https://www.facebook.com/TurismoPartidodePatagones/" target="_blank" rel="noopener noreferrer" className="bg-white/10 hover:bg-white/30 p-3 rounded-full backdrop-blur-sm transition-colors text-white">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
                </a>
                <a href="https://www.instagram.com/turismopatagones/#" target="_blank" rel="noopener noreferrer" className="bg-white/10 hover:bg-white/30 p-3 rounded-full backdrop-blur-sm transition-colors text-white">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
                </a>
                <a href="https://api.whatsapp.com/send/?phone=5492920366892&text&type=phone_number&app_absent=0" target="_blank" rel="noopener noreferrer" className="bg-white/10 hover:bg-white/30 p-3 rounded-full backdrop-blur-sm transition-colors text-white">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6"><path d="M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9L3 21"/><path d="M9 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0v1a5 5 0 0 0 5 5h1a.5.5 0 0 0 0-1h-1a.5.5 0 0 0 0 1"/></svg>
                </a>
              </motion.div>
            </div>
          </div>
        </SwiperSlide>

        {/* Slide 2: Experiencias */}
        <SwiperSlide>
          <div className="w-full h-full flex flex-col justify-center items-center p-4 md:p-6 bg-black/40 backdrop-blur-sm">
            <h2 className="text-xl md:text-4xl font-bold mb-2 md:mb-4 text-white drop-shadow-lg text-center max-w-4xl leading-tight">
              Un mundo de experiencias te esperan en Patagones
            </h2>
            <p className="text-sm md:text-base max-w-3xl text-center mb-4 md:mb-6 text-white drop-shadow-md px-2">
              Más de 160 km de costa marítima, uno de los ríos más caudalosos del país, el único Poblado Histórico de la Patagonia.
              <span className="hidden md:inline"> Un destino que combina naturaleza, cultura y desconexión con la adrenalina.</span>
            </p>
            
            <div className="w-full max-w-md md:max-w-lg aspect-video rounded-xl overflow-hidden shadow-2xl bg-black/50 border border-white/10 pointer-events-none">
              {activeIndex === 1 ? (
                <iframe 
                  className="w-full h-full pointer-events-auto"
                  src="https://www.youtube.com/embed/GMo8ziLW934?si=Ac8biopXjl_JdHHV&autoplay=1" 
                  title="YouTube video player" 
                  frameBorder="0" 
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                  referrerPolicy="strict-origin-when-cross-origin" 
                  allowFullScreen
                ></iframe>
              ) : (
                <div className="w-full h-full flex items-center justify-center pointer-events-none">
                  <div className="w-12 h-12 border-4 border-[var(--color-primary)] border-t-transparent rounded-full animate-spin"></div>
                </div>
              )}
            </div>
          </div>
        </SwiperSlide>

        {/* Slide 3: Playas y Verano */}
        <SwiperSlide>
          <div className="w-full h-full flex flex-col justify-center items-center p-4 md:p-6 bg-black/60 backdrop-blur-sm">
            <h2 className="text-xl md:text-4xl font-bold mb-2 md:mb-4 text-white drop-shadow-lg text-center max-w-4xl leading-tight">
              Este verano vivilo en nuestras playas
            </h2>
            <p className="text-sm md:text-base max-w-3xl text-center mb-4 md:mb-6 text-white drop-shadow-md px-2">
              Más de 160 kilómetros de costa marítima, 5 balnearios, y la mejor pesca deportiva te esperan en Patagones.
              <span className="hidden md:inline"> ¡Te esperamos con las puertas abiertas!</span>
            </p>
            
            <div className="w-full max-w-md md:max-w-lg aspect-video rounded-xl overflow-hidden shadow-2xl bg-black/50 border border-white/10 pointer-events-none">
              {activeIndex === 2 ? (
                <iframe 
                  className="w-full h-full pointer-events-auto"
                  src="https://www.youtube.com/embed/3nWseR35Eio?si=gFnNiC8KnUkeCVlU&autoplay=1" 
                  title="YouTube video player" 
                  frameBorder="0" 
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                  referrerPolicy="strict-origin-when-cross-origin" 
                  allowFullScreen
                ></iframe>
              ) : (
                <div className="w-full h-full flex items-center justify-center pointer-events-none">
                  <div className="w-12 h-12 border-4 border-[var(--color-primary)] border-t-transparent rounded-full animate-spin"></div>
                </div>
              )}
            </div>
          </div>
        </SwiperSlide>
        
        {/* Slide 4: Bahía San Blas Pesca */}
        <SwiperSlide>
          <div className="w-full h-full flex flex-col justify-center items-center p-4 md:p-6 bg-black/60 backdrop-blur-sm">
            <h2 className="text-xl md:text-4xl font-bold mb-2 md:mb-4 text-white drop-shadow-lg text-center max-w-4xl leading-tight">
              ¿Por qué Bahía San Blas es el mejor pesquero deportivo de la región?
            </h2>
            <p className="text-sm md:text-base max-w-3xl text-center mb-4 md:mb-6 text-white drop-shadow-md px-2">
              La inmejorable riqueza ictícola y sus más de 30 Km. de franja costera permiten una experiencia de pesca insuperable.
              <span className="hidden md:inline"><br/>Contamos con una oferta consolidada de casas de pesca, guías especializados, excursiones embarcadas y de costa, además de todos los servicios.</span>
            </p>
            
            <div className="w-full max-w-md md:max-w-lg aspect-video rounded-xl overflow-hidden shadow-2xl bg-black/50 border border-white/10 pointer-events-none">
              {activeIndex === 3 ? (
                <iframe 
                  className="w-full h-full pointer-events-auto"
                  src="https://www.youtube.com/embed/gjBWxU1--1g?si=bb2R2WZVhSUNN-OJ&autoplay=1" 
                  title="YouTube video player" 
                  frameBorder="0" 
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                  referrerPolicy="strict-origin-when-cross-origin" 
                  allowFullScreen
                ></iframe>
              ) : (
                <div className="w-full h-full flex items-center justify-center pointer-events-none">
                  <div className="w-12 h-12 border-4 border-[var(--color-primary)] border-t-transparent rounded-full animate-spin"></div>
                </div>
              )}
            </div>
          </div>
        </SwiperSlide>

        {/* Slide 5: Footer */}
        <SwiperSlide>
          <div className="w-full h-full flex flex-col items-center justify-center p-4 md:p-6 bg-black/90">
            
            <div className="flex flex-col items-center justify-center gap-6 md:gap-8 w-full max-w-4xl flex-1 mt-6 md:mt-0">
              
              {/* Big Logo */}
              <img src="/logo.png" alt="Turismo Patagones" className="h-32 md:h-56 lg:h-72 object-contain opacity-90" />
              
              {/* Social Networks + Buttons */}
              <div className="flex flex-col md:flex-row items-center gap-6 md:gap-12">
                
                {/* Social Networks */}
                <div className="flex gap-4">
                  <a href="https://www.facebook.com/TurismoPartidodePatagones/" target="_blank" rel="noopener noreferrer" className="bg-white/10 hover:bg-white/30 p-3 rounded-full backdrop-blur-sm transition-colors text-white">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
                  </a>
                  <a href="https://www.instagram.com/turismopatagones/#" target="_blank" rel="noopener noreferrer" className="bg-white/10 hover:bg-white/30 p-3 rounded-full backdrop-blur-sm transition-colors text-white">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
                  </a>
                  <a href="https://api.whatsapp.com/send/?phone=5492920366892&text&type=phone_number&app_absent=0" target="_blank" rel="noopener noreferrer" className="bg-white/10 hover:bg-white/30 p-3 rounded-full backdrop-blur-sm transition-colors text-white">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6"><path d="M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9L3 21"/><path d="M9 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0v1a5 5 0 0 0 5 5h1a.5.5 0 0 0 0-1h-1a.5.5 0 0 0 0 1"/></svg>
                  </a>
                </div>

                {/* Divider */}
                <div className="hidden md:block w-px h-12 bg-white/20"></div>

                {/* Destinos and Contacto */}
                <div className="flex gap-4">
                  <Link to="/destinos" className="px-6 py-2 border border-white/30 rounded-lg hover:bg-white/20 transition-colors backdrop-blur-md text-white font-medium text-sm md:text-base md:px-8 md:py-3">Destinos</Link>
                  <Link to="/contacto" className="px-6 py-2 border border-white/30 rounded-lg hover:bg-white/20 transition-colors backdrop-blur-md text-white font-medium text-sm md:text-base md:px-8 md:py-3">Contacto</Link>
                </div>

              </div>
            </div>
            
            {/* Bottom: Copyright & Disclaimer */}
            <div className="mt-8 pb-8 md:pb-6 flex flex-col items-center gap-2 text-center">
              <p className="text-white/70 font-semibold text-sm md:text-base bg-white/10 px-4 py-2 rounded-lg border border-white/20">Prototipo no oficial de modernización turística</p>
              <p className="text-white/50 text-xs md:text-sm">© 2026 Turismo Partido de Patagones.</p>
            </div>

          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

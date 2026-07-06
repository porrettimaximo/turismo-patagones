export type TourismDestination = {
  id: string;
  title: string;
  description: string;
  image?: string;
  highlights: string[];
};

export const destinations: TourismDestination[] = [
  {
    id: 'carmen-de-patagones',
    title: 'Carmen de Patagones',
    description: 'El poblado más antiguo de la Patagonia. Descubrí su casco histórico, sus barrancas al río y su profunda historia.',
    image: '/images/carmen-de-patagones.jpg',
    highlights: ['Poblado Histórico Nacional', 'Costanera del Río Negro', 'Cerro de la Caballada']
  },
  {
    id: 'bahia-san-blas',
    title: 'Bahía San Blas',
    description: 'El Paraíso de los Pescadores. Playas amplias y excelente pesca deportiva.',
    image: '/images/bahia-san-blas.jpg',
    highlights: ['Pesca de costa y embarcado', 'Reserva Natural', 'Playas tranquilas']
  },
  {
    id: 'los-pocitos',
    title: 'Balneario Los Pocitos',
    description: 'Un lugar ideal para el descanso, famoso por sus ostras y aguas mansas.',
    image: '/images/los-pocitos.jpg',
    highlights: ['Fiesta de la Ostra', 'Aguas mansas', 'Pesca']
  },
  {
    id: 'villa-7-de-marzo',
    title: 'Villa Turística 7 de Marzo',
    description: 'Naturaleza virgen donde el Río Negro se encuentra con el Mar Argentino.',
    image: '/images/villa-7-de-marzo.jpg',
    highlights: ['Desembocadura del río', 'Fauna autóctona', 'Playas vírgenes']
  },
  {
    id: 'stroeder',
    title: 'Stroeder',
    description: 'Localidad de tradición agrícola-ganadera y sede de la Fiesta Provincial del Agro.',
    image: '/images/stroeder.jpg',
    highlights: ['Turismo rural', 'Fiesta del Agro', 'Tranquilidad y llanuras']
  },
  {
    id: 'salina-de-piedras',
    title: 'Salina de Piedras',
    description: 'Un asombroso depósito natural de sal con tonalidades rosadas únicas en la región.',
    image: '/images/salina-de-piedras.png',
    highlights: ['Paisaje único', 'Fotografía', 'Naturaleza patagónica']
  },
  {
    id: 'villalonga',
    title: 'Villalonga',
    description: 'Próspera localidad agropecuaria conocida por sus calles arboladas y su rica historia.',
    image: '/images/villalonga.jpg',
    highlights: ['Turismo rural', 'Plaza central', 'Producción']
  }
];

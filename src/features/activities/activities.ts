export type Activity = {
  id: string;
  location: string;
  title: string;
  description: string;
  contact: string;
  contactLink?: string;
};

export const activities: Activity[] = [
  // CARMEN DE PATAGONES
  {
    id: 'cdp-poblado-historico',
    location: 'Carmen de Patagones',
    title: 'Poblado Histórico Nacional',
    description: 'Carmen de Patagones invita a recorrer uno de los centros históricos más importantes de la Patagonia. Sus calles irregulares, sus barrancas, sus construcciones antiguas y su relación directa con el río Negro conforman un paisaje urbano único.\n\nEl Casco Histórico fue declarado Poblado Histórico Nacional y reúne algunos de los sitios más representativos de la historia local, como la Torre del Antiguo Fuerte, los ranchos coloniales, las cuevas maragatas y la Iglesia Parroquial Nuestra Señora del Carmen. Es una propuesta ideal para quienes desean conocer el origen histórico de la ciudad, caminar por sus calles tradicionales y descubrir el patrimonio cultural maragato.',
    contact: 'Oficina de Informes Turísticos de Carmen de Patagones: J. J. Biedma s/n, junto al Muelle Nacional de Lanchas. Tel.: 02920-465406. Mail: turismopatagones@gmail.com\nDirección de Turismo del Partido de Patagones: Mitre 84. Tel.: 02920-464819. Mail: turismopatagones@gmail.com',
    contactLink: 'mailto:turismopatagones@gmail.com'
  },
  {
    id: 'cdp-visitas-guiadas',
    location: 'Carmen de Patagones',
    title: 'Visitas guiadas por el Poblado Histórico',
    description: 'Las visitas guiadas por el Poblado Histórico permiten conocer la ciudad a través de sus relatos, construcciones, anécdotas y leyendas. El recorrido tiene una duración aproximada de una hora y media y está coordinado por guías especializados.\n\nDurante la actividad, los visitantes pueden acercarse a los principales hitos históricos de Carmen de Patagones y comprender la importancia de la ciudad en la historia regional y nacional. Es una experiencia recomendada para turistas, instituciones educativas, contingentes y vecinos que deseen redescubrir el patrimonio local.',
    contact: 'Oficina de Informes Turísticos de Carmen de Patagones: J. J. Biedma s/n, junto al Muelle Nacional de Lanchas. Tel.: 02920-465406. Mail: turismopatagones@gmail.com',
    contactLink: 'mailto:turismopatagones@gmail.com'
  },
  {
    id: 'cdp-museos',
    location: 'Carmen de Patagones',
    title: 'Museos de Carmen de Patagones',
    description: 'Carmen de Patagones cuenta con espacios museísticos que conservan y difunden la historia, la cultura y la identidad de la ciudad.\n\nEl Museo Histórico Regional “Emma Nozzi” permite recorrer salas de exposición, cuevas y espacios patrimoniales vinculados a la vida cotidiana, la historia maragata y los primeros tiempos de la ciudad. También posee archivo, biblioteca y material documental de gran valor histórico.\n\nEl Museo de Prefectura Naval Argentina funciona en un edificio histórico y exhibe objetos náuticos, uniformes, maquetas, armas, elementos institucionales y testimonios vinculados a la actividad de la Prefectura.\n\nEl Museo Religioso Salesiano Monseñor Fagnano conserva colecciones religiosas, objetos litúrgicos y elementos vinculados a la historia de la comunidad salesiana local.',
    contact: 'Museo Histórico Regional “Emma Nozzi”: J. J. Biedma 64. Tel.: 02920-464291\n\nMuseo de Prefectura Naval Argentina: Mitre 350. Tel.: 02920-461742\n\nOficina de Informes Turísticos de Carmen de Patagones: Tel.: 02920-465406. Mail: turismopatagones@gmail.com',
    contactLink: 'mailto:turismopatagones@gmail.com'
  },
  {
    id: 'cdp-rio-negro',
    location: 'Carmen de Patagones',
    title: 'Río Negro, costanera y actividades recreativas',
    description: 'El río Negro es uno de los grandes atractivos naturales de Carmen de Patagones. Sus aguas tranquilas y su paisaje ribereño ofrecen un entorno ideal para caminatas, paseos, pesca, actividades náuticas, recreación y descanso al aire libre.\n\nLa costanera permite disfrutar de vistas panorámicas, conectarse con la naturaleza y recorrer uno de los sectores más representativos de la ciudad. Es una propuesta recomendada para familias, visitantes y amantes de los paisajes patagónicos.',
    contact: 'Oficina de Informes Turísticos de Carmen de Patagones: J. J. Biedma s/n, junto al Muelle Nacional de Lanchas. Tel.: 02920-465406. Mail: turismopatagones@gmail.com',
    contactLink: 'mailto:turismopatagones@gmail.com'
  },
  {
    id: 'cdp-fiesta-soberania',
    location: 'Carmen de Patagones',
    title: 'Fiesta de la Soberanía Patagónica',
    description: 'La Fiesta de la Soberanía Patagónica es uno de los eventos más representativos de Carmen de Patagones. La celebración recuerda la gesta histórica de 1827 y reúne propuestas culturales, artísticas, gastronómicas y recreativas.\n\nDurante la fiesta, vecinos y visitantes pueden disfrutar de espectáculos, ferias, paseos de artesanos, propuestas gastronómicas y actividades vinculadas a la identidad histórica de la ciudad.',
    contact: 'Dirección de Turismo del Partido de Patagones: Mitre 84. Tel.: 02920-464819. Mail: turismopatagones@gmail.com',
    contactLink: 'mailto:turismopatagones@gmail.com'
  },

  // BAHIA SAN BLAS
  {
    id: 'bsb-pesca-deportiva',
    location: 'Bahía San Blas',
    title: 'Pesca deportiva',
    description: 'Bahía San Blas es reconocida como uno de los destinos más importantes para la pesca deportiva. Ubicada sobre la Isla del Jabalí, ofrece condiciones naturales ideales para la pesca de costa, en ría y en mar abierto.\n\nSus playas, canales, rías y sectores pesqueros permiten disfrutar de una experiencia variada durante gran parte del año. Entre los lugares más elegidos se encuentran Playa de Arena, Playa de Piedras, el Riacho, Las Piedras Chatas, La Rebeca y El Puente.',
    contact: 'Oficina de Informes Turísticos de Bahía San Blas: Av. Costanera entre calles 35 y 37. Tel.: 02920-15415753. Mail: turismobahiasanblas@yahoo.com.ar',
    contactLink: 'mailto:turismobahiasanblas@yahoo.com.ar'
  },
  {
    id: 'bsb-excursiones-embarcada',
    location: 'Bahía San Blas',
    title: 'Excursiones de pesca embarcada',
    description: 'Las excursiones de pesca embarcada son una de las experiencias más buscadas en Bahía San Blas. La actividad se realiza con prestadores y guías especializados, y permite acceder a distintos sectores de pesca según la época del año, las condiciones climáticas y las características del grupo.\n\nPara disfrutar una experiencia segura y organizada, se recomienda consultar previamente por prestadores habilitados, disponibilidad, horarios y condiciones de salida.',
    contact: 'Oficina de Informes Turísticos de Bahía San Blas: Av. Costanera entre calles 35 y 37. Tel.: 02920-15415753. Mail: turismobahiasanblas@yahoo.com.ar',
    contactLink: 'mailto:turismobahiasanblas@yahoo.com.ar'
  },
  {
    id: 'bsb-playas-descanso',
    location: 'Bahía San Blas',
    title: 'Playas y descanso familiar',
    description: 'Bahía San Blas también es un destino ideal para disfrutar de la playa, la tranquilidad y el descanso en familia. Sus extensas costas combinan sectores de arena, piedra y ría, ofreciendo paisajes diversos y un ambiente seguro para quienes buscan desconectarse.\n\nAdemás de la pesca, la localidad cuenta con propuestas de alojamiento, gastronomía y servicios turísticos que permiten planificar una estadía completa.',
    contact: 'Oficina de Informes Turísticos de Bahía San Blas: Av. Costanera entre calles 35 y 37. Tel.: 02920-15415753. Mail: turismobahiasanblas@yahoo.com.ar',
    contactLink: 'mailto:turismobahiasanblas@yahoo.com.ar'
  },
  {
    id: 'bsb-reserva-natural',
    location: 'Bahía San Blas',
    title: 'Reserva Natural y observación de fauna',
    description: 'La región de Bahía San Blas forma parte de una Reserva Natural de Uso Múltiple. Su ambiente de humedales, islas, rías y costas ofrece un escenario ideal para la observación de flora y fauna autóctona.\n\nEs una propuesta recomendada para quienes disfrutan del turismo de naturaleza, la fotografía, los paisajes costeros y las experiencias al aire libre.',
    contact: 'Oficina de Informes Turísticos de Bahía San Blas: Av. Costanera entre calles 35 y 37. Tel.: 02920-15415753. Mail: turismobahiasanblas@yahoo.com.ar',
    contactLink: 'mailto:turismobahiasanblas@yahoo.com.ar'
  },
  {
    id: 'bsb-historia-isla',
    location: 'Bahía San Blas',
    title: 'Historia de la Isla del Jabalí',
    description: 'La historia de Bahía San Blas y la Isla del Jabalí suma un atractivo cultural al paisaje natural. El destino conserva relatos vinculados a los primeros exploradores, al desarrollo turístico de la isla y a construcciones históricas que forman parte de su identidad.\n\nRecorrer la localidad permite descubrir no solo un espacio natural privilegiado, sino también una historia marcada por la pesca, el turismo, la vida isleña y el vínculo con el mar.',
    contact: 'Oficina de Informes Turísticos de Bahía San Blas: Av. Costanera entre calles 35 y 37. Tel.: 02920-15415753. Mail: turismobahiasanblas@yahoo.com.ar',
    contactLink: 'mailto:turismobahiasanblas@yahoo.com.ar'
  },

  // BALNEARIO LOS POCITOS
  {
    id: 'pocitos-playa-naturaleza',
    location: 'Balneario Los Pocitos',
    title: 'Playa, descanso y naturaleza',
    description: 'Balneario Los Pocitos es una villa costera ideal para disfrutar de la tranquilidad, el descanso y el contacto con la naturaleza. Sus playas, marismas, humedales, canales y dunas conforman un paisaje característico de la costa atlántica del Partido de Patagones.\n\nEs un destino recomendado para familias, visitantes que buscan calma y quienes desean pasar unos días en un entorno natural, con ritmo tranquilo y ambiente de pueblo balneario.',
    contact: 'Turismo Balneario Los Pocitos: Mail: turismolospocitos@gmail.com\n\nOficina de Informes Turísticos de Carmen de Patagones: Tel.: 02920-465406. Mail: turismopatagones@gmail.com',
    contactLink: 'mailto:turismolospocitos@gmail.com'
  },
  {
    id: 'pocitos-camping',
    location: 'Balneario Los Pocitos',
    title: 'Camping y recreación al aire libre',
    description: 'Los Pocitos cuenta con espacios para disfrutar actividades al aire libre, descanso, caminatas y jornadas de playa. Su entorno natural permite vivir una experiencia sencilla, cercana y relajada, ideal para quienes buscan desconectarse de la rutina.\n\nDurante la temporada, el balneario recibe visitantes que llegan para acampar, compartir en familia, recorrer la costa y disfrutar del paisaje marítimo.',
    contact: 'Turismo Balneario Los Pocitos: Mail: turismolospocitos@gmail.com\n\nOficina de Informes Turísticos de Carmen de Patagones: Tel.: 02920-465406. Mail: turismopatagones@gmail.com',
    contactLink: 'mailto:turismolospocitos@gmail.com'
  },
  {
    id: 'pocitos-pesca-muelle',
    location: 'Balneario Los Pocitos',
    title: 'Pesca desde el muelle',
    description: 'La pesca es una de las actividades tradicionales de Los Pocitos. El muelle es uno de los espacios más elegidos por pescadores locales y visitantes, especialmente durante la temporada estival.\n\nLa localidad ofrece un entorno propicio para la pesca variada y deportiva, en un marco de tranquilidad y contacto directo con el ambiente costero.',
    contact: 'Turismo Balneario Los Pocitos: Mail: turismolospocitos@gmail.com\n\nOficina de Informes Turísticos de Carmen de Patagones: Tel.: 02920-465406. Mail: turismopatagones@gmail.com',
    contactLink: 'mailto:turismolospocitos@gmail.com'
  },
  {
    id: 'pocitos-ostras',
    location: 'Balneario Los Pocitos',
    title: 'Ostras y gastronomía marina',
    description: 'Los Pocitos se destaca por su vínculo con la producción ostrícola y la gastronomía marina. La ostra es uno de los símbolos de la localidad y forma parte de la identidad productiva y culinaria del balneario.\n\nQuienes visitan Los Pocitos pueden conocer una propuesta gastronómica asociada al mar, a la pesca artesanal y a los sabores característicos de la costa patagónica bonaerense.',
    contact: 'Turismo Balneario Los Pocitos: Mail: turismolospocitos@gmail.com\n\nOficina de Informes Turísticos de Carmen de Patagones: Tel.: 02920-465406. Mail: turismopatagones@gmail.com',
    contactLink: 'mailto:turismolospocitos@gmail.com'
  },
  {
    id: 'pocitos-fiesta-ostra',
    location: 'Balneario Los Pocitos',
    title: 'Fiesta Provincial de la Ostra',
    description: 'La Fiesta Provincial de la Ostra es uno de los eventos más representativos de Los Pocitos. Nacida en 2008, celebra la identidad productiva y gastronómica de la localidad.\n\nLa propuesta incluye degustación de platos elaborados con ostras, cena-baile, música y actividades populares. Es una celebración que reúne a vecinos, productores, visitantes y familias en torno a uno de los productos más característicos del balneario.',
    contact: 'Turismo Balneario Los Pocitos: Mail: turismolospocitos@gmail.com\n\nOficina de Informes Turísticos de Carmen de Patagones: Tel.: 02920-465406. Mail: turismopatagones@gmail.com',
    contactLink: 'mailto:turismolospocitos@gmail.com'
  },

  // VILLA TURISTICA 7 DE MARZO
  {
    id: 'villa7-playa-agreste',
    location: 'Villa Turística 7 de Marzo',
    title: 'Playa agreste en la desembocadura del río Negro',
    description: 'La Villa Turística 7 de Marzo se encuentra sobre la desembocadura del río Negro, a unos 35 kilómetros de Carmen de Patagones. Es un destino agreste, tranquilo y natural, ideal para quienes buscan disfrutar de extensas playas de arena y un ambiente de descanso.\n\nSu paisaje combina río, mar, costa y naturaleza, ofreciendo una experiencia distinta dentro de la oferta turística del Partido de Patagones.',
    contact: 'Oficina de Informes Turísticos de Carmen de Patagones: J. J. Biedma s/n, junto al Muelle Nacional de Lanchas. Tel.: 02920-465406. Mail: turismopatagones@gmail.com\nDirección de Turismo del Partido de Patagones: Mitre 84. Tel.: 02920-464819. Mail: turismopatagones@gmail.com',
    contactLink: 'mailto:turismopatagones@gmail.com'
  },
  {
    id: 'villa7-pesca',
    location: 'Villa Turística 7 de Marzo',
    title: 'Pesca deportiva',
    description: 'La pesca deportiva es uno de los principales atractivos de la Villa Turística 7 de Marzo. Sus playas ofrecen distintos sectores aptos para la práctica, como Playa Chica, El Estacionario, La Cantera y la Playa de la Villa, también conocida como El Monolito.\n\nEs una propuesta recomendada para pescadores y visitantes que desean disfrutar de una jornada al aire libre en un entorno natural y tranquilo.',
    contact: 'Oficina de Informes Turísticos de Carmen de Patagones: Tel.: 02920-465406. Mail: turismopatagones@gmail.com',
    contactLink: 'mailto:turismopatagones@gmail.com'
  },
  {
    id: 'villa7-kitesurf',
    location: 'Villa Turística 7 de Marzo',
    title: 'Kitesurf y actividades en la naturaleza',
    description: 'La Villa Turística 7 de Marzo ofrece condiciones favorables para la práctica de kitesurf y otras actividades recreativas vinculadas al entorno costero.\n\nLa presencia del estuario del río Negro genera un paisaje ideal para la observación de flora y fauna autóctona, caminatas, fotografía y disfrute de la naturaleza.',
    contact: 'Oficina de Informes Turísticos de Carmen de Patagones: Tel.: 02920-465406. Mail: turismopatagones@gmail.com',
    contactLink: 'mailto:turismopatagones@gmail.com'
  },

  // SALINA DE PIEDRAS / CARDENAL CAGLIERO
  {
    id: 'salina-paisaje',
    location: 'Salina de Piedras / Cardenal Cagliero',
    title: 'Paisaje salino y fotografía',
    description: 'La Salina de Piedras se encuentra a 12 kilómetros de Cardenal Cagliero y constituye uno de los paisajes más singulares del Partido de Patagones. Su entorno natural, sus tonalidades y su proceso de formación la convierten en un atractivo ideal para la fotografía, el turismo de naturaleza y los recorridos paisajísticos.\n\nDurante distintas épocas del año, la salina puede presentar cambios visuales notables, especialmente cuando el agua adquiere tonalidades rosadas por la presencia de algas y bacterias.',
    contact: 'Dirección de Turismo del Partido de Patagones: Mitre 84. Tel.: 02920-464819. Mail: turismopatagones@gmail.com\n\nOficina de Informes Turísticos de Carmen de Patagones: Tel.: 02920-465406. Mail: turismopatagones@gmail.com',
    contactLink: 'mailto:turismopatagones@gmail.com'
  },
  {
    id: 'salina-proceso',
    location: 'Salina de Piedras / Cardenal Cagliero',
    title: 'Proceso natural y cosecha de sal',
    description: 'La Salina de Piedras permite conocer un proceso natural y productivo característico de la región. Durante el invierno se llena de agua y acumula sal; en primavera la sal comienza a aflorar y, durante el verano, el agua se evapora hasta permitir la cosecha.\n\nLa sal extraída se utiliza con distintos fines industriales, lo que convierte al lugar en un atractivo de interés natural, productivo e histórico.',
    contact: 'Dirección de Turismo del Partido de Patagones: Mitre 84. Tel.: 02920-464819. Mail: turismopatagones@gmail.com\n\nOficina de Informes Turísticos de Carmen de Patagones: Tel.: 02920-465406. Mail: turismopatagones@gmail.com',
    contactLink: 'mailto:turismopatagones@gmail.com'
  },

  // STROEDER
  {
    id: 'stroeder-historia',
    location: 'Stroeder',
    title: 'Historia ferroviaria y estación',
    description: 'Stroeder conserva una fuerte identidad vinculada al ferrocarril. La llegada del tren fue clave para el desarrollo de la localidad y dejó una huella visible en su paisaje urbano, su estación y su memoria comunitaria.\n\nRecorrer Stroeder permite conocer parte de la historia ferroviaria del sur bonaerense y comprender la importancia que tuvo el transporte de personas, mercaderías y producción para el crecimiento regional.',
    contact: 'Dirección de Turismo del Partido de Patagones: Mitre 84. Tel.: 02920-464819. Mail: turismopatagones@gmail.com\n\nOficina de Informes Turísticos de Carmen de Patagones: Tel.: 02920-465406. Mail: turismopatagones@gmail.com',
    contactLink: 'mailto:turismopatagones@gmail.com'
  },
  {
    id: 'stroeder-museo',
    location: 'Stroeder',
    title: 'Museo Stroeder',
    description: 'El Museo Stroeder reúne objetos, testimonios y elementos vinculados a los orígenes de la localidad. Es un espacio pensado para preservar la memoria del pueblo y acercar a visitantes y vecinos a su historia.\n\nLa visita permite conocer aspectos de la vida cotidiana, el desarrollo local y la importancia del ferrocarril en la conformación de la comunidad.',
    contact: 'Dirección de Turismo del Partido de Patagones: Mitre 84. Tel.: 02920-464819. Mail: turismopatagones@gmail.com\n\nOficina de Informes Turísticos de Carmen de Patagones: Tel.: 02920-465406. Mail: turismopatagones@gmail.com',
    contactLink: 'mailto:turismopatagones@gmail.com'
  },
  {
    id: 'stroeder-silo',
    location: 'Stroeder',
    title: 'Silo de la Ex Junta Nacional de Granos',
    description: 'El Silo de la Ex Junta Nacional de Granos es otro de los puntos destacados de Stroeder. Inaugurado en 1962, formó parte del desarrollo productivo de la localidad y de la actividad cerealera regional.\n\nSu presencia recuerda la importancia del trabajo rural, el almacenamiento de granos y el vínculo entre producción, transporte y crecimiento económico en el sur del Partido de Patagones.',
    contact: 'Dirección de Turismo del Partido de Patagones: Mitre 84. Tel.: 02920-464819. Mail: turismopatagones@gmail.com\n\nOficina de Informes Turísticos de Carmen de Patagones: Tel.: 02920-465406. Mail: turismopatagones@gmail.com',
    contactLink: 'mailto:turismopatagones@gmail.com'
  },
  {
    id: 'stroeder-fiesta-cordero',
    location: 'Stroeder',
    title: 'Fiesta Regional del Cordero Norpatagónico',
    description: 'La Fiesta Regional del Cordero Norpatagónico celebra uno de los productos más representativos de la zona. La propuesta reúne gastronomía regional, música, encuentro comunitario y tradición rural.\n\nEs una oportunidad para disfrutar sabores típicos, compartir una celebración popular y conocer parte de la identidad productiva de Stroeder y la región.',
    contact: 'Dirección de Turismo del Partido de Patagones: Mitre 84. Tel.: 02920-464819. Mail: turismopatagones@gmail.com\n\nOficina de Informes Turísticos de Carmen de Patagones: Tel.: 02920-465406. Mail: turismopatagones@gmail.com',
    contactLink: 'mailto:turismopatagones@gmail.com'
  },

  // VILLALONGA
  {
    id: 'villalonga-historia',
    location: 'Villalonga',
    title: 'Historia local y recorrido urbano',
    description: 'Villalonga se encuentra en el corazón del Partido de Patagones y conserva una historia vinculada al poblamiento rural, el ferrocarril y el desarrollo regional.\n\nRecorrer la localidad permite acercarse a su identidad, conocer su origen y descubrir una comunidad marcada por la producción, la tradición y el vínculo con distintos puntos del partido.',
    contact: 'Dirección de Turismo del Partido de Patagones: Mitre 84. Tel.: 02920-464819. Mail: turismopatagones@gmail.com\n\nOficina de Informes Turísticos de Carmen de Patagones: Tel.: 02920-465406. Mail: turismopatagones@gmail.com',
    contactLink: 'mailto:turismopatagones@gmail.com'
  },
  {
    id: 'villalonga-santuario',
    location: 'Villalonga',
    title: 'Santuario de Schoenstatt',
    description: 'El Santuario de Schoenstatt, ubicado en el patio de la Iglesia Nuestra Señora del Rosario, es uno de los espacios religiosos más visitados de Villalonga.\n\nCada día 18 de mes se celebra la devoción a la Virgen Madre Reina y Victoriosa Tres Veces Admirable de Schoenstatt, convocando a fieles de la región y de otras provincias. Es una propuesta vinculada al turismo religioso, la fe y la vida comunitaria.',
    contact: 'Dirección de Turismo del Partido de Patagones: Mitre 84. Tel.: 02920-464819. Mail: turismopatagones@gmail.com\n\nOficina de Informes Turísticos de Carmen de Patagones: Tel.: 02920-465406. Mail: turismopatagones@gmail.com',
    contactLink: 'mailto:turismopatagones@gmail.com'
  },
  {
    id: 'villalonga-termas',
    location: 'Villalonga',
    title: 'Termas Los Gauchos',
    description: 'A pocos kilómetros de Villalonga se encuentran las Termas Los Gauchos, un espacio rodeado de naturaleza, ideal para el descanso y la relajación.\n\nSus aguas termales forman parte de una propuesta diferente dentro del Partido de Patagones, orientada al bienestar, la tranquilidad y el disfrute de un entorno natural. El lugar también cuenta con servicios para recibir visitantes.',
    contact: 'Dirección de Turismo del Partido de Patagones: Mitre 84. Tel.: 02920-464819. Mail: turismopatagones@gmail.com\n\nOficina de Informes Turísticos de Carmen de Patagones: Tel.: 02920-465406. Mail: turismopatagones@gmail.com',
    contactLink: 'mailto:turismopatagones@gmail.com'
  }
];

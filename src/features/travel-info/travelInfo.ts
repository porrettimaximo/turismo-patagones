export type TravelInfo = {
  id: string;
  location: string;
  title: string;
  description: string;
  category: 'Cómo Llegar' | 'Consejos de Viaje';
};

export const travelInfo: TravelInfo[] = [
  // CARMEN DE PATAGONES
  {
    id: 'cdp-como-llegar-auto',
    location: 'Carmen de Patagones',
    title: 'En vehículo particular',
    description: 'El Partido de Patagones es el más austral y extenso territorio de la Provincia de Buenos Aires y constituye dentro de la extensa geografía argentina, el mojón que marca el nacimiento mismo de la región Patagónica Argentina. Recorrerlo a través de la Ruta Nacional N° 3 Sur significa encontrarnos cara a cara con la pródiga naturaleza, su historia, su cultura, su gente, su vida cotidiana. La posición geográfica del partido conjuga al río, al mar y al campo ofreciendo una diversidad de espacios en donde desarrollar un amplio abanico de actividades turísticas y recreativas.\n\nEl acceso al lugar se logra desde capital federal, transitando en dirección sur por RN 3 unos 970 kilómetros , hasta llegar al km 962. Desde el Norte se accede ingresando a la ciudad por la ex ruta 3 hasta arribar a la rotonda de bienvenida, de aquí por calle Barbieri se transitan 8 cuadras hasta doblar a mano izquierda por calle Comodoro Rivadavia la cual conduce directamente al Centro Cívico de la ciudad. Desde el Sur se accede cruzando los distintos puentes carreteros desde la vecina ciudad de Viedma Capital de la Provincia de Río Negro.',
    category: 'Cómo Llegar'
  },
  {
    id: 'cdp-como-llegar-bus',
    location: 'Carmen de Patagones',
    title: 'En Ómnibus',
    description: 'Existen diferentes tipos de transporte a Carmen de Patagones se unifican bajo una línea de colectivos que la conecta con la ciudad de Carmen de Patagones. Este servicio funciona durante todo el año con una frecuencia de dos veces por semana, constituyendo un importante medio para los cientos de turistas que llegan durante la temporada.\n\nTERMINAL DE ÓMNIBUS DE CARMEN DE PATAGONES - Antonio Barbieri 165\nTERMINAL DE ÓMNIBUS DE VIEDMA- J. M. Guido 1580. - Tel: (02920) 426850',
    category: 'Cómo Llegar'
  },

  // BAHÍA SAN BLAS
  {
    id: 'bsb-como-llegar-auto',
    location: 'Bahía San Blas',
    title: 'En vehículo particular',
    description: 'El acceso al lugar se logra, en primera instancia, transitando por Ruta Nacional N° 3 hasta el Km. 918, lugar donde se encuentra emplazada la nueva rotonda de ingreso.\n\nDesde allí, tomando destino este por camino de ripio consolidado, y tras recorrer unos 62 Km. se arriba al destino. Recuerde circular a velocidad moderada respetando las señales viales.',
    category: 'Cómo Llegar'
  },
  {
    id: 'bsb-como-llegar-bus',
    location: 'Bahía San Blas',
    title: 'Transporte Municipal',
    description: 'El Transporte Municipal brinda el servicio regular de traslado entre Carmen de Patagones y Bahía San Blas, los días lunes, miércoles y viernes (exceptuando feriados y asuetos administrativos).\n\n• Salida desde delegación de Bahía San Blas: 06:30 Hs.\n• Desde Carmen de Patagones a Bahía San Blas: 17:00 Hs, desde la Terminal de Ómnibus (Antonio Barbieri 165).\n\nEl servicio no dispone de transporte de equipaje, permitiéndose únicamente una mochila de mano por pasajero.',
    category: 'Cómo Llegar'
  },
  {
    id: 'bsb-consejos',
    location: 'Bahía San Blas',
    title: 'Recomendaciones importantes',
    description: '• NO dispone de cajero automático. Al momento de efectuar una reserva, pregunte las formas de pago a su prestador.\n• No cuenta con estación de GNC.\n• Si desea hacer uso de su embarcación particular, debe ajustarse a las exigencias de Prefectura Naval Argentina.\n• Practique la pesca deportiva en los sitios indicados para tal fin. Se encuentra PROHIBIDA la pesca con redes.\n• Por favor, recuerde llevarse sus residuos para cuidar el entorno natural.',
    category: 'Consejos de Viaje'
  },

  // LOS POCITOS
  {
    id: 'pocitos-como-llegar',
    location: 'Los Pocitos',
    title: 'Cómo llegar',
    description: 'Los Pocitos, es otro de los diversos atractivos que la costa atlántica del Partido de Patagones tiene para ofrecer. Situado a unos a 80 Km de Carmen de Patagones, el acceso al balneario se logra por Ruta Nacional Nº 3, y luego de transitar a través del mismo camino de ripio que llega hasta Bahía San Blas (destino que se encuentra a unos 20 Km del poblado). Otro punto de el acceso que se encuentra es por el ingreso a la rotonda de la localidad de Stroeder en el km. 881.',
    category: 'Cómo Llegar'
  },

  // VILLA TURÍSTICA 7 DE MARZO
  {
    id: 'villa7-consejos',
    location: 'Villa Turística 7 de Marzo',
    title: 'Accesos y recomendaciones',
    description: '• Los 35 kilómetros existentes entre Carmen de Patagones y la localidad es camino consolidado. Circule a velocidad moderada respetando las señales viales.\n• La villa no cuenta con estaciones de servicio ni dispone de cajero automático, por lo que se recomienda ir abastecido.\n• Practique la pesca deportiva en los sitios indicados a tal fin y no utilice trasmallo.\n• Respete siempre las indicaciones del servicio de Guardavidas.\n• Por favor, recuerde llevarse sus residuos para conservar las playas limpias.',
    category: 'Consejos de Viaje'
  },

  // STROEDER
  {
    id: 'stroeder-como-llegar',
    location: 'Stroeder',
    title: 'Cómo llegar',
    description: 'Stroeder se encuentra en el Partido de Patagones, a aproximadamente 80 km al norte de Carmen de Patagones y a 2 km de la Ruta Nacional N.º 3.\n\nDesde Carmen de Patagones, se accede por Ruta Nacional N.º 3 en dirección norte hasta el ingreso a la localidad. Desde el norte de la provincia de Buenos Aires, se llega por la misma ruta en dirección sur.',
    category: 'Cómo Llegar'
  },

  // VILLALONGA
  {
    id: 'villalonga-como-llegar',
    location: 'Villalonga',
    title: 'Cómo llegar',
    description: 'Villalonga se encuentra en el centro del Partido de Patagones, entre las localidades de Juan A. Pradere y Stroeder. Se accede principalmente por Ruta Nacional N.º 3, conectando con Carmen de Patagones, Bahía Blanca y otras localidades de la región.',
    category: 'Cómo Llegar'
  },

  // SALINA DE PIEDRAS
  {
    id: 'salina-como-llegar',
    location: 'Salina de Piedras',
    title: 'Cómo llegar',
    description: 'La Salina de Piedras se encuentra en el Partido de Patagones, a 12 km de Cardenal Cagliero, costeando la vía del ferrocarril.\n\nSe accede desde la zona de Cardenal Cagliero, por camino rural.',
    category: 'Cómo Llegar'
  },
  {
    id: 'salina-consejos',
    location: 'Salina de Piedras',
    title: 'Recomendaciones',
    description: 'Se recomienda consultar previamente el estado del camino y las condiciones de ingreso.',
    category: 'Consejos de Viaje'
  }
];

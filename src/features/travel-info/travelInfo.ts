export type TravelInfo = {
  id: string;
  location: string;
  title: string;
  description: string;
  category: string;
};

export const travelInfo: TravelInfo[] = [
  // CARMEN DE PATAGONES
  {
    id: 'cdp-donde-comer',
    location: 'Carmen de Patagones',
    title: '¿Dónde comer?',
    description: 'RESTAURANTES\n• RESTAURANTE Y PARRILLA REGGIANI – Bynon 422. – Tel: 2920 461065\n• RESTAURANTE Y PARRILLA CLÁSICO PATAGÓNICO – Comodoro Rivadavia 310\n• RESTAURANTE “VERONA” – Dr. Baraja 328. – Tel: 2920 1530487\n• CONFITERIA Y RESTAURANT CLUB HOUSE. Club de Golf (Cerro de la Caballada) Tel: 2920607529\n• PIANTAO RESTÓ – Esq. Comodoro Rivadavia y España. – Tel: 15291012\n• LA CASONA – Harosteguy 137. – Tel: 15472537\n\nCAFETERÍAS\n• CONFITERIA CLUB DE GOLF LA «COMARCA» – Acceso Doña Cata Villarino. – Tel: 15607532\n• CONFITERÍA FIORE – J.J Biedma 18.\n• CAFÉ GREEN – Olivera 55. -Tel: 15302039\n\nPIZZERÍAS\n• PIZZERÍA SAN MARZANO – 25 de Mayo 344. – Tel: 15362009\n• PIZZERÍA BARROCO – Irigoyen 60. – Tel: 15287387\n\nRESTO BAR\n• HAMBURGUESERIA TEHOA – Suipacha 71. – Tel: 2920271149\n• HOMOSAPIENS – Bvd. Moreno y San Martín .- Tel: 15417631\n• SIN EL MAPA – Bynon y Harosteguy. – Tel:15621627\n• GEN 369 – Dr. Baraja 318.- Tel: 15410586\n• PARADOR NAÚTICO – Av. Costanera – Tel: 15515161\n\nFOOD TRUCKS\n• LA COMARCA – Tel: 15288842\n• SABORES AL RUEDO – 1º bajada – Tel: 15607228\n• LAS TINAS – Plaza Villarino -Tel: 15404878\n• CARRITO LULU – Plaza Villarino -Tel: 15464771\n• MR. LOMMO – C. Rivadavia e Irigoyen – Tel: 15577200\n• FRESCO Y NATURAL – Náutico Piedra Buena – Tel: 15265138\n• PIZZA MADRE – Mitre 347 – Tel: 15209706\n• ENTRE PUENTES FOOD TRUCK – POCREAR – J. Newberry- Tel: 15593766\n• ADONAI CASERITOS – Juan de la Piedra 88 – Tel: 15206987\n• EL ENCUENTRO – Francisco de Viedma (Escuela de Canotaje) – Tel: 15344311\n• PIEDAS CLEMETINA – Francisco de Viedma – Tel: 15484511\n• COSTUMBRES ARGENTINAS – Francisco de Viedma 51 – Tel: 15515956\n• ROMA\'S FOOD TRUCK – Puente Ferrocarretero – Tel: 15205337\n• EL CAPITAN – San Lorenzo 88. – Tel: 15413034\n• CHEERS – Francisco de Viedma 13 – Tel: 2920484585\n• LO DE MARQUITO – Juan de la Piedra 88 -Tel: 15552130\n\nROTISERÍAS\n• GRACIELA – M. Fagnano y España – Tel: 2920 463944\n• UNICOOP– España 203. Tel: 2920 461303\n• CAMPOLLO – Zambonini y San Lorenzo – Tel: 2920 216133\n• DALUCA – Irigoyen e/ Buenos Aires y 25 de Mayo – Tel: 2920 15495610\n• DON VICENTE – Olivera 65 – Tel: 2920 463500\n• VENITE AL HUMO – Bertorello 256\n• EL BAÑADO – Colon 267 – Tel 2920461566\n• IN SITU- San Lorenzo 30 – Tel 2920373073\n• PRONTO + (MÁS) – Irigoyen 554. – Tel: 2920200765\n• IL FRATELLI – Bynon 478 – Tel 2920698111\n• ROTISERÍA UNICOOP – España 143 – Tel: 15461748\n\nHELADERÍAS\n• SEI TU – C. Rivadavia esq. Alsina\n• BAJO CERO – Olivera 31\n• GÉNOVA – Bynon 430\n• HELADERÍA JAUJA – Alsina 80\n• GRIDO – Comodoro Rivadavia 373\n• FIORE – J.J Biedma 18',
    category: 'Gastronomía'
  },
  {
    id: 'cdp-donde-dormir',
    location: 'Carmen de Patagones',
    title: '¿Dónde dormir?',
    description: 'ALOJAMIENTOS\n• CASA CRESPO HOTEL – Mitre 114 - Tel: (02920) 15321258\n• HOTEL REGGIANI - Bynon 422 – Tel: 2920 – 461065 / 15518638\n• APART MARAGATO - Italia 486. - Tel: 2920629283\n• COMPLEJO PATAGONIA - 25 de mayo 233. - Tel: 2920 15446987\n• ARMONY - Paulino Rojas 62. - Tel: 2920 15417863',
    category: 'Alojamiento'
  },
  {
    id: 'cdp-comercios',
    location: 'Carmen de Patagones',
    title: 'Comercios y Servicios Útiles',
    description: 'SUPERMERCADOS\n• UNICOOP – España 143. – Tel: 461748\n• LA ÁNONIMA – San Lorenzo 59. – Tel: 463840 / Av. J. Domingo Perón 280. – Tel: 461747\n\nESTACIONES DE SERVICIOS\n• AXION SERVICENTRO DEL CARMEN – Comodoro Rivadavia 315. – Tel: 461660\n• PUMA – Juan de la Piedra y Dr. Baraja 19.\n• YPF SERVICLUB (GNC) – Bernal e H. Irigoyen\n\nGOMERÍAS\n• GOMERÍA ANDRÉS CONTRERAS – Celedonio Miguel 274. – Tel: 15213888\n• GOMERIA GH – Av. Juan Domingo Perón 402. – Tel: 15615205\n• NEUMÁTICOS CAMPISI – J. Lavalle 436. – Tel: 465497\n\nBANCOS\n• NACIÓN ARGENTINA (RED LINK) – Paraguay 2. – Tel: 461075 / 461756\n• PROVINCIA DE BS AS (Sistema BAPRO) – Alsina 50.- Tel: 461070 / 462626\n• PATAGONIA (BANELCO) – Calles Bynon y Arozteguy.\n\nTAXI\n• TAXI CAR – Dr. Baraja 360 – Tel: 463250 / 461322\n• TAXI PATAGONES – Comodoro Rivadavia 229 – Tel: 462111 / 464000\n• TAXI 7 DE MARZO – Irigoyen 46 – Tel: 463580/463080\n\nTRANSFERS Y TRANSPORTE\n• EJE SUR Mini bus – Tel: 15489579\n• AVIS Y ANDES RENT A CAR – Tel: 15662956\n• BOOM TURISMO Mini bus – Tel: 15696806\n• VIEDMA TRANSFER – Tel: 15477214\n• TRANSPORTE MUNICIPAL (SAN BLAS) – Terminal de ómnibus, Antonio Barbieri 165.\n\nAGENCIAS DE VIAJES Y TURISMO\n• ENTRE PUENTES VIAJES – Tel: 15356518\n• CUM LAUDE – VIAJES – España 32 - Tel: 15365857\n• ESTACIÓN UNO VIAJES – C. Rivadavia 378 - Tel: 15366682\n• AGENCIA PRIMERA ESCALA – Esq. Suipacha y 25 de Mayo - Tel: 15327688\n\nPRODUCTOS REGIONALES\n• MARROQUINERÍA «CASCO VIEJO» – Comodoro Rivadavia 238. – Tel: 463353\n• CASA «CEVARAZ» – Comodoro Rivadavia 235 – Tel: 15639085\n• NAKEL REGIONALES – DR. Baraja 289 – Tel: 15662023',
    category: 'Comercios y Servicios'
  },
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

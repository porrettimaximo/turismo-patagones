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
    id: 'bsb-donde-dormir',
    location: 'Bahía San Blas',
    title: '¿Dónde dormir?',
    description: 'DEPARTAMENTOS\n• BERNAL – Calle 31, entre calle 2 y 3. – Tel: 1137589327\n• CARRANZA – Calle 33, entre Av. Costanera y calle 2 – Tel: 2920-327528\n• CLAUDIA – Av. Boulevard 29 entre Av. Cmte. Luis Piedrabuena y calle 2. – Tel: 2920 – 499238 / 02920 645487 (solo llamadas)\n• COMPLEJO DE LA COSTA – Av. Cmte. Luis Piedrabuena y Boulevard 29. – Tel: 2920-446502\n• COMPLEJO EL PARAISO – Calle 27 entre Av. Cmte. Luis Piedrabuena y calle 2. Tel: 2920-559346\n• J.LAI DEPARTAMENTOS – Calle 2 entre calle 28 y Boulevard 29. – Tel: 2920-329417\n• COMPLEJO DON OSVALDO – Calle 6 y calle 28. – Tel: 2920- 531405\n• COMPLEJO SAN ADOLFO – Calle 2 entre calles 31 y 33. – Tel: 2920- 575460\n• COMPLEJO SAN FRANCISCO – Av. Luis Piedrabuena entre calle 33 y Malek. – Tel: 2920-576732 / 011-33355218\n• COMPLEJO BAHIA SAN BLAS – Malek entre calles 4 y 5. – Tel: 2920-645394 / 2920-644907\n• COSTANERA UNO – Av. Cmte. Luis Piedrabuena norte a 300 mts de calle 26. – Tel: 2920-531405\n• DEPARTAMENTOS CHIVILCO – Calle 4 esquina calle 27. – Tel: 2346-553258\n• DEPARTAMENTOS ETMAN – Calle 28 entre Av. Cmte. Luis Piedrabuena y calle 2. -Tel: 2920-534311\n• DEPARTAMENTOS JOSE – Pasaje Stella Maris entre Av. Cmte. Luis Piedrabuena y calle 2. – Tel: 2920- 608740 / 2920-523519\n• MAREAS DE LA BAHIA – Calle 2 entre Malek y calle 37. – Tel: 299-5274403\n• COMPLEJO MARCELO – Pasaje Stella Maris y Boulevard 39. – Tel: 291-5766959\n• DEPARTAMENTOS NELLY – Malek esquina calle 6. – Tel: 291-4274885\n• DEPARTAMENTOS PUEBLO VIEJO – Islas Malvinas esquina calle 30. – Tel: 2920-578617\n• DEPARTAMENTOS RULY – Av. Cmte. Luis Piedrabuena entre calle 37 y Boulevard 39. – Tel: 2920-533299\n• DEPARTAMENTOS VICTORIA – Calle 6 y calle 28. Tel: 2920-577424 / 2920-570428\n• EL RAFA – Av. Cmte. Luis Piedrabuena esquina calle 31. – Tel: 2920-581966 / 2920-558223\n• EL VIEJO Y EL MAR – Calle 27 entre Av. Cmte. Luis Piedrabuena y calle 2. -Tel: 2920- 509227\n• LOS ABUELOS – Calle 4 entre calles 30 y 31. Tel: 2920-586888\n• MAR AZUL – Av. Cmte. Luis Piedrabuena entre calle 37 y Boulevard 39. – Tel: 2920- 575416\n• MIKE – Av. Cmte. Luis Piedrabuena casi esquina Boulevard 39. – Tel: 2920-578227\n• MONACO – Calle 37 entre Av. Luis Piedrabuena y calle 2. – Tel: 2920- 529026 / 2920-362351\n• PARADOR GALLO – Calle 28 esquina calle 2. – Tel: 2920-499226 / 2920-323830\n• PARAISO DEL PESCADOR – Islas Malvinas, Esq. Boulevard 29. – Tel: 2920-385610\n• PEDRO LIER – Malek entre Av. Cmte. Luis Piedrabuena y calle 2. – Tel: 2920-323102\n• PUNTA RUBIA – Calle 2 entre Malek y calle 37. – Tel: 2920-361861\n• VILLA GARCIA – Calle 5 entre calles 34 y 33. – Tel: 2920-499217 / 2920-572636\n• DEPARTEMENTOS MOLTENI – Calle 2 entre Calle 30 y Boulevard 29. – Tel: 2920-557284\n• PUERTAS DEL SOL – Ubicado frente al mar. – Tel: 2920-574277\n\nCABAÑAS\n• CABAÑAS SAN BLAS – Calle 2 esquina calle 28. – Tel: 2920-555530\n• CABAÑAS DEL OLIVO – Malek entre Av. Cmte. Luis Piedrabuena y calle 2. Tel: 2920-524213\n• CABAÑAS DEL PESCADOR – Av. Cmte. Luis Piedrabuena entre Malek y calle 37. – Tel: 2920-657791 / 2920-499228\n• CABAÑAS EL AMANECER – Calle 3 entre calles 27 y 28. – Tel: 2920-648438\n• CABAÑAS EL LOCO – Calle 5 esquina calle 28. – Tel: 2920-323633\n• CABAÑAS LA SOÑADA – Calle 37 entre Av. Cmte. Luis Piedrabuena y calle 2. – Tel: 291- 5077554\n• CABAÑAS LOS RANCHOS – Av. Boulevard 29 entre calles 5 y 6. Tel: 11-44122421 / 11-44127305\n• CABAÑAS MILITO – Calle 5 entre 36 y Malek. – Tel: 11-59045806 / 11-32364749\n• CABAÑAS OSCAR – Av. Cmte. Luis Piedrabuena esquina Boulevard 39. – Tel: 2920-640401\n• CABAÑAS PAMPA – Calle 2 esquina calle 31. – Tel: 2920-327528\n• CABAÑAS SANTA CRUZ – Boulevard 29 entre calles 5 y 6. – Tel: 2920-370647 / 2920-245225\n• DERO – Av. 29 esquina calle 5. – Tel: 2920-577633\n• DOS MOLINOS – Calle 2 y Malek. Tel: 11-41439376 / 11-63814043\n• LA CASONA DEL PESCADOR – Av. Cmte. Luis Piedrabuena y calle 27. Tel: 2920-587163\n• LA HUELLA – Malek entre calles 4 y 5. – Tel: 2920-663609 / 655741\n• PIONEROS – Malek entre calles 4 y 5. – Tel: 2920-641264\n• POSADAS KITTI – Calle 33 entre Av. Cmte. Luis Piedrabuena y calle 2. Tel: 2920-574989\n• GUIJARRO – Av. Cmte. Luis Piedrabuena N° 620. – Tel: 2920-574277\n• MALVINAS ARGENTINAS – Calle 2 entre calles 31 y 33. Tel: 291-4703694\n\nCAMPINGS\n• CAMPING Nº1 – Calle 37 entre calles 2 y Av. Cmte. Luis Piedra Buena. – Tel: 2920-567348\n• CAMPING EL CHOIQUE – Calle 4 y Boulevard 29. – Tel: 291-4123272\n• CAMPING DON ANTONIO – Calle 2, entre Malek y calle 37. – Tel: 2920-647472',
    category: 'Alojamiento'
  },
  {
    id: 'bsb-donde-comer',
    location: 'Bahía San Blas',
    title: '¿Dónde comer?',
    description: 'RESTAURANTES / CONFITERÍAS / FOOD TRUCKS\n• MERAKI - Calle 2 esquina 27. - Tel: 223-5434968\n• HOSTEL JORGE NEWBERY - Av. Cmte. Luis Piedrabuena e/35 y 37. – Tel: 291-4711457\n• ROTISERÍA DON PEPE - Calle 2 entre calles 30 y 31. – Tel: 2920-588567 / 641516\n• RESTAURANTE RANCHO GRANDE - Calle 37 entre Doufor y thawaites. Para reservas dirigirse al lugar.\n• EL MAR - Av. Cmte. Luis Piedrabuena esquina calle 33. – Tel: 291-4299363\n• CHANSA FOOD TRUCK - Av. Cmte. Luis Piedrabuena esquina calle 39. – Tel: 2920-327521\n• EL CONTAINER FOOD TRACK - Av. Costanera Luis Piedra Buena entre calles 31 y 33. - Tel: 2920-360941\n\nHELADERÍAS\n• COSTANERA - Av. Cmte. Luis Piedrabuena entre calle 33 y Malek. - Tel: 2920-354772\n• JOTAYGE - Calle 37 esquina Pasaje Stella Maris. - Tel: 2920 56-9735',
    category: 'Gastronomía'
  },
  {
    id: 'bsb-comercios',
    location: 'Bahía San Blas',
    title: 'Comercios y Servicios Útiles',
    description: 'OFICINAS DE PESCA\n• CARLOTO – Calle 28, esquina calle 5. – Tel: 2920-385713.\n• CARRANZA – Calle 33, entre Av. Cmte. Luis Piedrabuena y calle 2. – Tel: 2920-327528.\n• EL PINGÜINO – Av. Cmte. Luis Piedrabuena y calle 27. – Tel: 2920-372787.\n\nCASAS DE ARTICULOS DE PESCA\n• EL CORVINERO – Cmte. Luis Piedrabuena entre calle 35 y calle 37. – Tel: 2920 – 596278.\n• KELLER – Av. Cmte. Luis Piedrabuena, entre calles 27 y 28.- Tel: 2920-327008 / 2920-557348\n• MAR AZUL – Cmte. Luis Piedrabuena, entre calles 37 y Boulevard 39. – Tel: 2920-575416.\n• ΜΙΚΕ – Islas Malvinas entre calle 40 y 41. – Tel: 2920-578227.\n• PUERTO VICTORIA – Av. Cmte. Luis Piedrabuena, entre calles 27 y 28. – Tel: 2920-577424.\n• TIBURÓN y TIBURON II (CARNADA) – Av. Cmte. Luis Piedrabuena, entre calles 31 y 33. – Tel: 2920-321724.\n• FILETERAS DERÓ – Avenida 29, esquina calle 5. – Tel: 2920-576333.\n• LAS CHICAS – Islas Malvinas, entre calles 39 y 40. – Tel: 2920-385658.\n• ESTACION DE SERVICIO AXION – Calle 27 esquina calle 4. – Tel: 2920-499410\n\nAUTOSERVICIOS / ALMACÉN\n• AUTOSERVICIO EL GORDO – Av. Costanera, entre calle 30 Y 31.\n• AUTOSERVICIO CACHO – Cmte. Luis Piedrabuena, entre calles 33 y Malek. – Tel: 2920-569302.\n• AUTOSERVICIO NONY – Av. Cmte. Luis Piedrabuena, esquina calle 33.\n• LA BAHÍA – Av. Cmte. Luis Piedrabuena y calle 31. – Tel: 2920-641058 / 2920-364916.\n• SUPER SAN BLAS – Calle 4, esquina calle 27. -Tel: 2920-360298.\n• VERDULERIA EL PARAÍSO – Av. Cmte. Luis Piedrabuena, entre calle 37 y Boulevard 39. – Tel: 291-5728165.\n• LA POLLERÍA – Av. 29 entre calles 2 y 3.\n• POLLERÍA LA ESPECIAL – Correa Morales s/n, entre Betbeder y Oliva. – Tel: 291-5707235.\n• KIOSCO CUCHY – Av. Cmte. Luis Piedrabuena, esquina Boulevard 29. – Tel: 291-4702964.\n• PANADERÍA SAN SEBASTÍAN – Calle 2, esquina calle 31.- Tel: 2920-360107.\n• PANADERÍA LA FAMILIA – Av. Cmte. Luis Piedrabuena, entre calles 31 y 33. – Tel: 2920-365008.\n• TIBU (FABRICA HIELO) – Entre alle 2 y calle 28 Calle. – Tel: 2920-321724.\n• GOMERÍA RIKY – Esquina calle 27 esquina calle 4. – Tel: 2920-499447\n• SHARK MOMENTROS DULCES – Calle 2, entre calle 27 y calle 28. – Tel: 2920-321504.\n• SHARK MOMENTOS DULCES (SUCURSAL) – Av. Cmte. Luis Piedrabuena, entre calle 35 (Malek) y 37. – Tel: 2920-321504.\n• NATIVO – Av. Cmte. Luis Piedrabuena, entre calles 35 y 33.\n• PIZZERíA MW – Saenz Valiente Nº 848. – Tel: 2920-360845.\n• PARADOR BARBA NEGRA – Av. Costanera S/N (al termina el asfalto a 800 mts. del lado del mar). – Tel: 2920-578973.\n\nCORRALONES / ABERTURAS\n• LAS TRANQUERAS – Calderón, entre Islas Malvinas y Oliva.\n• CORRALON TABARES – Islas Malvinas y Malek.\n• F&F ABERTURAS DE ALUMINIO Y VIDRIERIA – Calle 6, entre 39 y 40. – Tel: 2920-662785.\n• R&R RESPUESTO AUTOMOTOR – Calle 3, entre calles 28 y Boulevard 29. – Tel: 2920-373979.\n• FORRAJERÍA EL PARAISO – Calle 3, entre calles 28 y 29. – Tel: 2920-569512.\n• BULONES FABIO – Calle Oliva, entre Av. 29 y calle 30. – Tel: 2920-362427.\n\nINDUMENTARÍA / FARMACIAS\n• BELLA CATALINA – Cmte. Luis Piedrabuena, entre calles 33 y Malek. – Tel: 2920-323749.\n• MERCERÍA “LA RUSA” – Malek y Dufour. – Tel: 2920-530901.\n• EL MAR Y TU – Calle 33 entre calle 32 y Cmte. Luis Pierda Buena.\n• LA PATA LOCA – Calle 3, entre Av. 29 y calle 28.\n• FARMACIA “LA HUENCO” – Av. Cmte. Luis Piedrabuena entre calles 33 y Malek. – Tel: 2920-582866.',
    category: 'Comercios y Servicios'
  },
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
    id: 'pocitos-donde-dormir',
    location: 'Los Pocitos',
    title: '¿Dónde dormir?',
    description: 'COMPLEJO LAS OSTRAS – Juan Ingelmo, entre las calles Los Caracoles y Los Delfines.\n• Tel: (011) 1561824552\n• E-mail: complejolasostras@hotmail.com\n\nEl Complejo Las Ostras ofrece departamentos de alquiler temporario para 2, 4 y hasta 12 personas totalmente equipados con ropa de cama, vajilla, freezer, tv satelital, aire acondicionado frio-calor, quincho con parrillas individuales, estacionamiento techado, mini pool, metegol, plaza de niños.',
    category: 'Alojamiento'
  },
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

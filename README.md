# Documentacion General del Proyecto: Turismo Patagones

## 1. Vision del Producto y Experiencia de Usuario (UX)

La aplicacion Turismo Patagones fue concebida con el objetivo de modernizar la presencia digital del destino, transformando una web institucional tradicional en una experiencia inmersiva y de vanguardia (App-like experience).

### Pilares de la Experiencia (UX/UI)
- **Mobile-First & PWA:** Disenada prioritariamente para celulares. Al usar vite-plugin-pwa, la pagina web puede ser instalada directamente en la pantalla de inicio del telefono del turista, funcionando de manera offline en ciertos aspectos y ofreciendo un acceso rapido sin pasar por la tienda de aplicaciones.
- **Inmersion Visual (Vertical Slide):** Inspirada en plataformas de contenido modernas, la pantalla de inicio utiliza un desplazamiento vertical (Swiper) a pantalla completa. Esto captura la atencion del usuario inmediatamente, presentandole paisajes y videos de fondo que emocionan e invitan a explorar.
- **Estetica Patrimonial y Calida:** Se emplea una paleta de colores cuidadosamente seleccionada (color primary y oscuros azulados, combinados con blancos calidos y naranjas) para transmitir historia, patagonia y naturaleza. Las tarjetas (cards) utilizan efectos de vidrio (glassmorphism) sutiles y bordes redondeados.
- **Microinteracciones y Animaciones:** Se implementaron transiciones suaves al desplegar acordeones, hacer hover en botones (brillos celestes, aumento de tamaño) usando Framer Motion y utilidades de Tailwind, logrando que el sitio se sienta dinamico y responda a las acciones del usuario.
- **Accesibilidad y Claridad:** Uso intensivo de acordeones cerrados por defecto para que la informacion (rutas, como llegar, recomendaciones) no abrume visualmente, pero este a un toque de distancia.

---

## 2. Stack Tecnologico y Librerias

El ecosistema de desarrollo fue elegido priorizando velocidad, peso ligero y modularidad.

### Base del Proyecto
- **React 19:** Biblioteca principal para construir las interfaces de usuario de forma declarativa mediante componentes.
- **TypeScript:** Agrega tipado estatico, reduciendo errores en tiempo de ejecucion y mejorando la autocompletacion y mantenibilidad del codigo.
- **Vite (v8):** Empaquetador y servidor de desarrollo extremadamente rapido enfocado en un inicio casi instantaneo del entorno de trabajo.

### Diseño y Estilos
- **Tailwind CSS (v4):** Framework de utilidades CSS integrado directamente en el compilador de Vite. Permite construir la interfaz de manera agil sin salir del archivo TSX.
- **Lucide React:** Biblioteca de iconos limpios, ligeros y escalables en formato SVG.
- **Framer Motion:** Manejo de animaciones complejas (como la aparicion progresiva de textos en la home y los modales).
- **Swiper:** El motor detras del carrusel vertical (Vertical Slide) a pantalla completa de la pantalla de inicio.
- **React PDF:** Renderizado nativo de documentos PDF (planos y mapas) directamente en canvas, evitando el uso de iframes inconsistentes.

### Geolocalizacion y Mapas
- **Leaflet & React Leaflet (v5):** Libreria de JavaScript de codigo abierto para mapas interactivos compatibles con dispositivos moviles, adaptado a componentes React para renderizar coordenadas y puntos de interes del municipio.

### Enrutamiento y PWA
- **React Router DOM (v7):** Maneja la navegacion sin recargar la pagina (Single Page Application - SPA), permitiendo transiciones instantaneas entre las diferentes vistas de la app.
- **vite-plugin-pwa:** Configura el Service Worker de manera automatica, permitiendo cachear archivos, lograr tiempos de carga infimos y ofrecer el prompt de instalacion local.

### Analisis de Codigo (Linter)
- **Oxlint:** Un analizador de codigo estatico (linter) ultra veloz escrito en Rust, que ayuda a mantener la consistencia del codigo sin sobrecargar el flujo de trabajo de desarrollo.

---

## 3. Arquitectura del Codigo (Feature-Sliced Design)

Para asegurar que el proyecto sea altamente escalable en el futuro, se adopto una arquitectura por cortes verticales (Vertical Slicing), enfocando la organizacion en torno a las caracteristicas del negocio y no en la tipologia de los archivos.

Toda la aplicacion se divide en la carpeta src, que contiene:

- **features/**: Cada carpeta representa una funcionalidad o seccion independiente de la app. Contienen su propia pantalla, sus datos y utilidades para funcionar de forma aislada.
  - `home/`: Logica del Vertical Slider y portada interactiva.
  - `destinations/`: Pantallas de cada localidad (Bahia San Blas, Stroeder, Carmen de Patagones, Los Pocitos, etc.) y la base de datos de los mismos.
  - `activities/`: Pestaña "¿Que hacer?" y sus datos correspondientes.
  - `travel-info/`: Informacion de como llegar, terminales y recomendaciones.
  - `downloads/`: Archivos para folleteria.
  - `contact/`: Vias de comunicacion.
- **shared/**: El nucleo comun. Componentes y utilidades que se usan en mas de una feature.
  - `layout/`: El Layout maestro, el Navbar superior, menus hamburguesa y el banner de descarga.
  - `components/ui/`: Botones, modales universales (como el FolleteriaModal).
- **app/**: Configuracion de inicializacion, enrutador (router.tsx) e index.css.

---

## 4. Funcionalidades Principales

### Exploracion Inmersiva (Home)
Un slider vertical que repasa los atractivos generales (Naturaleza, Patrimonio, Descanso) sin que el usuario deba navegar menus tradicionales inmediatamente.

### Menu Rapido y Buscador Automatico
Debajo del buscador, existen botones de acceso rapido. Al usarlos, la app te lleva a la seccion correcta y expande el acordeon correspondiente de forma automatica, ahorrando clics en el dispositivo.

### Acordeones Dinamicos
La informacion de "Que Hacer" e "Info de Viaje" esta colapsada por defecto para limpiar la pantalla. Se abre de manera dinamica segun las interacciones o consultas del usuario.

### Visor de Folletería y Planos PDF Nativo
Un modal dedicado (`FolleteriaModal`) que permite ver imágenes y flyers de actividades directamente dentro de la app con flechas de navegación. En lugar de forzar la descarga de archivos PDF o depender de iframes inconsistentes, la app utiliza **react-pdf** para renderizar los mapas y planos directamente en pantalla página por página, garantizando que todos los dispositivos móviles (Android/iOS) los visualicen sin salir de la plataforma.

### Pantalla Dedicada de Instalación (PWA)
En lugar de depender de banners invasivos, la aplicación cuenta con una ruta y pantalla dedicada (`/descargar-app`) accesible desde el menú principal. Esta pantalla no solo detalla los beneficios de instalar la App (Rápida, Offline, Siempre a mano), sino que además implementa una lógica inteligente:
- Si el usuario accede desde **Android o PC**, se le presenta un botón que dispara el prompt nativo de instalación.
- Si accede desde **iOS (iPhone/iPad)**, se le muestran instrucciones visuales personalizadas para agregar la web a la pantalla de inicio usando Safari.

---

## 5. Requisitos Previos

Asegurate de tener instalado Node.js (version recomendada 20 o superior) en tu sistema operativo antes de proceder con el despliegue.

## 6. Instalacion y Uso Local

Sigue estos pasos para ejecutar el proyecto en tu entorno de desarrollo local:

1. Navegar a la carpeta raiz del proyecto en tu terminal.
2. Instalar las dependencias del proyecto:
   ```bash
   npm install
   ```
3. Iniciar el servidor de desarrollo local:
   ```bash
   npm run dev
   ```
   La aplicacion estara disponible tipicamente en `http://localhost:5173`.

## 7. Build de Produccion

Para generar una version optimizada para produccion:

1. Crear el build:
   ```bash
   npm run build
   ```
2. Previsualizar el build de produccion localmente:
   ```bash
   npm run preview
   ```

## 8. Scripts Disponibles

- `npm run dev`: Inicia el servidor de desarrollo con Hot Module Replacement (HMR).
- `npm run build`: Compila TypeScript y construye la aplicacion para produccion generando assets estaticos en la carpeta dist.
- `npm run preview`: Sirve la carpeta dist localmente para probar el build final de produccion.
- `npm run lint`: Ejecuta Oxlint para analizar el codigo rapidamente en busca de problemas potenciales.

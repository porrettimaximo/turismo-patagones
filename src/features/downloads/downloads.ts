export type TourismDownload = {
  id: string;
  title: string;
  description: string;
  category: 'plano' | 'guia' | 'circuito' | 'servicios';
  url: string;
  fileName: string;
  isExternal: boolean;
};

export const tourismDownloads: TourismDownload[] = [
  {
    id: 'guia-servicios',
    title: 'Guía de Servicios Oficial 2023',
    description: 'Alojamientos, gastronomía y servicios útiles en Carmen de Patagones.',
    category: 'servicios',
    url: 'https://turismo.patagones.gob.ar/folleteria/folleteria%20Carmen%20de%20Patagones/GU%C3%8DA%20DE%20SERVICIOS%20OFICIAL%20-%20CARMEN%20DE%20PATAGONES%202023.pdf',
    fileName: 'guia-de-servicios.pdf',
    isExternal: true,
  }
];

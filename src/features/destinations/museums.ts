export type Museum = {
  id: string;
  name: string;
  description: string;
  address: string;
  schedule: string;
  entryFee: string;
  phone: string;
  mapUrl?: string;
};

export const museums: Museum[] = [
  {
    id: 'museo-emma-nozzi',
    name: 'Museo Histórico Regional Emma Nozzi',
    description: 'Guarda la historia de la región patagónica y de Carmen de Patagones desde sus orígenes. Sede central en la antigua sucursal del Banco de la Provincia de Buenos Aires.',
    address: 'J.J. Biedma 64, Carmen de Patagones',
    schedule: 'Lunes a Viernes de 10:00 a 12:00 hs', // TODO: verificar fuente oficial
    entryFee: 'Gratuita',
    phone: '+54 2920 46-2729'
  },
  {
    id: 'museo-prefectura',
    name: 'Museo de Prefectura Naval Argentina',
    description: 'Historia naval y de la prefectura en la Patagonia.',
    address: 'Costanera, Carmen de Patagones',
    schedule: 'Consultar horarios locales', // TODO: verificar fuente oficial
    entryFee: 'Gratuita',
    phone: 'No disponible'
  }
];

import { createBrowserRouter } from 'react-router-dom';
import Layout from '../shared/layout/Layout';
import HomePage from '../features/home/HomePage';
import DestinationsPage from '../features/destinations/DestinationsPage';
import CarmenDePatagonesPage from '../features/destinations/CarmenDePatagonesPage';
import BahiaSanBlasPage from '../features/destinations/BahiaSanBlasPage';
import LosPocitosPage from '../features/destinations/LosPocitosPage';
import StroederPage from '../features/destinations/StroederPage';
import SalinaDePiedrasPage from '../features/destinations/SalinaDePiedrasPage';
import Villa7DeMarzoPage from '../features/destinations/Villa7DeMarzoPage';
import VillalongaPage from '../features/destinations/VillalongaPage';
import QueHacerPage from '../features/activities/QueHacerPage';
import TravelInfoPage from '../features/travel-info/TravelInfoPage';
import ContactoPage from '../features/contact/ContactoPage';
import AppDownloadPage from '../features/app-download/AppDownloadPage';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: 'destinos',
        element: <DestinationsPage />,
      },
      {
        path: 'destinos/carmen-de-patagones',
        element: <CarmenDePatagonesPage />,
      },
      {
        path: 'destinos/bahia-san-blas',
        element: <BahiaSanBlasPage />,
      },
      {
        path: 'destinos/los-pocitos',
        element: <LosPocitosPage />,
      },
      {
        path: 'destinos/stroeder',
        element: <StroederPage />,
      },
      {
        path: 'destinos/salina-de-piedras',
        element: <SalinaDePiedrasPage />,
      },
      {
        path: 'destinos/villa-7-de-marzo',
        element: <Villa7DeMarzoPage />,
      },
      {
        path: 'destinos/villalonga',
        element: <VillalongaPage />,
      },
      {
        path: 'que-hacer',
        element: <QueHacerPage />,
      },
      {
        path: 'info-viaje',
        element: <TravelInfoPage />,
      },
      {
        path: 'servicios',
        element: <div className="p-8 text-center"><h1 className="text-2xl font-bold">Servicios (Próximamente)</h1></div>,
      },
      {
        path: 'itinerarios',
        element: <div className="p-8 text-center"><h1 className="text-2xl font-bold">Recorridos (Próximamente)</h1></div>,
      },
      {
        path: 'contacto',
        element: <ContactoPage />,
      },
      {
        path: 'descargar-app',
        element: <AppDownloadPage />,
      }
    ],
  },
]);

import { MapPin, Phone, Mail, Clock, Info } from 'lucide-react';

export default function ContactoPage() {
  const offices = [
    {
      id: 'bahia-san-blas',
      title: 'Bahía San Blas',
      address: 'Av. Costanera entre calles 35 y 37',
      hours: 'Lunes a viernes de 07:00 a 18:00 Hs. - Sábados, domingos y feriados de 11:00 a 17:00 Hs.',
      phone: '02920-15415753',
      email: 'turismobahiasanblas@yahoo.com.ar',
    },
    {
      id: 'informes-patagones',
      title: 'Oficina Informes Turísticos - C. de Patagones',
      address: 'J.J Biedma S/N',
      hours: 'Lunes a viernes de 7:00 a 18:00 Hs. - Sábados, domingos y feriados de 11:00 a 17:00 Hs.',
      phone: '02920-465406',
      email: 'turismopatagones@gmail.com',
    },
    {
      id: 'direccion-patagones',
      title: 'Dirección de Turismo - C. de Patagones',
      address: 'Mitre 84',
      hours: 'Lunes a viernes de 7:00 a 13:00 Hs.',
      phone: '02920-464819',
      email: 'turismopatagones@gmail.com',
    },
    {
      id: 'los-pocitos',
      title: 'Balneario Los Pocitos',
      address: 'Zona de acampe con fogones.',
      hours: '',
      phone: '',
      email: 'turismolospocitos@gmail.com',
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-8 md:py-12">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-10 md:mb-16">
        <h1 className="text-3xl md:text-5xl font-bold text-[var(--color-primary)] mb-4 md:mb-6">Contactos</h1>
        <p className="text-base md:text-lg text-neutral-600 leading-relaxed mb-6">
          La Dirección de Turismo Municipal cuenta con un área técnica emplazada en pleno poblado histórico de Carmen de Patagones y dos oficinas de información turística. En ellas se encuentra todo el material e información disponible para evacuar cualquier tipo de dudas respecto a los servicios, atractivos, horarios, tarifas, medios de transporte, alojamiento, entre otros.
        </p>
        <div className="bg-orange-50 border border-orange-100 rounded-2xl p-4 md:p-6 text-left shadow-sm inline-block">
          <div className="flex flex-col sm:flex-row items-start gap-3 md:gap-4">
            <div className="bg-white p-2 md:p-3 rounded-full shadow-sm shrink-0">
              <Info className="w-5 h-5 md:w-6 md:h-6 text-[var(--color-tertiary)]" />
            </div>
            <p className="text-sm text-neutral-700 leading-relaxed">
              Si está planificando su visita a Patagones le recomendamos previamente tomar contacto con nuestros informantes para que puedan asesorarlos efectivamente, asegurando así una mejor experiencia de viaje.<br/><br/>
              <strong>Contingentes o instituciones:</strong> Si desean realizar visitas guiadas por el poblado histórico o charlas de sensibilización turística, deberán remitirse por nota al correo de la Dirección (<a href="mailto:turismopatagones@gmail.com" className="text-[var(--color-primary)] font-semibold hover:underline">turismopatagones@gmail.com</a>).
            </p>
          </div>
        </div>
      </div>

      {/* Offices Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
        {offices.map((office) => (
          <div key={office.id} className="bg-white rounded-2xl p-5 md:p-8 shadow-sm border border-neutral-200 hover:shadow-md transition-shadow">
            <h2 className="text-xl md:text-2xl font-bold text-[var(--color-primary)] mb-4 md:mb-6">{office.title}</h2>
            
            <div className="space-y-4">
              {office.address && (
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-neutral-400 mt-0.5 shrink-0" />
                  <div>
                    <span className="block text-xs font-semibold text-neutral-400 uppercase tracking-wider mb-1">Ubicación</span>
                    <span className="text-neutral-700">{office.address}</span>
                  </div>
                </div>
              )}
              
              {office.hours && (
                <div className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-neutral-400 mt-0.5 shrink-0" />
                  <div>
                    <span className="block text-xs font-semibold text-neutral-400 uppercase tracking-wider mb-1">Horarios</span>
                    <span className="text-neutral-700">{office.hours}</span>
                  </div>
                </div>
              )}

              {office.phone && (
                <div className="flex items-start gap-3">
                  <Phone className="w-5 h-5 text-neutral-400 mt-0.5 shrink-0" />
                  <div>
                    <span className="block text-xs font-semibold text-neutral-400 uppercase tracking-wider mb-1">Teléfono</span>
                    <a href={`tel:${office.phone.replace(/[^0-9+]/g, '')}`} className="text-neutral-700 hover:text-[var(--color-primary)] transition-colors">
                      {office.phone}
                    </a>
                  </div>
                </div>
              )}

              {office.email && (
                <div className="flex items-start gap-3">
                  <Mail className="w-5 h-5 text-neutral-400 mt-0.5 shrink-0" />
                  <div>
                    <span className="block text-xs font-semibold text-neutral-400 uppercase tracking-wider mb-1">Email</span>
                    <a href={`mailto:${office.email}`} className="text-neutral-700 hover:text-[var(--color-primary)] transition-colors break-all">
                      {office.email}
                    </a>
                  </div>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

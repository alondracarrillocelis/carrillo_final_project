import React from 'react';
import { Calculator, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const services = [
    'Costeo de Alimentos y Bebidas',
    'Auditoría Interna',
    'Consultoría Contable Fiscal',
    'Apertura de Negocio'
  ];

  const quickLinks = [
    { name: 'Inicio', href: '#inicio' },
    { name: 'Servicios', href: '#servicios' },
    { name: 'Nosotros', href: '#about' },
    { name: 'Cotización', href: '#cotizacion' },
    { name: 'Contacto', href: '#contacto' }
  ];

  return (
    <footer className="bg-slate-900 border-t border-slate-800">
      <div className="container mx-auto px-6">
        {/* Main footer content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 py-16">
          {/* Company info */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-10 h-10 bg-gradient-to-br from-purple-600 to-purple-800 rounded-lg flex items-center justify-center">
                <Calculator className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">Contaduría Celis</h3>
                <p className="text-xs text-gray-400">Servicios Contables Especializados</p>
              </div>
            </div>
            
            <p className="text-gray-300 mb-6 leading-relaxed">
              Expertos en consultoría contable, auditoría y control financiero. 
              Más de 10 años impulsando el éxito de nuestros clientes.
            </p>
            
            {/* Social media */}
            <div className="flex space-x-4">
              <a
                href="#"
                className="w-10 h-10 bg-slate-800 hover:bg-purple-600 rounded-lg flex items-center justify-center transition-colors duration-300 group"
              >
                <Facebook className="w-5 h-5 text-gray-400 group-hover:text-white" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-slate-800 hover:bg-purple-600 rounded-lg flex items-center justify-center transition-colors duration-300 group"
              >
                <Twitter className="w-5 h-5 text-gray-400 group-hover:text-white" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-slate-800 hover:bg-purple-600 rounded-lg flex items-center justify-center transition-colors duration-300 group"
              >
                <Instagram className="w-5 h-5 text-gray-400 group-hover:text-white" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-slate-800 hover:bg-purple-600 rounded-lg flex items-center justify-center transition-colors duration-300 group"
              >
                <Linkedin className="w-5 h-5 text-gray-400 group-hover:text-white" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-semibold mb-6">Nuestros Servicios</h4>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <a
                    href="#servicios"
                    className="text-gray-300 hover:text-purple-400 transition-colors duration-300 text-sm block"
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="text-white font-semibold mb-6">Enlaces Rápidos</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-300 hover:text-purple-400 transition-colors duration-300 text-sm block"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact info */}
          <div>
            <h4 className="text-white font-semibold mb-6">Contacto</h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <Phone className="w-5 h-5 text-purple-400 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-gray-300 text-sm">+52 (55) 1234-5678</p>
                  <p className="text-gray-500 text-xs">Lun - Vie: 9:00 - 18:00</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <Mail className="w-5 h-5 text-purple-400 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-gray-300 text-sm">contacto@contaduriaceliz.com</p>
                  <p className="text-gray-500 text-xs">Respuesta en 24h</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-purple-400 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-gray-300 text-sm">Ciudad de México</p>
                  <p className="text-gray-500 text-xs">Consultas presenciales</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-slate-800 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-center md:text-left">
              <p className="text-gray-400 text-sm">
                © {currentYear} Contaduría Celis. Todos los derechos reservados.
              </p>
            </div>
            
            <div className="flex flex-wrap justify-center md:justify-end space-x-6">
              <a href="#" className="text-gray-400 hover:text-purple-400 text-sm transition-colors duration-300">
                Política de Privacidad
              </a>
              <a href="#" className="text-gray-400 hover:text-purple-400 text-sm transition-colors duration-300">
                Términos de Servicio
              </a>
              <a href="#" className="text-gray-400 hover:text-purple-400 text-sm transition-colors duration-300">
                Aviso Legal
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
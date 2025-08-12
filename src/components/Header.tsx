import React, { useState, useEffect } from 'react';
import { Menu, X, Calculator, Phone } from 'lucide-react';

interface HeaderProps {
  activeSection: string;
  setActiveSection: (section: string) => void;
}

const Header: React.FC<HeaderProps> = ({ activeSection, setActiveSection }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { id: 'inicio', label: 'Inicio' },
    { id: 'servicios', label: 'Servicios' },
    { id: 'about', label: 'Nosotros' },
    { id: 'cotizacion', label: 'Cotización' },
    { id: 'contacto', label: 'Contacto' }
  ];

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-500 ${
        isScrolled 
          ? 'bg-slate-900/95 backdrop-blur-lg shadow-2xl' 
          : 'bg-transparent'
      }`}
    >
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-br from-purple-600 to-purple-800 rounded-lg flex items-center justify-center">
              <Calculator className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-white">Contaduría Celis</h1>
              <p className="text-xs text-gray-300">Servicios Contables Especializados</p>
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => setActiveSection(item.id)}
                className={`relative py-2 px-1 text-sm font-medium transition-colors duration-300 ${
                  activeSection === item.id 
                    ? 'text-purple-400' 
                    : 'text-gray-300 hover:text-white'
                }`}
              >
                {item.label}
                {activeSection === item.id && (
                  <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-purple-500 to-purple-600 rounded-full" />
                )}
              </button>
            ))}
            <button className="bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white px-6 py-2 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-purple-500/25">
              <Phone className="w-4 h-4 inline mr-2" />
              Contactar
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-white p-2 rounded-lg hover:bg-slate-800/50 transition-colors duration-300"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-slate-900/95 backdrop-blur-lg border-t border-slate-700/50 animate-in slide-in-from-top-2 duration-300">
            <div className="container mx-auto px-6 py-6">
              {menuItems.map((item, index) => (
                <button
                  key={item.id}
                  onClick={() => {
                    setActiveSection(item.id);
                    setIsMenuOpen(false);
                  }}
                  className={`block w-full text-left py-3 px-4 rounded-lg transition-all duration-300 ${
                    activeSection === item.id
                      ? 'text-purple-400 bg-purple-600/10'
                      : 'text-gray-300 hover:text-white hover:bg-slate-800/50'
                  }`}
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  {item.label}
                </button>
              ))}
              <button className="w-full mt-4 bg-gradient-to-r from-purple-600 to-purple-700 text-white py-3 rounded-lg transition-all duration-300 hover:from-purple-700 hover:to-purple-800">
                <Phone className="w-4 h-4 inline mr-2" />
                Contactar Ahora
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
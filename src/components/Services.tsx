import React from 'react';
import { Utensils, Search, Calculator, Briefcase, ArrowRight, CheckCircle } from 'lucide-react';

const Services: React.FC = () => {
  const services = [
    {
      icon: Utensils,
      title: "Costeo y Control de Alimentos y Bebidas",
      description: "Optimización de costos y control de inventarios para restaurantes y establecimientos gastronómicos.",
      features: [
        "Análisis de costos por platillo",
        "Control de inventarios en tiempo real",
        "Optimización de márgenes de ganancia",
        "Reportes de rentabilidad por producto"
      ],
      basePrice: 2500,
      gradient: "from-purple-600 to-purple-800"
    },
    {
      icon: Search,
      title: "Auditoría Interna",
      description: "Evaluación integral de procesos internos para identificar áreas de mejora y cumplimiento normativo.",
      features: [
        "Auditoría de procesos operativos",
        "Evaluación de controles internos",
        "Identificación de riesgos financieros",
        "Recomendaciones de mejora"
      ],
      basePrice: 3500,
      gradient: "from-purple-700 to-purple-900"
    },
    {
      icon: Calculator,
      title: "Consultoría Contable Fiscal",
      description: "Asesoría especializada en obligaciones fiscales y optimización tributaria para tu empresa.",
      features: [
        "Declaraciones fiscales mensuales",
        "Planeación fiscal estratégica",
        "Cumplimiento normativo SAT",
        "Optimización de cargas fiscales"
      ],
      basePrice: 1800,
      gradient: "from-purple-800 to-slate-800"
    },
    {
      icon: Briefcase,
      title: "Consultoría en Apertura de Negocio",
      description: "Acompañamiento integral desde la constitución hasta la puesta en marcha de tu empresa.",
      features: [
        "Constitución legal de empresa",
        "Trámites ante autoridades",
        "Estructura contable inicial",
        "Capacitación del personal"
      ],
      basePrice: 4200,
      gradient: "from-slate-700 to-purple-700"
    }
  ];

  return (
    <section id="servicios" className="py-20 bg-gradient-to-b from-slate-900 to-slate-800">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Nuestros <span className="bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent">Servicios</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Ofrecemos soluciones integrales adaptadas a las necesidades específicas de tu negocio
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div
                key={index}
                className="group relative bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50 hover:border-purple-500/50 transition-all duration-500 hover:transform hover:scale-[1.02] hover:shadow-2xl hover:shadow-purple-500/10"
              >
                {/* Background gradient overlay */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-500`}></div>
                
                <div className="relative z-10">
                  <div className={`w-16 h-16 bg-gradient-to-br ${service.gradient} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-purple-300 transition-colors duration-300">
                    {service.title}
                  </h3>
                  
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  
                  <ul className="space-y-3 mb-8">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-300">
                        <CheckCircle className="w-5 h-5 text-purple-400 mr-3 flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-gray-400 mb-1">Desde</p>
                      <p className="text-2xl font-bold text-white">
                        ${service.basePrice.toLocaleString()}
                        <span className="text-sm text-gray-400 font-normal"> MXN</span>
                      </p>
                    </div>
                    
                    <button className="flex items-center text-purple-400 hover:text-purple-300 font-medium transition-colors duration-300 group/btn">
                      Más información
                      <ArrowRight className="ml-2 w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-300" />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="text-center mt-16">
          <button className="bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white px-8 py-4 rounded-full font-medium transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-purple-500/25">
            <Calculator className="w-5 h-5 inline mr-2" />
            Obtener Cotización Personalizada
          </button>
        </div>
      </div>
    </section>
  );
};

export default Services;
import React from 'react';
import { Award, Users, Target, Heart, BookOpen, Shield } from 'lucide-react';

const About: React.FC = () => {
  const values = [
    {
      icon: Shield,
      title: "Integridad",
      description: "Actuamos con transparencia y ética profesional en cada proyecto"
    },
    {
      icon: Target,
      title: "Precisión",
      description: "Garantizamos exactitud y calidad en todos nuestros servicios"
    },
    {
      icon: Heart,
      title: "Compromiso",
      description: "Dedicación total al éxito y crecimiento de nuestros clientes"
    },
    {
      icon: BookOpen,
      title: "Innovación",
      description: "Aplicamos las últimas metodologías y tecnologías contables"
    }
  ];

  return (
    <section id="about" className="py-20 bg-slate-800">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left side - Image and stats */}
            <div className="relative">
              <div className="relative bg-gradient-to-br from-purple-600/20 to-slate-700/20 rounded-3xl p-8 backdrop-blur-sm border border-slate-700/50">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-600/5 to-transparent rounded-3xl"></div>
                
                {/* Professional icon/illustration */}
                <div className="relative z-10 text-center">
                  <div className="w-32 h-32 bg-gradient-to-br from-purple-600 to-purple-800 rounded-full flex items-center justify-center mx-auto mb-8 shadow-2xl">
                    <Users className="w-16 h-16 text-white" />
                  </div>
                  
                  <h3 className="text-3xl font-bold text-white mb-4">Contaduría Celis</h3>
                  <p className="text-gray-300 text-lg">Liderazgo en Servicios Contables</p>
                </div>
              </div>
              
              {/* Floating stats */}
              <div className="absolute -bottom-6 -right-6 bg-slate-900/90 backdrop-blur-sm rounded-2xl p-6 border border-slate-700/50 shadow-2xl">
                <div className="flex items-center space-x-4">
                  <Award className="w-8 h-8 text-purple-400" />
                  <div>
                    <p className="text-2xl font-bold text-white">+10 años</p>
                    <p className="text-sm text-gray-400">Experiencia</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right side - Content */}
            <div className="space-y-8">
              <div>
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                  Sobre <span className="bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent">Nosotros</span>
                </h2>
                
                <div className="space-y-4 text-gray-300 text-lg leading-relaxed">
                  <p>
                    En <strong className="text-white">Contaduría Celis</strong>, somos especialistas en brindar soluciones contables 
                    y financieras integrales que impulsan el crecimiento sostenible de nuestros clientes.
                  </p>
                  
                  <p>
                    Con más de una década de experiencia en el mercado, hemos desarrollado una metodología 
                    única que combina conocimiento técnico especializado con un enfoque personalizado 
                    para cada tipo de negocio.
                  </p>
                  
                  <p>
                    Nuestro equipo de profesionales certificados se mantiene en constante actualización 
                    para ofrecer servicios que cumplan con los más altos estándares de calidad y las 
                    normativas fiscales vigentes.
                  </p>
                </div>
              </div>

              {/* Mission statement */}
              <div className="bg-gradient-to-r from-purple-600/10 to-transparent p-6 rounded-2xl border border-purple-500/20">
                <h4 className="text-xl font-semibold text-purple-300 mb-3">Nuestra Misión</h4>
                <p className="text-gray-300">
                  Ser el socio estratégico de confianza que permita a nuestros clientes tomar 
                  decisiones financieras informadas y alcanzar sus objetivos empresariales a 
                  través de servicios contables de excelencia.
                </p>
              </div>
            </div>
          </div>

          {/* Values section */}
          <div className="mt-20">
            <h3 className="text-3xl font-bold text-white text-center mb-12">
              Nuestros <span className="bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent">Valores</span>
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((value, index) => {
                const IconComponent = value.icon;
                return (
                  <div
                    key={index}
                    className="group bg-slate-900/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700/50 hover:border-purple-500/50 transition-all duration-300 hover:transform hover:scale-105 text-center"
                  >
                    <div className="w-16 h-16 bg-gradient-to-br from-purple-600/20 to-purple-800/20 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                      <IconComponent className="w-8 h-8 text-purple-400" />
                    </div>
                    <h4 className="text-xl font-semibold text-white mb-3 group-hover:text-purple-300 transition-colors duration-300">
                      {value.title}
                    </h4>
                    <p className="text-gray-400 text-sm leading-relaxed">
                      {value.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
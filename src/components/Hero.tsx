import React from 'react';
import { ArrowRight, Shield, TrendingUp, Users, Award } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with gradient and animated shapes */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-900/20 to-slate-900">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-900/20 via-transparent to-transparent"></div>
      </div>
      
      {/* Animated background shapes */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-600/10 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-800/10 rounded-full mix-blend-multiply filter blur-xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-purple-700/5 rounded-full mix-blend-multiply filter blur-xl animate-pulse" style={{ animationDelay: '4s' }}></div>
      </div>

      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8 animate-in slide-in-from-bottom-4 duration-1000">
            <div className="inline-flex items-center bg-purple-600/10 border border-purple-500/20 rounded-full px-6 py-2 mb-6">
              <Award className="w-4 h-4 text-purple-400 mr-2" />
              <span className="text-purple-300 text-sm font-medium">Servicios Contables Especializados</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                Contaduría
              </span>
              <br />
              <span className="bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent">
                Celis
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed max-w-3xl mx-auto">
              Expertos en consultoría contable, auditoría y control financiero para impulsar el éxito de tu negocio
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16 animate-in slide-in-from-bottom-4 duration-1000 delay-300">
            <button className="group bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white px-8 py-4 rounded-full font-medium transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-purple-500/25">
              <span className="flex items-center justify-center">
                Obtener Cotización
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </span>
            </button>
            <button className="bg-slate-800/50 hover:bg-slate-700/50 backdrop-blur-sm text-white px-8 py-4 rounded-full font-medium transition-all duration-300 border border-slate-700 hover:border-slate-600">
              Conocer Servicios
            </button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto animate-in slide-in-from-bottom-4 duration-1000 delay-500">
            <div className="text-center group">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-600/20 to-purple-800/20 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <Shield className="w-8 h-8 text-purple-400" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">+10</h3>
              <p className="text-gray-400">Años de Experiencia</p>
            </div>
            
            <div className="text-center group">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-600/20 to-purple-800/20 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <Users className="w-8 h-8 text-purple-400" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">200+</h3>
              <p className="text-gray-400">Clientes Satisfechos</p>
            </div>
            
            <div className="text-center group">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-600/20 to-purple-800/20 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <TrendingUp className="w-8 h-8 text-purple-400" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">98%</h3>
              <p className="text-gray-400">Tasa de Éxito</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
import React, { useState, useEffect } from 'react';
import { Calculator, ArrowRight, CheckCircle, Clock, DollarSign, FileText, Calendar } from 'lucide-react';

interface Service {
  id: string;
  name: string;
  basePrice: number;
  description: string;
  factors: {
    complexity: { low: 1, medium: 1.3, high: 1.8 };
    size: { small: 1, medium: 1.4, large: 2.2 };
    urgency: { normal: 1, urgent: 1.5, critical: 2 };
  };
}

const QuoteCalculator: React.FC = () => {
  const [selectedService, setSelectedService] = useState<string>('');
  const [complexity, setComplexity] = useState<'low' | 'medium' | 'high'>('medium');
  const [size, setSize] = useState<'small' | 'medium' | 'large'>('medium');
  const [urgency, setUrgency] = useState<'normal' | 'urgent' | 'critical'>('normal');
  const [estimatedPrice, setEstimatedPrice] = useState<number>(0);
  const [showAppointment, setShowAppointment] = useState<boolean>(false);
  const [clientInfo, setClientInfo] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    preferredDate: '',
    message: ''
  });

  const services: Service[] = [
    {
      id: 'costeo',
      name: 'Costeo y Control de Alimentos y Bebidas',
      basePrice: 2500,
      description: 'Análisis y optimización de costos gastronómicos',
      factors: {
        complexity: { low: 1, medium: 1.3, high: 1.8 },
        size: { small: 1, medium: 1.4, large: 2.2 },
        urgency: { normal: 1, urgent: 1.5, critical: 2 }
      }
    },
    {
      id: 'auditoria',
      name: 'Auditoría Interna',
      basePrice: 3500,
      description: 'Evaluación integral de procesos internos',
      factors: {
        complexity: { low: 1, medium: 1.4, high: 2.1 },
        size: { small: 1, medium: 1.6, large: 2.8 },
        urgency: { normal: 1, urgent: 1.4, critical: 1.9 }
      }
    },
    {
      id: 'fiscal',
      name: 'Consultoría Contable Fiscal',
      basePrice: 1800,
      description: 'Asesoría especializada en obligaciones fiscales',
      factors: {
        complexity: { low: 1, medium: 1.2, high: 1.6 },
        size: { small: 1, medium: 1.3, large: 1.8 },
        urgency: { normal: 1, urgent: 1.3, critical: 1.7 }
      }
    },
    {
      id: 'apertura',
      name: 'Consultoría en Apertura de Negocio',
      basePrice: 4200,
      description: 'Acompañamiento integral para nuevos negocios',
      factors: {
        complexity: { low: 1, medium: 1.5, high: 2.3 },
        size: { small: 1, medium: 1.7, large: 3.1 },
        urgency: { normal: 1, urgent: 1.6, critical: 2.2 }
      }
    }
  ];

  useEffect(() => {
    if (selectedService) {
      const service = services.find(s => s.id === selectedService);
      if (service) {
        const basePrice = service.basePrice;
        const complexityMultiplier = service.factors.complexity[complexity];
        const sizeMultiplier = service.factors.size[size];
        const urgencyMultiplier = service.factors.urgency[urgency];
        
        const finalPrice = basePrice * complexityMultiplier * sizeMultiplier * urgencyMultiplier;
        setEstimatedPrice(Math.round(finalPrice));
      }
    }
  }, [selectedService, complexity, size, urgency]);

  const handleScheduleAppointment = () => {
    if (estimatedPrice > 0) {
      setShowAppointment(true);
    }
  };

  const handleSubmitAppointment = (e: React.FormEvent) => {
    e.preventDefault();
    // Here would go the logic to send the appointment request
    alert(`Cita agendada exitosamente para ${clientInfo.name}. Te contactaremos pronto para confirmar los detalles.`);
    
    // Reset form
    setClientInfo({
      name: '',
      email: '',
      phone: '',
      company: '',
      preferredDate: '',
      message: ''
    });
    setShowAppointment(false);
  };

  return (
    <section id="cotizacion" className="py-20 bg-gradient-to-b from-slate-800 to-slate-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Calculadora de <span className="bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent">Cotización</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Obtén una estimación personalizada de nuestros servicios y agenda tu cita de consultoría
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {!showAppointment ? (
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-3xl p-8 border border-slate-700/50">
              {/* Service Selection */}
              <div className="mb-8">
                <h3 className="text-2xl font-semibold text-white mb-6 flex items-center">
                  <FileText className="w-6 h-6 mr-3 text-purple-400" />
                  Selecciona el Servicio
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {services.map((service) => (
                    <button
                      key={service.id}
                      onClick={() => setSelectedService(service.id)}
                      className={`p-6 rounded-2xl border transition-all duration-300 text-left ${
                        selectedService === service.id
                          ? 'border-purple-500 bg-purple-600/10'
                          : 'border-slate-600 bg-slate-700/30 hover:border-slate-500'
                      }`}
                    >
                      <h4 className={`font-semibold mb-2 ${
                        selectedService === service.id ? 'text-purple-300' : 'text-white'
                      }`}>
                        {service.name}
                      </h4>
                      <p className="text-gray-400 text-sm mb-3">{service.description}</p>
                      <p className="text-gray-300 font-medium">
                        Desde ${service.basePrice.toLocaleString()} MXN
                      </p>
                    </button>
                  ))}
                </div>
              </div>

              {selectedService && (
                <>
                  {/* Configuration Options */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                    {/* Complexity */}
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-4 flex items-center">
                        <Calculator className="w-5 h-5 mr-2 text-purple-400" />
                        Complejidad
                      </h4>
                      <div className="space-y-2">
                        {['low', 'medium', 'high'].map((level) => (
                          <label key={level} className="flex items-center cursor-pointer">
                            <input
                              type="radio"
                              name="complexity"
                              value={level}
                              checked={complexity === level}
                              onChange={(e) => setComplexity(e.target.value as any)}
                              className="sr-only"
                            />
                            <div className={`w-4 h-4 rounded-full mr-3 transition-all duration-200 ${
                              complexity === level ? 'bg-purple-500' : 'bg-slate-600'
                            }`}></div>
                            <span className="text-gray-300 capitalize">
                              {level === 'low' ? 'Baja' : level === 'medium' ? 'Media' : 'Alta'}
                            </span>
                          </label>
                        ))}
                      </div>
                    </div>

                    {/* Size */}
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-4 flex items-center">
                        <DollarSign className="w-5 h-5 mr-2 text-purple-400" />
                        Tamaño de Empresa
                      </h4>
                      <div className="space-y-2">
                        {['small', 'medium', 'large'].map((sizeLevel) => (
                          <label key={sizeLevel} className="flex items-center cursor-pointer">
                            <input
                              type="radio"
                              name="size"
                              value={sizeLevel}
                              checked={size === sizeLevel}
                              onChange={(e) => setSize(e.target.value as any)}
                              className="sr-only"
                            />
                            <div className={`w-4 h-4 rounded-full mr-3 transition-all duration-200 ${
                              size === sizeLevel ? 'bg-purple-500' : 'bg-slate-600'
                            }`}></div>
                            <span className="text-gray-300 capitalize">
                              {sizeLevel === 'small' ? 'Pequeña' : sizeLevel === 'medium' ? 'Mediana' : 'Grande'}
                            </span>
                          </label>
                        ))}
                      </div>
                    </div>

                    {/* Urgency */}
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-4 flex items-center">
                        <Clock className="w-5 h-5 mr-2 text-purple-400" />
                        Urgencia
                      </h4>
                      <div className="space-y-2">
                        {['normal', 'urgent', 'critical'].map((urgencyLevel) => (
                          <label key={urgencyLevel} className="flex items-center cursor-pointer">
                            <input
                              type="radio"
                              name="urgency"
                              value={urgencyLevel}
                              checked={urgency === urgencyLevel}
                              onChange={(e) => setUrgency(e.target.value as any)}
                              className="sr-only"
                            />
                            <div className={`w-4 h-4 rounded-full mr-3 transition-all duration-200 ${
                              urgency === urgencyLevel ? 'bg-purple-500' : 'bg-slate-600'
                            }`}></div>
                            <span className="text-gray-300 capitalize">
                              {urgencyLevel === 'normal' ? 'Normal' : urgencyLevel === 'urgent' ? 'Urgente' : 'Crítica'}
                            </span>
                          </label>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Price Display */}
                  {estimatedPrice > 0 && (
                    <div className="bg-gradient-to-r from-purple-600/20 to-purple-800/20 rounded-2xl p-8 border border-purple-500/30 mb-8">
                      <div className="text-center">
                        <h3 className="text-2xl font-semibold text-white mb-2">Cotización Estimada</h3>
                        <p className="text-5xl font-bold text-purple-300 mb-4">
                          ${estimatedPrice.toLocaleString()}
                          <span className="text-xl text-gray-400 font-normal"> MXN</span>
                        </p>
                        <p className="text-gray-300 mb-6">
                          *Esta es una cotización aproximada. El precio final puede variar según los requerimientos específicos.
                        </p>
                        
                        <button
                          onClick={handleScheduleAppointment}
                          className="bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white px-8 py-4 rounded-full font-medium transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-purple-500/25"
                        >
                          <Calendar className="w-5 h-5 inline mr-2" />
                          Agendar Cita con la Contadora
                          <ArrowRight className="w-5 h-5 inline ml-2" />
                        </button>
                      </div>
                    </div>
                  )}
                </>
              )}
            </div>
          ) : (
            // Appointment Form
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-3xl p-8 border border-slate-700/50">
              <div className="text-center mb-8">
                <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                <h3 className="text-3xl font-semibold text-white mb-2">¡Perfecto!</h3>
                <p className="text-gray-300 mb-4">
                  Tu cotización estimada es de <span className="text-purple-400 font-bold">${estimatedPrice.toLocaleString()} MXN</span>
                </p>
                <p className="text-gray-300">
                  Completa el formulario para agendar tu cita de consultoría personalizada
                </p>
              </div>

              <form onSubmit={handleSubmitAppointment} className="max-w-2xl mx-auto space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-white font-medium mb-2">Nombre Completo *</label>
                    <input
                      type="text"
                      required
                      value={clientInfo.name}
                      onChange={(e) => setClientInfo({...clientInfo, name: e.target.value})}
                      className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:border-purple-500 focus:outline-none transition-colors duration-300"
                      placeholder="Tu nombre completo"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-white font-medium mb-2">Email *</label>
                    <input
                      type="email"
                      required
                      value={clientInfo.email}
                      onChange={(e) => setClientInfo({...clientInfo, email: e.target.value})}
                      className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:border-purple-500 focus:outline-none transition-colors duration-300"
                      placeholder="tu@email.com"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-white font-medium mb-2">Teléfono *</label>
                    <input
                      type="tel"
                      required
                      value={clientInfo.phone}
                      onChange={(e) => setClientInfo({...clientInfo, phone: e.target.value})}
                      className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:border-purple-500 focus:outline-none transition-colors duration-300"
                      placeholder="+52 (55) 1234-5678"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-white font-medium mb-2">Empresa</label>
                    <input
                      type="text"
                      value={clientInfo.company}
                      onChange={(e) => setClientInfo({...clientInfo, company: e.target.value})}
                      className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:border-purple-500 focus:outline-none transition-colors duration-300"
                      placeholder="Nombre de tu empresa"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-white font-medium mb-2">Fecha Preferida para la Cita</label>
                  <input
                    type="date"
                    value={clientInfo.preferredDate}
                    onChange={(e) => setClientInfo({...clientInfo, preferredDate: e.target.value})}
                    min={new Date().toISOString().split('T')[0]}
                    className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:border-purple-500 focus:outline-none transition-colors duration-300"
                  />
                </div>
                
                <div>
                  <label className="block text-white font-medium mb-2">Mensaje Adicional</label>
                  <textarea
                    rows={4}
                    value={clientInfo.message}
                    onChange={(e) => setClientInfo({...clientInfo, message: e.target.value})}
                    className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:border-purple-500 focus:outline-none transition-colors duration-300 resize-none"
                    placeholder="Cuéntanos más detalles sobre tu proyecto o consulta específica..."
                  />
                </div>
                
                <div className="flex flex-col sm:flex-row gap-4 pt-6">
                  <button
                    type="button"
                    onClick={() => setShowAppointment(false)}
                    className="flex-1 bg-slate-700 hover:bg-slate-600 text-white px-6 py-3 rounded-lg font-medium transition-colors duration-300"
                  >
                    Volver a Cotización
                  </button>
                  
                  <button
                    type="submit"
                    className="flex-1 bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white px-6 py-3 rounded-lg font-medium transition-all duration-300 transform hover:scale-[1.02] shadow-lg hover:shadow-purple-500/25"
                  >
                    <Calendar className="w-5 h-5 inline mr-2" />
                    Confirmar Cita
                  </button>
                </div>
              </form>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default QuoteCalculator;
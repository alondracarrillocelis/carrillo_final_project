import React, { useState } from 'react';
import { Mail, Phone, MapPin, Clock, Send, CheckCircle } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here would go the logic to send the contact form
    console.log('Contact form submitted:', formData);
    setIsSubmitted(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      });
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contacto" className="py-20 bg-gradient-to-b from-slate-900 to-slate-800">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Contáctanos <span className="bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent">Hoy</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Estamos listos para ayudarte a impulsar el éxito financiero de tu negocio
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 max-w-7xl mx-auto">
          {/* Contact Information */}
          <div className="lg:col-span-1 space-y-8">
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50">
              <h3 className="text-2xl font-semibold text-white mb-6">Información de Contacto</h3>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-600 to-purple-800 rounded-2xl flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-white font-medium mb-1">Teléfono</h4>
                    <p className="text-gray-300">+52 (55) 1234-5678</p>
                    <p className="text-gray-400 text-sm">Lunes a Viernes 9:00 - 18:00</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-600 to-purple-800 rounded-2xl flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-white font-medium mb-1">Email</h4>
                    <p className="text-gray-300">contacto@contaduriaceliz.com</p>
                    <p className="text-gray-400 text-sm">Respuesta en 24 horas</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-600 to-purple-800 rounded-2xl flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-white font-medium mb-1">Ubicación</h4>
                    <p className="text-gray-300">Ciudad de México, México</p>
                    <p className="text-gray-400 text-sm">Consultas presenciales y virtuales</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-600 to-purple-800 rounded-2xl flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-white font-medium mb-1">Horario de Atención</h4>
                    <p className="text-gray-300">Lunes - Viernes: 9:00 - 18:00</p>
                    <p className="text-gray-300">Sábados: 10:00 - 14:00</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-purple-600/20 to-purple-800/20 rounded-2xl p-6 border border-purple-500/30">
              <h4 className="text-white font-semibold mb-3">¿Necesitas Ayuda Urgente?</h4>
              <p className="text-gray-300 text-sm mb-4">
                Para consultas urgentes, contáctanos directamente por WhatsApp
              </p>
              <button className="w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-lg font-medium transition-colors duration-300">
                Contactar por WhatsApp
              </button>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50">
              {!isSubmitted ? (
                <>
                  <h3 className="text-2xl font-semibold text-white mb-6">Envíanos un Mensaje</h3>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="name" className="block text-white font-medium mb-2">
                          Nombre Completo *
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          required
                          value={formData.name}
                          onChange={handleChange}
                          className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:border-purple-500 focus:outline-none transition-colors duration-300"
                          placeholder="Tu nombre completo"
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="email" className="block text-white font-medium mb-2">
                          Email *
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          required
                          value={formData.email}
                          onChange={handleChange}
                          className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:border-purple-500 focus:outline-none transition-colors duration-300"
                          placeholder="tu@email.com"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="phone" className="block text-white font-medium mb-2">
                          Teléfono
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:border-purple-500 focus:outline-none transition-colors duration-300"
                          placeholder="+52 (55) 1234-5678"
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="subject" className="block text-white font-medium mb-2">
                          Asunto *
                        </label>
                        <select
                          id="subject"
                          name="subject"
                          required
                          value={formData.subject}
                          onChange={handleChange}
                          className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg text-white focus:border-purple-500 focus:outline-none transition-colors duration-300"
                        >
                          <option value="">Selecciona un asunto</option>
                          <option value="costeo">Costeo de Alimentos</option>
                          <option value="auditoria">Auditoría Interna</option>
                          <option value="fiscal">Consultoría Fiscal</option>
                          <option value="apertura">Apertura de Negocio</option>
                          <option value="general">Consulta General</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-white font-medium mb-2">
                        Mensaje *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        required
                        rows={5}
                        value={formData.message}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:border-purple-500 focus:outline-none transition-colors duration-300 resize-none"
                        placeholder="Cuéntanos más sobre tu consulta o proyecto..."
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white px-6 py-4 rounded-lg font-medium transition-all duration-300 transform hover:scale-[1.02] shadow-lg hover:shadow-purple-500/25 flex items-center justify-center"
                    >
                      <Send className="w-5 h-5 mr-2" />
                      Enviar Mensaje
                    </button>
                  </form>
                </>
              ) : (
                <div className="text-center py-12">
                  <CheckCircle className="w-20 h-20 text-green-500 mx-auto mb-6" />
                  <h3 className="text-3xl font-semibold text-white mb-4">¡Mensaje Enviado!</h3>
                  <p className="text-gray-300 text-lg">
                    Gracias por contactarnos. Te responderemos dentro de las próximas 24 horas.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
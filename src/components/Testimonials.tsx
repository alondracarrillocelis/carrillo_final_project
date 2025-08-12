import React from 'react';
import { Star, Quote } from 'lucide-react';

const Testimonials: React.FC = () => {
  const testimonials = [
    {
      name: "María González",
      company: "Restaurante El Sabor",
      service: "Costeo de Alimentos",
      rating: 5,
      text: "Gracias a Contaduría Celis logramos reducir nuestros costos de ingredientes en un 25% sin comprometer la calidad. Su análisis detallado fue clave para optimizar nuestras compras.",
      image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop"
    },
    {
      name: "Carlos Mendoza",
      company: "Tech Solutions SA",
      service: "Consultoría Fiscal",
      rating: 5,
      text: "Excelente servicio de asesoría fiscal. Me ayudaron a reestructurar mi empresa y ahora pago 40% menos impuestos de manera completamente legal. Muy profesionales.",
      image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop"
    },
    {
      name: "Ana Rodríguez",
      company: "Boutique Fashion",
      service: "Apertura de Negocio",
      rating: 5,
      text: "Me acompañaron desde cero en la apertura de mi boutique. Su conocimiento del proceso fue invaluable, me ahorraron tiempo y evitaron errores costosos.",
      image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop"
    },
    {
      name: "Roberto Silva",
      company: "Industrias Silva",
      service: "Auditoría Interna",
      rating: 5,
      text: "La auditoría interna que realizaron identificó varios puntos de mejora que no habíamos considerado. Su reporte fue muy completo y las recomendaciones muy acertadas.",
      image: "https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop"
    }
  ];

  return (
    <section className="py-20 bg-slate-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Lo que Dicen Nuestros <span className="bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent">Clientes</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            La confianza de nuestros clientes es nuestro mayor respaldo
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="group bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50 hover:border-purple-500/50 transition-all duration-500 hover:transform hover:scale-[1.02] hover:shadow-2xl hover:shadow-purple-500/10"
            >
              <div className="relative">
                <Quote className="w-8 h-8 text-purple-400/30 absolute -top-2 -left-2" />
                
                <div className="flex items-center mb-6">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full object-cover border-2 border-purple-500/20 mr-4"
                  />
                  <div>
                    <h4 className="text-lg font-semibold text-white group-hover:text-purple-300 transition-colors duration-300">
                      {testimonial.name}
                    </h4>
                    <p className="text-gray-400 text-sm">{testimonial.company}</p>
                    <div className="flex items-center mt-1">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                      ))}
                    </div>
                  </div>
                </div>

                <p className="text-gray-300 leading-relaxed mb-4 relative z-10">
                  "{testimonial.text}"
                </p>

                <div className="inline-block bg-purple-600/10 text-purple-400 px-3 py-1 rounded-full text-sm font-medium border border-purple-500/20">
                  {testimonial.service}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust indicators */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center bg-slate-800/50 backdrop-blur-sm rounded-2xl px-8 py-4 border border-slate-700/50">
            <div className="flex items-center mr-8">
              <div className="text-3xl font-bold text-purple-400">4.9</div>
              <div className="ml-2">
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>
                <div className="text-xs text-gray-400">Promedio de reseñas</div>
              </div>
            </div>
            
            <div className="border-l border-slate-600 pl-8">
              <div className="text-3xl font-bold text-purple-400">200+</div>
              <div className="text-xs text-gray-400">Clientes satisfechos</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
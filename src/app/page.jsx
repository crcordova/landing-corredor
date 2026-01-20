'use client';
import React, { useState } from 'react';
import { Menu, X, Phone, Mail, MapPin, Home, TrendingUp, DollarSign } from 'lucide-react';

export default function RealEstateLanding() {
  const [menuOpen, setMenuOpen] = useState(false);
  
  // Variables de entorno simuladas (en Next.js serían process.env.NEXT_PUBLIC_WHATSAPP_NUMBER y NEXT_PUBLIC_EMAIL)
  const WHATSAPP_NUMBER = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER;
  const EMAIL = process.env.NEXT_PUBLIC_EMAIL;
  
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
    setMenuOpen(false);
  };

  const handleWhatsApp = (message) => {
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`, '_blank');
  };

  const handleEmail = (subject) => {
    window.location.href = `mailto:${EMAIL}?subject=${encodeURIComponent(subject)}`;
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="fixed w-full bg-slate-900 shadow-lg z-50">
        <nav className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Home className="w-8 h-8 text-blue-400" />
              <span className="text-white text-xl font-bold">DopDop Corredores de Propiedades</span>
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8">
              {['sobre-mi', 'arriendo', 'venta', 'tasacion', 'contacto'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className="text-gray-300 hover:text-blue-400 transition-colors capitalize font-medium"
                >
                  {item.replace('-', ' ')}
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-white"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Menu */}
          {menuOpen && (
            <div className="md:hidden mt-4 pb-4">
              {['sobre-mi', 'arriendo', 'venta', 'tasacion', 'contacto'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className="block w-full text-left py-2 text-gray-300 hover:text-blue-400 capitalize"
                >
                  {item.replace('-', ' ')}
                </button>
              ))}
            </div>
          )}
        </nav>
      </header>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800"></div>
        <div className="absolute inset-0 bg-black opacity-40"></div>
        
        <div className="relative z-10 text-center text-white px-6">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
            DopDop
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 font-light max-w-2xl mx-auto">
            Tu confianza, mi compromiso. Experto en encontrar el hogar perfecto para ti.
          </p>
        </div>
        
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white rounded-full flex items-start justify-center p-2">
            <div className="w-1 h-3 bg-white rounded-full"></div>
          </div>
        </div>
      </section>

      {/* Sobre Mi */}
      <section id="sobre-mi" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-slate-900 mb-8 text-center">Sobre Mí</h2>
            <div className="bg-gradient-to-r from-blue-50 to-slate-50 p-8 rounded-lg shadow-md">
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                Con más de 15 años de experiencia en el mercado inmobiliario, me he dedicado a ayudar a cientos de familias a encontrar su hogar ideal. Mi enfoque se basa en la transparencia, profesionalismo y un servicio personalizado que garantiza la mejor experiencia en cada transacción.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Especializado en propiedades residenciales y comerciales, ofrezco asesoría integral desde la búsqueda hasta el cierre del negocio. Mi compromiso es convertir tus sueños inmobiliarios en realidad, brindándote confianza y seguridad en cada paso del proceso.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Arriendo */}
      <section id="arriendo" className="py-20 bg-slate-50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center justify-center mb-6">
              <Home className="w-12 h-12 text-blue-600 mr-4" />
              <h2 className="text-4xl font-bold text-slate-900">Arriendo</h2>
            </div>
            <p className="text-lg text-gray-700 text-center mb-8 max-w-2xl mx-auto">
              Encuentra el lugar perfecto para vivir. Gestiono una amplia cartera de propiedades en arriendo, desde departamentos modernos hasta casas familiares, adaptándome a tus necesidades y presupuesto.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => handleWhatsApp('Hola, estoy interesado en propiedades en arriendo')}
                className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-lg font-semibold transition-colors flex items-center justify-center shadow-lg"
              >
                <Phone className="w-5 h-5 mr-2" />
                Consultar por WhatsApp
              </button>
              <button
                onClick={() => handleEmail('Consulta sobre Arriendo')}
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors flex items-center justify-center shadow-lg"
              >
                <Mail className="w-5 h-5 mr-2" />
                Enviar Email
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Venta */}
      <section id="venta" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center justify-center mb-6">
              <DollarSign className="w-12 h-12 text-blue-600 mr-4" />
              <h2 className="text-4xl font-bold text-slate-900">Venta</h2>
            </div>
            <p className="text-lg text-gray-700 text-center mb-8 max-w-2xl mx-auto">
              ¿Buscas comprar tu propiedad ideal? Te acompaño en todo el proceso de compra, negociando las mejores condiciones y asegurando una inversión inteligente que se ajuste a tus expectativas.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => handleWhatsApp('Hola, estoy interesado en comprar una propiedad')}
                className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-lg font-semibold transition-colors flex items-center justify-center shadow-lg"
              >
                <Phone className="w-5 h-5 mr-2" />
                Consultar por WhatsApp
              </button>
              <button
                onClick={() => handleEmail('Consulta sobre Venta')}
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors flex items-center justify-center shadow-lg"
              >
                <Mail className="w-5 h-5 mr-2" />
                Enviar Email
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Tasación */}
      <section id="tasacion" className="py-20 bg-slate-50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center justify-center mb-6">
              <TrendingUp className="w-12 h-12 text-blue-600 mr-4" />
              <h2 className="text-4xl font-bold text-slate-900">Tasación</h2>
            </div>
            <p className="text-lg text-gray-700 text-center mb-8 max-w-2xl mx-auto">
              Obtén una valoración profesional y precisa de tu propiedad. Utilizo análisis de mercado actualizados y metodologías certificadas para determinar el valor real de tu inversión inmobiliaria.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => handleWhatsApp('Hola, necesito tasar mi propiedad')}
                className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-lg font-semibold transition-colors flex items-center justify-center shadow-lg"
              >
                <Phone className="w-5 h-5 mr-2" />
                Consultar por WhatsApp
              </button>
              <button
                onClick={() => handleEmail('Solicitud de Tasación')}
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors flex items-center justify-center shadow-lg"
              >
                <Mail className="w-5 h-5 mr-2" />
                Enviar Email
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Contacto */}
      <section id="contacto" className="py-20 bg-gradient-to-br from-slate-900 to-blue-900 text-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6">Contacto</h2>
            <p className="text-xl mb-8 text-gray-200">
              ¿Tienes alguna pregunta o necesitas asesoría personalizada? Estoy aquí para ayudarte. Contáctame y juntos encontraremos la mejor solución para tus necesidades inmobiliarias.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <button
                onClick={() => handleWhatsApp('Hola, necesito más información')}
                className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-lg font-semibold transition-colors flex items-center justify-center shadow-lg"
              >
                <Phone className="w-5 h-5 mr-2" />
                WhatsApp
              </button>
              <button
                onClick={() => handleEmail('Consulta General')}
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors flex items-center justify-center shadow-lg"
              >
                <Mail className="w-5 h-5 mr-2" />
                Email
              </button>
            </div>
            <div className="flex items-center justify-center text-gray-300">
              <MapPin className="w-5 h-5 mr-2" />
              <span>Santiago, Chile</span>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-950 text-gray-400 py-12">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Home className="w-6 h-6 text-blue-400" />
                <span className="text-white text-lg font-bold">DopDop</span>
              </div>
              <p className="text-sm">
                Tu socio de confianza en el mercado inmobiliario. Transformando sueños en hogares desde 2008.
              </p>
            </div>
            
            <div>
              <h3 className="text-white font-semibold mb-4">Servicios</h3>
              <ul className="space-y-2 text-sm">
                <li><button onClick={() => scrollToSection('arriendo')} className="hover:text-blue-400 transition-colors">Arriendo</button></li>
                <li><button onClick={() => scrollToSection('venta')} className="hover:text-blue-400 transition-colors">Venta</button></li>
                <li><button onClick={() => scrollToSection('tasacion')} className="hover:text-blue-400 transition-colors">Tasación</button></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-white font-semibold mb-4">Contacto</h3>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center">
                  <Phone className="w-4 h-4 mr-2" />
                  <span>+{WHATSAPP_NUMBER}</span>
                </li>
                <li className="flex items-center">
                  <Mail className="w-4 h-4 mr-2" />
                  <span>{EMAIL}</span>
                </li>
                <li className="flex items-center">
                  <MapPin className="w-4 h-4 mr-2" />
                  <span>Santiago, Chile</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 pt-8 text-center text-sm">
            <p>&copy; {new Date().getFullYear()} DopDop. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import { 
  ChevronDown, 
  Search, 
  HelpCircle, 
  Package, 
  Truck, 
  Smartphone, 
  CreditCard,
  MessageCircle,
  Plus,
  Minus
} from "lucide-react";

// Definimos tipos para TypeScript (opcional pero buena práctica)
type FAQItem = {
  pregunta: string;
  respuesta: string;
};

type FAQCategory = {
  categoria: string;
  icon: any;
  items: FAQItem[];
};

export default function PreguntasFrecuentesPage() {
  const [active, setActive] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState("");

  const toggle = (id: string) => {
    setActive(active === id ? null : id);
  };

  const preguntas: FAQCategory[] = [
    {
      categoria: "Casillero Virtual",
      icon: Package,
      items: [
        {
          pregunta: "¿Cómo abrir mi Casillero Virtual de Globus Cargo?",
          respuesta:
            "Puedes abrir tu Casillero realizando el registro gratuito en nuestro sitio web o desde la aplicación móvil. Solo debes ingresar tus datos personales y dirección a la cual deseas que lleguen tus productos. Recibirás vía correo electrónico tu número de casillero y dirección en Miami.",
        },
        {
          pregunta: "¿Cuánto cuesta el Casillero Virtual?",
          respuesta:
            "El registro y uso del Casillero Virtual es completamente gratuito. Solo pagarás el costo de envío cuando decidas despachar tus paquetes a Colombia.",
        },
        {
          pregunta: "¿Cómo funciona el Casillero Virtual?",
          respuesta:
            "Con tu Casillero Virtual obtienes una dirección en Miami para tus compras en línea. Envías tus productos a esa dirección, nosotros los recibimos, consolidamos y enviamos a tu domicilio en Colombia de forma rápida y segura.",
        },
        {
          pregunta: "¿Con mi Casillero Virtual puedo enviar y recibir?",
          respuesta:
            "Sí, puedes usarlo tanto para recibir tus compras desde Estados Unidos como para enviar paquetes desde Colombia a otros destinos internacionales.",
        },
      ],
    },
    {
      categoria: "Envíos e Impuestos",
      icon: Truck,
      items: [
        {
          pregunta: "¿Cuáles son los impuestos de envío?",
          respuesta:
            "Los impuestos dependen del tipo de producto y su valor declarado. Si el valor declarado es menor a 200 USD, el envío puede estar exento (bajo ciertas condiciones de la ley 2155). Para montos superiores, se aplican impuestos de importación e IVA.",
        },
        {
          pregunta: "¿Cuáles son las restricciones de envío?",
          respuesta:
            "No se pueden enviar armas, explosivos, drogas, productos inflamables, dinero en efectivo, animales vivos, ni alimentos perecederos. Si tienes dudas sobre un producto específico, contáctanos antes de comprar.",
        },
        {
          pregunta: "¿Cuánto tiempo tardan los envíos?",
          respuesta:
            "Los envíos internacionales suelen tardar entre 3 a 7 días hábiles desde que el paquete sale de nuestra bodega en Miami hasta tu puerta en Colombia.",
        },
      ],
    },
    {
      categoria: "Aplicación y Sistema",
      icon: Smartphone,
      items: [
        {
          pregunta: "¿Dónde encuentro mis direcciones de envío?",
          respuesta:
            "Ingresa a tu cuenta desde la App o el portal web de Globus Cargo, y dirígete a la sección 'Mis Destinatarios'. Allí verás las direcciones activas de tu casillero en Miami y otras ciudades.",
        },
        {
          pregunta: "¿Dónde se ven mis paquetes pendientes?",
          respuesta:
            "En la sección 'Warehouses' de tu cuenta podrás visualizar todos los paquetes recibidos en tu casillero que están listos para consolidar y enviar.",
        },
        {
          pregunta: "¿Cómo puedo hacer seguimiento de mis envíos?",
          respuesta: "Puedes rastrear tus envíos ingresando a la opción 'Mis Guías' dentro de tu panel de usuario o usando nuestro rastreador público con tu número de guía.",
        },
      ],
    },
    {
      categoria: "Pagos y Facturación",
      icon: CreditCard,
      items: [
        {
          pregunta: "¿Cuáles son los medios de pago aceptados?",
          respuesta:
            "Aceptamos tarjetas de crédito internacionales (Visa, Mastercard, Amex), PayPal, Zelle y transferencias bancarias. También puedes pagar en pesos colombianos a través de Nequi, Daviplata o PSE.",
        },
        {
          pregunta: "¿Cómo puedo descargar mi factura?",
          respuesta:
            "Tu factura será enviada directamente a tu correo registrado una vez el envío esté listo. También puedes descargarla desde tu historial de envíos en el portal.",
        },
      ],
    },
  ];

  // Lógica de filtrado para el buscador
  const filteredPreguntas = preguntas.map(cat => ({
    ...cat,
    items: cat.items.filter(item => 
      item.pregunta.toLowerCase().includes(searchTerm.toLowerCase()) || 
      item.respuesta.toLowerCase().includes(searchTerm.toLowerCase())
    )
  })).filter(cat => cat.items.length > 0);

  return (
    <main className="bg-slate-50 text-gray-800 font-sans selection:bg-[#f58220] selection:text-white min-h-screen">
      <Header />

      {/* === HERO: Centro de Ayuda con Buscador === */}
      <section className="relative pt-44 pb-32 px-6 text-center overflow-hidden bg-[#f58220]">
        <div className="absolute inset-0 bg-gradient-to-br from-[#f58220] via-[#ff9a44] to-[#e07116]"></div>
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle, #fff 1.5px, transparent 1.5px)', backgroundSize: '24px 24px' }}></div>
        
        {/* Decoración flotante */}
        <motion.div animate={{ rotate: 360 }} transition={{ duration: 120, repeat: Infinity, ease: "linear" }} className="absolute -top-[50%] -left-[20%] w-[800px] h-[800px] border border-white/10 rounded-full border-dashed opacity-30 pointer-events-none"></motion.div>

        <div className="relative z-10 max-w-3xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-6 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-sm font-bold tracking-wide shadow-sm">
                <HelpCircle size={16} /> Centro de Soporte
            </div>
            
            <h1 className="text-4xl md:text-6xl font-black text-white mb-6 drop-shadow-sm">
              ¿Cómo podemos <span className="text-orange-100">ayudarte?</span>
            </h1>

            {/* BARRA DE BÚSQUEDA */}
            <div className="relative max-w-xl mx-auto mt-8">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <Search className="text-gray-400" size={20} />
              </div>
              <input
                type="text"
                placeholder="Buscar una pregunta (ej: precio, rastreo, pagos)..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-4 rounded-full bg-white text-gray-800 shadow-xl focus:ring-4 focus:ring-orange-300/50 outline-none transition-all placeholder:text-gray-400 font-medium"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* === CONTENIDO FAQ === */}
      <section className="max-w-4xl mx-auto py-20 px-6">
        {filteredPreguntas.length > 0 ? (
          <div className="space-y-16">
            {filteredPreguntas.map((cat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true, margin: "-50px" }}
              >
                {/* Cabecera de Categoría */}
                <div className="flex items-center gap-3 mb-6 border-b border-gray-200 pb-4">
                  <div className="p-2 bg-orange-100 text-[#f58220] rounded-lg">
                    <cat.icon size={24} />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900">{cat.categoria}</h2>
                </div>

                {/* Lista de Preguntas */}
                <div className="space-y-4">
                  {cat.items.map((item, index) => {
                    const id = `${cat.categoria}-${index}`; // ID único
                    const isActive = active === id;
                    
                    return (
                      <div
                        key={id}
                        className={`bg-white rounded-2xl overflow-hidden transition-all duration-300 ${
                          isActive 
                            ? "shadow-lg ring-1 ring-orange-100" 
                            : "shadow-sm border border-gray-100 hover:border-orange-200 hover:shadow-md"
                        }`}
                      >
                        <button
                          onClick={() => toggle(id)}
                          className="w-full flex justify-between items-center text-left px-6 py-5 cursor-pointer focus:outline-none"
                        >
                          <span className={`font-bold text-lg pr-4 ${isActive ? "text-[#f58220]" : "text-gray-700"}`}>
                            {item.pregunta}
                          </span>
                          <span className={`flex-shrink-0 transition-transform duration-300 ${isActive ? "rotate-180 text-[#f58220]" : "text-gray-400"}`}>
                             {isActive ? <Minus size={20} /> : <Plus size={20} />}
                          </span>
                        </button>

                        <AnimatePresence>
                          {isActive && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: "auto", opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.3, ease: "easeInOut" }}
                            >
                              <div className="px-6 pb-6 pt-0 text-gray-600 leading-relaxed border-t border-dashed border-gray-100 mt-2 pt-4">
                                {item.respuesta}
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    );
                  })}
                </div>
              </motion.div>
            ))}
          </div>
        ) : (
          /* Estado vacío si la búsqueda no arroja resultados */
          <div className="text-center py-20">
            <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4 text-gray-400">
                <Search size={32} />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">No encontramos resultados</h3>
            <p className="text-gray-500">Intenta con otras palabras clave o contacta a soporte.</p>
            <button 
                onClick={() => setSearchTerm("")}
                className="mt-4 text-[#f58220] font-bold hover:underline"
            >
                Ver todas las preguntas
            </button>
          </div>
        )}
      </section>

      {/* === CTA: ¿AÚN TIENES DUDAS? === */}
      <section className="bg-white py-20 border-t border-gray-100">
        <div className="max-w-4xl mx-auto px-6 text-center">
            <div className="inline-flex p-4 bg-orange-50 text-[#f58220] rounded-full mb-6">
                <MessageCircle size={32} />
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">¿No encontraste lo que buscabas?</h2>
            <p className="text-gray-600 mb-8 max-w-xl mx-auto">
                Nuestro equipo de soporte está disponible para resolver tus dudas específicas sobre envíos, casilleros o tarifas.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                    href="https://wa.me/573001112233"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-8 py-3 bg-[#25D366] text-white font-bold rounded-full shadow-lg hover:bg-[#20b358] transition-colors flex items-center justify-center gap-2"
                >
                    Chat en WhatsApp
                </a>
                <a
                    href="/contacto"
                    className="px-8 py-3 bg-white border border-gray-200 text-gray-700 font-bold rounded-full hover:bg-gray-50 transition-colors"
                >
                    Formulario de Contacto
                </a>
            </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
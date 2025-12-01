"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Montserrat } from "next/font/google";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import { Phone, Mail, Clock, Send, MapPin, ArrowRight, MessageSquare } from "lucide-react";

const montserrat = Montserrat({ subsets: ["latin"], weight: ["400", "500", "600", "700", "800"] });

// Variantes de animación
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay, ease: "easeOut" },
  }),
};

export default function ContactoPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const whatsappMessage = `Hola Globus Cargo 👋,%0A%0AMi nombre es: *${formData.name}*%0ACorreo: ${formData.email}%0A%0AMensaje:%0A${formData.message}`;
    
    window.open(
      `https://wa.me/573001112233?text=${whatsappMessage}`,
      "_blank"
    );
  };

  const locations = [
    {
      name: "Bodega Miami Principal",
      address: "2120 NW 96th Ave, Doral, FL 33172",
      country: "USA",
      map: "https://maps.google.com/maps?q=2120+NW+96th+Ave,+Doral,+FL+33172&t=&z=13&ie=UTF8&iwloc=&output=embed", 
    },
    {
      name: "Bodega Miami 2",
      address: "1414 NW 82nd Ave, Doral, FL 33126",
      country: "USA",
      map: "https://maps.google.com/maps?q=1414+NW+82nd+Ave,+Doral,+FL+33126&t=&z=13&ie=UTF8&iwloc=&output=embed",
    },
    {
      name: "Sede Bogotá",
      address: "Zona Industrial Montevideo",
      country: "Colombia",
      map: "https://maps.google.com/maps?q=Zona+Industrial+Montevideo,+Bogota&t=&z=13&ie=UTF8&iwloc=&output=embed",
    },
    {
      name: "Sede Barranquilla",
      address: "Cra. 53 #82-299, Nte. Centro Histórico",
      country: "Colombia",
      map: "https://maps.google.com/maps?q=Cra.+53+%2382-299,+Barranquilla&t=&z=13&ie=UTF8&iwloc=&output=embed",
    },
  ];

  return (
    <main className={`${montserrat.className} bg-slate-50 text-gray-800 selection:bg-[#f58220] selection:text-white`}>
      <Header />

      {/* === HERO: Estilo Premium Naranja === */}
      <section className="relative pt-44 pb-40 px-6 text-center overflow-hidden bg-[#f58220]">
        {/* Fondo Gradiente Rico */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#f58220] via-[#ff9a44] to-[#e07116]"></div>
        
        {/* Patrón de puntos (Textura) */}
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle, #fff 1.5px, transparent 1.5px)', backgroundSize: '24px 24px' }}></div>
        
        {/* Elementos decorativos animados */}
        <motion.div animate={{ rotate: 360 }} transition={{ duration: 120, repeat: Infinity, ease: "linear" }} className="absolute -top-[50%] -right-[10%] w-[800px] h-[800px] border border-white/10 rounded-full border-dashed opacity-30 pointer-events-none"></motion.div>
        <motion.div animate={{ y: [0, -20, 0] }} transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }} className="absolute top-20 left-[10%] w-64 h-64 bg-white/5 rounded-full blur-3xl pointer-events-none"></motion.div>

        <div className="relative z-10 max-w-4xl mx-auto text-white">
          <motion.div initial="hidden" animate="visible" variants={fadeInUp}>
             <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-6 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-sm font-bold tracking-wide shadow-sm">
                <MessageSquare size={16} /> Centro de Ayuda
            </div>

            <h1 className="text-5xl md:text-7xl font-black mb-6 tracking-tight drop-shadow-sm">
              Estamos para <span className="text-orange-100">Ayudarte</span>
            </h1>
            
            <p className="text-xl text-orange-50 max-w-2xl mx-auto leading-relaxed font-medium">
              ¿Tienes dudas sobre tu envío o necesitas una cotización personalizada? 
              Elige el canal que prefieras y conversemos.
            </p>
          </motion.div>
        </div>
      </section>

      {/* === CARDS DE CONTACTO RÁPIDO (Flotantes) === */}
      <section className="relative z-20 -mt-16 px-6 pb-12">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6">
          {[
            { icon: <Phone className="w-6 h-6" />, title: "Llámanos", text: "+1 (786) 531-7987", sub: "Atención inmediata" },
            { icon: <Mail className="w-6 h-6" />, title: "Escríbenos", text: "info@globuscargo.com", sub: "Respuesta en 24h" },
            { icon: <Clock className="w-6 h-6" />, title: "Visítanos", text: "Lun - Vie: 9AM – 6PM", sub: "Horario de oficina" },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-white p-8 rounded-3xl shadow-xl shadow-gray-200/50 border border-gray-100 flex items-start gap-4 hover:-translate-y-2 transition-transform duration-300"
            >
              <div className="p-4 bg-orange-50 text-[#f58220] rounded-2xl">
                {item.icon}
              </div>
              <div>
                <h3 className="font-bold text-gray-900 text-lg">{item.title}</h3>
                <p className="text-[#f58220] font-bold mt-1">{item.text}</p>
                <p className="text-gray-400 text-xs mt-1 font-medium uppercase tracking-wide">{item.sub}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* === SECCIÓN HÍBRIDA: FORMULARIO + TEXTO === */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="bg-white rounded-[2.5rem] shadow-2xl shadow-gray-200 overflow-hidden border border-gray-100">
            <div className="grid lg:grid-cols-2">
                
                {/* Columna Izquierda: Texto e invitación (Mantengo Oscuro para contraste Premium) */}
                <div className="p-10 md:p-16 bg-[#1a1a1a] text-white flex flex-col justify-center relative overflow-hidden">
                    <div className="absolute inset-0 bg-[#f58220] opacity-5" style={{ backgroundImage: 'radial-gradient(#fff 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>
                    <div className="absolute top-0 right-0 w-64 h-64 bg-[#f58220] rounded-full blur-[80px] opacity-20"></div>

                    <div className="relative z-10">
                        <span className="text-[#f58220] font-bold tracking-widest uppercase text-xs mb-4 block">Contacto Directo</span>
                        <h2 className="text-3xl md:text-5xl font-black mb-6 leading-tight">Envíanos un <br/> mensaje.</h2>
                        <p className="text-gray-400 mb-8 text-lg font-light leading-relaxed">
                            Al completar este formulario, serás redirigido a nuestro WhatsApp oficial con tu mensaje ya redactado. Nuestro equipo de soporte te atenderá al instante.
                        </p>
                        
                        <div className="space-y-4">
                            <div className="flex items-center gap-3 text-orange-100 font-medium">
                                <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-[#f58220]"><ArrowRight size={14}/></div>
                                <span>Cotizaciones de carga</span>
                            </div>
                            <div className="flex items-center gap-3 text-orange-100 font-medium">
                                <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-[#f58220]"><ArrowRight size={14}/></div>
                                <span>Rastreo de paquetes</span>
                            </div>
                            <div className="flex items-center gap-3 text-orange-100 font-medium">
                                <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-[#f58220]"><ArrowRight size={14}/></div>
                                <span>Ayuda con casilleros</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Columna Derecha: El Formulario Funcional */}
                <div className="p-10 md:p-16 bg-white">
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div>
                            <label className="block text-sm font-bold text-gray-700 mb-2">Nombre Completo</label>
                            <input
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                placeholder="Ej: Juan Pérez"
                                className="w-full bg-gray-50 border border-gray-200 rounded-xl p-4 text-gray-900 focus:ring-2 focus:ring-[#f58220] focus:border-transparent outline-none transition-all placeholder:text-gray-400"
                                required
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-bold text-gray-700 mb-2">Correo Electrónico</label>
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                placeholder="juan@ejemplo.com"
                                className="w-full bg-gray-50 border border-gray-200 rounded-xl p-4 text-gray-900 focus:ring-2 focus:ring-[#f58220] focus:border-transparent outline-none transition-all placeholder:text-gray-400"
                                required
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-bold text-gray-700 mb-2">¿En qué podemos ayudarte?</label>
                            <textarea
                                rows={4}
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                placeholder="Hola, quisiera saber el precio por libra..."
                                className="w-full bg-gray-50 border border-gray-200 rounded-xl p-4 text-gray-900 focus:ring-2 focus:ring-[#f58220] focus:border-transparent outline-none transition-all resize-none placeholder:text-gray-400"
                                required
                            ></textarea>
                        </div>
                        <motion.button
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            type="submit"
                            className="w-full bg-[#f58220] text-white font-bold py-4 rounded-xl shadow-lg shadow-orange-100 hover:bg-[#e07116] transition-all flex items-center justify-center gap-2"
                        >
                            <Send size={20} /> Iniciar Chat en WhatsApp
                        </motion.button>
                        <p className="text-center text-xs text-gray-400 mt-4">
                            Serás redirigido a WhatsApp Web o App
                        </p>
                    </form>
                </div>
            </div>
        </div>
      </section>

      {/* === NUESTRAS SEDES (GRID) === */}
      <section className="pb-24 px-6 max-w-7xl mx-auto">
        <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Nuestras Ubicaciones</h2>
            <div className="w-16 h-1 bg-[#f58220] mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {locations.map((loc, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl border border-gray-100 transition-all duration-300"
            >
              <div className="h-64 relative overflow-hidden">
                {/* He actualizado los mapas a URLs embed genéricas para que funcionen visualmente */}
                <iframe
                  src={loc.map}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  loading="lazy"
                  allowFullScreen
                  className="absolute inset-0 grayscale group-hover:grayscale-0 transition-all duration-500"
                ></iframe>
                {/* Badge de país */}
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-gray-800 shadow-sm border border-white">
                    {loc.country}
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex items-start gap-4">
                    <div className="mt-1 p-3 bg-orange-50 text-[#f58220] rounded-xl group-hover:bg-[#f58220] group-hover:text-white transition-colors duration-300">
                        <MapPin size={24} />
                    </div>
                    <div>
                        <h3 className="text-xl font-bold text-gray-900 mb-2">{loc.name}</h3>
                        <p className="text-gray-500 text-sm leading-relaxed">{loc.address}</p>
                    </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <Footer />
    </main>
  );
}
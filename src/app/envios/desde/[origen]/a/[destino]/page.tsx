"use client";

import { useParams } from "next/navigation";
import { useEffect } from "react";
// Eliminamos la importación de motion, ya que no se usa en este componente
// import { motion } from "framer-motion"; 
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import Testimonials from "@/components/layout/testimonials"; 
import {
  FaShieldAlt,
  FaDollarSign,
  FaClock,
  FaShoppingCart,
  FaWarehouse,
  FaHome,
  FaPlaneDeparture,
} from "react-icons/fa";

// Eliminamos las definiciones de variants

export default function EnvioDinamicoPage() {
  const params = useParams();
  const origen = params.origen?.toString() || "usa";
  const destino = params.destino?.toString() || "colombia";

  const format = (str: string) =>
    str.charAt(0).toUpperCase() + str.slice(1).replace("-", " ");

  const formattedOrigen = format(origen);
  const formattedDestino = format(destino);

  useEffect(() => {
    const title = `Envíos Internacionales desde ${formattedOrigen} a ${formattedDestino} | Courier y Carga | Globus Cargo`;
    const description = `Servicio de Courier y carga desde ${formattedOrigen} hacia ${formattedDestino}. Ofrecemos el mejor precio en envíos aéreo y marítimo, con casillero gratuito en Miami.`;
    
    document.title = title;
    const metaDesc = document.querySelector("meta[name='description']");
    if (metaDesc) metaDesc.setAttribute("content", description);
    else {
      const newMeta = document.createElement("meta");
      newMeta.name = "description";
      newMeta.content = description;
      document.head.appendChild(newMeta);
    }
  }, [formattedOrigen, formattedDestino]);

  return (
    <main className="bg-slate-50 text-[#1a1a1a] min-h-screen font-sans selection:bg-[#f58220] selection:text-white">
      <Header />

      {/* === HERO: Diseño Premium con Gradientes Profundos === */}
      <section className="relative pt-44 md:pt-52 pb-36 px-6 text-center overflow-hidden">
        
        {/* Fondo: Gradiente más sofisticado y rico */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#ff9a44] via-[#f58220] to-[#e06000] z-0"></div>
        
        {/* Textura de ruido sutil (Noise) */}
        <div className="absolute inset-0 opacity-[0.03] mix-blend-overlay" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}></div>

        {/* Elementos decorativos de fondo (Orbes abstractos - Ahora CSS Animation) */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div 
                className="absolute -top-[20%] -right-[10%] w-[800px] h-[800px] border border-white/10 rounded-full border-dashed opacity-30 animate-slow-spin"
            />
             <div 
                className="absolute top-[20%] -left-[10%] w-[600px] h-[600px] border border-white/5 rounded-full opacity-30 animate-slow-spin-reverse"
            />
        </div>

        <div
          className="relative z-10 max-w-5xl mx-auto"
        >
          {/* Badge pequeño superior */}
          <div className="inline-block px-4 py-1.5 mb-6 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white text-sm font-medium tracking-wide">
            🚀 Logística sin fronteras
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black mb-6 text-white tracking-tight leading-[1.1] drop-shadow-sm">
            De <span className="text-white/80">{formattedOrigen}</span> hasta <br className="hidden md:block" />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-white to-orange-100">
              {formattedDestino}
            </span>
          </h1>

          <p className="text-lg md:text-2xl text-orange-50 max-w-3xl mx-auto mb-12 leading-relaxed font-medium">
            Gestionamos tu <strong>courier y carga internacional</strong> con casillero gratuito. 
            La forma más segura de conectar ambos destinos.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4 md:gap-6">
            <a
              href="/cotizar"
              className="group relative px-8 py-4 bg-white text-[#f58220] font-bold text-lg rounded-xl shadow-xl shadow-orange-900/20 transition-all hover:shadow-orange-900/30 hover:-translate-y-1 overflow-hidden"
            >
              <span className="relative z-10 flex items-center justify-center gap-2">
                Cotizar Ahora <FaPlaneDeparture className="text-sm group-hover:translate-x-1 transition-transform"/>
              </span>
              <div className="absolute inset-0 bg-orange-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </a>
            
            <a
              href="https://wa.me/573001112233"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-[#ffffff20] backdrop-blur-md border border-white/30 text-white font-semibold text-lg rounded-xl transition-all hover:bg-white/30 hover:border-white/50"
            >
              Consultar por WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* === VENTAJAS: Estilo "Bento Grid" limpio === */}
      <section
        className="py-24 md:py-32 px-6"
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-5xl font-black text-[#1a1a1a] mb-4 tracking-tight">
              ¿Por qué elegir Globus Cargo?
            </h2>
            <div className="w-20 h-1.5 bg-[#f58220] mx-auto rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: <FaClock />, title: "Rapidez Garantizada", desc: "Optimizamos rutas aéreas y marítimas para cumplir con los tiempos prometidos." },
              { icon: <FaShieldAlt />, title: "Carga 100% Asegurada", desc: "Tu tranquilidad es primero. Ofrecemos seguro completo sobre el valor declarado." },
              { icon: <FaDollarSign />, title: "Tarifas Competitivas", desc: "Sin costos ocultos. Pagas lo justo por el peso y volumen real de tu carga." },
            ].map((item, i) => (
              <div
                key={i}
                className="group relative bg-white p-10 rounded-3xl border border-gray-100 shadow-sm transition-all duration-300 hover:shadow-2xl hover:shadow-orange-500/10 hover:-translate-y-2"
              >
                {/* Eliminamos el icono gigante decorativo de fondo */}
                
                <div className="relative z-10">
                    <div className="w-16 h-16 bg-orange-50 rounded-2xl flex items-center justify-center text-3xl text-[#f58220] mb-6 transition-transform duration-300 group-hover:bg-[#f58220] group-hover:text-white shadow-sm">
                    {item.icon}
                    </div>
                    <h3 className="text-xl font-bold mb-3 text-gray-900 group-hover:text-[#f58220] transition-colors">{item.title}</h3>
                    <p className="text-gray-500 leading-relaxed group-hover:text-gray-600">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* === CÓMO FUNCIONA: Diseño Conectado (Timeline) === */}
      <section
        className="py-24 bg-white relative overflow-hidden"
      >
        {/* Fondo decorativo sutil */}
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-orange-50/50 via-white to-white pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
            <div className="text-center mb-24">
                <span className="text-[#f58220] font-bold tracking-wider uppercase text-sm mb-2 block">Paso a Paso</span>
                <h2 className="text-3xl md:text-5xl font-black text-gray-900">Tu envío en 3 etapas</h2>
            </div>

          <div className="relative grid md:grid-cols-3 gap-12">
            
            {/* Línea conectora (Desktop) */}
            <div className="hidden md:block absolute top-12 left-[16%] right-[16%] h-0.5 border-t-2 border-dashed border-orange-200 z-0" />

            {[
              { icon: <FaShoppingCart />, title: "Compras", step: "01", desc: "Compra en USA y envía a tu casillero gratuito." },
              { icon: <FaWarehouse />, title: "Recepción", step: "02", desc: "Recibimos, consolidamos y preparamos tu paquete." },
              { icon: <FaHome />, title: "Entrega", step: "03", desc: `Recibe en la puerta de tu casa en ${formattedDestino}.` },
            ].map((item, idx) => (
              <div
                key={idx}
                className="relative flex flex-col items-center text-center z-10 group"
              >
                {/* Círculo del icono */}
                <div className="relative w-24 h-24 bg-white rounded-full border-4 border-orange-50 shadow-xl flex items-center justify-center text-3xl text-gray-400 mb-8 group-hover:border-[#f58220] group-hover:text-[#f58220] transition-all duration-500 group-hover:scale-105">
                  {item.icon}
                  {/* Badge del número de paso */}
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-[#f58220] text-white rounded-full flex items-center justify-center font-bold text-sm shadow-md">
                    {item.step}
                  </div>
                </div>

                <h3 className="text-2xl font-bold mb-3 text-gray-900">{item.title}</h3>
                <p className="text-gray-500 max-w-xs mx-auto">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* === TESTIMONIOS === */}
      <section className="py-24 bg-slate-50 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-6">
            <div 
                className="text-center mb-16"
            >
                <h2 className="text-3xl md:text-5xl font-extrabold text-[#1a1a1a]">
                Experiencias Reales
                </h2>
            </div>
            <Testimonials />
        </div>
      </section>

      {/* === CTA FINAL: Glassmorphism Dark Theme (Para contraste) === */}
      <section className="relative py-28 px-6 overflow-hidden bg-[#1a1a1a]">
        
        {/* Elementos naranjas brillantes de fondo */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#f58220] opacity-20 blur-[120px] rounded-full translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#f58220] opacity-10 blur-[100px] rounded-full -translate-x-1/2 translate-y-1/2"></div>

        <div
          className="relative z-10 max-w-4xl mx-auto text-center"
        >
          <h2 className="text-4xl md:text-6xl font-black text-white mb-6 tracking-tight">
            ¿Listo para enviar a {formattedDestino}?
          </h2>
          <p className="text-xl text-gray-400 mb-10 font-light max-w-2xl mx-auto">
            Únete a miles de clientes que confían en Globus Cargo. Cotiza en segundos y obtén tu casillero gratis hoy mismo.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-5">
            <a
              href="/cotizar"
              className="px-10 py-5 bg-[#f58220] hover:bg-[#ff8f33] text-white font-bold text-xl rounded-full shadow-lg shadow-orange-500/20 transition-all transform hover:scale-105"
            >
              Calcular Envío
            </a>
            <a
              href="https://wa.me/573001112233"
              target="_blank"
              rel="noopener noreferrer"
              className="px-10 py-5 bg-transparent border border-gray-700 text-white hover:bg-white hover:text-black font-semibold text-xl rounded-full transition-all duration-300"
            >
              Contactar Soporte
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
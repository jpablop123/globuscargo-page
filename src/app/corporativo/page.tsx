"use client";

import { motion } from "framer-motion";
import { Montserrat } from "next/font/google";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import Image from "next/image";
import globusLogo from "@/assets/img/logo/globuswhite.png"; // Logo blanco para contraste
import {
  Handshake,
  Building2,
  TrendingUp,
  Briefcase,
  CheckCircle2,
  ArrowRight,
  BarChart3,
  Users
} from "lucide-react";

const montserrat = Montserrat({ subsets: ["latin"], weight: ["400", "500", "600", "700", "800"] });

const WHATSAPP_NUMBER = "573001112233";

// Variantes de animación
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay, ease: "easeOut" },
  }),
};

export default function EmpresasPage() {
  const mensaje = encodeURIComponent(
    "Hola 👋, estoy interesado en las soluciones empresariales de Globus Cargo. Quisiera obtener más información sobre las tarifas corporativas."
  );
  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${mensaje}`;

  const beneficios = [
    {
      icon: TrendingUp,
      title: "Tarifas Preferenciales",
      desc: "Accede a precios por volumen diseñados para maximizar tu margen de ganancia."
    },
    {
      icon: Users,
      title: "Atención VIP",
      desc: "Ejecutivo de cuenta asignado para gestionar tus operaciones día a día."
    },
    {
      icon: BarChart3,
      title: "Control Total",
      desc: "Plataforma de gestión para seguimiento de múltiples envíos en tiempo real."
    }
  ];

  return (
    <main className={`${montserrat.className} bg-slate-50 text-gray-800 selection:bg-[#f58220] selection:text-white`}>
      <Header />

      {/* === HERO: Estilo Premium Naranja === */}
      <section className="relative pt-44 pb-32 px-6 text-center overflow-hidden bg-[#f58220]">
        {/* Fondo Gradiente y Textura */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#f58220] via-[#ff9a44] to-[#e07116]"></div>
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle, #fff 1.5px, transparent 1.5px)', backgroundSize: '24px 24px' }}></div>
        
        {/* Decoración flotante */}
        <motion.div animate={{ rotate: 360 }} transition={{ duration: 120, repeat: Infinity, ease: "linear" }} className="absolute -top-[50%] -right-[20%] w-[800px] h-[800px] border border-white/10 rounded-full border-dashed opacity-30 pointer-events-none"></motion.div>

        <div className="relative z-10 max-w-4xl mx-auto text-white">
          <motion.div 
            initial="hidden" 
            animate="visible" 
            variants={fadeInUp}
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-6 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-sm font-bold tracking-wide shadow-sm">
                <Building2 size={16} /> Soluciones B2B
            </div>

            <h1 className="text-4xl md:text-6xl font-black mb-6 tracking-tight drop-shadow-sm leading-tight">
              Logística Estratégica <br/> para tu <span className="text-orange-100">Empresa</span>
            </h1>
            
            <p className="text-xl text-orange-50 max-w-2xl mx-auto leading-relaxed font-medium mb-10">
              Impulsa tu crecimiento con tarifas corporativas, alianzas estratégicas y una red logística internacional diseñada para negocios.
            </p>

            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white text-[#f58220] px-10 py-4 rounded-xl font-bold text-lg shadow-lg hover:bg-orange-50 transition-all"
            >
              Hablar con un Asesor B2B <ArrowRight size={20}/>
            </motion.a>
          </motion.div>
        </div>
      </section>

      {/* === TARIFAS Y BENEFICIOS (Cards) === */}
      <section className="py-24 px-6 relative z-10 -mt-20">
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8">
            {beneficios.map((item, i) => (
                <motion.div
                    key={i}
                    initial="hidden"
                    whileInView="visible"
                    custom={i * 0.1}
                    variants={fadeInUp}
                    viewport={{ once: true }}
                    className="bg-white p-8 rounded-3xl shadow-xl shadow-gray-200/50 border border-white hover:border-orange-100 hover:shadow-2xl transition-all duration-300 group"
                >
                    <div className="w-14 h-14 bg-orange-50 rounded-2xl flex items-center justify-center text-[#f58220] mb-6 group-hover:bg-[#f58220] group-hover:text-white transition-colors">
                        <item.icon size={28} />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{item.desc}</p>
                </motion.div>
            ))}
        </div>
      </section>

      {/* === SECCIÓN DE VALOR (Split Layout) === */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
         <div className="bg-white rounded-[2.5rem] shadow-sm border border-gray-100 overflow-hidden">
            <div className="grid lg:grid-cols-2">
                
                {/* Columna Texto */}
                <div className="p-10 md:p-16 flex flex-col justify-center">
                    <span className="text-[#f58220] font-bold tracking-widest uppercase text-xs mb-2 block">Optimización de Costos</span>
                    <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-6">
                        Reduce hasta un 30% en costos logísticos.
                    </h2>
                    <p className="text-gray-600 mb-8 text-lg leading-relaxed">
                        Si tu empresa realiza envíos frecuentes o maneja grandes volúmenes, diseñamos un plan a medida que se ajusta a tu operación, no al revés.
                    </p>
                    
                    <ul className="space-y-4">
                        {[
                            "Consolidación de carga sin costo extra",
                            "Facturación flexible (Mensual o por lote)",
                            "Soporte prioritario 24/7"
                        ].map((txt, i) => (
                            <li key={i} className="flex items-center gap-3 font-medium text-gray-700">
                                <CheckCircle2 className="text-[#f58220]" size={20} />
                                {txt}
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Columna Visual */}
                <div className="bg-orange-50 p-10 md:p-16 flex items-center justify-center relative overflow-hidden">
                     {/* Círculos decorativos */}
                     <div className="absolute top-0 right-0 w-64 h-64 bg-[#f58220] opacity-10 rounded-full blur-3xl translate-x-1/3 -translate-y-1/3"></div>
                     <div className="absolute bottom-0 left-0 w-40 h-40 bg-[#f58220] opacity-10 rounded-full blur-3xl -translate-x-1/3 translate-y-1/3"></div>

                     <div className="relative z-10 bg-white p-8 rounded-3xl shadow-xl w-full max-w-sm border border-gray-100 text-center">
                        <div className="inline-flex p-4 bg-orange-100 text-[#f58220] rounded-full mb-4">
                            <Briefcase size={32} />
                        </div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-1">Cuenta Corporate</h3>
                        <p className="text-sm text-gray-500 mb-6">Acceso exclusivo</p>
                        
                        <div className="space-y-3">
                            <div className="h-2 bg-gray-100 rounded-full w-full overflow-hidden">
                                <div className="h-full bg-[#f58220] w-3/4"></div>
                            </div>
                            <div className="flex justify-between text-xs font-bold text-gray-400 uppercase">
                                <span>Eficiencia</span>
                                <span className="text-[#f58220]">Alta</span>
                            </div>
                        </div>
                     </div>
                </div>
            </div>
         </div>
      </section>

      {/* === ALIANZAS === */}
      <section className="bg-[#1a1a1a] py-24 px-6 text-center relative overflow-hidden">
         <div className="absolute inset-0 bg-[#f58220] opacity-5" style={{ backgroundImage: 'radial-gradient(#fff 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>
         
         <div className="relative z-10 max-w-4xl mx-auto">
            <div className="w-16 h-16 mx-auto bg-white/10 rounded-full flex items-center justify-center text-[#f58220] mb-8 backdrop-blur-md border border-white/10">
                <Handshake size={32} />
            </div>
            
            <h2 className="text-3xl md:text-5xl font-black text-white mb-6">Alianzas Estratégicas</h2>
            <p className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto font-light">
                Si representas una marca o empresa que busca una red logística confiable entre EE.UU. y Latinoamérica, colaboremos para crecer juntos.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-10 py-4 bg-[#f58220] hover:bg-[#e07116] text-white font-bold rounded-full shadow-lg shadow-orange-900/40 transition-all"
                >
                  Propuesta Comercial
                </a>
                <a
                  href="/contacto"
                  className="px-10 py-4 bg-transparent border border-gray-700 text-white hover:bg-white hover:text-black font-bold rounded-full transition-all"
                >
                  Más Información
                </a>
            </div>
         </div>
      </section>

      {/* === CTA FINAL (Footer Connection) === */}
      <section className="relative text-center py-20 bg-white">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto relative z-10 px-6"
        >
          <Image
            src={globusLogo}
            alt="Globus Cargo"
            width={120}
            height={40}
            className="mx-auto mb-6 opacity-80 invert" // Invertimos para que se vea oscuro en fondo blanco (si el logo es blanco) o usamos la versión color
          />
          <h2 className="text-3xl font-bold text-gray-900 mb-2">
            Tu aliado logístico global
          </h2>
          <p className="text-gray-500 text-sm">
            © Globus Cargo — Conectando negocios sin fronteras
          </p>
        </motion.div>
      </section>

      <Footer />
    </main>
  );
}
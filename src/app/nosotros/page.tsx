"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Montserrat } from "next/font/google";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import foto from "@/assets/img/logo/fotosreveladas/AP0A0668.jpg";
import {
  FaHandshake,
  FaRocket,
  FaShieldAlt,
  FaGlobeAmericas,
  FaQuoteLeft,
} from "react-icons/fa";

import globusLogo from "@/assets/img/logo/globuslogo.png";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

// Variantes de animación reutilizables
const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay, ease: "easeOut" },
  }),
};

export default function NosotrosPage() {
  return (
    <main className={`${montserrat.className} bg-slate-50 text-gray-800 selection:bg-[#f58220] selection:text-white`}>
      <Header />

      {/* === HERO: Profundidad y Textura === */}
      <section className="relative pt-48 pb-32 px-6 text-center overflow-hidden bg-[#f58220]">
        
        {/* Fondo Gradiente Rico */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#f58220] via-[#ff9a44] to-[#e07116]"></div>
        
        {/* Patrón de puntos (Tech/Global feel) */}
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle, #fff 1.5px, transparent 1.5px)', backgroundSize: '24px 24px' }}></div>

        {/* Logo Decorativo Gigante */}
        <div className="absolute inset-0 flex justify-center items-center pointer-events-none select-none opacity-[0.05]">
           <Image src={globusLogo} alt="Marca de agua" width={1000} height={1000} className="object-contain scale-150" />
        </div>

        {/* Elementos abstractos animados */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 100, repeat: Infinity, ease: "linear" }}
          className="absolute -top-[200px] -right-[200px] w-[600px] h-[600px] border border-white/20 rounded-full border-dashed opacity-40 pointer-events-none"
        />

        <div className="relative z-10 max-w-5xl mx-auto">
            <motion.div
                initial="hidden"
                animate="visible"
                variants={fadeInUp}
            >
                <div className="inline-block px-4 py-1.5 mb-6 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white text-sm font-medium tracking-wide">
                    Desde 2010 conectando mundos
                </div>

                <h1 className="text-5xl md:text-7xl font-extrabold mb-6 text-white tracking-tight leading-tight drop-shadow-sm">
                Familia con Visión <br/> <span className="text-orange-100">Global</span>
                </h1>

                <p className="text-xl md:text-2xl text-orange-50 max-w-3xl mx-auto leading-relaxed font-light">
                En Globus Cargo, transformamos la logística internacional en una experiencia <span className="font-semibold text-white">humana, cercana y confiable</span>.
                </p>
            </motion.div>
        </div>
      </section>

      {/* === HISTORIA: Diseño Editorial === */}
      <section className="py-24 px-6 overflow-hidden">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Texto con Estilo */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={fadeInUp}
            viewport={{ once: true }}
            className="relative z-10"
          >
            <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-1 bg-[#f58220]"></div>
                <span className="text-[#f58220] font-bold uppercase tracking-widest text-sm">Nuestros Orígenes</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-8 leading-tight">
              Más que envíos, <br/> entregamos promesas.
            </h2>
            
            <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
                <p>
                Globus Cargo nació como un sueño familiar en Miami, inspirado por una necesidad simple pero poderosa: ofrecer un servicio logístico donde la <strong>confianza fuera el centro de todo</strong>.
                </p>
                
                {/* Blockquote Estilizado */}
                <div className="bg-orange-50 border-l-4 border-[#f58220] p-6 rounded-r-xl italic text-gray-700 relative">
                    <FaQuoteLeft className="absolute top-4 left-4 text-[#f58220]/20 text-4xl -z-10" />
                    "Desde el primer envío, nuestro objetivo ha sido simplificar la forma en que las personas en Latinoamérica acceden a productos del mundo."
                </div>

                <p>
                Hoy, combinamos tecnología de punta con los valores de nuestras raíces: honestidad, cercanía y responsabilidad.
                </p>
            </div>
          </motion.div>

          {/* Imagen con Marco Creativo */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            {/* Elemento decorativo detrás */}
            <div className="absolute top-10 -right-10 w-full h-full border-2 border-[#f58220] rounded-[2rem] hidden md:block z-0"></div>
            
            <div className="relative z-10 rounded-[2rem] overflow-hidden shadow-2xl shadow-orange-900/10 group">
                <Image
                src={foto}
                alt="Equipo Globus Cargo"
                width={800}
                height={600}
                className="object-cover w-full h-[500px] transition-transform duration-700 group-hover:scale-105"
                />
                {/* Overlay gradiente */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80"></div>
                
                {/* Texto sobre imagen */}
                <div className="absolute bottom-8 left-8 text-white">
                    <p className="font-bold text-xl">El Equipo Globus</p>
                    <p className="text-sm text-white/80">Comprometidos contigo</p>
                </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* === MISIÓN & VISIÓN: Tarjetas Clean === */}
      <section className="bg-white py-24 relative">
         {/* Fondo sutil */}
         <div className="absolute top-0 left-0 w-full h-full bg-slate-50 skew-y-3 transform origin-top-left -z-10"></div>

        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-8">
            {[
                { title: "Nuestra Misión", desc: "Facilitar el comercio internacional a través de una experiencia logística simple, rápida y confiable. Queremos que cada cliente sienta que detrás de su envío hay una familia cuidando cada detalle.", color: "border-l-orange-500" },
                { title: "Nuestra Visión", desc: "Convertirnos en la red logística más confiable de Latinoamérica, manteniendo siempre la esencia familiar que nos diferencia: cercanía, calidez y compromiso real con nuestros clientes.", color: "border-l-blue-500" } // Un pequeño toque de azul complementario o mantener naranja
            ].map((item, i) => (
                 <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.2 }}
                    viewport={{ once: true }}
                    className="bg-white p-10 rounded-3xl shadow-lg border border-gray-100 hover:shadow-2xl transition-all duration-300 relative overflow-hidden group"
                  >
                    {/* Borde de acento lateral */}
                    <div className="absolute left-0 top-0 bottom-0 w-2 bg-[#f58220]"></div>
                    
                    {/* Icono gigante de fondo */}
                    <FaRocket className="absolute -right-5 -bottom-5 text-9xl text-gray-50 opacity-50 group-hover:scale-110 transition-transform duration-500 rotate-12" />

                    <h3 className="text-3xl font-bold text-gray-900 mb-4 relative z-10">{item.title}</h3>
                    <p className="text-gray-600 leading-relaxed text-lg relative z-10">
                        {item.desc}
                    </p>
                  </motion.div>
            ))}
        </div>
      </section>

      {/* === VALORES: Estilo Bento Grid === */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-[#f58220] font-bold tracking-wider uppercase text-sm mb-2 block">ADN Corporativo</span>
          <h2 className="text-3xl md:text-5xl font-black text-gray-900">
            Nuestros Pilares
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            {
              icon: <FaHandshake />,
              title: "Confianza",
              text: "Transparencia total en cada paso del proceso.",
            },
            {
              icon: <FaShieldAlt />,
              title: "Seguridad",
              text: "Cuidamos cada paquete como si fuera nuestro.",
            },
            {
              icon: <FaRocket />,
              title: "Innovación",
              text: "Tecnología de punta para un servicio ágil.",
            },
            {
              icon: <FaGlobeAmericas />,
              title: "Conexión",
              text: "Unimos fronteras, familias y negocios.",
            },
          ].map((val, i) => (
            <motion.div
              key={i}
              initial="hidden"
              whileInView="visible"
              custom={i * 0.1}
              variants={fadeInUp}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-3xl border border-gray-100 shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-300 text-center group"
            >
              <div className="w-20 h-20 mx-auto mb-6 bg-orange-50 rounded-full flex items-center justify-center text-3xl text-[#f58220] group-hover:bg-[#f58220] group-hover:text-white transition-colors duration-300 shadow-inner">
                {val.icon}
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-3">
                {val.title}
              </h4>
              <p className="text-gray-500 text-sm leading-relaxed">{val.text}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* === CTA FINAL: Dark Theme Contrast === */}
      <section className="relative py-28 px-6 text-center overflow-hidden bg-[#1a1a1a]">
        {/* Luces de fondo */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#f58220] opacity-10 blur-[100px] rounded-full translate-x-1/2 -translate-y-1/2"></div>
        
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto relative z-10"
        >
          <h2 className="text-4xl md:text-5xl font-black text-white mb-6 tracking-tight">
            Únete a la Familia Globus
          </h2>
          <p className="text-xl text-gray-400 mb-10 font-light">
            Más que una empresa de envíos, somos un equipo apasionado por conectar historias. Empieza tu viaje con nosotros.
          </p>
          
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            href="https://globuscargo.us/#/sign-up?a=cec123e3-17bf-4be8-8f46-1fe6ec3d31b7"
            className="inline-block bg-[#f58220] text-white px-12 py-4 rounded-full font-bold text-lg shadow-lg shadow-orange-900/30 hover:bg-[#e07116] transition-all"
          >
            Crear Casillero Gratuito
          </motion.a>
        </motion.div>
      </section>

      <Footer />
    </main>
  );
}
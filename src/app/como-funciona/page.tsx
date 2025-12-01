"use client";

import { motion } from "framer-motion";
import { Montserrat } from "next/font/google";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import Videos from "@/components/layout/videos";
import Image from "next/image";
import globusLogo from "@/assets/img/logo/globus22.png";
import {
  FaUserPlus,
  FaShoppingCart,
  FaBoxOpen,
  FaSmileBeam,
  FaGlobeAmericas,
} from "react-icons/fa";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"], // Añadí más pesos para mejor jerarquía
});

// Variantes de animación para reutilizar
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay, ease: "easeOut" },
  }),
};

const pasos = [
  {
    icon: <FaUserPlus />,
    titulo: "1. Crea tu cuenta Globus",
    descripcion:
      "Regístrate gratis y obtén tu dirección personal en Miami. Tu punto de partida para comprar en EE. UU.",
  },
  {
    icon: <FaShoppingCart />,
    titulo: "2. Compra donde quieras",
    descripcion:
      "Usa tu dirección Globus en el checkout de Amazon, Shein, etc. Nosotros recibimos tus compras en Miami.",
  },
  {
    icon: <FaBoxOpen />,
    titulo: "3. Gestiona tus paquetes",
    descripcion:
      "Desde tu panel, consolida tus compras y selecciona envío aéreo o marítimo con un solo clic.",
  },
  {
    icon: <FaGlobeAmericas />,
    titulo: "4. Recibe en tu puerta",
    descripcion:
      "Despachamos a Colombia o Latinoamérica con seguimiento en tiempo real hasta la puerta de tu casa.",
  },
];

export default function ComoFuncionaPage() {
  return (
    <main className={`${montserrat.className} bg-slate-50 text-gray-800 selection:bg-[#f58220] selection:text-white`}>
      <Header />

      {/* === HERO: Más textura y profundidad === */}
      <section className="relative pt-44 pb-32 px-6 text-center overflow-hidden bg-[#f58220]">
        {/* Fondo Gradiente Rico */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#f58220] via-[#ff9a44] to-[#e07116]"></div>
        
        {/* Patrón de fondo tecnológico (Dots) */}
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle, #fff 1.5px, transparent 1.5px)', backgroundSize: '24px 24px' }}></div>

        {/* Elementos decorativos abstractos */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
            <motion.div animate={{ rotate: 360 }} transition={{ duration: 120, repeat: Infinity, ease: "linear" }} className="absolute -top-[40%] -right-[40%] w-[80%] pt-[80%] rounded-full border-2 border-white/10 border-dashed"></motion.div>
            <motion.div animate={{ rotate: -360 }} transition={{ duration: 120, repeat: Infinity, ease: "linear" }} className="absolute -bottom-[40%] -left-[40%] w-[80%] pt-[80%] rounded-full border-2 border-white/10 border-dashed"></motion.div>
        </div>


        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          className="relative z-20 max-w-4xl mx-auto"
        >
          {/* Logo con animación de flotar */}
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="inline-block"
          >
            <Image
              src={globusLogo}
              alt="Globus Cargo"
              width={160}
              height={160}
              className="mx-auto mb-8 drop-shadow-xl"
            />
          </motion.div>
          
          <h1 className="text-5xl md:text-7xl font-extrabold mb-6 text-white tracking-tight drop-shadow-sm">
            Tu puente directo <br/> desde <span className="text-orange-100">USA</span> hasta <span className="text-orange-100">Casa</span>
          </h1>
          <p className="text-xl text-orange-50 max-w-2xl mx-auto leading-relaxed font-medium">
            Simplificamos la logística internacional. Descubre cómo traer tus compras del mundo es más fácil de lo que imaginas.
          </p>
        </motion.div>
      </section>

      {/* === SECCIÓN DE PASOS: Mayor contraste y claridad === */}
      <section className="py-24 px-6 relative overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10">
            
          <div className="text-center mb-24">
            <span className="text-[#f58220] font-bold tracking-wider uppercase text-sm mb-3 block">Proceso Simplificado</span>
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">
              De la tienda a tus manos
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                Hemos optimizado cada etapa para que tu única preocupación sea elegir qué comprar.
            </p>
          </div>

          <div className="relative grid md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 items-start">
            
            {/* Línea conectora (Visible solo en Desktop) */}
            <div className="hidden lg:block absolute top-[60px] left-[15%] right-[15%] h-[2px] border-t-2 border-dashed border-orange-200 z-0"></div>

            {pasos.map((paso, index) => (
              <motion.div
                key={index}
                initial="hidden"
                whileInView="visible"
                custom={index * 0.2}
                variants={fadeInUp}
                viewport={{ once: true, margin: "-50px" }}
                className="relative flex flex-col items-center text-center group"
              >
                {/* Icono en círculo con estilo */}
                <div className="relative z-10 w-28 h-28 mb-8 rounded-full bg-white border-4 border-orange-50 shadow-xl flex items-center justify-center text-4xl text-[#f58220] group-hover:scale-110 group-hover:border-[#f58220] transition-all duration-300">
                  {paso.icon}
                  {/* Número del paso */}
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-[#f58220] text-white rounded-full flex items-center justify-center font-bold text-sm shadow-sm border-2 border-white font-montserrat">
                    {index + 1}
                  </div>
                </div>

                {/* Tarjeta de Texto */}
                <div className="bg-white p-8 rounded-3xl shadow-lg border border-gray-100 w-full group-hover:shadow-2xl group-hover:-translate-y-1 transition-all duration-300 relative overflow-hidden">
                   {/* Borde superior naranja */}
                   <div className="absolute top-0 left-0 w-full h-1 bg-[#f58220]"></div>
                   
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {paso.titulo}
                  </h3>
                  <p className="text-gray-600 text-base leading-relaxed">
                    {paso.descripcion}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* === SECCIÓN DE VIDEOS (Separación limpia) === */}
      <section className="bg-white border-t border-slate-100">
         <Videos />
      </section>

      {/* === EXPERIENCIA FINAL: Limpio y Directo === */}
      <section className="relative bg-white py-28 px-6 text-center overflow-hidden">
        {/* Fondo sutil con formas orgánicas */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none opacity-30">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-orange-50 rounded-full blur-3xl"></div>
        </div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={fadeInUp}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto relative z-10"
        >
          <div className="inline-flex p-4 bg-orange-100 text-[#f58220] rounded-full mb-8 shadow-sm">
            <FaSmileBeam className="text-5xl" />
          </div>
          
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6 tracking-tight">
            Listo para empezar?
          </h2>
          <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto font-medium">
            Únete a la comunidad de Globus Cargo hoy mismo. Tu casillero es gratuito y la tranquilidad no tiene precio.
          </p>

          <motion.a
            whileHover={{ scale: 1.05, boxShadow: "0 20px 25px -5px rgb(245 130 32 / 0.3)" }}
            whileTap={{ scale: 0.98 }}
            href="https://globuscargo.us/#/sign-up?a=cec123e3-17bf-4be8-8f46-1fe6ec3d31b7"
            className="inline-flex items-center justify-center bg-[#f58220] text-white px-12 py-5 rounded-full font-bold text-xl shadow-lg transition-all"
          >
            Obtener mi Casillero Gratis
          </motion.a>
        </motion.div>
      </section>

      <Footer />
    </main>
  );
}
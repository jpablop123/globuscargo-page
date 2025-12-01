"use client";

import { motion } from "framer-motion";
import { Montserrat } from "next/font/google";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
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
  weight: ["400", "600", "700"],
});

const pasos = [
  {
    icon: <FaUserPlus className="text-[#f58220] text-4xl md:text-5xl" />,
    titulo: "1. Crea tu cuenta Globus",
    descripcion:
      "Regístrate gratis y obtén tu dirección personal en Miami. Tu punto de partida para comprar en cualquier tienda de EE. UU.",
  },
  {
    icon: <FaShoppingCart className="text-[#f58220] text-4xl md:text-5xl" />,
    titulo: "2. Compra donde quieras",
    descripcion:
      "Usa tu dirección Globus en el checkout de Amazon, Best Buy, Shein o cualquier tienda. Nosotros recibimos tus compras en Miami.",
  },
  {
    icon: <FaBoxOpen className="text-[#f58220] text-4xl md:text-5xl" />,
    titulo: "3. Recibimos tus paquetes",
    descripcion:
      "Desde tu cuenta podrás gestionar tus paquetes y seleccionar entre envío aéreo o marítimo, según tu necesidad.",
  },
  {
    icon: <FaGlobeAmericas className="text-[#f58220] text-4xl md:text-5xl" />,
    titulo: "4. Te lo entregamos en tu puerta",
    descripcion:
      "Desde Miami hasta tu hogar en Colombia o Latinoamérica, con seguimiento en tiempo real y atención personalizada.",
  },
];

export default function ComoFuncionaPage() {
  return (
    <main className={`${montserrat.className} bg-[#F9FAFB] text-[#2d2d2d]`}>
      <Header />

      {/* === HERO === */}
      <section className="relative bg-gradient-to-r from-[#f58220] to-[#fb923c] text-white pt-48 pb-28 px-6 text-center overflow-hidden">
        {/* Logo translúcido grande de fondo */}
        <div className="absolute inset-0 opacity-[0.07] flex justify-center items-center pointer-events-none select-none">
          <Image
            src={globusLogo}
            alt="Marca Globus Cargo"
            width={1200}
            height={1200}
            className="object-contain scale-150"
          />
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="relative z-20"
        >
          <Image
            src={globusLogo}
            alt="Globus Cargo"
            width={180}
            height={180}
            className="mx-auto mb-6 opacity-90"
          />
          <h1 className="text-4xl md:text-6xl font-extrabold mb-4 drop-shadow-lg">
            Así funciona{" "}
            <span className="text-white/90 font-bold">Globus Cargo</span>
          </h1>
          <p className="text-base md:text-lg text-white/90 max-w-2xl mx-auto leading-relaxed">
            Conectamos tus compras en EE. UU. con tu hogar en Latinoamérica.  
            Enviar nunca fue tan fácil.
          </p>
        </motion.div>

        {/* Halo animado elegante */}
        <motion.div
          animate={{ scale: [1, 1.25, 1], opacity: [0.3, 0.45, 0.3] }}
          transition={{ repeat: Infinity, duration: 8 }}
          className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.15),transparent_70%)]"
        />
      </section>

      {/* === SECCIÓN DE PASOS === */}
      <section className="max-w-7xl mx-auto px-6 md:px-10 py-24 relative">
        {/* Línea decorativa horizontal */}
        <div className="hidden lg:block absolute top-[50%] left-0 right-0 h-[3px] bg-[#f58220]/15 rounded-full"></div>

        <div className="text-center mb-20 relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            De tus compras al mundo, en solo 4 pasos
          </h2>
          <p className="text-gray-600 mt-3 max-w-2xl mx-auto leading-relaxed">
            Miles de usuarios ya disfrutan comprar sin fronteras con Globus Cargo.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 relative z-10">
          {pasos.map((paso, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: index * 0.15 }}
              viewport={{ once: true }}
              className="bg-white/80 backdrop-blur-lg border border-gray-100 p-8 rounded-3xl shadow-md hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 text-center flex flex-col items-center relative"
            >
              <div className="mb-5">{paso.icon}</div>
              <h3 className="text-lg md:text-xl font-semibold text-gray-900 mb-2">
                {paso.titulo}
              </h3>
              <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                {paso.descripcion}
              </p>

              {index < pasos.length - 1 && (
                <div className="hidden lg:block absolute right-[-25px] top-1/2 transform -translate-y-1/2 w-5 h-5 bg-[#f58220] rounded-full border-4 border-white shadow-lg" />
              )}
            </motion.div>
          ))}
        </div>
      </section>

      {/* === EXPERIENCIA FINAL === */}
      <section className="relative bg-white py-24 px-6 text-center overflow-hidden">
        {/* Logo de fondo sutil */}
        <div className="absolute inset-0 opacity-[0.05] flex justify-center items-center select-none">
          <Image
            src={globusLogo}
            alt="Globus Marca de fondo"
            width={1200}
            height={1200}
            className="object-contain scale-150"
          />
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto relative z-10"
        >
          <FaSmileBeam className="text-[#f58220] text-6xl mx-auto mb-6" />
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Diseñado para hacerte la vida más fácil
          </h2>
          <p className="text-gray-600 mb-10 max-w-2xl mx-auto leading-relaxed">
            En Globus Cargo cada detalle cuenta. Nuestro compromiso es hacer que tus envíos sean rápidos, seguros y sin estrés.  
            Tú compras, nosotros lo hacemos llegar.
          </p>

          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            href="https://globuscargo.us/#/sign-up?a=cec123e3-17bf-4be8-8f46-1fe6ec3d31b7"
            className="inline-block bg-[#f58220] text-white px-10 py-3 rounded-full font-semibold text-lg shadow-md hover:bg-[#e07116] transition-all"
          >
            Crear mi casillero gratuito
          </motion.a>
        </motion.div>

        {/* Sello pequeño de marca */}
        <Image
          src={globusLogo}
          alt="Globus Cargo"
          width={140}
          height={140}
          className="absolute bottom-6 right-6 opacity-10"
        />
      </section>

      <Footer />
    </main>
  );
}
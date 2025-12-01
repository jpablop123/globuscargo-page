"use client";

import { Montserrat } from "next/font/google";
import { motion } from "framer-motion";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import { FaUserShield, FaSignInAlt } from "react-icons/fa"; 
import Image from "next/image";
import globusLogo from "@/assets/img/logo/globusorange.png"; // 🟠 logo Globus

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

export default function RastrearPaquetePage() {
  // *** La lógica de seguimiento se elimina completamente. ***

  return (
    <main className={`${montserrat.className} bg-[#F9F9F9] text-[#333]`}>
      <Header />

      {/* === HERO === */}
      <section className="relative bg-gradient-to-r from-[#f58220] to-[#fb923c] text-white pt-44 pb-24 px-6 text-center overflow-hidden">
        {/* Logo translúcido de fondo */}
        <div className="absolute inset-0 opacity-[0.07] flex justify-center items-center select-none pointer-events-none">
          <Image
            src={globusLogo}
            alt="Marca Globus Cargo"
            width={1200}
            height={1200}
            className="object-contain scale-150"
          />
        </div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-extrabold mb-3 relative z-10"
        >
          Rastrea tu paquete
        </motion.h1>
        <p className="text-base md:text-lg text-white/90 max-w-2xl mx-auto relative z-10">
          Tu información de seguimiento está disponible en tu cuenta.
        </p>

        {/* Halo suave */}
        <motion.div
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.45, 0.3] }}
          transition={{ repeat: Infinity, duration: 8 }}
          className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.15),transparent_70%)]"
        />
      </section>

      {/* === AVISO DE INICIO DE SESIÓN === */}
      <section className="max-w-3xl mx-auto -mt-20 px-5 md:px-8 relative z-10 pb-32">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="relative backdrop-blur-xl bg-white/80 border border-white/40 shadow-xl rounded-3xl p-10 md:p-16 text-center overflow-hidden flex flex-col items-center"
        >
          {/* 🟠 Logo Globus centrado en el borde inferior */}
          <div className="absolute bottom-2 left-1/2 -translate-x-1/2">
            <Image
              src={globusLogo}
              alt="Globus Cargo"
              width={110}
              height={110}
              className="opacity-80"
            />
          </div>

          <div className="relative z-10">
            <FaUserShield className="text-[#f58220] text-6xl mx-auto mb-6" />
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Rastreo Personalizado y Seguro
            </h2>

            <p className="text-gray-700 text-base md:text-lg max-w-xl mx-auto mb-8">
              Para rastrear tu paquete de forma segura y ver todos los detalles, por favor{" "}
              <span className="font-bold text-gray-900">inicia sesión</span> en tu sistema Globus Cargo.
            </p>

            <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
                // URL de Login proporcionada por el usuario
                href="https://www.globuscargo.us/#/sign-in" 
                target="_blank" // Abrir en una nueva pestaña para no interrumpir el flujo actual
                rel="noopener noreferrer"
                className="inline-flex items-center bg-[#f58220] text-white px-10 py-3 rounded-full font-semibold text-lg shadow-md hover:bg-[#e07116] transition-all"
            >
                <FaSignInAlt className="mr-2" />
                Iniciar Sesión y Rastrear
            </motion.a>
            
            <p className="mt-8 text-gray-500 text-sm">
                Si no tienes credenciales de acceso, o necesitas asistencia, 
                <span className="font-semibold"> contacta a tu asesor Globus Cargo</span>.
            </p>
          </div>
        </motion.div>

        {/* === DISCLAIMER === */}
        <div className="mt-16 text-center text-xs md:text-sm text-gray-500 max-w-2xl mx-auto leading-relaxed">
          <p>
            Esta medida asegura la privacidad y exactitud de la información de tu envío.
          </p>
        </div>
      </section>

      <Footer />
    </main>
  );
}
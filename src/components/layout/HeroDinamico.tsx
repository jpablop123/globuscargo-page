"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import globusLogo from "@/assets/img/logo/globusorange.png";
import { FaBox, FaShieldAlt, FaGlobeAmericas } from "react-icons/fa";

export default function HeroDinamico({
  origen = "usa",
  destino = "colombia",
}: {
  origen?: string;
  destino?: string;
}) {
  const format = (str: string) =>
    str.charAt(0).toUpperCase() + str.slice(1).replaceAll("-", " ");

  return (
    <section className="relative bg-gradient-to-br from-[#f58220] via-[#ff8c42] to-[#faae4b] text-white pt-48 pb-32 px-6 text-center overflow-hidden">
      {/* === FONDO CON LOGO ANIMADO === */}
      <motion.div
        animate={{ scale: [1, 1.1, 1], opacity: [0.06, 0.1, 0.06] }}
        transition={{ repeat: Infinity, duration: 14, ease: "easeInOut" }}
        className="absolute inset-0 flex justify-center items-center pointer-events-none select-none"
      >
        <Image
          src={globusLogo}
          alt="Globus Cargo Marca"
          width={1500}
          height={1500}
          className="object-contain opacity-10 scale-150"
          priority
        />
      </motion.div>

      {/* === LOGO PRINCIPAL === */}
      <div className="relative z-10 flex justify-center mb-6">
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center"
        >
          <div className="relative">
            <Image
              src={globusLogo}
              alt="Globus Cargo"
              width={190}
              height={190}
              className="drop-shadow-[0_0_35px_rgba(255,255,255,0.4)] animate-pulse-slow"
            />
          </div>
          <p className="text-white/85 text-sm mt-3 tracking-widest uppercase font-medium">
            Tu envío, nuestra misión
          </p>
        </motion.div>
      </div>

      {/* === TÍTULO PRINCIPAL === */}
      <motion.h1
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl md:text-6xl font-extrabold mb-4 relative z-10 leading-tight drop-shadow-md"
      >
        Envíos desde{" "}
        <span className="text-white underline decoration-[#fff]/30 underline-offset-4">
          {format(origen)}
        </span>{" "}
        hacia{" "}
        <span className="text-[#fff] decoration-[#fff]/30 underline-offset-4 underline">
          {format(destino)}
        </span>
      </motion.h1>

      {/* === DESCRIPCIÓN === */}
      <motion.p
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.8 }}
        className="text-base md:text-lg text-white/95 max-w-2xl mx-auto leading-relaxed"
      >
        Conectamos tus compras con el mundo 🌎  
        Rápido, seguro y con cobertura nacional e internacional.
      </motion.p>

      {/* === ICONOS DE CONFIANZA === */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.8 }}
        className="flex flex-wrap justify-center gap-10 mt-14 text-white/90"
      >
        {[
          { Icon: FaShieldAlt, text: "Seguridad Garantizada" },
          { Icon: FaBox, text: "Casillero Gratuito" },
          { Icon: FaGlobeAmericas, text: "Cobertura Internacional" },
        ].map(({ Icon, text }, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.1 }}
            className="flex flex-col items-center transition-transform"
          >
            <div className="p-4 bg-white/10 rounded-full shadow-md mb-3">
              <Icon className="text-3xl text-white" />
            </div>
            <p className="text-sm font-medium">{text}</p>
          </motion.div>
        ))}
      </motion.div>

      {/* === CTA === */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.8 }}
        className="mt-16 flex flex-col sm:flex-row justify-center gap-4 z-10 relative"
      >
        <a
          href="https://globuscargo.us/#/sign-up?a=cec123e3-17bf-4be8-8f46-1fe6ec3d31b7"
          className="bg-white text-[#f58220] px-10 py-3 rounded-full font-semibold text-lg shadow-lg hover:bg-gray-100 hover:scale-105 transition-all duration-300"
        >
          Abrir Casillero 
        </a>
        <a
          href="https://wa.me/573001112233"
          target="_blank"
          rel="noopener noreferrer"
          className="border border-white text-white px-10 py-3 rounded-full font-semibold text-lg hover:bg-white/15 hover:scale-105 transition-all duration-300"
        >
          Hablar con Asesor 💬
        </a>
      </motion.div>

      {/* === ELEMENTOS DECORATIVOS === */}
      <motion.div
        animate={{ y: [-8, 8, -8], x: [0, -6, 0] }}
        transition={{ repeat: Infinity, duration: 6 }}
        className="absolute top-28 left-16 text-white/20 text-7xl"
      >
        <FaBox />
      </motion.div>

      <motion.div
        animate={{ x: [0, 15, 0], y: [0, -10, 0] }}
        transition={{ repeat: Infinity, duration: 7 }}
        className="absolute bottom-28 right-16 text-white/20 text-[6rem]"
      >
        <FaShieldAlt />
      </motion.div>
    </section>
  );
}
"use client";

import { motion } from "framer-motion";
import { Package, Plane, Ship, ShieldCheck, Search } from "lucide-react"; // Importamos 'Search' para el CTA
import { useState } from "react"; 
// Aunque useState se mantiene para la estructura, ya no se usa 'tracking'

const servicios = [
  {
    icon: Package,
    title: "Casillero en Miami",
    desc: "Compra en tus tiendas favoritas de EE. UU. y recibe en Colombia sin complicaciones.",
  },
  {
    icon: Plane,
    title: "Envío Aéreo",
    desc: "Transporte rápido y seguro para paquetes urgentes o de poco volumen.",
  },
  {
    icon: Ship,
    title: "Envío Marítimo",
    desc: "La mejor opción para grandes volúmenes y carga pesada.",
  },
  {
    icon: ShieldCheck,
    title: "Asesoría en Aduanas",
    desc: "Te guiamos con trámites y regulaciones para que no tengas sorpresas.",
  },
];

// URL de inicio de sesión de Globus Cargo
const LOGIN_URL = "https://www.globuscargo.us/#/sign-in";

export default function ServiciosConTracking() {
  // El estado 'tracking' y las funciones relacionadas con el input han sido eliminados del uso.
  // Mantenemos useState solo por convención si en el futuro se planea usar.

  return (
    <section className="relative py-28 px-6 bg-gradient-to-b from-white via-orange-50/40 to-white overflow-hidden">
      {/* Glow decorativo */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[900px] bg-orange-200/30 rounded-full blur-3xl -z-10" />

      <div className="max-w-6xl mx-auto text-center">
        {/* === SECCIÓN DE RASTREO (Ahora un CTA) === */}
        <motion.h2
          className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Rastrea tu envío
        </motion.h2>

        <motion.div
          className="bg-white/70 backdrop-blur-md border border-gray-200 shadow-xl 
                   rounded-3xl p-8 md:p-12 max-w-2xl mx-auto flex flex-col items-center"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
        >
          <Search size={40} className="text-[#f58220] mb-4" />
          
          <p className="text-lg text-gray-700 mb-6">
            Para garantizar la privacidad y ver el detalle completo de tu envío, el rastreo se realiza
            <span className="font-semibold text-gray-900"> iniciando sesión en nuestro sistema</span>.
          </p>

          <motion.a
            href={LOGIN_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-10 py-4 rounded-full bg-[#f58220] text-white font-semibold 
            shadow-lg hover:shadow-xl hover:scale-[1.03] active:scale-95 transition-all duration-300 text-lg"
          >
            Iniciar Sesión para Rastrear
          </motion.a>
        </motion.div>

        {/* === SERVICIOS === */}
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-gray-900 mt-28"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Nuestros Servicios
        </motion.h2>

        <div className="grid md:grid-cols-4 gap-10 mt-16">
          {servicios.map((s, i) => (
            <motion.div
              key={i}
              className="p-10 rounded-3xl bg-white/70 backdrop-blur-xl shadow-lg 
              hover:shadow-2xl transition-all duration-500 flex flex-col items-center text-center
              hover:-translate-y-2 border border-gray-100"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.15, duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="w-16 h-16 flex items-center justify-center rounded-2xl 
              bg-gradient-to-br from-[#f58220] to-orange-400 text-white shadow-lg mb-6">
                <s.icon size={30} />
              </div>
              <h3 className="text-xl font-semibold text-gray-900">{s.title}</h3>
              <p className="mt-4 text-gray-600 text-sm leading-relaxed">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
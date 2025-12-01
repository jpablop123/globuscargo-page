"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import globusWhite from "@/assets/img/logo/globuswhite.png";
import {
  ShieldCheck,
  Package,
  Clock,
  Headphones,
  Truck,
  Boxes,
} from "lucide-react";

const beneficios = [
  {
    icon: ShieldCheck,
    title: "Seguridad Garantizada",
    desc: "Tus envíos viajan asegurados y con manejo profesional desde la bodega hasta tu puerta.",
  },
  {
    icon: Package,
    title: "Casillero Gratuito en Miami",
    desc: "Obtén tu dirección en EE. UU. y recibe todas tus compras sin costo de registro.",
  },
  {
    icon: Truck,
    title: "Cobertura Nacional",
    desc: "Entregamos en todo Colombia: desde las principales ciudades hasta zonas rurales.",
  },
  {
    icon: Clock,
    title: "Envíos Express",
    desc: "Opciones aéreas rápidas para quienes necesitan inmediatez y seguimiento preciso.",
  },
  {
    icon: Boxes,
    title: "Consolidación Inteligente",
    desc: "Ahorra uniendo varios paquetes en un solo envío. Sin costos ocultos ni sorpresas.",
  },
  {
    icon: Headphones,
    title: "Soporte Personalizado",
    desc: "Te atendemos por WhatsApp o correo con respuestas reales, no bots.",
  },
];

export default function BenefitsPro() {
  return (
    <section className="relative py-24 px-6 overflow-hidden bg-[#AFAFAF] text-white">
      {/* === Fondo con logo gigante === */}
      <div className="absolute inset-0 opacity-[0.08] flex justify-center items-center select-none">
      <Image
  src={globusWhite}
  alt="Globus Cargo Logo Marca"
  width={900}
  height={900}
  className="object-contain scale-150"
  priority
/>
      </div>

      {/* === Gradiente sutil naranja === */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#f58220]/10 via-transparent to-transparent pointer-events-none" />

      {/* === Contenido === */}
      <div className="relative max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-5xl font-extrabold text-white drop-shadow-sm">
          Beneficios Exclusivos de{" "}
          <span className="text-[#f58220]">Globus Cargo</span>
        </h2>

        <p className="mt-4 max-w-2xl mx-auto text-white/90 text-base md:text-lg">
          Cada detalle de nuestro servicio está diseñado para que tus envíos sean
          más fáciles, rápidos y seguros.
        </p>

        <div className="grid md:grid-cols-2 gap-10 mt-16">
          {beneficios.map((b, i) => (
            <motion.div
              key={i}
              className="flex items-start gap-6 p-6 rounded-2xl bg-[#ffffff10] border border-white/30
              hover:border-[#f58220]/60 hover:shadow-[0_0_25px_rgba(245,130,32,0.3)]
              transition-all duration-300"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div
                className="w-16 h-16 flex items-center justify-center rounded-full 
                bg-gradient-to-tr from-[#f58220] to-[#ff944d]
                text-white shadow-[0_0_20px_rgba(245,130,32,0.4)] flex-shrink-0"
              >
                <b.icon size={30} />
              </div>

              <div className="text-left">
                <h3 className="text-xl font-semibold text-white">{b.title}</h3>
                <p className="mt-2 text-sm text-white/80">{b.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-20"
        >
          <a
            href="https://globuscargo.us/#/sign-up?a=cec123e3-17bf-4be8-8f46-1fe6ec3d31b7"
            className="inline-block px-10 py-4 rounded-full bg-[#f58220] text-white font-bold 
            hover:bg-[#ff944d] hover:scale-105 shadow-[0_10px_30px_rgba(245,130,32,0.4)] 
            transition-all duration-300"
          >
            Abrir mi Casillero Gratis 
          </a>
        </motion.div>
      </div>
    </section>
  );
}
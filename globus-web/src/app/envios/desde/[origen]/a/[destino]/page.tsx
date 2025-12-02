"use client";

import { useParams } from "next/navigation";
import { useEffect } from "react";
import { motion, Variants } from "framer-motion"; // 1. Importamos Variants
import Image from "next/image";
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
  FaLongArrowAltRight,
} from "react-icons/fa";

// === Variants corregidos === //
// 2. Tipamos explícitamente y casteamos el array 'ease'
const sectionVariants: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.9,
      // TypeScript necesita saber que esto es una tupla de 4 números
      ease: [0.17, 0.55, 0.55, 1] as [number, number, number, number],
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: (i: number) => ({
    opacity: 1,
    scale: 1,
    transition: {
      delay: i * 0.15,
      duration: 0.7,
      ease: [0.17, 0.55, 0.55, 1] as [number, number, number, number],
    },
  }),
};

export default function EnvioDinamicoPage() {
  const params = useParams();
  const origen = params.origen?.toString() || "usa";
  const destino = params.destino?.toString() || "colombia";

  const format = (str: string) =>
    str.charAt(0).toUpperCase() + str.slice(1).replace("-", " ");

  const formattedOrigen = format(origen);
  const formattedDestino = format(destino);

  // SEO dinámico
  useEffect(() => {
    const title = `Envíos Internacionales desde ${formattedOrigen} a ${formattedDestino} | Courier y Carga | Globus Cargo`;
    const description = `Servicio de Courier y carga desde ${formattedOrigen} hacia ${formattedDestino}. Ofrecemos el mejor precio en envíos aéreo y marítimo, con casillero gratuito en Miami. ¡Tu logística internacional, simplificada!`;

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
    <main className="bg-white text-[#1a1a1a] min-h-screen font-sans">
      <Header />

      {/* HERO */}
      <section className="relative text-white pt-40 md:pt-48 pb-32 px-6 text-center overflow-hidden bg-gradient-to-br from-[#f58220] to-[#ff7e00]">

        <div className="absolute inset-0 opacity-90">
          <div
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.2) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255, 255, 255, 0.2) 1px, transparent 1px)`,
              backgroundSize: "30px 30px",
            }}
          />

          <motion.div
            className="absolute top-[-100px] left-[-100px] w-[600px] h-[600px] bg-white/10 rounded-full blur-[100px]"
            animate={{ x: [0, 80, 0], y: [0, 60, 0] }}
            transition={{ repeat: Infinity, duration: 15 }}
          />

          <motion.div
            className="absolute bottom-[-100px] right-[-100px] w-[700px] h-[700px] bg-white/10 rounded-full blur-[100px]"
            animate={{ x: [0, -90, 0], y: [0, -70, 0] }}
            transition={{ repeat: Infinity, duration: 14 }}
          />
        </div>

        <motion.div
          initial="hidden"
          animate="visible"
          variants={sectionVariants}
          className="relative z-10"
        >
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-5xl lg:text-7xl font-extrabold mb-5 drop-shadow-xl leading-tight"
          >
            Envíos Internacionales de{" "}
            <span className="text-white/95">{formattedOrigen}</span> a{" "}
            <span className="underline decoration-white/50 decoration-4 font-black">
              {formattedDestino}
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-lg md:text-xl text-white/90 max-w-4xl mx-auto mb-10 leading-relaxed drop-shadow-md font-light"
          >
            Tu servicio de <strong>Courier, carga aérea y marítima</strong>.
            Aprovecha nuestro <strong>casillero gratuito en Miami</strong> para
            gestionar tus compras y envíos con total seguridad.
          </motion.p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="mt-16 flex flex-col sm:flex-row justify-center gap-5 relative z-10"
        >
          <a
            href="/cotizar"
            className="px-14 py-4 bg-white text-[#f58220] font-extrabold text-xl rounded-full shadow-2xl transition-all duration-300 transform hover:scale-[1.08]"
          >
            Cotizar Envío Hoy
          </a>

          <a
            href="https://wa.me/573001112233"
            target="_blank"
            rel="noopener noreferrer"
            className="px-14 py-4 border-2 border-white text-white rounded-full font-semibold text-xl transition-all duration-300 transform hover:bg-white/20 hover:scale-[1.05]"
          >
            Contacto Directo
          </a>
        </motion.div>
      </section>

      {/* VENTAJAS */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={sectionVariants}
        className="py-32 text-center bg-[#f7f7f7]"
      >
        <h2 className="text-4xl md:text-5xl font-extrabold text-[#f58220] mb-20">
          Compromiso Globus Cargo
        </h2>

        <div className="grid sm:grid-cols-3 gap-12 max-w-7xl mx-auto px-8">
          {[
            {
              icon: <FaClock />,
              title: "Eficiencia y Tiempo",
              desc: "Reducimos los tiempos de tránsito. Tu carga llega rápido.",
            },
            {
              icon: <FaShieldAlt />,
              title: "Confianza y Seguridad",
              desc: "Gestión aduanera y seguro de carga garantizando integridad.",
            },
            {
              icon: <FaDollarSign />,
              title: "Valor y Economía",
              desc: "Tarifas optimizadas y competitivas para cualquier envío.",
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              custom={i}
              variants={itemVariants}
              className="bg-white rounded-xl shadow-lg border border-gray-100 p-12"
            >
              <div className="text-[#f58220] text-5xl mb-6">{item.icon}</div>
              <h3 className="text-2xl font-bold mb-3">{item.title}</h3>
              <p className="text-gray-600 text-base">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* 3 PASOS */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={sectionVariants}
        className="relative bg-white py-32 text-center overflow-hidden"
      >
        <h2 className="text-4xl md:text-5xl font-extrabold mb-20 text-[#f58220]">
          Nuestro Flujo de Trabajo en 3 Pasos
        </h2>

        <div className="flex flex-col md:flex-row justify-center items-stretch gap-8 max-w-7xl mx-auto px-6 relative z-10">
          {[
            {
              icon: <FaShoppingCart />,
              title: "1. Compras Globales",
              desc: "Utiliza tu dirección de casillero en Miami.",
            },
            {
              icon: <FaWarehouse />,
              title: "2. Gestión en Miami",
              desc: "Recibimos e inspeccionamos tu carga.",
            },
            {
              icon: <FaHome />,
              title: "3. Entrega Express",
              desc: `Despacho aéreo o marítimo directo a ${formattedDestino}.`,
            },
          ].map((item, idx) => (
            <motion.div
              key={idx}
              custom={idx}
              variants={itemVariants}
              className="flex flex-col items-center bg-[#fefefe] rounded-2xl p-8 shadow-xl border-t-4 border-[#f58220]/50 md:w-1/3"
            >
              <div className="text-[#f58220] text-5xl mb-6">{item.icon}</div>
              <h3 className="text-2xl font-bold mb-3">{item.title}</h3>
              <p className="text-gray-600 text-base">{item.desc}</p>
            </motion.div>
          ))}
        </div>

        <div className="hidden md:flex justify-between absolute w-[60%] top-[60%] left-1/2 transform -translate-x-1/2 pointer-events-none">
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="text-gray-400 text-4xl -translate-x-1/2"
          >
            <FaLongArrowAltRight />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.7, duration: 0.5 }}
            className="text-gray-400 text-4xl translate-x-1/2"
          >
            <FaLongArrowAltRight />
          </motion.div>
        </div>
      </motion.section>

      {/* TESTIMONIOS */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        variants={sectionVariants}
        viewport={{ once: true }}
        className="py-20 md:py-32 bg-white text-center"
      >
        <h2 className="text-4xl md:text-5xl font-extrabold mb-16">
          Nuestros Clientes nos Recomiendan
        </h2>

        <Testimonials />
      </motion.section>

      {/* CTA FINAL */}
      <section className="relative py-32 text-center overflow-hidden bg-gradient-to-br from-[#f58220] via-orange-500 to-[#ff7e00]">
        <div
          className="absolute inset-0 opacity-15"
          style={{
            backgroundImage: `linear-gradient(to right, #ffffff44 1px, transparent 1px),
            linear-gradient(to bottom, #ffffff44 1px, transparent 1px)`,
            backgroundSize: "20px 20px",
          }}
        />

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{
            opacity: 1,
            scale: 1,
          }}
          transition={{
            duration: 0.8,
            ease: [0.17, 0.55, 0.55, 1] as [number, number, number, number], // ✔ Corrección también aquí
          }}
          className="relative z-10 max-w-4xl mx-auto px-6"
        >
          <h2 className="text-5xl md:text-6xl font-extrabold text-white drop-shadow-xl leading-tight">
            Logística de Carga a {formattedDestino}. ¡Empieza Hoy!
          </h2>

          <p className="mt-6 text-xl text-white/95 max-w-2xl mx-auto font-light">
            Calcula el costo exacto de tu <strong>envío internacional</strong> y
            da el primer paso para llevar tus paquetes de {formattedOrigen} a{" "}
            {formattedDestino} con confianza.
          </p>
        </motion.div>

        <div className="mt-14 flex flex-col sm:flex-row gap-6 justify-center relative z-10">
          <a
            href="/cotizar"
            className="px-16 py-5 bg-white text-[#f58220] font-extrabold text-xl rounded-full shadow-2xl transition-all duration-300 transform hover:scale-110 border-4 border-white"
          >
            Calcula tu Tarifa
          </a>

          <a
            href="https://wa.me/573001112233"
            target="_blank"
            className="px-16 py-5 bg-transparent border-2 border-white text-white rounded-full font-semibold text-xl transition-all duration-300 transform hover:scale-105 hover:bg-white/20"
          >
            Soporte por WhatsApp
          </a>
        </div>
      </section>

      <Footer />
    </main>
  );
}
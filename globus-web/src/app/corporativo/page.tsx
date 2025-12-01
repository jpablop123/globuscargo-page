"use client";

import { motion } from "framer-motion";
import { Montserrat } from "next/font/google";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import Image from "next/image";
import globusLogo from "@/assets/img/logo/globus22.png";
import {
  FaHandshake,
  FaBuilding,
  FaRocket,
  FaChartLine,
} from "react-icons/fa";

const montserrat = Montserrat({ subsets: ["latin"], weight: ["400", "600", "700"] });

const WHATSAPP_NUMBER = "573001112233";

export default function EmpresasPage() {
  const mensaje = encodeURIComponent(
    "Hola 👋, estoy interesado en las soluciones empresariales de Globus Cargo. Quisiera obtener más información sobre las tarifas corporativas."
  );
  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${mensaje}`;

  return (
    <main className={`${montserrat.className} bg-[#F9FAFB] text-[#2d2d2d]`}>
      <Header />

      {/* === HERO === */}
      <section className="relative bg-gradient-to-r from-[#f58220] to-[#fb923c] text-white pt-44 pb-28 px-6 text-center overflow-hidden">
        <Image
          src={globusLogo}
          alt="Globus Cargo"
          width={180}
          height={180}
          className="mx-auto mb-4 opacity-90 drop-shadow-md"
        />
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl md:text-6xl font-extrabold mb-3"
        >
          Soluciones logísticas para empresas
        </motion.h1>
        <p className="text-base md:text-lg text-white/90 max-w-2xl mx-auto leading-relaxed mb-6">
          Tarifas corporativas, alianzas estratégicas y envíos internacionales
          diseñados para hacer crecer tu negocio con confianza.
        </p>
        <p className="text-sm text-white/80 italic mb-8">
          Aliados logísticos de empresas en más de 6 países 🌎
        </p>
        <motion.a
          whileHover={{ scale: 1.05 }}
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-white text-[#f58220] px-10 py-3 rounded-full font-semibold text-lg shadow-md hover:bg-gray-100 transition-all"
        >
          Habla con un asesor ahora
        </motion.a>

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(255,255,255,0.15),transparent_70%)] animate-pulse" />
      </section>

      {/* === SECCIÓN CORPORATIVA === */}
      <section className="max-w-7xl mx-auto px-6 md:px-10 py-24 grid md:grid-cols-2 gap-16 items-center relative">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(245,130,32,0.05),transparent_70%)]" />
        <motion.div
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.4 }}
          viewport={{ once: true }}
          className="relative z-10"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            💼 Tarifas corporativas personalizadas
          </h2>
          <p className="text-gray-600 leading-relaxed mb-6">
            Si tu empresa realiza envíos frecuentes o maneja grandes volúmenes,
            Globus Cargo te ofrece precios preferenciales, atención dedicada y
            soporte prioritario para optimizar cada operación logística.
          </p>
          <ul className="text-gray-700 space-y-2 mb-8">
            <li>✔️ Tarifas preferenciales por volumen</li>
            <li>✔️ Facturación mensual o por lote</li>
            <li>✔️ Ejecutivo comercial asignado</li>
          </ul>
          <motion.a
            whileHover={{ scale: 1.05 }}
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-[#f58220] text-white px-8 py-3 rounded-full font-semibold text-lg shadow-md hover:bg-[#e07116] transition-all"
          >
            Solicitar cuenta corporativa
          </motion.a>
        </motion.div>

        <motion.div
          whileInView={{ opacity: 1, scale: 1 }}
          initial={{ opacity: 0, scale: 0.97 }}
          transition={{ duration: 0.4 }}
          viewport={{ once: true }}
          className="relative bg-white/80 backdrop-blur-md p-10 rounded-3xl shadow-2xl border border-gray-100 text-center hover:-translate-y-2 transition-transform duration-300 z-10"
        >
          <FaBuilding className="text-[#f58220] text-6xl mx-auto mb-4" />
          <h3 className="text-xl font-bold text-gray-900 mb-2">
            Optimiza tus costos logísticos
          </h3>
          <p className="text-gray-600">
            Ahorra hasta un{" "}
            <span className="font-bold text-[#f58220]">30%</span> con planes
            empresariales flexibles adaptados a tu operación.
          </p>
        </motion.div>
      </section>

      {/* === ALIANZAS === */}
      <section className="bg-gradient-to-br from-white to-[#fff8f4] py-24 relative">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(245,130,32,0.05),transparent_70%)]" />
        <div className="max-w-7xl mx-auto px-6 md:px-10 grid md:grid-cols-2 gap-16 items-center relative z-10">
          <motion.div
            whileInView={{ opacity: 1, scale: 1 }}
            initial={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.4 }}
            viewport={{ once: true }}
            className="bg-white/80 backdrop-blur-md border border-[#f58220]/20 rounded-3xl p-10 shadow-md text-center"
          >
            <FaHandshake className="text-[#f58220] text-6xl mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-gray-900 mb-3">
              Alianzas estratégicas
            </h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Si representas una marca o empresa que busca una red logística
              confiable entre EE.UU. y Latinoamérica, colaboremos.
            </p>
            <motion.a
              whileHover={{ scale: 1.05 }}
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-[#f58220] text-white px-8 py-3 rounded-full font-semibold text-lg shadow-md hover:bg-[#e07116] transition-all"
            >
              Crear alianza
            </motion.a>
          </motion.div>

          <motion.div
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.4 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              🤝 Crezcamos juntos
            </h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              Ofrecemos integraciones, soporte logístico y beneficios exclusivos
              para nuestros aliados estratégicos.
            </p>
            <ul className="text-gray-700 space-y-2">
              <li>✔️ Integración con tus plataformas</li>
              <li>✔️ Beneficios por fidelidad y volumen</li>
              <li>✔️ Expansión internacional garantizada</li>
            </ul>
          </motion.div>
        </div>
      </section>

      {/* === CTA FINAL === */}
      <section className="relative text-center py-24 overflow-hidden bg-white">
        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto relative z-10"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            ¿Listo para impulsar tu negocio?
          </h2>
          <p className="text-gray-600 mb-8">
            Nuestro equipo comercial creará la solución logística ideal para tu
            empresa.
          </p>
          <motion.a
            whileHover={{ scale: 1.05 }}
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-[#f58220] text-white px-10 py-3 rounded-full font-semibold text-lg shadow-md hover:bg-[#e07116] transition-all"
          >
            💬 Habla con un asesor por WhatsApp
          </motion.a>
        </motion.div>

        <motion.div
          animate={{ scale: [1, 1.3, 1], opacity: [0.2, 0.4, 0.2] }}
          transition={{ repeat: Infinity, duration: 10 }}
          className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(245,130,32,0.1),transparent_70%)]"
        />
        <Image
          src={globusLogo}
          alt="Globus Cargo"
          width={140}
          height={140}
          className="absolute bottom-8 right-8 opacity-10"
        />
        <p className="text-xs text-gray-400 mt-12 relative z-10">
          © Globus Cargo — Conectando negocios sin fronteras
        </p>
      </section>

      <Footer />
    </main>
  );
}
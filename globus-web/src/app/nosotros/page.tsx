"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Montserrat } from "next/font/google";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import foto from "@/assets/img/logo/fotosreveladas/AP0A0668.jpg"
import {
  FaHandshake,
  FaRocket,
  FaShieldAlt,
  FaGlobeAmericas,

} from "react-icons/fa";

// ✅ Logo importado directamente
import globusLogo from "@/assets/img/logo/globuslogo.png";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

export default function NosotrosPage() {
  return (
    <main className={`${montserrat.className} bg-[#F9FAFB] text-[#2d2d2d]`}>
      <Header />

      {/* === HERO === */}
      <section className="relative bg-gradient-to-r from-[#f58220] to-[#fb923c] text-white pt-48 pb-24 px-6 text-center overflow-hidden">
        {/* === Logo de fondo translúcido === */}
        <div className="absolute inset-0 opacity-[0.06] flex justify-center items-center pointer-events-none select-none">
          <Image
            src={globusLogo}
            alt="Globus Cargo marca de agua"
            width={1400}
            height={1400}
            className="object-contain scale-125 md:scale-150"
          />
        </div>

        {/* ✈️ Avión animado diagonal */}
        <motion.div
          animate={{ x: [0, 80, 0], y: [0, -50, 0], rotate: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 9, ease: "easeInOut" }}
          className="absolute bottom-14 left-10 text-white/40 text-7xl z-10"
        >

        </motion.div>

        {/* Logo decorativo pequeño flotante */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 0.25, scale: 1 }}
          transition={{ duration: 1.2 }}
          className="absolute bottom-0 right-0 z-[50] pointer-events-none select-none"
        >
          <motion.div
            animate={{ scale: [1, 1.05, 1], opacity: [0.25, 0.35, 0.25] }}
            transition={{ repeat: Infinity, duration: 7, ease: "easeInOut" }}
          >
            <Image
              src={globusLogo}
              alt="Globus Cargo logo"
              width={240}
              height={240}
              className="object-contain drop-shadow-[0_0_25px_rgba(255,255,255,0.6)]"
            />
          </motion.div>
        </motion.div>

        {/* Texto principal */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl font-extrabold mb-4 relative z-30 drop-shadow-lg"
        >
          Una empresa familiar con visión global
        </motion.h1>

        <p className="text-base md:text-lg text-white/90 max-w-2xl mx-auto leading-relaxed relative z-30">
          En Globus Cargo, transformamos el envío internacional en una experiencia humana, confiable y cercana.
        </p>

        {/* Halo animado */}
        <motion.div
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.45, 0.3] }}
          transition={{ repeat: Infinity, duration: 9 }}
          className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.2),transparent_70%)]"
        />
      </section>

      {/* === HISTORIA === */}
      <section className="max-w-6xl mx-auto px-6 md:px-10 py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Texto */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Nuestra historia
            </h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Globus Cargo nació como un sueño familiar en Miami, inspirado por la necesidad de ofrecer un servicio logístico donde la confianza fuera el centro de todo.  
              Desde el primer envío, nuestro objetivo ha sido simplificar la forma en que las personas en Latinoamérica acceden a productos del mundo.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Con el paso de los años, crecimos manteniendo los valores de nuestras raíces familiares: honestidad, cercanía y responsabilidad.  
              Hoy, combinamos tecnología y atención personalizada para conectar familias, emprendedores y negocios entre Estados Unidos y Latinoamérica.
            </p>
          </motion.div>

          {/* Imagen del equipo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 30 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            viewport={{ once: true }}
            className="relative overflow-hidden rounded-3xl shadow-2xl border border-gray-100 bg-white/60 backdrop-blur-sm group"
          >
            <Image
              src={foto}
              alt="Equipo Globus Cargo"
              width={800}
              height={600}
              className="object-cover w-full h-[400px] md:h-[500px] transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-70 group-hover:opacity-60 transition-opacity duration-500"></div>
            <div className="absolute inset-0 flex items-center justify-center bg-[#f58220]/10">

            </div>
          </motion.div>
        </div>
      </section>

      {/* === MISIÓN & VISIÓN === */}
      <section className="bg-white py-24 relative overflow-hidden">
        {/* Logo de fondo difuminado */}
        <div className="absolute inset-0 opacity-[0.05] flex justify-center items-center pointer-events-none select-none">
          <Image
            src={globusLogo}
            alt="Globus Cargo fondo"
            width={1000}
            height={1000}
            className="object-contain scale-125"
          />
        </div>

        <div className="max-w-6xl mx-auto px-6 md:px-10 grid md:grid-cols-2 gap-12 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-[#f58220]/5 border border-[#f58220]/20 rounded-3xl p-8 shadow-sm"
          >
            <h3 className="text-2xl font-bold text-[#f58220] mb-3">Nuestra misión</h3>
            <p className="text-gray-700 leading-relaxed">
              Facilitar el comercio internacional a través de una experiencia logística simple, rápida y confiable.  
              Queremos que cada cliente sienta que detrás de su envío hay una familia cuidando cada detalle.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-[#f58220]/5 border border-[#f58220]/20 rounded-3xl p-8 shadow-sm"
          >
            <h3 className="text-2xl font-bold text-[#f58220] mb-3">Nuestra visión</h3>
            <p className="text-gray-700 leading-relaxed">
              Convertirnos en la red logística más confiable de Latinoamérica,  
              manteniendo siempre la esencia familiar que nos diferencia: cercanía, calidez y compromiso real con nuestros clientes.
            </p>
          </motion.div>
        </div>
      </section>

      {/* === VALORES === */}
      <section className="max-w-7xl mx-auto px-6 md:px-10 py-24">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Nuestros valores
          </h2>
          <p className="text-gray-600 mt-3 max-w-2xl mx-auto leading-relaxed">
            La base de Globus Cargo está construida sobre los valores familiares que nos impulsan a crecer cada día.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {[
            {
              icon: <FaHandshake />,
              title: "Confianza",
              text: "Cada envío refleja nuestro compromiso con la honestidad y el cumplimiento.",
            },
            {
              icon: <FaShieldAlt />,
              title: "Seguridad",
              text: "Cuidamos cada paquete con la misma responsabilidad que cuidaríamos algo propio.",
            },
            {
              icon: <FaRocket />,
              title: "Innovación",
              text: "Integramos tecnología y atención humana para ofrecer un servicio superior.",
            },
            {
              icon: <FaGlobeAmericas />,
              title: "Conexión",
              text: "Nos apasiona unir países, familias y negocios en todo el continente.",
            },
          ].map((val, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="bg-white/80 backdrop-blur-lg border border-gray-100 p-8 rounded-3xl shadow-lg text-center hover:-translate-y-2 hover:shadow-2xl transition-all"
            >
              <div className="text-[#f58220] text-5xl mb-4 flex justify-center">
                {val.icon}
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">
                {val.title}
              </h4>
              <p className="text-gray-600 text-sm leading-relaxed">{val.text}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* === CTA FINAL === */}
      <section className="text-center py-20 bg-[#fff] relative overflow-hidden">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto relative z-10"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            En Globus Cargo somos familia
          </h2>
          <p className="text-gray-600 mb-8">
            Más que una empresa de envíos, somos un equipo familiar que trabaja con pasión para conectar personas, historias y oportunidades en todo el mundo.
          </p>
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            href="https://globuscargo.us/#/sign-up?a=cec123e3-17bf-4be8-8f46-1fe6ec3d31b7"
            className="inline-block bg-[#f58220] text-white px-10 py-3 rounded-full font-semibold text-lg shadow-md hover:bg-[#e07116] transition-all"
          >
            Únete a nuestra familia
          </motion.a>
        </motion.div>

        {/* Fondo animado radial */}
        <motion.div
          animate={{ scale: [1, 1.3, 1], opacity: [0.25, 0.45, 0.25] }}
          transition={{ repeat: Infinity, duration: 9 }}
          className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(245,130,32,0.15),transparent_70%)]"
        />
      </section>

      <Footer />
    </main>
  );
}
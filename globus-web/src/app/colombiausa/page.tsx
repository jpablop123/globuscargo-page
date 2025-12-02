"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import heroPackage from "@/assets/img/logo/fotosreveladas/AP0A0784.jpg"
import heroPackage2 from "@/assets/img/logo/fotosreveladas/AP0A0844.jpg"
import {
  Ban,
  CreditCard,
  Gem,
  Pill,
  Dog,
  Drumstick,
  Bomb,
  FlaskConical,
  Wine,
} from "lucide-react";
import globusLogo from "@/assets/img/logo/globusorange.png";

export default function EnviosColombiaUSA() {
  const restricciones = [
    { icon: Ban, text: "Armas químicas, biológicas o nucleares" },
    { icon: CreditCard, text: "Dinero en efectivo o tarjetas" },
    { icon: Bomb, text: "Material explosivo o inflamable" },
    { icon: FlaskConical, text: "Residuos tóxicos o nucleares" },
    { icon: Wine, text: "Bebidas alcohólicas" },
    { icon: Gem, text: "Oro, plata, piedras preciosas" },
    { icon: Pill, text: "Estupefacientes o psicotrópicos" },
    { icon: Drumstick, text: "Alimentos con cerdo (ej. chicharrón)" },
    { icon: Dog, text: "Animales vivos" },
  ];

  return (
    <main className="bg-white text-[#847E7E] font-[Montserrat] overflow-hidden">
      <Header />

      {/* === HERO === */}
      <section className="relative overflow-hidden bg-[#F68527] text-white">
        <div className="absolute inset-0 bg-[url('/patterns/shapes.svg')] opacity-10" />
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-28 grid md:grid-cols-2 gap-10 items-center relative z-10">

          {/* Texto principal */}
          <div>
            <h1 className="text-5xl md:text-6xl font-extrabold leading-tight drop-shadow">
              Envíos desde Colombia a{" "}
              <span className="text-yellow-200">Estados Unidos</span>
            </h1>
            <p className="mt-6 text-lg text-white/90 max-w-lg">
              ¿Tienes familiares o amigos en USA que sueñan con recibir un
              pedacito de Colombia? 📦
            </p>
            <p className="text-white/80 italic mt-3">
              Conectando familias sin fronteras 🇨🇴
            </p>

            <div className="mt-8 flex gap-4 flex-wrap">
              <a
                href="https://wa.me/573001112233"
                className="bg-white text-[#f58220] px-8 py-4 rounded-full font-semibold shadow-lg hover:scale-105 hover:shadow-xl transition"
              >
                Contactar con un asesor
              </a>
              <a
                href="https://globuscargo.us/#/sign-up?a=cec123e3-17bf-4be8-8f46-1fe6ec3d31b7"
                className="border border-white px-8 py-4 rounded-full font-semibold hover:bg-white/10 transition"
              >
                Regístrate Gratis
              </a>
            </div>
          </div>

          {/* Imagen con logo integrado (FIX: Reemplazo por div estático) */}
          <div
            className="relative flex justify-center"
          >
            <div className="relative inline-block">
              {/* Imagen principal */}
              <Image
  src={heroPackage}
  alt="Hero Package"
  width={500}
  height={500}
  className="rounded-xl object-cover"
/>

              {/* Efectos decorativos */}
              <div className="absolute -top-6 -left-6 w-20 h-20 bg-yellow-300/40 rounded-full blur-2xl" />
              <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-white/20 rounded-full blur-2xl" />

              {/* Logo en borde, integrado visualmente (FIX: Reemplazo por div estático) */}
              <div
                className="
                  absolute 
                  -bottom-8 
                  right-0 
                  md:-bottom-10 
                  md:-right-10 
                  flex 
                  items-center 
                  justify-center
                "
              >
                <div
                  className="
                    relative 
                    bg-white/90 
                    backdrop-blur-sm 
                    rounded-full 
                    p-3 
                    shadow-2xl 
                    border-2 
                    border-[#f58220]/40
                  "
                >
                  <Image
                    src={globusLogo}
                    alt="Globus Cargo"
                    width={110}
                    height={110}
                    className="opacity-90 drop-shadow-lg"
                  />
                  <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-[#f58220]/10 to-white/5 blur-xl" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* === EXPLICACIÓN === */}
      <section className="py-20 px-6 lg:px-12 relative">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          {/* Mantenemos motion.div para whileInView, pero eliminamos className si causa problemas */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
                      <Image
  src={heroPackage2}
  alt="Hero Package"
  width={500}
  height={500}
  className="rounded-xl object-cover"
/>

          </motion.div>
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Facilitamos tus envíos a USA desde Colombia
            </h2>
            <ul className="mt-6 space-y-4 text-lg text-[#847E7E]">
              <li>📦 Envía desde cualquier parte de Colombia a cualquier ciudad de USA.</li>
              <li>⚡ Entregas en 3 a 7 días, con rapidez y seguridad.</li>
              <li>🤝 Asesoría personalizada en trámites aduaneros.</li>
            </ul>
            <a
              href="https://globuscargo.us/#/sign-up?a=cec123e3-17bf-4be8-8f46-1fe6ec3d31b7"
              className="inline-block mt-8 bg-[#f58220] text-white px-8 py-4 rounded-full font-semibold shadow-md hover:scale-105 transition"
            >
              Regístrate y envía tu pedacito de Colombia 🇨🇴
            </a>
          </div>
        </div>
      </section>

      {/* === SECCIÓN DE CONFIANZA === */}
      <section className="bg-[#fff8f4] py-20 text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">
          Confía en Globus Cargo
        </h2>
        <p className="text-[#847E7E] max-w-2xl mx-auto">
          Más de{" "}
          <span className="text-[#f58220] font-semibold">10.000 envíos</span>{" "}
          realizados con éxito desde Colombia hacia Estados Unidos.  
          Rápidos, seguros y con atención personalizada.
        </p>
      </section>

      {/* === RESTRICCIONES === */}
      <section className="relative py-20 px-6 lg:px-12 overflow-hidden bg-gray-50">
        <div className="absolute inset-0 bg-[url('/patterns/cargo-pattern.svg')] opacity-5" />
        <div className="max-w-6xl mx-auto relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900">
            Mercancías que no puedes enviar a USA 🚫
          </h2>
          <p className="text-center text-[#847E7E] mt-4 max-w-2xl mx-auto">
            Según el convenio de la unión postal universal, estas son algunas restricciones:
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10 mt-16">
            {restricciones.map((item, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.08 }}
                transition={{ duration: 0.3 }}
                className="flex flex-col items-center text-center"
              >
                <div className="relative w-44 h-44 md:w-52 md:h-52 rounded-full flex flex-col items-center justify-center bg-gradient-to-br from-white to-gray-100 shadow-lg border border-[#f58220]/20 overflow-hidden">
                  <item.icon className="text-[#f58220] w-12 h-12 mb-3 relative z-10" />
                  <p className="text-sm md:text-base text-[#847E7E] font-medium px-4 relative z-10">
                    {item.text}
                  </p>
                  <div className="absolute inset-0 bg-gradient-to-tr from-[#f58220]/10 to-yellow-300/10 blur-xl" />
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-16">
            <a
              href="https://wa.me/573001112233"
              className="bg-[#f58220] text-white px-10 py-4 rounded-full font-semibold shadow-lg hover:scale-105 hover:shadow-xl transition"
            >
              Contactar con un asesor
            </a>
          </div>
        </div>
      </section>

      {/* === CTA FINAL === */}
      <section className="relative py-24 text-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#f58220] via-orange-400 to-[#f58220] opacity-95" />
        <div className="absolute inset-0 bg-[url('/patterns/shapes.svg')] opacity-10" />

        <motion.div
          initial={{ opacity: 0, scale: 0.7 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="relative z-10 max-w-3xl mx-auto"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-white drop-shadow-lg">
            Conecta Colombia con Estados Unidos 
          </h2>
          <p className="mt-4 text-lg text-white/90 max-w-xl mx-auto">
            Tu envío más rápido, seguro y profesional con el respaldo de Globus Cargo.
          </p>
        </motion.div>

        <div className="mt-10 flex flex-col sm:flex-row gap-6 justify-center relative z-10">
          <a
            href="https://globuscargo.us/#/sign-up?a=cec123e3-17bf-4be8-8f46-1fe6ec3d31b7"
            className="px-10 py-4 bg-white text-[#f58220] font-semibold rounded-full shadow-xl hover:scale-105 transition"
          >
            Abrir Casillero Gratis
          </a>
          <a
            href="https://wa.me/573001112233"
            target="_blank"
            rel="noopener noreferrer"
            className="px-10 py-4 bg-white/10 border border-white text-white rounded-full font-semibold shadow-xl hover:bg-white/20 transition"
          >
            Hablar con un asesor
          </a>
        </div>

        <Image
          src={globusLogo}
          alt="Globus Cargo"
          width={140}
          height={140}
          className="absolute bottom-8 right-8 opacity-10"
        />

        <p className="text-xs text-white/70 mt-12 relative z-10">
          © Globus Cargo — Conectando personas y fronteras con confianza.
        </p>
      </section>

      <Footer />
    </main>
  );
}
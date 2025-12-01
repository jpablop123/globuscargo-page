"use client";

import Image from "next/image";
import { motion } from "framer-motion"; // AnimatePresence ya no es necesario aquí
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
// Importamos el nuevo componente
import TestimonialsSection from "@/components/layout/testimonials"; // Ajusta la ruta si es necesario

// Eliminamos el estado y useEffect ya que se movieron al componente TestimonialsSection
// import { useState, useEffect } from "react"; 

import globusWhite from "@/assets/img/logo/globus22.png"; // logo blanco
import seguimientoPedido from '@/assets/img/logo/fotosreveladas/AP0A0926.jpg';

// Eliminamos el array testimonials
// const testimonials = [...]

export default function CasilleroPage() {
  // Eliminamos useState y useEffect

  return (
    <main className="bg-white text-[#847E7E] overflow-hidden font-[Montserrat]">
      <Header />

      {/* === HERO CON IMAGEN Y LOGO INTEGRADO === */}
      <section className="relative overflow-hidden bg-[#F68527] text-white">
        <div className="absolute inset-0 bg-[url('/patterns/world-map.svg')] bg-cover bg-center opacity-10" />
        <div className="absolute top-0 left-0 w-80 h-80 bg-white/10 blur-3xl animate-pulse" />
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-yellow-300/10 blur-3xl animate-bounce" />

        <div className="relative z-10 max-w-7xl mx-auto grid md:grid-cols-2 items-center gap-10 px-6 py-28">
          
          {/* === Texto principal === */}
          <div className="text-center md:text-left">
            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="text-5xl md:text-6xl font-extrabold leading-tight drop-shadow-lg"
            >
              Tu Casillero en <span className="text-yellow-200">Miami</span> <br />
              con <span className="text-white">Globus Cargo</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.3 }}
              className="mt-6 text-lg text-white/90 max-w-md mx-auto md:mx-0"
            >
              Recibe tus compras en Miami y te las llevamos hasta tu casa en
              Colombia. Simple, rápido y 100% seguro. 
            </motion.p>

            {/* BOTONES */}
            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <a
                href="https://globuscargo.us/#/sign-up?a=cec123e3-17bf-4be8-8f46-1fe6ec3d31b7"
                className="px-10 py-4 bg-white text-[#f58220] font-semibold rounded-full shadow-[0_8px_30px_rgba(255,255,255,0.4)] hover:scale-105 hover:shadow-[0_8px_40px_rgba(255,255,255,0.6)] transition"
              >
                Abrir Casillero Gratis
              </a>
              <a
                href="https://wa.me/573001112233"
                target="_blank"
                rel="noopener noreferrer"
                className="px-10 py-4 border border-white text-white rounded-full font-semibold hover:bg-white/10 hover:shadow-[0_0_20px_rgba(255,255,255,0.3)] transition"
              >
                Hablar con un asesor
              </a>
            </div>
          </div>

          {/* === Imagen con logo integrado === */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="relative flex justify-center"
          >
            <div className="relative inline-block">
              {/* Imagen principal */}
              <Image
                src={seguimientoPedido}
                alt="Seguimiento pedido Globus Cargo"
                className="w-full h-auto rounded-3xl shadow-2xl border-[6px] border-white/20"
                priority
              />

              {/* Efectos decorativos */}
              <div className="absolute -top-8 -left-8 w-24 h-24 bg-yellow-300/40 rounded-full blur-2xl" />
              <div className="absolute -bottom-8 -right-8 w-28 h-28 bg-white/20 rounded-full blur-2xl" />

              {/* Logo Globus integrado dentro del borde */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.4 }}
                className="
                  absolute 
                  -bottom-10 
                  right-0 
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
                    src={globusWhite}
                    alt="Globus Cargo Logo"
                    width={110}
                    height={110}
                    className="opacity-90 drop-shadow-lg"
                  />
                  <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-[#f58220]/10 to-white/5 blur-xl" />
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* === TIMELINE === */}
      <section className="bg-[#847E7E]/5 py-20 px-6 relative">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900">
            ¿Cómo funciona el Casillero?
          </h2>
          <div className="mt-16 relative">
            <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-[#f58220]/30 hidden md:block"></div>
            <div className="space-y-12">
              {[
                { title: "Regístrate Gratis", desc: "Obtén tu dirección personal en Miami." },
                { title: "Envía tus Compras", desc: "Usa tu dirección de Miami en cualquier tienda online." },
                { title: "Preparamos y Enviamos", desc: "Agrupamos tus compras y las traemos por aire o mar." }, // "Consolidamos" ajustado
                { title: "Recíbelo en Casa", desc: "Entrega en cualquier ciudad de Colombia." },
              ].map((step, i) => (
                <div
                  key={i}
                  className={`relative flex flex-col md:flex-row items-center gap-8 ${
                    i % 2 === 0 ? "md:flex-row-reverse" : ""
                  }`}
                >
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className="bg-white p-8 rounded-2xl shadow-md w-full md:w-1/2 z-10 border border-[#f58220]/20 hover:shadow-lg transition"
                  >
                    <h3 className="text-xl font-bold text-[#f58220]">{step.title}</h3>
                    <p className="mt-2 text-[#847E7E]">{step.desc}</p>
                  </motion.div>
                  <div className="flex justify-center items-center w-full md:w-1/2">
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      className="w-20 h-20 rounded-full bg-gradient-to-tr from-[#f58220] to-orange-400 text-white flex items-center justify-center text-2xl font-bold shadow-lg"
                    >
                      {i + 1}
                    </motion.div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* === REQUISITOS === */}
      <section className="relative bg-orange-50 py-20 px-6">
        <div className="max-w-6xl mx-auto text-center relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Requisitos de Envío
          </h2>
          <p className="mt-4 text-[#847E7E] max-w-2xl mx-auto text-base md:text-lg">
            Asegúrate de cumplir con estas condiciones antes de enviar tus paquetes.
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-12 mt-16">
            {[
              { title: "Valor Contenido", desc: "No debe exceder los 2.000 USD." },
              { title: "Peso", desc: "Máximo 50kg (110 lbs) por envío." },
              { title: "Tamaño", desc: "No debe sobrepasar 1.50m en ninguna dimensión." },
              { title: "Cantidades", desc: "No más de 6 unidades idénticas por envío." },
              { title: "Mercancía", desc: "Algunos artículos están restringidos o prohibidos." },
              { title: "Celulares", desc: "Máximo un teléfono celular por envío." },
            ].map((item, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.08 }}
                className="flex flex-col items-center text-center bg-white p-6 rounded-2xl shadow-md border border-[#f58220]/10 hover:border-[#f58220]/40 hover:shadow-lg transition"
              >
                <h3 className="text-base md:text-lg font-semibold text-gray-900">{item.title}</h3>
                <p className="text-sm md:text-base text-[#847E7E] mt-1">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* === TESTIMONIOS (Componente Externo) === */}
      {/* Reemplazamos toda la sección anterior por la llamada al componente importado */}
      <TestimonialsSection /> 

      {/* === CTA FINAL === */}
      <section className="relative bg-[#F68527] text-white py-28 text-center overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-96 h-96 bg-white/10 blur-3xl animate-pulse" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-yellow-400/10 blur-3xl animate-bounce" />
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="relative z-10"
        >
          

          <h2 className="text-4xl md:text-6xl font-extrabold drop-shadow-lg leading-tight">
            ¿Listo para dar el siguiente paso con{" "}
            <span className="text-yellow-200">Globus</span>?
          </h2>
          <p className="mt-6 text-lg md:text-xl text-white/90 max-w-2xl mx-auto">
            Haz que tus envíos sean más{" "}
            <span className="font-semibold">fáciles, rápidos y seguros</span>.
            Tu casillero en Miami está esperando por ti 
          </p>
        </motion.div>

        <div className="mt-12 flex flex-col sm:flex-row gap-5 justify-center relative z-10">
          <a
            href="https://globuscargo.us/#/sign-up?a=cec123e3-17bf-4be8-8f46-1fe6ec3d31b7"
            className="px-12 py-5 bg-white text-[#f58220] text-lg font-bold rounded-full shadow-[0_8px_40px_rgba(255,255,255,0.5)] hover:scale-105 hover:shadow-[0_8px_60px_rgba(255,255,255,0.6)] transition"
          >
            Abrir Casillero Gratis
          </a>
          <a
            href="https://wa.me/573001112233"
            target="_blank"
            rel="noopener noreferrer"
            className="px-10 py-5 border-2 border-white text-white text-lg font-semibold rounded-full flex items-center gap-2 hover:bg-white/10 hover:shadow-[0_0_25px_rgba(255,255,255,0.3)] transition"
          >
            💬 Hablar con un asesor
          </a>
        </div>
      </section>

      <Footer />
    </main>
  );
}
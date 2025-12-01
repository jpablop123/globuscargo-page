"use client";

import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import globusLogo from "@/assets/img/logo/globusorange.png";

// === IMPORTA tus fotos (SOLO 2) ===
import slide1 from "@/assets/img/logo/fotosreveladas/AP0A0716.jpg";
import slide2 from "@/assets/img/logo/fotosreveladas/AP0A0753.jpg";

export default function HeroDinamico() {
  const params = useParams();
  const origen = params.origen?.toString() || "USA";
  const destino = params.destino?.toString() || "Colombia";

  const format = (str: string) =>
    str.charAt(0).toUpperCase() + str.slice(1).replace("-", " ");

  useEffect(() => {
    document.title = `Envíos desde ${format(origen)} a ${format(destino)} | Globus Cargo`;
  }, [origen, destino]);

  return (
    <section className="relative bg-gradient-to-b from-white to-[#fff8f4] overflow-hidden">
      {/* Fondo decorativo */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <svg xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
          <defs>
            <pattern id="routes" width="160" height="160" patternUnits="userSpaceOnUse">
              <path
                d="M10 80 Q80 10 150 80 T290 80"
                stroke="#f58220"
                strokeWidth="2"
                fill="none"
                strokeDasharray="5,5"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#routes)" />
        </svg>
      </div>

      {/* Contenido */}
      <div className="relative max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center px-6 lg:px-12 py-20">
        {/* Texto */}
        <div className="text-center lg:text-left space-y-6 relative z-10">
          <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 leading-tight">
            Conectamos tus compras <br />
            <span className="text-[#f58220]">
              desde {format(origen)} hasta {format(destino)}
            </span>
          </h1>

          <p className="text-lg text-gray-600 max-w-md mx-auto lg:mx-0">
            En Globus Cargo hacemos tus envíos internacionales más simples,
            rápidos y seguros. <br /> ¡Tu carga, nuestra misión!
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mt-6">
            <a
              href="/register"
              className="bg-[#f58220] text-white px-6 py-3 rounded-full font-semibold hover:bg-[#d96d15] transition shadow-lg"
            >
              Regístrate Gratis
            </a>
            <a
              href="https://wa.me/573001112233"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-[#f58220] text-[#f58220] px-6 py-3 rounded-full font-semibold hover:bg-[#f58220]/10 transition"
            >
              Contáctanos
            </a>
          </div>
        </div>

        {/* Slider visual */}
        <AnimatePresence mode="wait">
          <motion.div
            key={`${origen}-${destino}`}
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -40 }}
            transition={{ duration: 0.6 }}
            className="relative w-full h-[380px] lg:h-[460px] overflow-hidden rounded-3xl shadow-2xl bg-[#fff] border border-[#f58220]/30"
          >
            <HeroSlider />
            {/* Logo */}
            <div className="absolute bottom-5 right-5 bg-white/80 backdrop-blur-md border border-[#f58220]/40 rounded-xl p-3 shadow-lg">
              <Image
                src={globusLogo}
                alt="Globus Cargo"
                width={120}
                height={120}
                className="drop-shadow-md"
              />
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Marca */}
      <div className="absolute bottom-5 right-5 text-xs text-gray-400 font-medium">
        © Globus Cargo — Conectando USA y Latinoamérica
      </div>
    </section>
  );
}

// === SLIDER DE 2 FOTOS CON FADE + ZOOM ===
function HeroSlider() {
  const [index, setIndex] = useState(0);

  const slides = [
    { image: slide1 },
    { image: slide2 },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 5000); // Cambia cada 5 segundos
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-full">
      <AnimatePresence mode="wait">
        <motion.div
          key={index}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 1.05 }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
          className="absolute inset-0 overflow-hidden rounded-3xl"
        >
          <Image
            src={slides[index].image}
            alt={`slide-${index}`}
            fill
            style={{ objectFit: "cover", objectPosition: "center" }}
            className="z-0 transition duration-1000"
          />
        </motion.div>
      </AnimatePresence>

      {/* Indicadores */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            className={`w-3 h-3 rounded-full transition-all ${
              i === index ? "bg-[#f58220]" : "bg-white/70"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
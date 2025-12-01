"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import tarifasHero from '@/assets/img/logo/fotosreveladas/AP0A0915'
import {
  Scale,
  Package,
  Ruler,
  Layers,
  Shield,
  Zap,
  Globe,
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

export default function TarifasPage() {
  const requisitos = [
    { icon: Scale, title: "Valor Contenido", text: "No debe exceder los 2,000 USD por envío." },
    { icon: Package, title: "Peso", text: "Máximo 50kg (110 lbs) por envío." },
    { icon: Ruler, title: "Tamaño", text: "No debe sobrepasar 1.50m en ninguna dimensión." },
    { icon: Layers, title: "Cantidades", text: "Máximo 6 unidades idénticas por envío." },
  ];

  const beneficios = [
    { icon: Zap, title: "Envíos rápidos", text: "Entregas en 3 a 7 días hábiles." },
    { icon: Shield, title: "Seguro incluido", text: "Cobertura básica hasta $200 USD." },
    { icon: Globe, title: "Cobertura total", text: "Envíos a cualquier ciudad de Colombia." },
    { icon: Package, title: "Consolidación", text: "Agrupamos tus compras sin costo extra." },
  ];

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
          {/* Texto */}
          <div>
            <h1 className="text-5xl md:text-6xl font-extrabold leading-tight drop-shadow-lg">
              Tarifas claras, <span className="text-yellow-200">envíos sin sorpresas</span>
            </h1>
            <p className="mt-6 text-lg text-white/90 max-w-lg">
              Cotiza en segundos y conoce el costo real de tu envío desde USA a Colombia.
            </p>
            <div className="mt-8 flex gap-4 flex-wrap">
              <a
                href="/cotizar"
                className="bg-white text-[#f58220] px-8 py-4 rounded-full font-semibold shadow-lg hover:scale-105 hover:shadow-xl transition"
              >
                Cotizar Envío
              </a>
              <a
                href="https://globuscargo.us/#/sign-up?a=cec123e3-17bf-4be8-8f46-1fe6ec3d31b7"
                className="border border-white px-8 py-4 rounded-full font-semibold hover:bg-white/10 transition"
              >
                Abrir Casillero Gratis
              </a>
            </div>
          </div>

          {/* Imagen + logo integrado */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="relative flex justify-center"
          >
            <div className="relative inline-block">
              {/* Imagen principal */}
              <Image
  src={tarifasHero}
  alt="Tarifas Globus Cargo"
  width={500}
  height={500}
  className="rounded-3xl shadow-2xl border-[6px] border-white/20"
/>

              {/* Efectos decorativos */}
              <div className="absolute -top-6 -left-6 w-20 h-20 bg-yellow-300/40 rounded-full blur-2xl" />
              <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-white/20 rounded-full blur-2xl" />

              {/* Logo Globus integrado como sello */}
              <motion.div
                initial={{ opacity: 0, rotate: -8, y: 20 }}
                animate={{ opacity: 1, rotate: 0, y: 0 }}
                transition={{ duration: 1, delay: 0.4 }}
                className="absolute -bottom-10 right-0 md:-bottom-10 md:-right-10 flex items-center justify-center"
              >
                <div className="relative bg-white/90 backdrop-blur-sm rounded-full p-3 shadow-2xl border-2 border-[#f58220]/40 hover:scale-105 transition">
                  <Image
                    src={globusLogo}
                    alt="Globus Cargo"
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

      {/* === TARIFA GENERAL === */}
      <section className="py-24 px-6 lg:px-12 text-center bg-gradient-to-b from-white to-orange-50">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Tarifa General</h2>
        <p className="mt-3 text-[#847E7E]">Desde 1LB hasta 110LB</p>

        <div className="grid md:grid-cols-2 gap-16 max-w-5xl mx-auto mt-16 items-center">
          {/* Flete */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="relative w-72 h-72 mx-auto rounded-full flex flex-col items-center justify-center bg-white shadow-xl border border-[#f58220]/30 backdrop-blur-lg"
          >
            <span className="text-lg text-[#847E7E]">Flete</span>
            <h3 className="text-5xl font-extrabold mt-2 text-[#f58220]">$1.80 USD</h3>
            <p className="text-sm mt-2 max-w-[200px] text-[#847E7E]">
              Valor por libra. Recepción, almacenaje, consolidación, preparación y transporte internacional.
            </p>
            <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-[#f58220]/10 to-yellow-300/10 blur-2xl -z-10" />
          </motion.div>

          {/* Cargos fijos */}
          <motion.div
            initial={{ y: 40, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.9 }}
            className="bg-white shadow-xl rounded-2xl border border-[#f58220]/30 p-10 flex flex-col items-center justify-center hover:shadow-2xl transition"
          >
            <span className="text-lg text-[#847E7E]">Cargos Fijos</span>
            <h3 className="text-4xl font-extrabold mt-2 text-[#f58220]">$12 USD</h3>
            <p className="text-sm mt-4 max-w-xs text-[#847E7E] leading-relaxed">
              Corresponden a:
              <br />- Seguro con cobertura hasta $200 USD
              <br />- Proceso y trámite de importación postal
              <br />- Entrega en Colombia
            </p>
          </motion.div>
        </div>
      </section>

      {/* === NORMATIVAS === */}
      <section className="bg-gray-50 py-24 px-6 lg:px-12 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/patterns/cargo-pattern.svg')] opacity-5" />
        <div className="max-w-6xl mx-auto relative z-10">
          <h2 className="text-3xl md:text-4xl font-extrabold text-center text-gray-900">
            Normativas de Envío 📦
          </h2>
          <p className="mt-3 text-center text-[#847E7E] text-lg">
            Principales requisitos para tus envíos internacionales
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-12 mt-16">
            {requisitos.map((item, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.3 }}
                className="relative w-48 h-48 md:w-56 md:h-56 mx-auto rounded-full flex flex-col items-center justify-center bg-gradient-to-br from-white to-gray-50 shadow-lg border border-[#f58220]/30 hover:shadow-2xl hover:border-[#f58220]/60 transition-all duration-300"
              >
                <div className="absolute w-24 h-24 rounded-full bg-[#f58220]/10 blur-2xl -z-10" />
                <item.icon className="text-[#f58220] w-12 h-12 mb-3" />
                <h3 className="text-lg font-bold text-gray-900">{item.title}</h3>
                <p className="text-sm text-[#847E7E] px-4 mt-1 leading-snug text-center">
                  {item.text}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* === BENEFICIOS === */}
      <section className="py-20 px-6 lg:px-12 bg-white">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">¿Por qué elegir Globus Cargo? </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 mt-16">
            {beneficios.map((b, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -8 }}
                className="bg-gradient-to-br from-orange-50 to-white p-8 rounded-2xl shadow-md border border-[#f58220]/10 hover:shadow-xl transition"
              >
                <b.icon className="w-10 h-10 text-[#f58220] mx-auto" />
                <h3 className="mt-4 font-bold text-gray-900">{b.title}</h3>
                <p className="text-sm mt-2 text-[#847E7E]">{b.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* === RESTRICCIONES === */}
      <section className="bg-gray-50 py-20 px-6 lg:px-12 relative">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Restricciones 🚫</h2>
          <p className="text-[#847E7E] mt-4">Estas mercancías no pueden enviarse bajo la modalidad courier.</p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10 mt-16">
            {restricciones.map((r, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.05 }}
                className="bg-white rounded-2xl shadow-md p-8 flex flex-col items-center text-center border border-[#f58220]/10 hover:shadow-lg transition"
              >
                <r.icon className="w-12 h-12 text-[#f58220]" />
                <p className="mt-4 text-sm font-medium text-[#847E7E]">{r.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* === CTA FINAL === */}
      <section className="relative py-24 text-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#f58220] via-orange-400 to-[#f58220]" />
        <motion.div
          initial={{ opacity: 0, scale: 0.7 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="relative z-10 max-w-3xl mx-auto"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-white drop-shadow-lg">
            Empieza hoy con Globus Cargo 
          </h2>
          <p className="mt-4 text-lg text-white/90 max-w-xl mx-auto">
            Tarifas transparentes, envíos seguros y respaldo profesional en cada entrega.
          </p>
        </motion.div>

        <div className="mt-10 flex flex-col sm:flex-row gap-6 justify-center relative z-10">
          <a href="/cotizar" className="px-10 py-4 bg-white text-[#f58220] font-semibold rounded-full shadow-xl hover:scale-105 transition">
            Cotizar Envío
          </a>
          <a href="https://globuscargo.us/#/sign-up?a=cec123e3-17bf-4be8-8f46-1fe6ec3d31b7" className="px-10 py-4 bg-white/10 border border-white text-white rounded-full font-semibold shadow-xl hover:bg-white/20 transition">
            Abrir Casillero Gratis
          </a>
        </div>
      </section>

      <Footer />
    </main>
  );
}
"use client";

import { motion } from "framer-motion"; // Mantenemos la importación para otras secciones
import { Montserrat } from "next/font/google";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import { 
  ShoppingBag, 
  Plane, 
  CheckCircle2, 
  ArrowRight, 
  MapPin 
} from "lucide-react";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export default function CasilleroPage() {
  const steps = [
    {
      icon: <MapPin size={32} />,
      title: "1. Regístrate Gratis",
      desc: "Obtén tu dirección física en Miami al instante. Sin costos de inscripción ni mensualidades.",
    },
    {
      icon: <ShoppingBag size={32} />,
      title: "2. Compra en USA",
      desc: "Compra en tus tiendas favoritas (Amazon, eBay, etc.) y envía los paquetes a tu nueva dirección.",
    },
    {
      icon: <Plane size={32} />,
      title: "3. Recibe en Colombia",
      desc: "Nosotros recibimos, consolidamos y enviamos tus compras hasta la puerta de tu casa.",
    },
  ];

  return (
    <main className={`${montserrat.className} bg-slate-50 text-gray-800 selection:bg-[#f58220] selection:text-white`}>
      <Header />

      {/* ============================
          HERO SECTION
      ============================ */}
      <section className="relative pt-44 pb-32 px-6 text-center overflow-hidden bg-[#f58220]">
        {/* Fondo gradiente */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#f58220] via-[#ff9a44] to-[#e07116]"></div>

        {/* Textura */}
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage:
              "radial-gradient(circle, #fff 1.5px, transparent 1.5px)",
            backgroundSize: "24px 24px",
          }}
        ></div>

        {/* Círculo animado: BLOQUE ELIMINADO */}

        <div className="relative z-10 max-w-5xl mx-auto text-white">

          <div>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-6 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-sm font-bold tracking-wide shadow-sm">
              <span className="w-2 h-2 rounded-full bg-white animate-pulse"></span>
              Casillero Virtual 2025
            </div>

            <h1 className="text-5xl md:text-7xl font-black mb-6 tracking-tight drop-shadow-sm leading-tight">
              Compra en USA, <br /> Recibe en <span className="text-orange-100">Colombia</span>
            </h1>

            <p className="text-xl text-orange-50 max-w-2xl mx-auto leading-relaxed font-medium mb-10">
              Tu dirección física en Miami totalmente gratis. Compra en las mejores tiendas del mundo y nosotros nos encargamos del resto.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://globuscargo.us/#/sign-up?a=cec123e3-17bf-4be8-8f46-1fe6ec3d31b7"
                className="inline-flex items-center justify-center gap-2 bg-white text-[#f58220] px-10 py-4 rounded-xl font-bold text-lg shadow-lg hover:bg-orange-50 transition-all transform hover:-translate-y-1"
              >
                Abrir mi Casillero Gratis <ArrowRight size={20} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* STEPS */}
      <section className="relative z-20 -mt-20 px-6 pb-24">
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8">
          {steps.map((item, i) => (
            // FIX: Reemplazamos motion.div por div para eliminar el error de 'as' y 'className'
            <div
              key={i}
              className="bg-white p-10 rounded-3xl shadow-xl shadow-gray-200/50 border border-white hover:border-orange-100 transition-all duration-300 group hover:scale-[1.03]"
              // El efecto whileHover se simula con clases hover:scale-[1.03]
            >
              <div className="w-16 h-16 bg-orange-50 rounded-2xl flex items-center justify-center text-[#f58220] mb-6 group-hover:bg-[#f58220] group-hover:text-white transition-colors duration-300 shadow-sm">
                {item.icon}
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mb-4">{item.title}</h3>
              <p className="text-gray-600 leading-relaxed font-medium">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* BENEFICIOS */}
      <section className="py-20 px-6 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-[#f58220] font-bold tracking-widest uppercase text-sm mb-2 block">
            Ventajas Exclusivas
          </span>
          <h2 className="text-3xl md:text-5xl font-black text-gray-900">
            ¿Por qué elegir Globus?
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { title: "Casillero Gratis", desc: "Sin cuotas de mantenimiento ni costos ocultos." },
            { title: "Consolidación", desc: "Agrupamos tus paquetes para que pagues un solo envío." },
            { title: "Rastreo 24/7", desc: "Monitorea tus compras en tiempo real desde nuestra App." },
            { title: "Seguro Incluido", desc: "Tus paquetes viajan protegidos automáticamente." },
          ].map((benefit, i) => (
            // FIX: Reemplazamos motion.div por div
            <div
              key={i}
              className="p-8 bg-gray-50 rounded-2xl border border-gray-100 hover:bg-white hover:shadow-lg transition-all hover:scale-[1.03]"
              // El efecto whileHover se simula con clases hover:scale-[1.03]
            >
              <CheckCircle2 className="text-[#f58220] mb-4" size={32} />
              <h4 className="text-xl font-bold text-gray-900 mb-2">{benefit.title}</h4>
              <p className="text-gray-600 text-sm">{benefit.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6">
        <div className="max-w-5xl mx-auto bg-[#1a1a1a] rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden">
          <div className="absolute inset-0 opacity-20 bg-[url('/patterns/shapes.svg')]"></div>
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#f58220] rounded-full blur-[80px] opacity-20"></div>

          <div className="relative z-10">
            <h2 className="text-3xl md:text-5xl font-black text-white mb-6">¿Listo para comenzar?</h2>
            <p className="text-gray-400 text-lg mb-10 max-w-2xl mx-auto">
              Únete a miles de colombianos que ya compran en USA sin complicaciones. Regístrate hoy y recibe tu dirección en Miami al instante.
            </p>

            <a
              href="https://globuscargo.us/#/sign-up?a=cec123e3-17bf-4be8-8f46-1fe6ec3d31b7"
              className="inline-block bg-[#f58220] text-white px-12 py-5 rounded-full font-bold text-lg shadow-lg hover:bg-[#ff9a44] hover:shadow-orange-900/50 transition-all transform hover:-translate-y-1"
            >
              Obtener Casillero Gratis
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
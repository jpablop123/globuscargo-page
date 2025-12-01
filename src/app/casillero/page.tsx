"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import TestimonialsSection from "@/components/layout/testimonials"; 
import globusWhite from "@/assets/img/logo/globus22.png"; 
import seguimientoPedido from '@/assets/img/logo/fotosreveladas/AP0A0926.jpg';
import { 
  Package, 
  ShoppingCart, 
  Plane, 
  Home, 
  CheckCircle2, 
  ArrowRight,
  Scale,
  DollarSign,
  Smartphone,
  AlertTriangle
} from "lucide-react";

// Variantes de animación
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay, ease: "easeOut" },
  }),
};

export default function CasilleroPage() {
  return (
    <main className="bg-slate-50 text-gray-800 font-sans selection:bg-[#f58220] selection:text-white">
      <Header />

      {/* === HERO: Premium Style === */}
      <section className="relative pt-44 pb-32 px-6 overflow-hidden bg-[#f58220]">
        {/* Fondo Gradiente y Textura */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#f58220] via-[#ff9a44] to-[#e07116]"></div>
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle, #fff 1.5px, transparent 1.5px)', backgroundSize: '24px 24px' }}></div>
        
        {/* Decoración flotante */}
        <motion.div animate={{ y: [0, -20, 0] }} transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }} className="absolute top-20 right-[10%] w-64 h-64 bg-white/5 rounded-full blur-3xl pointer-events-none"></motion.div>

        <div className="relative z-10 max-w-7xl mx-auto grid md:grid-cols-2 items-center gap-12">
          
          {/* Texto Hero */}
          <motion.div initial="hidden" animate="visible" variants={fadeInUp}>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-6 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-sm font-bold tracking-wide shadow-sm">
                <span className="w-2 h-2 rounded-full bg-white animate-pulse"></span> Casillero Virtual 2025
            </div>

            <h1 className="text-5xl md:text-7xl font-black text-white leading-tight drop-shadow-sm mb-6">
              Tu dirección <br/> en <span className="text-orange-100">Miami.</span>
            </h1>

            <p className="text-xl text-orange-50 max-w-lg mb-8 font-medium leading-relaxed">
              Compra en tus tiendas favoritas de USA (Amazon, eBay, Shein) y recibe en la puerta de tu casa en Colombia.
            </p>

            <div className="flex flex-wrap gap-4">
              <a
                href="https://globuscargo.us/#/sign-up?a=cec123e3-17bf-4be8-8f46-1fe6ec3d31b7"
                className="px-8 py-4 bg-white text-[#f58220] font-bold rounded-xl shadow-lg shadow-orange-900/20 hover:scale-105 transition-transform flex items-center gap-2"
              >
                Abrir Casillero Gratis <ArrowRight size={18}/>
              </a>
              <a
                href="https://wa.me/573001112233"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 bg-white/10 border border-white/30 backdrop-blur-md text-white font-bold rounded-xl hover:bg-white/20 transition-colors"
              >
                Hablar con Asesor
              </a>
            </div>
          </motion.div>

          {/* Imagen Hero con Marco */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative hidden md:block"
          >
             <div className="relative z-10 rounded-[2.5rem] overflow-hidden shadow-2xl border-4 border-white/20">
                <Image
                    src={seguimientoPedido}
                    alt="Casillero en Miami"
                    className="object-cover w-full h-[500px]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
                
                {/* Badge Flotante */}
                <div className="absolute bottom-6 left-6 bg-white/95 backdrop-blur-xl p-4 rounded-2xl shadow-lg border border-white max-w-xs">
                    <p className="text-xs text-gray-400 font-bold uppercase tracking-wider mb-1">Dirección Gratuita</p>
                    <p className="text-gray-900 font-bold text-sm leading-tight">
                        2120 NW 96th Ave, Doral, FL 33172
                    </p>
                </div>
             </div>
             {/* Decoración detrás */}
             <div className="absolute -top-4 -right-4 w-full h-full border-4 border-white/10 rounded-[2.5rem] -z-10"></div>
          </motion.div>
        </div>
      </section>

      {/* === CÓMO FUNCIONA (Timeline Moderno) === */}
      <section className="py-24 px-6 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-20">
             <span className="text-[#f58220] font-bold tracking-widest uppercase text-sm mb-2 block">Proceso Simple</span>
             <h2 className="text-3xl md:text-5xl font-black text-gray-900">Así usas tu Casillero</h2>
          </div>

          <div className="grid md:grid-cols-4 gap-8 relative">
             {/* Línea conectora (Desktop) */}
             <div className="hidden md:block absolute top-12 left-[12%] right-[12%] h-0.5 border-t-2 border-dashed border-orange-100 z-0"></div>

             {[
                { icon: Home, title: "Regístrate", desc: "Obtén tu dirección física y virtual en Miami totalmente gratis." },
                { icon: ShoppingCart, title: "Compra", desc: "Usa tu nueva dirección al comprar en Amazon, eBay, etc." },
                { icon: Package, title: "Recibimos", desc: "Tus paquetes llegan a nuestra bodega, los pesamos y notificamos." },
                { icon: Plane, title: "Enviamos", desc: "Despachamos a Colombia y recibes en la puerta de tu casa." },
             ].map((step, i) => (
                <motion.div
                    key={i}
                    initial="hidden"
                    whileInView="visible"
                    custom={i * 0.1}
                    variants={fadeInUp}
                    viewport={{ once: true }}
                    className="relative z-10 text-center group"
                >
                    <div className="w-24 h-24 mx-auto bg-white border-4 border-orange-50 rounded-full flex items-center justify-center text-[#f58220] mb-6 shadow-lg group-hover:scale-110 group-hover:border-[#f58220] transition-all duration-300">
                        <step.icon size={32} />
                        <div className="absolute -top-2 -right-2 w-8 h-8 bg-[#f58220] text-white rounded-full flex items-center justify-center font-bold text-sm border-2 border-white">
                            {i + 1}
                        </div>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{step.title}</h3>
                    <p className="text-gray-500 text-sm leading-relaxed px-4">{step.desc}</p>
                </motion.div>
             ))}
          </div>
        </div>
      </section>

      {/* === REQUISITOS (Bento Grid) === */}
      <section className="py-24 px-6 max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900">Normativas de Envío</h2>
          <p className="text-gray-500 mt-2">Condiciones para envíos bajo modalidad Courier</p>
          <div className="w-16 h-1 bg-[#f58220] mx-auto rounded-full mt-4"></div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: DollarSign, title: "Valor Máximo", desc: "Hasta $2,000 USD declarados." },
              { icon: Scale, title: "Peso Límite", desc: "Máximo 50kg (110 lbs) por caja." },
              { icon: Package, title: "Dimensiones", desc: "Máx 1.50m por lado." },
              { icon: ShoppingCart, title: "Cantidades", desc: "Máx 6 unidades de la misma referencia." },
              { icon: Smartphone, title: "Celulares", desc: "Uno (1) por envío. Debe reportar IMEI." },
              { icon: AlertTriangle, title: "Prohibidos", desc: "Armas, juguetes bélicos, dinero, joyas." },
            ].map((item, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -5 }}
                className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl hover:border-orange-100 transition-all duration-300 group"
              >
                <div className="flex items-center gap-4 mb-4">
                    <div className="p-3 bg-orange-50 text-[#f58220] rounded-xl group-hover:bg-[#f58220] group-hover:text-white transition-colors">
                        <item.icon size={24} />
                    </div>
                    <h3 className="font-bold text-gray-900">{item.title}</h3>
                </div>
                <p className="text-gray-500 text-sm leading-relaxed pl-[4.5rem] -mt-2 border-l-2 border-gray-100">
                    {item.desc}
                </p>
              </motion.div>
            ))}
        </div>
      </section>

      {/* === TESTIMONIOS === */}
      <section className="bg-white border-t border-gray-100">
        <TestimonialsSection />
      </section>

      {/* === CTA FINAL === */}
      <section className="relative py-28 text-center overflow-hidden bg-[#1a1a1a]">
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[#f58220] opacity-10 blur-[100px] rounded-full translate-x-1/2 -translate-y-1/2"></div>
        
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="relative z-10 max-w-3xl mx-auto px-6"
        >
          <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
            Empieza a comprar hoy
          </h2>
          <p className="text-xl text-gray-400 mb-10 font-light">
            Únete a miles de colombianos que ya disfrutan de sus compras internacionales sin complicaciones.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
                href="https://globuscargo.us/#/sign-up?a=cec123e3-17bf-4be8-8f46-1fe6ec3d31b7" 
                className="px-10 py-4 bg-[#f58220] hover:bg-[#e07116] text-white font-bold rounded-full transition-colors shadow-lg shadow-orange-900/40"
            >
                Crear Casillero Gratis
            </a>
            <a 
                href="https://wa.me/573001112233" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="px-10 py-4 bg-transparent border border-gray-700 text-white hover:bg-white hover:text-black font-bold rounded-full transition-all"
            >
                Contactar Asesor
            </a>
          </div>
        </motion.div>
      </section>

      <Footer />
    </main>
  );
}
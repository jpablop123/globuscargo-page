"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import tarifasHero from '@/assets/img/logo/fotosreveladas/AP0A0915.jpg';
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
  CheckCircle2,
  Info
} from "lucide-react";
import globusLogo from "@/assets/img/logo/globusorange.png";

// Variantes de animación
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay, ease: "easeOut" },
  }),
};

export default function TarifasPage() {
  const requisitos = [
    { icon: Scale, title: "Valor Máximo", text: "Hasta $2,000 USD declarados por envío." },
    { icon: Package, title: "Peso Límite", text: "Máximo 50kg (110 lbs) por caja." },
    { icon: Ruler, title: "Dimensiones", text: "Hasta 1.50m en cualquiera de sus lados." },
    { icon: Layers, title: "Unidades", text: "Máximo 6 artículos de la misma referencia." },
  ];

  const beneficios = [
    { icon: Zap, title: "Velocidad Premium", text: "Entregas en 3 a 7 días hábiles." },
    { icon: Shield, title: "Seguro Incluido", text: "Cobertura básica hasta $200 USD." },
    { icon: Globe, title: "Cobertura Nacional", text: "Llegamos a cualquier rincón de Colombia." },
    { icon: Package, title: "Consolidación", text: "Agrupa tus compras gratis y ahorra." },
  ];

  const restricciones = [
    { icon: Ban, text: "Armas químicas/biológicas" },
    { icon: CreditCard, text: "Dinero o Tarjetas" },
    { icon: Bomb, text: "Explosivos/Inflamables" },
    { icon: FlaskConical, text: "Residuos Tóxicos" },
    { icon: Wine, text: "Bebidas Alcohólicas" },
    { icon: Gem, text: "Joyas y Piedras Preciosas" },
    { icon: Pill, text: "Estupefacientes" },
    { icon: Drumstick, text: "Alimentos con Cerdo" },
    { icon: Dog, text: "Animales Vivos" },
  ];

  return (
    <main className="bg-slate-50 text-gray-800 font-sans selection:bg-[#f58220] selection:text-white">
      <Header />

      {/* === HERO: Diseño Premium === */}
      <section className="relative pt-44 pb-32 px-6 overflow-hidden bg-[#f58220]">
        {/* Fondo Gradiente y Textura */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#f58220] via-[#ff9a44] to-[#e07116]"></div>
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle, #fff 1.5px, transparent 1.5px)', backgroundSize: '24px 24px' }}></div>
        
        {/* Elementos flotantes fondo */}
        <motion.div animate={{ y: [0, -20, 0] }} transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }} className="absolute top-20 right-[10%] w-64 h-64 bg-white/5 rounded-full blur-3xl pointer-events-none"></motion.div>

        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center relative z-10">
          
          {/* Texto Hero */}
          <motion.div initial="hidden" animate="visible" variants={fadeInUp}>
            <div className="inline-block px-4 py-1.5 mb-6 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-sm font-bold tracking-wide shadow-sm">
                 💰 Tarifas 2025
            </div>
            <h1 className="text-5xl md:text-7xl font-black text-white leading-tight drop-shadow-sm mb-6">
              Sin costos <br/> <span className="text-orange-100">ocultos.</span>
            </h1>
            <p className="text-xl text-orange-50 max-w-lg mb-8 font-medium leading-relaxed">
              Cotiza en segundos y obtén el precio final. Sin sorpresas al momento de recibir tu paquete.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="/cotizar" className="px-8 py-4 bg-white text-[#f58220] font-bold rounded-xl shadow-lg shadow-orange-900/20 hover:scale-105 transition-transform">
                Cotizar Ahora
              </a>
              <a href="https://globuscargo.us/#/sign-up?a=cec123e3-17bf-4be8-8f46-1fe6ec3d31b7" className="px-8 py-4 bg-white/10 border border-white/30 backdrop-blur-md text-white font-bold rounded-xl hover:bg-white/20 transition-colors">
                Crear Cuenta Gratis
              </a>
            </div>
          </motion.div>

          {/* Imagen Hero con Marco (CORREGIDO: Ya no está inclinada) */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative hidden lg:block"
          >
             {/* Se eliminaron las clases: transform rotate-2 hover:rotate-0 transition-transform duration-500 */}
             <div className="relative z-10 rounded-[2.5rem] overflow-hidden shadow-2xl border-4 border-white/20">
                <Image
                    src={tarifasHero}
                    alt="Tarifas Globus Cargo"
                    width={600}
                    height={600}
                    className="object-cover"
                />
                {/* Overlay gradiente sobre imagen */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
                
                {/* Sello Flotante */}
                <div className="absolute bottom-6 right-6 bg-white/90 backdrop-blur-xl p-3 rounded-2xl shadow-lg border border-white flex items-center gap-3">
                    <div className="bg-[#f58220] p-2 rounded-lg text-white">
                        <CheckCircle2 size={24} />
                    </div>
                    <div>
                        <p className="text-xs text-gray-500 font-bold uppercase">Garantía</p>
                        <p className="text-sm font-bold text-gray-900">Mejor Precio</p>
                    </div>
                </div>
             </div>
             {/* Decoración detrás */}
             <div className="absolute -top-4 -left-4 w-full h-full border-4 border-white/10 rounded-[2.5rem] -z-10"></div>
          </motion.div>
        </div>
      </section>

      {/* === TARIFAS: Card Unificada (Estilo Dashboard) === */}
      <section className="relative -mt-20 px-6 z-20 pb-24">
        <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-5xl mx-auto bg-white rounded-3xl shadow-2xl shadow-gray-200 border border-gray-100 overflow-hidden"
        >
            <div className="grid md:grid-cols-5">
                
                {/* Columna Izquierda: Precio Principal */}
                <div className="md:col-span-3 p-10 md:p-14 flex flex-col justify-center relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-32 h-32 bg-orange-50 rounded-br-full -z-0"></div>
                    
                    <div className="relative z-10">
                        <h2 className="text-2xl font-bold text-gray-400 mb-2">Tarifa General</h2>
                        <div className="flex items-baseline gap-2 mb-4">
                            <span className="text-7xl md:text-8xl font-black text-[#f58220] tracking-tighter">$1.80</span>
                            <span className="text-2xl text-gray-500 font-medium">USD / Lb</span>
                        </div>
                        <p className="text-gray-500 text-lg leading-relaxed max-w-md">
                            Tarifa todo incluido para paquetes de 1 a 110 Libras. Incluye recepción, almacenaje, consolidación y transporte internacional.
                        </p>
                    </div>
                </div>

                {/* Columna Derecha: Cargos Fijos */}
                <div className="md:col-span-2 bg-gray-50 p-10 md:p-14 border-l border-gray-100 flex flex-col justify-center">
                    <div className="mb-6">
                        <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide">Adicional</span>
                        <h3 className="text-3xl font-bold text-gray-900 mt-2">+$12 USD</h3>
                        <p className="text-sm text-gray-400 font-medium uppercase tracking-wider">Cargos Fijos por Envío</p>
                    </div>
                    
                    <ul className="space-y-4">
                        {[
                            "Seguro (Cobertura $200)",
                            "Trámite Aduanal",
                            "Entrega a Domicilio"
                        ].map((item, i) => (
                            <li key={i} className="flex items-center gap-3 text-gray-600 font-medium">
                                <CheckCircle2 className="text-[#f58220] w-5 h-5 flex-shrink-0" />
                                {item}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
            
            {/* Footer de la Card */}
            <div className="bg-[#f58220] p-4 text-center text-white text-sm font-medium">
                💡 Tip: ¡Consolida varios paquetes en uno solo para pagar un solo cargo fijo!
            </div>
        </motion.div>
      </section>

      {/* === NORMATIVAS: Grid Limpio === */}
      <section className="py-20 px-6 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900">Normativas de Aduana</h2>
          <div className="w-16 h-1 bg-[#f58220] mx-auto rounded-full mt-4"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {requisitos.map((item, i) => (
            <motion.div
              key={i}
              initial="hidden"
              whileInView={{ opacity: 1 }}
              custom={i * 0.1}
              variants={fadeInUp}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl hover:border-orange-100 transition-all duration-300 group text-center"
            >
              <div className="w-14 h-14 mx-auto bg-orange-50 rounded-xl flex items-center justify-center text-[#f58220] mb-4 group-hover:bg-[#f58220] group-hover:text-white transition-colors">
                <item.icon size={28} />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">{item.title}</h3>
              <p className="text-sm text-gray-500 leading-snug">{item.text}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* === BENEFICIOS === */}
      <section className="bg-white py-24 border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-6">
             <div className="grid md:grid-cols-2 gap-12 items-center">
                 <div>
                     <span className="text-[#f58220] font-bold tracking-widest uppercase text-sm mb-2 block">Por qué nosotros</span>
                     <h2 className="text-4xl font-black text-gray-900 mb-6">Tu carga en las <br/> mejores manos.</h2>
                     <p className="text-gray-600 text-lg leading-relaxed mb-8">
                         No solo transportamos cajas, transportamos confianza. Nuestra infraestructura está diseñada para garantizar la seguridad y rapidez que necesitas.
                     </p>
                     <a href="/nosotros" className="text-[#f58220] font-bold flex items-center gap-2 hover:gap-3 transition-all">
                        Conoce más de nosotros <span aria-hidden="true">&rarr;</span>
                     </a>
                 </div>
                 
                 <div className="grid sm:grid-cols-2 gap-6">
                    {beneficios.map((b, i) => (
                        <motion.div 
                            key={i}
                            whileHover={{ y: -5 }}
                            className="p-6 rounded-2xl bg-gray-50 border border-gray-100 hover:bg-orange-50 hover:border-orange-100 transition-colors"
                        >
                            <b.icon className="w-8 h-8 text-[#f58220] mb-4" />
                            <h3 className="font-bold text-gray-900 mb-2">{b.title}</h3>
                            <p className="text-sm text-gray-500">{b.text}</p>
                        </motion.div>
                    ))}
                 </div>
             </div>
        </div>
      </section>

      {/* === RESTRICCIONES: Alert Grid === */}
      <section className="py-24 px-6 max-w-6xl mx-auto">
        <div className="flex flex-col items-center text-center mb-16">
            <div className="w-16 h-16 bg-red-50 text-red-500 rounded-full flex items-center justify-center mb-4">
                <Info size={32} />
            </div>
            <h2 className="text-3xl font-bold text-gray-900">Artículos Restringidos</h2>
            <p className="text-gray-500 mt-2 max-w-xl">
                Por regulaciones aduaneras y de transporte aéreo, los siguientes artículos no pueden ser enviados bajo la modalidad courier.
            </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4">
          {restricciones.map((r, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: i * 0.05 }}
              viewport={{ once: true }}
              className="flex items-center gap-3 p-4 rounded-xl bg-white border border-gray-100 shadow-sm hover:border-red-100 hover:bg-red-50/30 transition-colors"
            >
              <r.icon className="w-5 h-5 text-red-400 flex-shrink-0" />
              <span className="text-sm font-medium text-gray-600">{r.text}</span>
            </motion.div>
          ))}
        </div>
      </section>

      {/* === CTA FINAL === */}
      <section className="relative py-28 text-center overflow-hidden bg-[#1a1a1a]">
        <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-[#f58220] opacity-10 blur-[100px] rounded-full -translate-x-1/2 -translate-y-1/2"></div>
        
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="relative z-10 max-w-3xl mx-auto px-6"
        >
          <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
            ¿Listo para enviar?
          </h2>
          <p className="text-xl text-gray-400 mb-10 font-light">
            Únete a los miles de colombianos que ya compran en USA sin complicaciones.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/cotizar" className="px-10 py-4 bg-[#f58220] hover:bg-[#e07116] text-white font-bold rounded-full transition-colors shadow-lg shadow-orange-900/40">
                Cotizar mi Envío
            </a>
          </div>
        </motion.div>
      </section>

      <Footer />
    </main>
  );
}
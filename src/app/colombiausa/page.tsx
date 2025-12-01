"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import heroPackage from "@/assets/img/logo/fotosreveladas/AP0A0784.jpg";
import heroPackage2 from "@/assets/img/logo/fotosreveladas/AP0A0844.jpg";
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
  CheckCircle2,
  ArrowRight,
  Plane,
  MapPin,
  Clock
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

export default function EnviosColombiaUSA() {
  const restricciones = [
    { icon: Ban, text: "Armas químicas / biológicas" },
    { icon: CreditCard, text: "Dinero en efectivo / Tarjetas" },
    { icon: Bomb, text: "Material explosivo / inflamable" },
    { icon: FlaskConical, text: "Residuos tóxicos / nucleares" },
    { icon: Wine, text: "Bebidas alcohólicas" },
    { icon: Gem, text: "Oro, plata, piedras preciosas" },
    { icon: Pill, text: "Estupefacientes / Psicotrópicos" },
    { icon: Drumstick, text: "Alimentos con cerdo" },
    { icon: Dog, text: "Animales vivos" },
  ];

  return (
    <main className="bg-slate-50 text-gray-800 font-sans selection:bg-[#f58220] selection:text-white">
      <Header />

      {/* === HERO: Diseño Premium con Profundidad === */}
      <section className="relative pt-44 pb-32 px-6 overflow-hidden bg-[#f58220]">
        {/* Fondo Gradiente y Textura */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#f58220] via-[#ff9a44] to-[#e07116]"></div>
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle, #fff 1.5px, transparent 1.5px)', backgroundSize: '24px 24px' }}></div>
        
        {/* Elementos decorativos */}
        <motion.div animate={{ rotate: 360 }} transition={{ duration: 120, repeat: Infinity, ease: "linear" }} className="absolute -top-[30%] -right-[10%] w-[800px] h-[800px] border border-white/10 rounded-full border-dashed opacity-30 pointer-events-none"></motion.div>

        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center relative z-10">
          
          {/* Texto Hero */}
          <motion.div initial="hidden" animate="visible" variants={fadeInUp}>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-6 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-sm font-bold tracking-wide shadow-sm">
                 <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></span> Exportaciones
            </div>
            
            <h1 className="text-5xl md:text-7xl font-black text-white leading-tight drop-shadow-sm mb-6">
              De Colombia <br/> para <span className="text-orange-100">el Mundo.</span>
            </h1>
            
            <p className="text-xl text-orange-50 max-w-lg mb-8 font-medium leading-relaxed">
              Conecta con tus familiares en USA enviándoles un pedacito de casa. Nosotros nos encargamos de la logística.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <a href="https://wa.me/573001112233" className="px-8 py-4 bg-white text-[#f58220] font-bold rounded-xl shadow-lg shadow-orange-900/20 hover:scale-105 transition-transform flex items-center gap-2">
                Hablar con un Asesor <ArrowRight size={18}/>
              </a>
              <a href="https://globuscargo.us/#/sign-up?a=cec123e3-17bf-4be8-8f46-1fe6ec3d31b7" className="px-8 py-4 bg-white/10 border border-white/30 backdrop-blur-md text-white font-bold rounded-xl hover:bg-white/20 transition-colors">
                Registrarme Gratis
              </a>
            </div>
          </motion.div>

          {/* Imagen Hero con Estilo */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative hidden lg:block"
          >
             <div className="relative z-10 rounded-[2.5rem] overflow-hidden shadow-2xl border-4 border-white/20">
                <Image
                    src={heroPackage}
                    alt="Envios Colombia a USA"
                    width={600}
                    height={600}
                    className="object-cover h-[500px] w-full"
                />
                {/* Overlay gradiente */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                
                {/* Badge Flotante */}
                <div className="absolute bottom-8 left-8 text-white">
                    <p className="text-sm font-medium text-orange-200 uppercase tracking-wider mb-1">Conexión Directa</p>
                    <p className="text-2xl font-bold">Bogotá ✈ Miami</p>
                </div>
                
                {/* Logo Flotante */}
                <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-3xl shadow-xl">
                    <Image src={globusLogo} alt="Globus Logo" width={60} height={60} />
                </div>
             </div>
             {/* Decoración detrás */}
             <div className="absolute -top-4 -right-4 w-full h-full border-4 border-white/10 rounded-[2.5rem] -z-10"></div>
          </motion.div>
        </div>
      </section>

      {/* === FEATURES & EXPLICACIÓN === */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
            
            {/* Imagen Secundaria */}
            <motion.div
                initial="hidden"
                whileInView="visible"
                variants={fadeInUp}
                viewport={{ once: true }}
                className="relative order-2 lg:order-1"
            >
                <div className="relative rounded-[2rem] overflow-hidden shadow-2xl shadow-orange-900/10 border border-gray-100">
                    <Image
                        src={heroPackage2}
                        alt="Paquetería Internacional"
                        width={600}
                        height={600}
                        className="object-cover"
                    />
                </div>
                {/* Elemento gráfico decorativo */}
                <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-orange-50 rounded-full blur-3xl -z-10"></div>
            </motion.div>

            {/* Contenido Texto */}
            <div className="order-1 lg:order-2">
                <span className="text-[#f58220] font-bold tracking-widest uppercase text-sm mb-2 block">Logística Simplificada</span>
                <h2 className="text-4xl font-black text-gray-900 mb-6 leading-tight">
                    Facilitamos tus envíos <br/> desde Colombia.
                </h2>
                <p className="text-gray-600 text-lg leading-relaxed mb-8">
                    Ya sea un regalo familiar o una exportación comercial, nuestra infraestructura garantiza que tu paquete llegue a tiempo y en perfectas condiciones.
                </p>

                <div className="space-y-6">
                    {[
                        { icon: MapPin, title: "Cobertura Total", desc: "Recogemos en Colombia, entregamos en cualquier ciudad de USA." },
                        { icon: Clock, title: "Tiempos Récord", desc: "Entregas express de 3 a 7 días hábiles garantizados." },
                        { icon: Plane, title: "Aduana Incluida", desc: "Asesoría personalizada para trámites de exportación." }
                    ].map((item, i) => (
                        <motion.div 
                            key={i}
                            whileHover={{ x: 10 }}
                            className="flex items-start gap-4 p-4 rounded-xl hover:bg-orange-50 transition-colors cursor-default"
                        >
                            <div className="p-3 bg-white border border-gray-100 shadow-sm rounded-lg text-[#f58220]">
                                <item.icon size={24} />
                            </div>
                            <div>
                                <h3 className="font-bold text-gray-900">{item.title}</h3>
                                <p className="text-sm text-gray-500">{item.desc}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
      </section>

      {/* === ESTADÍSTICAS (Trust Bar) === */}
      <section className="bg-[#1a1a1a] py-16 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8 text-center divide-y md:divide-y-0 md:divide-x divide-gray-800">
            {[
                { val: "+10.000", label: "Envíos Exitosos" },
                { val: "100%", label: "Cobertura en USA" },
                { val: "24/7", label: "Soporte Online" }
            ].map((stat, i) => (
                <motion.div 
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.1 }}
                    viewport={{ once: true }}
                    className="pt-4 md:pt-0"
                >
                    <p className="text-4xl md:text-5xl font-black text-white mb-2">{stat.val}</p>
                    <p className="text-gray-400 font-medium uppercase tracking-wider text-sm">{stat.label}</p>
                </motion.div>
            ))}
        </div>
      </section>

      {/* === RESTRICCIONES: Grid Compacto === */}
      <section className="py-24 px-6 max-w-6xl mx-auto bg-white">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900">Mercancías Restringidas</h2>
          <p className="text-gray-500 mt-3 max-w-2xl mx-auto">
            Por regulaciones internacionales de la Unión Postal Universal, los siguientes artículos no pueden ser transportados vía courier.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {restricciones.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: i * 0.05 }}
              viewport={{ once: true }}
              className="flex items-center gap-4 p-4 rounded-xl bg-gray-50 border border-gray-100 hover:border-red-200 hover:bg-red-50/50 transition-colors group"
            >
              <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-red-400 shadow-sm group-hover:text-red-500">
                  <item.icon size={20} />
              </div>
              <span className="text-sm font-semibold text-gray-700 group-hover:text-gray-900">{item.text}</span>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 text-center bg-blue-50 p-6 rounded-2xl border border-blue-100">
            <p className="text-blue-800 text-sm font-medium">
                ¿Tienes dudas sobre algún producto específico? 
                <a href="https://wa.me/573001112233" className="underline ml-1 font-bold hover:text-blue-900">Consúltanos antes de enviar</a>
            </p>
        </div>
      </section>

      {/* === CTA FINAL === */}
      <section className="relative py-28 text-center overflow-hidden bg-gradient-to-br from-[#f58220] to-[#e07116]">
        {/* Patrón de fondo */}
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle, #fff 1.5px, transparent 1.5px)', backgroundSize: '24px 24px' }}></div>
        
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="relative z-10 max-w-3xl mx-auto px-6"
        >
          <h2 className="text-4xl md:text-5xl font-black text-white mb-6 drop-shadow-sm">
            Conecta Colombia con USA
          </h2>
          <p className="text-xl text-orange-50 mb-10 font-medium">
            Seguridad, rapidez y el mejor precio del mercado. Empieza tu envío hoy.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="https://globuscargo.us/#/sign-up?a=cec123e3-17bf-4be8-8f46-1fe6ec3d31b7" className="px-10 py-4 bg-white text-[#f58220] hover:bg-gray-50 font-bold rounded-full transition-all shadow-xl hover:shadow-2xl hover:-translate-y-1">
                Abrir Casillero Gratis
            </a>
            <a href="https://wa.me/573001112233" target="_blank" rel="noopener noreferrer" className="px-10 py-4 bg-[#ffffff20] border-2 border-white text-white hover:bg-white/30 font-bold rounded-full transition-all">
                Contactar Asesor
            </a>
          </div>
        </motion.div>

        <div className="absolute bottom-4 left-0 right-0 text-center text-white/40 text-xs">
            © Globus Cargo — Logística Internacional Certificada
        </div>
      </section>

      <Footer />
    </main>
  );
}
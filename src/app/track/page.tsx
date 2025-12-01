"use client";

import { Montserrat } from "next/font/google";
import { motion } from "framer-motion";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import { 
  Lock, 
  ScanSearch, 
  ArrowRight, 
  ShieldCheck, 
  FileText, 
  History 
} from "lucide-react"; 
import Image from "next/image";
import globusLogo from "@/assets/img/logo/globusorange.png";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

// Animación estándar
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay, ease: "easeOut" },
  }),
};

export default function RastrearPaquetePage() {
  return (
    <main className={`${montserrat.className} bg-slate-50 text-gray-800 selection:bg-[#f58220] selection:text-white min-h-screen flex flex-col`}>
      <Header />

      {/* === HERO: Diseño Premium === */}
      <section className="relative pt-44 pb-40 px-6 text-center overflow-hidden bg-[#f58220]">
        {/* Fondo Gradiente y Textura */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#f58220] via-[#ff9a44] to-[#e07116]"></div>
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle, #fff 1.5px, transparent 1.5px)', backgroundSize: '24px 24px' }}></div>
        
        {/* Elementos decorativos animados */}
        <motion.div 
            animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.2, 0.1] }} 
            transition={{ duration: 4, repeat: Infinity }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-white rounded-full blur-[100px] pointer-events-none"
        />

        <div className="relative z-10 max-w-4xl mx-auto">
             <motion.div initial="hidden" animate="visible" variants={fadeInUp}>
                <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-6 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-sm font-bold tracking-wide shadow-sm">
                    <ScanSearch size={16} className="text-orange-200" /> Centro de Rastreo
                </div>
                
                <h1 className="text-5xl md:text-6xl font-black text-white mb-6 drop-shadow-sm tracking-tight">
                  Ubica tu <span className="text-orange-100">paquete.</span>
                </h1>
                <p className="text-xl text-orange-50 max-w-2xl mx-auto font-medium">
                  Accede a la información detallada de tus envíos en tiempo real a través de nuestro portal seguro.
                </p>
             </motion.div>
        </div>
      </section>

      {/* === TARJETA DE ACCESO (Security Gate) === */}
      <section className="px-6 -mt-24 relative z-20 pb-24 flex-grow">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="max-w-4xl mx-auto bg-white rounded-[2.5rem] shadow-2xl shadow-gray-200 border border-white overflow-hidden"
        >
            <div className="grid md:grid-cols-2">
                
                {/* Lado Izquierdo: Visual & Beneficios */}
                <div className="bg-gray-50 p-10 md:p-14 flex flex-col justify-center border-r border-gray-100 relative overflow-hidden">
                    {/* Decoración de fondo */}
                    <div className="absolute top-0 right-0 w-64 h-64 bg-orange-100 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 opacity-50"></div>

                    <div className="relative z-10">
                        <h3 className="text-xl font-bold text-gray-900 mb-6">¿Qué encontrarás dentro?</h3>
                        
                        <div className="space-y-6">
                            {[
                                { icon: ScanSearch, title: "Estatus en Vivo", desc: "Ubicación exacta de tu carga." },
                                { icon: FileText, title: "Documentación", desc: "Facturas y guías de remisión." },
                                { icon: History, title: "Historial", desc: "Registro de todos tus envíos pasados." },
                            ].map((item, i) => (
                                <div key={i} className="flex gap-4 items-start">
                                    <div className="p-3 bg-white rounded-xl shadow-sm text-[#f58220]">
                                        <item.icon size={20} />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-gray-800 text-sm">{item.title}</h4>
                                        <p className="text-xs text-gray-500">{item.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Lado Derecho: Acción Principal */}
                <div className="p-10 md:p-14 flex flex-col items-center justify-center text-center bg-white relative">
                     {/* Icono de Candado Animado */}
                     <motion.div 
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ delay: 0.3 }}
                        className="w-20 h-20 bg-orange-50 rounded-2xl flex items-center justify-center text-[#f58220] mb-6 relative group"
                     >
                        <Lock size={40} />
                        <div className="absolute top-2 right-2 w-3 h-3 bg-green-500 rounded-full border-2 border-white"></div>
                     </motion.div>

                     <h2 className="text-2xl font-bold text-gray-900 mb-2">Portal de Clientes</h2>
                     <p className="text-gray-500 text-sm mb-8 leading-relaxed">
                        Por razones de seguridad y privacidad, el rastreo detallado requiere autenticación.
                     </p>

                     <motion.a
                        whileHover={{ scale: 1.03 }}
                        whileTap={{ scale: 0.98 }}
                        href="https://www.globuscargo.us/#/sign-in" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="w-full py-4 bg-[#f58220] hover:bg-[#e07116] text-white rounded-xl font-bold shadow-lg shadow-orange-100 transition-all flex items-center justify-center gap-2"
                     >
                        Iniciar Sesión <ArrowRight size={18} />
                     </motion.a>

                     <div className="mt-6 flex items-center gap-2 text-xs text-gray-400 bg-gray-50 px-4 py-2 rounded-lg">
                        <ShieldCheck size={14} className="text-green-500"/>
                        <span>Conexión cifrada y segura</span>
                     </div>
                </div>
            </div>
            
            {/* Footer de la tarjeta con Logo */}
            <div className="bg-gray-900 p-4 flex justify-center opacity-95">
                <Image
                  src={globusLogo}
                  alt="Globus Cargo"
                  width={100}
                  height={30}
                  className="opacity-50 grayscale hover:grayscale-0 transition-all duration-500"
                />
            </div>
        </motion.div>

        {/* Mensaje de Ayuda */}
        <div className="text-center mt-12">
            <p className="text-sm text-gray-500">
                ¿Olvidaste tu contraseña o no tienes cuenta? <br className="md:hidden"/>
                <a href="https://wa.me/573001112233" className="text-[#f58220] font-bold hover:underline ml-1">
                    Contacta a soporte técnico
                </a>
            </p>
        </div>
      </section>

      <Footer />
    </main>
  );
}
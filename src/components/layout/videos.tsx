"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { 
  FaPlay, 
  FaUserPlus, 
  FaBoxOpen, 
  FaPaperPlane, 
  FaCreditCard 
} from "react-icons/fa";

// Datos de los pasos (Aquí configurarás tus videos más adelante)
const steps = [
  {
    id: 1,
    title: "Regístrate en Globus",
    desc: "Crea tu casillero gratuito en menos de 2 minutos y obtén tu dirección en Miami.",
    icon: <FaUserPlus />,
    videoUrl: null, // Poner aquí la URL del video cuando lo tengas
    duration: "1:20 min"
  },
  {
    id: 2,
    title: "Consolida tus Compras",
    desc: "Aprende a agrupar varios paquetes en un solo envío para ahorrar en el flete.",
    icon: <FaBoxOpen />,
    videoUrl: null,
    duration: "2:15 min"
  },
  {
    id: 3,
    title: "Crea tu Orden de Despacho",
    desc: "Indícanos cuándo y dónde quieres recibir tu mercancía con un solo clic.",
    icon: <FaPaperPlane />,
    videoUrl: null,
    duration: "1:45 min"
  },
  {
    id: 4,
    title: "Realiza tu Pago",
    desc: "Guía rápida sobre cómo pagar tus envíos de forma segura y liberar tu carga.",
    icon: <FaCreditCard />,
    videoUrl: null,
    duration: "1:10 min"
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5 }
  })
};

export default function Videos() {
  // Estado para manejar qué video se está reproduciendo (opcional para el futuro)
  const [playingId, setPlayingId] = useState<number | null>(null);

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Fondo decorativo sutil */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-orange-50 rounded-full blur-3xl opacity-50 translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Cabecera de la sección */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-[#f58220] font-bold tracking-wider uppercase text-sm mb-3 block"
          >
            Aprende a usar el sistema
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-black text-[#1a1a1a] mb-6"
          >
            Domina Globus en 4 Pasos
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-500 text-lg"
          >
            Hemos preparado estos videos cortos para guiarte desde tu registro hasta que recibes tu paquete en casa.
          </motion.p>
        </div>

        {/* Grid de Videos */}
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {steps.map((step, i) => (
            <motion.div
              key={step.id}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={cardVariants}
              className="group flex flex-col bg-white border border-gray-100 rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl hover:shadow-orange-500/10 transition-all duration-300 transform hover:-translate-y-1"
            >
              {/* === ZONA DEL VIDEO (Placeholder) === */}
              <div className="relative aspect-video bg-slate-900 group-hover:bg-slate-800 transition-colors overflow-hidden cursor-pointer">
                
                {/* Aquí iría la etiqueta <video> o <iframe> real. 
                    Por ahora, simulamos una miniatura elegante */}
                
                {/* Imagen de fondo (opcional, si tienes thumbnails) */}
                {/* <Image src={step.thumbnail} fill className="object-cover opacity-50" /> */}

                {/* Overlay Gradiente */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60"></div>

                {/* Botón Play Animado */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="relative flex items-center justify-center w-16 h-16 md:w-20 md:h-20 bg-white/10 backdrop-blur-sm rounded-full border border-white/30 text-white transition-transform duration-300 group-hover:scale-110 group-hover:bg-[#f58220] group-hover:border-[#f58220]">
                    <FaPlay className="ml-1 text-2xl md:text-3xl" />
                    {/* Ondas de pulso */}
                    <div className="absolute inset-0 rounded-full border border-white/40 animate-ping opacity-75 duration-[2000ms]"></div>
                  </div>
                </div>

                {/* Badge de Duración */}
                <div className="absolute bottom-4 right-4 bg-black/70 backdrop-blur-md text-white text-xs font-bold px-3 py-1 rounded-full border border-white/10">
                  {step.duration}
                </div>

                {/* Indicador de Paso (Visual dentro del video) */}
                <div className="absolute top-4 left-4">
                   <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white font-bold border border-white/20">
                     0{step.id}
                   </div>
                </div>
              </div>

              {/* === ZONA DE INFORMACIÓN === */}
              <div className="p-8 flex-1 flex flex-col justify-center relative">
                <div className="flex items-start gap-4">
                  {/* Icono temático */}
                  <div className="mt-1 p-3 bg-orange-50 text-[#f58220] rounded-xl text-xl shrink-0 group-hover:bg-[#f58220] group-hover:text-white transition-colors duration-300">
                    {step.icon}
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-[#f58220] transition-colors">
                      {step.title}
                    </h3>
                    <p className="text-gray-500 text-sm leading-relaxed">
                      {step.desc}
                    </p>
                  </div>
                </div>
              </div>

            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
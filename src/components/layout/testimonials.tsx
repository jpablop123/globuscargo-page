"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight, Instagram, Quote, Star } from "lucide-react";
import Image from "next/image";
import { Montserrat } from "next/font/google";

// Importación de imágenes
import adrianAlvarez from "@/assets/img/logo/fotosreveladas/adrianalvarez.jpeg";
import catarodriguez from "@/assets/img/logo/fotosreveladas/catalianrodriguez.jpeg";
import nicoCortes from "@/assets/img/logo/fotosreveladas/nicolas cortes.jpeg";
import joseBravo from "@/assets/img/logo/fotosreveladas/josebravo.jpeg";
import eduard from "@/assets/img/logo/fotosreveladas/eduardo oliveros.jpeg";
import jose from "@/assets/img/logo/fotosreveladas/josealejandro.jpeg";
import marcela from "@/assets/img/logo/fotosreveladas/marcela.jpeg";

const montserrat = Montserrat({ subsets: ["latin"], weight: ["400", "500", "600", "700"] });

const testimonials = [
  {
    name: "Adrian Alvarez",
    city: "Bogotá",
    role: "Emprendedor", // Campo opcional agregado para dar autoridad
    ig: "@adrianzon",
    text: "Excelente servicio, mis compras llegaron puntuales y en perfecto estado. Los recomiendo totalmente.",
    imgSrc: adrianAlvarez,
    rating: 5,
  },
  {
    name: "Catalina Rodriguez",
    city: "Bucaramanga",
    role: "Cliente Frecuente",
    ig: "@catalinarodriguez27",
    text: "Me asesoraron en todo y el envío salió más económico de lo que pensaba. Cero estrés.",
    imgSrc: catarodriguez,
    rating: 5,
  },
  {
    name: "Nicolas Cortes",
    city: "Bogotá",
    role: "Comprador Online",
    ig: "@nicolascortesd",
    text: "La atención por WhatsApp fue inmediata, sentí mucha confianza. Seguiré usando Globus Cargo.",
    imgSrc: nicoCortes,
    rating: 5,
  },
  {
    name: "Jose Fernando Bravo",
    city: "Bogotá",
    role: "Cliente VIP",
    ig: "@josebravo100",
    text: "El proceso fue súper fácil, desde que registré mi casillero hasta que recibí en casa.",
    imgSrc: joseBravo,
    rating: 5,
  },
  {
    name: "Eduardo Oliveros",
    city: "Medellín",
    role: "Empresario",
    ig: "@eduardoliveros",
    text: "Rápidos, seguros y económicos. Mis pedidos siempre con Globus.",
    imgSrc: eduard,
    rating: 5,
  },
  {
    name: "Jose Alejandro",
    city: "Barranquilla",
    role: "Cliente Satisfecho",
    ig: "@jpinva2003",
    text: "Pensé que sería complicado, pero todo fue transparente y confiable. Muy satisfecho.",
    imgSrc: jose,
    rating: 5,
  },
  {
    name: "Marcela Vasquez",
    city: "Barranquilla",
    role: "Cliente Frecuente",
    ig: "@marcela.v.galeano.3",
    text: "Yo solo quería que llegara bien… y llegó perfecto, sin enredos ni vueltas raras. Hasta me sorprendió lo fácil que fue.",
    imgSrc: marcela,
    rating: 5,
  },
];

export default function TestimonialsSection() {
  const [current, setCurrent] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return; // Si el usuario hace hover, pausamos el timer

    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [isPaused]);

  const next = () => setCurrent((prev) => (prev + 1) % testimonials.length);
  const prev = () =>
    setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  return (
    <section className={`${montserrat.className} relative py-24 px-6 overflow-hidden bg-slate-50`}>
      
      {/* === Background Decorativo === */}
      <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:20px_20px] opacity-50"></div>
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-orange-100 rounded-full blur-[100px] opacity-40 translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-orange-100 rounded-full blur-[80px] opacity-40 -translate-x-1/2 translate-y-1/2"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* === Header de Sección === */}
        <div className="text-center mb-16">
          <span className="text-[#f58220] font-bold tracking-widest uppercase text-sm mb-3 block">
            Testimonios Reales
          </span>
          <h2 className="text-3xl md:text-5xl font-black text-gray-900 mb-6">
            Confianza que se siente
          </h2>
          <div className="w-20 h-1.5 bg-[#f58220] mx-auto rounded-full"></div>
        </div>

        {/* === Carrusel Principal === */}
        <div 
            className="relative max-w-5xl mx-auto"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
        >
          {/* Botones de Navegación Flotantes (Desktop) */}
          <div className="absolute top-1/2 -translate-y-1/2 -left-6 z-20 hidden lg:block">
             <button onClick={prev} className="p-4 bg-white rounded-full shadow-lg text-gray-400 hover:text-[#f58220] hover:scale-110 transition-all border border-gray-100">
                <ChevronLeft size={24} />
             </button>
          </div>
          <div className="absolute top-1/2 -translate-y-1/2 -right-6 z-20 hidden lg:block">
             <button onClick={next} className="p-4 bg-white rounded-full shadow-lg text-gray-400 hover:text-[#f58220] hover:scale-110 transition-all border border-gray-100">
                <ChevronRight size={24} />
             </button>
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="bg-white rounded-[2.5rem] shadow-2xl shadow-gray-200 border border-white overflow-hidden"
            >
              <div className="grid md:grid-cols-5 h-full min-h-[400px]">
                
                {/* === Columna Imagen (Izquierda) === */}
                <div className="md:col-span-2 relative h-64 md:h-auto overflow-hidden">
                    <Image
                        src={testimonials[current].imgSrc}
                        alt={testimonials[current].name}
                        fill
                        className="object-cover transition-transform duration-700 hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent md:bg-gradient-to-r md:from-transparent md:to-black/10"></div>
                    
                    {/* Badge sobre imagen */}
                    <div className="absolute bottom-6 left-6 text-white z-10">
                         <div className="flex gap-1 mb-2">
                            {[...Array(5)].map((_, i) => (
                                <Star key={i} size={16} fill="#f58220" stroke="none" />
                            ))}
                         </div>
                         <p className="font-bold text-sm tracking-wide uppercase opacity-90">{testimonials[current].role}</p>
                    </div>
                </div>

                {/* === Columna Contenido (Derecha) === */}
                <div className="md:col-span-3 p-8 md:p-12 flex flex-col justify-center relative">
                    {/* Marca de agua de comillas */}
                    <Quote className="absolute top-8 right-8 text-orange-50 w-24 h-24 -rotate-12" strokeWidth={5} />
                    
                    <div className="relative z-10">
                        <p className="text-xl md:text-2xl text-gray-700 italic leading-relaxed mb-8 font-medium">
                            &ldquo;{testimonials[current].text}&rdquo;
                        </p>

                        <div className="flex items-center justify-between border-t border-gray-100 pt-6">
                            <div>
                                <h4 className="text-xl font-bold text-gray-900">{testimonials[current].name}</h4>
                                <p className="text-sm text-gray-500">{testimonials[current].city}, Colombia</p>
                            </div>

                            <a 
                                href={`https://instagram.com/${testimonials[current].ig.substring(1)}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 px-4 py-2 bg-orange-50 text-[#f58220] rounded-full text-sm font-bold hover:bg-[#f58220] hover:text-white transition-all"
                            >
                                <Instagram size={18} />
                                <span className="hidden sm:inline">Ver Perfil</span>
                            </a>
                        </div>
                    </div>
                </div>

              </div>
            </motion.div>
          </AnimatePresence>

          {/* === Indicadores (Dots) === */}
          <div className="flex justify-center mt-10 gap-3">
             {testimonials.map((_, i) => (
               <button
                 key={i}
                 onClick={() => setCurrent(i)}
                 className={`h-1.5 rounded-full transition-all duration-300 ${
                   i === current ? "w-8 bg-[#f58220]" : "w-2 bg-gray-300 hover:bg-gray-400"
                 }`}
                 aria-label={`Ir al testimonio ${i + 1}`}
               />
             ))}
          </div>

           {/* Botones Móviles (Debajo) */}
           <div className="flex justify-center gap-6 mt-6 lg:hidden">
              <button onClick={prev} className="p-3 bg-white shadow-md rounded-full text-[#f58220] active:scale-95"><ChevronLeft/></button>
              <button onClick={next} className="p-3 bg-white shadow-md rounded-full text-[#f58220] active:scale-95"><ChevronRight/></button>
           </div>

        </div>
      </div>
    </section>
  );
}
"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Instagram } from "lucide-react";
import Image from "next/image";

// Importación de imágenes
import adrianAlvarez from "@/assets/img/logo/fotosreveladas/adrianalvarez.jpeg";
import catarodriguez from "@/assets/img/logo/fotosreveladas/catalianrodriguez.jpeg";
import nicoCortes from "@/assets/img/logo/fotosreveladas/nicolas cortes.jpeg";
import joseBravo from "@/assets/img/logo/fotosreveladas/josebravo.jpeg";
import eduard from "@/assets/img/logo/fotosreveladas/eduardo oliveros.jpeg";
import jose from "@/assets/img/logo/fotosreveladas/josealejandro.jpeg";
import marcela from "@/assets/img/logo/fotosreveladas/marcela.jpeg";

// --- UTILIDAD DE PLACEHOLDER ---
// CORRECCIÓN: Se agrega el tipo ': string' al parámetro name
const getPlaceholderUrl = (name: string) => {
    const initial = name.charAt(0).toUpperCase();
    return `https://placehold.co/100x100/f58220/ffffff?text=${initial}&font=sans-serif`;
}

// --- DATOS DE TESTIMONIOS ---
const testimonials = [
    {
        name: "Adrian Alvarez",
        city: "Bogotá",
        ig: "@adrianzon",
        text: "Excelente servicio, mis compras llegaron puntuales y en perfecto estado. Los recomiendo totalmente.",
        imgSrc: adrianAlvarez,
      },
  {
    name: "Catalina Rodriguez",
    city: "Bucaramanga",
    ig: "@catalinarodriguez27",
    text: "Me asesoraron en todo y el envío salió más económico de lo que pensaba. Cero estrés.",
    imgSrc: catarodriguez
  },
  {
    name: "Nicolas Cortes ",
    city: "Bogota",
    ig: "@nicolascortesd",
    text: "La atención por WhatsApp fue inmediata, sentí mucha confianza. Seguiré usando Globus Cargo.",
    imgSrc: nicoCortes
  },
  {
    name: "Jose Fernando Bravo",
    city: "Bogota",
    ig: "@josebravo100",
    text: "El proceso fue súper fácil, desde que registré mi casillero hasta que recibí en casa.",
    imgSrc: joseBravo
  },
  {
    name: "Eduardo Oliveros",
    city: "Medellin",
    ig: "@eduardoliveros",
    text: "Rápidos, seguros y económicos. Mi pedidos siempre con Globus.",
    imgSrc: eduard
  },
  {
    name: "Jose Alejandro",
    city: "Barranquilla",
    ig: "@jpinva2003",
    text: "Pensé que sería complicado, pero todo fue transparente y confiable. Muy satisfecho.",
    imgSrc: jose
  },
  {
    name: "Marcela Vasquez",
    city: "Barranquilla",
    ig: "@marcela.v.galeano.3",
    text: "Yo solo quería que llegara bien… y llegó perfecto, sin enredos ni vueltas raras. Hasta me sorprendió lo fácil que fue. Ya tengo lista la próxima compra",
    imgSrc: marcela
  },
];

export default function App() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    // Auto-advance every 6 seconds
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  const next = () => setCurrent((prev) => (prev + 1) % testimonials.length);
  const prev = () =>
    setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  // Custom styling for the glowing card effect on hover
  const cardStyle = {
    '--tw-shadow-color': 'rgba(245, 130, 32, 0.4)', // Base orange shadow color
  } as React.CSSProperties; // CORRECCIÓN ADICIONAL: Casteo de estilo para CSS variables

  return (
    <section className="relative py-20 md:py-24 px-4 sm:px-6 bg-gray-50 overflow-hidden font-sans">
      
      {/* === Background Gradients & Decoration === */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
        <div className="absolute top-[-50px] left-[-50px] w-48 h-48 bg-[#f58220] rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
        <div className="absolute bottom-[-50px] right-[-50px] w-48 h-48 bg-[#ff944d] rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-4000"></div>
      </div>

      <div className="max-w-6xl mx-auto text-center relative z-10">
        {/* Título */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold pb-2 mb-4 bg-gradient-to-r from-[#f58220] to-[#ff944d] bg-clip-text text-transparent">
          Lo que dicen nuestros clientes
        </h2>
        <p className="text-lg text-gray-600 mb-16">
          Historias de éxito de envíos puntuales y seguros.
        </p>

        <div className="relative flex items-center justify-center">
          
          {/* Botones de Navegación (Desktop) */}
          <button
            onClick={prev}
            className="hidden lg:flex absolute -left-16 xl:-left-20 z-20 w-12 h-12 bg-white shadow-xl p-3 rounded-full 
            text-[#f58220] hover:bg-orange-50 transition duration-300 transform hover:scale-105"
            aria-label="Anterior testimonio"
          >
            <ChevronLeft size={28} />
          </button>
          
          <div className="w-full md:w-3/4 lg:w-3/5 xl:w-1/2 relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                style={cardStyle}
                className="relative bg-white rounded-3xl p-8 sm:p-12 shadow-2xl transition-all duration-500 
                hover:shadow-[0_20px_40px_var(--tw-shadow-color)] hover:border-orange-200 border border-gray-100"
              >
                
                {/* Ícono de Comillas Grande */}
                <div className="absolute top-4 left-4 text-4xl text-[#f58220] opacity-10">
                    &ldquo;
                </div>
                
                <div className="flex flex-col items-center relative z-10 text-center">
                  
                  {/* Avatar con Anillo de Gradiente */}
                  <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-white 
                  bg-gradient-to-tr from-[#f58220] to-[#ff944d] p-[3px] shadow-lg">
                    <div className="rounded-full w-full h-full bg-white overflow-hidden">
                      <Image
                        src={testimonials[current].imgSrc}
                        alt={testimonials[current].name}
                        width={94}
                        height={94}
                        className="object-cover w-full h-full rounded-full"
                      />
                    </div>
                  </div>

                  {/* Texto del Testimonio */}
                  <p className="mt-8 text-lg sm:text-xl italic text-gray-700 leading-relaxed max-w-lg">
                    “{testimonials[current].text}”
                  </p>
                  
                  {/* Separador elegante */}
                  <div className="w-16 h-1 bg-[#f58220] opacity-70 rounded-full my-6"></div>
                  
                  {/* Información de Usuario */}
                  <h4 className="font-extrabold text-gray-900 text-xl tracking-tight">
                    {testimonials[current].name}
                  </h4>
                  <span className="text-sm font-medium text-gray-500 mb-2">
                    {testimonials[current].city}
                  </span>
                  
                  {/* Instagram Handle */}
                  <a 
                    href={`https://instagram.com/${testimonials[current].ig.substring(1)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-sm font-semibold text-[#f58220] hover:text-[#ff944d] transition duration-300"
                  >
                    <Instagram size={16} className="mr-1" />
                    {testimonials[current].ig}
                  </a>

                </div>
              </motion.div>
            </AnimatePresence>

            {/* Dots (Mobile & Desktop) */}
            <div className="flex justify-center mt-8 gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  aria-label={`Testimonio ${i + 1}`}
                  className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                    i === current
                      ? "bg-gradient-to-r from-[#f58220] to-[#ff944d] shadow-md w-6"
                      : "bg-gray-300 hover:bg-gray-400"
                  }`}
                />
              ))}
            </div>
          </div>
          
          {/* Botones de Navegación (Desktop) */}
          <button
            onClick={next}
            className="hidden lg:flex absolute -right-16 xl:-right-20 z-20 w-12 h-12 bg-white shadow-xl p-3 rounded-full 
            text-[#f58220] hover:bg-orange-50 transition duration-300 transform hover:scale-105"
            aria-label="Siguiente testimonio"
          >
            <ChevronRight size={28} />
          </button>
          
        </div>
        
        {/* Botones de Navegación (Mobile) */}
        <div className="flex justify-center mt-8 gap-4 lg:hidden">
            <button
                onClick={prev}
                className="w-10 h-10 bg-white shadow-md p-2 rounded-full text-[#f58220] hover:bg-orange-50 transition"
                aria-label="Anterior testimonio (móvil)"
            >
                <ChevronLeft size={24} />
            </button>
            <button
                onClick={next}
                className="w-10 h-10 bg-white shadow-md p-2 rounded-full text-[#f58220] hover:bg-orange-50 transition"
                aria-label="Siguiente testimonio (móvil)"
            >
                <ChevronRight size={24} />
            </button>
        </div>

      </div>
    </section>
  );
}
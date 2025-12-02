"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import { ChevronDown } from "lucide-react";

export default function PreguntasFrecuentesPage() {
  // 1. Tipamos el estado para que acepte string o null
  const [active, setActive] = useState<string | null>(null);

  // 2. Tipamos el parámetro 'index' como string (porque es el ID único)
  const toggle = (index: string) => {
    setActive(active === index ? null : index);
  };

  const preguntas = [
    {
      categoria: "Casillero Virtual",
      color: "from-orange-50 to-white",
      items: [
        {
          pregunta: "¿Cómo abrir mi Casillero Virtual de Globus Cargo?",
          respuesta:
            "Puedes abrir tu Casillero realizando el registro gratuito en nuestro sitio web o desde la aplicación móvil. Solo debes ingresar tus datos personales y dirección a la cual deseas que lleguen tus productos. Recibirás vía correo electrónico tu número de casillero y dirección en Miami.",
        },
        {
          pregunta: "¿Cuánto cuesta el Casillero Virtual?",
          respuesta:
            "El registro y uso del Casillero Virtual es completamente gratuito. Solo pagarás el costo de envío cuando decidas despachar tus paquetes a Colombia.",
        },
        {
          pregunta: "¿Cómo funciona el Casillero Virtual?",
          respuesta:
            "Con tu Casillero Virtual obtienes una dirección en Miami para tus compras en línea. Envías tus productos a esa dirección, nosotros los recibimos, consolidamos y enviamos a tu domicilio en Colombia de forma rápida y segura.",
        },
        {
          pregunta: "¿Con mi Casillero Virtual puedo enviar y recibir?",
          respuesta:
            "Sí, puedes usarlo tanto para recibir tus compras desde Estados Unidos como para enviar paquetes desde Colombia a otros destinos internacionales.",
        },
      ],
    },
    {
      categoria: "Envíos e Impuestos",
      color: "from-white to-orange-50",
      items: [
        {
          pregunta: "¿Cuáles son los impuestos de envío?",
          respuesta:
            "Los impuestos dependen del tipo de producto y su valor declarado. Si el valor declarado es menor a 200 USD, el envío puede estar exento. Para montos superiores, se aplican impuestos de importación e IVA sobre el valor total de la mercancía.",
        },
        {
          pregunta: "¿Cuáles son las restricciones de envío?",
          respuesta:
            "No se pueden enviar armas, explosivos, drogas, productos inflamables, dinero en efectivo, animales vivos, ni alimentos perecederos. Si tienes dudas sobre un producto específico, puedes consultarnos.",
        },
        {
          pregunta: "¿Cuánto tiempo tardan los envíos?",
          respuesta:
            "Los envíos internacionales suelen tardar entre 3 a 7 días hábiles, dependiendo del destino y el tipo de servicio seleccionado.",
        },
      ],
    },
    {
      categoria: "Aplicación y Sistema",
      color: "from-orange-50 to-white",
      items: [
        {
          pregunta: "¿Dónde encuentro mis direcciones de envío?",
          respuesta:
            "Ingresa a tu cuenta desde la App o el portal web de Globus Cargo, y dirígete a la sección 'Mis Destinatarios'. Allí verás las direcciones activas de tu casillero en Miami y otras ciudades.",
        },
        {
          pregunta: "¿Dónde se ven mis paquetes pendientes (Warehouse)?",
          respuesta:
            "En la sección 'Warehouses' de tu cuenta podrás visualizar todos los paquetes recibidos en tu casillero que están listos para  enviar.",
        },
        {
          pregunta: "¿Cómo puedo hacer seguimiento de mis envíos?",
          respuesta: "Puedes rastrear tus envíos ingresando a la opción 'Mis Guías' dentro de tu panel de usuario. Allí encontrarás el historial de tus envíos y podrás hacer seguimiento con el número de guía o tracking.",
        },
      ],
    },
    {
      categoria: "Pagos y Seguimiento",
      color: "from-white to-orange-50",
      items: [
        {
          pregunta: "¿Cuáles son los medios de pago aceptados?",
          respuesta:
            "Aceptamos tarjetas de crédito internacionales (Visa, Mastercard, Amex), PayPal, Zelle y transferencias bancarias. También puedes pagar en pesos colombianos a través de Nequi, Daviplata o PSE.",
        },
        {
          pregunta: "¿Cómo puedo descargar mi factura?",
          respuesta:
            "Tu factura será enviada directamente a tu correo registrado una vez el envío esté listo para ser entregado.",
        },
      ],
    },
  ];

  return (
    <main className="bg-white text-[#847E7E] font-[Montserrat] overflow-hidden">
      <Header />

      {/* === HERO === */}
      <section className="bg-[#F68527] text-white py-20 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/patterns/shapes.svg')] opacity-10" />
        <div className="relative z-10 max-w-4xl mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
            Preguntas Frecuentes
          </h1>
          <p className="mt-4 text-lg text-white/90">
            Encuentra respuestas claras sobre envíos, casillero virtual y el uso
            de nuestra aplicación.
          </p>
          <a
            href="/contacto"
            className="mt-6 inline-block bg-white text-[#f58220] px-8 py-3 rounded-full font-semibold hover:scale-105 shadow-md transition"
          >
            Contactar Asesor
          </a>
        </div>
      </section>

      {/* === FAQ SECTIONS === */}
      <section className="max-w-6xl mx-auto py-16 px-6 lg:px-12 space-y-20">
        {preguntas.map((cat, i) => (
          <div
            key={i}
            className={`bg-gradient-to-b ${cat.color} p-8 md:p-12 rounded-3xl shadow-lg`}
          >
            <h2 className="text-3xl font-extrabold text-gray-900 mb-8 text-center">
              {cat.categoria}
            </h2>

            <div className="space-y-6">
              {cat.items.map((item, index) => {
                const id = `${i}-${index}`;
                const isActive = active === id;
                return (
                  <div
                    key={id}
                    className="bg-white rounded-2xl shadow-md overflow-hidden border border-[#f58220]/10"
                  >
                    <button
                      onClick={() => toggle(id)}
                      className="w-full flex justify-between items-center text-left px-6 py-5 font-semibold text-gray-900 hover:bg-orange-50 transition"
                    >
                      <span>{item.pregunta}</span>
                      <motion.div
                        animate={{ rotate: isActive ? 180 : 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <ChevronDown className="text-[#f58220]" />
                      </motion.div>
                    </button>

                    <AnimatePresence>
                      {isActive && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.4 }}
                          className="px-6 pb-5 text-sm text-[#847E7E] bg-orange-50/40"
                        >
                          {item.respuesta}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </section>

      <Footer />
    </main>
  );
}
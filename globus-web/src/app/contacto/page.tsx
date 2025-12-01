"use client";

import { motion } from "framer-motion";
import { Montserrat } from "next/font/google";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import { MapPin, Phone, Mail, Clock, Send, Building2 } from "lucide-react";

const montserrat = Montserrat({ subsets: ["latin"], weight: ["400", "600", "700"] });

export default function ContactoPage() {
  const locations = [
    {
      name: "Bodega Miami 1",
      address: "2120 NW 96th Ave, Doral, FL 33172",
      country: "Estados Unidos",
      map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3588.1908285950935!2d-80.3658321!3d25.7948293!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88d9b9203e4edb2f%3A0x2485f0da27d9e74e!2s2120%20NW%2096th%20Ave%2C%20Doral%2C%20FL%2033172%2C%20EE.%20UU.!5e0!3m2!1ses!2sus!4v1728253105000!5m2!1ses!2sus",
    },
    {
      name: "Bodega Miami 2",
      address: "1414 NW 82nd Ave, Doral, FL 33126",
      country: "Estados Unidos",
      map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3588.6852045560734!2d-80.33082568461692!3d25.7898699129559!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88d9b898ba1c891b%3A0x91d9d9b7f7c7d5e!2s1414%20NW%2082nd%20Ave%2C%20Doral%2C%20FL%2033126%2C%20EE.%20UU.!5e0!3m2!1ses!2sus!4v1731031000000!5m2!1ses!2sus",
    },
    {
      name: "Bodega Bogotá",
      address: "Zona Industrial Montevideo, Bogotá",
      country: "Colombia",
      map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3976.8341697168953!2d-74.08656702598203!3d4.628982742367956!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e3f99d6c8b8b021%3A0x90f9a7c9c92f93cf!2sBogot%C3%A1%2C%20Colombia!5e0!3m2!1ses!2sco!4v1728253167500!5m2!1ses!2sco",
    },
    {
      name: "Oficina Barranquilla",
      address: "Cra. 53 #82-299 Local 3, Nte. Centro Histórico",
      country: "Barranquilla, Atlántico - Colombia",
      map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3957.682312790228!2d-74.82524972596835!3d10.993606857914604!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8ef42d01f3cbfef3%3A0xe8a6d3c7a4a9f!2sCra.%2053%20%2382-299%2C%20Nte.%20Centro%20Hist%C3%B3rico%2C%20Barranquilla%2C%20Atl%C3%A1ntico%2C%20Colombia!5e0!3m2!1ses!2sco!4v1731032000000!5m2!1ses!2sco",
    },
  ];

  const contacts = [
    { icon: <Phone className="text-[#f58220]" size={30} />, title: "Teléfono", text: "+1 (786) 531-7987" },
    { icon: <Mail className="text-[#f58220]" size={30} />, title: "Correo", text: "info@globuscargo.com" },
    { icon: <Clock className="text-[#f58220]" size={30} />, title: "Horario", text: "Lunes a Viernes: 9:00 AM – 6:00 PM" },
  ];

  return (
    <main className={`${montserrat.className} bg-[#F9FAFB] text-[#2d2d2d]`}>
      <Header />

      {/* === HERO === */}
      <section className="relative bg-gradient-to-r from-[#f58220] to-[#fb923c] text-white pt-44 pb-20 px-6 text-center overflow-hidden">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-4xl md:text-6xl font-extrabold mb-4"
        >
          Contáctanos
        </motion.h1>
        <p className="text-base md:text-lg text-white/90 max-w-2xl mx-auto leading-relaxed">
          Estamos aquí para ayudarte con tus envíos, compras o preguntas sobre nuestro servicio.
        </p>
      </section>

      {/* === MAPAS === */}
      <section className="max-w-6xl mx-auto px-6 md:px-10 py-24 grid gap-16">
        {locations.map((loc, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: idx * 0.1 }}
            viewport={{ once: true }}
            className="bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden md:grid md:grid-cols-2"
          >
            <div className="relative h-[300px] md:h-full">
              <iframe
                src={loc.map}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                loading="lazy"
                allowFullScreen
                className="absolute inset-0"
              ></iframe>
            </div>
            <div className="p-8 flex flex-col justify-center text-center md:text-left">
              <h3 className="text-2xl font-bold text-gray-900 flex items-center justify-center md:justify-start gap-2 mb-2">
                <Building2 className="text-[#f58220]" /> {loc.name}
              </h3>
              <p className="text-gray-600 mb-1">{loc.address}</p>
              <p className="text-sm text-gray-500">{loc.country}</p>
            </div>
          </motion.div>
        ))}
      </section>

      {/* === INFO DE CONTACTO === */}
      <section className="bg-white py-20">
        <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-12 text-center px-6">
          {contacts.map((item, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -5, scale: 1.05 }}
              transition={{ type: "spring", stiffness: 150 }}
              className="p-8 bg-[#f58220]/5 rounded-3xl shadow-md border border-[#f58220]/10"
            >
              <div className="mb-3 flex justify-center">{item.icon}</div>
              <h4 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h4>
              <p className="text-gray-600 text-sm">{item.text}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* === FORMULARIO DE CONTACTO === */}
      <section className="max-w-4xl mx-auto px-6 md:px-10 py-24 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-gray-900 mb-6"
        >
          Escríbenos un mensaje
        </motion.h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-10">
          Nuestro equipo responderá lo antes posible para ayudarte con tus envíos, compras o soporte.
        </p>

        <motion.form
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          onSubmit={(e) => {
            e.preventDefault();
            window.open(
              `https://wa.me/573001112233?text=${encodeURIComponent(
                "Hola 👋, quiero más información sobre los servicios de Globus Cargo."
              )}`,
              "_blank"
            );
          }}
          className="bg-white p-8 rounded-3xl shadow-xl border border-gray-100 text-left space-y-6"
        >
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Nombre completo
              </label>
              <input
                type="text"
                placeholder="Tu nombre"
                className="w-full border border-gray-300 rounded-xl p-3 focus:ring-2 focus:ring-[#f58220] outline-none"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Correo electrónico
              </label>
              <input
                type="email"
                placeholder="tucorreo@email.com"
                className="w-full border border-gray-300 rounded-xl p-3 focus:ring-2 focus:ring-[#f58220] outline-none"
                required
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Mensaje</label>
            <textarea
              rows={4}
              placeholder="Cuéntanos cómo podemos ayudarte..."
              className="w-full border border-gray-300 rounded-xl p-3 focus:ring-2 focus:ring-[#f58220] outline-none"
              required
            ></textarea>
          </div>

          <div className="text-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              type="submit"
              className="bg-[#f58220] text-white px-10 py-3 rounded-full font-semibold text-lg shadow-md hover:bg-[#e07116] transition-all flex items-center justify-center gap-2 mx-auto"
            >
              <Send size={18} /> Enviar mensaje por WhatsApp
            </motion.button>
          </div>
        </motion.form>
      </section>

      <Footer />
    </main>
  );
}
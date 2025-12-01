"use client";
import logo from "@/assets/img/logo/globuswhite.png"
import Image from "next/image";
import { motion } from "framer-motion";
import {
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  Phone,
  MapPin,
  Package,
  Users,
  Ship,
  Globe,
} from "lucide-react";
import { useEffect, useState } from "react";

// ===== Hook contador animado =====
function useCounter(end: number, duration = 2000) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    let start = 0;
    const increment = end / (duration / 16);
    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        start = end;
        clearInterval(timer);
      }
      setCount(Math.floor(start));
    }, 16);
    return () => clearInterval(timer);
  }, [end, duration]);
  return count;
}

export default function Footer() {
  const clients = useCounter(3000);
  const packages = useCounter(65000);
  const cargos = useCounter(3000);
  const global = useCounter(2000);

  return (
    <footer className="relative overflow-hidden bg-[rgb(132,126,126)] text-white border-t border-white/20">
      {/* === Fondo decorativo sutil === */}
      <motion.div
        animate={{ opacity: [0.05, 0.12, 0.05] }}
        transition={{ repeat: Infinity, duration: 8 }}
        className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.08),transparent_80%)]"
      />

      {/* === Métricas === */}
      <section className="relative z-10 max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 px-6 py-16 text-center">
        {[
          { icon: Users, label: "Clientes Atendidos", value: clients },
          { icon: Package, label: "Paquetes Entregados", value: packages },
          { icon: Ship, label: "Cargas Transportadas", value: cargos },
          { icon: Globe, label: "Envíos Internacionales", value: global },
        ].map((stat, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.06 }}
            className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl py-6 shadow-[0_2px_10px_rgba(255,255,255,0.1)] transition-all"
          >
            <stat.icon
              className="mx-auto mb-3 text-[#f58220] drop-shadow-[0_0_8px_rgba(245,130,32,0.5)]"
              size={34}
            />
            <h3 className="text-3xl font-bold text-white">
              {stat.value.toLocaleString()}+
            </h3>
            <p className="text-sm text-white/90 mt-1">{stat.label}</p>
          </motion.div>
        ))}
      </section>

      {/* === Contenido principal === */}
      <section className="relative z-10 max-w-7xl mx-auto px-6 pb-20 grid md:grid-cols-4 gap-12">
        {/* Logo + descripción */}
        <div className="space-y-4">
          <Image
            src= {logo}
            alt="Globus Cargo"
            width={160}
            height={60}
            className="drop-shadow-[0_0_12px_rgba(255,255,255,0.4)]"
          />
          <p className="text-sm text-white/90 max-w-xs leading-relaxed">
            En <span className="text-[#f58220] font-semibold">Globus Cargo</span> conectamos el
            comercio entre USA y Latinoamérica con soluciones logísticas rápidas,
            seguras y personalizadas.
          </p>
        </div>

        {/* Servicios */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Servicios</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a
                href="https://globuscargo.us/#/sign-up?a=cec123e3-17bf-4be8-8f46-1fe6ec3d31b7"
                className="hover:text-[#f58220] hover:underline decoration-[#f58220] decoration-2 underline-offset-4 transition-all"
              >
                Casillero en Miami
              </a>
            </li>
            <li>
              <a
                href="/rastrear"
                className="hover:text-[#f58220] hover:underline decoration-[#f58220] decoration-2 underline-offset-4 transition-all"
              >
                Rastreo de Paquetes
              </a>
            </li>
            <li>
              <a
                href="/cotizar"
                className="hover:text-[#f58220] hover:underline decoration-[#f58220] decoration-2 underline-offset-4 transition-all"
              >
                Cotizar Envío
              </a>
            </li>
          </ul>
        </div>

        {/* Empresa */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Empresa</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a
                href="/nosotros"
                className="hover:text-[#f58220] hover:underline decoration-[#f58220] decoration-2 underline-offset-4 transition-all"
              >
                Sobre Nosotros
              </a>
            </li>
            <li>
              <a
                href="/corporativo"
                className="hover:text-[#f58220] hover:underline decoration-[#f58220] decoration-2 underline-offset-4 transition-all"
              >
                Clientes Corporativos
              </a>
            </li>
            <li>
              <a
                href="/contacto"
                className="hover:text-[#f58220] hover:underline decoration-[#f58220] decoration-2 underline-offset-4 transition-all"
              >
                Contáctanos
              </a>
            </li>
          </ul>
        </div>

        {/* Contacto */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Contáctanos</h3>
          <ul className="space-y-3 text-sm">
            <li className="flex items-center gap-2">
              <Phone size={16} className="text-[#f58220]" /> +1 (786) 531-7987
            </li>
            <li className="flex items-center gap-2">
              <Mail size={16} className="text-[#f58220]" /> info@globuscargo.com
            </li>
            <li className="flex items-start gap-2">
              <MapPin size={16} className="text-[#f58220] mt-1" />
              <span>2120 NW 96th Ave<br />Doral, FL 33172, USA</span>
            </li>
          </ul>

          {/* Redes */}
          <div className="flex gap-4 mt-6">
            {[
              { icon: Instagram, url: "https://instagram.com/globuscargo_" },
              { icon: Facebook, url: "https://facebook.com/globuscargo" },
              { icon: Linkedin, url: "https://linkedin.com/company/globuscargo" },
            ].map((s, i) => (
              <motion.a
                key={i}
                whileHover={{
                  scale: 1.15,
                  backgroundColor: "#fff",
                  color: "#f58220",
                  boxShadow: "0 0 15px rgba(255,255,255,0.5)",
                }}
                href={s.url}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-[rgba(255,255,255,0.15)] transition-all duration-300"
              >
                <s.icon size={20} />
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* === Línea final === */}
      <div className="relative z-10 border-t border-white/30 py-6 text-center text-sm text-white/80">
        © {new Date().getFullYear()}{" "}
        <span className="text-[#f58220] font-semibold">Globus Cargo</span>. Todos los derechos reservados.
      </div>
    </footer>
  );
}
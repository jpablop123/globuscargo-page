"use client";

import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import logo from "@/assets/img/logo/globusorange.png";
import { Montserrat } from "next/font/google";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Menu, X, User, Box, Briefcase, Info } from "lucide-react";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

// Estructura de datos para mantener el código limpio
const navItems = [
  {
    key: "personas",
    label: "Personas",
    icon: <User size={18} />,
    links: [
      { href: "/tarifas", label: "Tarifas USA → COL" },
      { href: "/colombiausa", label: "COL → USA" },
      { href: "/casillero", label: "Casillero Virtual" },
      { href: "/preguntas", label: "Preguntas Frecuentes" },
    ],
  },
  {
    key: "envios",
    label: "Envíos",
    icon: <Box size={18} />,
    links: [
      { href: "/cotizar", label: "Cotizar Envío" },
      { href: "/track", label: "Rastrear Paquete" },
    ],
  },
  {
    key: "empresas",
    label: "Empresas",
    icon: <Briefcase size={18} />,
    links: [
      { href: "/corporativo", label: "Corporativo" },
    ],
  },
  {
    key: "info",
    label: "Información",
    icon: <Info size={18} />,
    links: [
      { href: "/como-funciona", label: "Cómo Funciona" },
      { href: "/nosotros", label: "Nosotros" },
      { href: "/terminos", label: "Términos" },
      { href: "/contacto", label: "Contáctanos" },
    ],
  },
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false); // Mobile Menu State
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null); // Desktop Dropdown State
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null); // Mobile Accordion State
  
  const navRef = useRef<HTMLElement | null>(null);
  const pathname = usePathname();

  // Cerrar todo al cambiar de ruta
  useEffect(() => {
    setIsOpen(false);
    setActiveDropdown(null);
  }, [pathname]);

  // Cerrar al hacer click afuera
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (!navRef.current) return;
      if (!navRef.current.contains(event.target as Node)) {
        setActiveDropdown(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Bloquear scroll cuando el menú móvil está abierto
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isOpen]);

  const toggleDropdown = (key: string) => {
    setActiveDropdown(activeDropdown === key ? null : key);
  };

  const toggleMobileAccordion = (key: string) => {
    setMobileExpanded(mobileExpanded === key ? null : key);
  };

  return (
    <nav
      ref={navRef}
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${montserrat.className} bg-white/90 backdrop-blur-md border-b border-gray-100 shadow-sm`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        
        {/* ===== LOGO ===== */}
        <Link href="/" className="relative z-50 flex items-center">
          <Image
            src={logo}
            alt="Globus Cargo Logo"
            className="h-10 w-auto object-contain hover:scale-105 transition-transform"
            priority
          />
        </Link>

        {/* ===== DESKTOP NAVIGATION ===== */}
        <div className="hidden lg:flex items-center gap-8">
          {navItems.map((item) => (
            <div key={item.key} className="relative group">
              <button
                onClick={() => toggleDropdown(item.key)}
                className={`flex items-center gap-1.5 text-[15px] font-semibold transition-colors ${
                  activeDropdown === item.key ? "text-[#f58220]" : "text-gray-700 hover:text-[#f58220]"
                }`}
              >
                {item.label}
                <ChevronDown
                  size={16}
                  className={`transition-transform duration-300 ${
                    activeDropdown === item.key ? "rotate-180" : ""
                  }`}
                />
              </button>

              {/* Dropdown Animado */}
              <AnimatePresence>
                {activeDropdown === item.key && (
                  <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: 0.95 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full left-1/2 -translate-x-1/2 mt-4 w-60 bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden ring-1 ring-black/5"
                  >
                    <div className="py-2">
                      {item.links.map((link) => (
                        <Link
                          key={link.href}
                          href={link.href}
                          className="block px-5 py-3 text-sm text-gray-600 hover:bg-orange-50 hover:text-[#f58220] transition-colors font-medium"
                        >
                          {link.label}
                        </Link>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>

        {/* ===== DESKTOP CTA ===== */}
        <div className="hidden lg:flex items-center gap-4">
          <Link
            href="https://agencias.globuscargo.us/#/sign-in"
            className="text-sm font-semibold text-gray-600 hover:text-[#f58220] transition-colors"
          >
            Iniciar Sesión
          </Link>
          <Link
            href="/cotizar"
            className="px-5 py-2.5 rounded-full border-2 border-[#f58220] text-[#f58220] font-bold text-sm hover:bg-[#f58220] hover:text-white transition-all shadow-sm hover:shadow-md"
          >
            Cotizar
          </Link>
          <Link
            href="https://globuscargo.us/#/sign-up?a=cec123e3-17bf-4be8-8f46-1fe6ec3d31b7"
            className="px-5 py-2.5 rounded-full bg-[#f58220] text-white font-bold text-sm hover:bg-[#d96d15] transition-all shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
          >
            Registrarse
          </Link>
        </div>

        {/* ===== MOBILE TOGGLE ===== */}
        <button
          className="lg:hidden relative z-50 p-2 text-gray-800 hover:text-[#f58220] transition-colors"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* ===== MOBILE MENU OVERLAY ===== */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed inset-0 top-0 left-0 w-full h-screen bg-white z-40 flex flex-col pt-24 px-6 overflow-y-auto lg:hidden"
          >
            {/* Mobile Navigation Links */}
            <div className="flex flex-col gap-4 mb-8">
              {navItems.map((item) => (
                <div key={item.key} className="border-b border-gray-100 pb-2">
                  <button
                    onClick={() => toggleMobileAccordion(item.key)}
                    className="flex items-center justify-between w-full py-3 text-lg font-bold text-gray-800"
                  >
                    <span className="flex items-center gap-3">
                      <span className="text-[#f58220]">{item.icon}</span>
                      {item.label}
                    </span>
                    <ChevronDown
                      className={`transition-transform duration-300 ${
                        mobileExpanded === item.key ? "rotate-180 text-[#f58220]" : "text-gray-400"
                      }`}
                    />
                  </button>
                  
                  <AnimatePresence>
                    {mobileExpanded === item.key && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="overflow-hidden"
                      >
                        <div className="flex flex-col gap-3 py-3 pl-8">
                          {item.links.map((link) => (
                            <Link
                              key={link.href}
                              href={link.href}
                              onClick={() => setIsOpen(false)}
                              className="text-gray-500 hover:text-[#f58220] font-medium"
                            >
                              {link.label}
                            </Link>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>

            {/* Mobile CTAs */}
            <div className="mt-auto mb-8 flex flex-col gap-4">
              <Link
                href="https://agencias.globuscargo.us/#/sign-in"
                className="w-full py-4 rounded-xl border border-gray-200 text-center font-bold text-gray-700 hover:border-[#f58220] hover:text-[#f58220] transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Iniciar Sesión
              </Link>
              <div className="grid grid-cols-2 gap-4">
                <Link
                  href="/cotizar"
                  className="w-full py-4 rounded-xl border-2 border-[#f58220] text-center font-bold text-[#f58220] active:scale-95 transition-transform"
                  onClick={() => setIsOpen(false)}
                >
                  Cotizar
                </Link>
                <Link
                  href="https://globuscargo.us/#/sign-up?a=cec123e3-17bf-4be8-8f46-1fe6ec3d31b7"
                  className="w-full py-4 rounded-xl bg-[#f58220] text-center font-bold text-white shadow-lg shadow-orange-200 active:scale-95 transition-transform"
                  onClick={() => setIsOpen(false)}
                >
                  Registrarse
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Header;
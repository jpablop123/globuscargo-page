"use client";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import logo from "@/assets/img/logo/globusorange.png";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [openSection, setOpenSection] = useState<string | null>(null);
  const navRef = useRef<HTMLElement | null>(null);
  const pathname = usePathname();

  const closeAll = () => {
    setIsOpen(false);
    setOpenSection(null);
  };

  const toggleSection = (section: string) => {
    setOpenSection((prev) => (prev === section ? null : section));
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (!navRef.current) return;
      if (!navRef.current.contains(event.target as Node)) closeAll();
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => closeAll(), [pathname]);

  const Underline = ({ children }: { children: React.ReactNode }) => (
    <span className="group relative inline-block">
      {children}
      <span className="pointer-events-none absolute left-0 -bottom-[2px] h-[2px] w-0 bg-[#f58220] transition-all duration-300 group-hover:w-full" />
    </span>
  );

  const MobileItem = ({ href, label }: { href: string; label: string }) => (
    <Link
      href={href}
      onClick={closeAll}
      className="block text-gray-700 hover:text-[#f58220] transition font-medium"
    >
      {label}
    </Link>
  );

  return (
    <nav
      ref={navRef}
      className={`fixed top-0 left-0 w-full z-50 bg-white/90 backdrop-blur-sm border-b border-gray-100 shadow-sm ${montserrat.className}`}
    >
      <div className="max-w-screen-xl mx-auto flex items-center justify-between px-5 py-3 lg:px-8">
        {/* ===== LOGO + HAMBURGER ===== */}
        <div className="flex items-center gap-3">
          <button
            className="lg:hidden p-2 rounded-md border border-gray-300 hover:border-[#f58220] transition"
            onClick={() => setIsOpen(!isOpen)}
          >
            <div className="relative h-4 w-5">
              <span
                className={`absolute left-0 top-0 h-[2px] w-full bg-[#333] transition-all ${
                  isOpen ? "translate-y-[7px] rotate-45" : ""
                }`}
              />
              <span
                className={`absolute left-0 top-1/2 h-[2px] w-full bg-[#333] transition-all ${
                  isOpen ? "opacity-0" : "opacity-100"
                }`}
              />
              <span
                className={`absolute left-0 bottom-0 h-[2px] w-full bg-[#333] transition-all ${
                  isOpen ? "-translate-y-[7px] -rotate-45" : ""
                }`}
              />
            </div>
          </button>

          <Link href="/" className="flex items-center" onClick={closeAll}>
            <Image
              src={logo}
              alt="Globus Cargo Logo"
              className="h-8 w-auto object-contain"
              priority
            />
          </Link>
        </div>

        {/* ===== DESKTOP NAV ===== */}
        <div className="hidden lg:flex items-center space-x-6 text-[15px]">
          {/* Personas */}
          <div className="relative">
            <button
              onClick={() => toggleSection("personas")}
              className="hover:text-[#f58220] transition"
            >
              <Underline>Personas ▾</Underline>
            </button>
            {openSection === "personas" && (
              <div className="absolute top-full mt-2 bg-white shadow-lg rounded-xl w-56 py-2">
                <Link href="/tarifas" className="block px-4 py-2 hover:text-[#f58220]">Tarifas USA → COL</Link>
                <Link href="/colombiausa" className="block px-4 py-2 hover:text-[#f58220]">COL → USA</Link>
                <Link href="/casillero" className="block px-4 py-2 hover:text-[#f58220]">Casillero Virtual</Link>
                <Link href="/preguntas" className="block px-4 py-2 hover:text-[#f58220]">Preguntas Frecuentes</Link>
              </div>
            )}
          </div>

          {/* Envíos */}
          <div className="relative">
            <button
              onClick={() => toggleSection("envios")}
              className="hover:text-[#f58220] transition"
            >
              <Underline>Envíos ▾</Underline>
            </button>
            {openSection === "envios" && (
              <div className="absolute top-full mt-2 bg-white shadow-lg rounded-xl w-56 py-2">
                <Link href="/cotizar" className="block px-4 py-2 hover:text-[#f58220]">Cotizar Envío</Link>
                <Link href="/track" className="block px-4 py-2 hover:text-[#f58220]">Rastrear Paquete</Link>
              </div>
            )}
          </div>

          {/* Empresas */}
          <div className="relative">
            <button
              onClick={() => toggleSection("empresas")}
              className="hover:text-[#f58220] transition"
            >
              <Underline>Empresas ▾</Underline>
            </button>
            {openSection === "empresas" && (
              <div className="absolute top-full mt-2 bg-white shadow-lg rounded-xl w-56 py-2">
                <Link href="/corporativo" className="block px-4 py-2 hover:text-[#f58220]">Corporativo</Link>
              </div>
            )}
          </div>

          {/* Información */}
          <div className="relative">
            <button
              onClick={() => toggleSection("info")}
              className="hover:text-[#f58220] transition"
            >
              <Underline>Información ▾</Underline>
            </button>
            {openSection === "info" && (
              <div className="absolute top-full mt-2 bg-white shadow-lg rounded-xl w-56 py-2">
                <Link href="/como-funciona" className="block px-4 py-2 hover:text-[#f58220]">Cómo Funciona</Link>
                <Link href="/nosotros" className="block px-4 py-2 hover:text-[#f58220]">Nosotros</Link>
                <Link href="/terminos" className="block px-4 py-2 hover:text-[#f58220]">Términos</Link>
                <Link href="/contacto" className="block px-4 py-2 hover:text-[#f58220]">Contáctanos</Link>
              </div>
            )}
          </div>
        </div>

        {/* ===== CTA RIGHT ===== */}
        <div className="hidden lg:flex items-center space-x-3">
        <Link
  href="https://agencias.globuscargo.us/#/sign-in"
  className="px-4 py-2 rounded-full text-[#f58220] border border-[#f58220] bg-white hover:bg-[#f58220] hover:text-white transition-all font-semibold shadow-sm hover:shadow-md"
>
  Iniciar Sesión
</Link>
          <Link
            href="/cotizar"
            className="px-4 py-2 border border-[#f58220] rounded-full text-[#f58220] hover:bg-[#f58220] hover:text-white transition font-semibold"
          >
            Cotiza tu envío
          </Link>
          <Link
            href="https://globuscargo.us/#/sign-up?a=cec123e3-17bf-4be8-8f46-1fe6ec3d31b7"
            className="px-4 py-2 bg-[#f58220] rounded-full text-white hover:bg-[#d96d15] transition font-semibold"
          >
            Regístrate
          </Link>
        </div>
      </div>

      {/* ===== MOBILE MENU ===== */}
      {isOpen && (
        <div className="lg:hidden bg-white shadow-xl rounded-b-3xl mx-3 mt-2 pb-5 pt-4 border border-gray-200">
          <ul className="space-y-6 px-5 text-[16px] font-medium text-gray-800">
            {/* Personas */}
            <li>
              <p className="text-[#f58220] font-semibold mb-2">Personas</p>
              <MobileItem href="/tarifas" label="Tarifas USA → COL" />
              <MobileItem href="/colombiausa" label="COL → USA" />
              <MobileItem href="/casillero" label="Casillero Virtual" />
              <MobileItem href="/preguntas" label="Preguntas Frecuentes" />
            </li>

            {/* Envíos */}
            <li>
              <p className="text-[#f58220] font-semibold mt-4 mb-2">Envíos</p>
              <MobileItem href="/cotizar" label="Cotizar Envío" />
              <MobileItem href="/track" label="Rastrear Paquete" />
              <MobileItem href="/servicios" label="Servicios" />
            </li>

            {/* Empresas */}
            <li>
              <p className="text-[#f58220] font-semibold mt-4 mb-2">Empresas</p>
              <MobileItem href="/corporativo" label="Corporativo" />
              <MobileItem href="/alianzas" label="Alianzas" />
            </li>

            {/* Información */}
            <li>
              <p className="text-[#f58220] font-semibold mt-4 mb-2">Información</p>
              <MobileItem href="/como-funciona" label="Cómo Funciona" />
              <MobileItem href="/nosotros" label="Nosotros" />
              <MobileItem href="/terminos" label="Términos" />
              <MobileItem href="/contacto" label="Contáctanos" />
            </li>

            {/* CTA */}
            <li className="pt-4 flex flex-col gap-2 border-t border-gray-200">
              <Link
                href="/login"
                className="text-center border border-gray-300 text-gray-700 py-2 rounded-full hover:text-[#f58220] hover:border-[#f58220] transition font-medium"
                onClick={closeAll}
              >
                Iniciar Sesión
              </Link>
              <Link
                href="/cotizar"
                className="text-center border border-[#f58220] text-[#f58220] py-2 rounded-full hover:bg-[#f58220] hover:text-white transition font-semibold"
                onClick={closeAll}
              >
                Cotiza tu envío
              </Link>
              <Link
                href="https://globuscargo.us/#/sign-up?a=cec123e3-17bf-4be8-8f46-1fe6ec3d31b7"
                className="text-center bg-[#f58220] text-white py-2 rounded-full hover:bg-[#d96d15] transition font-semibold"
                onClick={closeAll}
              >
                Regístrate
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Header;
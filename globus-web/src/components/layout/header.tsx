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
    // Si la sección ya está abierta, la cierra (null). Si no, abre la nueva sección.
    setOpenSection((prev) => (prev === section ? null : section));
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (!navRef.current) return;
      // Añadimos un pequeño retraso para evitar que el clic en el botón se interprete como clic exterior
      setTimeout(() => {
          if (!navRef.current!.contains(event.target as Node)) {
              closeAll();
          }
      }, 10); 
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
      className="block text-gray-700 hover:text-[#f58220] transition font-medium py-1"
    >
      {label}
    </Link>
  );

  // Componente para manejar el despliegue de las subsecciones
  const DropdownSection = ({ sectionName, sectionKey, children }: { sectionName: string, sectionKey: string, children: React.ReactNode }) => (
    <div className="relative">
        <button
          onClick={() => toggleSection(sectionKey)}
          className="hover:text-[#f58220] transition w-full text-left"
        >
          {/* Escritorio */}
          <span className="hidden lg:inline">
            <Underline>{sectionName} ▾</Underline>
          </span>
          {/* Móvil (Acordeón) */}
          <span className="lg:hidden text-[#f58220] font-semibold flex justify-between items-center py-2 border-b border-gray-100">
             {sectionName}
             <span className={`transform transition-transform duration-200 ${openSection === sectionKey ? 'rotate-180' : 'rotate-0'}`}>▾</span>
          </span>
        </button>

        {/* Contenido (Visible en Desktop o si la sección está abierta en Mobile) */}
        {openSection === sectionKey && (
          <div className="
             lg:absolute lg:top-full lg:mt-2 lg:bg-white lg:shadow-lg lg:rounded-xl lg:w-56 lg:py-2 
             lg:block 
             pt-2
          ">
            <div className='pl-4 lg:pl-0 space-y-2'>
                {children}
            </div>
          </div>
        )}
    </div>
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

        {/* ===== DESKTOP NAV (Usando DropdownSection) ===== */}
        <div className="hidden lg:flex items-center space-x-6 text-[15px]">
          
          {/* Personas */}
          <DropdownSection sectionName="Personas" sectionKey="personas">
            <Link href="/tarifas" className="block px-4 py-2 hover:text-[#f58220]">Tarifas USA → COL</Link>
            <Link href="/colombiausa" className="block px-4 py-2 hover:text-[#f58220]">COL → USA</Link>
            <Link href="/casillero" className="block px-4 py-2 hover:text-[#f58220]">Casillero Virtual</Link>
            <Link href="/preguntas" className="block px-4 py-2 hover:text-[#f58220]">Preguntas Frecuentes</Link>
          </DropdownSection>

          {/* Envíos */}
          <DropdownSection sectionName="Envíos" sectionKey="envios">
            <Link href="/cotizar" className="block px-4 py-2 hover:text-[#f58220]">Cotizar Envío</Link>
            <Link href="/track" className="block px-4 py-2 hover:text-[#f58220]">Rastrear Paquete</Link>
          </DropdownSection>

          {/* Empresas */}
          <DropdownSection sectionName="Empresas" sectionKey="empresas">
            <Link href="/corporativo" className="block px-4 py-2 hover:text-[#f58220]">Corporativo</Link>
          </DropdownSection>

          {/* Información */}
          <DropdownSection sectionName="Información" sectionKey="info">
            <Link href="/como-funciona" className="block px-4 py-2 hover:text-[#f58220]">Cómo Funciona</Link>
            <Link href="/nosotros" className="block px-4 py-2 hover:text-[#f58220]">Nosotros</Link>
            <Link href="/terminos" className="block px-4 py-2 hover:text-[#f58220]">Términos</Link>
            <Link href="/contacto" className="block px-4 py-2 hover:text-[#f58220]">Contáctanos</Link>
          </DropdownSection>
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

      {/* ===== MOBILE MENU (Convertido a Acordeón) ===== */}
      {isOpen && (
        <div className="lg:hidden bg-white shadow-xl rounded-b-3xl mx-3 mt-2 pb-5 pt-4 border border-gray-200">
          <ul className="space-y-2 px-5 text-[16px] font-medium text-gray-800">
            
            {/* Personas */}
            <li className="border-b border-gray-100">
              <DropdownSection sectionName="Personas" sectionKey="personas">
                  <MobileItem href="/tarifas" label="Tarifas USA → COL" />
                  <MobileItem href="/colombiausa" label="COL → USA" />
                  <MobileItem href="/casillero" label="Casillero Virtual" />
                  <MobileItem href="/preguntas" label="Preguntas Frecuentes" />
              </DropdownSection>
            </li>

            {/* Envíos */}
            <li className="border-b border-gray-100">
              <DropdownSection sectionName="Envíos" sectionKey="envios">
                  <MobileItem href="/cotizar" label="Cotizar Envío" />
                  <MobileItem href="/track" label="Rastrear Paquete" />
                  <MobileItem href="/servicios" label="Servicios" />
              </DropdownSection>
            </li>
            
            {/* Empresas */}
            <li className="border-b border-gray-100">
              <DropdownSection sectionName="Empresas" sectionKey="empresas">
                  <MobileItem href="/corporativo" label="Corporativo" />
                  <MobileItem href="/alianzas" label="Alianzas" />
              </DropdownSection>
            </li>

            {/* Información */}
            <li className="border-b border-gray-100">
              <DropdownSection sectionName="Información" sectionKey="info">
                  <MobileItem href="/como-funciona" label="Cómo Funciona" />
                  <MobileItem href="/nosotros" label="Nosotros" />
                  <MobileItem href="/terminos" label="Términos" />
                  <MobileItem href="/contacto" label="Contáctanos" />
              </DropdownSection>
            </li>

            {/* CTA (Fijos) */}
            <li className="pt-4 flex flex-col gap-2 border-t border-gray-200">
              <Link
                href="https://agencias.globuscargo.us/#/sign-in"
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
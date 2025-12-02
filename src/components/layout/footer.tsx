"use client";

import Image from "next/image";
import {
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  Phone,
  MapPin,
  ArrowRight,
} from "lucide-react";
import logo from "@/assets/img/logo/globuswhite.png";

export default function Footer() {
  // Gris original de la paleta
  const grayPalette = "rgb(132,126,126)";

  return (
    <footer className="text-white font-sans relative" style={{ backgroundColor: grayPalette }}>
      
      {/* === CONTENIDO PRINCIPAL === */}
      <div className="relative py-16 px-6 overflow-hidden">
        
        {/* Fondo Mapa Mundial Sutil (Decorativo) */}
        <div className="absolute inset-0 opacity-10 pointer-events-none mix-blend-overlay" style={{ 
            backgroundImage: 'url("https://upload.wikimedia.org/wikipedia/commons/8/80/World_map_-_low_resolution.svg")',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            backgroundSize: 'cover',
        }}></div>
        
        {/* Sombra superior suave para dar profundidad */}
        <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-black/10 to-transparent z-10 pointer-events-none"></div>

        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-12 relative z-10">
            
            {/* Columna 1: Brand & Social */}
            <div className="space-y-6">
                <Image
                    src={logo}
                    alt="Globus Cargo"
                    width={180}
                    height={60}
                    className="opacity-100 drop-shadow-md"
                />
                <p className="text-white/90 text-sm leading-relaxed font-medium max-w-sm drop-shadow-sm">
                    Conectando fronteras y simplificando la logística global. Tu socio estratégico para envíos rápidos y seguros entre USA y Latinoamérica.
                </p>
                <div className="flex gap-4 pt-2">
                    {[
                        { icon: Instagram, href: "https://instagram.com" },
                        { icon: Facebook, href: "https://facebook.com" },
                        { icon: Linkedin, href: "https://linkedin.com" }
                    ].map((social, i) => (
                        <a 
                            key={i} 
                            href={social.href} 
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-10 h-10 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-white hover:bg-[#f58220] hover:border-[#f58220] hover:-translate-y-1 transition-all duration-300 shadow-sm"
                        >
                            <social.icon size={18} />
                        </a>
                    ))}
                </div>
            </div>

            {/* Columna 2: Enlaces Rápidos */}
            <div className="md:pl-10">
                <h3 className="text-white font-bold text-lg mb-6 flex items-center gap-3 drop-shadow-sm">
                    <span className="w-1 h-6 bg-[#f58220] rounded-full shadow-sm"></span> Compañía
                </h3>
                <ul className="space-y-3">
                    {[
                        { label: "Sobre Nosotros", href: "/nosotros" },
                        { label: "Casillero Virtual", href: "/casillero" },
                        { label: "Tarifas y Precios", href: "/tarifas" },
                        { label: "Rastrear Envío", href: "/track" }
                    ].map((link, i) => (
                        <li key={i}>
                            <a href={link.href} className="text-white/90 hover:text-white hover:translate-x-1 transition-all flex items-center gap-2 text-sm group font-medium">
                                <ArrowRight size={14} className="text-[#f58220] transition-transform duration-300" />
                                {link.label}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>

            {/* Columna 3: Contacto */}
            <div>
                <h3 className="text-white font-bold text-lg mb-6 flex items-center gap-3 drop-shadow-sm">
                    <span className="w-1 h-6 bg-[#f58220] rounded-full shadow-sm"></span> Contacto
                </h3>
                <ul className="space-y-5">
                    <li className="flex items-start gap-4 text-white/90 text-sm font-medium group">
                        <div className="bg-white/10 p-2 rounded-lg group-hover:bg-[#f58220] transition-colors shadow-sm">
                            <MapPin className="text-white" size={18} />
                        </div>
                        <span className="mt-1">2120 NW 96th Ave<br/>Doral, FL 33172, USA</span>
                    </li>
                    <li className="flex items-center gap-4 text-white/90 text-sm font-medium group">
                        <div className="bg-white/10 p-2 rounded-lg group-hover:bg-[#f58220] transition-colors shadow-sm">
                            <Phone className="text-white" size={18} />
                        </div>
                        <span>+1 (786) 531-7987</span>
                    </li>
                    <li className="flex items-center gap-4 text-white/90 text-sm font-medium group">
                         <div className="bg-white/10 p-2 rounded-lg group-hover:bg-[#f58220] transition-colors shadow-sm">
                            <Mail className="text-white" size={18} />
                        </div>
                        <span>info@globuscargo.com</span>
                    </li>
                </ul>
            </div>

        </div>
      </div>

      {/* === COPYRIGHT === */}
      <div className="border-t border-white/10 bg-black/10 backdrop-blur-sm relative z-10">
        <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-white/70 font-medium">
            <p>© {new Date().getFullYear()} <span className="text-white font-bold">Globus Cargo</span>. Todos los derechos reservados.</p>
            <div className="flex gap-6">
                <a href="/terminos" className="hover:text-[#f58220] transition-colors">Términos y Condiciones</a>
                <a href="/privacidad" className="hover:text-[#f58220] transition-colors">Política de Privacidad</a>
            </div>
        </div>
      </div>
    </footer>
  );
}
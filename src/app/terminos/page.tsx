"use client";

import { useState, useEffect } from "react";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import { ChevronDown, Scale, FileText, Menu } from "lucide-react";
import { motion } from "framer-motion";

export default function TerminosCondicionesPage() {
  const [activeSection, setActiveSection] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);

  // Detectar sección activa al hacer scroll
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.2, rootMargin: "-20% 0px -50% 0px" }
    );

    document.querySelectorAll("section[id^='section-']").forEach((section) => {
      observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  const sections = [
    { id: "section-0", title: "1. Ámbito de Aplicación" },
    { id: "section-1", title: "1.2 Definiciones" },
    { id: "section-2", title: "1.3 Principios de Tratamiento" },
    { id: "section-3", title: "II. Tratamiento de Datos" },
    { id: "section-4", title: "III. Derechos de Titulares" },
    { id: "section-5", title: "IV. Deberes de Globus" },
    { id: "section-6", title: "V. Políticas de Información" },
    { id: "section-7", title: "VI. Procedimiento Derechos" },
    { id: "section-8", title: "VII. Protección de Datos" },
    { id: "section-9", title: "VIII. Vigencia y Contacto" },
  ];

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
      setMenuOpen(false);
    }
  };

  return (
    <main className="bg-white text-gray-700 font-sans selection:bg-orange-100 selection:text-orange-900 scroll-smooth">
      <Header />

      {/* === HERO: Estilo Premium Naranja (Igual que las otras páginas) === */}
      <section className="relative pt-44 pb-32 px-6 text-center overflow-hidden bg-[#f58220]">
        {/* Fondo Gradiente y Textura */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#f58220] via-[#ff9a44] to-[#e07116]"></div>
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle, #fff 1.5px, transparent 1.5px)', backgroundSize: '24px 24px' }}></div>
        
        {/* Decoración flotante */}
        <motion.div animate={{ rotate: 360 }} transition={{ duration: 120, repeat: Infinity, ease: "linear" }} className="absolute -top-[50%] -right-[20%] w-[800px] h-[800px] border border-white/10 rounded-full border-dashed opacity-30 pointer-events-none"></motion.div>

        <div className="relative z-10 max-w-4xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-6 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-sm font-bold tracking-wide shadow-sm">
                <Scale size={16} /> Marco Legal
            </div>
            
            <h1 className="text-4xl md:text-6xl font-black text-white mb-6 drop-shadow-sm">
              Términos y <span className="text-orange-100">Condiciones</span>
            </h1>

            <p className="text-xl text-orange-50 max-w-2xl mx-auto font-medium leading-relaxed">
               Política de tratamiento de datos personales de <br/> <strong className="text-white">Globus Internacional Cargo Colombia S.A.S.</strong>
            </p>
          </motion.div>
        </div>
      </section>

      {/* === LAYOUT CON SIDEBAR === */}
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-12 py-16 px-6 relative">
        
        {/* === SIDEBAR DE NAVEGACIÓN (Sticky) === */}
        <aside className="lg:w-1/4 flex-shrink-0">
            <div className="sticky top-28">
                {/* Botón Móvil */}
                <button 
                    onClick={() => setMenuOpen(!menuOpen)}
                    className="lg:hidden w-full flex items-center justify-between bg-white border border-gray-200 p-4 rounded-xl shadow-sm mb-6 font-bold text-gray-900"
                >
                    <span className="flex items-center gap-2"><Menu size={18}/> Índice de Contenido</span>
                    <ChevronDown className={`transition-transform duration-300 ${menuOpen ? "rotate-180" : ""}`} />
                </button>

                {/* Menú de Escritorio / Desplegable Móvil */}
                <div className={`${menuOpen ? "block" : "hidden"} lg:block bg-gray-50 rounded-2xl p-6 border border-gray-100`}>
                    <h3 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4 pl-3">Tabla de Contenido</h3>
                    <nav className="space-y-1">
                        {sections.map((item) => (
                            <button
                                key={item.id}
                                onClick={() => scrollTo(item.id)}
                                className={`w-full text-left px-3 py-2 rounded-lg text-sm transition-all duration-200 ${
                                    activeSection === item.id 
                                    ? "bg-white text-[#f58220] font-bold shadow-sm border-l-4 border-[#f58220]" 
                                    : "text-gray-600 hover:bg-gray-100 hover:text-gray-900"
                                }`}
                            >
                                {item.title}
                            </button>
                        ))}
                    </nav>
                </div>
            </div>
        </aside>

        {/* === CONTENIDO PRINCIPAL === */}
        <article className="lg:w-3/4 max-w-none prose prose-lg prose-slate prose-headings:font-serif prose-headings:font-bold prose-headings:text-gray-900 prose-p:text-gray-600 prose-p:leading-8 prose-li:text-gray-600 prose-strong:text-gray-900 prose-a:text-[#f58220] prose-a:no-underline hover:prose-a:underline">
            
            {/* Introducción (Ahora en Naranja) */}
            <div className="bg-orange-50 p-6 rounded-2xl border border-orange-100 mb-10 text-sm text-gray-700 flex gap-3 items-start">
                <FileText className="flex-shrink-0 mt-1 text-[#f58220]" size={20} />
                <p className="m-0">
                    Este documento regula el uso de los servicios de Globus Cargo. Al utilizar nuestros servicios, aceptas estas condiciones en su totalidad.
                </p>
            </div>

            <section id="section-0" className="scroll-mt-32 border-b border-gray-100 pb-10 mb-10">
              <h2>1. Ámbito de Aplicación</h2>
              <p>
                Las políticas y procedimientos consagrados en este manual se
                aplicarán a <strong>Globus Internacional Cargo Colombia S.A.S.</strong> Los
                presentes términos y condiciones aplican para cualquier registro
                de datos personales realizado en forma presencial, no presencial
                y/o virtual para la vinculación a cualquier producto, servicio o
                beneficio de Globus Internacional Cargo Colombia S.A.S.
              </p>
              <p>
                Globus Internacional Cargo Colombia S.A.S. se encarga
                directamente del tratamiento de los datos personales; sin
                embargo, se reserva el derecho a delegar en un tercero tal
                tratamiento, exigiendo así mismo al encargado la atención e
                implementación de los lineamientos y procedimientos idóneos para
                la protección de los datos personales y la estricta
                confidencialidad de los mismos.
              </p>
            </section>

            <section id="section-1" className="scroll-mt-32 border-b border-gray-100 pb-10 mb-10">
              <h2>1.2 Definiciones</h2>
              <p>
                Las siguientes definiciones permiten una correcta interpretación
                de la <strong>Ley 1581 de 2012</strong> y sus decretos reglamentarios, indispensables para la protección del habeas data:
              </p>
              <ul className="list-none pl-0 space-y-4">
                <li className="pl-4 border-l-2 border-orange-200">
                    <strong>Aviso de Privacidad:</strong> Comunicación verbal o escrita generada por el responsable, dirigida al titular para el tratamiento de sus datos personales.
                </li>
                <li className="pl-4 border-l-2 border-orange-200">
                    <strong>Autorización:</strong> Consentimiento previo, expreso e informado del titular de los datos personales para llevar a cabo el tratamiento.
                </li>
                <li className="pl-4 border-l-2 border-orange-200">
                    <strong>Dato Personal:</strong> Cualquier información vinculada o que pueda asociarse a una o a varias personas naturales determinadas o determinables.
                </li>
                <li className="pl-4 border-l-2 border-orange-200">
                    <strong>Tratamiento:</strong> Cualquier operación sobre datos personales, tales como recolección, almacenamiento, uso, circulación o supresión.
                </li>
              </ul>
            </section>

            <section id="section-2" className="scroll-mt-32 border-b border-gray-100 pb-10 mb-10">
              <h2>1.3 Principios para el Tratamiento</h2>
              <p>
                Globus Internacional Cargo Colombia S.A.S. aplicará los siguientes principios en el manejo de datos:
              </p>
              <div className="grid sm:grid-cols-2 gap-4 not-prose">
                  <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100 hover:border-orange-200 transition-colors">
                      <h4 className="font-bold text-gray-900 mb-2">Acceso y Circulación</h4>
                      <p className="text-sm text-gray-600 m-0">Garantizamos el acceso conforme a la Ley.</p>
                  </div>
                  <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100 hover:border-orange-200 transition-colors">
                      <h4 className="font-bold text-gray-900 mb-2">Confidencialidad</h4>
                      <p className="text-sm text-gray-600 m-0">Reserva estricta durante y después del tratamiento.</p>
                  </div>
                  <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100 hover:border-orange-200 transition-colors">
                      <h4 className="font-bold text-gray-900 mb-2">Finalidad</h4>
                      <p className="text-sm text-gray-600 m-0">Tratamiento para fines legítimos e informados.</p>
                  </div>
                  <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100 hover:border-orange-200 transition-colors">
                      <h4 className="font-bold text-gray-900 mb-2">Seguridad</h4>
                      <p className="text-sm text-gray-600 m-0">Medidas técnicas para evitar adulteración o pérdida.</p>
                  </div>
              </div>
            </section>

            <section id="section-3" className="scroll-mt-32 border-b border-gray-100 pb-10 mb-10">
              <h2>Capítulo II. Tratamiento de Datos Personales</h2>
              <p>
                Restringiremos el tratamiento de datos personales sensibles a lo estrictamente indispensable, solicitando consentimiento previo y expreso. Se prohíbe el tratamiento de datos de menores salvo excepciones legales que cumplan con el interés superior del menor.
              </p>
            </section>

            <section id="section-4" className="scroll-mt-32 border-b border-gray-100 pb-10 mb-10">
              <h2>Capítulo III. Derechos de los Titulares</h2>
              <ul>
                <li>Acceder, conocer, actualizar y rectificar sus datos personales.</li>
                <li>Solicitar prueba de la existencia de la autorización otorgada.</li>
                <li>Recibir información sobre el uso que se ha dado a sus datos.</li>
                <li>Presentar quejas ante la Superintendencia de Industria y Comercio.</li>
                <li>Solicitar la supresión de sus datos personales.</li>
              </ul>
            </section>

            <section id="section-5" className="scroll-mt-32 border-b border-gray-100 pb-10 mb-10">
              <h2>Capítulo IV. Deberes de Globus</h2>
              <p>
                Reconocemos que los datos personales son propiedad de las personas a las que se refieren. Solo haremos uso de ellos para las finalidades autorizadas, garantizando su seguridad y confidencialidad.
              </p>
            </section>

            <section id="section-6" className="scroll-mt-32 border-b border-gray-100 pb-10 mb-10">
              <h2>Capítulo V. Políticas de Tratamiento</h2>
              <p>
                Solicitaremos autorización previa informando la finalidad, derechos y canales de comunicación. La autorización podrá constar en cualquier mecanismo que permita su consulta posterior.
              </p>
            </section>

            <section id="section-7" className="scroll-mt-32 border-b border-gray-100 pb-10 mb-10">
              <h2>Capítulo VI. Procedimiento para Derechos</h2>
              <p>
                Para consultas, reclamos o rectificaciones, escriba a: <br/>
                <a href="mailto:marcela.vasquez@globuscargo.com" className="font-bold">marcela.vasquez@globuscargo.com</a>
              </p>
              <p>
                <strong>Tiempo de respuesta:</strong> Máximo diez (10) días hábiles. Si se requiere más tiempo, se informará al solicitante antes del vencimiento.
              </p>
            </section>

            <section id="section-8" className="scroll-mt-32 border-b border-gray-100 pb-10 mb-10">
              <h2>Capítulo VII. Protección de Datos</h2>
              <p>
                El área de Protección de Datos Personales velará por la aplicación de esta política.
              </p>
              <address className="not-italic bg-gray-50 p-6 rounded-2xl border border-gray-200 text-sm">
                <strong>Dirección:</strong> Calle 108 #49E – 106 Local Edif. Ónix 108, Barranquilla, Colombia.<br />
                <strong>Teléfono:</strong> (57-5) 304 9422 – Cel. (57) 317 517 4563<br />
                <strong>Email:</strong> marcela.vasquez@globuscargo.com
              </address>
            </section>

            <section id="section-9" className="scroll-mt-32">
              <h2>Capítulo VIII. Legislación y Vigencia</h2>
              <p>
                Este manual cumple con la Constitución Política de Colombia, Ley 1581 de 2012, Ley 1266 de 2008 y Decreto 1377 de 2013.
              </p>
              <p>
                <strong>Vigencia:</strong> Desde el 1 de enero de 2018. <br />
                Cualquier modificación será publicada en <a href="https://www.globuscargo.com">www.globuscargo.com</a>.
              </p>
            </section>
        </article>
      </div>

      <Footer />
    </main>
  );
}
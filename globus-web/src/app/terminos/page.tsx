"use client";

import { useState } from "react";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import { ChevronDown } from "lucide-react";



export default function TerminosCondicionesPage() {
  const [menuOpen, setMenuOpen] = useState(false);

  const sections = [
    "1. Ámbito de Aplicación",
    "1.2 Definiciones",
    "1.3 Principios para el Tratamiento de Datos",
    "Capítulo II. Tratamiento de Datos Personales",
    "Capítulo III. Derechos de los Titulares",
    "Capítulo IV. Deberes de Globus Internacional Cargo",
    "Capítulo V. Políticas de Tratamiento de la Información",
    "Capítulo VI. Procedimiento para ejercer derechos",
    "Capítulo VII. Función de Protección de Datos",
    "Capítulo VIII. Legislación Aplicable, Contacto y Vigencia",
  ];

  return (
    <main className="bg-white text-[#847E7E] font-[Montserrat]">
      <Header />

      {/* === HERO === */}
      <section className="bg-[rgb(246,133,39)] text-white py-20 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold">
          Términos y Condiciones
        </h1>
        <p className="mt-4 text-lg text-white/90 max-w-3xl mx-auto">
          Política de tratamiento de datos personales de Globus Internacional Cargo Colombia S.A.S.
        </p>
      </section>

      {/* === CONTENIDO === */}
      <section className="max-w-7xl mx-auto py-16 px-6 lg:px-12">
        <div className="grid md:grid-cols-4 gap-12">
          {/* === ÍNDICE (Móvil y Escritorio) === */}
          <aside className="md:col-span-1 space-y-4 sticky top-24 self-start">
            {/* === Móvil === */}
            <div className="md:hidden">
              <button
                onClick={() => setMenuOpen(!menuOpen)}
                className="w-full flex items-center justify-between bg-[#f58220]/10 border border-[#f58220]/30 text-[#f58220] font-semibold px-4 py-3 rounded-lg"
              >
                Contenido
                <ChevronDown
                  className={`transition-transform ${
                    menuOpen ? "rotate-180" : "rotate-0"
                  }`}
                />
              </button>
              {menuOpen && (
                <ul className="mt-3 bg-gray-50 rounded-lg border border-[#f58220]/20 shadow-sm divide-y divide-gray-100">
                  {sections.map((item, i) => (
                    <li key={i}>
                      <a
                        href={`#section-${i}`}
                        onClick={() => setMenuOpen(false)}
                        className="block px-4 py-2 hover:bg-[#f58220]/10 text-sm text-gray-700"
                      >
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              )}
            </div>

            {/* === Escritorio === */}
            <div className="hidden md:block space-y-4">
              <h3 className="font-bold text-gray-900 text-lg">Contenido</h3>
              <ul className="space-y-2 text-sm leading-relaxed">
                {sections.map((item, i) => (
                  <li key={i}>
                    <a
                      href={`#section-${i}`}
                      className="hover:text-[#f58220] block transition"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </aside>

          {/* === TEXTO PRINCIPAL === */}
          <article className="md:col-span-3 prose prose-p:leading-relaxed prose-headings:text-gray-900 max-w-none prose-headings:mt-10 prose-headings:mb-4 prose-h2:text-2xl sm:prose-h2:text-3xl prose-li:marker:text-[#f58220]">
            {/* === SECCIONES === */}
            <section id="section-0">
              <h2>1. Ámbito de Aplicación</h2>
              <p>
                Las políticas y procedimientos consagrados en este manual se
                aplicarán a Globus Internacional Cargo Colombia S.A.S. Los
                presentes términos y condiciones aplican para cualquier registro
                de datos personales realizado en forma presencial, no presencial
                y/o virtual para la vinculación a cualquier producto, servicio o
                beneficio de Globus Internacional Cargo Colombia S.A.S.
                Globus Internacional Cargo Colombia S.A.S. se encarga
                directamente del tratamiento de los datos personales; sin
                embargo, se reserva el derecho a delegar en un tercero tal
                tratamiento, exigiendo así mismo al encargado la atención e
                implementación de los lineamientos y procedimientos idóneos para
                la protección de los datos personales y la estricta
                confidencialidad de los mismos.
              </p>
            </section>

            <section id="section-1">
              <h2>1.2 Definiciones</h2>
              <p>
                Las siguientes definiciones permiten una correcta interpretación
                de la Ley 1581 de 2012 y sus decretos reglamentarios, y son
                indispensables para la protección del habeas data, lo que
                contribuye a determinar las responsabilidades de los
                involucrados en el tratamiento de datos personales:
              </p>
              <p>
                <strong>Aviso de Privacidad:</strong> Comunicación verbal o escrita generada por
                el responsable, dirigida al titular para el tratamiento de sus
                datos personales, mediante la cual se le informa acerca de la
                existencia de las políticas de tratamiento de información.
              </p>
              <p>
                <strong>Autorización:</strong> Consentimiento previo, expreso e informado del
                titular de los datos personales para llevar a cabo el tratamiento
                de datos personales.
              </p>
              <p>
                <strong>Dato Personal:</strong> Cualquier información vinculada o que pueda
                asociarse a una o a varias personas naturales determinadas o
                determinables.
              </p>
              <p>
                <strong>Dato Público:</strong> Es el dato que no sea semiprivado, privado o
                sensible. Son considerados datos públicos los relativos al estado
                civil, profesión u oficio, y calidad de comerciante o servidor
                público.
              </p>
              <p>
                <strong>Tratamiento:</strong> Cualquier operación sobre datos personales, tales
                como recolección, almacenamiento, uso, circulación o supresión.
              </p>
            </section>

            <section id="section-2">
              <h2>1.3 Principios para el Tratamiento de Datos Personales</h2>
              <p>
                Globus Internacional Cargo Colombia S.A.S. aplicará los
                siguientes principios específicos que constituyen las reglas a
                seguir en la recolección, manejo, uso, tratamiento, almacenamiento
                e intercambio de datos personales:
              </p>
              <ul>
                <li>
                  <strong>Acceso y Circulación:</strong> Los datos operados por Globus cumplen
                  una función de publicidad y se garantizará su acceso conforme a
                  la Ley.
                </li>
                <li>
                  <strong>Confidencialidad:</strong> Se garantiza la reserva de los datos
                  dependiendo de su naturaleza. La información se mantendrá
                  confidencial durante y después del tratamiento.
                </li>
                <li>
                  <strong>Finalidad:</strong> El tratamiento de datos se realiza para fines
                  legítimos, informados, temporales y materiales.
                </li>
                <li>
                  <strong>Seguridad:</strong> Se adoptan medidas técnicas y humanas necesarias
                  para evitar adulteración, pérdida, consulta o acceso no
                  autorizado.
                </li>
              </ul>
            </section>

            <section id="section-3">
              <h2>Capítulo II. Tratamiento de Datos Personales</h2>
              <p>
                Globus Internacional Cargo Colombia S.A.S. restringirá el
                tratamiento de datos personales sensibles a lo estrictamente
                indispensable y solicitará consentimiento previo y expreso a los
                titulares informando sobre la finalidad exclusiva de su
                tratamiento.
              </p>
              <p>
                Se prohíbe el tratamiento de datos de menores salvo cuando se
                trate de datos públicos o se cumpla el interés superior del menor
                y se asegure el respeto de sus derechos fundamentales.
              </p>
            </section>

            <section id="section-4">
              <h2>Capítulo III. Derechos de los Titulares</h2>
              <ul>
                <li>Acceder, conocer, actualizar y rectificar sus datos personales.</li>
                <li>Solicitar prueba de la existencia de la autorización otorgada.</li>
                <li>Recibir información sobre el uso que se ha dado a sus datos.</li>
                <li>Presentar quejas ante la Superintendencia de Industria y Comercio.</li>
                <li>Solicitar la supresión de sus datos personales.</li>
              </ul>
            </section>

            <section id="section-5">
              <h2>Capítulo IV. Deberes de Globus Internacional Cargo</h2>
              <p>
                Globus Internacional Cargo Colombia S.A.S. tiene presente que los
                datos personales son propiedad de las personas a las que se
                refieren y sólo ellas pueden decidir sobre los mismos. Hará uso
                de dichos datos únicamente para las finalidades autorizadas,
                garantizando la seguridad, confidencialidad y uso responsable de
                la información.
              </p>
            </section>

            <section id="section-6">
              <h2>Capítulo V. Políticas de Tratamiento de la Información</h2>
              <p>
                Globus Internacional Cargo Colombia S.A.S. solicitará autorización
                previa para el tratamiento de datos personales, informando al
                titular la finalidad, derechos y canales de comunicación para
                consultas o reclamos.
              </p>
              <p>
                La autorización podrá constar en formato físico, electrónico o
                cualquier mecanismo que garantice su posterior consulta. No se
                requiere autorización cuando la información sea pública o por
                orden judicial.
              </p>
            </section>

            <section id="section-7">
              <h2>Capítulo VI. Procedimiento para ejercer derechos</h2>
              <p>
                Los titulares podrán presentar consultas, reclamos, solicitudes de
                rectificación, actualización, supresión o revocatoria de
                autorización a través del correo electrónico:
                <a
                  href="mailto:marcela.vasquez@globuscargo.com"
                  className="text-[#f58220] ml-1"
                >
                  marcela.vasquez@globuscargo.com
                </a>
              </p>
              <p>
                Las solicitudes serán tramitadas en un término máximo de diez (10)
                días hábiles. En caso de requerir más tiempo, se informará al
                solicitante antes del vencimiento del plazo.
              </p>
            </section>

            <section id="section-8">
              <h2>Capítulo VII. Función de Protección de Datos</h2>
              <p>
                Globus Internacional Cargo Colombia S.A.S. designa como responsable
                del tratamiento de datos personales al área de Protección de Datos
                Personales, que velará por la correcta aplicación de la política y
                la atención de solicitudes.
              </p>
              <p>
                Dirección: Calle 108 #49E – 106 Local Edif. Ónix 108, Barranquilla, Colombia. <br />
                Teléfono: (57-5) 304 9422 – Cel. (57) 317 517 4563. <br />
                Correo electrónico:{" "}
                <a
                  href="mailto:marcela.vasquez@globuscargo.com"
                  className="text-[#f58220]"
                >
                  marcela.vasquez@globuscargo.com
                </a>
              </p>
            </section>

            <section id="section-9">
              <h2>Capítulo VIII. Legislación Aplicable, Contacto y Vigencia</h2>
              <p>
                Este manual ha sido elaborado conforme a la Constitución Política
                de Colombia, la Ley 1581 de 2012, Ley 1266 de 2008, Decreto 1377
                de 2013 y demás normas complementarias. <br />
                Vigente desde el 1 de enero de 2018. <br />
                Globus Internacional Cargo Colombia S.A.S. podrá modificar los
                términos de este documento en cualquier momento, publicando la
                nueva versión en:{" "}
                <a
                  href="https://www.globuscargo.com"
                  target="_blank"
                  className="text-[#f58220]"
                >
                  www.globuscargo.com
                </a>
              </p>
            </section>
          </article>
        </div>
      </section>

      <Footer />
    </main>
  );
}
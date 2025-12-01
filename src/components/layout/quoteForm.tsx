"use client";

import { useState } from "react";
import { Montserrat } from "next/font/google";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaBox,
  FaPlaneDeparture,
  FaDollarSign,
  FaWeightHanging,
  FaArrowLeft,
  FaPaperPlane,
  FaWhatsapp,
  FaChevronDown,
} from "react-icons/fa";
import Select from "react-select";

const montserrat = Montserrat({ subsets: ["latin"], weight: ["400", "600", "700"] });

// Departamentos de Colombia
const departamentos = [
  "Amazonas", "Antioquia", "Arauca", "Atlántico", "Bolívar", "Boyacá", "Caldas", "Caquetá",
  "Casanare", "Cauca", "Cesar", "Chocó", "Córdoba", "Cundinamarca", "Guainía", "Guaviare",
  "Huila", "La Guajira", "Magdalena", "Meta", "Nariño", "Norte de Santander", "Putumayo",
  "Quindío", "Risaralda", "San Andrés y Providencia", "Santander", "Sucre", "Tolima",
  "Valle del Cauca", "Vaupés", "Vichada",
].map((dep) => ({ value: dep, label: dep }));

export default function CotizadorEnvio() {
  const [form, setForm] = useState({
    departamento: null as { label: string; value: string } | null,
    ciudad: "",
    peso: "",
    valor: "",
  });
  const [resultado, setResultado] = useState<any>(null);
  const [showResult, setShowResult] = useState(false);
  const [shakeField, setShakeField] = useState<"peso" | "valor" | null>(null);
  const [showLegal, setShowLegal] = useState(false);

  const handleLimitedInput = (field: "peso" | "valor", value: string) => {
    let num = Number(value);
    const max = field === "peso" ? 110 : 2000;

    if (num > max) {
      setShakeField(field);
      setTimeout(() => setShakeField(null), 1000);
      num = max;
    }

    setForm((prev) => ({ ...prev, [field]: num.toString() }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const peso = Number(form.peso) || 0;
    const valor = Number(form.valor) || 0;

    const base = 12;
    const adicional = peso > 1 ? (peso - 1) * 1.8 : 0;
    const seguro = valor * 0.05;
    const impuesto = valor > 200 ? valor * 0.19 : 0;
    const total = base + adicional + seguro + impuesto;

    setResultado({
      total,
      desglosado: { base, adicional, seguro, impuesto },
    });
    setShowResult(true);
  };

  const handleReset = () => {
    setShowResult(false);
    setForm({ departamento: null, ciudad: "", peso: "", valor: "" });
  };

  return (
    <section
      className={`${montserrat.className} bg-gradient-to-b from-[#fff9f5] via-[#fff6f1] to-[#fff] text-[#333] min-h-screen relative`}
    >
      {/* === HERO === */}
      <section className="relative text-white pt-28 md:pt-36 pb-24 px-6 text-center overflow-hidden bg-gradient-to-r from-[#f58220] to-[#ff9b42] rounded-b-[3rem] shadow-md">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-6xl font-extrabold mb-4 drop-shadow-lg"
        >
          Cotiza tu envío internacional
        </motion.h1>
        <p className="text-base md:text-lg text-white/90 max-w-2xl mx-auto leading-relaxed">
          Calcula en segundos el costo estimado de tu envío desde EE. UU. hacia cualquier ciudad
          de Colombia 🇨🇴
        </p>
      </section>

      {/* === FORMULARIO / RESULTADO === */}
      <section className="max-w-3xl mx-auto -mt-20 px-5 md:px-8 relative z-10 pb-28">
        <AnimatePresence mode="wait">
          {!showResult ? (
            <motion.form
              key="form"
              onSubmit={handleSubmit}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -40 }}
              transition={{ duration: 0.5 }}
              className="bg-white/70 backdrop-blur-xl border border-white/40 p-8 md:p-10 rounded-3xl shadow-[0_8px_40px_-12px_rgba(245,130,32,0.25)]"
            >
              <h2 className="text-2xl md:text-3xl font-semibold text-[#f58220] mb-8 text-center">
                Ingresa los datos de tu envío
              </h2>

              <div className="grid sm:grid-cols-2 gap-6">
                {/* Departamento */}
                <div>
                  <label className="block text-sm font-medium text-gray-600 mb-2">
                    Departamento de destino
                  </label>
                  <Select
                    options={departamentos}
                    value={form.departamento}
                    onChange={(val) => setForm((prev) => ({ ...prev, departamento: val }))}
                    placeholder="Selecciona un departamento"
                    className="text-sm"
                    styles={{
                      control: (base) => ({
                        ...base,
                        borderRadius: "10px",
                        borderColor: "#f58220",
                        boxShadow: "none",
                        "&:hover": { borderColor: "#e07116" },
                      }),
                    }}
                  />
                </div>

                {/* Ciudad */}
                <div>
                  <label className="block text-sm font-medium text-gray-600 mb-2">Ciudad</label>
                  <input
                    type="text"
                    value={form.ciudad}
                    onChange={(e) => setForm((prev) => ({ ...prev, ciudad: e.target.value }))}
                    placeholder="Ej: Medellín"
                    className="w-full border border-[#f58220]/40 rounded-xl px-4 py-2 text-sm md:text-base outline-none focus:ring-2 focus:ring-[#f58220]"
                    required
                  />
                </div>

                {/* Peso */}
                <motion.div
                  animate={
                    shakeField === "peso"
                      ? { x: [-6, 6, -6, 6, 0] }
                      : { x: 0 }
                  }
                  transition={{ duration: 0.4 }}
                >
                  <label className="block text-sm font-medium text-gray-600 mb-2">
                    Peso (lb) — máx. 110 lb
                  </label>
                  <div
                    className={`flex items-center border rounded-xl px-3 py-2 bg-white focus-within:ring-2 ${
                      shakeField === "peso"
                        ? "border-red-500 ring-red-400"
                        : "border-[#f58220]/40 focus-within:ring-[#f58220]"
                    }`}
                  >
                    <FaWeightHanging className="text-[#f58220] mr-2" />
                    <input
                      type="number"
                      value={form.peso}
                      onChange={(e) => handleLimitedInput("peso", e.target.value)}
                      placeholder="Ej: 3"
                      max={110}
                      className="w-full bg-transparent outline-none text-sm md:text-base"
                      required
                    />
                  </div>
                </motion.div>

                {/* Valor declarado */}
                <motion.div
                  animate={
                    shakeField === "valor"
                      ? { x: [-6, 6, -6, 6, 0] }
                      : { x: 0 }
                  }
                  transition={{ duration: 0.4 }}
                >
                  <label className="block text-sm font-medium text-gray-600 mb-2">
                    Valor declarado (USD) — máx. $2000
                  </label>
                  <div
                    className={`flex items-center border rounded-xl px-3 py-2 bg-white focus-within:ring-2 ${
                      shakeField === "valor"
                        ? "border-red-500 ring-red-400"
                        : "border-[#f58220]/40 focus-within:ring-[#f58220]"
                    }`}
                  >
                    <FaDollarSign className="text-[#f58220] mr-2" />
                    <input
                      type="number"
                      value={form.valor}
                      onChange={(e) => handleLimitedInput("valor", e.target.value)}
                      placeholder="Ej: 250"
                      max={2000}
                      className="w-full bg-transparent outline-none text-sm md:text-base"
                      required
                    />
                  </div>
                </motion.div>
              </div>

              <div className="text-center mt-12">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.97 }}
                  type="submit"
                  className="bg-gradient-to-r from-[#f58220] to-[#ff9b42] text-white px-10 py-3 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transition-all"
                >
                  Calcular Envío
                </motion.button>
              </div>
            </motion.form>
          ) : (
            <motion.div
              key="resultado"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-center bg-white/70 backdrop-blur-xl border border-white/40 p-8 md:p-10 rounded-3xl shadow-[0_8px_40px_-12px_rgba(245,130,32,0.25)]"
            >
              <h3 className="text-2xl font-bold text-[#f58220] mb-4">Resultado de tu cotización</h3>

              <div className="bg-gray-50 rounded-2xl p-6 mb-6 text-gray-700 text-sm md:text-base">
                <p>Base (1 lb): ${resultado.desglosado.base}</p>
                <p>Adicional: ${resultado.desglosado.adicional.toFixed(2)}</p>
                <p>Seguro (5%): ${resultado.desglosado.seguro.toFixed(2)}</p>
                <p>Impuesto (19% si &gt; 200 USD): ${resultado.desglosado.impuesto.toFixed(2)}</p>
                <p className="text-3xl font-extrabold text-[#f58220] mt-4">
                  Total: ${resultado.total.toFixed(2)} USD
                </p>
              </div>

              <div className="flex justify-center gap-4 flex-wrap">
                <button
                  onClick={handleReset}
                  className="flex items-center gap-2 bg-gray-100 text-gray-700 px-6 py-3 rounded-full font-medium hover:bg-gray-200 transition-all"
                >
                  <FaArrowLeft /> Volver
                </button>

                <a
                  href={`https://wa.me/573001112233?text=${encodeURIComponent(
                    `Hola, quiero enviar un paquete desde USA a ${form.departamento?.label || "Colombia"}, ${form.ciudad}.
Peso: ${form.peso} lb.
Valor declarado: $${form.valor} USD.
El sistema me arrojó un valor estimado de $${resultado.total.toFixed(
                      2
                    )} USD. ¿Podrían ayudarme a finalizar el envío?`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-[#25D366] text-white px-6 py-3 rounded-full font-medium hover:bg-[#20b358] transition-all"
                >
                  <FaPaperPlane /> Enviar por WhatsApp
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* === DISCLOSURE LEGAL === */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-14 bg-white/70 backdrop-blur-md rounded-2xl border border-[#f58220]/20 p-6 text-sm text-gray-600 shadow-sm"
        >
          <button
            onClick={() => setShowLegal(!showLegal)}
            className="w-full flex items-center justify-between font-semibold text-[#f58220]"
          >
            <span>Términos, condiciones y políticas de envío</span>
            <motion.div
              animate={{ rotate: showLegal ? 180 : 0 }}
              transition={{ duration: 0.3 }}
            >
              <FaChevronDown />
            </motion.div>
          </button>

          <AnimatePresence>
            {showLegal && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.4 }}
                className="mt-4 space-y-3 text-justify leading-relaxed text-gray-600 text-xs md:text-sm"
              >
                <p>
                  Los valores mostrados en este cotizador son <strong>estimaciones aproximadas</strong> 
                  y pueden variar según el peso volumétrico, tipo de producto, destino final y condiciones aduaneras.
                </p>
                <p>
                  Los impuestos aplicados (IVA, aranceles u otros) están sujetos a revisión por parte 
                  de las autoridades aduaneras y pueden diferir del valor estimado mostrado aquí.
                </p>
                <p>
                  Globus Cargo no se hace responsable por diferencias de costos generadas por cambios en las tarifas, 
                  variaciones de peso o impuestos no incluidos. 
                </p>
                <p>
                  El usuario acepta que esta cotización no constituye una factura final, sino una guía informativa 
                  de costos aproximados basada en la información ingresada.
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </section>

      {/* === BOTÓN FLOTANTE DE WHATSAPP === */}
     
    </section>
  );
}
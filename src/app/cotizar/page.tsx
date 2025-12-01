"use client";

import { useState } from "react";
import { Montserrat } from "next/font/google";
import { motion, AnimatePresence } from "framer-motion";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import Image from "next/image";
import globusLogo from "@/assets/img/logo/globus22.png";
import {
  FaBox,
  FaPlaneDeparture,
  FaDollarSign,
  FaWeightHanging,
  FaArrowLeft,
  FaPaperPlane,
  FaWhatsapp,
  FaChevronDown,
  FaCheckCircle,
  FaInfoCircle,
  FaCalculator
} from "react-icons/fa";
import Select from "react-select";

const montserrat = Montserrat({ subsets: ["latin"], weight: ["400", "500", "600", "700"] });

const departamentos = [
  "Amazonas", "Antioquia", "Atlántico", "Bolívar", "Cundinamarca", "Santander",
  "Valle del Cauca", "Cesar", "Magdalena", "Meta", "Nariño", "Tolima", "Córdoba",
  "Risaralda", "Quindío", "Huila", "La Guajira", "Sucre", "Caldas", "Cauca",
].map((dep) => ({ value: dep, label: dep }));

// Estilos personalizados para React Select que coincidan con el nuevo diseño
const customSelectStyles = {
  control: (base: any, state: any) => ({
    ...base,
    backgroundColor: "#f9fafb", // gray-50
    borderColor: state.isFocused ? "#f58220" : "#e5e7eb", // gray-200
    borderRadius: "0.75rem", // rounded-xl
    padding: "4px",
    boxShadow: "none",
    "&:hover": { borderColor: "#f58220" },
  }),
  menu: (base: any) => ({
    ...base,
    borderRadius: "0.75rem",
    overflow: "hidden",
    boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1)",
    zIndex: 50
  }),
  option: (base: any, state: any) => ({
    ...base,
    backgroundColor: state.isSelected ? "#f58220" : state.isFocused ? "#fff7ed" : "white",
    color: state.isSelected ? "white" : "#374151",
    cursor: "pointer",
    ":active": {
      backgroundColor: "#f58220",
    },
  }),
};

export default function CotizarEnvioPage() {
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

    setResultado({ total, desglosado: { base, adicional, seguro, impuesto } });
    setShowResult(true);
  };

  const handleReset = () => {
    setShowResult(false);
    setForm({ departamento: null, ciudad: "", peso: "", valor: "" });
  };

  return (
    <main className={`${montserrat.className} bg-slate-50 text-gray-800 min-h-screen relative selection:bg-orange-100 selection:text-orange-900`}>
      <Header />

      {/* === HERO: Diseño Premium === */}
      <section className="relative pt-44 pb-32 px-6 overflow-hidden bg-[#f58220]">
        {/* Fondo Gradiente y Textura */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#f58220] via-[#ff9a44] to-[#e07116]"></div>
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle, #fff 1.5px, transparent 1.5px)', backgroundSize: '24px 24px' }}></div>
        
        {/* Elementos decorativos */}
        <motion.div animate={{ rotate: 360 }} transition={{ duration: 120, repeat: Infinity, ease: "linear" }} className="absolute -top-[50%] -right-[20%] w-[800px] h-[800px] border border-white/10 rounded-full border-dashed opacity-30 pointer-events-none"></motion.div>

        <div className="relative z-10 text-center max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
          >
              <Image
                src={globusLogo}
                alt="Globus Cargo"
                width={160}
                height={160}
                className="mx-auto mb-6 drop-shadow-xl"
              />
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-6xl font-black text-white mb-4 drop-shadow-sm tracking-tight"
          >
            Cotizador <span className="text-orange-100">Express</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl text-orange-50 max-w-2xl mx-auto leading-relaxed font-medium"
          >
            Calcula el costo exacto de tu envío desde USA a Colombia en segundos. Transparencia total.
          </motion.p>
        </div>
      </section>

      {/* === ZONA DE COTIZACIÓN === */}
      <section className="px-6 pb-24 -mt-20 relative z-20">
        <div className="max-w-4xl mx-auto">
          <AnimatePresence mode="wait">
            {!showResult ? (
              // === FORMULARIO ===
              <motion.div
                key="form"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
                className="bg-white rounded-[2rem] shadow-2xl shadow-gray-200 border border-white overflow-hidden"
              >
                {/* Header del Formulario */}
                <div className="bg-gray-50/50 p-8 border-b border-gray-100 flex items-center gap-3">
                    <div className="w-10 h-10 bg-orange-100 text-[#f58220] rounded-full flex items-center justify-center">
                        <FaCalculator />
                    </div>
                    <div>
                        <h2 className="text-xl font-bold text-gray-900">Datos del Envío</h2>
                        <p className="text-sm text-gray-500">Ingresa los detalles para calcular la tarifa</p>
                    </div>
                </div>

                <form onSubmit={handleSubmit} className="p-8 md:p-12">
                  <div className="grid md:grid-cols-2 gap-8 mb-10">
                    
                    {/* Departamento */}
                    <div>
                      <label className="block text-sm font-bold text-gray-700 mb-2 ml-1">
                        Departamento Destino
                      </label>
                      <Select
                        options={departamentos}
                        value={form.departamento}
                        onChange={(val) => setForm((prev) => ({ ...prev, departamento: val }))}
                        placeholder="Selecciona..."
                        styles={customSelectStyles}
                        required
                      />
                    </div>

                    {/* Ciudad */}
                    <div>
                      <label className="block text-sm font-bold text-gray-700 mb-2 ml-1">Ciudad</label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
                           <FaPlaneDeparture />
                        </div>
                        <input
                            type="text"
                            value={form.ciudad}
                            onChange={(e) => setForm((prev) => ({ ...prev, ciudad: e.target.value }))}
                            placeholder="Ej: Medellín"
                            className="w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:bg-white focus:ring-2 focus:ring-[#f58220] focus:border-transparent outline-none transition-all"
                            required
                        />
                      </div>
                    </div>

                    {/* Peso */}
                    <motion.div
                      animate={shakeField === "peso" ? { x: [-5, 5, -5, 5, 0] } : { x: 0 }}
                      transition={{ duration: 0.4 }}
                    >
                      <label className="flex justify-between text-sm font-bold text-gray-700 mb-2 ml-1">
                        <span>Peso (Libras)</span>
                        <span className="text-xs text-[#f58220] font-normal bg-orange-50 px-2 py-0.5 rounded-full">Máx 110 lb</span>
                      </label>
                      <div className={`relative group`}>
                         <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400 group-focus-within:text-[#f58220]">
                           <FaWeightHanging />
                        </div>
                        <input
                          type="number"
                          value={form.peso}
                          onChange={(e) => handleLimitedInput("peso", e.target.value)}
                          placeholder="0"
                          max={110}
                          className={`w-full pl-10 pr-4 py-3 bg-gray-50 border rounded-xl focus:bg-white focus:ring-2 outline-none transition-all ${
                            shakeField === "peso" ? "border-red-400 ring-2 ring-red-100" : "border-gray-200 focus:ring-[#f58220] focus:border-transparent"
                          }`}
                          required
                        />
                      </div>
                    </motion.div>

                    {/* Valor declarado */}
                    <motion.div
                      animate={shakeField === "valor" ? { x: [-5, 5, -5, 5, 0] } : { x: 0 }}
                      transition={{ duration: 0.4 }}
                    >
                      <label className="flex justify-between text-sm font-bold text-gray-700 mb-2 ml-1">
                        <span>Valor Declarado (USD)</span>
                        <span className="text-xs text-[#f58220] font-normal bg-orange-50 px-2 py-0.5 rounded-full">Máx $2,000</span>
                      </label>
                      <div className="relative group">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400 group-focus-within:text-[#f58220]">
                           <FaDollarSign />
                        </div>
                        <input
                          type="number"
                          value={form.valor}
                          onChange={(e) => handleLimitedInput("valor", e.target.value)}
                          placeholder="0.00"
                          max={2000}
                          className={`w-full pl-10 pr-4 py-3 bg-gray-50 border rounded-xl focus:bg-white focus:ring-2 outline-none transition-all ${
                            shakeField === "valor" ? "border-red-400 ring-2 ring-red-100" : "border-gray-200 focus:ring-[#f58220] focus:border-transparent"
                          }`}
                          required
                        />
                      </div>
                    </motion.div>
                  </div>

                  <div className="text-center">
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      type="submit"
                      className="w-full md:w-auto px-12 py-4 bg-[#f58220] text-white font-bold rounded-xl shadow-lg shadow-orange-200 hover:shadow-orange-300 hover:bg-[#e07116] transition-all flex items-center justify-center gap-2 mx-auto"
                    >
                      <FaCalculator /> Calcular Tarifa
                    </motion.button>
                  </div>
                </form>
              </motion.div>
            ) : (
              // === RESULTADO (Ticket Style) ===
              <motion.div
                key="resultado"
                initial={{ opacity: 0, rotateX: -15 }}
                animate={{ opacity: 1, rotateX: 0 }}
                transition={{ duration: 0.5, type: "spring" }}
                className="bg-white rounded-[2rem] shadow-2xl shadow-gray-200 overflow-hidden relative"
              >
                {/* Banner de Éxito */}
                <div className="bg-[#f58220] p-6 text-white text-center">
                    <motion.div 
                        initial={{ scale: 0 }} 
                        animate={{ scale: 1 }} 
                        className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-3 backdrop-blur-sm"
                    >
                        <FaCheckCircle className="text-3xl" />
                    </motion.div>
                    <h3 className="text-2xl font-bold">¡Cotización Lista!</h3>
                    <p className="text-white/80 text-sm">Resumen estimado de tu envío</p>
                </div>

                <div className="p-8 md:p-12">
                    {/* Detalles del Ticket */}
                    <div className="border-2 border-dashed border-gray-200 rounded-2xl p-6 bg-gray-50 mb-8">
                        <div className="flex justify-between items-center mb-4 pb-4 border-b border-gray-200 border-dashed">
                             <span className="text-gray-500 font-medium">Tarifa Base (1 lb)</span>
                             <span className="font-bold text-gray-800">${resultado.desglosado.base.toFixed(2)}</span>
                        </div>
                        <div className="flex justify-between items-center mb-4 pb-4 border-b border-gray-200 border-dashed">
                             <span className="text-gray-500 font-medium">Peso Adicional</span>
                             <span className="font-bold text-gray-800">${resultado.desglosado.adicional.toFixed(2)}</span>
                        </div>
                        <div className="flex justify-between items-center mb-4 pb-4 border-b border-gray-200 border-dashed">
                             <div className="flex items-center gap-1">
                                <span className="text-gray-500 font-medium">Seguro (5%)</span>
                                <div className="group relative">
                                    <FaInfoCircle className="text-gray-300 hover:text-[#f58220] cursor-help text-xs"/>
                                </div>
                             </div>
                             <span className="font-bold text-gray-800">${resultado.desglosado.seguro.toFixed(2)}</span>
                        </div>
                        <div className="flex justify-between items-center mb-2">
                             <span className="text-gray-500 font-medium">Impuestos (IVA)</span>
                             <span className={`font-bold ${resultado.desglosado.impuesto > 0 ? "text-gray-800" : "text-green-500"}`}>
                                {resultado.desglosado.impuesto > 0 ? `$${resultado.desglosado.impuesto.toFixed(2)}` : "EXENTO"}
                             </span>
                        </div>
                        
                        {/* TOTAL */}
                        <div className="mt-6 bg-white rounded-xl p-4 border border-orange-100 flex justify-between items-center shadow-sm">
                            <span className="text-lg font-bold text-gray-700">TOTAL ESTIMADO</span>
                            <span className="text-3xl font-black text-[#f58220]">${resultado.total.toFixed(2)} <span className="text-sm text-gray-400 font-normal">USD</span></span>
                        </div>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <button
                            onClick={handleReset}
                            className="px-6 py-3 rounded-xl border border-gray-200 text-gray-600 font-bold hover:bg-gray-50 transition-colors flex items-center justify-center gap-2"
                        >
                            <FaArrowLeft /> Nueva Cotización
                        </button>

                        <a
                            href={`https://wa.me/573001112233?text=${encodeURIComponent(
                            `Hola Globus Cargo 📦, quiero realizar este envío:
📍 Destino: ${form.departamento?.label || "Colombia"} - ${form.ciudad}
⚖️ Peso: ${form.peso} lb
💰 Valor Declarado: $${form.valor} USD
💵 Cotización Web: $${resultado.total.toFixed(2)} USD

¿Me ayudan a procesarlo?`
                            )}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-8 py-3 rounded-xl bg-[#25D366] text-white font-bold hover:bg-[#20b358] shadow-lg shadow-green-100 transition-colors flex items-center justify-center gap-2"
                        >
                            <FaWhatsapp className="text-xl" /> Enviar por WhatsApp
                        </a>
                    </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* === TÉRMINOS Y CONDICIONES (Acordeón Discreto) === */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="mt-12 mx-auto max-w-2xl"
          >
            <button
                onClick={() => setShowLegal(!showLegal)}
                className="w-full flex items-center justify-center gap-2 text-gray-400 hover:text-[#f58220] transition-colors text-sm font-medium py-2"
            >
                <span>Ver términos y condiciones del cálculo</span>
                <motion.div animate={{ rotate: showLegal ? 180 : 0 }}>
                    <FaChevronDown />
                </motion.div>
            </button>

            <AnimatePresence>
                {showLegal && (
                <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    className="overflow-hidden"
                >
                    <div className="bg-white/50 backdrop-blur-sm rounded-2xl border border-gray-100 p-6 mt-2 text-xs text-gray-500 leading-relaxed text-center">
                         <p className="mb-2">⚠️ <strong>Importante:</strong> Esta cotización es una estimación basada en la información suministrada. El costo final puede variar tras la verificación física del peso y volumen en nuestras bodegas de Miami.</p>
                         <ul className="space-y-1">
                             <li>• Los impuestos (IVA/Aranceles) son determinados por la DIAN y pueden cambiar sin previo aviso.</li>
                             <li>• El peso volumétrico se aplicará si este supera al peso físico.</li>
                             <li>• No incluye costos por reempaque especial si la mercancía lo requiere.</li>
                         </ul>
                    </div>
                </motion.div>
                )}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      <Footer/>
    </main>
  );
}
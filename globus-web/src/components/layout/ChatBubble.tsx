"use client";

import { useEffect, useRef } from "react";

// === Configuración del Chatbot ===
const CHATBOT_ID = "w8KioDPJAl3hBxWR8jt7_";
const SCRIPT_URL = "https://www.chatbase.co/embed.min.js";
const IFRAME_TITLE = "Chatbase Chatbot"; // Título usado por Chatbase para el iframe

/**
 * Hook personalizado para manejar la carga del script del chatbot
 * y la inyección de estilos, asegurando que solo se ejecute una vez.
 */
function useChatbotLoader() {
  const isComponentMounted = useRef(false);

  // 1. Efecto principal: Carga el script y añade estilos
  useEffect(() => {
    // 1a. Prevención de carga: Chequea si ya se cargó globalmente (entre navegaciones SPA)
    // o si el componente está siendo montado por primera vez en este ciclo.
    if (isComponentMounted.current || window.chatbaseLoaded) {
      return;
    }

    // 1b. Marcar como cargado (para prevenir recargas en futuras navegaciones SPA)
    window.chatbaseLoaded = true;
    isComponentMounted.current = true;

    // --- Cargar script del chatbot ---
    const script = document.createElement("script");
    script.src = SCRIPT_URL;
    script.setAttribute("chatbotId", CHATBOT_ID);
    script.defer = true;
    document.body.appendChild(script);

    // --- Inyectar estilos para asegurar la visibilidad del iframe ---
    const style = document.createElement("style");
    style.textContent = `
      iframe[title="${IFRAME_TITLE}"] {
        z-index: 9999 !important;
      }
    `;
    document.head.appendChild(style);

    // 1c. Función de limpieza al desmontar el componente (solo remueve estilos)
    return () => {
      if (document.head.contains(style)) {
        document.head.removeChild(style);
      }
      // NOTA: El script del chatbot se deja en el DOM (<body>) hasta el cierre
      // total de la página para evitar parpadeos y problemas de persistencia.
    };
  }, []); // El array vacío asegura que solo se ejecute al montar

  // 2. Efecto secundario: Limpieza del marcador global al cerrar la ventana
  useEffect(() => {
    const handleBeforeUnload = () => {
      // Restablece la bandera global solo cuando la página se va a descargar completamente
      window.chatbaseLoaded = false;
    };

    window.addEventListener("beforeunload", handleBeforeUnload);

    // Función de limpieza para remover el listener
    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, []); // Este efecto solo se ejecuta una vez al montar

}

/**
 * Componente principal para integrar el chatbot de Chatbase.
 * No renderiza elementos visibles, solo maneja el efecto lateral de carga.
 */
export default function ChatbotLoader() {
  useChatbotLoader();

  return null;
}
import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://globuscargo.com"; // ⚠️ cámbialo a tu dominio real

  const origenes = ["usa", "miami"];

  const destinos = [
    "bogota", "medellin", "cali", "barranquilla", "cartagena", "bucaramanga", "pereira",
    "manizales", "santa-marta", "cucuta", "ibague", "villavicencio", "neiva", "monteria",
    "popayan", "sincelejo", "armenia", "pasto", "valledupar", "riohacha", "tunja", "yopal",
    "florencia", "quibdo", "mocoa", "leticia", "ipiales", "tumaco", "girardot", "soacha",
    "chia", "zipaquira", "fusagasuga", "facatativa", "envigado", "bello", "itagui",
    "rionegro", "dosquebradas", "cartago", "palmira", "tulua", "barrancabermeja",
    "magangue", "since", "cienaga", "malambo", "soledad", "jamundi", "sogamoso",
    "duitama", "sibate", "mosquera", "cajica", "tocancipa", "girón", "floridablanca",
    "piedecuesta"
  ];

  const staticRoutes = [
    "",
    "/nosotros",
    "/cotizar",
    "/rastrear",
    "/contacto",
    "/terminos",
    "/politica-de-datos",
  ];

  const pages = [
    // 🌍 páginas estáticas
    ...staticRoutes.map((path) => ({
      url: `${baseUrl}${path}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 1.0,
    })),

    // ✈️ combinaciones dinámicas: /envios/desde/usa/a/ciudad
    ...origenes.flatMap((origen) =>
      destinos.map((destino) => ({
        url: `${baseUrl}/envios/desde/${origen}/a/${destino}`,
        lastModified: new Date(),
        changeFrequency: "weekly" as const,
        priority: 0.9,
      }))
    ),
  ];

  return pages;
}
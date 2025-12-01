import "./globals.css";
import "@/styles/header.css";
import { Montserrat } from "next/font/google";
import ClientWrapper from "@/components/layout/ClientWrapper"; // ✅ Este ya incluye ChatBubble

export const metadata = {
  title: "Globus Cargo | Envíos desde USA a Colombia",
  description:
    "Envíos desde Estados Unidos a Colombia de forma rápida, segura y confiable. Casillero gratuito en Miami, consolidación de paquetes, servicio aéreo y marítimo con cobertura nacional.",
};

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className={`${montserrat.className} bg-white text-gray-800`}>
        <ClientWrapper>{children}</ClientWrapper>
      </body>
    </html>
  );
}
"use client";

import Header from "@/components/layout/header";
import Hero from "@/components/layout/hero";
import StepCards from "@/components/layout/stepCards";
import Testimonials from "@/components/layout/testimonials";
import BenefitsPro from "@/components/layout/benefitsPro";
import ServiciosConTracking from "@/components/layout/ServiciosConTracking";
import QuoteForm from "@/components/layout/quoteForm";
import Footer from "@/components/layout/footer";
import ChatBubble from "@/components/layout/ChatBubble"; // 👈 importa aquí

export default function HomePage() {
  return (
    <div className="font-sans text-gray-800 relative">
      <Header />
      <Hero />
      <ServiciosConTracking />
      <QuoteForm />
      <BenefitsPro />
      <StepCards />
      <Testimonials />
      <Footer />

      {/* 👇 Chatbase se carga aquí */}
      <ChatBubble />
    </div>
  );
}
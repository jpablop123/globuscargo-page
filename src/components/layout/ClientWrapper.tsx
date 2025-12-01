"use client";

import ChatBubble from "@/components/layout/ChatBubble";

export default function ClientWrapper({ children }: { children: React.ReactNode }) {
  return (
    <>
      {children}
      <ChatBubble />
    </>
  );
}
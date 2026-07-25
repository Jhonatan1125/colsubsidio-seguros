import { useState } from "react";
import { MessageCircle, X } from "lucide-react";

const COPILOT_URL =
  "https://copilotstudio.microsoft.com/environments/b0d81a75-26e1-e5db-a746-f41bc30bfee5/bots/jh_Hackathon/webchat?__version__=2";

export default function CopilotChatbot() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Chatbot panel */}
      <div
        className={`fixed bottom-24 right-5 z-50 flex flex-col overflow-hidden rounded-2xl border border-border bg-white shadow-2xl transition-all duration-300 ${
          isOpen
            ? "h-[520px] w-[380px] scale-100 opacity-100"
            : "pointer-events-none h-0 w-0 scale-90 opacity-0"
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between bg-brand-blue px-4 py-3">
          <div className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white/20">
              <MessageCircle className="h-4 w-4 text-white" />
            </div>
            <div>
              <p className="text-sm font-semibold text-white">
                Asistente Colsubsidio
              </p>
              <p className="text-xs text-white/70">En línea</p>
            </div>
          </div>
          <button
            onClick={() => setIsOpen(false)}
            className="rounded-full p-1 text-white/80 transition-colors hover:bg-white/20 hover:text-white"
            aria-label="Cerrar chat"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Iframe */}
        <iframe
          src={isOpen ? COPILOT_URL : undefined}
          title="Chatbot Colsubsidio"
          className="h-full w-full flex-1 border-0"
          allow="microphone"
        />
      </div>

      {/* Floating trigger button */}
      <button
        id="chatbot-toggle"
        onClick={() => setIsOpen((prev) => !prev)}
        className={`fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full shadow-lg transition-all duration-300 hover:scale-110 ${
          isOpen
            ? "bg-red-500 hover:bg-red-600"
            : "bg-brand-blue hover:bg-brand-blue/90"
        }`}
        aria-label={isOpen ? "Cerrar chatbot" : "Abrir chatbot"}
      >
        {isOpen ? (
          <X className="h-6 w-6 text-white" />
        ) : (
          <MessageCircle className="h-6 w-6 text-white" />
        )}
      </button>

      {/* Pulse animation when closed */}
      {!isOpen && (
        <span className="fixed bottom-5 right-5 z-40 h-14 w-14 animate-ping rounded-full bg-brand-blue/30" />
      )}
    </>
  );
}

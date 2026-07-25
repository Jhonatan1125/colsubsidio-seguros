import { useState } from "react";
import { Link } from "react-router-dom";
import {
  Facebook,
  Instagram,
  Linkedin,
  Phone,
  ShieldCheck,
  Youtube,
} from "lucide-react";
import { cn } from "@/lib/utils";

const tabs = [
  {
    label: "Acerca de nosotros",
    links: [
      { label: "Quiénes somos" },
      { label: "Nuestro impacto" },
      { label: "Perfil organizacional" },
    ],
  },
  {
    label: "Trabaja con nosotros",
    links: [{ label: "Modelo DEI" }, { label: "Cultura Colsubsidio" }],
  },
  {
    label: "Legales",
    links: [
      { label: "Tratamiento de datos personales" },
      { label: "Peticiones, quejas, reclamos y solicitudes" },
      { label: "Transparencia" },
      { label: "Compromiso con usuarios" },
    ],
  },
  {
    label: "Accesos rápidos",
    links: [
      { label: "Proveedores" },
      { label: "Sala de prensa" },
      { label: "Nuestras comunidades" },
      { label: "Mapa del sitio" },
    ],
  },
];

export default function Footer() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <footer className="bg-brand-dark text-white">
      <div className="container py-14">
        <div className="grid gap-12 lg:grid-cols-[1.1fr_1.4fr]">
          <div>
            <Link to="/" className="flex items-center gap-2">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-yellow text-brand-dark">
                <ShieldCheck className="h-5 w-5" />
              </span>
              <span className="text-lg font-bold">Colsubsidio</span>
            </Link>
            <p className="mt-4 max-w-sm text-sm text-white/60">
              Protege lo que más valoras con seguros y asistencias para tu
              familia, hogar, salud y vehículos.
            </p>

            <div className="mt-8">
              <p className="text-sm font-semibold text-white">Llámanos</p>
              <p className="mt-1 text-sm text-white/60">
                Línea gratuita de servicio al ciudadano
              </p>
              <div className="mt-3 flex items-center gap-2 text-sm text-white/80">
                <Phone className="h-4 w-4 text-brand-yellow" />
                <span>Bogotá: +57 601 745 79 00</span>
              </div>
              <div className="mt-1 flex items-center gap-2 text-sm text-white/80">
                <Phone className="h-4 w-4 text-brand-yellow" />
                <span>Línea nacional: 01 8000 947 900</span>
              </div>
            </div>

            <p className="mt-8 text-sm font-semibold text-white">
              Síguenos en redes sociales
            </p>
            <div className="mt-3 flex items-center gap-3">
              {[Youtube, Facebook, Instagram, Linkedin].map((Icon, i) => (
                <button
                  key={i}
                  aria-label="Red social"
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-brand-yellow hover:text-brand-dark"
                >
                  <Icon className="h-4 w-4" />
                </button>
              ))}
            </div>
          </div>

          <div>
            <div className="flex flex-wrap gap-2 border-b border-white/10 pb-3">
              {tabs.map((tab, i) => (
                <button
                  key={tab.label}
                  onClick={() => setActiveTab(i)}
                  className={cn(
                    "relative rounded-full px-4 py-2 text-sm font-medium transition-colors",
                    activeTab === i
                      ? "bg-white/10 text-brand-yellow"
                      : "text-white/60 hover:text-white",
                  )}
                >
                  {tab.label}
                </button>
              ))}
            </div>
            <ul className="mt-5 grid gap-3 sm:grid-cols-2">
              {tabs[activeTab].links.map((link) => (
                <li key={link.label}>
                  <button className="text-left text-sm text-white/70 hover:text-white">
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container flex flex-col items-center justify-between gap-3 py-6 text-xs text-white/50 sm:flex-row">
          <p>Todos los derechos reservados © Colsubsidio {new Date().getFullYear()}</p>
          <p>Vigilado por Supersalud y Supersubsidio</p>
        </div>
      </div>
    </footer>
  );
}

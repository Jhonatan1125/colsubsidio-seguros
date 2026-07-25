import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { ChevronDown, Menu, Search, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { cn } from "@/lib/utils";

const secondaryLinks = [
  { label: "Salud" },
  { label: "Subsidios" },
  { label: "Vivienda", to: "/vivienda" },
  { label: "Créditos", to: "/creditos" },
];

const seguroQuickLinks = [
  { label: "Seguros para el hogar", to: "/seguros/hogar" },
  { label: "Seguros para tu vehículo", to: "/seguros/vehiculos" },
  { label: "Seguros y asistencias para mascotas", to: "/seguros/mascotas" },
];

const seguroServiceLinks = [
  { label: "Seguros personales y familiares", to: "/seguros/familiares" },
  { label: "Seguros de tu crédito", to: "/seguros/deudores-financieros" },
];

const trailingCategories = [
  "Deportes",
  "Turismo",
  "Recreación",
  "Educación",
  "Otros servicios",
];

export default function Header() {
  const location = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-white shadow-sm">
      <div className="hidden border-b border-border/70 bg-brand-dark text-white lg:block">
        <div className="container flex h-9 items-center justify-between text-xs">
          <div className="flex items-center gap-5">
            <button className="font-medium text-white/80 hover:text-white">
              Personas
            </button>
            <button className="font-medium text-white/60 hover:text-white">
              Empresas
            </button>
          </div>
          <div className="flex items-center gap-5 text-white/70">
            <button className="hover:text-white">Te ayudamos</button>
            <button className="hover:text-white">Encuéntranos</button>
            <button className="hover:text-white">Afiliaciones</button>
            <button className="hover:text-white">Colsubsidio virtual</button>
          </div>
        </div>
      </div>

      <div className="container flex h-16 items-center justify-between gap-4 lg:h-20">
        <Link to="/" className="flex shrink-0 items-center gap-2">
          <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-dark text-brand-yellow">
            <ShieldCheck className="h-5 w-5" />
          </span>
          <span className="text-lg font-bold tracking-tight text-brand-dark">
            Colsubsidio
          </span>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex">
          {secondaryLinks.map((item) =>
            item.to ? (
              <Link
                key={item.label}
                to={item.to}
                className="rounded-full px-3 py-2 text-sm font-medium text-foreground/80 transition-colors hover:bg-muted hover:text-foreground"
              >
                {item.label}
              </Link>
            ) : (
              <button
                key={item.label}
                className="rounded-full px-3 py-2 text-sm font-medium text-foreground/80 transition-colors hover:bg-muted hover:text-foreground"
              >
                {item.label}
              </button>
            ),
          )}

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button
                className={cn(
                  "flex items-center gap-1 rounded-full px-3 py-2 text-sm font-semibold text-brand-dark transition-colors",
                  location.pathname.startsWith("/seguros")
                    ? "bg-brand-yellow/25"
                    : "hover:bg-muted",
                )}
              >
                Seguros
                <ChevronDown className="h-3.5 w-3.5" />
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="start" className="w-72">
              <p className="px-2 pb-1 pt-2 text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                Accesos rápidos
              </p>
              {seguroQuickLinks.map((link) => (
                <DropdownMenuItem key={link.to} asChild>
                  <Link to={link.to}>{link.label}</Link>
                </DropdownMenuItem>
              ))}
              <p className="px-2 pb-1 pt-3 text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                Servicios de seguros
              </p>
              {seguroServiceLinks.map((link) => (
                <DropdownMenuItem key={link.to} asChild>
                  <Link to={link.to}>{link.label}</Link>
                </DropdownMenuItem>
              ))}
              <DropdownMenuItem asChild>
                <Link to="/" className="font-semibold text-brand-blue">
                  Todo sobre seguros
                </Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          {trailingCategories.map((label) => (
            <button
              key={label}
              className="rounded-full px-3 py-2 text-sm font-medium text-foreground/80 transition-colors hover:bg-muted hover:text-foreground"
            >
              {label}
            </button>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Button
            variant="ghost"
            size="icon"
            className="hidden rounded-full lg:inline-flex"
            aria-label="Buscar"
          >
            <Search className="h-5 w-5" />
          </Button>
          <Button
            asChild
            className="hidden rounded-full bg-brand-blue px-5 text-white hover:bg-brand-blue/90 lg:inline-flex"
          >
            <Link to="/seguros/familiares">Cotiza ahora</Link>
          </Button>

          <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="lg:hidden"
                aria-label="Abrir menú"
              >
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-80 overflow-y-auto">
              <SheetHeader>
                <SheetTitle className="text-left text-brand-dark">
                  Menú
                </SheetTitle>
              </SheetHeader>
              <div className="mt-6 flex flex-col gap-1">
                <p className="px-1 pb-1 text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                  Seguros
                </p>
                <Link
                  to="/"
                  onClick={() => setMobileOpen(false)}
                  className="rounded-lg px-3 py-2 text-sm font-semibold text-brand-dark hover:bg-muted"
                >
                  Todo sobre seguros
                </Link>
                {[...seguroQuickLinks, ...seguroServiceLinks].map((link) => (
                  <Link
                    key={link.to}
                    to={link.to}
                    onClick={() => setMobileOpen(false)}
                    className="rounded-lg px-3 py-2 text-sm text-foreground/80 hover:bg-muted"
                  >
                    {link.label}
                  </Link>
                ))}
                <div className="my-3 h-px bg-border" />
                <p className="px-1 pb-1 text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                  Más categorías
                </p>
                {[...secondaryLinks, ...trailingCategories.map((l) => ({ label: l }))].map(
                  (item) =>
                    item.to ? (
                      <Link
                        key={item.label}
                        to={item.to}
                        onClick={() => setMobileOpen(false)}
                        className="rounded-lg px-3 py-2 text-sm text-foreground/80 hover:bg-muted"
                      >
                        {item.label}
                      </Link>
                    ) : (
                      <button
                        key={item.label}
                        className="rounded-lg px-3 py-2 text-left text-sm text-foreground/80 hover:bg-muted"
                      >
                        {item.label}
                      </button>
                    ),
                )}
                <Button
                  asChild
                  className="mt-4 rounded-full bg-brand-blue text-white hover:bg-brand-blue/90"
                >
                  <Link to="/seguros/familiares" onClick={() => setMobileOpen(false)}>
                    Cotiza ahora
                  </Link>
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}

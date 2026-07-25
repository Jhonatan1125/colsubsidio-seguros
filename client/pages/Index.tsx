import { Link } from "react-router-dom";
import {
  ArrowRight,
  Car,
  ChevronRight,
  Cross,
  Headset,
  Heart,
  Home as HomeIcon,
  PawPrint,
  ShieldCheck,
  Wallet,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const heroSlides = [
  {
    title: "Seguros y asistencias Colsubsidio",
    description:
      "Protege lo que más valoras con nuestros seguros para tu familia, hogar, salud y vehículos.",
    cta: "Conócelos",
    to: "/seguros/familiares",
    icon: ShieldCheck,
  },
  {
    title: "Seguros para cada etapa de tu vida",
    description:
      "Cubre todo lo importante: familia, hogar, vehículos, mascotas y créditos. Soluciones reales, respaldo inmediato y planes adaptados a lo que realmente necesitas.",
    cta: "Explóralos",
    to: "/seguros/hogar",
    icon: Heart,
  },
  {
    title: "Seguro obligatorio de accidentes de tránsito",
    description:
      "Tu seguridad vial es primero. Activa tu SOAT con Colsubsidio y aseguradoras aliadas. Recibe asistencia al instante y acompañamiento completo.",
    cta: "Obtén tu seguro",
    to: "/seguros/vehiculos",
    icon: Car,
  },
];

const services = [
  {
    label: "Personal y familiar",
    description: "Protégelos de cualquier evento inesperado.",
    to: "/seguros/familiares",
    icon: Heart,
  },
  {
    label: "Movilidad",
    description: "Protección para auto, moto, bici y patineta.",
    to: "/seguros/vehiculos",
    icon: Car,
  },
  {
    label: "Mascotas",
    description: "Cobertura veterinaria y emergencias.",
    to: "/seguros/mascotas",
    icon: PawPrint,
  },
  {
    label: "Crédito",
    description: "Respaldo económico cuando más lo necesitas.",
    to: "/seguros/deudores-financieros",
    icon: Wallet,
  },
  {
    label: "Hogar",
    description: "Protege tu vivienda y sus contenidos.",
    to: "/seguros/hogar",
    icon: HomeIcon,
  },
];

const benefits = [
  {
    title: "Expertos a tu servicio en cualquier momento",
    description:
      "Profesionales capacitados listos para ayudarte con reparaciones urgentes, orientación legal básica y asistencia médica telefónica.",
    icon: Headset,
  },
  {
    title: "Soluciones rápidas para emergencias diarias",
    description:
      "Desde una cerradura rota hasta una consulta médica nocturna, tenemos la solución adecuada.",
    icon: ShieldCheck,
  },
  {
    title: "Protección integral para lo inesperado",
    description:
      "Amplio respaldo en situaciones imprevistas: averías eléctricas, fugas de agua, orientación veterinaria y más.",
    icon: Cross,
  },
  {
    title: "Asesoramiento sin salir de casa",
    description:
      "Acceso inmediato a especialistas en diversas áreas por teléfono o videollamada.",
    icon: Heart,
  },
];

const moreServices = [
  {
    title: "Vivienda",
    description:
      "Descubre la vivienda ideal para tu familia. Explora opciones accesibles y haz realidad tu sueño de tener casa propia.",
    to: "/vivienda",
  },
  {
    title: "Créditos",
    description:
      "Opciones de financiamiento con aprobación ágil y tasas competitivas para educación, salud, emprendimientos y viajes.",
    to: "/creditos",
  },
  {
    title: "Educación",
    description:
      "Programas de educación básica, superior o de extensión para todas las edades.",
    to: "/educacion",
  },
];

export default function Index() {
  return (
    <div>
      <section className="relative overflow-hidden bg-hero-gradient">
        <div className="container py-16 lg:py-24">
          <p className="mb-6 text-sm font-medium text-brand-dark/60">
            Inicio <ChevronRight className="mx-1 inline h-3 w-3" /> Seguros y
            asistencias Colsubsidio
          </p>

          <Carousel className="w-full">
            <CarouselContent>
              {heroSlides.map((slide) => (
                <CarouselItem key={slide.title}>
                  <div className="grid items-center gap-10 lg:grid-cols-2">
                    <div>
                      <h1 className="text-4xl font-extrabold leading-tight tracking-tight text-brand-dark sm:text-5xl lg:text-[3.4rem] lg:leading-[1.05]">
                        {slide.title}
                      </h1>
                      <p className="mt-5 max-w-lg text-base text-brand-dark/70 sm:text-lg">
                        {slide.description}
                      </p>
                      <Button
                        asChild
                        size="lg"
                        className="mt-8 rounded-full bg-brand-dark px-8 text-white hover:bg-brand-dark/90"
                      >
                        <Link to={slide.to}>
                          {slide.cta}
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                      </Button>
                    </div>
                    <div className="relative mx-auto flex h-64 w-64 items-center justify-center rounded-full bg-white/60 shadow-inner sm:h-80 sm:w-80">
                      <div className="flex h-44 w-44 items-center justify-center rounded-full bg-brand-yellow shadow-lg sm:h-56 sm:w-56">
                        <slide.icon
                          className="h-20 w-20 text-brand-dark sm:h-24 sm:w-24"
                          strokeWidth={1.5}
                        />
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="static ml-0 mt-8 translate-y-0 border-brand-dark/20 bg-white" />
            <CarouselNext className="static mt-8 translate-y-0 border-brand-dark/20 bg-white" />
          </Carousel>
        </div>
      </section>

      <section id="servicios" className="bg-white py-20">
        <div className="container">
          <div className="grid gap-10 lg:grid-cols-[0.8fr_2fr]">
            <div>
              <span className="text-sm font-semibold uppercase tracking-wide text-brand-blue">
                Servicios
              </span>
              <h2 className="mt-3 text-3xl font-bold text-foreground sm:text-4xl">
                Coberturas hechas a tu medida
              </h2>
              <p className="mt-4 text-muted-foreground">
                Conoce las coberturas personalizadas, asistencia inmediata y
                soluciones a tu medida.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {services.map((service) => (
                <Link
                  key={service.label}
                  to={service.to}
                  className="group flex flex-col justify-between rounded-2xl border border-border bg-muted/40 p-6 transition-all hover:-translate-y-1 hover:border-brand-blue/40 hover:bg-white hover:shadow-xl"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-yellow/25 text-brand-dark transition-colors group-hover:bg-brand-yellow">
                    <service.icon className="h-6 w-6" />
                  </div>
                  <div className="mt-6">
                    <h3 className="text-lg font-semibold text-foreground">
                      {service.label}
                    </h3>
                    <p className="mt-1 text-sm text-muted-foreground">
                      {service.description}
                    </p>
                  </div>
                  <span className="mt-5 inline-flex items-center text-sm font-semibold text-brand-blue">
                    Ver más
                    <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="beneficios" className="bg-muted/40 py-20">
        <div className="container">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-bold text-foreground sm:text-4xl">
              Asistencia para imprevistos cotidianos
            </h2>
            <p className="mt-4 text-muted-foreground">
              Un equipo especializado disponible todo el día para solucionar
              emergencias domésticas, consultas técnicas y problemas del día
              a día.
            </p>
          </div>

          <Carousel className="mt-10 w-full" opts={{ align: "start" }}>
            <CarouselContent>
              {benefits.map((benefit) => (
                <CarouselItem
                  key={benefit.title}
                  className="sm:basis-1/2 lg:basis-1/3"
                >
                  <div className="flex h-full flex-col rounded-2xl border border-border bg-white p-6 shadow-sm">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-brand-blue/10 text-brand-blue">
                      <benefit.icon className="h-6 w-6" />
                    </div>
                    <h3 className="mt-5 text-lg font-semibold text-foreground">
                      {benefit.title}
                    </h3>
                    <p className="mt-2 text-sm text-muted-foreground">
                      {benefit.description}
                    </p>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="mt-8 flex justify-end gap-2">
              <CarouselPrevious className="static translate-y-0 bg-white" />
              <CarouselNext className="static translate-y-0 bg-white" />
            </div>
          </Carousel>
        </div>
      </section>

      <section className="bg-brand-dark py-20 text-white">
        <div className="container">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-bold sm:text-4xl">
              Más servicios para ti
            </h2>
            <p className="mt-4 text-white/60">
              Soluciones pensadas para cubrir tus necesidades en salud,
              vivienda, educación y más.
            </p>
          </div>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {moreServices.map((item) => (
              <div
                key={item.title}
                className="flex flex-col justify-between rounded-2xl bg-white/5 p-6"
              >
                <div>
                  <h3 className="text-xl font-semibold text-brand-yellow">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm text-white/70">
                    {item.description}
                  </p>
                </div>
                <Link
                  to={item.to}
                  className="mt-6 inline-flex w-fit items-center rounded-full border border-white/20 px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-white hover:text-brand-dark"
                >
                  Conoce más
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-brand-yellow py-14">
        <div className="container flex flex-col items-center justify-between gap-6 text-center sm:flex-row sm:text-left">
          <div>
            <h2 className="text-2xl font-bold text-brand-dark sm:text-3xl">
              ¿Listo para proteger lo que más valoras?
            </h2>
            <p className="mt-2 text-brand-dark/70">
              Cotiza tu seguro en minutos y recibe asistencia 24/7.
            </p>
          </div>
          <Button
            asChild
            size="lg"
            className="rounded-full bg-brand-dark px-8 text-white hover:bg-brand-dark/90"
          >
            <Link to="/seguros/familiares">
              Cotiza ahora
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
}

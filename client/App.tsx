import "./global.css";

import { Toaster } from "@/components/ui/toaster";
import { createRoot } from "react-dom/client";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import PlaceholderPage from "@/components/PlaceholderPage";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter basename="/colsubsidio-seguros">
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Index />} />
            <Route
              path="/seguros/familiares"
              element={
                <PlaceholderPage
                  title="Seguros personales y familiares"
                  description="Protege a los tuyos de cualquier evento inesperado con planes pensados para cada etapa de la vida."
                />
              }
            />
            <Route
              path="/seguros/vehiculos"
              element={
                <PlaceholderPage
                  title="Seguros de movilidad"
                  description="Protección para tu auto, moto, bici o patineta, incluyendo SOAT y asistencia en vía."
                />
              }
            />
            <Route
              path="/seguros/mascotas"
              element={
                <PlaceholderPage
                  title="Seguros para mascotas"
                  description="Cobertura veterinaria y asistencia de emergencia para tu mejor amigo."
                />
              }
            />
            <Route
              path="/seguros/hogar"
              element={
                <PlaceholderPage
                  title="Seguros de hogar"
                  description="Protege tu vivienda y todo lo que hay en ella ante imprevistos."
                />
              }
            />
            <Route
              path="/seguros/deudores-financieros"
              element={
                <PlaceholderPage
                  title="Seguros de tu crédito"
                  description="Respaldo económico para ti y tu familia frente a imprevistos financieros."
                />
              }
            />
            <Route
              path="/vivienda"
              element={
                <PlaceholderPage
                  title="Vivienda"
                  description="Descubre la vivienda ideal para tu familia con opciones accesibles."
                />
              }
            />
            <Route
              path="/creditos"
              element={
                <PlaceholderPage
                  title="Créditos"
                  description="Financiamiento con aprobación ágil y tasas competitivas para tus metas."
                />
              }
            />
            <Route
              path="/educacion"
              element={
                <PlaceholderPage
                  title="Educación"
                  description="Programas de educación básica, superior y de extensión para todas las edades."
                />
              }
            />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

createRoot(document.getElementById("root")!).render(<App />);

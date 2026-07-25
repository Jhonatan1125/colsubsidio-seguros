import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

interface PlaceholderPageProps {
  title: string;
  description: string;
}

export default function PlaceholderPage({
  title,
  description,
}: PlaceholderPageProps) {
  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center px-6 py-24 text-center">
      <span className="mb-4 inline-flex items-center rounded-full bg-brand-yellow/20 px-4 py-1 text-sm font-semibold text-brand-dark">
        Próximamente
      </span>
      <h1 className="max-w-2xl text-3xl font-bold text-foreground sm:text-4xl">
        {title}
      </h1>
      <p className="mt-4 max-w-xl text-base text-muted-foreground">
        {description}
      </p>
      <p className="mt-2 max-w-xl text-sm text-muted-foreground">
        Esta sección está en construcción. Sigue conversando con Fusion para
        darle contenido.
      </p>
      <Button asChild className="mt-8 rounded-full px-6">
        <Link to="/">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Volver al inicio
        </Link>
      </Button>
    </div>
  );
}

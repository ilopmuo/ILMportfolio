import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-6">
      <p className="text-xs text-brand-500 uppercase tracking-widest mb-4">404</p>
      <h1 className="font-display text-4xl text-brand-900 mb-4">
        Página no encontrada
      </h1>
      <p className="text-brand-700 mb-8 text-center max-w-sm">
        Esta página no existe o ha sido movida.
      </p>
      <Link
        href="/"
        className="inline-flex items-center gap-2 text-sm text-brand-700 hover:text-brand-900 transition-colors"
      >
        <ArrowLeft className="w-4 h-4" strokeWidth={1.5} />
        Volver al inicio
      </Link>
    </div>
  );
}

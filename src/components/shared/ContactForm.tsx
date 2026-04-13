"use client";

import { useForm, ValidationError } from "@formspree/react";
import { Send, CheckCircle } from "lucide-react";

export function ContactForm() {
  const formId = process.env.NEXT_PUBLIC_FORMSPREE_ID || "xdkogpwk";
  const [state, handleSubmit] = useForm(formId);

  if (state.succeeded) {
    return (
      <div className="flex flex-col items-center justify-center py-12 text-center gap-4">
        <CheckCircle className="w-10 h-10 text-brand-500" strokeWidth={1.5} />
        <p className="text-brand-900 font-display text-lg">
          Mensaje recibido.
        </p>
        <p className="text-brand-700 text-sm">
          Te respondo en 24–48 horas.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div className="flex flex-col gap-1.5">
          <label
            htmlFor="name"
            className="text-xs text-brand-700 uppercase tracking-widest"
          >
            Nombre
          </label>
          <input
            id="name"
            type="text"
            name="name"
            required
            className="bg-transparent border border-brand-300 rounded-sm px-4 py-3 text-brand-900 text-sm placeholder:text-brand-300 focus:outline-none focus:border-brand-700 transition-colors"
            placeholder="Tu nombre"
          />
          <ValidationError prefix="Nombre" field="name" errors={state.errors} className="text-xs text-red-500" />
        </div>

        <div className="flex flex-col gap-1.5">
          <label
            htmlFor="email"
            className="text-xs text-brand-700 uppercase tracking-widest"
          >
            Email
          </label>
          <input
            id="email"
            type="email"
            name="email"
            required
            className="bg-transparent border border-brand-300 rounded-sm px-4 py-3 text-brand-900 text-sm placeholder:text-brand-300 focus:outline-none focus:border-brand-700 transition-colors"
            placeholder="tu@email.com"
          />
          <ValidationError prefix="Email" field="email" errors={state.errors} className="text-xs text-red-500" />
        </div>
      </div>

      <div className="flex flex-col gap-1.5">
        <label
          htmlFor="subject"
          className="text-xs text-brand-700 uppercase tracking-widest"
        >
          Asunto
        </label>
        <select
          id="subject"
          name="subject"
          className="bg-transparent border border-brand-300 rounded-sm px-4 py-3 text-brand-900 text-sm focus:outline-none focus:border-brand-700 transition-colors appearance-none cursor-pointer"
        >
          <option value="proyecto">Consulta de proyecto</option>
          <option value="colaboracion">Colaboración</option>
          <option value="advisory">Advisory / Consultoría</option>
          <option value="otro">Otro</option>
        </select>
      </div>

      <div className="flex flex-col gap-1.5">
        <label
          htmlFor="message"
          className="text-xs text-brand-700 uppercase tracking-widest"
        >
          Mensaje
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          className="bg-transparent border border-brand-300 rounded-sm px-4 py-3 text-brand-900 text-sm placeholder:text-brand-300 focus:outline-none focus:border-brand-700 transition-colors resize-none"
          placeholder="Cuéntame en qué puedo ayudarte..."
        />
        <ValidationError prefix="Mensaje" field="message" errors={state.errors} className="text-xs text-red-500" />
      </div>

      <button
        type="submit"
        disabled={state.submitting}
        className="self-start flex items-center gap-2 bg-brand-900 text-white text-sm px-6 py-3 rounded-sm hover:bg-brand-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {state.submitting ? (
          "Enviando..."
        ) : (
          <>
            Enviar mensaje
            <Send className="w-4 h-4" strokeWidth={1.5} />
          </>
        )}
      </button>
    </form>
  );
}

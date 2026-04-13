"use client";

import { useForm, ValidationError } from "@formspree/react";
import { Send, CheckCircle } from "lucide-react";
import { useLang } from "@/contexts/LanguageContext";
import { translations } from "@/lib/translations";

export function ContactForm() {
  const { lang } = useLang();
  const t = translations[lang].form;
  const formId = process.env.NEXT_PUBLIC_FORMSPREE_ID || "myklygbb";
  const [state, handleSubmit] = useForm(formId);

  if (state.succeeded) {
    return (
      <div className="flex flex-col items-center justify-center py-12 text-center gap-4">
        <CheckCircle className="w-10 h-10 text-brand-500" strokeWidth={1.5} />
        <p className="text-brand-900 font-display text-lg">
          {t.success_title}
        </p>
        <p className="text-brand-700 text-sm">
          {t.success_body}
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div className="flex flex-col gap-1.5">
          <label htmlFor="name" className="text-xs text-brand-700 uppercase tracking-widest">
            {t.name_label}
          </label>
          <input
            id="name"
            type="text"
            name="name"
            required
            className="bg-transparent border border-brand-300 rounded-sm px-4 py-3 text-brand-900 text-sm placeholder:text-brand-300 focus:outline-none focus:border-brand-700 transition-colors"
            placeholder={t.name_placeholder}
          />
          <ValidationError prefix={t.name_label} field="name" errors={state.errors} className="text-xs text-red-500" />
        </div>

        <div className="flex flex-col gap-1.5">
          <label htmlFor="email" className="text-xs text-brand-700 uppercase tracking-widest">
            Email
          </label>
          <input
            id="email"
            type="email"
            name="email"
            required
            className="bg-transparent border border-brand-300 rounded-sm px-4 py-3 text-brand-900 text-sm placeholder:text-brand-300 focus:outline-none focus:border-brand-700 transition-colors"
            placeholder={t.email_placeholder}
          />
          <ValidationError prefix="Email" field="email" errors={state.errors} className="text-xs text-red-500" />
        </div>
      </div>

      <div className="flex flex-col gap-1.5">
        <label htmlFor="subject" className="text-xs text-brand-700 uppercase tracking-widest">
          {t.subject_label}
        </label>
        <select
          id="subject"
          name="subject"
          className="bg-transparent border border-brand-300 rounded-sm px-4 py-3 text-brand-900 text-sm focus:outline-none focus:border-brand-700 transition-colors appearance-none cursor-pointer"
        >
          {t.subject_options.map((opt) => (
            <option key={opt.value} value={opt.value}>{opt.label}</option>
          ))}
        </select>
      </div>

      <div className="flex flex-col gap-1.5">
        <label htmlFor="message" className="text-xs text-brand-700 uppercase tracking-widest">
          {t.message_label}
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          className="bg-transparent border border-brand-300 rounded-sm px-4 py-3 text-brand-900 text-sm placeholder:text-brand-300 focus:outline-none focus:border-brand-700 transition-colors resize-none"
          placeholder={t.message_placeholder}
        />
        <ValidationError prefix={t.message_label} field="message" errors={state.errors} className="text-xs text-red-500" />
      </div>

      <button
        type="submit"
        disabled={state.submitting}
        className="self-start flex items-center gap-2 bg-brand-900 text-white text-sm px-6 py-3 rounded-sm hover:bg-brand-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {state.submitting ? (
          t.submitting
        ) : (
          <>
            {t.submit}
            <Send className="w-4 h-4" strokeWidth={1.5} />
          </>
        )}
      </button>
    </form>
  );
}

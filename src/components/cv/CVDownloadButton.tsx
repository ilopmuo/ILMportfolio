"use client";

import { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import { Download } from "lucide-react";
import { CVDocument } from "./CVDocument";
import { useLang } from "@/contexts/LanguageContext";
import { translations } from "@/lib/translations";

const PDFDownloadLink = dynamic(
  () => import("@react-pdf/renderer").then((m) => m.PDFDownloadLink),
  { ssr: false }
);

export function CVDownloadButton() {
  const { lang } = useLang();
  const t = translations[lang].hero;
  const [ready, setReady] = useState(false);
  const [photoUrl, setPhotoUrl] = useState("");

  useEffect(() => {
    setPhotoUrl(`${window.location.origin}/FotoNacho.png`);
    setReady(true);
  }, []);

  if (!ready) {
    return (
      <button
        disabled
        className="inline-flex items-center gap-2 border border-brand-300 text-brand-400 text-sm px-5 py-3 rounded-sm cursor-not-allowed"
      >
        <Download className="w-3.5 h-3.5" strokeWidth={1.5} />
        {t.cta_cv}
      </button>
    );
  }

  return (
    <PDFDownloadLink
      document={<CVDocument phone="+34 665 918 520" photoUrl={photoUrl} />}
      fileName="ignacio-lopez-munoyerro-cv.pdf"
      className="inline-flex items-center gap-2 border border-brand-300 text-brand-700 text-sm px-5 py-3 rounded-sm hover:border-brand-700 hover:text-brand-900 transition-colors"
    >
      {({ loading }) => (
        <>
          <Download className="w-3.5 h-3.5" strokeWidth={1.5} />
          {loading ? t.cv_generating : t.cta_cv}
        </>
      )}
    </PDFDownloadLink>
  );
}

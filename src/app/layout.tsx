import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { SITE_CONFIG } from "@/lib/constants";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_CONFIG.url),
  title: {
    default: `${SITE_CONFIG.name} — Customer Success Manager & Salesforce Developer`,
    template: `%s | ${SITE_CONFIG.name}`,
  },
  description:
    "Portfolio de Ignacio López Muñoyerro — Customer Success Manager y Salesforce Developer en Neurored. Especializado en implementación Salesforce, automatización y gestión de proyectos para clientes internacionales.",
  keywords: [
    "Ignacio López Muñoyerro",
    "Nacho Muñoyerro",
    "Ignacio López Muñoyerro portfolio",
    "Ignacio López Salesforce",
    "Customer Success Manager Salesforce",
    "Salesforce Developer Sevilla",
    "Neurored",
    "Salesforce España",
    "Ignacio López",
    "LWC",
    "Apex",
    "Salesforce Consultant",
  ],
  authors: [{ name: SITE_CONFIG.name, url: SITE_CONFIG.url }],
  creator: SITE_CONFIG.name,
  alternates: {
    canonical: SITE_CONFIG.url,
  },
  openGraph: {
    type: "website",
    locale: "es_ES",
    url: SITE_CONFIG.url,
    siteName: SITE_CONFIG.name,
    title: `${SITE_CONFIG.name} — Customer Success Manager & Salesforce Developer`,
    description:
      "Portfolio de Ignacio López Muñoyerro — Customer Success Manager y Salesforce Developer en Neurored.",
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE_CONFIG.name} — Customer Success Manager & Salesforce Developer`,
    description:
      "Portfolio de Ignacio López Muñoyerro — Customer Success Manager y Salesforce Developer en Neurored.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Ignacio López Muñoyerro",
  alternateName: ["Nacho Muñoyerro", "Ignacio López"],
  url: SITE_CONFIG.url,
  jobTitle: "Customer Success Manager",
  worksFor: {
    "@type": "Organization",
    name: "Neurored",
  },
  address: {
    "@type": "PostalAddress",
    addressLocality: "Sevilla",
    addressCountry: "ES",
  },
  email: SITE_CONFIG.email,
  sameAs: [
    SITE_CONFIG.social.linkedin,
    SITE_CONFIG.social.github,
  ],
  knowsAbout: [
    "Salesforce",
    "Customer Success",
    "Salesforce Developer",
    "Lightning Web Components",
    "Apex",
    "Salesforce Flows",
    "CRM",
    "Project Management",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${inter.variable} ${playfair.variable} h-full antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-white text-brand-900">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

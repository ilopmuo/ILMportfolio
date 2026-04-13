export const SITE_CONFIG = {
  name: "Ignacio López Muñoyerro",
  shortName: "Ignacio",
  title: "Salesforce Architect & Customer Success Manager",
  tagline:
    "Transformo requisitos complejos en soluciones Salesforce que escalan.",
  description:
    "Portfolio de Ignacio López — Salesforce Architect y Customer Success Manager especializado en diseño funcional, automatización avanzada y despliegue de soluciones CRM para clientes internacionales.",
  url: "https://ignaciolopez.dev",
  location: "Sevilla, España",
  email: "Ignacio.odi4@gmail.com",
  phone: "+34 665 918 520",
  social: {
    linkedin: "https://linkedin.com/in/ignaciolopez",
    github: "https://github.com/ignaciolopez",
  },
};

export const NAV_LINKS = [
  { label: "Sobre mí", href: "#about" },
  { label: "Filosofía", href: "#philosophy" },
  { label: "Proyectos", href: "#projects" },
  { label: "Carrera", href: "#timeline" },
  { label: "Blog", href: "#posts" },
  { label: "Contacto", href: "#contact" },
];

export const COMPETENCY_AREAS = [
  {
    title: "Salesforce Architecture",
    description:
      "Diseño funcional y técnico de soluciones completas: data model, automatizaciones, seguridad y flujos operativos.",
    skills: [
      "Sales Cloud",
      "Service Cloud",
      "Flows avanzados",
      "Apex",
      "LWC",
      "Permission Sets",
      "APIs REST/SOAP",
    ],
    depth: 92,
  },
  {
    title: "Customer Success & Consultoría",
    description:
      "Gestión de relaciones con clientes empresariales, liderazgo de workshops y traducción de requisitos en soluciones escalables.",
    skills: [
      "Workshops",
      "Solution Design",
      "Requirements gathering",
      "Demos complejas",
      "Onboarding",
    ],
    depth: 88,
  },
  {
    title: "Desarrollo & Integración",
    description:
      "Construcción técnica de componentes, integraciones con sistemas externos y automatizaciones de backend.",
    skills: [
      "Apex",
      "Lightning Web Components",
      "REST/SOAP APIs",
      "CI/CD",
      "JavaScript",
      "Java",
    ],
    depth: 82,
  },
  {
    title: "Gestión de Proyectos IA",
    description:
      "Coordinación de equipos técnicos y de producto, priorización de roadmaps y adopción de herramientas de IA en operaciones.",
    skills: [
      "AI Associate (Salesforce)",
      "Prompt Engineering",
      "Coordinación producto/QA",
      "Roadmapping",
    ],
    depth: 75,
  },
  {
    title: "Documentación & Comunicación",
    description:
      "Elaboración de documentación técnica y funcional clara, desde user stories hasta arquitecturas completas.",
    skills: [
      "Solution Designs",
      "User Stories",
      "Acceptance Criteria",
      "Technical Writing",
      "Presentaciones ejecutivas",
    ],
    depth: 90,
  },
];

export const CERTIFICATIONS = [
  {
    name: "Salesforce Certified Platform App Builder",
    certKey: "Platform App Builder",
    issuer: "Salesforce",
    date: "Julio 2025",
    credentialId: "6329135",
  },
  {
    name: "Salesforce Certified Administrator",
    certKey: "Administrator",
    issuer: "Salesforce",
    date: "Abril 2025",
    credentialId: "6088493",
  },
  {
    name: "Salesforce Certified AI Associate",
    certKey: "AI Associate",
    issuer: "Salesforce",
    date: "Noviembre 2024",
    credentialId: "5344662",
  },
];

export const STATS = [
  { value: "3+", label: "años en Salesforce" },
  { value: "3", label: "certificaciones Salesforce" },
  { value: "B2", label: "inglés acreditado" },
];

export const TIMELINE = [
  {
    period: "Nov 2025 – Actualidad",
    role: "Customer Success Manager | Salesforce",
    company: "Neurored",
    location: "Sevilla, España",
    isAIEra: true,
    summary:
      "Diseño funcional y técnico de módulos complejos en logística y envíos. Liderazgo de workshops, elaboración de Solution Designs completos y coordinación con Product Office.",
  },
  {
    period: "Sep 2025 – Nov 2025",
    role: "Salesforce Developer",
    company: "SEIDOR NTS",
    location: "Sevilla, España",
    isAIEra: true,
    summary:
      "Desarrollo de LWC y Apex, integración con APIs externas, automatizaciones avanzadas y participación en CI/CD.",
  },
  {
    period: "Jun 2024 – Sep 2025",
    role: "Salesforce Technical Assistant",
    company: "SEIDOR NTS",
    location: "Sevilla, España",
    isAIEra: false,
    summary:
      "Automatización de procesos con Flows, optimización de dashboards, soporte en Sales Cloud y Service Cloud.",
  },
  {
    period: "2019 – Actualidad",
    role: "Grado en Ingeniería Informática (Sistemas de Información)",
    company: "Universidad Pablo de Olavide",
    location: "Sevilla, España",
    isAIEra: false,
    summary: "Formación en arquitectura de sistemas, bases de datos, desarrollo de software y gestión de proyectos tecnológicos.",
  },
];

export const PHILOSOPHY_PRINCIPLES = [
  {
    numeral: "I",
    title: "Primero el problema.",
    body: "El stack lo decido al final. Primero entiendo qué tiene que mejorar y para quién.",
  },
  {
    numeral: "II",
    title: "Diseño para dentro de un año.",
    body: "Un parche rápido hoy es deuda técnica mañana. Prefiero hacerlo bien a la primera.",
  },
  {
    numeral: "III",
    title: "Documentar no es burocracia.",
    body: "Un buen Solution Design evita el 80% de los malentendidos. Lo escribo antes del sprint, no después.",
  },
  {
    numeral: "IV",
    title: "El cliente explica, yo propongo.",
    body: "En un workshop no tomo nota, construyo una solución. Salgo con una propuesta, no con más preguntas.",
  },
];

export const SITE_CONFIG = {
  name: "Ignacio López Muñoyerro",
  shortName: "Ignacio",
  title: "Salesforce Architect & Customer Success Manager",
  tagline:
    "Transformo requisitos complejos en soluciones Salesforce que escalan.",
  description:
    "Portfolio de Ignacio López — Salesforce Architect y Customer Success Manager especializado en diseño funcional, automatización avanzada y despliegue de soluciones CRM para clientes internacionales.",
  url: "https://www.xn--ignaciolopezmuoyerro-h7b.com",
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
  { label: "Trayectoria", href: "#timeline" },
  { label: "Filosofía", href: "#philosophy" },
  { label: "Proyectos", href: "#projects" },
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
    role: "Customer Success Manager",
    company: "Neurored",
    location: "Sevilla, España",
    logo: "/neurored_logo.jpg",
    type: "work" as const,
    isAIEra: true,
    summary: "Gestión de proyectos de implementación y mantenimiento de Salesforce para freightforwarders internacionales.",
    bullets: [
      "Gestión end-to-end de proyectos: desde el análisis de requisitos hasta el go-live",
      "Diseño funcional de soluciones: arquitectura de datos, flujos de negocio y gestión de permisos",
      "Interlocución directa con clientes internacionales: workshops, validaciones y seguimiento",
      "Coordinación entre negocio, producto y desarrollo para alinear entregas y prioridades",
      "Elaboración de documentación técnica y funcional: Solution Designs, user stories y criterios de aceptación",
    ],
  },
  {
    period: "Sep 2025 – Nov 2025",
    role: "Salesforce Developer",
    company: "SEIDOR NTS",
    location: "Sevilla, España",
    logo: "/seidor_logo.jpg",
    type: "work" as const,
    isAIEra: true,
    summary: "Desarrollo técnico de componentes y automatizaciones avanzadas.",
    bullets: [
      "Desarrollo de Lightning Web Components y Apex",
      "Integración con APIs externas y lógica de backend",
      "Participación en despliegues, revisiones de código y CI/CD",
    ],
  },
  {
    period: "Jun 2024 – Sep 2025",
    role: "Salesforce Technical Assistant",
    company: "SEIDOR NTS",
    location: "Sevilla, España",
    logo: "/seidor_logo.jpg",
    type: "work" as const,
    isAIEra: false,
    summary: "Primeros pasos en Salesforce: configuración, automatización y soporte funcional.",
    bullets: [
      "Automatización de procesos con Flows avanzados",
      "Optimización de dashboards y reportes",
      "Soporte funcional en Sales Cloud y Service Cloud",
    ],
  },
  {
    period: "Sep 2022 – Jul 2023",
    role: "Erasmus — Computer Science & Engineering",
    company: "Università di Bologna",
    location: "Bolonia, Italia",
    logo: "/universidadErasumus_logo.jpg",
    type: "education" as const,
    isAIEra: false,
    summary: "Año académico Erasmus en la Alma Mater Studiorum, una de las universidades más antiguas del mundo.",
    bullets: [
      "Asignaturas de Computer Science y Computer Engineering en inglés",
      "Experiencia internacional en entorno académico multicultural",
    ],
  },
  {
    period: "2019 – Actualidad",
    role: "Ingeniería Informática",
    company: "Universidad Pablo de Olavide",
    location: "Sevilla, España",
    logo: "/universidad_logo.jpg",
    type: "education" as const,
    isAIEra: false,
    summary: "Grado en Ingeniería Informática, especialidad Sistemas de Información.",
    bullets: [
      "Bases de datos, arquitectura de sistemas y desarrollo de software",
      "Gestión de proyectos tecnológicos",
    ],
  },
];

export const PHILOSOPHY_PRINCIPLES = [
  {
    numeral: "I",
    title: "Antes de hacer, entender.",
    body: "Necesito saber qué problema resuelvo antes de escribir la primera línea.",
  },
  {
    numeral: "II",
    title: "Sin documentación no hay buen código.",
    body: "El Solution Design va antes del sprint, no después.",
  },
  {
    numeral: "III",
    title: "Sin planificación no hay entrega.",
    body: "Comprometerse con una fecha sin analizar el alcance es la forma más segura de incumplirla.",
  },
  {
    numeral: "IV",
    title: "No todo lo urgente es importante.",
    body: "Priorizo por impacto. Saber decir que no a tiempo es parte del trabajo.",
  },
];

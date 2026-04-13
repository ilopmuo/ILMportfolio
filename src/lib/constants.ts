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
  { label: "Proyectos", href: "#projects" },
  { label: "Filosofía", href: "#philosophy" },
  { label: "Blog", href: "#posts" },
  { label: "Contacto", href: "#contact" },
];

export const DIFFERENTIATORS = [
  {
    numeral: "01",
    title: "Entiendo el negocio y construyo la solución.",
    body: "La mayoría elige un lado. Yo trabajo en los dos: entiendo al cliente, diseño la solución y puedo implementarla. No hace falta un intermediario entre el workshop y el sprint.",
  },
  {
    numeral: "02",
    title: "Documento antes de desarrollar.",
    body: "Un sprint sin Solution Design acaba en re-work. Mi documentación no es el entregable — es lo que hace predecible al entregable real. El equipo de desarrollo no debería tener que adivinar nada.",
  },
  {
    numeral: "03",
    title: "Construyo productos fuera del trabajo.",
    body: "OppsHub, Opotrack, PermSet Builder. No son tutoriales. Son productos que resuelven problemas reales, diseñados y construidos de principio a fin. Eso es la diferencia entre conocer una tecnología y saber usarla.",
  },
];

export const COMPETENCY_AREAS = [
  {
    title: "Salesforce Platform",
    description:
      "Implementación y arquitectura en Sales Cloud y Service Cloud para clientes empresariales.",
    skills: ["Sales Cloud", "Service Cloud", "Flows avanzados", "Apex", "LWC", "Permission Sets", "APIs REST/SOAP"],
    delivers: [
      "Arquitectura funcional desde cero: data model, flujos operativos y matriz de permisos",
      "Automatizaciones que eliminan trabajo manual sin añadir deuda técnica",
      "Integraciones con sistemas externos estables y documentadas",
      "Configuración de seguridad que escala con el crecimiento del equipo",
    ],
  },
  {
    title: "Customer Success",
    description:
      "Gestión directa de clientes internacionales desde los requisitos hasta el go-live.",
    skills: ["Workshops", "Solution Design", "Requirements gathering", "Onboarding", "Gestión de stakeholders"],
    delivers: [
      "Traducción de requisitos de negocio a soluciones técnicas viables",
      "Workshops estructurados que acortan los ciclos de validación",
      "Onboarding que reduce el tiempo de adopción del cliente",
      "Interlocución fluida con clientes internacionales en inglés",
    ],
  },
  {
    title: "Gestión de Proyectos",
    description:
      "Coordinación entre negocio, producto y desarrollo con foco en entregas predecibles.",
    skills: ["Roadmapping", "User Stories", "Acceptance Criteria", "Coordinación de equipos", "Solution Designs"],
    delivers: [
      "Planificación realista antes de comprometer fechas",
      "Documentación que evita malentendidos entre negocio y desarrollo",
      "Priorización por impacto, no por urgencia percibida",
      "Coordinación que mantiene alineados a todos los implicados",
    ],
  },
  {
    title: "Desarrollo",
    description:
      "Construcción técnica de componentes Salesforce, integraciones y productos propios.",
    skills: ["Apex", "LWC", "REST APIs", "CI/CD", "React", "Next.js", "Supabase", "Electron"],
    delivers: [
      "Componentes LWC y Apex listos para producción",
      "Integraciones con APIs externas robustas y con manejo de errores",
      "Productos web completos de principio a fin",
      "Herramientas internas que resuelven problemas reales",
    ],
  },
  {
    title: "Comunicación técnica",
    description:
      "Documentación clara para equipos y clientes en español e inglés.",
    skills: ["Technical Writing", "Presentaciones ejecutivas", "Inglés B2 Cambridge", "Documentación funcional"],
    delivers: [
      "Solution Designs que el equipo de desarrollo puede implementar sin preguntas",
      "User stories con criterios de aceptación claros y testeables",
      "Comunicación técnica en inglés con clientes y equipos internacionales",
      "Presentaciones ejecutivas que van al grano",
    ],
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
    summary: "Desarrollo técnico en proyectos Salesforce para clientes del sector hotelero y bancario.",
    bullets: [
      "Desarrollo de Lightning Web Components y clases Apex para Sales Cloud y Service Cloud",
      "Integración con sistemas externos mediante APIs REST y lógica de backend personalizada",
      "Gestión de despliegues, revisiones de código y pipelines CI/CD en entornos de cliente",
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
    summary: "Configuración y automatización de Salesforce en proyectos de implantación para clientes empresariales.",
    bullets: [
      "Automatización de procesos de negocio con Flows: aprobaciones, asignaciones y notificaciones",
      "Configuración de Sales Cloud y Service Cloud: objetos, perfiles, permisos y vistas",
      "Mantenimiento y optimización de reportes y dashboards para equipos comerciales y de soporte",
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

import { Document, Page, Text, View, StyleSheet, Link } from "@react-pdf/renderer";

const COLORS = {
  black: "#1a1a1a",
  dark: "#2e2e32",
  mid: "#535359",
  light: "#75757a",
  muted: "#98989b",
  border: "#ddddde",
};

const styles = StyleSheet.create({
  page: {
    fontFamily: "Helvetica",
    fontSize: 9,
    color: COLORS.dark,
    paddingTop: 44,
    paddingBottom: 44,
    paddingHorizontal: 48,
    lineHeight: 1.5,
  },
  // Header
  header: { marginBottom: 18 },
  name: {
    fontSize: 22,
    fontFamily: "Helvetica-Bold",
    color: COLORS.black,
    letterSpacing: -0.5,
    marginBottom: 4,
  },
  title: { fontSize: 10, color: COLORS.mid, marginBottom: 6 },
  contactRow: { flexDirection: "row", flexWrap: "wrap", gap: 12 },
  contactItem: { fontSize: 8, color: COLORS.light },
  contactLink: { fontSize: 8, color: COLORS.mid, textDecoration: "none" },
  // Divider
  divider: { borderBottomWidth: 0.5, borderBottomColor: COLORS.border, marginVertical: 12 },
  // Section
  section: { marginBottom: 14 },
  sectionTitle: {
    fontSize: 8,
    fontFamily: "Helvetica-Bold",
    color: COLORS.muted,
    textTransform: "uppercase",
    letterSpacing: 1.5,
    marginBottom: 8,
  },
  // Experience item
  expItem: { marginBottom: 10 },
  expHeader: { flexDirection: "row", justifyContent: "space-between", marginBottom: 2 },
  expRole: { fontSize: 9.5, fontFamily: "Helvetica-Bold", color: COLORS.black },
  expPeriod: { fontSize: 8, color: COLORS.light },
  expCompany: { fontSize: 8.5, color: COLORS.mid, marginBottom: 4 },
  bullet: { flexDirection: "row", gap: 6, marginBottom: 2 },
  bulletDot: { fontSize: 9, color: COLORS.muted, marginTop: 0.5 },
  bulletText: { fontSize: 8.5, color: COLORS.mid, flex: 1 },
  // Cert
  certRow: { flexDirection: "row", justifyContent: "space-between", marginBottom: 3 },
  certName: { fontSize: 8.5, color: COLORS.dark },
  certDate: { fontSize: 8, color: COLORS.light },
  // Skills
  skillsGrid: { flexDirection: "row", flexWrap: "wrap", gap: 4 },
  skillLabel: { fontSize: 8, color: COLORS.mid, fontFamily: "Helvetica-Bold" },
  skillValue: { fontSize: 8, color: COLORS.mid },
  skillRow: { flexDirection: "row", gap: 4, marginBottom: 3 },
  // Project
  projectItem: { marginBottom: 6 },
  projectName: { fontSize: 9, fontFamily: "Helvetica-Bold", color: COLORS.dark },
  projectDesc: { fontSize: 8.5, color: COLORS.mid },
  projectLink: { fontSize: 8, color: COLORS.light, textDecoration: "none" },
});

export function CVDocument() {
  return (
    <Document title="CV — Ignacio López Muñoyerro" author="Ignacio López Muñoyerro">
      <Page size="A4" style={styles.page}>

        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.name}>Ignacio López Muñoyerro</Text>
          <Text style={styles.title}>Customer Success Manager · Salesforce Developer · Project Manager</Text>
          <View style={styles.contactRow}>
            <Text style={styles.contactItem}>Sevilla, España</Text>
            <Link src="mailto:Ignacio.odi4@gmail.com" style={styles.contactLink}>Ignacio.odi4@gmail.com</Link>
            <Link src="https://www.linkedin.com/in/ignacio-l%C3%B3pez-mu%C3%B1oyerro-402ab5186/" style={styles.contactLink}>LinkedIn</Link>
            <Link src="https://github.com/ilopmuo" style={styles.contactLink}>GitHub</Link>
          </View>
        </View>

        <View style={styles.divider} />

        {/* Experiencia */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Experiencia</Text>

          <View style={styles.expItem}>
            <View style={styles.expHeader}>
              <Text style={styles.expRole}>Customer Success Manager</Text>
              <Text style={styles.expPeriod}>Nov 2025 – Actualidad</Text>
            </View>
            <Text style={styles.expCompany}>Neurored · Sevilla, España</Text>
            {[
              "Gestión end-to-end de proyectos de implementación y mantenimiento de Salesforce para freightforwarders internacionales",
              "Diseño funcional de soluciones: arquitectura de datos, flujos de negocio y gestión de permisos",
              "Interlocución directa con clientes internacionales: workshops, validaciones y seguimiento",
              "Coordinación entre negocio, producto y desarrollo para alinear entregas y prioridades",
              "Elaboración de Solution Designs, user stories y criterios de aceptación",
            ].map((b, i) => (
              <View key={i} style={styles.bullet}>
                <Text style={styles.bulletDot}>·</Text>
                <Text style={styles.bulletText}>{b}</Text>
              </View>
            ))}
          </View>

          <View style={styles.expItem}>
            <View style={styles.expHeader}>
              <Text style={styles.expRole}>Salesforce Developer</Text>
              <Text style={styles.expPeriod}>Sep 2025 – Nov 2025</Text>
            </View>
            <Text style={styles.expCompany}>SEIDOR NTS · Sevilla, España</Text>
            {[
              "Desarrollo de Lightning Web Components y clases Apex para clientes del sector hotelero y bancario",
              "Integración con sistemas externos mediante APIs REST y lógica de backend personalizada",
              "Gestión de despliegues, revisiones de código y pipelines CI/CD",
            ].map((b, i) => (
              <View key={i} style={styles.bullet}>
                <Text style={styles.bulletDot}>·</Text>
                <Text style={styles.bulletText}>{b}</Text>
              </View>
            ))}
          </View>

          <View style={styles.expItem}>
            <View style={styles.expHeader}>
              <Text style={styles.expRole}>Salesforce Technical Assistant</Text>
              <Text style={styles.expPeriod}>Jun 2024 – Sep 2025</Text>
            </View>
            <Text style={styles.expCompany}>SEIDOR NTS · Sevilla, España</Text>
            {[
              "Automatización de procesos de negocio con Flows: aprobaciones, asignaciones y notificaciones",
              "Configuración de Sales Cloud y Service Cloud: objetos, perfiles, permisos y vistas",
              "Mantenimiento y optimización de reportes y dashboards para equipos comerciales y de soporte",
            ].map((b, i) => (
              <View key={i} style={styles.bullet}>
                <Text style={styles.bulletDot}>·</Text>
                <Text style={styles.bulletText}>{b}</Text>
              </View>
            ))}
          </View>
        </View>

        <View style={styles.divider} />

        {/* Formación */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Formación</Text>

          <View style={styles.expItem}>
            <View style={styles.expHeader}>
              <Text style={styles.expRole}>Grado en Ingeniería Informática — Sistemas de Información</Text>
              <Text style={styles.expPeriod}>2019 – Actualidad</Text>
            </View>
            <Text style={styles.expCompany}>Universidad Pablo de Olavide · Sevilla, España</Text>
          </View>

          <View style={styles.expItem}>
            <View style={styles.expHeader}>
              <Text style={styles.expRole}>Erasmus — Computer Science & Engineering</Text>
              <Text style={styles.expPeriod}>Sep 2022 – Jul 2023</Text>
            </View>
            <Text style={styles.expCompany}>Università di Bologna · Bolonia, Italia</Text>
          </View>
        </View>

        <View style={styles.divider} />

        {/* Certificaciones */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Certificaciones</Text>
          {[
            { name: "Salesforce Certified Platform App Builder", date: "Julio 2025" },
            { name: "Salesforce Certified Administrator", date: "Abril 2025" },
            { name: "Salesforce Certified AI Associate", date: "Noviembre 2024" },
          ].map((c) => (
            <View key={c.name} style={styles.certRow}>
              <Text style={styles.certName}>{c.name}</Text>
              <Text style={styles.certDate}>{c.date}</Text>
            </View>
          ))}
        </View>

        <View style={styles.divider} />

        {/* Proyectos */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Proyectos personales</Text>
          {[
            { name: "OppsHub", desc: "Herramienta de gestión de proyectos con Kanban, milestones y finanzas.", url: "https://opps-hub.vercel.app/", stack: "React · Supabase · TypeScript" },
            { name: "Opotrack", desc: "Tracker de preparación de oposiciones con rondas de repaso y Pomodoro.", url: "https://opos-track.vercel.app/", stack: "React · Supabase" },
            { name: "PermSet Builder", desc: "App de escritorio para convertir perfiles de Salesforce a Permission Sets.", url: "https://permsetbuilder.vercel.app/", stack: "Electron · React · Node.js" },
          ].map((p) => (
            <View key={p.name} style={styles.projectItem}>
              <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                <Text style={styles.projectName}>{p.name} <Text style={{ fontFamily: "Helvetica", color: COLORS.light }}>— {p.stack}</Text></Text>
                <Link src={p.url} style={styles.projectLink}>{p.url.replace("https://", "")}</Link>
              </View>
              <Text style={styles.projectDesc}>{p.desc}</Text>
            </View>
          ))}
        </View>

        <View style={styles.divider} />

        {/* Competencias */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Competencias</Text>
          {[
            { label: "Salesforce", value: "Sales Cloud, Service Cloud, Flows, Apex, LWC, Permission Sets, APIs REST/SOAP" },
            { label: "Desarrollo", value: "React, Next.js, TypeScript, Supabase, Electron, Node.js, Git" },
            { label: "Gestión", value: "Solution Design, User Stories, Acceptance Criteria, Roadmapping, Workshops" },
            { label: "Idiomas", value: "Español (nativo) · Inglés B2 Cambridge" },
          ].map((s) => (
            <View key={s.label} style={styles.skillRow}>
              <Text style={styles.skillLabel}>{s.label}:</Text>
              <Text style={styles.skillValue}>{s.value}</Text>
            </View>
          ))}
        </View>

      </Page>
    </Document>
  );
}

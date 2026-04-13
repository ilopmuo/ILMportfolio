import { Document, Page, Text, View, StyleSheet, Link, Image } from "@react-pdf/renderer";
import { translations } from "@/lib/translations";
import type { Lang } from "@/lib/translations";

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
    paddingTop: 34,
    paddingBottom: 34,
    paddingHorizontal: 42,
    lineHeight: 1.4,
  },
  header: { marginBottom: 12, flexDirection: "row", justifyContent: "space-between", alignItems: "flex-start" },
  headerLeft: { flex: 1 },
  photo: { width: 80, height: 100, borderRadius: 3, marginLeft: 18, objectFit: "contain" },
  name: { fontSize: 21, fontFamily: "Helvetica-Bold", color: COLORS.black, letterSpacing: -0.5, marginBottom: 18 },
  title: { fontSize: 9.5, color: COLORS.mid, marginBottom: 8 },
  contactRow: { flexDirection: "row", flexWrap: "wrap", gap: 10 },
  contactItem: { fontSize: 8, color: COLORS.light },
  contactLink: { fontSize: 8, color: COLORS.mid, textDecoration: "none" },
  divider: { borderBottomWidth: 0.5, borderBottomColor: COLORS.border, marginVertical: 8 },
  section: { marginBottom: 10 },
  sectionTitle: { fontSize: 7.5, fontFamily: "Helvetica-Bold", color: COLORS.muted, textTransform: "uppercase", letterSpacing: 1.5, marginBottom: 6 },
  expItem: { marginBottom: 7 },
  expHeader: { flexDirection: "row", justifyContent: "space-between", marginBottom: 1 },
  expRole: { fontSize: 9, fontFamily: "Helvetica-Bold", color: COLORS.black },
  expPeriod: { fontSize: 7.5, color: COLORS.light },
  expCompany: { fontSize: 8, color: COLORS.mid, marginBottom: 3 },
  bullet: { flexDirection: "row", gap: 5, marginBottom: 1.5 },
  bulletDot: { fontSize: 8.5, color: COLORS.muted, marginTop: 0.5 },
  bulletText: { fontSize: 8, color: COLORS.mid, flex: 1 },
  certRow: { flexDirection: "row", justifyContent: "space-between", marginBottom: 2.5 },
  certName: { fontSize: 8, color: COLORS.dark },
  certDate: { fontSize: 7.5, color: COLORS.light },
  skillLabel: { fontSize: 7.5, color: COLORS.mid, fontFamily: "Helvetica-Bold" },
  skillValue: { fontSize: 7.5, color: COLORS.mid },
  skillRow: { flexDirection: "row", gap: 4, marginBottom: 2.5 },
});

interface CVDocumentProps {
  lang: Lang;
  phone?: string;
  photoUrl?: string;
}

export function CVDocument({ lang, phone, photoUrl }: CVDocumentProps) {
  const t = translations[lang];
  const cv = t.cv;
  const workItems = t.timeline.items.filter((i) => i.type === "work");
  const eduItems = t.timeline.items.filter((i) => i.type === "education");
  const certDates = t.about.cert_dates;

  const CERT_NAMES = [
    "Salesforce Certified Platform App Builder",
    "Salesforce Certified Administrator",
    "Salesforce Certified AI Associate",
  ];

  return (
    <Document title="CV — Ignacio López Muñoyerro" author="Ignacio López Muñoyerro">
      <Page size="A4" style={styles.page}>

        {/* Header */}
        <View style={styles.header}>
          <View style={styles.headerLeft}>
            <Text style={styles.name}>Ignacio López Muñoyerro</Text>
            <Text style={styles.title}>{cv.title_line}</Text>
            <View style={styles.contactRow}>
              <Text style={styles.contactItem}>{cv.location}</Text>
              {phone && <Text style={styles.contactItem}>{phone}</Text>}
              <Link src="mailto:Ignacio.odi4@gmail.com" style={styles.contactLink}>Ignacio.odi4@gmail.com</Link>
            </View>
          </View>
          {photoUrl && <Image src={photoUrl} style={styles.photo} />}
        </View>

        <View style={styles.divider} />

        {/* Experience */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>{cv.section_experience}</Text>
          {workItems.map((item, i) => (
            <View key={i} style={styles.expItem}>
              <View style={styles.expHeader}>
                <Text style={styles.expRole}>{item.role}</Text>
                <Text style={styles.expPeriod}>{item.period}</Text>
              </View>
              <Text style={styles.expCompany}>{item.company} · {item.location}</Text>
              {item.bullets.map((b, j) => (
                <View key={j} style={styles.bullet}>
                  <Text style={styles.bulletDot}>·</Text>
                  <Text style={styles.bulletText}>{b}</Text>
                </View>
              ))}
            </View>
          ))}
        </View>

        <View style={styles.divider} />

        {/* Education */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>{cv.section_education}</Text>
          {eduItems.map((item, i) => (
            <View key={i} style={styles.expItem}>
              <View style={styles.expHeader}>
                <Text style={styles.expRole}>{item.role}</Text>
                <Text style={styles.expPeriod}>{item.period}</Text>
              </View>
              <Text style={styles.expCompany}>{item.company} · {item.location}</Text>
            </View>
          ))}
        </View>

        <View style={styles.divider} />

        {/* Certifications */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>{cv.section_certs}</Text>
          {CERT_NAMES.map((name, i) => (
            <View key={name} style={styles.certRow}>
              <Text style={styles.certName}>{name}</Text>
              <Text style={styles.certDate}>{certDates[i]}</Text>
            </View>
          ))}
        </View>

        <View style={styles.divider} />

        {/* Skills */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>{cv.section_skills}</Text>
          {cv.skills.map((s) => (
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

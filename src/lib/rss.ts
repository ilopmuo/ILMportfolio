export interface RSSItem {
  title: string;
  link: string;
  pubDate: string;
}

function extractTag(block: string, tag: string): string {
  const re = new RegExp(`<${tag}[^>]*>([\\s\\S]*?)<\\/${tag}>`, "i");
  const match = re.exec(block);
  if (!match) return "";
  return match[1]
    .replace(/<!\[CDATA\[/, "")
    .replace(/\]\]>/, "")
    .replace(/<[^>]+>/g, "")
    .trim();
}

export async function getSalesforceNews(): Promise<RSSItem[]> {
  try {
    const res = await fetch("https://admin.salesforce.com/feed", {
      next: { revalidate: 3600 },
      headers: { "User-Agent": "Mozilla/5.0" },
    });
    if (!res.ok) throw new Error("RSS fetch failed");
    const xml = await res.text();

    const items: RSSItem[] = [];
    const itemRe = /<item>([\s\S]*?)<\/item>/g;
    let match;

    while ((match = itemRe.exec(xml)) !== null && items.length < 5) {
      const block = match[1];
      const title = extractTag(block, "title");
      const link =
        extractTag(block, "link") || extractTag(block, "guid");
      const pubDate = extractTag(block, "pubDate");
      if (title && link) items.push({ title, link, pubDate });
    }

    return items;
  } catch {
    return [];
  }
}

export function formatRSSDate(dateStr: string): string {
  try {
    const d = new Date(dateStr);
    return d.toLocaleDateString("es-ES", { day: "numeric", month: "short", year: "numeric" });
  } catch {
    return "";
  }
}

import Image from "next/image";

// Official badge images from Salesforce developer portal
const BADGE_URLS: Record<string, string> = {
  Administrator:
    "https://developer.salesforce.com/resources2/certification-site/images/Certification_Logos/Administrator.png",
  "Platform App Builder":
    "https://developer.salesforce.com/resources2/certification-site/images/Certification_Logos/Platform-App-Builder.png",
  "AI Associate":
    "https://developer.salesforce.com/resources2/certification-site/images/Certification_Logos/AI-Associate.png",
};

export function SalesforceBadge({
  certKey,
  name,
}: {
  certKey: string;
  name: string;
}) {
  const url = BADGE_URLS[certKey];

  if (url) {
    return (
      <div className="shrink-0 w-10 h-10 relative">
        <Image
          src={url}
          alt={name}
          fill
          className="object-contain"
          sizes="40px"
        />
      </div>
    );
  }

  // Fallback: Salesforce cloud SVG
  return (
    <div className="shrink-0 w-10 h-10 flex items-center justify-center bg-brand-50 border border-brand-100 rounded-sm">
      <SalesforceCloudIcon className="w-6 h-4" />
    </div>
  );
}

export function SalesforceCloudIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 560 400"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M233.3 80c26.9-28 64.3-45.6 106-45.6 57.1 0 106.5 31.5 132.1 77.9 19.1-8.4 40.3-13.1 62.7-13.1 83.8 0 151.8 68 151.8 151.8S618 403 534.2 403H108.7C48.7 403 0 354.3 0 294.3s48.7-108.7 108.7-108.7c8.4 0 16.6.9 24.5 2.7-5.7-15.3-8.8-31.8-8.8-49.1C124.4 69.8 194.2 0 280.6 0c40.2 0 76.8 15.5 104 40.8"
        fill="#00A1E0"
      />
    </svg>
  );
}

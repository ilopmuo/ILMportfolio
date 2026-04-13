export function SalesforceBadge({ name }: { certKey?: string; name: string }) {
  return (
    <div
      className="shrink-0 w-10 h-10 flex items-center justify-center bg-[#00A1E0]/8 border border-[#00A1E0]/20 rounded-sm"
      title={name}
    >
      <SalesforceCloudIcon className="w-6 h-[18px]" />
    </div>
  );
}

export function SalesforceCloudIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 689 430"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      fill="#00A1E0"
    >
      <path d="M232.8 78.7C260 50.2 298 33 340 33c57.5 0 107.3 31.8 133.2 78.7 19.2-8.5 40.6-13.3 63.2-13.3C621 98.4 689 166.4 689 251s-68 165.6-152.6 165.6H108C48.4 416.6 0 368.2 0 308.6S48.4 200.8 108 200.8c8.5 0 16.7.9 24.7 2.7-5.7-15.4-8.9-32-8.9-49.4C123.8 83.7 194 13.5 280.8 13.5c40.5 0 77.4 15.7 104.8 41.3" />
    </svg>
  );
}

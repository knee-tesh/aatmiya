export default function SectionDivider() {
  return (
    <div className="flex justify-center my-16 md:my-24 px-4">
      <svg
        width="240"
        height="12"
        viewBox="0 0 240 12"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="text-amber"
        aria-hidden="true"
      >
        <line x1="0" y1="6" x2="240" y2="6" stroke="#D4A853" strokeWidth="1" />
        <circle cx="20" cy="6" r="2" fill="#D4A853" />
        <rect x="48" y="3" width="6" height="6" rx="1" fill="#D4A853" transform="rotate(45 51 6)" />
        <circle cx="80" cy="6" r="2" fill="#D4A853" />
        <rect x="108" y="3" width="6" height="6" rx="1" fill="#D4A853" transform="rotate(45 111 6)" />
        <circle cx="140" cy="6" r="2" fill="#D4A853" />
        <rect x="168" y="3" width="6" height="6" rx="1" fill="#D4A853" transform="rotate(45 171 6)" />
        <circle cx="200" cy="6" r="2" fill="#D4A853" />
        <rect x="218" y="2" width="8" height="8" rx="1" fill="#D4A853" transform="rotate(45 222 6)" />
      </svg>
    </div>
  );
}

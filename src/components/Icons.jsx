// Minimal line-icon set, drawn in the same stroke weight as the rest of the
// blueprint motif. Kept local so the project has no icon-package dependency.

const base = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.5,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};

export function CompassRose({ className = "w-10 h-10" }) {
  return (
    <svg viewBox="0 0 40 40" className={className} {...base}>
      <circle cx="20" cy="20" r="16" />
      <path d="M20 6 L23 20 L20 34 L17 20 Z" />
      <path d="M6 20 L20 17 L34 20 L20 23 Z" opacity="0.45" />
      <text
        x="20"
        y="4.5"
        fontSize="4.5"
        stroke="none"
        fill="currentColor"
        textAnchor="middle"
        fontFamily="IBM Plex Mono, monospace"
      >
        N
      </text>
    </svg>
  );
}

export function DraftingTool({ className = "w-6 h-6" }) {
  return (
    <svg viewBox="0 0 24 24" className={className} {...base}>
      <path d="M4 20 L14 4 L20 8 L10 20 Z" />
      <path d="M8 14 L15 9" />
    </svg>
  );
}

export function SurveyPin({ className = "w-6 h-6" }) {
  return (
    <svg viewBox="0 0 24 24" className={className} {...base}>
      <path d="M12 21c4-4.5 6.5-8 6.5-11A6.5 6.5 0 0 0 5.5 10c0 3 2.5 6.5 6.5 11Z" />
      <circle cx="12" cy="10" r="2" />
    </svg>
  );
}

export function Blueprint({ className = "w-6 h-6" }) {
  return (
    <svg viewBox="0 0 24 24" className={className} {...base}>
      <rect x="3.5" y="3.5" width="17" height="17" rx="0.5" />
      <path d="M3.5 9 H20.5 M9 3.5 V20.5" />
      <circle cx="14.5" cy="14.5" r="3" />
    </svg>
  );
}

export function Seal({ className = "w-14 h-14" }) {
  return (
    <svg viewBox="0 0 48 48" className={className} {...base}>
      <circle cx="24" cy="24" r="18" />
      <circle cx="24" cy="24" r="13" strokeDasharray="2.2 3" />
      <path d="M17 24.5 L22 29.5 L31.5 18.5" />
    </svg>
  );
}

export function Ribbon({ className = "w-8 h-8" }) {
  return (
    <svg viewBox="0 0 32 32" className={className} {...base}>
      <circle cx="16" cy="11" r="7" />
      <path d="M11 16.5 L8 27 L16 22.5 L24 27 L21 16.5" />
    </svg>
  );
}

export function Beam({ className = "w-6 h-6" }) {
  return (
    <svg viewBox="0 0 24 24" className={className} {...base}>
      <path d="M3 8 H21 M3 16 H21 M3 8 V16 M21 8 V16 M8 8 V16 M14 8 V16" />
    </svg>
  );
}

export function ArrowDownRight({ className = "w-4 h-4" }) {
  return (
    <svg viewBox="0 0 24 24" className={className} {...base}>
      <path d="M6 6 L18 18 M18 8 V18 H8" />
    </svg>
  );
}

export function Portrait({ className = "w-10 h-10" }) {
  return (
    <svg viewBox="0 0 24 24" className={className} {...base}>
      <circle cx="12" cy="8" r="4" />
      <path d="M4.5 20c1.6-3.6 4.2-5.5 7.5-5.5s5.9 1.9 7.5 5.5" />
      <path d="M10 3.2 l1.2 1 1.6 -0.4 last" />
    </svg>
  );
}

export function LinkedIn({ className = "w-4 h-4" }) {
  return (
    <svg viewBox="0 0 24 24" className={className} {...base}>
      <rect x="3" y="3" width="18" height="18" rx="2" />
      <path d="M8 10 v6 M8 7.2 v0.01 M12.5 16 v-3.2 a1.9 1.9 0 0 1 3.8 0 V16" />
      <circle cx="8" cy="7.2" r="0.3" />
    </svg>
  );
}

export function Mail({ className = "w-4 h-4" }) {
  return (
    <svg viewBox="0 0 24 24" className={className} {...base}>
      <rect x="3" y="5" width="18" height="14" rx="1" />
      <path d="M3 7 L12 13 L21 7" />
    </svg>
  );
}

export function MailIcon({ className = "w-6 h-6" }) {
  return <Mail className={className} />;
}

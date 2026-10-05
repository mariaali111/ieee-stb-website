export default function SocialBrandIcon({ name }) {
  const common = { viewBox: "0 0 24 24", fill: "none", "aria-hidden": "true" };

  if (name === "Instagram") {
    return (
      <svg {...common}>
        <rect x="3" y="3" width="18" height="18" rx="5" stroke="currentColor" strokeWidth="1.9" />
        <circle cx="12" cy="12" r="4.2" stroke="currentColor" strokeWidth="1.9" />
        <circle cx="17.3" cy="6.8" r="1.15" fill="currentColor" />
      </svg>
    );
  }

  if (name === "Facebook") {
    return (
      <svg {...common}>
        <path
          fill="currentColor"
          d="M13.5 21v-8h2.7l.4-3.1h-3.1V7.9c0-.9.3-1.6 1.6-1.6h1.7V3.5c-.3 0-1.3-.1-2.5-.1-2.5 0-4.2 1.5-4.2 4.3v2.2H7.3V13h2.8v8h3.4Z"
        />
      </svg>
    );
  }

  if (name === "YouTube") {
    return (
      <svg {...common}>
        <path
          fill="currentColor"
          d="M21.6 7.1a2.9 2.9 0 0 0-2-2C17.9 4.6 12 4.6 12 4.6s-5.9 0-7.6.5a2.9 2.9 0 0 0-2 2C1.9 8.8 1.9 12 1.9 12s0 3.2.5 4.9a2.9 2.9 0 0 0 2 2c1.7.5 7.6.5 7.6.5s5.9 0 7.6-.5a2.9 2.9 0 0 0 2-2c.5-1.7.5-4.9.5-4.9s0-3.2-.5-4.9ZM10 15.7V8.3l6 3.7-6 3.7Z"
        />
      </svg>
    );
  }

  // LinkedIn (default)
  return (
    <svg {...common}>
      <path
        fill="currentColor"
        d="M5.2 8.1A1.9 1.9 0 1 1 5.2 4.3a1.9 1.9 0 0 1 0 3.8ZM3.5 9.7h3.4V20H3.5V9.7Zm5.5 0h3.2v1.4h.1c.4-.8 1.5-1.7 3.5-1.7 3.7 0 4.3 2.4 4.3 5.6V20h-3.4v-4.4c0-1.1 0-2.6-1.6-2.6s-1.9 1.2-1.9 2.5V20H9V9.7Z"
      />
    </svg>
  );
}

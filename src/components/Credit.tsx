import { invite } from '../data/invite'

/** Small "Crafted by Velora" watermark at the very bottom of the page; opens a WhatsApp chat with Velora. */
export function Credit() {
  const { label, name, url } = invite.credit
  return (
    <footer className="credit">
      <span className="credit-note">{label}</span>
      <a className="credit-link" href={url} target="_blank" rel="noopener noreferrer" aria-label={`${name} - chat with us on WhatsApp`}>
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
          <path d="M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9L3 21" />
          <path d="M9 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0v1a5 5 0 0 0 5 5h1a.5.5 0 0 0 0-1h-1a.5.5 0 0 0 0 1" />
        </svg>
        <span>{name}</span>
      </a>
    </footer>
  )
}

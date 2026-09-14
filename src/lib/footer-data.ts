export interface FooterLink {
  label: string;
  href: string;
}

export const FOOTER_SERVICE_LINKS: FooterLink[] = [
  { label: "Hyperparameter model tuning", href: "#services" },
  { label: "PoC of AI Solutions", href: "#services" },
  { label: "AI Model Optimization", href: "#services" },
  { label: "AI Consultation", href: "#services" },
];

export const FOOTER_PAGE_LINKS: FooterLink[] = [
  { label: "Services", href: "#services" },
  { label: "Technology", href: "#technology" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "virtual team", href: "#virtual-team" },
  { label: "Contact us", href: "#contact" },
];

export const FOOTER_LEGAL_LINKS: FooterLink[] = [
  { label: "Privacy Policy", href: "#privacy-policy" },
  { label: "GDPR Policy", href: "#gdpr-policy" },
  { label: "Terms of Service", href: "#terms-of-service" },
];

import {
  FOOTER_LEGAL_LINKS,
  FOOTER_PAGE_LINKS,
  FOOTER_SERVICE_LINKS,
} from "@/lib/footer-data";
import { FooterLinkList } from "@/components/layout/footer-link-list";
import { SocialLinks } from "@/components/layout/social-links";

/**
 * Site footer: link columns, social icons, and a bottom copyright/legal bar.
 */
export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-theme px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
          <FooterLinkList title="Services" links={FOOTER_SERVICE_LINKS} />
          <FooterLinkList title="Pages" links={FOOTER_PAGE_LINKS} />

          <div>
            <h3 className="text-2xl font-medium text-para">Stay connected</h3>
            <div className="mt-5">
              <SocialLinks />
            </div>
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-4 border-t border-para/10 pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-base font-normal text-para/60">
            © {year} Intersmart Ltd. All rights reserved.
          </p>

          <ul className="flex flex-wrap items-center gap-x-2 gap-y-1">
            {FOOTER_LEGAL_LINKS.map((link, index) => (
              <li key={link.href} className="flex items-center gap-2">
                <a
                  href={link.href}
                  className="group relative inline-block text-base font-normal text-para/60 transition-colors hover:text-para"
                >
                  {link.label}
                  <span
                    aria-hidden="true"
                    className="absolute inset-x-0 -bottom-0.5 h-0.5 origin-left scale-x-0 bg-para transition-transform duration-300 ease-out group-hover:scale-x-100"
                  />
                </a>
                {index < FOOTER_LEGAL_LINKS.length - 1 && (
                  <span className="text-para/30" aria-hidden="true">
                    |
                  </span>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}

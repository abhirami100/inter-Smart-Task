import { memo } from "react";
import type { FooterLink } from "@/lib/footer-data";

interface FooterLinkListProps {
  title: string;
  links: FooterLink[];
}

// One footer column with a title and a list of links
function FooterLinkListComponent({ title, links }: FooterLinkListProps) {
  return (
    <div>
      <h3 className="text-2xl font-medium text-para">{title}</h3>
      <ul className="mt-5 flex flex-col gap-3">
        {links.map((link) => (
          <li key={link.href + link.label}>
            <a
              href={link.href}
              className="group relative inline-block text-base font-normal text-para/70 transition-colors hover:text-para"
            >
              {link.label}
              <span
                aria-hidden="true"
                className="absolute inset-x-0 -bottom-0.5 h-0.5 origin-left scale-x-0 bg-para transition-transform duration-300 ease-out group-hover:scale-x-100"
              />
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export const FooterLinkList = memo(FooterLinkListComponent);

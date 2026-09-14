import { memo } from "react";
import { NAV_LINKS } from "@/lib/nav-links";

interface NavMenuProps {
  className?: string;
  linkClassName?: string;
  onLinkClick?: () => void;
}

/**
 * Shared list of primary navigation links, reused by the desktop nav
 * and the mobile menu so the link set stays DRY.
 */
function NavMenuComponent({
  className = "",
  linkClassName = "text-base",
  onLinkClick,
}: NavMenuProps) {
  return (
    <ul className={className}>
      {NAV_LINKS.map((link) => (
        <li key={link.href}>
          <a
            href={link.href}
            onClick={onLinkClick}
            className={`group relative inline-block font-medium text-para/90 transition-colors hover:text-para ${linkClassName}`}
          >
            {link.label}
            <span
              aria-hidden="true"
              className="absolute inset-x-0 -bottom-1 h-0.5 origin-left scale-x-0 bg-para transition-transform duration-300 ease-out group-hover:scale-x-100"
            />
          </a>
        </li>
      ))}
    </ul>
  );
}

export const NavMenu = memo(NavMenuComponent);

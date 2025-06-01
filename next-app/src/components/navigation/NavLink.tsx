import { useState } from "react";

import { usePathname } from "next/navigation";
import { LinkObj } from "./links";

import Link from "next/link";

declare global {
  interface Window {
    // bootstrap: any;
    bootstrap?: {
      Offcanvas: {
        getInstance: (element: HTMLElement) => { hide: () => void } | null;
      };
    };
  }
}
function handleNavLinkClick() {
  const offcanvasEl = document.getElementById("offcanvasNavbar");
  if (offcanvasEl && window.bootstrap) {
    const bsOffcanvas = window.bootstrap.Offcanvas.getInstance(offcanvasEl);
    bsOffcanvas?.hide();  // Close offcavas navbar
  }
}

export function NavLink({ link, level = 1}: { link: LinkObj; level?: number;}) {
  const [isOpen, setIsOpen] = useState(true);
  const pathname = usePathname();
  const isActive = pathname === link.href;
  const hasSublinks = !!link.sublinks;

  return (
    <div className="nav-item">
      <div className="d-flex align-items-center justify-content-between me-3">
        <Link
          href={link.href}
          onClick={handleNavLinkClick}
          className={`
            ${isActive ? "nav-link active" : "nav-link"} 
            level-${level} 
            ${level === 1 ? "ps-4 pe-1 pt-0 fs-5" : ""}
            ${level === 2 ? "ps-5 pe-1 pt-0 fs-6" : ""}
          `}
        >
          {link.name}
        </Link>
        {hasSublinks && (
          <i
            className={`bi ${isOpen ? "bi-chevron-down" : "bi-chevron-right"} arrow-icon pb-1`}
            onClick={() => setIsOpen(!isOpen)}
          />
        )}
      </div>
      {hasSublinks && isOpen && (
        <ul className="list-unstyled">
          {link.sublinks!.map((sublink) => (
            <NavLink key={sublink.href} link={sublink} level={level + 1} />
          ))}
        </ul>
      )}
    </div>
  );
}

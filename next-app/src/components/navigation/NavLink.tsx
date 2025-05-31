import { useState } from "react";
import Link from "next/link";

import { usePathname } from "next/navigation";
import { LinkObj } from "./links";


export function NavLink({ link, level = 1}: { link: LinkObj; level?: number;}) {
  const [isOpen, setIsOpen] = useState(true);
  const pathname = usePathname();
  const isActive = pathname === link.href;
  const hasSublinks = !!link.sublinks;

  return (
    <div className="nav-item">
      <div className="d-flex align-items-center justify-content-between me-3">
        <a
          className={`
            ${isActive ? "nav-link active" : "nav-link"} 
            level-${level} 
            ${level === 1 ? "ps-4 pe-1 pt-0 fs-5" : ""}
            ${level === 2 ? "ps-5 pe-1 pt-0 fs-6" : ""}
          `}
          href={link.href}
        >
          {link.name}
        </a>
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

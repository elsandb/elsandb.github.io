"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { links } from "./links";
import type { LinkObj } from "./links";
import { useState } from "react";


/**
 * Render a list of links, specified in `links`.
 * 
 * The `renderLinks` function is mapping over the `links` array. 
 * For each link, it creates a Link component with the text 
 * `{link.name}`. If the link has sublinks, it recursively calls 
 * `renderLinks` to render those sublinks.
 * 
 * @param {LinkObj[]} links - Array of link objects (type LinkObj).
 * @param {number} [level=1] - The starting indentation level for the links (default=1). The indentation level is increased by 1 for each recursive call (each time a lik has sublinks). The level is used to give each link a className, `level-${level}, that can be used for CSS styling.
 * @returns {JSX.Element[]} - Array of rendered link elements.
 */
export function renderLinks(links: LinkObj[], level: number = 1): JSX.Element[] {
  return links.map((link) => {
    // Toggle state for the potential sublink list.
    const [isOpen, setIsOpen] = useState(true);
    // Check if the current link is active
    const isActive = usePathname() === link.href;
    // Sublink toggle button icon
    const arrow = isOpen ? "bi-chevron-down" : "bi-chevron-right"
    // Get potential sublinks
    const sublinks = link.sublinks ? renderLinks(link.sublinks, level + 1) : null;

    return (
      <div key={link.href} className="nav-item">
        {/* Link and sublinks toggle button on the same line 
        and aligned vertically in the center. */}
        <div className="d-flex align-items-center 
          justify-content-between me-3">

          <Link
            key={link.href}
            className={`
              ${isActive ? "nav-link active" : "nav-link"} 
              level-${level} 
              ${level === 1 ? "ps-4 pe-1 pt-0 fs-5" : ""}
              ${level === 2 ? "ps-5 pe-1 pt-0 fs-6" : ""}
            `}
            aria-current={isActive ? "page" : undefined}
            href={link.href}>
            {link.name}
          </Link>

          { // Sublinks toggle button/icon if any sublinks
            link.sublinks &&
            <i 
              className={`bi ${arrow} arrow-icon pb-1`}
              onClick={() => setIsOpen(!isOpen)}/>
          }
        </div>
        { // Render sublinks if they exist
          isOpen &&
          <ul className="list-unstyled">
            {sublinks}
          </ul>
        }
      </div>
    );
  });
}


/**
 * Renders a sticky-top navbar with a list of links, specified in `links`.
 * 
 * @returns {JSX.Element} - The rendered navbar element.
 */
export default function SideNavBar(): JSX.Element {
  return (
    <>
      <nav className="navbar sticky-top">
        {/* Link list */}
        <ul className="navbar-nav flex-grow-1">
          {renderLinks(links)}
        </ul>
      </nav>
    </>
  );
}

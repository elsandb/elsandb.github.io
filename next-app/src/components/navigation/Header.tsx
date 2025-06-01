"use client";
import { links } from "./links";
import { NavLink } from "./NavLink";

import { ThemeToggle } from "../ThemeToggle";

export default function Header() {
  return (
    <header className="border-bottom py-3 px-4 d-flex justify-content-between align-items-center">
      <MenuButtons />
      <SiteTitle />
      <ThemeToggle />
    </header>
  );
}

function SiteTitle() {
  return (
    <a className="text-decoration-none fs-4 text-light-emphasis" href="/">
      @elsandb
    </a>
  );
}

/**
 * Menu toggle buttons for the side navbar and the offcanvas navbar.
 */
function MenuButtons() {
  return (
    <div className="d-flex align-items-center">
      <div>
        <button
          id="offcanvas-toggle-btn"
          className="navbar-toggler"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasNavbar"
          aria-controls="offcanvasNavbar"
          aria-label="Toggle navigation">
          <span>
            <svg width="24" height="24" stroke="currentColor" fill="none" strokeWidth="2">
              <line x1="4" y1="6" x2="20" y2="6" />
              <line x1="4" y1="12" x2="20" y2="12" />
              <line x1="4" y1="18" x2="20" y2="18" />
            </svg>
          </span>
        </button>
        <button
          id="sidebar-toggle-btn"
          className="navbar-toggler d-lg-block"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#sidebar"
          aria-controls="sidebar"
          aria-label="Toggle navigation">
          <span>
            <svg width="24" height="24" stroke="currentColor" fill="none" strokeWidth="2">
              <line x1="4" y1="6" x2="20" y2="6" />
              <line x1="4" y1="12" x2="20" y2="12" />
              <line x1="4" y1="18" x2="20" y2="18" />
            </svg>
          </span>
        </button>
      </div>
    </div>
  )
}

export function OffcanvasNavBar() {
  return (
    <div id="offcanvasNavbar"
      className="offcanvas offcanvas-start"
      tabIndex={-1}
      aria-labelledby="offcanvasNavbarLabel">
      <div className="offcanvas-header">
        <h4 className="offcanvas-title text-light-emphasis ps-4" id="offcanvasNavbarLabel">
          Menu
        </h4>
        <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close" />
      </div>
      <div className="offcanvas-body">
        <ul className="navbar-nav flex-grow-1 pe-3">
          {links.map((link) => <NavLink link={link} key={link.href} />)}
        </ul>
      </div>
    </div>
  )
}
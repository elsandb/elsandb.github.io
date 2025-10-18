"use client";
import { ThemeToggle } from "../ThemeToggle";
import { links } from "./links";
import { NavLink } from "./NavLink";

function Header() {
  return (
    <nav className="navbar sticky-top navbar-dark bg-dark navbar-expand-md">
      <div className="container col-10 col-lg-8">
        <a className="navbar-brand ps-4 me-auto" href="/">@elsandb</a>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse justify-content-center" id="navbarSupportedContent">
          <ul className="navbar-nav mx-auto">
            {links.map((link) => <NavLink link={link} key={link.href} />)}
            <ThemeToggle />
          </ul>
        </div>
        
      </div>
    </nav>
  );
}

export { Header };

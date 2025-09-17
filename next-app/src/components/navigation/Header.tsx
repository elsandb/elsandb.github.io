"use client";
import { ThemeToggle } from "../ThemeToggle";
import Link from "next/link";
import { links } from "./links";
import { NavLink } from "./NavLink";

function Header() {
  return (
    <nav className="navbar sticky-top navbar-dark bg-dark navbar-expand-lg">
      <div className="container-fluid d-flex align-items-center justify-content-between">

        <a className="navbar-brand me-auto" href="/">@elsandb</a>

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
          </ul>
        </div>
        <ThemeToggle />

      </div>
    </nav>
  );
}

export { Header };

// /* <header className="border-bottom py-3 px-4 d-flex justify-content-between align-items-center">
//   <Link className="text-decoration-none fs-4 text-light-emphasis" href="/">
//     @elsandb
//   </Link>
//   <Link className="text-decoration-none fs-4 text-light-emphasis" href="/">
//     Home
//   </Link>
//   <Link className="text-decoration-none fs-4 text-light-emphasis" href="/projects">
//     Projects
//   </Link>
//   <ThemeToggle />
// </header> */
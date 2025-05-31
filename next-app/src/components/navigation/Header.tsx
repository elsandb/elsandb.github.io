"use client";
import { links } from "./links";
import { NavLink } from "./NavLink";

export default function Header() {
  return (
    <div id="navbar-top" className="row">
      <div className="col">
        {/* TOP AND OFFCANVAS NAVBAR */}
        <nav className="navbar bg-body-tertiary fixed-top border-bottom">
          <div className="container-fluid align-items-center">

            {/* Top navbar */}
            <div className="d-flex align-items-center">
              <div className="mr-auto">
                <button
                  id="offcanvas-toggle-btn"
                  className="navbar-toggler"
                  type="button"
                  data-bs-toggle="offcanvas"
                  data-bs-target="#offcanvasNavbar"
                  aria-controls="offcanvasNavbar"
                  aria-label="Toggle navigation"
                >
                  <span className="navbar-toggler-icon"></span>
                </button>
                <button
                  id="sidebar-toggle-btn"
                  className="navbar-toggler d-lg-block"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#sidebar"
                  aria-controls="sidebar"
                  aria-label="Toggle navigation"
                >
                  {/* <span className="navbar-toggler-icon" /> */}
                  <span className="navbar-toggler-icon"></span>
                </button>
              </div>
              {/* Logo */}
              <a className="text-decoration-none" href="/">
                <h4 className="ps-4 fw-light text-light-emphasis">
                  @elsandb
                </h4>
              </a>
            </div>

            {/* Offcanvas navbar */}
            <div
              id="offcanvasNavbar"
              className="offcanvas offcanvas-start"
              tabIndex={-1}
              aria-labelledby="offcanvasNavbarLabel"
            >
              <div className="offcanvas-header">
                {/* Logo */}
                <h5 
                  className="offcanvas-title text-light-emphasis" 
                  id="offcanvasNavbarLabel">
                  @elsandb
                </h5>
                {/* Button: close */}
                <button 
                  type="button" 
                  className="btn-close" 
                  data-bs-dismiss="offcanvas" 
                  aria-label="Close" />
              </div>

              <div className="offcanvas-body">
                <ul className="navbar-nav flex-grow-1 pe-3">
                  {links.map((link)=><NavLink link={link}/>)}
                </ul>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
}

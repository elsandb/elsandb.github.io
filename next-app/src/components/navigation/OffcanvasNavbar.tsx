"use client";
import { links } from "./links";
import { NavLink } from "./NavLink";

function OffCanvasNavBar() {
  console.log("Links from OffCanvasNavBar:", links);
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

export { OffCanvasNavBar };
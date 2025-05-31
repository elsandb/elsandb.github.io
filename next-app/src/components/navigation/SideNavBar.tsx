"use client";
import { links } from "./links";
import { NavLink } from "./NavLink";


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
          {links.map((link)=><NavLink link={link}/>)}
        </ul>
      </nav>
    </>
  );
}

"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";

// Linking and navigation: https://nextjs.org/docs/app/building-your-application/routing/linking-and-navigating

const links = [
  {
    name: "Home",
    href: "/",
    icon: null,
  },
  {
    name: "Prosjekter",
    href: "/projects",
    icon: null,
  },
];

export default function SideNavBar() {
  const pathname = usePathname();

  return (
    <>
      <div className="col-auto px-0">
        <div
          id="sidebar"
          className="col-auto px-0 collapse collapse-horizontal show"
        >
          <nav>
            {/* LINKS */}
            <div
              id="sidebar-nav"
              className="list-group border-0 rounded-0 text-sm-start sidebar"
            >
              {links.map((link) => {
                // const LinkIcon = link.icon;
                return (
                  <Link
                    // Set className to "active" if the page URL pathname equals href.
                    className={`${
                      pathname === link.href ? "active" : "nav-link"
                    } d-inline-block`}
                    aria-current={`${
                      pathname === link.href ? "page" : "false"
                    }`}
                    href={link.href}
                  >
                    {/* <LinkIcon className="link-icon" /> */}
                    {link.name}
                  </Link>
                );
              })}
            </div>
          </nav>

          <hr />
          <p className="contact">Lorem Calor Dolor</p>
        </div>
      </div>
    </>
  );
}

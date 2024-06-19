"use client";
import "@/styles/globals.css";
import { usePathname } from "next/navigation";
import Link from "next/link";

// Linking and navigation: https://nextjs.org/docs/app/building-your-application/routing/linking-and-navigating

const links = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "Prosjekter",
    href: "/projects",
    sublinks: [
      {
        name: "Tidslinje",
        href: "/projects/timeline",
        sublinks: [
          {
            name: "How to Timeline?",
            href: "/projects/timeline/how",
            descr:
              "What is the best way to make a timeline? Should I use JavaScript or Python? D3 or a 'higher level'-chart-library?",
          },
          {
            name: "Datastructur",
            href: "/projects/timeline/data",
          },
          // {
          //   name: "Data flow",
          //   href: "/projects/timeline/data_flow",
          // },
          {
            name: "Prototype 1",
            href: "/projects/timeline/proto1",
          }
        ]
      }
    ]
  }
];

/**
 * Renders a list of links, specified in `links`.
 * * links array example
 * ```js
  const links = [
    {
      name: "Projects",
      href: "/projects",  // level-1
    },
    {
      name: "Timeline",
      href: "/projects/timeline",  // level-2
      subLinks: [
        {
          name: "Datastructur",
          href: "/projects/timeline/data",  // level-3
        }
      ]
    }
  ];
 * ```
 * 
 * * Each link element looks like this:
 * ```html
 * <Link key={link.href}
      className={activeOrNavlink + " level-" + level}  // F.ex. level-1
      aria-current={pageOrFalse}
      href={link.href}
  >{link.name}</Link>
 * ```
 * 
 * * You can style the (sub)links based on their level of "nestedness" (how deep they are nested), by using the className `level-#` where `#` is a number. The count starts on `1`.
 * 
 * @param {Array[Object]} links - Array of link objects.
 * @param {Object} links[].name - The name of the link.
 * @param {string} links[].href - The href of the link.
 * 
 * @param {Array} [links[].subLinks] - Array of link objects (optional). You can nest an array of link-object inside another link object. The result of this is that the nested link object will get a className `level-#` where `#` is a number corresponding to how deep the link object is nested. The lowest level (not nested) is `1`.
 * 
 * @param {string} pathname - The current (active) pathname. F.ex. use `usePathname` from next.js: `import { usePathname } from "next/navigation";`. Then in your component: `const pathname = usePathname();`. Then pass `pathname` to this function.
 * 
 * @returns {Array} - Array of JSX elements representing the links.
 */
const renderLinks = (links, pathname, _level = 1) => {
  return links.map((link) => {
    const pageOrFalse = pathname === link.href ? "page" : "false";
    const activeOrNavlink = pathname === link.href ? "active" : "nav-link";

    const linkElement = (
      <Link
        key={link.href}
        className={activeOrNavlink + " level-" + _level}
        aria-current={pageOrFalse}
        href={link.href}
      >
        {link.name}
      </Link>
    );

    // If any sublinks, render them as well
    if (link.sublinks) {
      _level = _level + 1; // Increase _level by 1, because we are moving one level "up" for each time a link has "sublinks".
      const sublinkElements = renderLinks(link.sublinks, pathname, _level);
      _level = _level - 1; // Decrease _level by 1, because we are moving one level "down" for each time a link does not have "subLinks".
      return [linkElement, ...sublinkElements];
    }

    return [linkElement];
  });
};

export default function SideNavBar() {
  const pathname = usePathname();

  return (
    <>
      <div className="col-auto px-0">
        <div
          id="sidebar"
          className="px-0 collapse collapse-horizontal show"
        >
          <nav>
            {/* LINKS */}
            <div
              id="sidebar-nav"
              className="list-group text-sm-start sidebar"
            >
              {renderLinks(links, pathname)}
            </div>
          </nav>
          <nav className="text-sm-start sidebar">
            <hr className="" />
            <p className="contact">Lorem Calor Dolor</p>
          </nav>
        </div>
      </div>
    </>
  );
}

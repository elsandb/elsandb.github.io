"use client";
// Create a side navigation bar.
// * @see https://getbootstrap.com/docs/5.3/components/navbar/#placement
export type LinkObj = {
  name: string;
  href: string;
  sublinks?: LinkObj[];
};

export const links: LinkObj[] = [
  {
    name: "Home",
    href: "/",
  },
  // {
  //   name: "Blog",
  //   href: "/blog",
  // },
  {
    name: "Visualization",
    href: "/projects/visualize",
    sublinks: [
      {
        name: "Hierarchies",
        href: "/projects/visualize/hierarchies"
      }
    ]
  },
  // {
  //   name: "Pasienter",
  //   href: "/patients"
  // },
  // {
  //   name: "Tidslinje",
  //   href: "/projects/timeline",
  //   sublinks: [
  //     {
  //       name: "Hvordan lage en tidslinje?",
  //       href: "/projects/timeline/how",
  //     }
  //   ]
  // }
];

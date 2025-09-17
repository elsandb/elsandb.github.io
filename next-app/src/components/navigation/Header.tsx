import { ThemeToggle } from "../ThemeToggle";
import Link from "next/link";

function Header() {
  return (
    <header className="border-bottom py-3 px-4 d-flex justify-content-between align-items-center">
      {/* <MenuButtons /> */}
      <Link className="text-decoration-none fs-4 text-light-emphasis" href="/">
        @elsandb
      </Link>
      <Link className="text-decoration-none fs-4 text-light-emphasis" href="/projects">
        Projects
      </Link>

      <ThemeToggle />
    </header>
  );
}

export { Header };
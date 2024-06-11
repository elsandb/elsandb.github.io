export default function Header() {
  const logoText = "PaDa";
  const menuIcon = "☰";
  return (
    <>
      <header id="header" className="d-flex align-items-center justify-content-between">
        <div className="col-2">
            {/* Logo */}
            <a href="/" className="logo">
              {logoText}
            </a>

            {/* Menu icon */}
            <a
              id="menu-toggler"
              data-bs-target="#sidebar"
              data-bs-toggle="collapse"
              className="p-3"
            >
              {menuIcon}
            </a>
        </div>
        
        <div className="col-1 ">
            <a href="/about">About</a>
        </div>
      </header>
    </>
  );
}

"use client";
import { links } from "./links";
import { renderLinks } from "./SideNavBar";

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
                  {renderLinks(links)}
                  {/* <li className="nav-item">
                    <a 
                      className="nav-link active" 
                      aria-current="page" 
                      href="/">
                        Home
                    </a>
                  </li> */}
                </ul>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
}


// <>
//   <header id="header" className="d-flex align-items-center justify-content-between">
//     <div className="col-2">
//         {/* Logo */}
//         <a href="/" className="logo">
//           {logoText}
//         </a>

//         {/* Menu icon */}
//         <a
//           id="menu-toggler"
//           data-bs-target="#sidebar"
//           data-bs-toggle="collapse"
//           className="p-3"
//         >
//           {menuIcon}
//         </a>
//     </div>

//     <div className="col-1 ">
//         <a href="/about">About</a>
//     </div>
//   </header>
// </>

/* <nav className="navbar bg-body-tertiary fixed-top">
  <div className="container-fluid">
    <a className="navbar-brand" href="/">ES</a>
    <button
      className="navbar-toggler"
      type="button"
      data-bs-toggle="offcanvas"
      data-bs-target="#offcanvasNavbar"
      aria-controls="offcanvasNavbar"
      aria-label="Toggle navigation"
    >
      <span className="navbar-toggler-icon" />
    </button>

    <div className="offcanvas offcanvas-end" tabIndex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
      <div className="offcanvas-header">
        <h5 className="offcanvas-title" id="offcanvasNavbarLabel">Offcanvas</h5>
        <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
      </div>
      <div className="offcanvas-body">
        <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="#">Home</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Link</a>
          </li>
          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Dropdown
            </a>
            <ul className="dropdown-menu">
              <li><a className="dropdown-item" href="#">Action</a></li>
              <li><a className="dropdown-item" href="#">Another action</a></li>
              <li><hr className="dropdown-divider" /></li>
              <li><a className="dropdown-item" href="#">Something else here</a></li>
            </ul>
          </li>
        </ul>
        <form className="d-flex mt-3" role="search">
          <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
          <button className="btn btn-outline-success" type="submit">Search</button>
        </form>
      </div>
    </div>
  </div>
</nav> */
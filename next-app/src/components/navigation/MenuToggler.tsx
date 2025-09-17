/**
 * Menu toggle buttons for the side navbar and the offcanvas navbar.
 */
function MenuButtons() {
  return (
    <div className="d-flex align-items-center">
      <div>
        <button
          id="offcanvas-toggle-btn"
          className="navbar-toggler"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasNavbar"
          aria-controls="offcanvasNavbar"
          aria-label="Toggle navigation">
          <span>
            <svg width="24" height="24" stroke="currentColor" fill="none" strokeWidth="2">
              <line x1="4" y1="6" x2="20" y2="6" />
              <line x1="4" y1="12" x2="20" y2="12" />
              <line x1="4" y1="18" x2="20" y2="18" />
            </svg>
          </span>
        </button>
        <button
          id="sidebar-toggle-btn"
          className="navbar-toggler d-lg-block"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#sidebar"
          aria-controls="sidebar"
          aria-label="Toggle navigation">
          <span>
            <svg width="24" height="24" stroke="currentColor" fill="none" strokeWidth="2">
              <line x1="4" y1="6" x2="20" y2="6" />
              <line x1="4" y1="12" x2="20" y2="12" />
              <line x1="4" y1="18" x2="20" y2="18" />
            </svg>
          </span>
        </button>
      </div>
    </div>
  )
}
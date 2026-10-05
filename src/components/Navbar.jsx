import { Menu, X } from "lucide-react";
import logo from "../assets/ieee-stb-logo.png";
import { navItems } from "../config/navItems";

export default function Navbar({ open, setOpen, activeSection, goTo }) {
  return (
    <header className="navbar">
      <a
        className="brand"
        href="#home"
        onClick={() => goTo("#home")}
        aria-label="IEEE Student Branch ZHCET AMU home"
      >
        <img src={logo} alt="Aligarh Muslim University IEEE Student Branch logo" />
        <div className="brand-copy">
          <strong>IEEE STUDENT BRANCH</strong>
          <span>ZHCET · AMU</span>
        </div>
      </a>

      <nav className={open ? "nav-links open" : "nav-links"}>
        {navItems.map(([label, href]) => (
          <a
            key={label}
            className={activeSection === href ? "active" : ""}
            href={href}
            onClick={() => goTo(href)}
          >
            {label}
          </a>
        ))}
      </nav>

      <button
        className="menu-button"
        aria-label={open ? "Close menu" : "Open menu"}
        aria-expanded={open}
        onClick={() => setOpen(!open)}
      >
        {open ? <X size={22} /> : <Menu size={22} />}
      </button>
    </header>
  );
}

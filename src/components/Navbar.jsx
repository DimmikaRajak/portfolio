import { NavLink } from 'react-router-dom'
import './Navbar.css'

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Logo */}
        <div className="navbar-logo">
          <span className="logo-icon">✦</span>
          <span className="logo-text">Dimmika Rajak</span>
        </div>

        {/* Nav Links */}
        <div className="navbar-links">
          <NavLink
            to="/"
            className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}
          >
            About
          </NavLink>
          <NavLink
            to="/skills"
            className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}
          >
            Skills
          </NavLink>
          <NavLink
            to="/portfolio"
            className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}
          >
            Portfolio
          </NavLink>
          <NavLink
            to="/experience"
            className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}
          >
            Experience
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}
          >
            Contact
          </NavLink>
        </div>

        {/* Right Actions */}
        <div className="navbar-actions">
          <a href="/resume.pdf" className="btn btn-outline btn-sm">
            <i className="ti ti-file-cv"></i>
            Resume
          </a>
          <a href="#contact" className="btn btn-gradient btn-sm">
            Hire Me
          </a>
        </div>
      </div>
    </nav>
  )
}

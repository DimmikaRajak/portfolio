import { Link } from 'react-router-dom'
import './Footer.css'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-left">
          <span className="footer-brand">Dimmika Rajak · Developer</span>
        </div>

        <div className="footer-center">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/skills">Skills</Link>
          <Link to="/portfolio">Portfolio</Link>
          <Link to="/experience">Experience</Link>
          <Link to="/contact">Contact</Link>
        </div>

        <div className="footer-right">
          Made with care · 2025
        </div>
      </div>
    </footer>
  )
}

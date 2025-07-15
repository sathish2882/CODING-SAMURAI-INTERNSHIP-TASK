import { useState } from 'react';
import { FaBars } from "react-icons/fa";
import './Navbar.css';

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <h1 className="logo">Sathis<span className="logo-h-letter">h</span></h1>

      <div className={`nav-links ${menuOpen ? 'open' : ''}`}>
        <a href="#home" onClick={() => setMenuOpen(false)}>Home</a>
        <a href="#about" onClick={() => setMenuOpen(false)}>About</a>
        <a href="#projects" onClick={() => setMenuOpen(false)}>Projects</a>
        <a href="#skills" onClick={() => setMenuOpen(false)}>Skills</a>
        <a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a>
      </div>

      <div className="menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
        <FaBars />
      </div>
    </nav>
  );
}

export default Navbar;

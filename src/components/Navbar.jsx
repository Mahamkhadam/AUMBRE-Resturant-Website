import "./Navbar.css";
import { FaUserCircle, FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useState } from "react";
import nav from "../assets/logo-box.png";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <nav className="navbar">
<div className="logo">AUMBRE</div>
      <Link to="/" className="logo-box" onClick={closeMenu}>
        <img src={nav} alt="AUMBRE Logo" />
      </Link>

      {/* Hamburger */}
      <button
        className="menu-toggle"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle navigation"
      >
        {menuOpen ? <FaTimes /> : <FaBars />}
      </button>

      {/* Navigation */}
      <div className={`nav-links ${menuOpen ? "active" : ""}`}>

        <Link to="/" onClick={closeMenu}>HOME</Link>
        <Link to="/about" onClick={closeMenu}>ABOUT</Link>
        <Link to="/menu" onClick={closeMenu}>MENU</Link>
        <Link to="/chefs" onClick={closeMenu}>CHEFS</Link>
        <Link to="/gallery" onClick={closeMenu}>GALLERY</Link>
        <Link to="/testimonials" onClick={closeMenu}>TESTIMONIALS</Link>
        <Link to="/blogs" onClick={closeMenu}>BLOG</Link>
        <Link to="/faq" onClick={closeMenu}>FAQ</Link>
        <Link to="/contact" onClick={closeMenu}>CONTACT</Link>

        <Link to="/reserve" onClick={closeMenu}>
          <button className="reserve-btn">
            Reserve Table
          </button>
        </Link>

        <FaUserCircle className="user-icon" />

      </div>
    </nav>
  );
}

export default Navbar;
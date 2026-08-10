import "./Navbar.css";
import { FaUserCircle } from "react-icons/fa";
import { Link } from "react-router-dom";
import nav from "../assets/logo-box.png";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">AUMBRE</div>
      <div className="logo-box">
        <img src={nav}/>
      </div>
      <ul className='nav-links'>
     <li className='active'><Link to="/">HOME</Link></li>
     <li><Link to="/about">ABOUT</Link></li>
      <li><Link to="/menu">MENU</Link></li>
      <li><Link to="/chefs">CHEFS</Link></li>
      <li><Link to="/gallery">GALLERY</Link></li>
      <li><Link to="/testimonials">TESTIMONIALS</Link></li>
      <li><Link to="/blogs">BLOG</Link></li>
      <li><Link to="/faq">FAQ</Link></li>
      <li><Link to="/contact">CONTACT</Link></li>
    </ul>
    
    <Link to="/reserve">
    <button className="reserve-btn">
    Reserve Table
    </button>
    </Link>
    
    <FaUserCircle className='user-icon'/>
    </nav>
  );
}

export default Navbar;
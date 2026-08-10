import "./Footer.css"
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

function Footer()
{
 return (
    <footer className="footer">
        <div className="footer-container">
            <div className="footer-col about">
                <h2 className="logo">Àumbre</h2>
                <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Sapiente, praesentium recusandae nihil laborum quidem
                inventore pariatur excepturi maxime.
                </p>
            </div>

            <div className="footer-col">
                <h4>Explore</h4>
                <a href="/">Home</a>
                <a href="/about">About</a>
                <a href="/menu">Menu</a>
                <a href="/chefs">Chefs</a>
                <a href="/gallery">Gallery</a>
            </div>

            <div className="footer-col">
                <h4>More</h4>
                <a href="/testimonials">Testimonials</a>
                <a href="/blogs">Blog</a>
                <a href="/faq">FAQ</a>
                <a href="/reserve">Reservation</a>
                <a href="/contact">Contact</a>
            </div>

            <div className="footer-col">
                <h4>Contact</h4>
                 <p>I-8 Markaz, Islamabad, Pakistan</p>
                 <p>+923105996994</p>
                 <p>hello@maham.com</p>
            </div>
        </div>
       <div className="footer-bottom">
         <p>© 2026 Àumbre. All rights reserved.</p>

          <div className="social-icons">
            <a href="#"><FaFacebookF /></a>
            <a href="#"><FaInstagram /></a>
            <a href="#"><FaTwitter /></a>
          </div>
        </div>
    </footer>
);
}
export default Footer;
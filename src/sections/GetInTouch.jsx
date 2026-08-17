import "./GetInTouch.css";

import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaClock,
} from "react-icons/fa";

function GetInTouch() {
  return (
    <section className="get-touch-section">

      <div className="get-touch-container">

        {/* LEFT SIDE */}
        <div className="get-touch-info">

          <div className="touch-item">
            <FaMapMarkerAlt className="touch-icon" />

            <div>
              <h3>Location</h3>
              <p>F-7 Markaz, Islamabad, Pakistan</p>
            </div>
          </div>


          <div className="touch-item">
            <FaPhoneAlt className="touch-icon" />

            <div>
              <h3>Phone</h3>
              <p>+92 300 1234567</p>
            </div>
          </div>


          <div className="touch-item">
            <FaEnvelope className="touch-icon" />

            <div>
              <h3>Email</h3>
              <p>hello@aumbre.com</p>
            </div>
          </div>


          <div className="touch-item">
            <FaClock className="touch-icon" />

            <div>
              <h3>Hours</h3>
              <p>Mon–Fri: 12PM–11PM</p>
              <p>Sat–Sun: 11AM–12AM</p>
            </div>
          </div>

        </div>


        {/* RIGHT SIDE FORM */}
        <div className="get-touch-form">

          <div className="touch-row">

            <input
              type="text"
              placeholder="Your Name"
            />

            <input
              type="email"
              placeholder="Your Email"
            />

          </div>


          <input
            type="text"
            placeholder="Subject"
          />


          <textarea
            placeholder="Your Message"
          ></textarea>


          <button type="button">
            Send Message
          </button>

        </div>

      </div>

    </section>
  );
}

export default GetInTouch;
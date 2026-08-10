import "./Tablebooking.css";
import foodImage from "../assets/interior.png";

function TableBooking() {
  return (
    <section
      className="booking-section"
      style={{ backgroundImage: `url(${foodImage})` }}
    >
      <div className="booking-overlay"></div>

      <div className="booking-container">

        {/* Left Content */}
        <div className="booking-content">
          <h1>
            Reserve Your Table for a
            <br />
            Night by the Fire
          </h1>

          <p>
            Book ahead and settle into an evening of smoke-kissed dishes,
            slow-cooked spice, and warm firelight — a table set for lingering.
          </p>
        </div>

        {/* Reservation Form */}
        <div className="booking-form">

          <input
            type="text"
            placeholder="Your Name"
          />

          <input
            type="email"
            placeholder="Your Email Address"
          />

          <input
            type="tel"
            placeholder="Phone Number"
          />

          <input
            type="datetime-local"
          />

          <input
            type="number"
            placeholder="Number of Guests"
            min="1"
          />

          <button type="button">
            MAKE RESERVATION
          </button>

        </div>

      </div>
    </section>
  );
}

export default TableBooking;
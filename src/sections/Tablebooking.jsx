import "./Tablebooking.css";
import foodImage from "../assets/interior.png";
import { useState } from "react";

function TableBooking() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    dateTime: "",
    guests: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !formData.name ||
      !formData.email ||
      !formData.phone ||
      !formData.dateTime ||
      !formData.guests
    ) {
      alert("Please fill in all fields.");
      return;
    }

    alert(
      `Reservation Confirmed!\n\nName: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\nGuests: ${formData.guests}`
    );

    // Clear form
    setFormData({
      name: "",
      email: "",
      phone: "",
      dateTime: "",
      guests: "",
    });
  };

  return (
    <section
      className="booking-section"
      style={{ backgroundImage: `url(${foodImage})` }}
    >
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
        <form className="booking-form" onSubmit={handleSubmit}>

          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
          />

          <input
            type="email"
            name="email"
            placeholder="Your Email Address"
            value={formData.email}
            onChange={handleChange}
          />

          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            value={formData.phone}
            onChange={handleChange}
          />

          <input
            type="datetime-local"
            name="dateTime"
            value={formData.dateTime}
            onChange={handleChange}
          />

          <input
            type="number"
            name="guests"
            placeholder="Number of Guests"
            min="1"
            value={formData.guests}
            onChange={handleChange}
          />

          <button type="submit">
            MAKE RESERVATION
          </button>

        </form>

      </div>
    </section>
  );
}

export default TableBooking;
import { useState } from "react";
import { FaUserCircle } from "react-icons/fa";
import "./Stats.css";

function Stats()
{
    const reviews = [
    {
      text: "Every dish felt like it had a story behind it — smoky, rich, and unforgettable.",
      name: "Sarah Johnson",
      role: "Food Blogger",
    },
    {
      text: "Warm hospitality and food that actually lives up to the atmosphere.",
      name: "Ahmed Khan",
      role: "Regular Guest",
    },
    {
      text: "The truffle pasta alone is worth the visit.A hidden gem.",
      name: "Emma Davis",
      role: "Local Reviewer",
    },
    {
      text: "From the firelight glow to the last bite, everything feels intentional.",
      name: "Daniel Rim",
      role: "CEO,Founder",
    },
    {
      text: "Best meal I've had in Islamabad,hands down.The ambiance alone is worth it.",
      name: "Labla Ahmed",
      role: "Traveler",
    },
    {
      text: "As someone who cooks professionally,I respect the patience in every dish here.",
      name: "Farooq Umer",
      role: "Chef",
    },
    {
      text: "Every plate is a photograph writing to happen. Stunning presentation.",
      name: "Hannan Jee",
      role: "Photographer",
    },
    {
      text: "The staff remembers our order every time. That kind of care is rare.",
      name: "Bilal hussain",
      role: "Regular Guest",
    },
    {
      text: "A rare balance of bold flavour and quiet elegance in the room itself.",
      name: "Grace Miller",
      role: "Food Critic",
    },
    {
      text: "Our go-to spot for client dinners. Never disappoints.",
      name: "Faisal Malik",
      role: "Business Owner",
    },
    {
      text: "Affordable enough for a treat,special enough for a celebration.",
      name: "Sarah Iqbal",
      role: "Student",
    },
    {
      text: "The lamb chops are worth crossing th city for. Truly memorable",
      name: "Ahsan Raza",
      role: "Local Guest",
    },
  ];

    const data = [
    {
      number: "20+",
      title: "YEARS OF SERVICE",
    },
    {
      number: "15K+",
      title: "HAPPY GUESTS",
    },
    {
      number: "30",
      title: "SIGNATURE DISHES",
    },
    {
      number: "6",
      title: "AWARDS WON",
    },
  ];
   const [current, setCurrent] = useState(0);
   return(
  <section className="review-section">
      <div className="review-content">
        <p className="review-text">
          "{reviews[current].text}"
        </p>
        <FaUserCircle className="review-icon" />
        <h2>{reviews[current].name}</h2>
        <span>{reviews[current].role}</span>
        <div className="dots">
          {reviews.map((_, index) => (
            <span
              key={index}
              className={current === index ? "dot active" : "dot"}
              onClick={() => setCurrent(index)}
            ></span>
          ))}
        </div>
      </div>
      <div className="stats-box">
        {data.map((item, index) => (
          <div className="stat" key={index}>
            <h2>{item.number}</h2>
            <p>{item.title}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
export default Stats;
import { useState } from "react";
import { FaUserCircle } from "react-icons/fa";
import "./Stats.css";

import { testimonials as reviews, statsData as data } from "../data";

function Stats()
{
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
import {useState} from "react";

import "./Review.css";
import { FaUserCircle } from "react-icons/fa";

function Review()
{

  const reviews = [
    {
      id: 0,
      text: "Every dish felt like it had a story behind it — smoky, rich, and unforgettable. The best meal we've had in Islamabad this year.",
      name: "Sarah Johnson",
      role: "Food Blogger",
    },
    {
      id: 1,
      text: "Warm hospitality,beautiful ambiance, and food that actually lives up to the atmosphere.We'll be back with the whole family.",
      name: "Ahmed Khan",
      role: "Regular Guest",
    },
    {
      id: 2,
      text: "The truffle pasta alone is worth the visit.A hidden gem with the kind of attention to detail you rarely find anyone.",
      name: "Emily David",
      role: "Local Reviewer",
    },
    {
      id: 3,
      text: "From the firelight glow to the last bite of dessert,everything about this place feels international and cared for.",
      name: "Michael Smith",
      role: "CEO,Founder",
    },
  ];

  const [active,setActive] = useState(0);

    return(
    <section className="review">
        <div className="review-content">
            <h2>Customer Reviews</h2>
            <p className="review-text">
                 "{reviews[active].text}"
            </p>
        <div className="review-user">
            <FaUserCircle className="user-icon" />
            <h3>{reviews[active].name}</h3>
            <span>{reviews[active].role}</span> 
        </div>
        <div className="review-dots">
        {reviews.map((review) => (
        <span
        key={review.id}
        className={active === review.id ? "active" : ""}
        onClick={() => setActive(review.id)}
        ></span>
         ))}
        </div>
    </div>

</section>
);
}
export default Review;
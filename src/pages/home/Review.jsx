import {useState} from "react";

import "./Review.css";
import { FaUserCircle } from "react-icons/fa";

import { reviews } from "../../data";

function Review()
{
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
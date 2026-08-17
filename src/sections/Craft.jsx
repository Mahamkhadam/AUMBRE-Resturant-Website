import "./Craft.css";
import { Link } from "react-router-dom";

function Craft() {
  return (
    <section className="craft-section">
      <div className="craft-content">

        <h2>The Craft Behind the Table</h2>

        <p>
          Every memorable dish begins with passion, precision, and people
          who truly love what they do. Our culinary team brings together
          experience, creativity, and a deep respect for every ingredient.
        </p>

        <Link to="/chefs" className="craft-link">
          Meet the Chefs <span>→</span>
        </Link>

      </div>
    </section>
  );
}

export default Craft;
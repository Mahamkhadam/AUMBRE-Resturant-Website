import "./Legacy.css";
import img from "../assets/preview.png";
import { Link } from "react-router-dom";

function Legacy()
{
    return(
        <section className="legacy-section">
        <div className="legacy-container">
        <div className="legacy-content">
          <h2>
          Slow food, made
          <br />
            since 2004
          </h2>

      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Quos qui animi error cum hic quam, laudantium consequatur
        sequi ad in voluptate fugit nisi impedit quasi, omnis quas
        minima! Fugiat, molestias.
      </p>

      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Rem reiciendis aut repellendus laudantium libero quisquam
        inventore amet. Culpa, asperiores nihil architecto aspernatur,
        quo suscipit reiciendis, ipsum cumque hic animi voluptates?
      </p>

      <Link to="/menu">
        <button className="legacy-btn">
          View Menu
        </button>
      </Link>

    </div>

    <div className="legacy-img">
      <img
        src={img}
        alt="Restaurant Food"
      />
    </div>

  </div>
</section>
    )
}
export default Legacy;
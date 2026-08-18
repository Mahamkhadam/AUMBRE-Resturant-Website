import { useState } from "react";
import "./Feast.css";

import { feastCategories, feastItems } from "../../data";

function Feast() {
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = feastCategories;

  const filteredImages =
    activeCategory === "All"
      ? feastItems
      : feastItems.filter(
          (item) => item.category === activeCategory
        );

  return (
  <section className="feast-section">

    <div className="feast-categories">

      {categories.map((category) => (
        <button
          key={category}
          className={
            activeCategory === category
              ? "feast-btn active"
              : "feast-btn"
          }
          onClick={() => setActiveCategory(category)}
        >
          {category}
        </button>
      ))}

    </div>


    <div className="feast-grid">

      {filteredImages.map((item) => (
        <div className="feast-card" key={item.id}>

          <img
            src={item.image}
            alt="Restaurant gallery"
          />

        </div>
      ))}

    </div>

  </section>
);
}

export default Feast;
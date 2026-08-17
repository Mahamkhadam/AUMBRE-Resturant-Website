import { useState } from "react";
import "./Signature.css";

import { menuCategories, menuItems } from "../data";


function Signature() {

  const [activeCategory, setActiveCategory] = useState("All");

  const filteredItems =
    activeCategory === "All"
      ? menuItems
      : menuItems.filter(
          (item) => item.category === activeCategory
        );


  return (
    <section className="signature-menu">

      {/* CATEGORY BUTTONS */}

      <div className="menu-categories">

        {categories.map((category) => (

          <button
            key={category}
            className={
              activeCategory === category
                ? "category-btn active"
                : "category-btn"
            }
            onClick={() => setActiveCategory(category)}
          >
            {category}
          </button>

        ))}

      </div>


      {/* MENU CARDS */}

      <div className="menu-grid">

        {filteredItems.map((item) => (

          <div
            className="menu-card"
            key={item.id}
          >

            <div className="menu-image">

              <img
                src={item.image}
                alt={item.name}
              />

              {item.chefPick && (
                <span className="chef-pick">
                  CHEF'S PICK
                </span>
              )}

            </div>


            <div className="menu-content">

              <h3>{item.name}</h3>

              <p>
                {item.category} • {item.calories}
              </p>

              <span className="menu-price">
                {item.price}
              </span>

            </div>

          </div>

        ))}

      </div>

    </section>
  );
}

export default Signature;
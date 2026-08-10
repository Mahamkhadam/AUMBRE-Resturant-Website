import { useState } from "react";
import "./Feast.css";

import food1 from "../assets/Grilled-chicken.png";
import food2 from "../assets/main3.png";
import food3 from "../assets/main2.png";
import food4 from "../assets/main1.png";

import starter1 from "../assets/Starter.png";
import starter2 from "../assets/Starter1.png";
import starter3 from "../assets/Starter2.png";
import starter4 from "../assets/Starter3.png";

import dessert1 from "../assets/Dessert1.png";
import dessert2 from "../assets/Dessert2.png";
import dessert3 from "../assets/Dessert3.png";
import dessert4 from "../assets/Dessert4.png";

import drink1 from "../assets/Drink1.png";
import drink2 from "../assets/Drink2.png";
import drink3 from "../assets/Drink3.png";
import drink4 from "../assets/Drink4.png";
import hero from "../assets/hero-img.png";
import choose from "../assets/choose.png";
import interior from "../assets/preview.png";

function Feast() {
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = [
    "All",
    "Food",
    "Interior",
    "Drinks",
    "Desserts",
  ];

  const feastItems = [
    {
      id: 1,
      image: food1,
      category: "Food",
    },
    {
      id: 2,
      image: food2,
      category: "Food",
    },
    {
      id: 3,
      image: starter1,
      category: "Food",
    },
    {
      id: 4,
      image: starter2,
      category: "Food",
    },
    {
      id: 5,
      image: food3,
      category: "Food",
    },
    {
      id: 6,
      image: food4,
      category: "Food",
    },
    {
      id: 7,
      image: hero,
      category: "Interior",
    },
    {
      id: 8,
      image: interior,
      category: "Interior",
    },
    {
      id: 9,
      image: food2,
      category: "Food",
    },
    {
      id: 10,
      image: choose,
      category: "Interior",
    },
    {
      id: 11,
      image: dessert1,
      category: "Desserts",
    },
    {
      id: 12,
      image: dessert2,
      category: "Desserts",
    },
    {
      id: 13,
      image: dessert3,
      category: "Desserts",
    },
    {
      id: 14,
      image: dessert4,
      category: "Desserts",
    },
    {
      id: 15,
      image: starter3,
      category: "Food",
    },
    {
      id: 16,
      image: starter4,
      category: "Food",
    },
    {
      id: 17,
      image: food1,
      category: "Food",
    },
    {
      id: 18,
      image: food2,
      category: "Food",
    },
    {
      id: 19,
      image: drink3,
      category: "Food",
    },
    {
      id: 20,
      image: drink1,
      category: "Food",
    },
    {
      id: 21,
      image: drink2,
      category: "Food",
    },
    {
      id: 23,
      image: drink4,
      category: "Food",
    },
  ];

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
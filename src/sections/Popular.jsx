import { useState } from "react";
import "./Popular.css";

import {
  popularCategories,
  drinks,
  desserts,
  starters,
  mainCourse,
} from "../data";
const Popular = () => {

  const [active, setActive] = useState("Beverages");

  let items = [];

  if (active === "Beverages") 
    {
    items = drinks;
  } 
  else if (active === "Desserts") {
    items = desserts;
  }
   else if (active === "Main Course") {
    items = mainCourse;
  }
   else {
    items = starters;
  }

  return (
    <section className="popular">

      {/* Left Sidebar */}
      <div className="left">
        <p className="small-title">SELECT YOUR MEAL</p>

        <h2>Popular Categories</h2>

        {popularCategories.map((item) => (
          <button
            key={item}
            className={active === item ? "active" : ""}
            onClick={() => setActive(item)}
          >
            {item}
          </button>
        ))}
      </div>

      {/* Right Content */}
      <div className="right">
        <h1>{active}</h1>

        <div className="cards">
          {items.map((item) => (
            <div className="card" key={item.id}>
              <img src={item.image} alt={item.title} />

              <div className="content">
                <h3>{item.title}</h3>
                <span>Rs. {item.price}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

    </section>
  );
};

export default Popular;
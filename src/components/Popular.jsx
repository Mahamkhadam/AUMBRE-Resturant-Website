import { useState } from "react";
import "./Popular.css";

import coffee from "../assets/Drink3.png";
import smoothie from "../assets/Drink2.png";
import lemonade from "../assets/Drink4.png";
import chocolate from "../assets/Drink1.png";

import lava from "../assets/Dessert2.png";
import tiramisu from "../assets/Dessert1.png";
import cake from "../assets/Dessert3.png";
import pie from "../assets/Dessert4.png";

import starter from "../assets/Starter.png";
import salad from "../assets/Starter3.png";
import corn from "../assets/Starter2.png";
import wing from "../assets/Starter1.png";

import chicken from "../assets/Grilled-chicken.png";
import bbq from "../assets/main3.png";
import pasta from "../assets/main2.png";
import rice from "../assets/main1.png";
const Popular = () => {

  const [active, setActive] = useState("Beverages");

  const categories = [
    "Starters",
    "Main Course",
    "Desserts",
    "Beverages",
  ];

  const drinks = [
    {
      id: 1,
      image: coffee,
      title: "Iced Coffee",
      price: "500",
    },
    {
      id: 2,
      image: smoothie,
      title: "Mango Smoothie",
      price: "450",
    },
    {
      id: 3,
      image: lemonade,
      title: "Fresh Lemonade",
      price: "400",
    },
    {
      id: 4,
      image: chocolate,
      title: "Hot Chocolate",
      price: "520",
    },
  ];

  const desserts = [
    {
      id: 1,
      image: lava,
      title: "Chocolate Lava Cake",
      price: "800",
    },
    {
      id: 2,
      image: tiramisu,
      title: "Tiramisu",
      price: "900",
    },
    {
      id: 3,
      image: cake,
      title: "Cheese Cake",
      price: "700",
    },
    {
      id: 4,
      image: pie,
      title: "Apple Pie",
      price: "750",
    },
  ];

  const starters = [
    {
      id: 1,
      image: starter,
      title: "Bruschetta",
      price: "1500",
    },
    {
      id: 2,
      image: salad,
      title: "Calamari",
      price: "1000",
    },
    {
      id: 3,
      image: corn,
      title: "Caesar Salad",
      price: "980",
    },
    {
      id: 4,
      image: wing,
      title: "Chicken Wings",
      price: "1100",
    },
  ];

  const mainCourse = [
    {
      id: 1,
      image: chicken,
      title: "Grilled Chicken",
      price: "1000",
    },
    {
      id: 2,
      image: bbq,
      title: "BBQ Chicken",
      price: "1100",
    },
    {
      id: 3,
      image: pasta,
      title: "Truffle Pasta",
      price: "1200",
    },
    {
      id: 4,
      image: rice,
      title: "Fried Rice",
      price: "900",
    },
  ];

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

        {categories.map((item) => (
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
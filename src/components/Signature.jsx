import { useState } from "react";
import "./Signature.css";

// Desserts
import dish1 from "../assets/Dessert2.png";
import dish2 from "../assets/Dessert1.png";
import dish3 from "../assets/Dessert3.png";
import dish4 from "../assets/Dessert4.png";

// Starters
import dish5 from "../assets/Starter.png";
import dish6 from "../assets/Starter3.png";
import dish7 from "../assets/Starter2.png";
import dish8 from "../assets/Starter1.png";

// Main Course
import dish9 from "../assets/Grilled-chicken.png";
import dish10 from "../assets/main3.png";
import dish11 from "../assets/main2.png";
import dish12 from "../assets/main1.png";

// Beverages
import dish13 from "../assets/Drink1.png";
import dish14 from "../assets/Drink2.png";
import dish15 from "../assets/Drink3.png";
import dish16 from "../assets/Drink4.png";


function Signature() {

  const [activeCategory, setActiveCategory] = useState("All");

  const categories = [
    "All",
    "Starters",
    "Main Course",
    "Desserts",
    "Beverages",
  ];


  const menuItems = [

    // =========================
    // MAIN COURSE
    // =========================

    {
      id: 1,
      image: dish9,
      name: "Grilled Salmon",
      category: "Main Course",
      calories: "420 cal",
      price: "1100",
      chefPick: true,
    },

    {
      id: 2,
      image: dish10,
      name: "Truffle Pasta",
      category: "Main Course",
      calories: "510 cal",
      price: "900",
      chefPick: true,
    },

    {
      id: 3,
      image: dish11,
      name: "Classic Burger",
      category: "Main Course",
      calories: "650 cal",
      price: "800",
      chefPick: false,
    },

    {
      id: 4,
      image: dish12,
      name: "Margherita Pizza",
      category: "Main Course",
      calories: "580 cal",
      price: "1500",
      chefPick: false,
    },

    {
      id: 5,
      image: dish9,
      name: "BBQ Ribs",
      category: "Main Course",
      calories: "720 cal",
      price: "720",
      chefPick: true,
    },

    {
      id: 6,
      image: dish10,
      name: "Chicken Alfredo",
      category: "Main Course",
      calories: "600 cal",
      price: "700",
      chefPick: false,
    },

    {
      id: 7,
      image: dish11,
      name: "Beef Steak",
      category: "Main Course",
      calories: "780 cal",
      price: "650",
      chefPick: true,
    },

    {
      id: 8,
      image: dish12,
      name: "Vegetable Stir Fry",
      category: "Main Course",
      calories: "380 cal",
      price: "400",
      chefPick: false,
    },

    {
      id: 9,
      image: dish9,
      name: "Shrimp Scampi",
      category: "Main Course",
      calories: "490 cal",
      price: "1100",
      chefPick: true,
    },

    {
      id: 10,
      image: dish10,
      name: "Lamb Chops",
      category: "Main Course",
      calories: "690 cal",
      price: "1200",
      chefPick: true,
    },


    // =========================
    // STARTERS
    // =========================

    {
      id: 11,
      image: dish5,
      name: "Bruschetta",
      category: "Starters",
      calories: "230 cal",
      price: "800",
      chefPick: false,
    },

    {
      id: 12,
      image: dish6,
      name: "Calamari",
      category: "Starters",
      calories: "340 cal",
      price: "1000",
      chefPick: true,
    },

    {
      id: 13,
      image: dish7,
      name: "Spring Rolls",
      category: "Starters",
      calories: "260 cal",
      price: "750",
      chefPick: false,
    },

    {
      id: 14,
      image: dish8,
      name: "Garlic Bread",
      category: "Starters",
      calories: "300 cal",
      price: "600",
      chefPick: false,
    },

    {
      id: 15,
      image: dish5,
      name: "Caesar Salad",
      category: "Starters",
      calories: "280 cal",
      price: "900",
      chefPick: true,
    },

    {
      id: 16,
      image: dish6,
      name: "Mushroom Soup",
      category: "Starters",
      calories: "250 cal",
      price: "900",
      chefPick: false,
    },

    {
      id: 17,
      image: dish7,
      name: "Onion Rings",
      category: "Starters",
      calories: "400 cal",
      price: "670",
      chefPick: false,
    },

    {
      id: 18,
      image: dish8,
      name: "Chicken Wings",
      category: "Starters",
      calories: "480 cal",
      price: "1000",
      chefPick: true,
    },


    // =========================
    // DESSERTS
    // =========================

    {
      id: 19,
      image: dish1,
      name: "Chocolate Lava Cake",
      category: "Desserts",
      calories: "450 cal",
      price: "900",
      chefPick: true,
    },

    {
      id: 20,
      image: dish2,
      name: "Tiramisu",
      category: "Desserts",
      calories: "420 cal",
      price: "900",
      chefPick: false,
    },

    {
      id: 21,
      image: dish3,
      name: "Cheesecake",
      category: "Desserts",
      calories: "400 cal",
      price: "800",
      chefPick: true,
    },

    {
      id: 22,
      image: dish4,
      name: "Ice Cream Sundae",
      category: "Desserts",
      calories: "380 cal",
      price: "700",
      chefPick: false,
    },

    {
      id: 23,
      image: dish3,
      name: "Apple Pie",
      category: "Desserts",
      calories: "360 cal",
      price: "980",
      chefPick: true,
    },

    {
      id: 24,
      image: dish4,
      name: "Panna Cotta",
      category: "Desserts",
      calories: "340 cal",
      price: "800",
      chefPick: false,
    },


    // =========================
    // BEVERAGES
    // =========================

    {
      id: 25,
      image: dish13,
      name: "Fresh Lemonade",
      category: "Beverages",
      calories: "120 cal",
      price: "400",
      chefPick: false,
    },

    {
      id: 26,
      image: dish14,
      name: "Iced Coffee",
      category: "Beverages",
      calories: "190 cal",
      price: "500",
      chefPick: true,
    },

    {
      id: 27,
      image: dish13,
      name: "Mango Smoothie",
      category: "Beverages",
      calories: "220 cal",
      price: "600",
      chefPick: false,
    },

    {
      id: 28,
      image: dish14,
      name: "Mint Mojito",
      category: "Beverages",
      calories: "140 cal",
      price: "400",
      chefPick: false,
    },

    {
      id: 29,
      image: dish15,
      name: "Hot Chocolate",
      category: "Beverages",
      calories: "260 cal",
      price: "600",
      chefPick: false,
    },

    {
      id: 30,
      image: dish16,
      name: "Fresh Orange Juice",
      category: "Beverages",
      calories: "220 cal",
      price: "400",
      chefPick: true,
    },

  ];


  // FILTER
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
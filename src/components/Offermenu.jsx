import React from "react";
import "./Offermenu.css";
import chicken from "../assets/Grilled-chicken.png";
import pasta from "../assets/main3.png";
import burger from "../assets/Starter.png";

const Offermenu = () => {
  const Offeritems = [
    {
      id: 1,
      title: "GRILLED CHICKEN",
      image: chicken,
      description:
        "Juicy grilled chicken served with fresh vegetables and our signature sauce.",
    },
    {
      id: 2,
      title: "TRUFFLE PASTA",
      image: pasta,
      description:
        "Creamy pasta tossed with mushrooms, parmesan cheese, and truffle oil.",
    },
    {
      id: 3,
      title: "CLASSIC BURGER",
      image: burger,
      description:
        "Fresh beef patty with lettuce, tomato, cheese, and crispy fries.",
    },
  ];

  return (
    <section className="offer-container">
      <div className="offer-header">
        <h3 className="sub-title">OUR SPECIAL</h3>
        <h1 className="main-title">CARNIVORE & GASTRY OFFER</h1>
      </div>

      <div className="offer-grid">
        {Offeritems.map((item) => (
          <div className="offer-card" key={item.id}>
            <img
              src={item.image}
              alt={item.title}
              className="offer-image"
            />

            <div className="offer-content">
              <h2>{item.title}</h2>
              <p>{item.description}</p>

              <button className="read-more-btn">
                Read More
              </button>
            </div>
          </div>
        ))}
      </div>
       <div className="offer-description">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae 
            inventore voluptatibus iure error itaque numquam necessitatibus autem 
            tempore optio. Dolores voluptate consectetur quidem voluptas labore 
            delectus eligendi reprehenderit earum quaerat?
          </p>
        </div>
    </section>
  );
};

export default Offermenu;
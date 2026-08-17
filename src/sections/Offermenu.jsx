import React from "react";
import "./Offermenu.css";

import { offerItems } from "../data";

const Offermenu = () => {
  return (
    <section className="offer-container">
      <div className="offer-header">
        <h3 className="sub-title">OUR SPECIAL</h3>
        <h1 className="main-title">CARNIVORE & GASTRY OFFER</h1>
      </div>

      <div className="offer-grid">
        {offerItems.map((item) => (
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
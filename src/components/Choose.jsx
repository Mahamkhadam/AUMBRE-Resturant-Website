import React from "react";
import "./Choose.css";
import taste from "../assets/Taste.png";
import chefs from "../assets/Chef.png";
import delivery from "../assets/Delivery.png";
import discount from "../assets/Discount.png";
const Choose = () => {
  const features = [
    {
      id: 1,
      img:taste,
      title: "TASTE MATTERS",
      description: "Use this space to promote the business, its dishes or its services.",
    },
    {
      id: 2,
      img:chefs,
      title: "THE BEST CHEFS",
      description: "Use this space to promote the business, its dishes or its services.",
    },
    {
      id: 3,
      img:discount,
      title: "DISCOUNTS",
      description: "Use this space to promote the business, its dishes or its services.",
    },
    {
      id: 4,
      img:delivery,
      title: "EXPRESS DELIVERY",
      description: "Use this space to promote the business, its dishes or its services.",
    },
  ];

  return (
    <section className="choose-container">
      <div className="choose-overlay"></div>
      <div className="choose-wrapper">
        <div className="choose-header">
          <h2 className="choose-title">Why People Choose Us?</h2>
          <p className="choose-subtitle">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti quod omnis 
            fugiat deleniti ipsam soluta, illo necessitatibus officia et natus voluptatum 
            assumenda repellendus nobis dolores delectus totam dignissimos tempora enim.
          </p>
        </div>

        {/* Features Grid */}
        <div className="choose-grid">
          {features.map((feature) => (
            <div className="choose-card" key={feature.id}>
             <div className="choose-img">
            <img
            src={feature.img}
            alt={feature.title}
            className="choose-icon"
           />
            </div>
              <h3 className="choose-feature-title">{feature.title}</h3>
              <p className="choose-feature-desc">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Choose;
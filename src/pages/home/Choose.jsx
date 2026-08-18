import React, { useState } from "react";
import "./Choose.css";

import { chooseFeatures } from "../../data";

const Choose = () => {

  const [activeCard, setActiveCard] = useState(null);

  // Card click function
  const handleCardClick = (id) => {
    setActiveCard(id);
  };

  return (
    <section className="choose-container">

      <div className="choose-overlay"></div>

      <div className="choose-wrapper">

        {/* Header */}
        <div className="choose-header">

          <h2 className="choose-title">
            Why People Choose Us?
          </h2>

          <p className="choose-subtitle">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Corrupti quod omnis fugiat deleniti ipsam soluta, illo
            necessitatibus officia et natus voluptatum assumenda
            repellendus nobis dolores delectus totam dignissimos
            tempora enim.
          </p>

        </div>

        {/* Features Grid */}
        <div className="choose-grid">

          {chooseFeatures.map((feature) => (

            <div
              className={`choose-card ${
                activeCard === feature.id ? "active" : ""
              }`}
              key={feature.id}
              onClick={() => handleCardClick(feature.id)}
            >

              <div className="choose-img">

                <img
                  src={feature.img}
                  alt={feature.title}
                  className="choose-icon"
                />

              </div>

              <h3 className="choose-feature-title">
                {feature.title}
              </h3>

              <p className="choose-feature-desc">
                {feature.description}
              </p>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
};

export default Choose;
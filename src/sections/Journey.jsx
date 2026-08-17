import "./Journey.css";

import { journeyData as data } from "../data";

function Journey() {

  return (
    <section className="journey-section">

      <div className="journey-content">
        <h1>Our Journey</h1>
      </div>

      <div className="journey-box">
        {data.map((item, index) => (
          <div className="stat" key={index}>
            <h2>{item.number}</h2>
            <p>{item.title}</p>
          </div>
        ))}
      </div>

    </section>
  );
}

export default Journey;
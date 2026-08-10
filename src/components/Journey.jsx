import "./Journey.css";

function Journey() {
  const data = [
    {
      number: "2004",
      title: "Opened as a small family kitchen with six tables.",
    },
    {
      number: "2011",
      title: "Expanded the dining room, added our signature wood-fire grill.",
    },
    {
      number: "2017",
      title: "Named one of the city's top dining spots for three years running.",
    },
    {
      number: "2024",
      title: "Two decades in, still family-run, still slow-cooked.",
    },
  ];

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
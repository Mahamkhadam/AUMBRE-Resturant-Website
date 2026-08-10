import "./Journal.css";

import food1 from "../assets/Grilled-chicken.png";
import food2 from "../assets/main3.png";
import food3 from "../assets/main2.png";
import dessert from "../assets/Dessert1.png";
import food4 from "../assets/Starter.png";

function Journal() {
  const posts = [
    {
      id: 1,
      image: food1,
      category: "KITCHEN",
      title: "The Art of Slow Cooking",
      description:
        "Why patience is the secret ingredient behind every great dish we serve.",
      date: "June 12, 2026",
    },
    {
      id: 2,
      image: food2,
      category: "SOURCING",
      title: "Sourcing from Local Farms",
      description:
        "A look inside our relationships with the growers behind our freshest ingredients.",
      date: "May 28, 2026",
    },
    {
      id: 3,
      image: food3,
      category: "KITCHEN",
      title: "The Art of Slow Cooking",
      description:
        "Why patience is the secret ingredient behind every great dish we serve.",
      date: "June 12, 2026",
    },
    {
      id: 4,
      image: dessert,
      category: "CHEFS",
      title: "A Chef's Guide to Spice",
      description:
        "Marco walks through the spice blends that define our menu's character.",
      date: "May 18, 2026",
    },
    {
      id: 5,
      image: food1,
      category: "KITCHEN",
      title: "The Art of Slow Cooking",
      description:
        "Why patience is the secret ingredient behind every great dish we serve.",
      date: "April 30, 2026",
    },
    {
      id: 6,
      image: food2,
      category: "SOURCING",
      title: "Sourcing from Local Farms",
      description:
        "A look inside our relationships with the growers behind our freshest ingredients.",
      date: "April 15, 2026",
    },
   {
    id: 7,
    image: food3,
    category: "KITCHEN",
    title: "Cooking With Fire",
    description:
      "How our wood-fire grill adds a rich, smoky character to our signature dishes.",
    date: "March 10, 2026",
  },

  {
    id: 8,
    image: dessert,
    category: "DESSERTS",
    title: "The Sweet Side of Aumbre",
    description:
      "A closer look at the desserts created to bring a perfect ending to your meal.",
    date: "February 22, 2026",
  },
 {
    id: 9,
    image: food1,
    category: "CHEFS",
    title: "Inside Our Kitchen",
    description:
      "Meet the passionate team behind the flavors, aromas, and experiences at Aumbre.",
    date: "February 08, 2026",
  },
  ];

  return (
    <section className="journal-section">

      <div className="journal-grid">

        {posts.map((post) => (
          <article className="journal-card" key={post.id}>

            <div className="journal-image">
              <img src={post.image} alt={post.title} />
            </div>

            <div className="journal-content">

              <span className="journal-category">
                {post.category}
              </span>

              <h2>{post.title}</h2>

              <p>{post.description}</p>

              <span className="journal-date">
                {post.date}
              </span>

            </div>

          </article>
        ))}

      </div>

    </section>
  );
}

export default Journal;
import "./Story.css";
import StoryImg from "../assets/preview.png";
import { useState } from "react";

function Story() {
  const [showMore, setShowMore] = useState(false);

  const handleReadMore = () => {
    setShowMore(!showMore);
  };

  return (
    <section className="story-section">

      {/* Story Image */}
      <div className="story-image">
        <img src={StoryImg} alt="Our Story" />
      </div>

      {/* Story Content */}
      <div className="story-content">

        <h2>Our Story</h2>

        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Ullam necessitatibus ratione molestiae.
        </p>

        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Temporibus ad officiis dolores.
        </p>

        {/* Extra Content */}
        {showMore && (
          <p className="extra-story">
            Our restaurant brings together traditional flavors,
            warm hospitality, and carefully prepared dishes.
            Every meal is created with passion to give our guests
            a memorable dining experience.
          </p>
        )}

        <button
          className="read-more"
          onClick={handleReadMore}
        >
          {showMore ? "Read Less ←" : "Read More →"}
        </button>

      </div>

    </section>
  );
}

export default Story;
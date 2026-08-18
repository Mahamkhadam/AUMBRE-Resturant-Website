import "./Journal.css";

import { posts } from "../../data";

function Journal() {

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
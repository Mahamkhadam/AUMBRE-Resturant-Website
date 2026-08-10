import "./Story.css"
import StoryImg from "../assets/preview.png";

function Story()
{
   return(
        <section className="story">
        <div className="story-img">
            <img src={StoryImg} alt="img"/>
        </div>
        <div className="story-content">
        <h2>Our Story</h2>
        <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Ullam necessitatibus ratione molestiae.</p>
        <p> Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Temporibus ad officiis dolores.</p>

          <a href="/">Read More →</a>
        </div>
        </section>
);
}
export default Story;
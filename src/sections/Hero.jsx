import "./Hero.css";
import { Link } from "react-router-dom";

function Hero()
{
    return(
    <section className="hero">
      <div className="overlay"></div>
      <div className="hero-content">
        <h1>Savor the 
        <br/> Firelight
        </h1>
        <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
          <br />
        Recusandae earum tenetur animi officiis nihil.
        </p>
        <Link to="/reserve"><button className="hero-btn">Reserve a Table</button></Link>x   
      </div>
      
    </section>
);
}
export default Hero;
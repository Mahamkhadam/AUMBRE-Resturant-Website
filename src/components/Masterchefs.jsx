import React from "react";
import "./Masterchefs.css";
import chef1 from "../assets/man1.png";
import chef2 from "../assets/man2.png";
import chef3 from "../assets/man3.png";
import chef4 from "../assets/man4.png";
import chef5 from "../assets/man5.png";
import chef6 from "../assets/man6.png";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";

const Masterchefs = () =>{
    const chefs =[
        {
            id:1,
            image:chef1,
            name:"Marco Rossi",
            role:"Head Chef",
            exp: "15 Years • Italian Cuisine",
            desc:"Marco trained in Rome before bringing authentic Italian flavours with modern cooking techniques.",
        },
        {
            id:2,
            image:chef2,
            name:"Maz Chen",
            role:"Pastry Chef",
            exp: "10 Years • Desserts & Baking",
            desc:"Maz creates delicious desserts with elegant presentation and rich flavours.",
        },
        {
            id:3,
            image:chef3,
            name:"James Carter",
            role:"Sous Chef",
            exp: "8 Years • Grill & BBQ",
            desc:"James specializes in grilled dishes and smoky barbecue recipes.",
        },
        {
            id:4,
            image:chef4,
            name:"Amar Khan",
            role:"Sushi Chef",
            exp: "12 Years • Japanese Cuisine",
            desc:"Amar prepares authentic sushi and seafood with perfection.",
        },
        {
            id:5,
            image:chef5,
            name:"Oliver Smith",
            role:"Executive Chef",
            exp: "18 Years • Fine Dining",
            desc:"Oliver designs premium menus inspired by European cuisine.",
        },
        {
            id:6,
            image:chef6,
            name:"Noah Wilson",
            role:"Grill Master",
            exp: "9 Years • Steak House",
            desc: "Noah is famous for perfectly grilled steaks and BBQ platters.",
        },  
    ];
    return (
     <section className="chef-section">
        <div className="chef-grid">
           {chefs.map((chef) => (
                <div className="chef-card" key={chef.id}>
                <img src={chef.image} alt={chef.name} />
                <div className="chef-content">
                <h3>{chef.name}</h3>
                <h4>{chef.role}</h4>
                <span>{chef.exp}</span>
                <p>{chef.desc}</p>
                 <div className="chef-icons">
                  <FaFacebookF />
        <FaInstagram />
        <FaLinkedinIn />
      </div>
    </div>
  </div>
))}
        </div>
     </section>
    );
}
export default Masterchefs;
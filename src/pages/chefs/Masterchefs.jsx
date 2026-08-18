import React from "react";
import "./Masterchefs.css";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";

import { chefs } from "../../data";

const Masterchefs = () =>{
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
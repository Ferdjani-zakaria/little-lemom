import React from "react";
import "./hero.css";
import restaurantFood from "../../assets/restauranfood.jpg";
import { Link } from "react-router-dom";

const Hero = () => {
    return (
        <section className="heroSection">
            <div className="hero">
                <div className="hero_text">
                    <h1 className="hero-title">Little lemon</h1>
                    <h2>Chicago</h2>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa tempore beatae numquam repudiandae, ut tempora eum
                        nisi aut?
                    </p>
                    <Link to="/booking">
                        <button className="prime-btn">Reserve a Table</button>
                    </Link>
                </div>
                <div className="hero_imgContainer">
                    <img src={restaurantFood} alt="" className="foodImg" />
                </div>
            </div>
        </section>
    );
};

export default Hero;

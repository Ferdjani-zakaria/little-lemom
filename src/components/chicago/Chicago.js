import React from "react";
import "./chicago.css";
import restaurantChef1 from "../../assets/restaurant chef B.jpg";
import restaurantChef2 from "../../assets/Mario and Adrian A.jpg";

function Chicago() {
    return (
        <section className="chicagoSection" id="about">
            <div className="chicago">
                <div className="chicago_text">
                    <h1 className="chicago-title">Little lemon</h1>
                    <h2>Chicago</h2>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa tempore beatae numquam repudiandae, ut tempora eum
                        nisi aut?
                    </p>
                </div>
                <div className="chicago_imgContainer">
                    <img src={restaurantChef1} alt="" className="chefImg1" />
                    <img src={restaurantChef2} alt="" className="chefImg2" />
                </div>
            </div>
        </section>
    );
}

export default Chicago;

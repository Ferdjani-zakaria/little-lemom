import React from "react";
import { Link } from "react-router-dom";
import "./dishCard.css";
import icon from "../../assets/Dishicon.svg";

function DishCard(props) {
    return (
        <div className="dishCard">
            <img src={props.img} alt="" className="dishImg" />
            <div className="dishInfo">
                <div className="dishTitle">
                    <h6 className="dishName">{props.name}</h6>
                    <p className="price">${props.price} </p>
                </div>
                <p className="dishDescription">{props.description}</p>
                <Link to="/delivery" className="link">
                    <p>Order a delivery</p>
                    <img src={icon} alt="" />
                </Link>
            </div>
        </div>
    );
}

export default DishCard;

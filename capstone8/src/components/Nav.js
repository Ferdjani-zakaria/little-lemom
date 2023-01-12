import React from "react";
import "./css/nav.css";
import logo from "../assets/Logo .svg";

const Nav = () => {
    return (
        <div className="navContainer">
            <img src={logo} alt="logo" />
            <ul>
                <li>
                    <a href="#">Home</a>
                </li>
                <li>
                    <a href="#">About</a>
                </li>
                <li>
                    <a href="#">Menu</a>
                </li>
                <li>
                    <a href="#">Reservations</a>
                </li>
                <li>
                    <a href="#">Order Online</a>
                </li>
                <li>
                    <a href="#">Login</a>
                </li>
            </ul>
        </div>
    );
};

export default Nav;

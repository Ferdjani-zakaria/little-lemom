import React from "react";
import "./css/nav.css";
import logo from "../assets/Logo .svg";
import { Link } from "react";

const Nav = () => {
    return (
        <nav className="navContainer">
            <img src={logo} alt="logo" />
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <a href="#chicago">About</a>
                </li>
                <li>
                    <a href="#specials">Menu</a>
                </li>
                <li>
                    <Link to="/booking">Reservations</Link>
                </li>
                <li>
                    <a href="#">Order Online</a>
                </li>
                <li>
                    <a href="#">Login</a>
                </li>
            </ul>
        </nav>
    );
};

export default Nav;

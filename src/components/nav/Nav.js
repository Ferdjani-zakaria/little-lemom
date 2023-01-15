import React from "react";
import "./nav.css";
import logo from "../../assets/Logo .svg";
import { Link } from "react-router-dom";

const Nav = () => {
    return (
        <div className="navContainer">
            <nav>
                <img src={logo} alt="logo" />
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="#about">About</Link>
                    </li>
                    <li>
                        <Link to="/#specials">Menu</Link>
                    </li>
                    <li>
                        <Link to="/booking">Reservations</Link>
                    </li>
                    <li>
                        <Link to="/delivery">Order Online</Link>
                    </li>
                    <li>
                        <Link to="/">Login</Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default Nav;

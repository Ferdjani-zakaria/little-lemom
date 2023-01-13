import React from "react";
import "./footer.css";
import restaurant from "../../assets/restaurant.jpg";
import { Link } from "react-router-dom";
const Footer = () => {
    return (
        <section className="footerSection">
            <div class="footer">
                <img src={restaurant} alt="logo" className="footer-mainImg" />
                <div className="footer_info">
                    <div>
                        <h4>Doormat Navigation</h4>
                        <ul>
                            <li>
                                <Link to="/">Home</Link>
                            </li>
                            <li>
                                <Link to="/">About</Link>
                            </li>
                            <li>
                                <Link to="/">Menu</Link>
                            </li>
                            <li>
                                <Link to="/booking">Reservations</Link>
                            </li>
                            <li>
                                <Link to="/orderOnline">Order Online</Link>
                            </li>
                            <li>
                                <Link to="/">Login</Link>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h4>Contact</h4>
                        <ul>
                            <li>
                                <a href="#">Adress</a>
                            </li>
                            <li>
                                <a href="#">Phone number</a>
                            </li>
                            <li>
                                <a href="#">Email</a>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h4>Social media Links</h4>
                        <ul>
                            <li>
                                <a href="#">Adress</a>
                            </li>
                            <li>
                                <a href="#">Phone number</a>
                            </li>
                            <li>
                                <a href="#">Email</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Footer;

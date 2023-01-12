import React from "react";
import "./css/footer.css";
import restaurant from "../assets/restaurant.jpg";
const Footer = () => {
    return (
        <div className="footer">
            <div class="footerContainer">
                <img src={restaurant} alt="logo" className="footer-mainImg" />
                <div className="footerContainer_info">
                    <div>
                        <h4>Doormat Navigation</h4>
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
        </div>
    );
};

export default Footer;

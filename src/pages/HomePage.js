import React from "react";
import Hero from "../components/hero/Hero";
import Specials from "../components/specials/Specials";
import CustomersSay from "../components/customersSay/CustomersSay";
import Chicago from "../components/chicago/Chicago";

function HomePage() {
    return (
        <React.Fragment>
            <Hero />
            <Specials />
            <CustomersSay />
            <Chicago />
        </React.Fragment>
    );
}

export default HomePage;

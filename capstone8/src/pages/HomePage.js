import React from "react";
import Hero from "../components/Hero";
import Specials from "../components/Specials";
import CustomersSay from "../components/CustomersSay";
import Chicago from "../components/Chicago";

function HomePage() {
    return (
        <>
            <Hero />
            <Specials />
            <CustomersSay />
            <Chicago />
        </>
    );
}

export default HomePage;

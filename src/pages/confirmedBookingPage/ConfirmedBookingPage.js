import React from "react";
import restaurant from "../../assets/restaurant.jpg";
function ConfirmedBooking() {
    return (
        <section
            className="bookingSection"
            style={{
                backgroundImage: `url(${restaurant})`,
            }}
        >
            <div style={{ width: "min(40%, 840px)", marginInline: "auto" }}>
                <div style={{ padding: "1rem", backgroundColor: "var(--secondary-color-4)", opacity: "0.95" }}>
                    <h1 className="hero-title">Little lemon</h1>
                    <h2>Chicago</h2>
                </div>
                <div className="formContainer">
                    <h2 style={{ marginTop: "10px" }}>your Table has been confirmed</h2>
                    <p>Date</p>
                    <p>Time</p>
                    <p>Number of guests</p>
                    <p>Occasion</p>
                </div>
            </div>
        </section>
    );
}

export default ConfirmedBooking;

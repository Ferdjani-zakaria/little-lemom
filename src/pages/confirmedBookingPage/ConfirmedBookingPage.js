import React from "react";
import restaurant from "../../assets/restaurant.jpg";
function ConfirmedBooking() {
    const reservation = JSON.parse(localStorage.getItem("reservation"));
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
                    <h2 style={{ marginTop: "10px" }}>Your reservation has been confirmed</h2>
                    <p>
                        Date: <span style={{ fontWeight: "bold", marginLeft: "4rem" }}>{reservation.date}</span>
                    </p>
                    <p>
                        Time: <span style={{ fontWeight: "bold", marginLeft: "4rem" }}>{reservation.time}</span>
                    </p>
                    <p>
                        Guests: <span style={{ fontWeight: "bold", marginLeft: "4rem" }}>{reservation.guests}</span>
                    </p>
                    <p>
                        Occasion: <span style={{ fontWeight: "bold", marginLeft: "2rem" }}>{reservation.occasion}</span>
                    </p>
                </div>
            </div>
        </section>
    );
}

export default ConfirmedBooking;

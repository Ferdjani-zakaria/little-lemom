import React from "react";
import "./bookingPage.css";
import ReservationForm from "../components/reservation_form/ReservationForm";
import restaurant from "../assets/restaurant.jpg";
function BookingPage() {
    return (
        <section
            className="bookingSection"
            style={{
                backgroundImage: `url(${restaurant})`,
            }}
        >
            <div style={{ width: "min(75%, 840px)", marginInline: "auto" }}>
                <div style={{ padding: "1rem", backgroundColor: "var(--secondary-color-4)", opacity: "0.95" }}>
                    <h1 className="hero-title">Little lemon</h1>
                    <h2>Chicago</h2>
                </div>
                <div className="formContainer">
                    <h2 style={{ marginTop: "10px" }}>Reserve your Table</h2>
                    <ReservationForm />
                </div>
            </div>
        </section>
    );
}

export default BookingPage;

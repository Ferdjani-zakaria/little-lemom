import React from "react";
import { useReducer } from "react";
import "./bookingPage.css";
import BookingForm from "../components/bookingForm/BookingForm";
import restaurant from "../assets/restaurant.jpg";

function BookingPage() {
    const reducer = (availableTimes, action) => {
        switch (action.type) {
            case "initializeTimes":
                return [initializeTimes()];
            case "updateChange":
                return [updateChange(action.payload.date)];
            default:
                return [availableTimes];
        }
    };
    const [availableTimes, dispatch] = useReducer(reducer, [{ sat: true, san: true, mon: true }]);

    const updateChange = (dateSelected) => {
        const newAvailableTimes = { ...availableTimes };
        newAvailableTimes.dateSelected = !newAvailableTimes.dateSelected;
        return newAvailableTimes;
    };

    const initializeTimes = () => {
        return { sat: true, san: true, mon: true };
    };

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
                    <h2 style={{ marginTop: "10px" }}>Book your Table</h2>
                    <BookingForm times={availableTimes} submit={dispatch} />
                </div>
            </div>
        </section>
    );
}

export default BookingPage;

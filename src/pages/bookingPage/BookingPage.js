import React from "react";
import { useReducer } from "react";
import { useNavigate } from "react-router-dom";
import "./bookingPage.css";
import BookingForm from "../../components/bookingForm/BookingForm";
import restaurant from "../../assets/restaurant.jpg";
import { fetchAPI, submitAPI } from "../../apis/api";

const reducer = (availableTimes, action) => {
    switch (action.type) {
        case "initializeTimes":
            return [...initializeTimes(action.payload.day)];
        case "updateChange":
            return [...updateChange(action.payload.daySelected)];
        default:
            return [...availableTimes];
    }
};

const initializeTimes = (day) => {
    const dayOfTheMonth = day.getDate();
    return fetchAPI(dayOfTheMonth);
};

const updateChange = (dateSelected) => {
    return fetchAPI(dateSelected);
};

function BookingPage() {
    const [availableTimes, dispatch] = useReducer(reducer, [""]);
    const navigate = useNavigate();

    const submitForm = (bookingInfo) => {
        let result = submitAPI(bookingInfo);
        if (result) {
            navigate("/booking/Confirmed");
        }
    };

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
                    <h2 style={{ marginTop: "10px" }}>Book your Table</h2>
                    <BookingForm availableTimes={availableTimes} submit={dispatch} checkForm={submitForm} />
                </div>
            </div>
        </section>
    );
}

export default BookingPage;

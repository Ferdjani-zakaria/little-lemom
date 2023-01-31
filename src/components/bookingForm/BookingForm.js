import React from "react";
import { useState, useEffect } from "react";

function BookingForm(props) {
    const availableTimes = props.availableTimes;
    const submit = props.submit;
    const checkForm = props.checkForm;
    const today = new Date();

    const [reservation, setReservation] = useState({
        date: `${today.getFullYear()}-${("0" + (today.getMonth() + 1)).slice(-2)}-${("0" + today.getDate()).slice(-2)}`,
        time: "",
        guests: 1,
        occasion: "no occasion",
    });

    const isDisabled = reservation.time === "";

    useEffect(() => {
        submit({ type: "initializeTimes", payload: { day: today.getDate() } });
    }, [submit]);

    const handleChange = (e) => {
        if (e.target.id === "res-date") {
            setReservation({ ...reservation, date: e.target.value, time: "" });
            submit({ type: "updateChange", payload: { daySelected: new Date(e.target.value).getDate() } });
        }
        if (e.target.id === "res-time") {
            setReservation({ ...reservation, time: e.target.value });
        }
        if (e.target.id === "guests") {
            setReservation({ ...reservation, guests: e.target.value });
        }
        if (e.target.id === "occasion") {
            setReservation({ ...reservation, occasion: e.target.value });
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        checkForm(reservation);
        localStorage.setItem("reservation", JSON.stringify(reservation));
        setReservation({ date: "", time: "", guests: "1", occasion: "no occasion" });
    };

    return (
        <form onSubmit={handleSubmit} style={{ display: "grid", maxWidth: "200px", gap: "20px", marginInline: "auto" }}>
            <label htmlFor="res-date">Choose date:</label>
            <input value={reservation.date} type="date" id="res-date" onChange={handleChange} />
            <label htmlFor="res-time">Choose time:</label>
            <select value={reservation.time} id="res-time" onChange={handleChange} required>
                <option key={0} defaultChecked disabled value="">
                    Select Time
                </option>
                {availableTimes.map((a, index) => (
                    <option key={index + 1} value={a}>
                        {a}
                    </option>
                ))}
            </select>
            <label htmlFor="guests">Number of guests:</label>
            <input value={reservation.guests} type="number" placeholder={1} min={1} max={10} id="guests" onChange={handleChange} required />
            <label htmlFor="occasion">Occasion:</label>
            <select value={reservation.occasion} id="occasion" onChange={handleChange}>
                <option defaultChecked value="no occasion">
                    No occasion
                </option>
                <option value="birthday">Birthday</option>
                <option value="anniversary">Anniversary</option>
            </select>
            <button type="submit" className="prime-btn" disabled={isDisabled}>
                Make your reservation
            </button>
        </form>
    );
}

export default BookingForm;

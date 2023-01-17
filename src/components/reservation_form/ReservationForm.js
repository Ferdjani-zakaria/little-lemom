import React from "react";
import { useRef, useState } from "react";

function ReservationForm(times, submit) {
    const [reservation, setReservation] = useState({ date: "", time: "", guests: "1", occasion: "no occasion" });
    const date = useRef();
    const time = useRef();
    const guests = useRef();
    const occasion = useRef();

    const handleSubmit = (e) => {
        e.preventDefault();
        setReservation({
            date: date.current.value,
            time: time.current.value,
            guests: guests.current.value,
            occasion: occasion.current.value,
        });
        submit({ type: "updateChange", payload: { ...reservation } });
        setReservation({ date: "", time: "", guests: "1", occasion: "no occasion" });
    };

    return (
        <form onSubmit={handleSubmit} style={{ display: "grid", maxWidth: "300px", gap: "20px", marginInline: "auto" }}>
            <label htmlFor="res-date">Choose date :</label>
            <input ref={date} type="date" id="res-date" aria-required />
            <label htmlFor="res-time">Choose time :</label>
            <select ref={time} id="res-time " aria-required>
                <option>17:00</option>
                <option>18:00</option>
                <option>19:00</option>
                <option>20:00</option>
                <option>21:00</option>
                <option>22:00</option>
            </select>
            <label htmlFor="guests">Number of guests :</label>
            <input ref={guests} type="number" placeholder={1} min={1} max={10} id="guests" aria-required />
            <label htmlFor="occasion">Occasion :</label>
            <select ref={occasion} id="occasion">
                <option>No occasion</option>
                <option>Birthday</option>
                <option>Anniversary</option>
            </select>
            <button type="submit" className="prime-btn">
                Make your reservation
            </button>
        </form>
    );
}

export default ReservationForm;

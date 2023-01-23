import React from "react";
import { useRef, useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";

function BookingForm(props) {
    const availableTimes = props.availableTimes;
    const submit = props.submit;
    const checkForm = props.checkForm;
    const today = new Date();

    const [reservation, setReservation] = useState({ date: "", time: "", guests: 1, occasion: "no occasion" });
    const [date, setdate] = useState(
        `${today.getFullYear()}-${("0" + (today.getMonth() + 1)).slice(-2)}-${("0" + today.getDate()).slice(-2)}`
    );

    const timeR = useRef();
    const guestsR = useRef();
    const occasionR = useRef();

    useEffect(() => {
        (async () => {
            submit({ type: "initializeTimes", payload: { today: new Date() } });
        })();
    }, [submit]);

    useEffect(() => {
        (async () => {
            submit({ type: "updateChange", payload: { daySelected: new Date(date).getDate() } });
        })();
    }, [date, submit]);

    const handleChange = (e) => {
        setdate(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setReservation({
            date: date,
            time: timeR.current.value,
            guests: guestsR.current.value,
            occasion: occasionR.current.value,
        });
        setReservation({ date: "", time: "", guests: "1", occasion: "no occasion" });
        checkForm(reservation);
    };

    return (
        <form onSubmit={handleSubmit} style={{ display: "grid", maxWidth: "200px", gap: "20px", marginInline: "auto" }}>
            <label htmlFor="res-date">Choose date:</label>
            <input value={date} type="date" id="res-date" onChange={handleChange} />
            <label htmlFor="res-time">Choose time:</label>
            <select ref={timeR} id="res-time">
                {availableTimes.map((a, index) => (
                    <option key={index}>{a}</option>
                ))}
            </select>
            <label htmlFor="guests">Number of guests:</label>
            <input ref={guestsR} type="number" placeholder={1} min={1} max={10} id="guests" defaultValue={1} />
            <label htmlFor="occasion">Occasion:</label>
            <select ref={occasionR} id="occasion">
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

export default BookingForm;

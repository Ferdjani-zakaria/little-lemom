import { fireEvent, render, screen } from "@testing-library/react";
import BookingForm from "./BookingForm";

describe("book a table", () => {
    let array = ["17:00", "18:00"];
    const today = new Date();

    const submitForm = jest.fn();
    const dispatch = jest.fn();

    beforeEach(() => {
        window.localStorage.clear();
    });
    test("initialize data in the inputs", () => {
        render(<BookingForm availableTimes={array} submit={dispatch} />);

        const dateInput = screen.getByLabelText("Choose date:");
        const allOptions = screen.getAllByRole("option");

        expect(dateInput).toHaveValue(
            `${today.getFullYear()}-${("0" + (today.getMonth() + 1)).slice(-2)}-${("0" + today.getDate()).slice(-2)}` //YYYY-MM-DD
        );
        expect(allOptions.length).toBe(6); // number of elements in array plus one disabled plus 3 of the occasion selection
        expect(dispatch).toHaveBeenCalledTimes(1);
    });

    test("updating the time options", () => {
        render(<BookingForm availableTimes={array} submit={dispatch} />);

        const dateInput = screen.getByLabelText("Choose date:");
        const allOptions = screen.getAllByRole("option");

        expect(allOptions.length).toBe(6); // number of elements in array plus one disabled plus 3 of the occasion selection
        expect(dispatch).toHaveBeenCalledTimes(1);
        fireEvent.change(dateInput, { target: { value: "2023-02-02" } });
        expect(dispatch).toHaveBeenCalledTimes(2);
        expect(allOptions.length).toBe(6); // number of elements in array plus one disabled plus 3 of the occasion selection
    });

    test("submit the form to localStorage", () => {
        Storage.prototype.setItem = jest.fn();
        render(<BookingForm availableTimes={array} submit={dispatch} checkForm={submitForm} />);

        const button_elem = screen.getByRole("button");
        const dateInput = screen.getByLabelText("Choose date:");
        const timeInput = screen.getByLabelText("Choose time:");
        const guestsInput = screen.getByLabelText("Number of guests:");

        fireEvent.change(dateInput, { target: { value: "2023-02-02" } });
        fireEvent.change(timeInput, { target: { value: array[1] } });
        fireEvent.change(guestsInput, { target: { value: 4 } });
        fireEvent.click(button_elem);
        expect(submitForm).toHaveBeenCalled();
        expect(localStorage.setItem).toHaveBeenCalledWith(
            "reservation",
            '{"date":"2023-02-02","time":"18:00","guests":"4","occasion":"no occasion"}'
        );
    });
});

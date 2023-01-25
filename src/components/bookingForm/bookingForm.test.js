import { fireEvent, render, screen } from "@testing-library/react";
import BookingForm from "./BookingForm";

describe("book a table", () => {
    let array = ["17:00", "18:00"];
    const today = new Date();

    const submitForm = jest.fn();
    const dispatch = jest.fn();
    test("initialize data in the inputs", () => {
        render(<BookingForm availableTimes={array} submit={dispatch} />);

        const inputElement_1 = screen.getByLabelText("Choose date:");
        const inputElement_2 = screen.getAllByRole("option");

        expect(inputElement_1).toHaveValue(
            `${today.getFullYear()}-${("0" + (today.getMonth() + 1)).slice(-2)}-${("0" + today.getDate()).slice(-2)}`
        );
        expect(inputElement_2.length).toBe(5);
        expect(dispatch).toHaveBeenCalledTimes(1);
    });

    test("updating the time options", () => {
        render(<BookingForm availableTimes={array} submit={dispatch} />);

        const inputElement_1 = screen.getByLabelText("Choose date:");
        const inputElement_2 = screen.getAllByRole("option");

        expect(inputElement_2.length).toBe(5);
        expect(dispatch).toHaveBeenCalledTimes(1);
        fireEvent.change(inputElement_1, { target: { value: "2023-02-02" } });
        expect(dispatch).toHaveBeenCalledTimes(2);
        expect(inputElement_2.length).toBe(5);
    });

    test("submit the form", () => {
        render(<BookingForm availableTimes={array} submit={dispatch} checkForm={submitForm} />);

        const button_elem = screen.getByRole("button");
        fireEvent.click(button_elem);
        expect(submitForm).toHaveBeenCalled();
    });
});

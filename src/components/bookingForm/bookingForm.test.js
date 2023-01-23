import { render, screen } from "@testing-library/react";
import BookingForm from "./BookingForm";

describe("book a table", () => {
    test("4 labels need to be displayed", () => {
        const dispatch = jest.fn();
        const submitForm = jest.fn();
        render(<BookingForm availableTimes={[""]} submit={dispatch} checkForm={submitForm} />);

        const headingElement_1 = screen.getByText("Choose date:");
        const headingElement_2 = screen.getByText("Choose time:");
        const headingElement_3 = screen.getByText("Number of guests:");
        const headingElement_4 = screen.getByText("Occasion:");

        expect(headingElement_1).toBeInTheDocument();
        expect(headingElement_2).toBeInTheDocument();
        expect(headingElement_3).toBeInTheDocument();
        expect(headingElement_4).toBeInTheDocument();
    });

    test("initialize data in the inputs", () => {
        const dispatch = jest.fn();
        const submitForm = jest.fn();
        render(<BookingForm availableTimes={[""]} submit={dispatch} checkForm={submitForm} />);

        const today = new Date();

        const inputElement_1 = screen.getByLabelText("Choose date:");
        const inputElement_2 = screen.getByLabelText("Choose time:");
        const inputElement_3 = screen.getByLabelText("Number of guests:");
        const inputElement_4 = screen.getByLabelText("Occasion:");

        expect(inputElement_1).toHaveValue(
            `${today.getFullYear()}-${("0" + (today.getMonth() + 1)).slice(-2)}-${("0" + today.getDate()).slice(-2)}`
        );
        expect(inputElement_2).toHaveValue("");
        expect(inputElement_3).toHaveValue(1);
        expect(inputElement_4).toHaveValue("No occasion");
    });
});

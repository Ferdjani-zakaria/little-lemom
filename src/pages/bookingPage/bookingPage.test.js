import { screen, render } from "@testing-library/react";
import BookingForm from "../../components/bookingForm/BookingForm";
import BookingPage from "./BookingPage";

describe("booking page", () => {
    test("initializeTimes function to validate that it returns the correct expected Page", () => {
        // render(<BookingPage />);
        const dispatch = jest.fn();
        const submitForm = jest.fn();
        render(<BookingForm availableTimes={[]} submit={dispatch} checkForm={submitForm} />);
        const headingElement_1 = screen.getByText("Choose date:");
        expect(headingElement_1).toBeInTheDocument();
    });
});

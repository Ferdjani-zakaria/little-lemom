import { screen, render } from "@testing-library/react";
import BookingPage from "./BookingPage";

describe("booking page", () => {
    test("initializeTimes function to validate that it returns the correct expected Page", () => {
        render(<BookingPage />);
        const headingElement_1 = screen.getByText("Choose date:");
        expect(headingElement_1).toBeInTheDocument();
    });
});

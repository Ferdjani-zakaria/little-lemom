import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import BookingForm from "./BookingForm";

describe("BookingForm", () => {
    let submit;
    let checkForm;
    let availableTimes;
    let today = new Date();

    beforeEach(() => {
        submit = jest.fn();
        checkForm = jest.fn();
        availableTimes = ["17:00", "17:30", "18:00"];
        window.localStorage.clear();
    });

    test("should display a form with input fields and a submit button", () => {
        render(<BookingForm submit={submit} checkForm={checkForm} availableTimes={availableTimes} />);
        const dateInput = screen.getByLabelText(/Choose date/i);
        const timeSelect = screen.getByLabelText(/Choose time/i);
        const guestsInput = screen.getByLabelText(/Number of guests/i);
        const occasionSelect = screen.getByLabelText(/Occasion/i);
        const submitButton = screen.getByText(/Make your reservation/i);

        expect(dateInput).toBeInTheDocument();
        expect(timeSelect).toBeInTheDocument();
        expect(guestsInput).toBeInTheDocument();
        expect(occasionSelect).toBeInTheDocument();
        expect(submitButton).toBeInTheDocument();
    });

    test("initialize data in the inputs", () => {
        render(<BookingForm submit={submit} checkForm={checkForm} availableTimes={availableTimes} />);

        const dateInput = screen.getByLabelText("Choose date:");
        const allOptions = screen.getAllByRole("option");

        expect(dateInput).toHaveValue(
            `${today.getFullYear()}-${("0" + (today.getMonth() + 1)).slice(-2)}-${("0" + today.getDate()).slice(-2)}` //YYYY-MM--DD
        );
        expect(allOptions.length).toBe(7); // number of elements in array plus one disabled plus 3 of the occasion selection
        expect(submit).toHaveBeenCalledTimes(1);
        expect(submit).toHaveBeenCalledWith({
            type: "initializeTimes",
            payload: { day: today.getDate() },
        });
    });

    test("should call the submit function with the proper payload when the date is changed", () => {
        render(<BookingForm submit={submit} checkForm={checkForm} availableTimes={availableTimes} />);

        const dateInput = screen.getByLabelText(/Choose date/i);

        fireEvent.change(dateInput, { target: { value: "2022-01-01" } });

        expect(submit).toHaveBeenCalledWith({
            payload: { daySelected: 1 },
            type: "updateChange",
        });
    });

    test("updating the time options", () => {
        render(<BookingForm submit={submit} checkForm={checkForm} availableTimes={availableTimes} />);

        const dateInput = screen.getByLabelText("Choose date:");
        const allOptions = screen.getAllByRole("option");

        expect(allOptions.length).toBe(7); // number of elements in array plus one disabled plus 3 of the occasion selection
        expect(submit).toHaveBeenCalledTimes(1);
        fireEvent.change(dateInput, { target: { value: "2023-02-02" } });
        expect(submit).toHaveBeenCalledTimes(2);
        expect(allOptions.length).toBe(7); // number of elements in array plus one disabled plus 3 of the occasion selection
    });

    test("should call the checkForm function with the correct reservation data when the form is submitted", () => {
        render(<BookingForm submit={submit} checkForm={checkForm} availableTimes={availableTimes} />);
        const dateInput = screen.getByLabelText(/Choose date/i);
        const timeSelect = screen.getByLabelText(/Choose time/i);
        const guestsInput = screen.getByLabelText(/Number of guests/i);
        const occasionSelect = screen.getByLabelText(/Occasion/i);
        const submitButton = screen.getByText(/Make your reservation/i);

        fireEvent.change(dateInput, { target: { value: "2022-01-01" } });
        fireEvent.change(timeSelect, { target: { value: "18:00" } });
        fireEvent.change(guestsInput, { target: { value: "5" } });
        fireEvent.change(occasionSelect, { target: { value: "birthday" } });
        fireEvent.click(submitButton);

        expect(checkForm).toHaveBeenCalledWith({
            date: "2022-01-01",
            time: "18:00",
            guests: "5",
            occasion: "birthday",
        });
    });

    test("submit the form and add information to localStorage", () => {
        Storage.prototype.setItem = jest.fn();

        render(<BookingForm submit={submit} checkForm={checkForm} availableTimes={availableTimes} />);

        const submitButton = screen.getByText(/Make your reservation/i);
        const dateInput = screen.getByLabelText(/Choose date/i);
        const timeSelect = screen.getByLabelText(/Choose time/i);
        const guestsInput = screen.getByLabelText(/Number of guests/i);

        expect(checkForm).not.toHaveBeenCalled();
        fireEvent.click(submitButton);
        expect(checkForm).not.toHaveBeenCalled();

        fireEvent.change(dateInput, { target: { value: "2023-02-02" } });
        fireEvent.change(timeSelect, { target: { value: availableTimes[1] } });
        fireEvent.change(guestsInput, { target: { value: 4 } });
        fireEvent.click(submitButton);

        expect(checkForm).toHaveBeenCalledTimes(1);
        expect(localStorage.setItem).toHaveBeenCalledWith(
            "reservation",
            '{"date":"2023-02-02","time":"17:30","guests":"4","occasion":"no occasion"}'
        );
    });
});

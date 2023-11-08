import { render, screen } from "@testing-library/react";
import BookingPage from "./components/Booking Page/BookingPage";
import {
    initializeTimes,
    updateTimes,
} from "./components/Booking Page/BookingPage";

test("Renders booking form description", () => {
    render(<BookingPage />);
    const headingElement = screen.getByText(
        "Please fill the form below accurately to enable us to serve you better!"
    );
    expect(headingElement).toBeInTheDocument();
});

test("initializeTimes returns the correct value", () => {
    const initTimes = initializeTimes();
    const expectedTimes = [
        "3:00 PM",
        "4:00 PM",
        "5:00 PM",
        "6:00 PM",
        "7:00 PM",
        "8:00 PM",
        "9:00 PM",
        "10:00 PM",
    ];
    expect(expectedTimes).toEqual(initTimes);
});

test("updateTimes returns the same value provided in state", () => {
    const initState = ["3:00 PM", "4:00 PM"];
    const action = {
        type: "UPDATE_TIMES",
        payload: ["5:00 PM", "6:00 PM"],
    };
    const result = updateTimes(initState, action);
    expect(result).toEqual(action.payload);
});

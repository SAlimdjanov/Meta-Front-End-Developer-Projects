import { render, screen, fireEvent } from "@testing-library/react";
import BookingPage from "./components/Booking Page/BookingPage";
import {
    initializeTimes,
    updateTimes,
} from "./components/Booking Page/BookingPage";
import {
    validateName,
    validateEmail,
    validatePhone,
    validateGuests,
} from "./components/Booking Page/Form/FormValidation";

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

test("Renders correct HTML5 content", () => {
    render(<BookingPage />);
    expect(screen.getByLabelText("First Name:")).toBeInTheDocument();
    expect(screen.getByLabelText("Last Name:")).toBeInTheDocument();
    expect(screen.getByLabelText("Email:")).toBeInTheDocument();
    expect(screen.getByLabelText("Phone:")).toBeInTheDocument();
    expect(screen.getByLabelText("Date:")).toBeInTheDocument();
    expect(screen.getByLabelText("Time:")).toBeInTheDocument();
    expect(screen.getByLabelText("Guests:")).toBeInTheDocument();
    expect(screen.getByLabelText("Occasion:")).toBeInTheDocument();
    expect(screen.getByText("Book Now")).toBeInTheDocument();
});

test("Names less than 2 characters are not permitted", () => {
    expect(validateName("John")).not.toEqual(validateName("S"));
    expect(validateName("John")).toEqual(validateName("Mia"));
});

test("Invalid phone numbers will not be submitted", () => {
    expect(validatePhone("1b3")).not.toEqual(validatePhone("3121234567"));
    expect(validatePhone("13")).not.toEqual(validatePhone("3121234567"));
    expect(validatePhone("1234567890")).toEqual(validatePhone("3121234567"));
});

test("Invalid emails will not be submitted", () => {
    expect(validateEmail("johnjemail.com")).not.toEqual(
        validateEmail("johnj@email.com")
    );
    expect(validateEmail("kevin@mail.co")).toEqual(
        validateEmail("johnj@email.com")
    );
});

test("Guest amount less than or equal to zero will not be accepted", () => {
    expect(validateGuests(-2)).toEqual(false);
    expect(validateGuests(0)).toEqual(false);
    expect(validateGuests(3)).toEqual(true);
});

test("Form submits valid information and resets successfully", () => {
    jest.spyOn(window, "alert").mockImplementation(() => {});
    render(<BookingPage />);
    fireEvent.change(screen.getByLabelText("First Name:"), {
        target: { value: "John" },
    });
    fireEvent.change(screen.getByLabelText("Last Name:"), {
        target: { value: "Jones" },
    });
    fireEvent.change(screen.getByLabelText("Email:"), {
        target: { value: "johnj@example.com" },
    });
    fireEvent.change(screen.getByLabelText("Phone:"), {
        target: { value: "1234567890" },
    });
    fireEvent.change(screen.getByLabelText("Date:"), {
        target: { value: "2023-11-01" },
    });
    fireEvent.change(screen.getByLabelText("Time:"), {
        target: { value: "3:00 PM" },
    });
    fireEvent.change(screen.getByLabelText("Guests:"), {
        target: { value: "2" },
    });
    fireEvent.change(screen.getByLabelText("Occasion:"), {
        target: { value: "Birthday" },
    });
    fireEvent.click(screen.getByText("Book Now"));
    expect(window.alert).toHaveBeenCalledWith(
        "Thank you for reserving a table at Little Lemon, John Jones! Please check johnj@example.com for confirmation details"
    );
    expect(screen.getByLabelText("First Name:").value).toBe("");
    expect(screen.getByLabelText("Last Name:").value).toBe("");
    expect(screen.getByLabelText("Email:").value).toBe("");
    expect(screen.getByLabelText("Phone:").value).toBe("");
    expect(screen.getByLabelText("Date:").value).toBe("");
    expect(screen.getByLabelText("Time:").value).toBe("");
    expect(screen.getByLabelText("Guests:").value).toBe("");
    expect(screen.getByLabelText("Occasion:").value).toBe("");
});

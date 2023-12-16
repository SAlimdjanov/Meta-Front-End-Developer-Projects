import "./BookingForm.css";
import React, { useState } from "react";
import "./FormValidation";
import {
    validateName,
    validateEmail,
    validatePhone,
    validateGuests,
} from "./FormValidation";

function BookingForm({ availableTimes, dispatch }) {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [date, setDate] = useState("");
    const [bookingTime, setBookingTime] = useState("");
    const [guests, setGuests] = useState("");
    const [occasion, setOccasion] = useState("");
    const [otherOccasion, setOtherOccasion] = useState("");
    const [notes, setNotes] = useState("");
    const [isDisabled, setIsDisabled] = useState(true);

    const firstAndLastNames = (
        firstName,
        setFirstName,
        lastName,
        setLastName
    ) => {
        return (
            <>
                <label htmlFor="first-name">First Name:</label>
                <input
                    aria-label="first-name-input"
                    type="text"
                    id="first-name"
                    value={firstName}
                    autoComplete="given-name"
                    placeholder="First Name"
                    onChange={(e) => handleFieldChange(setFirstName, e)}
                    required
                ></input>
                <label htmlFor="last-name">Last Name:</label>
                <input
                    aria-label="last-name-input"
                    type="text"
                    id="last-name"
                    value={lastName}
                    autoComplete="family-name"
                    placeholder="Last Name"
                    onChange={(e) => handleFieldChange(setLastName, e)}
                    required
                ></input>
            </>
        );
    };

    const emailAndPhone = (email, setEmail, phone, setPhone) => {
        return (
            <>
                <label htmlFor="email">Email: </label>
                <input
                    aria-label="email-input"
                    type="email"
                    id="email"
                    value={email}
                    name="email"
                    autoComplete="email"
                    placeholder="example@email.com"
                    required
                    onChange={(e) => handleFieldChange(setEmail, e)}
                />
                <label htmlFor="phone">Phone: </label>
                <input
                    aria-label="phone-number-input"
                    type="tel"
                    id="phone"
                    value={phone}
                    name="phone"
                    autoComplete="tel"
                    placeholder="312XXXXXXX"
                    onChange={(e) => handleFieldChange(setPhone, e)}
                    required
                />
            </>
        );
    };

    const guestsAndOccasion = (guests, setGuests, occasion, setOccasion) => {
        return (
            <>
                <label htmlFor="guests">Guests: </label>
                <input
                    aria-label="number-of-guests-input"
                    type="number"
                    placeholder="1"
                    min="1"
                    max="10"
                    id="guests"
                    value={guests}
                    onChange={(e) => handleFieldChange(setGuests, e)}
                    required
                />
                <label htmlFor="occasion">Occasion:</label>
                <select
                    aria-label="occasion-select-dropdown"
                    id="occasion"
                    value={occasion}
                    onChange={(e) => handleFieldChange(setOccasion, e)}
                    required
                >
                    <option value="" disabled>
                        Select an Occasion
                    </option>
                    <option>Birthday</option>
                    <option>Anniversary</option>
                    <option>Engagement</option>
                    <option>Other</option>
                </select>
            </>
        );
    };

    const otherOccasionSpecifier = (otherOccasion, setOtherOccasion) => {
        return (
            <>
                <label htmlFor="other-details">
                    If 'Other' occasion was selected, please specify:
                </label>
                <input
                    aria-label="other-occasion-details-input"
                    type="text"
                    id="other-details"
                    autoComplete="none"
                    value={otherOccasion}
                    onChange={(e) => setOtherOccasion(e.target.value)}
                ></input>
            </>
        );
    };

    const otherNotesAndRequests = (notes, setNotes) => {
        return (
            <>
                <label htmlFor="notes">Any other notes or requests:</label>
                <input
                    aria-label="requests-and-notes-input"
                    type="text"
                    id="notes"
                    value={notes}
                    autoComplete="none"
                    onChange={(e) => setNotes(e.target.value)}
                ></input>
            </>
        );
    };

    const handleDateChange = (e) => {
        const selectedDate = e.target.value;
        setDate(selectedDate);
        dispatch({ type: "UPDATE_TIMES", payload: selectedDate });
        formValidation();
    };

    const formValidation = () => {
        let shouldDisable = true;

        if (
            validateName(firstName) &&
            validateName(lastName) &&
            validateEmail(email) &&
            validatePhone(phone) &&
            validateGuests(guests)
        ) {
            shouldDisable = false;
        }

        setIsDisabled(shouldDisable);
    };

    const handleFieldChange = (hook, e) => {
        hook(e.target.value);
        formValidation();
    };

    const submissionSuccess = () => {
        alert(
            `Thank you for reserving a table at Little Lemon, ${firstName} ${lastName}! Please check ${email} for confirmation details`
        );
    };

    const submitHander = (e) => {
        e.preventDefault();
        // Submission Success Alert
        submissionSuccess();
        // Reset form
        setFirstName("");
        setLastName("");
        setEmail("");
        setPhone("");
        setDate("");
        setBookingTime("");
        setGuests("");
        setBookingTime("");
        setOccasion("");
        setOtherOccasion("");
        setNotes("");
        setIsDisabled(true);
    };

    return (
        <>
            <h2 className="booking-title">Reserve a Table</h2>
            <p className="booking-title">
                Please fill the form below accurately to enable us to serve you
                better!
            </p>
            <form className="reservation-form" onSubmit={submitHander}>
                <section className="personal-info">
                    {firstAndLastNames(
                        firstName,
                        setFirstName,
                        lastName,
                        setLastName
                    )}
                    {emailAndPhone(email, setEmail, phone, setPhone)}
                    <label htmlFor="res-date">Date: </label>
                    <input
                        aria-label="booking-date-selector"
                        type="date"
                        id="res-date"
                        value={date}
                        onChange={handleDateChange}
                        required
                    />
                    <label htmlFor="res-time">Time: </label>
                    <select
                        aria-label="reservation-time-dropdown"
                        id="res-time"
                        value={bookingTime}
                        onChange={(e) => handleFieldChange(setBookingTime, e)}
                        required
                    >
                        <option value="" disabled>
                            Select a time
                        </option>
                        {availableTimes.map((time, index) => (
                            <option key={index} value={time}>
                                {time}
                            </option>
                        ))}
                    </select>
                    {guestsAndOccasion(
                        guests,
                        setGuests,
                        occasion,
                        setOccasion
                    )}
                </section>
                <section className="notes-and-requests">
                    {otherOccasionSpecifier(otherOccasion, setOtherOccasion)}
                    {otherNotesAndRequests(notes, setNotes)}
                </section>
                <button
                    className="booking-button"
                    disabled={isDisabled}
                    type="submit"
                >
                    Book Now
                </button>
            </form>
        </>
    );
}

export default BookingForm;

import "./BookingForm.css";
import React, { useState } from "react";

function firstAndLastNames(firstName, setFirstName, lastName, setLastName) {
    return (
        <>
            <label htmlFor="first-name">First Name:</label>
            <input
                type="text"
                id="first-name"
                value={firstName}
                autoComplete="given-name"
                placeholder="First Name"
                onChange={(e) => setFirstName(e.target.value)}
            ></input>
            <label htmlFor="last-name">Last Name:</label>
            <input
                type="text"
                id="last-name"
                value={lastName}
                autoComplete="family-name"
                placeholder="Last Name"
                onChange={(e) => setLastName(e.target.value)}
            ></input>
        </>
    );
}

function emailAndPhone(email, setEmail, phone, setPhone) {
    return (
        <>
            <label htmlFor="email">Email: </label>
            <input
                type="email"
                id="email"
                value={email}
                name="email"
                autoComplete="email"
                placeholder="example@email.com"
                onChange={(e) => setEmail(e.target.value)}
            />
            <label htmlFor="phone">Phone: </label>
            <input
                type="tel"
                id="phone"
                value={phone}
                name="phone"
                autoComplete="tel"
                placeholder="312-XXX-XXXX"
                onChange={(e) => setPhone(e.target.value)}
            />
        </>
    );
}

function guestsAndOccasion(guests, setGuests, occasion, setOccasion) {
    return (
        <>
            <label htmlFor="guests">Guests: </label>
            <input
                type="number"
                placeholder="1"
                min="1"
                max="10"
                id="guests"
                value={guests}
                onChange={(e) => setGuests(e.target.value)}
            />
            <label htmlFor="occasion">Occasion:</label>
            <select
                id="occasion"
                value={occasion}
                onChange={(e) => setOccasion(e.target.value)}
            >
                <option>Birthday</option>
                <option>Anniversary</option>
                <option>Engagement</option>
                <option>Other</option>
            </select>
        </>
    );
}

function otherOccasionSpecifier(otherOccasion, setOtherOccasion) {
    return (
        <>
            <label htmlFor="other-details">
                If 'Other' occasion was selected, please specify:
            </label>
            <input
                type="text"
                id="other-details"
                autoComplete="none"
                value={otherOccasion}
                onChange={(e) => setOtherOccasion(e.target.value)}
            ></input>
        </>
    );
}

function otherNotesAndRequests(notes, setNotes) {
    return (
        <>
            <label htmlFor="notes">Any other notes or requests:</label>
            <input
                type="text"
                id="notes"
                value={notes}
                autoComplete="none"
                onChange={(e) => setNotes(e.target.value)}
            ></input>
        </>
    );
}

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

    const submitHander = (e) => {
        e.preventDefault();
        // For now, just output the booking info
        console.log("Reservation Confirmed! Details:");
        console.log(`First Name: ${firstName}`);
        console.log(`Last Name: ${lastName}`);
        console.log(`Email: ${email}`);
        console.log(`Phone: ${phone}`);
        console.log(`Date: ${date}`);
        console.log(`Time: ${bookingTime}`);
        console.log(`Guests: ${guests}`);
        console.log(`Other Occasion Notes: ${otherOccasion}`);
        console.log(`Notes or Requests: ${notes}`);
    };

    const handleDateChange = (e) => {
        const selectedDate = e.target.value;
        setDate(selectedDate);
        dispatch({ type: "UPDATE_TIMES", payload: selectedDate });
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
                        type="date"
                        id="res-date"
                        value={date}
                        onChange={handleDateChange}
                    />
                    <label htmlFor="res-time">Time: </label>
                    <select
                        id="res-time"
                        value={bookingTime}
                        onChange={(e) => setBookingTime(e.target.value)}
                    >
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
                <button className="booking-button" type="submit">
                    Book Now
                </button>
            </form>
        </>
    );
}

export default BookingForm;

import "./BookingForm.css";

function BookingForm() {
    return (
        <>
            <h2 className="booking-title">Reserve a Table</h2>
            <p className="booking-title">
                Please fill the form below accurately to enable us to serve you
                better!
            </p>
            <form className="reservation-form">
                <section className="personal-info">
                    <label htmlFor="first-name">First Name:</label>
                    <input
                        type="text"
                        id="first-name"
                        autoComplete="given-name"
                        placeholder="First Name"
                    ></input>
                    <label htmlFor="last-name">Last Name:</label>
                    <input
                        type="text"
                        id="last-name"
                        autoComplete="family-name"
                        placeholder="Last Name"
                    ></input>
                    <label htmlFor="email">Email: </label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        autoComplete="email"
                        placeholder="example@email.com"
                    />
                    <label htmlFor="phone">Phone: </label>
                    <input
                        type="tel"
                        id="phone"
                        name="phone"
                        autoComplete="tel"
                        placeholder="312-XXX-XXXX"
                    />
                    <label htmlFor="res-date">Date: </label>
                    <input type="date" id="res-date" />
                    <label htmlFor="res-time">Time: </label>
                    <select id="res-time">
                        <option value="15:00">3:00 PM</option>
                        <option value="16:00">4:00 PM</option>
                        <option value="17:00">5:00 PM</option>
                        <option value="18:00">6:00 PM</option>
                        <option value="19:00">7:00 PM</option>
                        <option value="20:00">8:00 PM</option>
                        <option value="21:00">9:00 PM</option>
                        <option value="22:00">10:00 PM</option>
                    </select>
                    <label htmlFor="guests">Guests: </label>
                    <input
                        type="number"
                        placeholder="1"
                        min="1"
                        max="10"
                        id="guests"
                    />
                    <label htmlFor="occasion">Occasion:</label>
                    <select id="occasion">
                        <option>Birthday</option>
                        <option>Anniversary</option>
                        <option>Engagement</option>
                        <option>Other</option>
                    </select>
                </section>
                <section className="notes-and-requests">
                    <label htmlFor="other-details">
                        If 'Other' occasion was selected, please specify:
                    </label>
                    <input
                        type="text"
                        id="other-details"
                        autoComplete="none"
                    ></input>
                    <label htmlFor="notes">Any other notes or requests:</label>
                    <input type="text" id="notes" autoComplete="none"></input>
                </section>
            </form>
            <button className="booking-button">Book Now</button>
        </>
    );
}

export default BookingForm;

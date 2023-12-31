import "./BookingPage.css";
import RestaurantImage from "./assets/Restaurant.jpg";
import RestaurantChef from "./assets/Restaurant Chef.jpg";
import BookingForm from "./Form/BookingForm";
import React, { useReducer } from "react";

export const initializeTimes = () => {
    // For now, return all times
    return [
        "3:00 PM",
        "4:00 PM",
        "5:00 PM",
        "6:00 PM",
        "7:00 PM",
        "8:00 PM",
        "9:00 PM",
        "10:00 PM",
    ];
};

export const updateTimes = (state, action) => {
    switch (action.type) {
        case "UPDATE_TIMES":
            return Array.isArray(action.payload) ? action.payload : state;
        default:
            return state;
    }
};

function BookingPage() {
    const [availableTimes, dispatch] = useReducer(
        updateTimes,
        [],
        initializeTimes
    );

    return (
        <>
            <main>
                <div
                    aria-label="reservations-header"
                    className="reservations-header"
                >
                    <section
                        aria-label="title-and-description"
                        className="title-and-description"
                    >
                        <h1>Reservations</h1>
                        <p>
                            Experience the flavors of the Mediterranean at
                            Little Lemon. To ensure you have a delightful dining
                            experience, we offer a convenient online reservation
                            system. Book your table now to savor our authentic
                            Mediterranean dishes expertly crafted by our
                            passionate chefs. Whether it's a romantic evening, a
                            family celebration, or a casual get-together,
                            reserve your spot to indulge in the finest cuisine,
                            impeccable service, and a cozy ambiance. Your
                            memorable dining journey begins here. Simply select
                            your desired date, time, and the number of guests,
                            and we'll take care of the rest. We look forward to
                            welcoming you to Little Lemon, where every
                            reservation is a promise of an extraordinary dining
                            adventure.
                        </p>
                    </section>
                    <section
                        aria-label="restaurant-dining-area-image"
                        className="restaurant-image-container"
                    >
                        <img src={RestaurantImage} alt="dining-area" />
                    </section>
                </div>
                <div aria-label="booking-form" className="booking-section">
                    <section
                        aria-label="image-of-chef"
                        className="chef-image-container"
                    >
                        <img src={RestaurantChef} alt="chef" />
                    </section>
                    <section aria-label="booking-form-fields">
                        <BookingForm
                            availableTimes={availableTimes}
                            dispatch={dispatch}
                        />
                    </section>
                </div>
            </main>
        </>
    );
}

export default BookingPage;

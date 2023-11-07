import "./BookingPage.css";
import RestaurantImage from "./assets/Restaurant.jpg";
import RestaurantChef from "./assets/Restaurant Chef.jpg";
import BookingForm from "./Form/BookingForm";
import React, { useReducer } from "react";

function BookingPage() {
    const reducer = (state, action) => {
        switch (action.type) {
            case "UPDATE_TIMES":
                // For now, just return all times
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
            default:
                return state;
        }
    };

    const [availableTimes, dispatch] = useReducer(reducer, []);

    return (
        <>
            <main>
                <div className="reservations-header">
                    <section className="title-and-description">
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
                    <section className="restaurant-image-container">
                        <img src={RestaurantImage} alt="dining-area" />
                    </section>
                </div>
                <div className="booking-section">
                    <section className="chef-image-container">
                        <img src={RestaurantChef} alt="chef" />
                    </section>
                    <section>
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
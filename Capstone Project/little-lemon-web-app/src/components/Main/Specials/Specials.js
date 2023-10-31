import "./Specials.css";
import DishCard from "./Cards/DishCard";
import GreekSalad from "./assets/Greek Salad.jpg";
import Bruschetta from "./assets/Bruschetta.jpg";
import LemonDessert from "./assets/Lemon Dessert.jpg";

const specialDishes = [
    {
        dishName: "Greek Salad",
        price: "$12.99",
        imgSrc: GreekSalad,
        alt: "greek-salad",
        description: `The famous Greek salad of crispy lettuce, peppers, olives, and our Chicago
        style feta cheese, garnished with crunchy garlic and rosemary croutons.`,
    },
    {
        dishName: "Bruschetta",
        price: "$5.99",
        imgSrc: Bruschetta,
        alt: "bruschetta",
        description: `Our bruschetta is made from grilled bread that has been smeared with garlic
        and seasoned with salt and olive oil.`,
    },
    {
        dishName: "Lemon Dessert",
        price: "$4.99",
        imgSrc: LemonDessert,
        alt: "lemon-dessert",
        description: `This comes straight from grandma's recipe book. Every last ingredient has
        been sourced and is as authentic as can be imagined.`,
    },
];

function mapDishDetails() {
    return specialDishes.map((dish, index) => {
        return (
            <DishCard
                key={index}
                imgSrc={dish.imgSrc}
                imgAlt={dish.alt}
                dishName={dish.dishName}
                dishPrice={dish.price}
                description={dish.description}
            ></DishCard>
        );
    });
}

function Specials() {
    return (
        <>
            <div className="specials-section">
                <section className="specials-header">
                    <h2>This Week's Specials</h2>
                    <button>Online Menu</button>
                </section>
                <section className="special-dishes">{mapDishDetails()}</section>
            </div>
        </>
    );
}

export default Specials;

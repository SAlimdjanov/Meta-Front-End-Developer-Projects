import "./Hero.css";
import HeroImage from "./assets/Restaurant Food.jpg";

function Hero() {
    return (
        <>
            <section className="hero-section">
                <section className="hero-text">
                    <h1>Little Lemon</h1>
                    <h2>Chicago</h2>
                    <p>
                        We are a family-owned Mediterranean restaurant, focused
                        on traditional recipes served with a modern twist.
                    </p>
                    <button>Reserve a table</button>
                </section>
                <section className="hero-image-container">
                    <img
                        src={HeroImage}
                        className="hero-image"
                        alt="restaurant-food"
                    />
                </section>
            </section>
        </>
    );
}

export default Hero;

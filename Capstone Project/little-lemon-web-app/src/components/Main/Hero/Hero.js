import "./Hero.css";
import HeroImage from "./assets/Restaurant Food.jpg";

function Hero() {
    return (
        <>
            <div aria-label="hero-section" className="hero-section">
                <section aria-label="hero-text" className="hero-text">
                    <h1>Little Lemon</h1>
                    <h2>Chicago</h2>
                    <p>
                        We are a family-owned Mediterranean restaurant, focused
                        on traditional recipes served with a modern twist.
                    </p>
                    <button>Reserve a table</button>
                </section>
                <section
                    aria-label="hero-image"
                    className="hero-image-container"
                >
                    <img
                        src={HeroImage}
                        className="hero-image"
                        alt="restaurant-food"
                    />
                </section>
            </div>
        </>
    );
}

export default Hero;

import "./Testimonials.css";
import AlexanderImg from "./assets/Alexander.jpg";
import JuanImg from "./assets/Juan.jpg";
import UcheImg from "./assets/Uche.jpg";
import ErikImg from "./assets/Erik.jpg";
import TestimonialCard from "./Cards/TestimonialCard";

const testimonialData = [
    {
        personName: "Alexander",
        image: AlexanderImg,
        alt: "alexander-image",
        quote: '"Excellent food and atmosphere! Would visit again."',
        ariaLabel: "testimonial-alexander",
    },
    {
        personName: "Juan",
        image: JuanImg,
        alt: "juan-image",
        quote: '"Adrian and Mario\'s gem! Delicious, authentic cuisine."',
        ariaLabel: "testimonial-juan",
    },
    {
        personName: "Uche",
        image: UcheImg,
        alt: "uche-image",
        quote: '"A Mediterranean delight! Amazing flavors!"',
        ariaLabel: "testimonial-uche",
    },
    {
        personName: "Erik",
        image: ErikImg,
        alt: "erik-image",
        quote: '"Great dishes, kind servers, great experience overall."',
        ariaLabel: "testimonial-erik",
    },
];

function mapTestimonialData() {
    return testimonialData.map((testimonial, index) => {
        return (
            <TestimonialCard
                key={index}
                imgSrc={testimonial.image}
                imgAlt={testimonial.alt}
                person={testimonial.personName}
                testimonial={testimonial.quote}
                ariaLabel={testimonial.ariaLabel}
            ></TestimonialCard>
        );
    });
}

function Testimonials() {
    return (
        <>
            <div
                aria-label="testimonials-section"
                className="testimonials-section"
            >
                <section>
                    <h2>Testimonials</h2>
                </section>
                <section
                    aria-label="testimonial-cards"
                    className="testimonial-cards"
                >
                    {mapTestimonialData()}
                </section>
            </div>
        </>
    );
}

export default Testimonials;

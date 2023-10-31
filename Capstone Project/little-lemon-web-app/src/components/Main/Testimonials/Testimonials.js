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
    },
    {
        personName: "Juan",
        image: JuanImg,
        alt: "juan-image",
        quote: '"Adrian and Mario\'s gem! Delicious, authentic cuisine."',
    },
    {
        personName: "Uche",
        image: UcheImg,
        alt: "uche-image",
        quote: '"A Mediterranean delight! Amazing flavors!"',
    },
    {
        personName: "Erik",
        image: ErikImg,
        alt: "erik-image",
        quote: '"Great dishes, kind servers, great experience overall."',
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
            ></TestimonialCard>
        );
    });
}

function Testimonials() {
    return (
        <>
            <div className="testimonials-section">
                <section>
                    <h2>Testimonials</h2>
                </section>
                <section className="testimonial-cards">
                    {mapTestimonialData()}
                </section>
            </div>
        </>
    );
}

export default Testimonials;

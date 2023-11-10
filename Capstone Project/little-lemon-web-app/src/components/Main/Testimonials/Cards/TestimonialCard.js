import "./TestimonialCard.css";
import Stars from "./assets/5stars.png";

function TestimonialCard(props) {
    return (
        <>
            <div aria-label="testimonial-card" className="testimonial-card">
                <div aria-label="rating" className="rating">
                    <img src={Stars} aria-label="5-stars" alt="5-stars" />
                </div>
                <div
                    aria-label={props.ariaLabel.concat("-picture-and-name")}
                    className="picture-and-name"
                >
                    <section className="picture-container">
                        <img
                            aria-label={props.ariaLabel.concat("-picture")}
                            src={props.imgSrc}
                            alt={props.alt}
                        />
                    </section>
                    <p className="name">{props.person}</p>
                </div>
                <div
                    aria-label={props.ariaLabel.concat("-quote")}
                    className="testimonial"
                >
                    <p>{props.testimonial}</p>
                </div>
            </div>
        </>
    );
}

export default TestimonialCard;

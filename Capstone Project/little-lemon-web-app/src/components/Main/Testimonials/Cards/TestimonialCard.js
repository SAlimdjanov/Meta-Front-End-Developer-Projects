import "./TestimonialCard.css";
import Stars from "./assets/5stars.png";

function TestimonialCard(props) {
    return (
        <>
            <div className="testimonial-card">
                <div className="rating">
                    <img src={Stars} alt="5-stars" />
                </div>
                <div className="picture-and-name">
                    <section className="picture-container">
                        <img src={props.imgSrc} alt={props.alt} />
                    </section>
                    <p className="name">{props.person}</p>
                </div>
                <div className="testimonial">
                    <p>{props.testimonial}</p>
                </div>
            </div>
        </>
    );
}

export default TestimonialCard;

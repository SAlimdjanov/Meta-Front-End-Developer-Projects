import "./DishCard.css";
import DeliveryIcon from "../assets/Delivery.svg";

function DishCard(props) {
    return (
        <>
            <article aria-label="dish-card" className="card">
                <div
                    aria-label={props.ariaLabel.concat("-image")}
                    className="card-image-container"
                >
                    <img src={props.imgSrc} alt={props.imgAlt} />
                </div>
                <div
                    aria-label={props.ariaLabel.concat("-name-and-price")}
                    className="dish-name-and-price"
                >
                    <h4 className="dish-name">{props.dishName}</h4>
                    <h4 className="price">{props.dishPrice}</h4>
                </div>
                <div
                    aria-label={props.ariaLabel.concat("-dish-description")}
                    className="dish-description"
                >
                    <p>{props.description}</p>
                </div>
                <div
                    aria-label={props.ariaLabel.concat("-order-now-section")}
                    className="order-now"
                >
                    <a href="/#order-online">
                        <h5>Order a Delivery</h5>
                    </a>
                    <img
                        src={DeliveryIcon}
                        aria-label={props.ariaLabel.concat("-delivery-icon")}
                        className="delivery-icon"
                        alt="delivery-icon"
                    />
                </div>
            </article>
        </>
    );
}

export default DishCard;

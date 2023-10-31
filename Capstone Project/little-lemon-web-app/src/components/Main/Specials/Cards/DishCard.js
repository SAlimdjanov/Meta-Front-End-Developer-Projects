import "./DishCard.css";
import DeliveryIcon from "../assets/Delivery.svg";

function DishCard(props) {
    return (
        <>
            <article className="card">
                <div className="card-image-container">
                    <img src={props.imgSrc} alt={props.imgAlt} />
                </div>
                <div className="dish-name-and-price">
                    <h4 className="dish-name">{props.dishName}</h4>
                    <h4 className="price">{props.dishPrice}</h4>
                </div>
                <div className="dish-description">
                    <p>{props.description}</p>
                </div>
                <div className="order-now">
                    <a href="/#order-online">
                        <h5>Order a Delivery</h5>
                    </a>
                    <img
                        src={DeliveryIcon}
                        className="delivery-icon"
                        alt="delivery-icon"
                    />
                </div>
            </article>
        </>
    );
}

export default DishCard;

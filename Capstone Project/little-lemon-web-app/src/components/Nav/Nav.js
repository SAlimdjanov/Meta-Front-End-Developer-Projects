import "./Nav.css";
import HeaderLogo from "./assets/Logo.jpg";
import { Link } from "react-router-dom";

const navElements = [
    {
        elementName: "HOME",
        url: "/",
    },
    {
        elementName: "ABOUT",
        url: "/#about",
    },
    {
        elementName: "MENU",
        url: "/#menu",
    },
    {
        elementName: "RESERVATIONS",
        url: "/reservations",
    },
    {
        elementName: "ORDER ONLINE",
        url: "/#order-online",
    },
    {
        elementName: "LOGIN",
        url: "/#login",
    },
];

function mapNavElements() {
    return (
        <ul>
            {navElements.map((navElement, index) => {
                return (
                    <li key={index} aria-label="navigation-link">
                        <Link
                            to={navElement.url}
                            key={index}
                            aria-label={navElement.elementName}
                        >
                            <h3>{navElement.elementName}</h3>
                        </Link>
                    </li>
                );
            })}
        </ul>
    );
}

function Nav() {
    return (
        <>
            <header aria-label="header-and-navigation-bar">
                <nav aria-label="navigation-bar" className="nav-bar">
                    <img
                        src={HeaderLogo}
                        className="header-logo"
                        alt="header-logo"
                        aria-label="little-lemon-logo"
                    />
                    <section className="nav-links">{mapNavElements()}</section>
                </nav>
            </header>
        </>
    );
}

export default Nav;

import "./Nav.css";
import HeaderLogo from "./assets/Logo.jpg";

const navElements = [
    {
        elementName: "HOME",
        url: "/#home",
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
        url: "/#reservations",
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
                    <li key={index}>
                        <a href={navElement.url} key={index}>
                            <h3>{navElement.elementName}</h3>
                        </a>
                    </li>
                );
            })}
        </ul>
    );
}

function Nav() {
    return (
        <>
            <header>
                <nav className="nav-bar">
                    <img
                        src={HeaderLogo}
                        className="header-logo"
                        alt="header-logo"
                    />
                    <section className="nav-links">{mapNavElements()}</section>
                </nav>
            </header>
        </>
    );
}

export default Nav;

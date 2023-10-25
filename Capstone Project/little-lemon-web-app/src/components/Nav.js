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
                            {navElement.elementName}
                        </a>
                    </li>
                );
            })}
        </ul>
    );
}

function Nav() {
    return <>{mapNavElements()}</>;
}

export default Nav;

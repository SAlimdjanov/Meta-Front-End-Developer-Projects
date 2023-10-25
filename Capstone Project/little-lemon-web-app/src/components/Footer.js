import FooterLogo from "../assets/Footer Logo.png";

const footerLinks = [
    {
        text: "Home",
        url: "/#home",
    },
    {
        text: "About",
        url: "/#about",
    },
    {
        text: "Menu",
        url: "/#menu",
    },
    {
        text: "Reservations",
        url: "/#reservations",
    },
    {
        text: "Order Online",
        url: "/#order-online",
    },
    {
        text: "Login",
        url: "/#login",
    },
];

const footerContact = [
    "Address: \n 123 Little Lemon St.",
    "Phone Number: \n 312 - XXX - XXXX",
    "Email: contact@littlelemon.com",
];

const footerSocials = [
    {
        text: "Instagram",
        url: "https://www.instagram.com/",
    },
    {
        text: "Facebook",
        url: "https://www.facebook.com/",
    },
    {
        text: "X/Twitter",
        url: "https://twitter.com/",
    },
];

function mapLinkElements(elementObject) {
    return (
        <ul>
            {elementObject.map((element, index) => {
                return (
                    <li key={index}>
                        <a href={element.url} key={index}>
                            {element.text}
                        </a>
                    </li>
                );
            })}
        </ul>
    );
}

function mapContactElements() {
    return (
        <ul>
            {footerContact.map((element, index) => {
                return <li key={index}>{element}</li>;
            })}
        </ul>
    );
}

function Footer() {
    return (
        <>
            <img src={FooterLogo} alt="footer-logo" />
            <h4>Website Links</h4>
            {mapLinkElements(footerLinks)}
            <h4>Contact us</h4>
            {mapContactElements()}
            <h4>Social Media Links</h4>
            {mapLinkElements(footerSocials)}
            <p>
                Copyright &copy; Little Lemon Restaurant. All Rights Reserved.
            </p>
        </>
    );
}

export default Footer;

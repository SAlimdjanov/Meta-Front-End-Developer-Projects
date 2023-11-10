import "./Footer.css";
import FooterLogo from "./assets/Footer Logo B.png";

const footerLinks = [
    {
        text: "Home",
        url: "/#home",
        ariaLabel: "link-to-home",
    },
    {
        text: "About",
        url: "/#about",
        ariaLabel: "link-to-about",
    },
    {
        text: "Menu",
        url: "/#menu",
        ariaLabel: "link-to-menu",
    },
    {
        text: "Reservations",
        url: "/#reservations",
        ariaLabel: "link-to-reservations",
    },
    {
        text: "Order Online",
        url: "/#order-online",
        ariaLabel: "link-to-order-online",
    },
    {
        text: "Login",
        url: "/#login",
        ariaLabel: "link-to-login",
    },
];

const footerContact = [
    "Address: \n 123 Little Lemon St.",
    "Phone: \n 312 - XXX - XXXX",
    "Email: contact@littlelemon.com",
];

const footerSocials = [
    {
        text: "Instagram",
        url: "https://www.instagram.com/",
        ariaLabel: "link-to-instagram",
    },
    {
        text: "Facebook",
        url: "https://www.facebook.com/",
        ariaLabel: "link-to-facebook",
    },
    {
        text: "X/Twitter",
        url: "https://twitter.com/",
        ariaLabel: "link-to-x-twitter",
    },
];

function mapLinkElements(elementObject) {
    return elementObject.map((element, index) => {
        return (
            <p key={index} aria-label={element.ariaLabel}>
                <a href={element.url} key={index}>
                    {element.text}
                </a>
            </p>
        );
    });
}

function mapContactElements() {
    return footerContact.map((element, index) => {
        return <p key={index}>{element}</p>;
    });
}

function Footer() {
    return (
        <>
            <footer aria-label="page-footer" className="page-footer">
                <section aria-label="footer-links" className="footer-links">
                    <section>
                        <img
                            src={FooterLogo}
                            className="footer-logo"
                            aria-label="little-lemon-footer-logo"
                            alt="footer-logo"
                        />
                    </section>
                    <section>
                        <h4>Website Links</h4>
                        {mapLinkElements(footerLinks)}
                    </section>
                    <section aria-label="contact-information">
                        <h4>Contact us</h4>
                        {mapContactElements()}
                    </section>
                    <section>
                        <h4>Social Media Links</h4>
                        {mapLinkElements(footerSocials)}
                    </section>
                </section>
                <section arial-label="copyright" className="copyright">
                    <p>
                        Copyright &copy; Little Lemon Restaurant. All Rights
                        Reserved.
                    </p>
                </section>
            </footer>
        </>
    );
}

export default Footer;

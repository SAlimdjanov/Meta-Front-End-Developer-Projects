import "./Footer.css";
import FooterLogo from "../../assets/Footer Logo B.png";

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
    "Phone: \n 312 - XXX - XXXX",
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
    return elementObject.map((element, index) => {
        return (
            <p key={index}>
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
            <footer className="page-footer">
                <section className="footer-links">
                    <section>
                        <img
                            src={FooterLogo}
                            className="footer-logo"
                            alt="footer-logo"
                        />
                    </section>
                    <section>
                        <h4>Website Links</h4>
                        {mapLinkElements(footerLinks)}
                    </section>
                    <section>
                        <h4>Contact us</h4>
                        {mapContactElements()}
                    </section>
                    <section>
                        <h4>Social Media Links</h4>
                        {mapLinkElements(footerSocials)}
                    </section>
                </section>
                <section className="copyright">
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

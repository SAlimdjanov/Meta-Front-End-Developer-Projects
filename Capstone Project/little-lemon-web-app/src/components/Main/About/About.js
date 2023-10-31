import "./About.css";
import AMimageA from "./assets/Mario and Adrian A.jpg";
import AMimageB from "./assets/Mario and Adrian B.jpg";

function About() {
    return (
        <>
            <div className="about-section">
                <section className="about-text">
                    <h2>About Us</h2>
                    <p>
                        Welcome to Little Lemon. Nestled in the heart of
                        Chicago, this is where the tantalizing flavors of the
                        Mediterranian come alive. Founded by the culinary
                        expertise of Adrian and Mario, our family-owned
                        restaurant is a celebration of tradition, taste, and
                        togetherness. With roots deeply embedded in the rich
                        culinary heritage of the Mediterranian, our chefs
                        meticulously craft each dish to perfection, using only
                        the freshest ingredients and authentic recipes handed
                        down through generations. At Little Lemon, we don't just
                        serve food; we create memorable experiences. We invite
                        you to join our family table, where every meal is a
                        journey and every guest is cherished. Come experience
                        the authentic flavors of the Mediterranian at Little
                        Lemon, where the heart of our home is in every dish we
                        serve.
                    </p>
                </section>
                <section className="image-layout">
                    <div className="image-container">
                        <img src={AMimageA} alt="adrian-and-mario-A"></img>
                    </div>
                    <div className="image-container">
                        <img src={AMimageB} alt="adrian-and-mario-B"></img>
                    </div>
                </section>
            </div>
        </>
    );
}

export default About;

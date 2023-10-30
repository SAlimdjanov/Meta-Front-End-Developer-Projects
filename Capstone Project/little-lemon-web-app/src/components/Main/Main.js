import "./Main.css";
import Hero from "./Hero/Hero";
import Specials from "./Specials/Specials";
import Testimonials from "./Testimonials/Testimonials";
import About from "./About/About";

function Main() {
    return (
        <>
            <main>
                <Hero></Hero>
                <Specials></Specials>
                <Testimonials></Testimonials>
                <About></About>
            </main>
        </>
    );
}

export default Main;

import "./App.css";
import Nav from "./components/Nav/Nav";
import Main from "./components/Main/Main";
import Footer from "./components/Footer/Footer";
import Reservations from "./components/Booking Page/Reservations";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
    return (
        <Router>
            <>
                <Nav />
                <Routes>
                    <Route path="/" element={<Main />} />
                    <Route path="/reservations" element={<Reservations />} />
                </Routes>
                <Footer />
            </>
        </Router>
    );
}

export default App;

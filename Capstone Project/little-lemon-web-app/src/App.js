import "./App.css";
import Nav from "./components/Nav/Nav";
import Main from "./components/Main/Main";
import Footer from "./components/Footer/Footer";
import BookingPage from "./components/Booking Page/BookingPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
    return (
        <Router>
            <>
                <Nav />
                <Routes>
                    <Route path="/" element={<Main />} />
                    <Route path="/reservations" element={<BookingPage />} />
                </Routes>
                <Footer />
            </>
        </Router>
    );
}

export default App;

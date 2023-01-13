import React from "react";
import Nav from "./components/nav/Nav";
import HomePage from "./pages/HomePage";
import BookingPage from "./pages/BookingPage";
import OrderOnlinePage from "./pages/OrderOnlinePage";
import Footer from "./components/footer/Footer";
import { Route, Routes } from "react-router-dom";

function App() {
    return (
        <div className="app">
            <Nav />
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/booking" element={<BookingPage />} />
                <Route path="/delivery" element={<OrderOnlinePage />} />
            </Routes>

            <Footer />
        </div>
    );
}

export default App;

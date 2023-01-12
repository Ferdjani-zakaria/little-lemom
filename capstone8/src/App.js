import React from "react";
import { Route, Routes } from "react-router-dom";
import Nav from "./components/Nav";
import HomePage from "./pages/HomePage";
import BookingPage from "./pages/BookingPage";
import Footer from "./components/Footer";

function App() {
    return (
        <div className="app">
            <Nav />
            <Routes>
                <Route path="/" elememt={<HomePage />} />
                <Route path="/booking" elememt={<BookingPage />} />
            </Routes>
            <Footer />
        </div>
    );
}

export default App;

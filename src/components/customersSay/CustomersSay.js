import React from "react";
import TestimoniCard from "../testimonialCard/TestimonialCard";
import "./customerSay.css";
const customers = [1, 2, 3, 4];
function CustomersSay() {
    return (
        <section className="testimonialsSection">
            <div className="testimonials">
                <h2>Testimomials</h2>
                <div className="testimoniCardContainer">
                    {customers.map((customer, index) => {
                        return <TestimoniCard key={index} />;
                    })}
                </div>
            </div>
        </section>
    );
}

export default CustomersSay;

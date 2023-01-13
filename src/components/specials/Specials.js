import React from "react";
import "./specials.css";
import DishCard from "../dishcard/DishCard";
import dish1 from "../../assets/greek salad.jpg";
import dish2 from "../../assets/bruchetta.svg";
import dish3 from "../../assets/lemon dessert.jpg";
const dishs = [
    {
        id: "greek-salad",
        name: "Greek Salad",
        price: "12.99",
        description:
            "The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.",
        img: dish1,
    },
    {
        id: "bruchetta",
        name: "bruchetta",
        price: "5.99",
        description: "Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.",
        img: dish2,
    },
    {
        id: "Lemon-Dessert",
        name: "Lemon Dessert",
        price: "5.00",
        description:
            "This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined.",
        img: dish3,
    },
];
function Specials() {
    return (
        <section className="specialsSection">
            <div className="specials">
                <div className="flex-between-center">
                    <h2>Specials of the week!</h2>
                    <button className="prime-btn">Online Menu</button>
                </div>
                <div className="cardContainer">
                    {dishs.map((dish) => (
                        <DishCard key={dish.id} {...dish} />
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Specials;

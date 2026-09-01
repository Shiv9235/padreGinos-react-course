import { useState, useEffect } from "react";

export const usePizzaOfTheDay = () => {
    const[pizzaOfTheDay, setPizzaOftheDay] = useState(null);

    useEffect(() => {
        async function fetchPizzaOfTheDay() {
            const response = await fetch("/api/pizza-of-the-day");
            const data = await response.json();
            setPizzaOftheDay(data);
        }
        fetchPizzaOfTheDay();
    }, []);

    return pizzaOfTheDay;
};
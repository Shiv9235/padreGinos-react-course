import { useState, useEffect, useDebugValue} from "react";

export const usePizzaOfTheDay = () => {
    const[pizzaOfTheDay, setPizzaOftheDay] = useState(null);

    useDebugValue(pizzaOfTheDay ?`${pizzaOfTheDay.id} ${pizzaOfTheDay.name}`: "Loading....",);

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

//debugValue is only for developer tools
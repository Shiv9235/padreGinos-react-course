import { useEffect, useState } from "react";
import Pizza from "./pizza"

const intl = new Intl.NumberFormat("en-US", {
    "style" : "currency",
    currency : "USD",

});
export default function Order () {

    const [pizzaTypes, setPizzaTypes] = useState([]);
    const [pizzaType, setPizzaType] = useState("pepperoni");
    const [pizzaSize, setPizzaSize] = useState("S")
    const [loading, setLoading] = useState(true);

    let price, selectedPizza; 


    if(!loading) {
        selectedPizza = pizzaTypes.find((pizza) => pizzaType === pizza.id);
         
        price = intl.format(selectedPizza.sizes[pizzaSize]);

    }
    // console.log(pizzaSize, pizzaType);


    async function fetchPizzaType()
    {
        // await new Promise((resolve) => setTimeout(resolve, 10000));
        const pizzaRes = await fetch("/api/pizzas");
        const pizzaJson = await pizzaRes.json();
        setPizzaTypes(pizzaJson);
        setLoading(false);
    }

    useEffect(() =>{
        fetchPizzaType();
    },[]
    //why empty array ?? this array is like whenever the variables inside array changes the function runs again bur if you want the abive function to run once then you have to make the array empty
    );

    return(
        <div className="order">
            <h2>Create Order</h2>
            <form>
                <div>
                <div>
                    <label htmlFor="pizza-type"></label>
                    <select 
                        onChange={(e) => setPizzaType(e.target.value)}
                        name="pizza-type" 
                        value={pizzaType}
                    >
                        {
                            pizzaTypes.map((pizza) => (
                                <option key={pizza.id} value={pizza.id}>
                                    {pizza.name}
                                </option>
                            ))
                        }
                    </select>
                </div>
                <div>
                    <label htmlFor="pizza-size">Pizza Size</label>
                    <div                    >
                        <span>
                            <input checked={pizzaSize === 'S'}
                            type="radio" 
                            name="pizza-size"
                            value="S"
                            id="pizza-s"
                            onChange={(f) => setPizzaSize(f.target.value)} 
                            />
                            <label htmlFor="pizza-s">Small</label>
                        </span>
                        <span>
                            <input checked={pizzaSize === 'M'}
                            type="radio" 
                            name="pizza-size"
                            value="M"
                            id="pizza-m"
                            onChange={(f) => setPizzaSize(f.target.value)} 
                            />
                            <label htmlFor="pizza-m">Medium</label>
                        </span><span>
                            <input checked={pizzaSize === 'L'}
                            type="radio" 
                            name="pizza-size"
                            value="L"
                            id="pizza-l"
                            onChange={(f) => setPizzaSize(f.target.value)} 
                            />
                            <label htmlFor="pizza-l">Large</label>
                        </span>
                    </div>
                </div>
                <button type="submit">Add to Cart</button>
                
                {
                    loading ? (
                        <h3>Loading ...</h3>
                    ) : (
                    
                    
                    <div className="order-pizza">
                    <Pizza
                        name={selectedPizza.name}
                        description={selectedPizza.description}
                        image={selectedPizza.image}
                    />
                    <p>{price}</p>

                    </div>
                    )
                }
            </div>
            </form>
        </div>
    );
}
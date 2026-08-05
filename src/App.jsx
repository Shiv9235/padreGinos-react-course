import React from "react";
import { createRoot } from "react-dom/client";
import Pizza from "./pizza";

const App = () => {
  return (
    <div>

      <h1>Padre Gino's - Order Now</h1>

      <Pizza name="Pepperoni" description="pep, cheese, n stuff"/>
      <Pizza name="Hawaiian" description="ham, pineaaple, n stuff"/>
      <Pizza name="Americano" description="french fries, n hot dogs"/>
 

    </div>
  )
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(React.createElement(App));

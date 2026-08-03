import React from "react";
import { createRoot } from "react-dom/client";

const Pizza = (props) => {
  // eslint-disable-next-line no-undef
  return React.createElement("div", {}, [
    React.createElement("h1", {}, props.name),
    React.createElement("p", {}, props.ingredients),
    // React.createElement("h1", {}, " The Paneer Capsicum Pizza"),
    // React.createElement("h1", {}, " The Onion Capsicum Pizza"),
    // React.createElement("h1", {}, " The Cheese Burst Pizza"),
    // React.createElement("h1", {}, " The Pepproni Pizza"),
  ]);
};

const App = () => {
  debugger;
  return React.createElement("div", {}, [
    React.createElement("h1", {}, "Padre Gino's"),
    React.createElement(Pizza, {
      name: "Paneer Tikka Delight",
      ingredients: "Smoky paneer tikka, onions, capsicum, and mint mayo.",
    }),
    React.createElement(Pizza, {
      name: "Butter Chicken Supreme",
      ingredients: "Creamy butter chicken with mozzarella and fresh coriander.",
    }),
    React.createElement(Pizza, {
      name: "Tandoori Veggie Feast",
      ingredients: "Tandoori veggies, onions, capsicum, corn, and cheese.",
    }),
    React.createElement(Pizza, {
      name: "Masala Corn Burst",
      ingredients: "Sweet corn, Indian spices, jalapeños, and gooey cheese.",
    }),
    React.createElement(Pizza, {
      name: "Spicy Keema Special",
      ingredients: "Chicken keema, onions, green chilies, and mozzarella.",
    }),
    React.createElement(Pizza, {
      name: "Mumbai Masala Pizza",
      ingredients: "Potatoes, onions, tomatoes, chaat masala, and cheese.",
    }),
    React.createElement(Pizza, {
      name: "Achari Paneer Fusion",
      ingredients: "Pickled paneer, bell peppers, onions, and mozzarella.",
    }),
  ]);
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(React.createElement(App));

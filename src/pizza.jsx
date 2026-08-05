import React from "react";

const Pizza = (props) => {
    return(
        <div className="pizza">
            <h1>{props.name}</h1>
            <p>{props.description}</p>
        </div>
    );
};
export default Pizza;
// you have to export after the declaration as javascript executes from top to bottom
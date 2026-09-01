import React from "react";

export default function Pizza(props){
    return(
        <div className="pizza">
            <h1>{props.name}</h1>
            <p>{props.description}</p>
            <img src={props.image} alt={props.name} />

        </div>
    );
}
    // you have to export after the declaration as javascript executes from top to bottom
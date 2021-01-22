import React from "react"

import "./cards.component.css"

export const Card = props => 
    (
        <div className="card-container">
            <img alt="monsters" src={`https://robohash.org/${props.monster.id}?set=set2&size=473x473`} />
            <h2> {props.monster.name} </h2>
            <p>{props.monster.username}</p>
        </div>
    );
import React from 'react';

import "./card-list-component.css";

import {Card} from "../cards/cards.component.jsx";

export const CardList = props => (
    <div className="card_list" >{ 
        props.monster.map((monster) => <Card key={monster.id} monster={monster}/>)
    }
    </div>
);


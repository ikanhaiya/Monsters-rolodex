import React from "react";

import './card.style.css'

/* card.component will handle the indivudual card related functionalities */

export const  Card = props => (
    
    <div className="card-container">
              <img alt="monster" src = {`https://robohash.org/${props.monster.id}?set=set2&size=180x180`} /> 

    <h2> {props.monster.name}</h2>
    <p>{props.monster.email}</p>
    </div>

)
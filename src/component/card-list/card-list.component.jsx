import React from "react";

import './card-list.styles.css';

import { Card } from "../card/card.component";

/* card-list will manage all the cards */

export const CardList = (props) => (

     /* props.monsters is like accesing objects property value 
    monsters = this.state,monsters(array ) */

<div className="card-list"> { props.monsters.map(monster => 
(<Card key={monster.id} monster={monster} name="">
  
      
</Card>))

} </div>
);
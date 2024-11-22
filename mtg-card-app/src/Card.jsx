import React from "react";
import './Card.css';

function Card() {
    
    return (
        <div className="card">
            <div className="card-title">Wrath of Nailah</div>
            <div className="card-type">Instant</div>
            <div className="card-text">Destroys all creatures and lands, no regen</div>
        </div>
    );
}

export default Card;
import React from 'react';


function Card( { title, type, description }) {
    return (
        <div className='card'> 
            <h2>{title}</h2>
            <p>{type}</p>
            <p>{description}</p>
        </div>
    )
}

export default Card;
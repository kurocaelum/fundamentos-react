import React from 'react';

function randomNumber(min, max) {
    return parseInt(Math.random() * (max - min)) + min + 1;
}

export default (props) => {
    const { min,max } = props; // Deconstructor
    
    return (
        <div>
            <h2>Aleatório</h2>
            <p>Mínimo: {min}</p>
            <p>Máximo: {max}</p>
            <p>Random: {randomNumber(min, max)}</p>
        </div>
        
    )
}
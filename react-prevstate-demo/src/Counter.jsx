import React, { useState } from 'react';

function Counter() {
    const [count, setCount] = useState(0);


    const increment = () => {
        setCount( (prevState) => prevState + 2 )

    }

    const decrement = () => {
        setCount((prevState) => prevState - 1);
    }

    return (
        <div>
            <h2>Counter with prevState</h2>

            <p>
                Current Count: <strong>{count}</strong>
            </p>

            <button onClick={increment} > Increment </button>
            <button onClick={decrement} > Decrement </button>
        </div>

    );
}

export default Counter;
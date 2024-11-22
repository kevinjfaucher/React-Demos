import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0); // Initialize count state

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);

  return (
    <div className="counter">
      <h2>Simple Counter</h2>
      <p>Count: <strong>{count}</strong></p>
      <div className="buttons">
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
      </div>
    </div>
  );
}

export default Counter;

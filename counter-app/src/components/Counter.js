import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  const handleIncrement = () => setCount(prev => prev + 1);
  const handleDecrement = () => setCount(prev => (prev > 0 ? prev - 1 : 0));
  const handleReset = () => setCount(0);

  return (
    <div className="counter-container">
      <h2>Count: {count}</h2>
      <div className="buttons">
        <button onClick={handleIncrement} className="btn increment">Increment</button>
        <button onClick={handleDecrement} className="btn decrement">Decrement</button>
        <button onClick={handleReset} className="btn reset">Reset</button>
      </div>
    </div>
  );
}

export default Counter;

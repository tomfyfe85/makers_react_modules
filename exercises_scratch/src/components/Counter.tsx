import React, { useState } from 'react'

const Counter: React.FC = () => {
  const [count, setCount] = useState<number>(0);
  
  const incrementCounter = () =>
    setCount(count + 1);
  
  const decrementCounter = () =>
    setCount(count - 1);

  return (<div>
    <h1>{count}</h1>
    <button onClick={incrementCounter}>ADD 1</button>
    <button onClick={decrementCounter}>MINUS 1</button>
  </div>);
}
export default Counter;
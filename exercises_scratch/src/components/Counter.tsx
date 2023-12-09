import React, { useState } from 'react'
import CountDisplay from './CountDisplay';
import CountButton from './CountButton';
const Counter: React.FC = () => {
  const [count, setCount] = useState<number>(0);
  
  return (
    <div>
      <CountDisplay count={count} />
      <CountButton setCount={setCount} count ={count}/>
  </div>
)
}
export default Counter;
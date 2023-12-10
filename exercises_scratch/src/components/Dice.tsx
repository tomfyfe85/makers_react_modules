import React, { useState } from 'react';

const Dice = () => {
  const [dice, setDice] = useState<number>(1)
  const roll = () => {

    setDice(Math.floor(Math.random() * 6) + 1)
  }

  return (<>
    <h3>ROLL THE DICE</h3>
    <button onClick={roll}>ROLL!</button>
    <p >{dice}</p>
  </>);
}
 
export default Dice;


// useState - maybe not needed but to hold the result of the dice

// create button 
// onClick() function - math.random to generate number 
// create Jsx to present results 



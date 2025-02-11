import React, { useState } from 'react'

const Counter = () => {
    const[value,Setcounter] = useState(0);

    increaseCount = (count) => {
        Setcounter(count+1);
    }

    decreaseCount = (count) => {
        Setcounter(count-1);
    }

  return (
    <div>

    
    <div>
        Counter
    </div>
    <button OnClick = {increaseCount(count)}>Increase</button>
    <button OnClick = {decreaseCount(count)}>Decrease</button>
    </div>
  )
}

export default Counter

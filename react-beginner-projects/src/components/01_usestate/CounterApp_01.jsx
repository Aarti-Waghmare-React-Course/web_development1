// 1. Counter Component
// Build a simple counter that increases or decreases a number when you click buttons.
// Concepts: useState, event handling.

import react from 'react';
import {useState} from 'react';

const CounterApp_01=() =>{

    //initial state and function to change the state
    const [count,setCount]=useState(0);

    //function for increment
    const handleIncrement = ()=>{
        setCount(count+1);
    };

    //function for decrement
    const handleDecrement = () =>{
        setCount(count-1);
    };

    // Reset functionality
  const handleReset = () => {
    setCount(0);
  };

    return(
        <div>
            <button onClick={handleIncrement}>Increment +</button>
            <button>{count}</button>
            <button onClick={handleDecrement}>Decrement -</button>
            <button onClick={handleReset}>Reset</button>
        </div>

    );
};

export default CounterApp_01;
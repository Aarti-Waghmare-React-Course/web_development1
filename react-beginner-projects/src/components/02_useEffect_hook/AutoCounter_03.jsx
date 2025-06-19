// 3. Auto Counter
// Increment a number automatically every second.
// Concepts: setInterval inside useEffect, cleanup to clear interval.

import React from "react";
import { useEffect,useState } from "react";


const AutoCounter_03 = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => setCount(c => c + 1), 1000);
    return () => clearInterval(interval); // cleanup
  }, []);

  return <h2>Auto Counter: {count}</h2>;
};

export default AutoCounter_03;


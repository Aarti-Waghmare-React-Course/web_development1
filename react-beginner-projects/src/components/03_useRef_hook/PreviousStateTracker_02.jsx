// 2. Track Previous State
// Goal: Display the current and previous value of a counter.
// Concepts: useRef, useEffect, preserving values across renders.



import React, { useState, useRef, useEffect } from "react";

const PreviousStateTracker_02 = () => {
  const [count, setCount] = useState(0);
  const prevCountRef = useRef();

  useEffect(() => {
    prevCountRef.current = count;
  }, [count]);

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>Current Count: {count}</h2>
      <h3>Previous Count: {prevCountRef.current}</h3>
      <button onClick={() => setCount((prev) => prev + 1)}>Increment</button>
    </div>
  );
};

export default PreviousStateTracker_02;

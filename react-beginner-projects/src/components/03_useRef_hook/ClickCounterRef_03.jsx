// 3. Click Counter Without Re-render
// Goal: Track how many times a button is clicked using useRef (without causing re-renders).
// Concepts: useRef as a mutable variable.

import React, { useRef } from "react";

const ClickCounterRef_03 = () => {
  const clickRef = useRef(0);

  const handleClick = () => {
    clickRef.current += 1;
    alert(`Button clicked ${clickRef.current} times (no re-render)`);
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>Click Counter Without Re-render</h2>
      <button onClick={handleClick}>Click Me</button>
    </div>
  );
};

export default ClickCounterRef_03;

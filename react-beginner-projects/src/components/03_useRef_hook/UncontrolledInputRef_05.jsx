// 5: Uncontrolled Input Value
// Goal: Capture the input value using useRef instead of useState (i.e., an uncontrolled component).

import React, { useRef } from "react";

const UncontrolledInputRef_05 = () => {
  const inputRef = useRef(null); // Reference to input field

  const handleSubmit = (e) => {
    e.preventDefault();
    const value = inputRef.current.value;
    alert(`Input value: ${value}`);
    inputRef.current.value = ""; // Clear input field
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>Uncontrolled Input</h2>
      <form onSubmit={handleSubmit}>
        <input ref={inputRef} type="text" placeholder="Enter something" />
        <br /><br />
        <button type="submit">Show Value</button>
      </form>
    </div>
  );
};

export default UncontrolledInputRef_05;

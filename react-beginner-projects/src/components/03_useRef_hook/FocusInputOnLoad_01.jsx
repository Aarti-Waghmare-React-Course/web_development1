// 1. Focus Input on Load
// Goal: Automatically focus an input field when the component mounts.
// Concepts: useRef, useEffect, DOM manipulation.

import React, { useRef, useEffect } from "react";

const FocusInputOnLoad__01 = () => {
  // Create a ref for the input element
  const inputRef = useRef(null);

  useEffect(() => {
    // Focus the input when the component mounts
    inputRef.current.focus();
  }, []);

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>Focus Input on Load</h2>
      <input ref={inputRef} type="text" placeholder="Type something..." />
    </div>
  );
};

export default FocusInputOnLoad__01;

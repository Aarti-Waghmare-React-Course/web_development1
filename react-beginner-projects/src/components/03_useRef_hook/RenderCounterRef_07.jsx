// 7: Count Render Times
// Goal: Use useRef to count how many times a component has rendered — without causing re-renders.

import React, { useState, useRef, useEffect } from "react";

const RenderCounterRef_07 = () => {
  const [value, setValue] = useState("");
  const renderCount = useRef(0);

  useEffect(() => {
    renderCount.current += 1;
  });

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>Render Counter</h2>
      <input
        type="text"
        placeholder="Type something..."
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <p>Component rendered: {renderCount.current} times</p>
    </div>
  );
};

export default RenderCounterRef_07;

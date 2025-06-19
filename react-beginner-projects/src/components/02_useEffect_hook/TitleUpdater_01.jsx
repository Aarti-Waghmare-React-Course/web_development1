// 1. Document Title Updater
// Update the browser tab title with a counter.
// Concepts: useState, useEffect with dependencies.

import React from "react";
import { useState, useEffect } from 'react';

 const TitleUpdater_01 = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `Count: ${count}`;
  }, [count]); // runs when count changes

  return (
    <div>
      <h2>Title Updater</h2>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
};

export default TitleUpdater_01;
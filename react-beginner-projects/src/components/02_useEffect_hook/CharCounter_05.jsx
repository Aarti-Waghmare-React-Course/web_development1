// 5. Input Character Counter
// Show a count of characters as the user types in an input field.
// Concepts: Update on state change.

import React from "react";
import { useEffect,useState } from "react";


const CharCounter_05 = () => {
  const [text, setText] = useState('');

  return (
    <div>
      <h2>Character Counter</h2>
      <input value={text} onChange={e => setText(e.target.value)} />
      <p>Characters: {text.length}</p>
    </div>
  );
};

export default  CharCounter_05;
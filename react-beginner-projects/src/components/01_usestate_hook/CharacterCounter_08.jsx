// Create a character counter

import React, { useState } from 'react';

const CharacterCounter_08 = () => {
  const [text, setText] = useState("");

  return (
    <div>
      <input 
        type="text" 
        value={text} 
        onChange={(e) => setText(e.target.value)} 
        placeholder="Type something..." 
      />
      <p>Character Count: {text.length}</p>
    </div>
  );
};

export default CharacterCounter_08;

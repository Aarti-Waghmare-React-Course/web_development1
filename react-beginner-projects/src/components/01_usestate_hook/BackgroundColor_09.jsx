import React, { useState } from 'react';

const BackgroundColor_09 = () => {
  const [bgColor, setBgColor] = useState("grey");

  return (
    <div style={{ backgroundColor: bgColor, padding: '20px' }}>
      <button onClick={() => setBgColor("Red")}>Red</button>
      <button onClick={() => setBgColor("Yellow")}>Yellow</button>
      <button onClick={() => setBgColor("Green")}>Green</button>
    </div>
  );
};

export default BackgroundColor_09;

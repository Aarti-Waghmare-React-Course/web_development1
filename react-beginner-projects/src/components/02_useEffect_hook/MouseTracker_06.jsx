//  6. Mouse Position Tracker
// Track and display the user's mouse position.
// Concepts: Event listeners with cleanup.

import React from "react";
import { useEffect,useState } from "react";


const MouseTracker_06 = () => {
  const [pos, setPos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMove = (e) => setPos({ x: e.clientX, y: e.clientY });
    window.addEventListener('mousemove', handleMove);
    return () => window.removeEventListener('mousemove', handleMove);
  }, []);

  return <h2>Mouse Position: {pos.x}, {pos.y}</h2>;
};

export default MouseTracker_06;
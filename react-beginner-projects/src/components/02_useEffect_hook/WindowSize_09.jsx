// 9. Window Resize Listener
// Show the width and height of the window and update on resize.
// Concepts: Event listener, useEffect with cleanup.

import React from "react";
import { useEffect,useState } from "react";

const WindowSize_09 = () => {
  const [size, setSize] = useState({ width: window.innerWidth, height: window.innerHeight });

  useEffect(() => {
    const handleResize = () => setSize({ width: window.innerWidth, height: window.innerHeight });
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return <h2>Window Size: {size.width} x {size.height}</h2>;
};

export default WindowSize_09;
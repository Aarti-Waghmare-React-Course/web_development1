// 9: Toggle Dark Mode Using Ref
// Goal: Use useRef to toggle a dark-mode class on a container element, changing its background and text colors without using state.

import React, { useRef } from "react";
import "./darkMode.css";

const DarkModeToggleRef_09 = () => {
  const boxRef = useRef(null);

  const toggleDarkMode = () => {
    boxRef.current.classList.toggle("dark-mode");
  };

  return (
    <div ref={boxRef} className="container">
      <h2>Toggle Dark Mode using Ref</h2>
      <p>This mode toggles by directly changing the DOM class.</p>
      <button onClick={toggleDarkMode}>Toggle Dark Mode</button>
    </div>
  );
};

export default DarkModeToggleRef_09;

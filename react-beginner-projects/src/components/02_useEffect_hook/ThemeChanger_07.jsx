// 7. Theme Changer with Local Storage
// Save and retrieve theme (dark/light) from local storage.
// Concepts: Side effects when state changes.

import React from "react";
import { useEffect,useState } from "react";

const ThemeChanger_07 = () => {
  const [theme, setTheme] = useState(() => localStorage.getItem('theme') || 'light');

  useEffect(() => {
    localStorage.setItem('theme', theme);
  }, [theme]);

  return (
    <div>
      <h2>Current Theme: {theme}</h2>
      <button onClick={() => setTheme(t => t === 'light' ? 'dark' : 'light')}>Toggle Theme</button>
    </div>
  );
};

export default ThemeChanger_07;
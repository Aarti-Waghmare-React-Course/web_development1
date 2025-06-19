// 8. Live Date and Time
// Display current date and time, updating every second.
// Concepts: setInterval, live updates, cleanup.

import React from "react";
import { useEffect,useState } from "react";

const Clock_08 = () => {
  const [time, setTime] = useState(new Date().toLocaleTimeString());

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date().toLocaleTimeString()), 1000);
    return () => clearInterval(timer);
  }, []);

  return <h2>Time: {time}</h2>;
};

export default Clock_08;
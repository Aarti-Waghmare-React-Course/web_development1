// 4: Stopwatch with Start/Stop
// Goal: Build a simple stopwatch that starts, stops, and resets using useRef to hold the timer ID without causing re-renders.

import React, { useState, useRef } from "react";

const StopwatchRef_04 = () => {
  const [time, setTime] = useState(0);
  const timerRef = useRef(null); // Holds interval ID

  const startTimer = () => {
    // Only start if not already running
    if (timerRef.current !== null) return;

    timerRef.current = setInterval(() => {
      setTime((prev) => prev + 1);
    }, 1000);
  };

  const stopTimer = () => {
    clearInterval(timerRef.current);
    timerRef.current = null; // Reset the ref to allow restarting
  };

  const resetTimer = () => {
    stopTimer(); // Stop if running
    setTime(0);
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>Stopwatch</h2>
      <h1>{time} sec</h1>
      <div style={{ gap: "10px" }}>
        <button onClick={startTimer}>Start</button>{" "}
        <button onClick={stopTimer}>Stop</button>{" "}
        <button onClick={resetTimer}>Reset</button>
      </div>
    </div>
  );
};

export default StopwatchRef_04;

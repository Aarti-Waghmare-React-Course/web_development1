# 🧠 React `useEffect` Hook – Beginner Exercises

This repository contains a collection of beginner-friendly React exercises focused on understanding and practicing the `useEffect` Hook. Each example explores a specific concept to help reinforce how and when `useEffect` should be used.

---


## 📘 What is `useEffect`?

The `useEffect` Hook lets you perform **side effects** in function components.


**Common use cases:**
- Fetching data from an API
- Setting up subscriptions (e.g., WebSocket, timers)
- Updating the DOM manually
- Logging and analytics
- Adding or removing event listeners

---


## 🔧 Syntax

```js
useEffect(() => {
  // Side-effect logic here
  return () => {
    // Optional cleanup logic
  };
}, [dependencies]);


📌 Behavior Based on Dependency Array
| Dependency Array | Effect Runs When...                           |
| ---------------- | --------------------------------------------- |
| `[]` (empty)     | Only once, when the component mounts          |
| `[value]`        | When the specified `value` changes            |
| *No array*       | After **every render**                        |
| `[a, b]`         | When either `a` or `b` changes                |
| Includes cleanup | Cleanup runs before next effect or on unmount |


⚠️ Rules of useEffect
1. Call useEffect at the top level of your component (not inside loops or conditions).

2. Use multiple useEffects for unrelated side effects.

3. Always return a cleanup function if you set up a timer, subscription, or event listener.

4. Keep effects simple and focused on one task.


🚀 Getting Started
To run the exercises:

npm install
npm start

Each file contains an independent functional component. You can import and test them individually in a React project (e.g., with Create React App or Vite).


💬 Quick Tips
1. useEffect(() => {}, []) is equivalent to componentDidMount

2. useEffect(() => { return () => {} }, []) mimics componentWillUnmount

3. Cleanups are essential for performance and preventing memory leaks

4. Side effects should be predictable and controlled by the dependency array


👨‍💻 Author
Made with 💻 by [Aarti Waghmare]
If you found this helpful, feel free to ⭐️ the repo!
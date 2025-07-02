# 🧠 React Hook Series: `useRef` Explained with Projects

Welcome to the `useRef` section of the React Hooks series! This folder contains **beginner-friendly projects** (plus bonuses) demonstrating how to use the powerful `useRef` hook in real-world scenarios. Each mini-project includes code that’s simple, practical, and perfect for beginners.

---


## 📌 What is `useRef`?

`useRef` is a **React Hook** that allows you to:
- Create a **mutable reference** that persists across renders.
- Directly access **DOM elements**.
- Store values **without causing re-renders**.

```js
const myRef = useRef(initialValue);


📖 When to Use useRef
✅ Accessing DOM elements directly (e.g., focusing inputs, scrolling)
✅ Storing values that don’t need to trigger a re-render
✅ Keeping a reference to an interval or timeout
✅ Getting previous state or render counts


✨ Syntax & Behavior
const ref = useRef(null); // Initial value
ref.current // Access or mutate the value


=> Unlike useState, changing .current doesn’t cause re-renders.
=> Useful for imperative actions (focus, scroll, timer control, etc.).


🚀 Projects Included
| #  | Project                              Description                                              |
| -- | ------------------------------------ | -------------------------------------------------------- |
| 01 | **FocusInputOnLoad**                 | Automatically focus an input when the page loads         |
| 02 | **PreviousStateTracker**             | Track and display the previous state value               |
| 03 | **ClickCounterRef**                  | Count button clicks without causing re-renders           |
| 04 | **StopwatchRef**                     | Start/stop a stopwatch using setInterval stored in `ref` |
| 05 | **UncontrolledInputRef**             | Read input value without using `useState`                |
| 06 | **AutoScrollToBottom**               | Scroll to the bottom of a container like a chat box      |
| 07 | **RenderCounterRef**                 | Count how many times a component renders                 |
| 08 | **ImageZoomRef**                     | Zoom in on image hover using DOM manipulation            |
| 09 | **DarkModeToggleRef**                | Toggle a dark mode theme using class changes with `ref`  |
| 10 | **ResetFormRef** | Reset a form's values                    |


💬 Notes & Tips
ref.current is mutable and doesn’t trigger re-renders. Great for storing values like:

DOM nodes (<input>, <div>)

Previous state or timer IDs

External libraries' instances (e.g., charts, maps)

Use forwardRef to pass a ref from parent to child.

Don't misuse useRef for things better suited for useState.

# 🚀 React `useState` Hook — Quick Reference & Practice Repo

This repository contains beginner-friendly React exercises focused **only on the `useState` hook**. It’s designed as a quick learning resource and practice playground for understanding and mastering `useState` in React functional components.

---

## 📌 What is `useState`?

- `useState` is a **Hook** introduced in React 16.8 to **add state** to functional components.
- It lets you declare a **state variable** and a function to update it, **without using class components**.

---

## ⚙️ How to Import `useState`

```js
import React, { useState } from 'react';
or just

import { useState } from 'react';


🧠 State in React (Simple Explanation)
- State is a plain JavaScript object or value that holds information that influences the output of the render.
- When state changes, the component re-renders to reflect the new data.
- useState manages one piece of state at a time (can be a primitive, object, array, etc).


📝 useState Syntax & Usage

const [stateVariable, setStateFunction] = useState(initialValue);

stateVariable — current value of the state
setStateFunction — function used to update the state
initialValue — the starting value of the state variable


💡 Concepts & Notes
| Concept                 | Explanation                                                                              |
| ----------------------- | ---------------------------------------------------------------------------------------- |
| **Initial State**       | Pass initial value to `useState` (e.g. `0`, `''`, `false`)                               |
| **State Setter**        | Always update state via setter function (`setState(...)`)                                |
| **Functional Update**   | To update state based on previous state, use a function:<br>`setCount(prev => prev + 1)` |
| **Multiple State Vars** | Use multiple `useState` calls for different state variables                              |
| **State is Local**      | State belongs to the component it’s declared in                                          |
| **Re-rendering**        | State update triggers component re-render                                                |
| **Do NOT mutate state** | Always create new values (e.g. copy arrays/objects before update)                        |


🎯 Why use useState?
- Enables dynamic interactive UI
- Keeps component stateful without classes
- Simplifies React component design
- Useful for handling inputs, toggles, counters, and more


✅ Examples Included in This Repo
| #  | Example Name              | Description                                 |
| -- | ------------------------- | ------------------------------------------- |
| 1  | Counter App               | Basic increment counter                     |
| 2  | Disable Button            | Toggle button disabled state                |
| 3  | Change Button Color       | Change button color on click                |
| 4  | Double the Number         | Multiply a number by 2 on button click      |
| 5  | Toggle Button Text        | Switch button text like "ON" / "OFF"        |
| 6  | Text Mirror               | Display input text in real time below input |
| 7  | Show/Hide Text            | Toggle visibility of some text              |
| 8  | Character Counter         | Count characters typed in an input          |
| 9  | Background Color Switcher | Change background color on button click     |
| 10 | Like Button               | Click to increase like count                |


📁 Project Structure
Each example is contained in its own folder with a simple React component demonstrating the useState usage.


🚀 How to Run This Repo Locally
Clone this repo:

git clone https:https://github.com/Aarti-Waghmare-React-Course/web_development1.git

Go to the project folder: react-beginner-project

cd react-beginner-project

Install dependencies:

npm install
or

yarn
Start the development server:

npm start
or


yarn start
Open http://localhost:3000 in your browser.


import React from "react";
import { useState } from "react";
import "./App.css";

const App = () => {
  const [count, setCount] = useState(0);
  return (
    <div className="container">
      <p className="header">Hi, I have made a counter.</p>
      <div className="counter">{count}</div>
      <div className="buttons">
        <button
          className="increment"
          onClick={() => {
            setCount(count + 1);
          }}
        >
          Increment
        </button>
        <button
          className="decrement"
          onClick={() => {
            setCount(count - 1);
          }}
        >
          Decrement
        </button>
      </div>
    </div>
  );
};

export default App;

import React, { useState } from "react";
import "../src/styles/Counter.scss";

const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <div className='container'>
      <div className='content-container'>
        <label className='count-label'>{count}</label>
        <div>
          <button
            className={"button"}
            onClick={() => {
              setCount(count + 1);
            }}
          >
            Increment
          </button>
          <button
            className={"button"}
            onClick={() => {
              setCount(count - 1);
            }}
          >
            Decrement
          </button>
        </div>
      </div>
    </div>
  );
};

export default Counter;

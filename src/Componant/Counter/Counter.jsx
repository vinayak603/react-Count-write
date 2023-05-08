import React from 'react';
import './style.css';
import { useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);
  const onClick = () => {
    setCount(count + 2);
  };
  const ondec = () => {
    setCount(count - 1);
  };
  const Reset = () => {
    setCount(0);
  };
  return (
    <>
      <h3> {count} </h3>
      <div>
        <button onClick={onClick}> + </button>
        <button onClick={ondec}> - </button>
        <button onClick={Reset}> Reset </button>
      </div>
    </>
  );
};
export default Counter;

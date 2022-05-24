import React, { useRef } from "react";

const Count = React.memo(() => {
  const [count, setCount] = React.useState(0);
  const renders = useRef(0);
  return (
    <div className="App">
      <div>count: {count}</div>
      <div>renders: {renders.current++}</div>
      <button onClick={() => setCount((c) => c + 1)}>increment</button>
    </div>
  );
});

export default Count;

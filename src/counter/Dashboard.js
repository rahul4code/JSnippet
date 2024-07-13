import React, { useState } from "react";

const DashboardCounter = () => {
  const [counter, setCounter] = useState(0);

  return (
    <div>
      <p>{counter}</p>
      <button onClick={() => setCounter((prev) => ++prev)}>Increment</button>
      <button onClick={() => setCounter((prev) => --prev)}>Decrement</button>
    </div>
  );
};

export default DashboardCounter;
